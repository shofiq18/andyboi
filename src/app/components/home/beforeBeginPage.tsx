import React from 'react';
import { MessageCircle, Info, Lightbulb, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function BeforeYouBegin() {
  return (
    <div className="md:h-[calc(97vh-4rem)] 2xl:h-[calc(89vh-4rem)] bg-[#F7F4EF] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 rounded-full p-4">
            <MessageCircle className="w-8 h-8 text-gray-600" strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Before You Begin
        </h1>

        {/* 100-Word Limit Card */}
        <div className="bg-white rounded-lg border border-blue-200 p-6 mb-4 shadow-sm">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                100-Word Limit
              </h2>
              <p className="text-gray-600 text-sm">
                Your answer should be concise and within 100 words. Quality over quantity!
              </p>
            </div>
          </div>
        </div>

        {/* Skip Allowance Card */}
        <div className="bg-white rounded-lg border border-yellow-200 p-6 mb-6 shadow-sm">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Skip Allowance
              </h2>
              <p className="text-gray-600 text-sm">
                You may skip up to 5 question. After that, you&#39;ll need to answer all remaining questions.
              </p>
            </div>
          </div>
        </div>

        {/* Tips for Success */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            <h3 className="text-lg font-semibold text-gray-700">
              Tips for Success
            </h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm">
                Be specific and direct - Focus on the main points without unnecessary details.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm">
                Use clear language - Write in a way that anyone can understand.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm">
                Stay on topic - Answer what&#39;s being asked without going off track.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm">
                Review before submitting - Take a moment to read through your answer
              </p>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <Link href="/choose-word">
        <div className="flex justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-md transition-colors duration-200">
            Continue to Question
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
}