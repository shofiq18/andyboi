// "use client";
// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useGetMe } from "@/hooks/useGetMe";
// import Image from "next/image";

// interface Question {
//   id: number;
//   category: string;
//   question: string;
//   placeholder: string;
// }

// const questions: Question[] = [
//   // Childhood
//   {
//     id: 1,
//     category: "Childhood",
//     question: "What are some of your earliest memories from childhood?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 2,
//     category: "Childhood",
//     question:
//       "Was there a particular place or person that made you feel safe and loved when you were younger? Or did you have any best friends?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 3,
//     category: "Childhood",
//     question:
//       "Did you have any childhood dreams or things you wanted to be when you grew up?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 4,
//     category: "Childhood",
//     question:
//       "Do you have a memory that stands out from your childhood as special to you?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 5,
//     category: "Childhood",
//     question: "Do you have advice for growing up?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },

//   // Family
//   {
//     id: 6,
//     category: "Family",
//     question:
//       "Can you tell me about your family? What role did you play in the family dynamic?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 7,
//     category: "Family",
//     question: "What family traditions or rituals do you remember fondly?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 8,
//     category: "Family",
//     question:
//       "What values or lessons did you learn from your family that you carry with you today?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 9,
//     category: "Family",
//     question:
//       "Are there any stories or memories from your family history that stand out to you?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },

//   // Romance and Relationships
//   {
//     id: 10,
//     category: "Romance and Relationships",
//     question:
//       "What's the most meaningful romantic relationship you've had, and what did you learn from it?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 11,
//     category: "Romance and Relationships",
//     question:
//       "How do you define love, and has your understanding of it changed over time?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 12,
//     category: "Romance and Relationships",
//     question:
//       "How do you maintain close relationships and stay connected to the people you care about?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },

//   // Friendships
//   {
//     id: 13,
//     category: "Friendships",
//     question:
//       "Who are the friends that have had the biggest impact on your life?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 14,
//     category: "Friendships",
//     question: "What's one of your favourite memories with a close friend?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 15,
//     category: "Friendships",
//     question: "How do you navigate conflict or challenges in your friendships?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 16,
//     category: "Friendships",
//     question: "Any memorable stories to tell with your friends?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 17,
//     category: "Friendships",
//     question: "Do you have advice for friendships?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },

//   // Films, Books, Music, and Art
//   {
//     id: 18,
//     category: "Films, Books, Music, and Art",
//     question:
//       "What are some of your all-time favourite films, and why do they resonate with you? Any recommendations",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 19,
//     category: "Films, Books, Music, and Art",
//     question:
//       "What kind of music do you connect with the most, and why? Any recommendations",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 20,
//     category: "Films, Books, Music, and Art",
//     question:
//       "If you could recommend one piece of art—be it a movie, song, or book—to someone, what would it be and why?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },

//   // Food and Culture
//   {
//     id: 21,
//     category: "Food and Culture",
//     question:
//       "What are some of your favourite foods or meals, and do they have any special meaning to you?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },

//   // Standout Memories
//   {
//     id: 22,
//     category: "Standout Memories",
//     question:
//       "What's one of the most unforgettable experiences or adventures you've had?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 23,
//     category: "Standout Memories",
//     question:
//       "Can you describe a moment/s when you felt incredibly proud of yourself?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 24,
//     category: "Standout Memories",
//     question:
//       "Is there a particular challenge or struggle in your life that shaped who you are today?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 25,
//     category: "Standout Memories",
//     question:
//       "Has there been a moment when you've felt completely at peace or in the right place at the right time?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },

