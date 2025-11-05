





import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="">
      {/* Background Image */}
      <div className="min-h-screen w-full absolute inset-0 overflow-hidden flex items-center justify-center">
        <Image
          src="/BG For andy.svg"
          alt="hero background"
          fill
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="  flex-col sm:px-6 lg:px-8 pt-14 md:pt-0 pb-12 md:pb-0   relative  left-0 flex-1 flex items-center -inset-20 z-10 justify-center px-4">
        {/* Book Cover */}
        <div className="w-full max-w-xs md:max-w-7xl mx-auto  ">
          <Image
            src="/Book cover for andy.svg"
            alt="hero book"
            width={1500}
            height={1500}
            className="w-full h-auto drop-shadow-xl"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="max-w-4xl text-center flex flex-col items-center space-y-3 mt-0 md:-mt-16 lg:-mt-34">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C4A7C] leading-tight px-2">
            Once Upon A Life
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 px-4">
            Turn your life into a timeless fairytale.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 px-4 leading-relaxed">
            Your life is full of moments worth remembering and advice that
            deserves to be shared. At Once Upon A Life, we turn your memories
            into a magical story written for children but enjoyed by all, so
            your legacy can live on in their hearts and imaginations.
          </p>

          <Link href="/start">
          <button className="bg-[#E5B96C] cursor-pointer hover:bg-[#c49350] px-6 sm:px-8 py-3 mt-8 sm:mt-10 md:mt-12 rounded-lg font-semibold text-base sm:text-lg transition-colors shadow-lg">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;