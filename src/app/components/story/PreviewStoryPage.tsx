






// "use client"

// import { useState } from "react"
// import { Download, RefreshCw } from "lucide-react"
// import { jsPDF } from "jspdf"

// export default function PreviewStoryPage() {
//   // Dummy data - replace with RTK Query later
//   const [storyData] = useState({
//     id: "1",
//     author: "Andrew Tudehope",
//     coverImage: "/book-covers/sun-cover.jpg", // Set to null to test without cover
//     content: [
//       "Lorem ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapienipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien  volutpat o...",
//     ],
//     remainingRegenerations: 3,
//     createdAt: "2025",
//   })

//   const handleDownload = () => {
//     const doc = new jsPDF()
//     const pageHeight = doc.internal.pageSize.getHeight()
//     const pageWidth = doc.internal.pageSize.getWidth()
//     const margins = 15
//     const maxWidth = pageWidth - 2 * margins
//     let yPosition = margins

//     // Add title
//     doc.setFontSize(20)
//     doc.setFont("helvetica", "bold")
//     doc.text("Your Story", pageWidth / 2, yPosition, { align: "center" })
//     yPosition += 15

//     // Add author
//     doc.setFontSize(11)
//     doc.setFont("helvetica", "italic")
//     doc.text(`Inspired by the writing of ${storyData.author}`, pageWidth / 2, yPosition, { align: "center" })
//     yPosition += 12

//     // Add content
//     doc.setFontSize(11)
//     doc.setFont("helvetica", "normal")

//     storyData.content.forEach((paragraph) => {
//       // Split text to fit page width
//       const lines = doc.splitTextToSize(paragraph, maxWidth)

//       // Check if content fits on current page, if not add new page
//       lines.forEach((line: string | string[]) => {
//         if (yPosition + 7 > pageHeight - margins) {
//           doc.addPage()
//           yPosition = margins
//         }
//         doc.text(line, margins, yPosition)
//         yPosition += 7
//       })

//       // Add spacing between paragraphs
//       yPosition += 5
//     })

//     // Save the PDF
//     doc.save("story.pdf")
//   }

//   const handleAddCoverPhoto = () => {
//     alert("Add cover photo - will be implemented with backend API")
//   }

//   const handleRegenerateStory = () => {
//     if (storyData.remainingRegenerations <= 0) {
//       alert("No regenerations remaining")
//       return
//     }
//     alert("Regenerate story - will be implemented with backend API")
//   }

//   return (
//     <div className=" bg-[#F7F4EF] min-h-[calc(84vh-4rem)]">
//       <div className=" max-w-6xl mx-auto  px-4">
//         <div className=" ">
//           {/* Main Card */}
//           <div className=" p-6  ">
//             {/* Title */}
//             <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Preview Your Story</h1>

//             {/* Add Cover Photo Button */}
//             <div className="mb-6">
//               <button
//                 onClick={handleAddCoverPhoto}
//                 className="px-6 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
//               >
//                 Add Cover Photo
//               </button>
//             </div>

//             {/* Author Credit */}
//             {storyData.author && (
//               <p className="text-center text-gray-600 italic mb-8">Inspired by the writing of {storyData.author}</p>
//             )}
//             {/* Story Content */}
//             <div className="space-y-5 mb-8 text-gray-700 leading-relaxed">
//               {storyData.content.map((paragraph, index) => (
//                 <p key={index} className="text-justify h-[400px] bg-gray-200 rounded-lg overflow-y-auto  p-8">
//                   {paragraph}
//                 </p>
//               ))}
//             </div>

//             {/* Bottom Actions */}
//             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 ">
//               {/* Regenerate Button */}
//               <div className="flex flex-col gap-2">
//                 <button
//                   onClick={handleRegenerateStory}
//                   disabled={storyData.remainingRegenerations <= 0}
//                   className="px-6 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                 >
//                   <RefreshCw className="w-4 h-4" />
//                   Regenerate Story
//                 </button>
//                 <p className="text-xs text-gray-500">{storyData.remainingRegenerations} regenerations remaining</p>
//               </div>

//               {/* Download Button */}
//               <button
//                 onClick={handleDownload}
//                 className="px-6 py-3 bg-[#E8B864] hover:bg-[#D4A656] text-gray-900 font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
//               >
//                 <span className="text-lg">
//                   <Download />
//                 </span>
//                 Download Your Story
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }















"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Download, RefreshCw, Plus, X } from "lucide-react"
import { jsPDF } from "jspdf"
import DownloadModal from "./downloadModal"
import Image from "next/image"


interface StoryImage {
  id: string
  data: string
  position: number
}

