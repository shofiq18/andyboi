// import Image from 'next/image';
// import React from 'react';

// const Hero: React.FC = () => {
//   return (
//     <div className=" relative min-h-screen bg-beige-100 flex flex-col items-center gap-4 justify-center text-center px-4 py-12 relative">
//       <Image src="/hero section.svg" alt='hero' width={400} height={400}/>
//       <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 mt-24">
//         Once Upon A Life
//       </h1>
//       <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-md">
//         Turn your life into a timeless fairytale. Your life is full of moments worth remembering and stories that deserve to be shared. At Once Upon A Life, we turn your memories into a magical story written for children but enjoyed by all, so your legacy can live on in their hearts and imaginations.
//       </p>
//       <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition">
//         Get Started
//       </button>
//       <div className="mt-8">
//         <a href="#" className="text-blue-500 hover:underline">
//           Sign In
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="">
      {/* Background Image */}
      <div className=" min-h-screen w-[100%] absolute overflow-hidden inset-0   flex items-center justify-center">

        <Image
          src="/BG For andy.svg"
          alt="hero background"
          width={1500}
          height={1500}
          className=" w-full"
          priority
        />
      </div>
      {/* Main Content */}
      <div className="relative  left-0 flex-1 flex items-center -inset-20 z-10 justify-center px-4 ">
        {/* Right side - Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <div>
            <Image
              src="/Book cover for andy.svg"
              alt="hero background"
              width={1500}
              height={1500}
              className=" w-full"
              priority
            />
          </div>
          <div className=" flex flex-col items-center space-y-3 -mt-34">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#2C4A7C] leading-tight">
            Once Upon A Life
          </h1>

          <p className="text-xl md:text-xl font-semibold text-gray-800">
            Turn your life into a timeless fairytale.
          </p>

          <p className="text-base md:text-base text-gray-700 max-w-2xl mx-auto lg:mx-0">
            Your life is full of moments worth remembering and advice that
            deserves to be shared. At Once Upon A Life, we turn your memories
            into a magical story written for children but enjoyed by all, so
            your legacy can live on in their hearts and imaginations.
          </p>

          <button className="bg-[#E5B96C] hover:bg-[#c49350]  px-8 py-3 mt-12 rounded-lg font-semibold text-lg transition-colors shadow-lg">
            Get Started
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
