

// "use client"

// import type React from "react"

// import { useState, useRef } from "react"
// import { Download, RefreshCw, Plus, X } from "lucide-react"
// import { jsPDF } from "jspdf"
// import DownloadModal from "./downloadModal"
// import Image from "next/image"
// import { useGetStoryByIdQuery } from "@/redux/api/storyApi"
// import { useSearchParams } from "next/navigation"


// interface StoryImage {
//   id: string
//   data: string
//   position: number
// }

// export default function PreviewStoryPage() {
//   const params = useSearchParams();

//   const storyId = params.get("storyId")
//   const {data} = useGetStoryByIdQuery(storyId || '');
//   console.log("storyid", storyId)
//   console.log("id dadta ", data)
  
//   // Dummy data - replace with RTK Query later
//   const [storyData] = useState({
//     id: "1",
//     author: "Andrew Tudehope",
//     coverImage: "/book-covers/sun-cover.jpg", // Set to null to test without cover
//     content: [
//       "Lorem ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl.",
//     ],
//     remainingRegenerations: 3,
//     createdAt: "2025",
//   })

//   const [coverPhoto, setCoverPhoto] = useState<string | null>(null)
//   const [storyImages, setStoryImages] = useState<StoryImage[]>([])
//   const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
//   const [isDownloading, setIsDownloading] = useState(false)
//   const fileInputRef = useRef<HTMLInputElement>(null)
//   const imageInputRef = useRef<HTMLInputElement>(null)

//   // Handle cover photo upload
//   const handleCoverPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onload = (event) => {
//         setCoverPhoto(event.target?.result as string)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   // Handle story image upload
//   const handleStoryImageChange = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onload = (event) => {
//         const newImage: StoryImage = {
//           id: Date.now().toString(),
//           data: event.target?.result as string,
//           position,
//         }
//         setStoryImages([...storyImages, newImage])
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   // Remove image
//   const removeImage = (imageId: string) => {
//     setStoryImages(storyImages.filter((img) => img.id !== imageId))
//   }

//   // Enhanced download with images
//   const handleDownloadConfirm = async () => {
//     setIsDownloading(true)
//     try {
//       const doc = new jsPDF()
//       const pageHeight = doc.internal.pageSize.getHeight()
//       const pageWidth = doc.internal.pageSize.getWidth()
//       const margins = 15
//       const maxWidth = pageWidth - 2 * margins
//       let yPosition = margins

//       if (coverPhoto) {
//         try {
//           doc.addImage(coverPhoto, "JPEG", margins, yPosition, pageWidth - 2 * margins, 100)
//           yPosition += 110
//         } catch (error) {
//           console.error("Error adding cover photo:", error)
//         }
//       }

//       // Add title
//       doc.setFontSize(20)
//       doc.setFont("helvetica", "bold")
//       doc.text("Your Story", pageWidth / 2, yPosition, { align: "center" })
//       yPosition += 15

//       // Add author
//       doc.setFontSize(11)
//       doc.setFont("helvetica", "italic")
//       doc.text(`Inspired by the writing of ${storyData.author}`, pageWidth / 2, yPosition, { align: "center" })
//       yPosition += 12

//       doc.setFontSize(11)
//       doc.setFont("helvetica", "normal")

//       storyData.content.forEach((paragraph, paragraphIndex) => {
//         // Check if there's an image for this position
//         const imagesAtPosition = storyImages.filter((img) => img.position === paragraphIndex)

//         // Add images before paragraph
//         imagesAtPosition.forEach((image) => {
//           if (yPosition + 60 > pageHeight - margins) {
//             doc.addPage()
//             yPosition = margins
//           }
//           try {
//             doc.addImage(image.data, "JPEG", margins, yPosition, pageWidth - 2 * margins, 50)
//             yPosition += 60
//           } catch (error) {
//             console.error("Error adding story image:", error)
//           }
//         })

