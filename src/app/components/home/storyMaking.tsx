// "use client"
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface Question {
//   id: number;
//   category: string;
//   question: string;
//   placeholder: string;
// }

// const questions: Question[] = [
//   // Childhood
//   { id: 1, category: "Childhood", question: "What are some of your earliest memories from childhood?", placeholder: "Tell your earliest memories..." },
//   { id: 2, category: "Childhood", question: "What were your favourite activities or games when you were a child?", placeholder: "Type your answer here..." },
//   { id: 3, category: "Childhood", question: "Was there a particular place or person that made you feel safe and loved when you were younger? Or did you have any best friends?", placeholder: "Type your answer here..." },
//   { id: 4, category: "Childhood", question: "Did you have any childhood dreams or things you wanted to be when you grew up?", placeholder: "Type your answer here..." },
//   { id: 5, category: "Childhood", question: "Do you have a memory that stands out from your childhood as special to you?", placeholder: "Type your answer here..." },
//   { id: 6, category: "Childhood", question: "Did you have any childhood crushes?", placeholder: "Type your answer here..." },
//   { id: 7, category: "Childhood", question: "Do you have advice for growing up?", placeholder: "Type your answer here..." },
  
//   // Family
//   { id: 8, category: "Family", question: "Can you tell me about your family? What role did you play in the family dynamic?", placeholder: "Type your answer here..." },
//   { id: 9, category: "Family", question: "What family traditions or rituals do you remember fondly?", placeholder: "Type your answer here..." },
//   { id: 10, category: "Family", question: "What values or lessons did you learn from your family that you carry with you today?", placeholder: "Type your answer here..." },
//   { id: 11, category: "Family", question: "Who in your family do you feel you're most similar to, and in what ways?", placeholder: "Type your answer here..." },
//   { id: 12, category: "Family", question: "Are there any stories or memories from your family history that stand out to you?", placeholder: "Type your answer here..." },
//   { id: 13, category: "Family", question: "Do you have advice for family?", placeholder: "Type your answer here..." },
  
//   // Romance and Relationships
//   { id: 14, category: "Romance and Relationships", question: "What's the most meaningful romantic relationship you've had, and what did you learn from it?", placeholder: "Type your answer here..." },
//   { id: 15, category: "Romance and Relationships", question: "How do you define love, and has your understanding of it changed over time?", placeholder: "Type your answer here..." },
//   { id: 16, category: "Romance and Relationships", question: "Can you describe a moment when you felt truly understood by someone?", placeholder: "Type your answer here..." },
//   { id: 17, category: "Romance and Relationships", question: "How do you maintain close relationships and stay connected to the people you care about?", placeholder: "Type your answer here..." },
//   { id: 18, category: "Romance and Relationships", question: "Do you have advice for relationships?", placeholder: "Type your answer here..." },
  
//   // Friendships
//   { id: 19, category: "Friendships", question: "Who are the friends that have had the biggest impact on your life?", placeholder: "Type your answer here..." },
//   { id: 20, category: "Friendships", question: "What's one of your favourite memories with a close friend?", placeholder: "Type your answer here..." },
//   { id: 21, category: "Friendships", question: "How do you navigate conflict or challenges in your friendships?", placeholder: "Type your answer here..." },
//   { id: 22, category: "Friendships", question: "What role do friends play in your life, and how do you support each other?", placeholder: "Type your answer here..." },
//   { id: 23, category: "Friendships", question: "Any memorable stories to tell with your friends?", placeholder: "Type your answer here..." },
//   { id: 24, category: "Friendships", question: "Do you have advice for friendships?", placeholder: "Type your answer here..." },
  
//   // Films, Books, Music, and Art
//   { id: 25, category: "Films, Books, Music, and Art", question: "What are some of your all-time favourite films, and why do they resonate with you?", placeholder: "Type your answer here..." },
//   { id: 26, category: "Films, Books, Music, and Art", question: "Is there a particular book or author that has had a lasting impact on you?", placeholder: "Type your answer here..." },
//   { id: 27, category: "Films, Books, Music, and Art", question: "What kind of music do you connect with the most, and why?", placeholder: "Type your answer here..." },
//   { id: 28, category: "Films, Books, Music, and Art", question: "Are there any plays, performances, or other forms of art that have inspired or moved you?", placeholder: "Type your answer here..." },
//   { id: 29, category: "Films, Books, Music, and Art", question: "If you could recommend one piece of art—be it a movie, song, or book—to someone, what would it be and why?", placeholder: "Type your answer here..." },
  
//   // Food and Culture
//   { id: 30, category: "Food and Culture", question: "What are some of your favourite foods or meals, and do they have any special meaning to you?", placeholder: "Type your answer here..." },
//   { id: 31, category: "Food and Culture", question: "Are there any family recipes or food traditions that you hold dear?", placeholder: "Type your answer here..." },
//   { id: 32, category: "Food and Culture", question: "Is there a dish/s that reminds you of home or a special place in your life?", placeholder: "Type your answer here..." },
  
//   // Standout Memories
//   { id: 33, category: "Standout Memories", question: "What's one of the most unforgettable experiences or adventures you've had?", placeholder: "Type your answer here..." },
//   { id: 34, category: "Standout Memories", question: "Can you describe a moment/s when you felt incredibly proud of yourself?", placeholder: "Type your answer here..." },
//   { id: 35, category: "Standout Memories", question: "Is there a particular challenge or struggle in your life that shaped who you are today?", placeholder: "Type your answer here..." },
//   { id: 36, category: "Standout Memories", question: "What's one memory from your life that makes you smile every time you think of it?", placeholder: "Type your answer here..." },
//   { id: 37, category: "Standout Memories", question: "Has there been a moment when you've felt completely at peace or in the right place at the right time?", placeholder: "Type your answer here..." },
  
//   // Reflecting on Growth and Identity
//   { id: 38, category: "Reflecting on Growth and Identity", question: "How do you think you've changed the most over the years?", placeholder: "Type your answer here..." },
//   { id: 39, category: "Reflecting on Growth and Identity", question: "Is there a turning point in your life when you learned something that changed the way you see the world?", placeholder: "Type your answer here..." },
//   { id: 40, category: "Reflecting on Growth and Identity", question: "What are you most grateful for right now in your life?", placeholder: "Type your answer here..." },
//   { id: 41, category: "Reflecting on Growth and Identity", question: "If you could give your younger self one piece of advice, what would it be?", placeholder: "Type your answer here..." },
//   { id: 42, category: "Reflecting on Growth and Identity", question: "What are some of the biggest lessons you've learned from the people in your life?", placeholder: "Type your answer here..." },
// ];

// export default function LifeStoryApp() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState<{ [key: number]: string }>({});
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//   const [showIntro, setShowIntro] = useState(true);

//   const currentQuestion = questions[currentQuestionIndex];
//   const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleAnswerChange = (value: string) => {
//     setAnswers({ ...answers, [currentQuestion.id]: value });
//   };

//   const handleStartQuestionnaire = () => {
//     if (name.trim() && location.trim()) {
//       setShowIntro(false);
//     }
//   };

//   if (showIntro) {
//     return (
//       <div className="bg-[#F7F4EF] min-h-screen  flex items-center justify-center ">
//         <div className="p-8 max-w-2xl w-full">
//           <div className="text-center mb-8">
           
//             <h2 className="text-5xl font-bold text-[#314B79] mb-5">Your Life Story</h2>
//             <p className="text-[#2B2B2B] text-2xl">Share your journey, memories, and wisdom</p>
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
//                 className="w-full px-4 py-3 border border-slate-300 bg-[#EAEAEA] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div>
//               <label className="block text-lg font-medium text-slate-700 mb-2">
//                 Where do you currently live?
//               </label>
//               <input
//                 type="text"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 className="w-full px-4 py-3 border border-slate-300 bg-[#EAEAEA] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="City, Country"
//               />
//             </div>

//             <button
//               onClick={handleStartQuestionnaire}
//               disabled={!name.trim() || !location.trim()}
//               className="w-full bg-[#E5B96C] hover:bg-amber-400 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors mt-6"
//             >
//               Begin Your Story
//             </button>
//           </div>

//           <p className="text-center text-lg   md:mt-24 2xl:mt-36">
//             100 words per answer. You don&#39;t have to answer every question.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className=" bg-[#F7F4EF] min-h-screen  flex items-center justify-center p-4">
//       <div className=" p-8 max-w-4xl w-full">
//         <div className="text-center 2xl:mb-6">
//           <h2 className="text-5xl font-bold text-[#314B79] mb-5">Your Life Story</h2>
//           <p className="text-[#2B2B2B] text-2xl mb-4">
//             {currentQuestionIndex + 1} to {questions.length} completed
//           </p>
          
//           {/* Progress bar */}
//           <div className="w-full bg-slate-200 rounded-full h-2">
//             <div 
//               className="bg-[#314B79] h-2 rounded-full transition-all duration-300"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//         </div>

//         <div className="2xl:mb-8">
//           <div className="text-center mb-6">
//             <span className="inline-block px-4 py-1  border-b border-e-muted-foreground text-2xl bord font-medium text-[#2B2B2B]">
//               {currentQuestion.category}
//             </span>
//           </div>

//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-slate-800 mb-4">
//               Question {currentQuestionIndex + 1}:
//             </h3>
//             <p className="font-bold text-2xl mb-4">
//               {currentQuestion.question}
//             </p>
            
//             <textarea
//               value={answers[currentQuestion.id] || ''}
//               onChange={(e) => handleAnswerChange(e.target.value)}
//               placeholder={currentQuestion.placeholder}
//               className="w-full px-4 py-3 border border-slate-300 bg-[#EFEFEF] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//               rows={6}
//             />
//           </div>
//         </div>

//         <div className="flex justify-between items-center">
//           <button
//             onClick={handlePrevious}
//             disabled={currentQuestionIndex === 0}
//             className="flex items-center gap-2 px-4 py-2 border-2 border-[#96D1C7] rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//           >
//             <ChevronLeft size={20} />
//             Previous
//           </button>

//           <button
//             onClick={handleNext}
//             disabled={currentQuestionIndex === questions.length - 1}
//             className="flex items-center gap-2 px-6 py-2 bg-[#E5B96C] hover:bg-amber-400 disabled:bg-slate-300 disabled:cursor-not-allowed text-black font-medium rounded-lg transition-colors"
//           >
//             Next
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         <p className="text-center text-xl  md:mt-4 md:mb-4 2xl:mt-36">
//           You can skip some question and still continue to the next step
//         </p>
//       </div>
//     </div>
//   );
// }









"use client"
import React, { useState,  } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Download, RotateCcw } from 'lucide-react';
import { useGetMe } from '@/hooks/useGetMe';
import Image from 'next/image';

