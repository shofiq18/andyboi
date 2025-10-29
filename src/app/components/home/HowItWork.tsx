import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          How It Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 01 */}
          <div className="py-5 relative inline-block">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#314B79] to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#314B79] to-transparent"></div>
            <div className="p-10 hover:border-[#314B79] transition-colors relative">
              <div className="absolute top-0 inset-x-10 h-0.5 bg-gradient-to-r from-transparent via-[#314B79] to-transparent"></div>
              <div className="absolute bottom-0 inset-x-10 h-0.5 bg-gradient-to-r from-transparent via-[#314B79] to-transparent"></div>
              <div className="mb-4">
                <span className="text-6xl font-bold text-[#314B79]">01</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tell us your story
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Answer a series of thoughtful questions to give a scope of your
                life.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="py-5 relative inline-block">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#314B79] to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#314B79] to-transparent"></div>
            <div className="p-10 hover:border-[#314B79] transition-colors relative">
              <div className="absolute top-0 inset-x-10 h-0.5 bg-gradient-to-r from-transparent via-[#314B79] to-transparent"></div>
              <div className="absolute bottom-0 inset-x-10 h-0.5 bg-gradient-to-r from-transparent via-[#314B79] to-transparent"></div>
              <div className="-ml-8">
              <span className="text-6xl font-bold text-[#314B79]">02</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              We craft the tale
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Writer Andrew Tudehope and our modern A.I. transform your memories
              into a beautiful fairytale world uniquely yours.
            </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="py-5 relative inline-block">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#314B79] to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#314B79] to-transparent"></div>
            <div className="p-10 hover:border-[#314B79] transition-colors relative">
              <div className="absolute top-0 inset-x-10 h-0.5 bg-gradient-to-r from-transparent via-[#314B79] to-transparent"></div>
              <div className="absolute bottom-0 inset-x-10 h-0.5 bg-gradient-to-r from-transparent via-[#314B79] to-transparent"></div>
              <div className="-ml-8">
              <span className="text-6xl font-bold text-[#314B79]">03</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Keep it forever
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Choose to receive your story as a digital keepsake or a printed
              picture book filled with your favourite photos.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