//         // Add paragraph text
//         const lines = doc.splitTextToSize(paragraph, maxWidth)
//         lines.forEach((line: string | string[]) => {
//           if (yPosition + 7 > pageHeight - margins) {
//             doc.addPage()
//             yPosition = margins
//           }
//           doc.text(line, margins, yPosition)
//           yPosition += 7
//         })

//         yPosition += 5
//       })

//       // Save PDF
//       doc.save("story.pdf")
//     } catch (error) {
//       console.error("Error generating PDF:", error)
//       alert("Error downloading PDF. Please try again.")
//     } finally {
//       setIsDownloading(false)
//       setIsDownloadModalOpen(false)
//     }
//   }

//   const handleRegenerateStory = () => {
//     if (storyData.remainingRegenerations <= 0) {
//       alert("No regenerations remaining")
//       return
//     }
//     alert("Regenerate story - will be implemented with backend API")
//   }

//   return (
//     <div className="bg-[#F7F4EF] min-h-[calc(84vh-4rem)]">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="p-6">
//           {/* Title */}
//           <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Preview Your Story</h1>

//           <div className="  ">
//             <div className="flex items-center justify-between">
             
//               {coverPhoto ? (
//                 <div className="relative w-24 h-32 rounded-lg overflow-hidden">
//                   <Image src={coverPhoto || "/placeholder.svg"} alt="Cover" width={400} height={400} className="w-full h-full object-cover" />
//                   <button
//                     onClick={() => setCoverPhoto(null)}
//                     className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity"
//                   >
//                     <X className="w-6 h-6 text-white" />
//                   </button>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => fileInputRef.current?.click()}
//                   className="px-6 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                 >
//                   <Plus className="w-5 h-5" />
//                   Add Cover Photo
//                 </button>
//               )}
//             </div>
//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               onChange={handleCoverPhotoChange}
//               className="hidden"
//             />
//           </div>

//           {/* Author Credit */}
//           {storyData.author && (
//             <p className="text-center text-gray-600 italic mb-8">Inspired by the writing of {storyData.author}</p>
//           )}

//           {/* Story Content with Image Upload */}
//           <div className="space-y-8 mb-8">
//             {storyData.content.map((paragraph, index) => (
//               <div key={index} className="space-y-4">
//                 {/* Content Section */}
//                 <div className="">
//                   <div className="flex items-start justify-between mb-4">
//                     <span className="text-xs font-semibold text-gray-500 uppercase">Paragraph {index + 1}</span>
//                     <button
//                       onClick={() => imageInputRef.current?.click()}
//                       className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded transition-colors flex items-center gap-1"
//                     >
//                       <Plus className="w-4 h-4" />
//                       Add Image
//                     </button>
//                   </div>
//                   <p className="text-justify h-[400px] bg-gray-200 rounded-lg overflow-y-auto  p-8">{paragraph}</p>
//                   <input
//                     ref={imageInputRef}
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleStoryImageChange(e, index)}
//                     className="hidden"
//                   />
//                 </div>

//                 {/* Display Images for this paragraph */}
//                 {storyImages
//                   .filter((img) => img.position === index)
//                   .map((image) => (
//                     <div key={image.id} className="relative bg-gray-100 p-4 rounded-lg overflow-hidden group">
//                       <Image
//                         src={image.data || "/placeholder.svg"}
//                         alt={`Story image ${image.id}`}
//                         width={400}
//                         height={400}
//                         className="w-full h-64 object-cover rounded"
//                       />
//                       <button
//                         onClick={() => removeImage(image.id)}
//                         className="absolute top-2 right-2 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                       >
//                         <X className="w-4 h-4" />
//                       </button>
//                       <p className="text-xs text-gray-500 mt-2">Image will appear before this paragraph in PDF</p>
//                     </div>
//                   ))}
//               </div>
//             ))}
//           </div>

