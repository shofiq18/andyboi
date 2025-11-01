import Image from "next/image";

export default function YourStoryPage() {
  return (
    <div className="text-center relative  md:mt-70 2xl:mt-90">
      <div>
        <Image
          src="/your story forever.svg"
          alt="hero background"
          width={1500}
          height={1500}
          className=" w-full"
          priority
        />
      </div>

      <div className=" flex flex-col  absolute items-center space-y-3 max-w-2xl mx-auto inset-0 md:-top-80 2xl:-top-100 justify-center ">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#2B2B2B] leading-tight">
          Your Story, Forever
        </h1>
        <p className="text-base md:text-lg text-[#2B2B2B]">
          Life is beautiful, and it should be remembered as such. This is a
          chance to capture memories and lessons in a way that can be cherished
          forever.
        </p>
      </div>
    </div>
  );
}
