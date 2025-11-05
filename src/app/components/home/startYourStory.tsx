import Image from "next/image";

export default function StartStoryPage() {
  return (
    <div className="md:mt-24 mt-10 md:flex justify-end relative">
      <div className="md:w-1/2">
        <Image
          src="/footer.svg"
          alt="hero background"
          width={1500}
          height={1500}
          className="flex justify-end items-end w-full"
        />
      </div>

      <div className="md:absolute md:left-20 2xl:left-60 bottom-40 ">
        <div className="max-w-7xl w-full mx-auto">
          <div className="w-full px-6 md:px-0 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-6xl 2xl:text-[90px] font-bold text-[#2B2B2B] leading-tight">
              Start your story today.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