//           {/* Bottom Actions */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
//             {/* Regenerate Button */}
//             <div className="flex flex-col gap-2">
//               <button
//                 onClick={handleRegenerateStory}
//                 disabled={storyData.remainingRegenerations <= 0}
//                 className="px-6 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//               >
//                 <RefreshCw className="w-4 h-4" />
//                 Regenerate Story
//               </button>
//               <p className="text-xs text-gray-500">{storyData.remainingRegenerations} regenerations remaining</p>
//             </div>

//             <button
//               onClick={() => setIsDownloadModalOpen(true)}
//               className="px-6 py-3 bg-[#E8B864] hover:bg-[#D4A656] text-gray-900 font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
//             >
//               <Download className="w-5 h-5" />
//               Download Your Story
//             </button>
//           </div>
//         </div>
//       </div>

//       <DownloadModal
//         isOpen={isDownloadModalOpen}
//         onClose={() => setIsDownloadModalOpen(false)}
//         onConfirm={handleDownloadConfirm}
//         isLoading={isDownloading}
//       />
//     </div>
//   )
// }






















"use client";

import React, { useState, useRef } from "react";
import { Download, RefreshCw, Plus, X } from "lucide-react";
import { jsPDF } from "jspdf";
import DownloadModal from "./downloadModal";
import Image from "next/image";
import { useGetStoryByIdQuery } from "@/redux/api/storyApi";
import { useSearchParams } from "next/navigation";

interface StoryImage {
  id: string;
  data: string;
  position: number; // maps to chapter index
}

interface Chapter {
  chapterNo: number;
  title: string;
  content: string;
}

