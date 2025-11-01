import Image from "next/image";

export default function StartStoryPage() {
  return (
    <div className="md:mt-60 flex justify-end relative">
      <div className="w-1/2">
        <Image
          src="/footer.svg"
          alt="hero background"
          width={1500}
          height={1500}
          className="flex justify-end items-end w-full"
        />
      </div>

      <div className="absolute md:left-20 2xl:left-60 bottom-40 ">
        <div className="max-w-7xl w-full mx-auto">
          <div className="w-full">
            <h1 className="text-4xl md:text-6xl 2xl:text-[90px] font-bold text-[#2B2B2B] leading-tight">
              Start your story today.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