//   // Reflecting on Growth and Identity
//   {
//     id: 26,
//     category: "Reflecting on Growth and Identity",
//     question:
//       "Is there a turning point in your life when you learned something that changed the way you see the world?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 27,
//     category: "Reflecting on Growth and Identity",
//     question: "What are you most grateful for right now in your life?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 28,
//     category: "Reflecting on Growth and Identity",
//     question:
//       "If you could give your younger self one piece of advice, what would it be?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
//   {
//     id: 29,
//     category: "Reflecting on Growth and Identity",
//     question:
//       "What are some of the biggest lessons you've learned from the people in your life?",
//     placeholder: "Answer in as much detail as you can within the word limit",
//   },
// ];

// export default function LifeStoryApp() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState<{ [key: number]: string }>({});
//   const [name, setName] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [placeOfBirth, setPlaceOfBirth] = useState("");
//   const [showIntro, setShowIntro] = useState(true);
//   const [skippedCount, setSkippedCount] = useState(0);
//   const [wordCount, setWordCount] = useState(0);
//   const [showError, setShowError] = useState(false);
//   const { user } = useGetMe();

//   const currentQuestion = questions[currentQuestionIndex];
//   const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
//   const answeredCount = Object.keys(answers).filter((key) =>
//     answers[parseInt(key)]?.trim()
//   ).length;
//   const remainingRequired = 24 - answeredCount;

//   const countWords = (text: string) => {
//     return text
//       .trim()
//       .split(/\s+/)
//       .filter((word) => word.length > 0).length;
//   };

//   const handleNext = () => {
//     const currentAnswer = answers[currentQuestion.id]?.trim();

//     // Check if question is being skipped
//     if (!currentAnswer) {
//       if (skippedCount >= 5) {
//         setShowError(true);
//         return;
//       }
//       setSkippedCount(skippedCount + 1);
//     }

//     setShowError(false);

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       // Update word count for next question
//       const nextAnswer = answers[questions[currentQuestionIndex + 1].id] || "";
//       setWordCount(countWords(nextAnswer));
//     } else {
//       // Check if at least 24 questions are answered
//       if (answeredCount < 24) {
//         setShowError(true);
//         return;
//       }
//       handleSubmit();
//     }
//   };

//   const handleSkip = () => {
//     if (skippedCount >= 5) {
//       setShowError(true);
//       return;
//     }

//     const currentAnswer = answers[currentQuestion.id]?.trim();
//     if (!currentAnswer) {
//       setSkippedCount(skippedCount + 1);
//     }

//     setShowError(false);

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       const nextAnswer = answers[questions[currentQuestionIndex + 1].id] || "";
//       setWordCount(countWords(nextAnswer));
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       const prevAnswer = answers[questions[currentQuestionIndex - 1].id] || "";
//       setWordCount(countWords(prevAnswer));
//       setShowError(false);
//     }
//   };

//   const handleAnswerChange = (value: string) => {
//     const words = countWords(value);

//     // Limit to 150 words
//     if (words <= 150) {
//       setAnswers({ ...answers, [currentQuestion.id]: value });
//       setWordCount(words);
//     }
//   };

//   const handleStartQuestionnaire = () => {
//     if (name.trim() && dateOfBirth.trim() && placeOfBirth.trim()) {
//       setShowIntro(false);
//     }
//   };

//   const handleSubmit = () => {
//     // Prepare form data for backend
//     const formData = {
//       name: name,
//       dateOfBirth: dateOfBirth,
//       placeOfBirth: placeOfBirth,
//       questions: questions
//         .map((q) => ({
//           id: q.id,
//           category: q.category,
//           question: q.question,
//           answer: answers[q.id] || "",
//         }))
//         .filter((q) => q.answer.trim()), // Only include answered questions
//     };

//     console.log("Form Data for Backend:", JSON.stringify(formData, null, 2));

//     // Here you would make your API call
//     // dispatch(submitStory(formData))
//   };

//   if (showIntro) {
//     return (
//       <div className="bg-[#F7F4EF] md:h-[calc(89vh-4rem)] flex items-center justify-center p-4">
//         <div className="p-6 max-w-2xl w-full">
//           <div className="mb-8">
//             <Image
//               src="/logo.svg"
//               alt="Once Upon A Life"
//               width={120}
//               height={40}
//               className="mx-auto"
//             />
//           </div>