interface Question {
  id: number;
  category: string;
  question: string;
  placeholder: string;
}

const questions: Question[] = [
  // Childhood
  { id: 1, category: "Childhood", question: "What are some of your earliest memories from childhood?", placeholder: "Tell your earliest memories..." },
  { id: 2, category: "Childhood", question: "What were your favourite activities or games when you were a child?", placeholder: "Type your answer here..." },
  { id: 3, category: "Childhood", question: "Was there a particular place or person that made you feel safe and loved when you were younger? Or did you have any best friends?", placeholder: "Type your answer here..." },
  { id: 4, category: "Childhood", question: "Did you have any childhood dreams or things you wanted to be when you grew up?", placeholder: "Type your answer here..." },
  { id: 5, category: "Childhood", question: "Do you have a memory that stands out from your childhood as special to you?", placeholder: "Type your answer here..." },
  { id: 6, category: "Childhood", question: "Did you have any childhood crushes?", placeholder: "Type your answer here..." },
  { id: 7, category: "Childhood", question: "Do you have advice for growing up?", placeholder: "Type your answer here..." },
  
  // Family
  { id: 8, category: "Family", question: "Can you tell me about your family? What role did you play in the family dynamic?", placeholder: "Type your answer here..." },
  { id: 9, category: "Family", question: "What family traditions or rituals do you remember fondly?", placeholder: "Type your answer here..." },
  { id: 10, category: "Family", question: "What values or lessons did you learn from your family that you carry with you today?", placeholder: "Type your answer here..." },
  { id: 11, category: "Family", question: "Who in your family do you feel you're most similar to, and in what ways?", placeholder: "Type your answer here..." },
  { id: 12, category: "Family", question: "Are there any stories or memories from your family history that stand out to you?", placeholder: "Type your answer here..." },
  { id: 13, category: "Family", question: "Do you have advice for family?", placeholder: "Type your answer here..." },
  
  // Romance and Relationships
  { id: 14, category: "Romance and Relationships", question: "What's the most meaningful romantic relationship you've had, and what did you learn from it?", placeholder: "Type your answer here..." },
  { id: 15, category: "Romance and Relationships", question: "How do you define love, and has your understanding of it changed over time?", placeholder: "Type your answer here..." },
  { id: 16, category: "Romance and Relationships", question: "Can you describe a moment when you felt truly understood by someone?", placeholder: "Type your answer here..." },
  { id: 17, category: "Romance and Relationships", question: "How do you maintain close relationships and stay connected to the people you care about?", placeholder: "Type your answer here..." },
  { id: 18, category: "Romance and Relationships", question: "Do you have advice for relationships?", placeholder: "Type your answer here..." },
  
  // Friendships
  { id: 19, category: "Friendships", question: "Who are the friends that have had the biggest impact on your life?", placeholder: "Type your answer here..." },
  { id: 20, category: "Friendships", question: "What's one of your favourite memories with a close friend?", placeholder: "Type your answer here..." },
  { id: 21, category: "Friendships", question: "How do you navigate conflict or challenges in your friendships?", placeholder: "Type your answer here..." },
  { id: 22, category: "Friendships", question: "What role do friends play in your life, and how do you support each other?", placeholder: "Type your answer here..." },
  { id: 23, category: "Friendships", question: "Any memorable stories to tell with your friends?", placeholder: "Type your answer here..." },
  { id: 24, category: "Friendships", question: "Do you have advice for friendships?", placeholder: "Type your answer here..." },
  
  // Films, Books, Music, and Art
  { id: 25, category: "Films, Books, Music, and Art", question: "What are some of your all-time favourite films, and why do they resonate with you?", placeholder: "Type your answer here..." },
  { id: 26, category: "Films, Books, Music, and Art", question: "Is there a particular book or author that has had a lasting impact on you?", placeholder: "Type your answer here..." },
  { id: 27, category: "Films, Books, Music, and Art", question: "What kind of music do you connect with the most, and why?", placeholder: "Type your answer here..." },
  { id: 28, category: "Films, Books, Music, and Art", question: "Are there any plays, performances, or other forms of art that have inspired or moved you?", placeholder: "Type your answer here..." },
  { id: 29, category: "Films, Books, Music, and Art", question: "If you could recommend one piece of art—be it a movie, song, or book—to someone, what would it be and why?", placeholder: "Type your answer here..." },
  
  // Food and Culture
  { id: 30, category: "Food and Culture", question: "What are some of your favourite foods or meals, and do they have any special meaning to you?", placeholder: "Type your answer here..." },
  { id: 31, category: "Food and Culture", question: "Are there any family recipes or food traditions that you hold dear?", placeholder: "Type your answer here..." },
  { id: 32, category: "Food and Culture", question: "Is there a dish/s that reminds you of home or a special place in your life?", placeholder: "Type your answer here..." },
  
  // Standout Memories
  { id: 33, category: "Standout Memories", question: "What's one of the most unforgettable experiences or adventures you've had?", placeholder: "Type your answer here..." },
  { id: 34, category: "Standout Memories", question: "Can you describe a moment/s when you felt incredibly proud of yourself?", placeholder: "Type your answer here..." },
  { id: 35, category: "Standout Memories", question: "Is there a particular challenge or struggle in your life that shaped who you are today?", placeholder: "Type your answer here..." },
  { id: 36, category: "Standout Memories", question: "What's one memory from your life that makes you smile every time you think of it?", placeholder: "Type your answer here..." },
  { id: 37, category: "Standout Memories", question: "Has there been a moment when you've felt completely at peace or in the right place at the right time?", placeholder: "Type your answer here..." },
  
  // Reflecting on Growth and Identity
  { id: 38, category: "Reflecting on Growth and Identity", question: "How do you think you've changed the most over the years?", placeholder: "Type your answer here..." },
  { id: 39, category: "Reflecting on Growth and Identity", question: "Is there a turning point in your life when you learned something that changed the way you see the world?", placeholder: "Type your answer here..." },
  { id: 40, category: "Reflecting on Growth and Identity", question: "What are you most grateful for right now in your life?", placeholder: "Type your answer here..." },
  { id: 41, category: "Reflecting on Growth and Identity", question: "If you could give your younger self one piece of advice, what would it be?", placeholder: "Type your answer here..." },
  { id: 42, category: "Reflecting on Growth and Identity", question: "What are some of the biggest lessons you've learned from the people in your life?", placeholder: "Type your answer here..." },
];

