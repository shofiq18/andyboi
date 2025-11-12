


"use client";

import React, { useState, useRef } from "react";
import { Download, RefreshCw, Plus, X, Upload } from "lucide-react";
import { jsPDF } from "jspdf";
import DownloadModal from "./downloadModal";
import Image from "next/image";
import { useGetStoryByIdQuery, useRegenerateStoryMutation } from "@/redux/api/storyApi";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";

interface StoryImage {
  id: string;
  data: string;
  chapterIndex: number;
}

interface Chapter {
  chapterNo: number;
  title: string;
  content: string;
}

export default function PreviewStoryPage() {
  const params = useSearchParams();
  const router = useRouter();
  const storyId = params.get("storyId");
  const { data, isLoading, error, refetch } = useGetStoryByIdQuery(storyId || "", {
    skip: !storyId,
  });
  const [regenerateStory, { isLoading: isRegenerating }] = useRegenerateStoryMutation();

  const [coverPhoto, setCoverPhoto] = useState<string | null>(null);
  const [chapterImages, setChapterImages] = useState<StoryImage[]>([]);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const chapterImageRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

  const story = data?.data;
  const chapters: Chapter[] = story?.chapters ?? [];
  const author = story?.title?.split(":")[0]?.trim() || "Your Life";
  const generateCount = story?.generateCount ?? 0;
  const maxRegenerations = 3;
  const remainingRegenerations = Math.max(maxRegenerations - generateCount, 0);

  // Handle cover photo
  const handleCoverPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverPhoto(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle chapter image
  const handleChapterImageChange = (e: React.ChangeEvent<HTMLInputElement>, chapterIndex: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage: StoryImage = {
          id: Date.now().toString(),
          data: event.target?.result as string,
          chapterIndex,
        };
        setChapterImages((prev) => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove chapter image
  const removeChapterImage = (imageId: string) => {
    setChapterImages((prev) => prev.filter((img) => img.id !== imageId));
  };

  // Enhanced PDF with book-like styling
  const handleDownloadConfirm = async () => {
    setIsDownloading(true);
    try {
      const doc = new jsPDF();
      const pageHeight = doc.internal.pageSize.getHeight();
      const pageWidth = doc.internal.pageSize.getWidth();
      const margins = 20;
      const maxWidth = pageWidth - 2 * margins;
      let yPosition = margins;

      // Cover Page
      if (coverPhoto) {
        try {
          doc.addImage(coverPhoto, "JPEG", 0, 0, pageWidth, pageHeight);
          doc.addPage();
          yPosition = margins;
        } catch (err) {
          console.error("Cover image error:", err);
        }
      } else {
        // Default cover page with text wrapping
        doc.setFillColor(49, 75, 121); // #314B79
        doc.rect(0, 0, pageWidth, pageHeight, "F");
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(32);
        doc.setFont("helvetica", "bold");
        
        // Split title into multiple lines if too long
        const coverTitle = story?.title || "Your Life Story";
        const titleLines = doc.splitTextToSize(coverTitle, pageWidth - 40);
        const titleStartY = pageHeight / 2 - (titleLines.length * 12);
        
        titleLines.forEach((line: string, index: number) => {
          doc.text(line, pageWidth / 2, titleStartY + (index * 12), { 
            align: "center" 
          });
        });
        
        doc.setFontSize(14);
        doc.setFont("helvetica", "italic");
        
        // Split author name if too long
        const authorText = `by ${author}`;
        const authorLines = doc.splitTextToSize(authorText, pageWidth - 40);
        const authorStartY = titleStartY + (titleLines.length * 12) + 15;
        
        authorLines.forEach((line: string, index: number) => {
          doc.text(line, pageWidth / 2, authorStartY + (index * 8), { 
            align: "center" 
          });
        });
        
        doc.addPage();
        doc.setTextColor(0, 0, 0);
        yPosition = margins;
      }

      // Title Page with text wrapping
      yPosition = pageHeight / 3;
      doc.setFontSize(28);
      doc.setFont("helvetica", "bold");
      
      // Split title into multiple lines if too long
      const titlePageTitle = story?.title || "Your Life Story";
      const titlePageLines = doc.splitTextToSize(titlePageTitle, pageWidth - 40);
      
      titlePageLines.forEach((line: string, index: number) => {
        doc.text(line, pageWidth / 2, yPosition + (index * 12), { 
          align: "center" 
        });
      });
      
      yPosition += (titlePageLines.length * 12) + 15;
      doc.setFontSize(14);
      doc.setFont("helvetica", "italic");
      doc.setTextColor(100, 100, 100);
      
      // Split subtitle if too long
      const subtitleText = `Inspired by the life of ${author}`;
      const subtitleLines = doc.splitTextToSize(subtitleText, pageWidth - 40);
      
      subtitleLines.forEach((line: string, index: number) => {
        doc.text(line, pageWidth / 2, yPosition + (index * 8), { 
          align: "center" 
        });
      });
      
      doc.addPage();
      yPosition = margins;
      doc.setTextColor(0, 0, 0);

      // Chapters
      chapters.forEach((chapter, index) => {
        // Chapter images
        const imagesForChapter = chapterImages.filter((img) => img.chapterIndex === index);
        
        imagesForChapter.forEach((image) => {
          if (yPosition > margins + 10) {
            doc.addPage();
            yPosition = margins;
          }
          
          try {
            const imgHeight = 120;
            doc.addImage(
              image.data, 
              "JPEG", 
              margins, 
              yPosition, 
              maxWidth, 
              imgHeight
            );
            yPosition += imgHeight + 15;
            
            if (yPosition > pageHeight - margins - 50) {
              doc.addPage();
              yPosition = margins;
            }
          } catch (err) {
            console.error("Chapter image error:", err);
          }
        });

        // Chapter number
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 100, 100);
        doc.text(`CHAPTER ${chapter.chapterNo}`, margins, yPosition);
        yPosition += 12;

        // Chapter title
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(49, 75, 121); // #314B79
        const titleLines = doc.splitTextToSize(chapter.title, maxWidth);
        titleLines.forEach((line: string) => {
          if (yPosition + 10 > pageHeight - margins) {
            doc.addPage();
            yPosition = margins;
          }
          doc.text(line, margins, yPosition);
          yPosition += 10;
        });
        
        yPosition += 8;

        // Decorative line
        doc.setDrawColor(232, 184, 100); // #E8B864
        doc.setLineWidth(0.5);
        doc.line(margins, yPosition, margins + 40, yPosition);
        yPosition += 10;

        // Chapter content
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(40, 40, 40);
        
        const paragraphs = chapter.content.split('\n\n');
        
        paragraphs.forEach((paragraph) => {
          const lines = doc.splitTextToSize(paragraph, maxWidth);
          
          lines.forEach((line: string) => {
            if (yPosition + 8 > pageHeight - margins) {
              doc.addPage();
              yPosition = margins;
            }
            doc.text(line, margins, yPosition);
            yPosition += 6;
          });
          
          yPosition += 8; // Space between paragraphs
        });

        // New page for next chapter (except last)
        if (index < chapters.length - 1) {
          doc.addPage();
          yPosition = margins;
        }
      });

      // Footer on last page
      doc.setFontSize(9);
      doc.setFont("helvetica", "italic");
      doc.setTextColor(150, 150, 150);
      doc.text(
        `Inspired by the life of ${author}`, 
        pageWidth / 2, 
        pageHeight - 15, 
        { align: "center" }
      );

      doc.save(`${story?.title || "My-Life-Story"}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
      setIsDownloadModalOpen(false);
    }
  };

  const handleRegenerateStory = async () => {
    if (remainingRegenerations <= 0) {
      toast.info("No free regenerations left. Choose a word package to continue.");
      setTimeout(() => {
        router.push(`/choose-word?storyId=${storyId}`);
      }, 800);
      return;
    }

    try {
      const result = await regenerateStory(storyId!).unwrap();
      toast.success("Story regenerated successfully!");

      if (result.generateCount >= maxRegenerations) {
        toast.error("Free regenerations used. Redirecting to choose word package...");
        setTimeout(() => {
          router.push(`/choose-word?storyId=${storyId}`);
        }, 3000);
      } else {
        refetch();
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message = err?.data?.message || "Failed to regenerate story.";
      toast.error(message);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-[#F7F4EF] min-h-[calc(84vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#314B79] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your story...</p>
        </div>
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="bg-[#F7F4EF] min-h-[calc(84vh-4rem)] flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <p className="text-red-600 font-medium">Failed to load story.</p>
          <p className="text-gray-600 mt-2">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F4EF] min-h-[calc(84vh-4rem)] py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-[#314B79] mb-4">
          Preview Your Story
        </h1>
        <p className="text-center text-gray-600 italic mb-8">
          Inspired by the life of {author}
        </p>

        {/* Book Container */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Cover Section */}
          <div className="relative bg-gradient-to-br from-[#314B79] to-[#4A6FA5] p-12 text-center">
            {coverPhoto ? (
              <div className="relative mx-auto w-48 h-64 rounded-lg overflow-hidden shadow-2xl group">
                <Image
                  src={coverPhoto}
                  alt="Cover"
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setCoverPhoto(null)}
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                >
                  <X className="w-8 h-8 text-white" />
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  {story?.title || "Your Life Story"}
                </h2>
                <p className="text-xl text-white/80 italic">by {author}</p>
                <button
                  onClick={() => coverInputRef.current?.click()}
                  className="mx-auto px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-green-600 rounded-lg text-white font-medium transition-all flex items-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  Add Cover Photo
                </button>
              </div>
            )}
            <input
              ref={coverInputRef}
              type="file"
              accept="image/*"
              onChange={handleCoverPhotoChange}
              className="hidden"
            />
          </div>

          {/* Chapters */}
          <div className="p-8 md:p-12 space-y-12">
            {chapters.map((chapter, index) => (
              <div key={index} className="space-y-6">
                {/* Chapter Header */}
                <div className="border-b-2 border-[#E8B864] pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Chapter {chapter.chapterNo}
                      </p>
                      <h3 className="text-2xl font-bold text-[#314B79]">
                        {chapter.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => chapterImageRefs.current[index]?.click()}
                      className="px-4 py-2 bg-[#314B79] hover:bg-[#4A6FA5] text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2 shadow-md"
                    >
                      <Plus className="w-4 h-4" />
                      Add Image
                    </button>
                  </div>
                </div>

                {/* Chapter Images */}
                {chapterImages
                  .filter((img) => img.chapterIndex === index)
                  .map((image) => (
                    <div
                      key={image.id}
                      className="relative rounded-lg overflow-hidden shadow-lg group"
                    >
                      <Image
                        src={image.data}
                        alt={`Chapter ${chapter.chapterNo} image`}
                        width={800}
                        height={500}
                        className="w-full h-80 object-cover"
                      />
                      <button
                        onClick={() => removeChapterImage(image.id)}
                        className="absolute top-4 right-4 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-white text-sm">
                          This image will appear in your PDF before Chapter {chapter.chapterNo}
                        </p>
                      </div>
                    </div>
                  ))}

                <input
                  ref={(el) => {chapterImageRefs.current[index] = el}}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleChapterImageChange(e, index)}
                  className="hidden"
                />

                {/* Chapter Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-800 leading-relaxed text-justify whitespace-pre-line">
                    {chapter.content}
                  </p>
                </div>

                {/* Chapter Separator */}
                {index < chapters.length - 1 && (
                  <div className="flex items-center gap-4 py-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    <div className="w-2 h-2 rounded-full bg-[#E8B864]"></div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-xl p-6 shadow-lg">
          {/* Regenerate */}
          <div className="flex flex-col gap-2">
            <button
              onClick={handleRegenerateStory}
              disabled={isRegenerating}
              className={`
                px-6 py-3 border-2 border-green-600 rounded-lg cursor-pointer text-[#314B79] 
                hover:bg-[#314B79] hover:text-white transition-all font-semibold 
                disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2
                ${isRegenerating ? 'animate-pulse' : ''}
              `}
            >
              {isRegenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Regenerating...
                </>
              ) : (
                <>
                  
                  {remainingRegenerations <= 0 ? <span className="text-red-400 hover:text-white">$ Pay again </span> : <><RefreshCw className="w-5 h-5" /> Regenerate Story</>}
                  
                </>
              )}
            </button>
            <p className="text-sm text-gray-500 text-center">
              {remainingRegenerations}  regeneration{remainingRegenerations !== 1 ? "s" : ""} left
            </p>
          </div>

          {/* Download */}
          <button
            onClick={() => setIsDownloadModalOpen(true)}
            className="px-8 py-3 bg-[#E8B864] hover:bg-[#D4A656] text-gray-900 cursor-pointer font-bold rounded-lg transition-colors flex items-center gap-3 shadow-md text-lg"
          >
            <Download className="w-6 h-6" />
            Download Story as PDF
          </button>
        </div>
      </div>

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        onConfirm={handleDownloadConfirm}
        isLoading={isDownloading}
      />
    </div>
  );
}