//           <div className="text-center mb-8">
//             <h2 className="text-3xl md:text-5xl font-bold text-[#314B79] mb-5">
//               Your Life Story
//             </h2>
//             <p className="text-[#2B2B2B] text-2xl">
//               Share your journey, memories, and wisdom
//             </p>
//           </div>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-lg font-medium text-slate-700 mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-3 border border-slate-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div>
//               <label className="block text-lg font-medium text-slate-700 mb-2">
//                 Date of Birth
//               </label>
//               <input
//                 type="date"
//                 value={dateOfBirth}
//                 onChange={(e) => setDateOfBirth(e.target.value)}
//                 className="w-full px-4 py-3 border border-slate-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <label className="block text-lg font-medium text-slate-700 mb-2">
//                 Place of Birth
//               </label>
//               <input
//                 type="text"
//                 value={placeOfBirth}
//                 onChange={(e) => setPlaceOfBirth(e.target.value)}
//                 className="w-full px-4 py-3 border border-slate-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="City, Country"
//               />
//             </div>

//             <button
//               onClick={handleStartQuestionnaire}
//               disabled={
//                 !name.trim() || !dateOfBirth.trim() || !placeOfBirth.trim()
//               }
//               className="w-full bg-[#E5B96C] hover:bg-amber-400 disabled:bg-slate-300 disabled:cursor-not-allowed text-black font-medium py-3 rounded-lg transition-colors mt-6"
//             >
//               Begin Your Story
//             </button>
//           </div>

//           <div className="mt-4 md:mt-6 2xl:mt-8 text-center space-y-2">
//             <p className="text-lg text-slate-600">150 words per question</p>
//             <p className="text-lg text-slate-600">
//               Answer in as much detail as you can within the word limit
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#F7F4EF] md:h-[calc(89vh-4rem)] flex items-center justify-center p-4">
//       <div className="p-8 max-w-4xl w-full">
//         <div className="mb-6">
//           <Image
//             src="/logo.svg"
//             alt="Once Upon A Life"
//             width={100}
//             height={32}
//             className="mx-auto mb-6"
//           />
//         </div>

//         <div className="text-center mb-6">
//           <h2 className="text-4xl font-bold text-[#314B79] mb-3">
//             Your Life Story
//           </h2>
//           <p className="text-[#2B2B2B] text-xl mb-4">
//             {currentQuestionIndex + 1} to {questions.length} completed
//           </p>

//           {/* Progress bar */}
//           <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
//             <div
//               className="bg-[#314B79] h-2 rounded-full transition-all duration-300"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//         </div>

//         <div className="mb-8">
//           <div className=" flex justify-center items-center w-full   text-center mb-6 relative ">
//             <span className=" px-6 py-2  rounded-lg text-xl font-medium text-[#314B79] ">
//               {currentQuestion.category}
//             </span>
//             <div className="absolute bottom-0 inset-x-90 h-0.5 bg-gradient-to-r from-transparent via-[#314B79] to-transparent"></div>
//           </div>

//           <div className="mb-6">
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="text-lg font-semibold text-slate-800">
//                 Question {currentQuestionIndex + 1}
//               </h3>
//               <div className="flex items-center gap-4">
//                 <p className="mb-2">Skipped: {skippedCount} / 5</p>
//                 <button
//                   onClick={handleSkip}
//                   disabled={skippedCount >= 5}
//                   className="px-4 py-1 text-sm font-medium text-[#E74C3C] hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-[#E74C3C]"
//                 >
//                   Skip
//                 </button>
//               </div>
//             </div>

//             <p className="font-bold text-2xl mb-4 text-[#2B2B2B]">
//               {currentQuestion.question}
//             </p>