export default function PreviewStoryPage() {
  // Dummy data - replace with RTK Query later
  const [storyData] = useState({
    id: "1",
    author: "Andrew Tudehope",
    coverImage: "/book-covers/sun-cover.jpg", // Set to null to test without cover
    content: [
      "Lorem ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur.ipsum dolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl. Et dignissim tortordolor sit amet consectetur. Tristique tellus tellus sapien volutpat orci eget. Euismod eu ornare vitae in et facilisis adipiscing nisl.",
    ],
    remainingRegenerations: 3,
    createdAt: "2025",
  })

  const [coverPhoto, setCoverPhoto] = useState<string | null>(null)
  const [storyImages, setStoryImages] = useState<StoryImage[]>([])
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)

  // Handle cover photo upload
  const handleCoverPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setCoverPhoto(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle story image upload
  const handleStoryImageChange = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const newImage: StoryImage = {
          id: Date.now().toString(),
          data: event.target?.result as string,
          position,
        }
        setStoryImages([...storyImages, newImage])
      }
      reader.readAsDataURL(file)
    }
  }

  // Remove image
  const removeImage = (imageId: string) => {
    setStoryImages(storyImages.filter((img) => img.id !== imageId))
  }

  // Enhanced download with images
  const handleDownloadConfirm = async () => {
    setIsDownloading(true)
    try {
      const doc = new jsPDF()
      const pageHeight = doc.internal.pageSize.getHeight()
      const pageWidth = doc.internal.pageSize.getWidth()
      const margins = 15
      const maxWidth = pageWidth - 2 * margins
      let yPosition = margins

      if (coverPhoto) {
        try {
          doc.addImage(coverPhoto, "JPEG", margins, yPosition, pageWidth - 2 * margins, 100)
          yPosition += 110
        } catch (error) {
          console.error("Error adding cover photo:", error)
        }
      }

      // Add title
      doc.setFontSize(20)
      doc.setFont("helvetica", "bold")
      doc.text("Your Story", pageWidth / 2, yPosition, { align: "center" })
      yPosition += 15

      // Add author
      doc.setFontSize(11)
      doc.setFont("helvetica", "italic")
      doc.text(`Inspired by the writing of ${storyData.author}`, pageWidth / 2, yPosition, { align: "center" })
      yPosition += 12

      doc.setFontSize(11)
      doc.setFont("helvetica", "normal")

      storyData.content.forEach((paragraph, paragraphIndex) => {
        // Check if there's an image for this position
        const imagesAtPosition = storyImages.filter((img) => img.position === paragraphIndex)

        // Add images before paragraph
        imagesAtPosition.forEach((image) => {
          if (yPosition + 60 > pageHeight - margins) {
            doc.addPage()
            yPosition = margins
          }
          try {
            doc.addImage(image.data, "JPEG", margins, yPosition, pageWidth - 2 * margins, 50)
            yPosition += 60
          } catch (error) {
            console.error("Error adding story image:", error)
          }
        })

        // Add paragraph text
        const lines = doc.splitTextToSize(paragraph, maxWidth)
        lines.forEach((line: string | string[]) => {
          if (yPosition + 7 > pageHeight - margins) {
            doc.addPage()
            yPosition = margins
          }
          doc.text(line, margins, yPosition)
          yPosition += 7
        })

        yPosition += 5
      })

      // Save PDF
      doc.save("story.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Error downloading PDF. Please try again.")
    } finally {
      setIsDownloading(false)
      setIsDownloadModalOpen(false)
    }
  }

  const handleRegenerateStory = () => {
    if (storyData.remainingRegenerations <= 0) {
      alert("No regenerations remaining")
      return
    }
    alert("Regenerate story - will be implemented with backend API")
  }

  return (
    <div className="bg-[#F7F4EF] min-h-[calc(84vh-4rem)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="p-6">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Preview Your Story</h1>

          <div className="  ">
            <div className="flex items-center justify-between">
             
              {coverPhoto ? (
                <div className="relative w-24 h-32 rounded-lg overflow-hidden">
                  <Image src={coverPhoto || "/placeholder.svg"} alt="Cover" width={400} height={400} className="w-full h-full object-cover" />
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
                  className="px-6 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Cover Photo
                </button>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleCoverPhotoChange}
              className="hidden"
            />
          </div>

          {/* Author Credit */}
          {storyData.author && (
            <p className="text-center text-gray-600 italic mb-8">Inspired by the writing of {storyData.author}</p>
          )}

          {/* Story Content with Image Upload */}
          <div className="space-y-8 mb-8">
            {storyData.content.map((paragraph, index) => (
              <div key={index} className="space-y-4">
                {/* Content Section */}
                <div className="">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase">Paragraph {index + 1}</span>
                    <button
                      onClick={() => imageInputRef.current?.click()}
                      className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded transition-colors flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4" />
                      Add Image
                    </button>
                  </div>
                  <p className="text-justify h-[400px] bg-gray-200 rounded-lg overflow-y-auto  p-8">{paragraph}</p>
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleStoryImageChange(e, index)}
                    className="hidden"
                  />
                </div>

                {/* Display Images for this paragraph */}
                {storyImages
                  .filter((img) => img.position === index)
                  .map((image) => (
                    <div key={image.id} className="relative bg-gray-100 p-4 rounded-lg overflow-hidden group">
                      <Image
                        src={image.data || "/placeholder.svg"}
                        alt={`Story image ${image.id}`}
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
                      <p className="text-xs text-gray-500 mt-2">Image will appear before this paragraph in PDF</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
            {/* Regenerate Button */}
            <div className="flex flex-col gap-2">
              <button
                onClick={handleRegenerateStory}
                disabled={storyData.remainingRegenerations <= 0}
                className="px-6 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Regenerate Story
              </button>
              <p className="text-xs text-gray-500">{storyData.remainingRegenerations} regenerations remaining</p>
            </div>

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
  )
}