export default function LifeStoryApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [showIntro, setShowIntro] = useState(true);
  const [showWordSelection, setShowWordSelection] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [selectedWordCount, setSelectedWordCount] = useState<number>(1500);
  const {user} = useGetMe();
  

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const answeredCount = Object.keys(answers).filter(key => answers[parseInt(key)]?.trim()).length;

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowWordSelection(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleStartQuestionnaire = () => {
    if (name.trim() && location.trim()) {
      setShowIntro(false);
    }
  };

  const handleGenerateStory = () => {
    setShowWordSelection(false);
    setShowLoading(true);
    
    // Simulate story generation with loading animation
    setTimeout(() => {
      setShowLoading(false);
      setShowCompletion(true);
    }, 3000);
  };

  const handleDownload = () => {
    let content = `YOUR LIFE STORY\n\nName: ${name}\nLocation: ${location}\nTarget Word Count: ${selectedWordCount} words\n\n${'='.repeat(50)}\n\n`;
    
    questions.forEach((q) => {
      const answer = answers[q.id];
      if (answer && answer.trim()) {
        content += `${q.category.toUpperCase()}\n`;
        content += `Q${q.id}: ${q.question}\n`;
        content += `Answer: ${answer}\n\n${'-'.repeat(50)}\n\n`;
      }
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name.replace(/\s+/g, '_')}_Life_Story.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReviewAnswers = () => {
    setShowCompletion(false);
    setShowWordSelection(false);
    setShowLoading(false);
    setCurrentQuestionIndex(0);
  };

  const handleStartOver = () => {
    setShowCompletion(false);
    setShowWordSelection(false);
    setShowLoading(false);
    setShowIntro(true);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setName('');
    setLocation('');
    setSelectedWordCount(1500);
  };

  // Loading Screen with Animation
  if (showLoading) {
    return (
      <div className="bg-[#F7F4EF] min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-12 max-w-md w-full text-center">
          <div className="mb-8">
            <LoadingAnimation />
          </div>
          <h2 className="text-3xl font-bold text-[#314B79] mb-3">
            Creating Your Story....
          </h2>
        </div>
      </div>
    );
  }

  // Word Selection Screen
  if (showWordSelection) {
    return (
      <div className="bg-[#F7F4EF] min-h-screen flex items-center justify-center p-4">
        <div className="p-8 max-w-2xl w-full">
          <div className="mb-8">
            <Image
              src="/logo.svg"
              alt="hero background"
              width={24}
              height={24}
              className=" w-full"
            
            />
          </div>

          <h2 className="text-4xl font-bold text-[#314B79] mb-12 text-center">
            Choose one option for create your Story
          </h2>

          <div className="flex justify-center gap-6 mb-8">
            <button
              onClick={() => setSelectedWordCount(1500)}
              className={`px-8 py-6 rounded-lg text-center transition-all ${
                selectedWordCount === 1500
                  ? 'bg-[#314B79] text-white shadow-lg scale-105'
                  : 'bg-white text-[#314B79] border-2 border-slate-200 hover:border-[#314B79]'
              }`}
            >
              <div className="text-3xl font-bold mb-1">1,500</div>
              <div className="text-sm">Words</div>
            </button>

            <button
              onClick={() => setSelectedWordCount(3000)}
              className={`px-8 py-6 rounded-lg text-center transition-all ${
                selectedWordCount === 3000
                  ? 'bg-[#314B79] text-white shadow-lg scale-105'
                  : 'bg-white text-[#314B79] border-2 border-slate-200 hover:border-[#314B79]'
              }`}
            >
              <div className="text-3xl font-bold mb-1">3,000</div>
              <div className="text-sm">Words</div>
            </button>

            <button
              onClick={() => setSelectedWordCount(5000)}
              className={`px-8 py-6 rounded-lg text-center transition-all ${
                selectedWordCount === 5000
                  ? 'bg-[#314B79] text-white shadow-lg scale-105'
                  : 'bg-white text-[#314B79] border-2 border-slate-200 hover:border-[#314B79]'
              }`}
            >
              <div className="text-3xl font-bold mb-1">5,000</div>
              <div className="text-sm">Words</div>
            </button>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleGenerateStory}
              className="px-8 py-3 bg-[#E5B96C] hover:bg-amber-400 text-black font-medium rounded-lg transition-colors"
            >
              Generate story
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Completion Screen
  if (showCompletion) {
    return (
      <div className="bg-[#F7F4EF] min-h-screen flex items-center justify-center p-4">
        <div className="p-8 max-w-3xl w-full text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <CheckCircle size={80} className="text-green-500" />
            </div>
            <h2 className="text-5xl font-bold text-[#314B79] mb-5">
              Congratulations, {name}!
            </h2>
            <p className="text-[#2B2B2B] text-2xl mb-4">
              You&#39;ve completed your life story
            </p>
          </div>

          <div className="bg-white/50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-lg text-slate-600 mb-1">Total Questions</p>
                <p className="text-3xl font-bold text-[#314B79]">{questions.length}</p>
              </div>
              <div>
                <p className="text-lg text-slate-600 mb-1">Questions Answered</p>
                <p className="text-3xl font-bold text-[#314B79]">{answeredCount}</p>
              </div>
              <div>
                <p className="text-lg text-slate-600 mb-1">Your Name</p>
                <p className="text-xl font-semibold text-[#2B2B2B]">{name}</p>
              </div>
              <div>
                <p className="text-lg text-slate-600 mb-1">Location</p>
                <p className="text-xl font-semibold text-[#2B2B2B]">{location}</p>
              </div>
              <div className="col-span-2">
                <p className="text-lg text-slate-600 mb-1">Story Length</p>
                <p className="text-xl font-semibold text-[#2B2B2B]">{selectedWordCount} words</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-3 bg-[#314B79] hover:bg-[#243a5e] text-white font-medium py-4 rounded-lg transition-colors text-lg"
            >
              <Download size={24} />
              Download Your Life Story
            </button>

            <button
              onClick={handleReviewAnswers}
              className="w-full flex items-center justify-center gap-3 bg-[#96D1C7] hover:bg-[#7ec0b5] text-[#2B2B2B] font-medium py-4 rounded-lg transition-colors text-lg"
            >
              <RotateCcw size={24} />
              Review & Edit Answers
            </button>

            <button
              onClick={handleStartOver}
              className="w-full bg-[#E5B96C] hover:bg-amber-400 text-black font-medium py-4 rounded-lg transition-colors text-lg"
            >
              Start a New Story
            </button>
          </div>

          <p className="text-lg text-slate-600 mt-8">
            Thank you for sharing your precious memories and experiences with us.
          </p>
        </div>
      </div>
    );
  }

  if (showIntro) {
    return (
      <div className="bg-[#F7F4EF] min-h-screen flex items-center justify-center">
        <div className="p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-[#314B79] mb-5">Your Life Story</h2>
            <p className="text-[#2B2B2B] text-2xl">Share your journey, memories, and wisdom</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={user?.name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 bg-[#EAEAEA] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-slate-700 mb-2">
                Where do you currently live?
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 bg-[#EAEAEA] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="City, Country"
              />
            </div>

            <button
              onClick={handleStartQuestionnaire}
              disabled={!name.trim() || !location.trim()}
              className="w-full bg-[#E5B96C] hover:bg-amber-400 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors mt-6"
            >
              Begin Your Story
            </button>
          </div>

          <p className="text-center text-lg md:mt-24 2xl:mt-36">
            100 words per answer. You don&#39;t have to answer every question.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F4EF] min-h-screen flex items-center justify-center p-4">
      <div className="p-8 max-w-4xl w-full">
        <div className="text-center 2xl:mb-6">
          <h2 className="text-5xl font-bold text-[#314B79] mb-5">Your Life Story</h2>
          <p className="text-[#2B2B2B] text-2xl mb-4">
            {currentQuestionIndex + 1} to {questions.length} completed
          </p>
          
          {/* Progress bar */}
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-[#314B79] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="2xl:mb-8">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1 border-b border-e-muted-foreground text-2xl font-medium text-[#2B2B2B]">
              {currentQuestion.category}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Question {currentQuestionIndex + 1}:
            </h3>
            <p className="font-bold text-2xl mb-4">
              {currentQuestion.question}
            </p>
            
            <textarea
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswerChange(e.target.value)}
              placeholder={currentQuestion.placeholder}
              className="w-full px-4 py-3 border border-slate-300 bg-[#EFEFEF] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={6}
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2 px-4 py-2 border-2 border-[#96D1C7] rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2 bg-[#E5B96C] hover:bg-amber-400 text-black font-medium rounded-lg transition-colors"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Complete' : 'Next'}
            <ChevronRight size={20} />
          </button>
        </div>

        <p className="text-center text-xl md:mt-4 md:mb-4 2xl:mt-36">
          You can skip some question and still continue to the next step
        </p>
      </div>
    </div>
  );
}

// Loading Animation Component
function LoadingAnimation() {
  return (
    <div className="flex justify-center items-center gap-3">
      <div className="w-4 h-4 rounded-full bg-[#314B79] animate-bounce" style={{ animationDelay: '0ms' }}></div>
      <div className="w-4 h-4 rounded-full bg-[#E5B96C] animate-bounce" style={{ animationDelay: '150ms' }}></div>
      <div className="w-4 h-4 rounded-full bg-[#314B79] animate-bounce" style={{ animationDelay: '300ms' }}></div>
      <div className="w-4 h-4 rounded-full bg-[#E5B96C] animate-bounce" style={{ animationDelay: '450ms' }}></div>
    </div>
  );
}