//             <textarea
//               value={answers[currentQuestion.id] || ""}
//               onChange={(e) => handleAnswerChange(e.target.value)}
//               placeholder={currentQuestion.placeholder}
//               className="w-full px-4 py-3 border border-slate-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//               rows={4}
//             />
//             <span className="text-sm text-slate-600">
//             {wordCount} / 150 words
//           </span>
//           </div>
//         </div>

//         {showError && (
//           <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
//             <p className="text-red-600 font-medium">
//               You must fill out at least 24 questions. You cannot skip remaining
//               questions.
//             </p>
//           </div>
//         )}

//         <div className="flex justify-between items-center mb-4">
//           <button
//             onClick={handlePrevious}
//             disabled={currentQuestionIndex === 0}
//             className="flex items-center gap-2 px-6 py-3 border-2 border-[#96D1C7] rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
//           >
//             <ChevronLeft size={20} />
//             Previous
//           </button>

//           <button
//             onClick={handleNext}
//             className="flex items-center gap-2 px-8 py-3 bg-[#E5B96C] hover:bg-amber-400 text-black font-medium rounded-lg transition-colors"
//           >
//             {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         <div className="text-center text-slate-600">
          
//           <p>
//             You can skip up to 5 questions. Remaining required:{" "}
//             {remainingRequired > 0 ? remainingRequired : 0}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

























"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Question {
  id: number;
  category: string;
  question: string;
  placeholder: string;
}

