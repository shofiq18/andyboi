"use client";

import Image from "next/image";

export default function WhySpecialPage() {
  return (
    <div className="flex justify-between items-start max-w-7xl mx-auto gap-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-[#2B2B2B]]">Why It&#39;s Special</h1>
        <h3 className="text-xl font-semibold text-[#2B2B2B]">Our process blends creativity and technology in harmony.</h3>
        <p className="text-lg">
          Life is beautiful, and it should be remembered as such. This is a <br />
          chance to capture memories and lessons in a way that can be <br /> cherished
          forever.
        </p>
      </div>
      <div>
        <Image
          src="/Why special.svg"
          alt="hero background"
          width={1500}
          height={1500}
          className=" w-full"
          priority
        />
      </div>
    </div>
  );
}