export default function PreviewStoryPage() {
  const params = useSearchParams();
  const storyId = params.get("storyId");
  const { data, isLoading, error } = useGetStoryByIdQuery(storyId || "", {
    skip: !storyId,
  });

  const [coverPhoto, setCoverPhoto] = useState<string | null>(null);
  const [storyImages, setStoryImages] = useState<StoryImage[]>([]);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  console.log("story", data)

  // Extract real data
  const story = data?.data ;
  const chapters: Chapter[] = story?.chapters ?? [];
  const author = story?.title?.split(":")[0]?.trim() || "Your Life";
  const remainingRegenerations = 3; // You can add this to backend later

  // Handle cover photo upload
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

  // Handle story image upload (per chapter)
  const handleStoryImageChange = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage: StoryImage = {
          id: Date.now().toString(),
          data: event.target?.result as string,
          position,
        };
        setStoryImages((prev) => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove image
  const removeImage = (imageId: string) => {
    setStoryImages((prev) => prev.filter((img) => img.id !== imageId));
  };

  // PDF Download with images
  const handleDownloadConfirm = async () => {
    setIsDownloading(true);
    try {
      const doc = new jsPDF();
      const pageHeight = doc.internal.pageSize.getHeight();
      const pageWidth = doc.internal.pageSize.getWidth();
      const margins = 15;
      const maxWidth = pageWidth - 2 * margins;
      let yPosition = margins;

      // Cover Photo
      if (coverPhoto) {
        try {
          doc.addImage(coverPhoto, "JPEG", margins, yPosition, pageWidth - 2 * margins, 100);
          yPosition += 110;
        } catch (err) {
          console.error("Cover image error:", err);
        }
      }

      // Title
      doc.setFontSize(22);
      doc.setFont("helvetica", "bold");
      doc.text(story?.title || "Your Life Story", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 15;

      // Author
      doc.setFontSize(11);
      doc.setFont("helvetica", "italic");
      doc.text(`Inspired by the life of ${author}`, pageWidth / 2, yPosition, { align: "center" });
      yPosition += 15;

      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");

      // Chapters
      chapters.forEach((chapter, index) => {
        const imagesAtPosition = storyImages.filter((img) => img.position === index);

        // Add images before chapter
        imagesAtPosition.forEach((image) => {
          if (yPosition + 60 > pageHeight - margins) {
            doc.addPage();
            yPosition = margins;
          }
          try {
            doc.addImage(image.data, "JPEG", margins, yPosition, pageWidth - 2 * margins, 50);
            yPosition += 60;
          } catch (err) {
            console.error("Image error:", err);
          }
        });

        // Chapter Title
        if (yPosition + 10 > pageHeight - margins) {
          doc.addPage();
          yPosition = margins;
        }
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text(chapter.title, margins, yPosition);
        yPosition += 10;

        // Chapter Content
        const lines = doc.splitTextToSize(chapter.content, maxWidth);
        lines.forEach((line: string) => {
          if (yPosition + 7 > pageHeight - margins) {
            doc.addPage();
            yPosition = margins;
          }
          doc.setFontSize(11);
          doc.setFont("helvetica", "normal");
          doc.text(line, margins, yPosition);
          yPosition += 7;
        });

        yPosition += 10; // Space between chapters
      });

      doc.save(`${story?.title || "story"}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
      setIsDownloadModalOpen(false);
    }
  };

  const handleRegenerateStory = () => {
    if (remainingRegenerations <= 0) {
      alert("No regenerations remaining");
      return;
    }
    alert("Regenerate story - will be implemented with backend API");
  };

  // Loading State
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

  // Error State
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
    <div className="bg-[#F7F4EF] min-h-[calc(84vh-4rem)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="p-6">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Preview Your Story
          </h1>

          {/* Cover Photo */}
          <div className="flex justify-center mb-6">
            {coverPhoto ? (
              <div className="relative w-32 h-44 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={coverPhoto}
                  alt="Cover"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setCoverPhoto(null)}
                  className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Cover Photo
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleCoverPhotoChange}
              className="hidden"
            />
          </div>

          {/* Author Credit */}
          <p className="text-center text-gray-600 italic mb-8">
            Inspired by the life of {author}
          </p>

          {/* Chapters with Image Upload */}
          <div className="space-y-10 mb-8">
            {chapters.map((chapter, index) => (
              <div key={index} className="space-y-4">
                {/* Chapter Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase">
                    Chapter {chapter.chapterNo}
                  </span>
                  <button
                    onClick={() => imageInputRef.current?.click()}
                    className="px-3 py-1.5 bg-[#314B79] hover:bg-green-700 text-white text-sm font-medium rounded transition-colors flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Image
                  </button>
                </div>

                {/* Chapter Title */}
                <h3 className="text-xl font-bold text-[#314B79]">{chapter.title}</h3>

                {/* Chapter Content */}
                <div className="bg-white rounded-lg p-6 shadow-sm h-64 overflow-y-auto text-justify text-gray-800">
                  {chapter.content}
                </div>

                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleStoryImageChange(e, index)}
                  className="hidden"
                />

                {/* Display Images for this chapter */}
                {storyImages
                  .filter((img) => img.position === index)
                  .map((image) => (
                    <div
                      key={image.id}
                      className="relative bg-gray-100 p-4 rounded-lg overflow-hidden group shadow-sm"
                    >
                      <Image
                        src={image.data}
                        alt={`Chapter ${chapter.chapterNo} image`}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover rounded"
                      />
                      <button
                        onClick={() => removeImage(image.id)}
                        className="absolute top-2 right-2 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <p className="text-xs text-gray-500 mt-2">
                        Image will appear before this chapter in PDF
                      </p>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
            {/* Regenerate */}
            <div className="flex flex-col gap-2">
              <button
                onClick={handleRegenerateStory}
                disabled={remainingRegenerations <= 0}
                className="px-6 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium disabledopacity-50 disabledcursor-not-allowed flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Regenerate Story
              </button>
              <p className="text-xs text-gray-500">{remainingRegenerations} regenerations remaining</p>
            </div>

            {/* Download */}
            <button
              onClick={() => setIsDownloadModalOpen(true)}
              className="px-6 py-3 bg-[#E8B864] hover:bg-[#D4A656] text-gray-900 font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <Download className="w-5 h-5" />
              Download Your Story
            </button>
          </div>
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