const questions: Question[] = [
  // Childhood
  {
    id: 1,
    category: "Childhood",
    question: "What are some of your earliest memories from childhood?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 2,
    category: "Childhood",
    question:
      "Was there a particular place or person that made you feel safe and loved when you were younger? Or did you have any best friends?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 3,
    category: "Childhood",
    question:
      "Did you have any childhood dreams or things you wanted to be when you grew up?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 4,
    category: "Childhood",
    question:
      "Do you have a memory that stands out from your childhood as special to you?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 5,
    category: "Childhood",
    question: "Do you have advice for growing up?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },

  // Family
  {
    id: 6,
    category: "Family",
    question:
      "Can you tell me about your family? What role did you play in the family dynamic?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 7,
    category: "Family",
    question: "What family traditions or rituals do you remember fondly?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 8,
    category: "Family",
    question:
      "What values or lessons did you learn from your family that you carry with you today?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 9,
    category: "Family",
    question:
      "Are there any stories or memories from your family history that stand out to you?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },

  // Romance and Relationships
  {
    id: 10,
    category: "Romance and Relationships",
    question:
      "What's the most meaningful romantic relationship you've had, and what did you learn from it?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 11,
    category: "Romance and Relationships",
    question:
      "How do you define love, and has your understanding of it changed over time?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 12,
    category: "Romance and Relationships",
    question:
      "How do you maintain close relationships and stay connected to the people you care about?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },

  // Friendships
  {
    id: 13,
    category: "Friendships",
    question:
      "Who are the friends that have had the biggest impact on your life?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 14,
    category: "Friendships",
    question: "What's one of your favourite memories with a close friend?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 15,
    category: "Friendships",
    question: "How do you navigate conflict or challenges in your friendships?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 16,
    category: "Friendships",
    question: "Any memorable stories to tell with your friends?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 17,
    category: "Friendships",
    question: "Do you have advice for friendships?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },

  // Films, Books, Music, and Art
  {
    id: 18,
    category: "Films, Books, Music, and Art",
    question:
      "What are some of your all-time favourite films, and why do they resonate with you? Any recommendations",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 19,
    category: "Films, Books, Music, and Art",
    question:
      "What kind of music do you connect with the most, and why? Any recommendations",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 20,
    category: "Films, Books, Music, and Art",
    question:
      "If you could recommend one piece of art—be it a movie, song, or book—to someone, what would it be and why?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },

  // Food and Culture
  {
    id: 21,
    category: "Food and Culture",
    question:
      "What are some of your favourite foods or meals, and do they have any special meaning to you?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },

  // Standout Memories
  {
    id: 22,
    category: "Standout Memories",
    question:
      "What's one of the most unforgettable experiences or adventures you've had?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 23,
    category: "Standout Memories",
    question:
      "Can you describe a moment/s when you felt incredibly proud of yourself?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 24,
    category: "Standout Memories",
    question:
      "Is there a particular challenge or struggle in your life that shaped who you are today?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 25,
    category: "Standout Memories",
    question:
      "Has there been a moment when you've felt completely at peace or in the right place at the right time?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },

  // Reflecting on Growth and Identity
  {
    id: 26,
    category: "Reflecting on Growth and Identity",
    question:
      "Is there a turning point in your life when you learned something that changed the way you see the world?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 27,
    category: "Reflecting on Growth and Identity",
    question: "What are you most grateful for right now in your life?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 28,
    category: "Reflecting on Growth and Identity",
    question:
      "If you could give your younger self one piece of advice, what would it be?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
  {
    id: 29,
    category: "Reflecting on Growth and Identity",
    question:
      "What are some of the biggest lessons you've learned from the people in your life?",
    placeholder: "Answer in as much detail as you can within the word limit",
  },
];

export default function LifeStoryApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [showIntro, setShowIntro] = useState(true);
  const [skippedCount, setSkippedCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [showError, setShowError] = useState(false);
 

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const answeredCount = Object.keys(answers).filter((key) =>
    answers[parseInt(key)]?.trim()
  ).length;
  const remainingRequired = 24 - answeredCount;

  const countWords = (text: string) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const handleNext = () => {
    const currentAnswer = answers[currentQuestion.id]?.trim();

    // Check if question is being skipped
    if (!currentAnswer) {
      if (skippedCount >= 5) {
        setShowError(true);
        return;
      }
      setSkippedCount(skippedCount + 1);
    }

    setShowError(false);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Update word count for next question
      const nextAnswer = answers[questions[currentQuestionIndex + 1].id] || "";
      setWordCount(countWords(nextAnswer));
    } else {
      // Check if at least 24 questions are answered
      if (answeredCount < 24) {
        setShowError(true);
        return;
      }
      handleSubmit();
    }
  };

  const handleSkip = () => {
    if (skippedCount >= 5) {
      setShowError(true);
      return;
    }

    const currentAnswer = answers[currentQuestion.id]?.trim();
    if (!currentAnswer) {
      setSkippedCount(skippedCount + 1);
    }

    setShowError(false);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      const nextAnswer = answers[questions[currentQuestionIndex + 1].id] || "";
      setWordCount(countWords(nextAnswer));
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const prevAnswer = answers[questions[currentQuestionIndex - 1].id] || "";
      setWordCount(countWords(prevAnswer));
      setShowError(false);
    }
  };

  const handleAnswerChange = (value: string) => {
    const words = countWords(value);

    // Limit to 150 words
    if (words <= 150) {
      setAnswers({ ...answers, [currentQuestion.id]: value });
      setWordCount(words);
    }
  };

  const handleStartQuestionnaire = () => {
    if (name.trim() && dateOfBirth.trim() && placeOfBirth.trim()) {
      setShowIntro(false);
    }
  };

  const handleSubmit = () => {
    // Build storyElements array in the exact format backend needs
    const storyElements = [
      {
        question: "Name?",
        answer: name
      },
      {
        question: "Date of Birth?",
        answer: dateOfBirth
      },
      {
        question: "Place of Birth?",
        answer: placeOfBirth
      },
      // Add all answered questions
      ...questions
        .filter(q => answers[q.id]?.trim()) // Only answered questions
        .map(q => ({
          question: q.question,
          answer: answers[q.id]
        }))
    ];

    const formData = {
      storyElements: storyElements
    };

    console.log("Form Data for Backend:", JSON.stringify(formData, null, 2));

    // Here you would make your API call
    // Example:
    // fetch('/api/story/create', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
  };

  if (showIntro) {
    return (
      <div className="bg-[#F7F4EF] md:h-[calc(89vh-4rem)] flex items-center justify-center p-4">
        <div className="p-6 max-w-2xl w-full">
          <div className="mb-8">
            <Image
              src="/logo.svg"
              alt="Once Upon A Life"
              width={120}
              height={40}
              className="mx-auto"
            />
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#314B79] mb-5">
              Your Life Story
            </h2>
            <p className="text-[#2B2B2B] text-2xl">
              Share your journey, memories, and wisdom
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-slate-700 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-slate-700 mb-2">
                Place of Birth
              </label>
              <input
                type="text"
                value={placeOfBirth}
                onChange={(e) => setPlaceOfBirth(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="City, Country"
              />
            </div>

            <button
              onClick={handleStartQuestionnaire}
              disabled={
                !name.trim() || !dateOfBirth.trim() || !placeOfBirth.trim()
              }
              className="w-full bg-[#E5B96C] hover:bg-amber-400 disabled:bg-slate-300 disabled:cursor-not-allowed text-black font-medium py-3 rounded-lg transition-colors mt-6"
            >
              Begin Your Story
            </button>
          </div>

          <div className="mt-4 md:mt-6 2xl:mt-8 text-center space-y-2">
            <p className="text-lg text-slate-600">150 words per question</p>
            <p className="text-lg text-slate-600">
              Answer in as much detail as you can within the word limit
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F4EF] md:h-[calc(89vh-4rem)] flex items-center justify-center p-4">
      <div className="p-8 max-w-4xl w-full">
        <div className="mb-6">
          <Image
            src="/logo.svg"
            alt="Once Upon A Life"
            width={100}
            height={32}
            className="mx-auto mb-6"
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-[#314B79] mb-3">
            Your Life Story
          </h2>
          <p className="text-[#2B2B2B] text-xl mb-4">
            {currentQuestionIndex + 1} to {questions.length} completed
          </p>

          {/* Progress bar */}
          <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
            <div
              className="bg-[#314B79] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <div className=" flex justify-center items-center w-full   text-center mb-6 relative ">
            <span className=" px-6 py-2  rounded-lg text-xl font-medium text-[#314B79] ">
              {currentQuestion.category}
            </span>
            <div className="absolute bottom-0 inset-x-90 h-0.5 bg-gradient-to-r from-transparent via-[#314B79] to-transparent"></div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-slate-800">
                Question {currentQuestionIndex + 1}
              </h3>
              <div className="flex items-center gap-4">
                <p className="mb-2">Skipped: {skippedCount} / 5</p>
                <button
                  onClick={handleSkip}
                  disabled={skippedCount >= 5}
                  className="px-4 py-1 text-sm font-medium text-[#E74C3C] hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-[#E74C3C]"
                >
                  Skip
                </button>
              </div>
            </div>

            <p className="font-bold text-2xl mb-4 text-[#2B2B2B]">
              {currentQuestion.question}
            </p>

            <textarea
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
              placeholder={currentQuestion.placeholder}
              className="w-full px-4 py-3 border border-slate-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={4}
            />
            <span className="text-sm text-slate-600">
            {wordCount} / 150 words
          </span>
          </div>
        </div>

        {showError && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
            <p className="text-red-600 font-medium">
              You must fill out at least 24 questions. You cannot skip remaining
              questions.
            </p>
          </div>
        )}

        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2 px-6 py-3 border-2 border-[#96D1C7] rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-3 bg-[#E5B96C] hover:bg-amber-400 text-black font-medium rounded-lg transition-colors"
          >
            {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="text-center text-slate-600">
          
          <p>
            You can skip up to 5 questions. Remaining required:{" "}
            {remainingRequired > 0 ? remainingRequired : 0}
          </p>
        </div>
      </div>
    </div>
  );
}