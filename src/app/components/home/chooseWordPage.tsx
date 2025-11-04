"use client"

import React, { useState } from 'react';
import { Lock, CheckCircle } from 'lucide-react';

type PlanType = {
  id: string;
  name: string;
  words: number;
  amount: number;
};

export default function StorySelectionPage() {
  const [selectedWords, setSelectedWords] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);

  // Mock plans data - In real app, fetch from useGetAllPlansQuery()
  const plans: PlanType[] = [
    {
      id: '1',
      name: 'Basic',
      words: 1500,
      amount: 15
    },
    {
      id: '2',
      name: 'Standard',
      words: 3000,
      amount: 15
    },
    {
      id: '3',
      name: 'Premium',
      words: 5000,
      amount: 15
    }
  ];

  const staticFeatures = [
    'Complete, professionally written life story',
    'Beautifully formatted PDF download',
    'Unlimited access to your story',
    'Share with family and friends'
  ];

  const handleWordSelection = (words: number) => {
    setSelectedWords(words);
    
    // Find the matching plan based on words
    const plan = plans.find(p => p.words === words);
    if (plan) {
      setSelectedPlan(plan);
      console.log('Selected Plan:', {
        id: plan.id,
        name: plan.name,
        words: plan.words,
        amount: plan.amount
      });
    }
  };

  const handleGenerateStory = () => {
    if (!selectedPlan) return;

    console.log('Redirecting to payment with plan:', selectedPlan);
    
    // In real app, redirect to Stripe or your payment page
    // You can pass the plan data as query params or state
    // Example using Next.js router:
    // router.push({
    //   pathname: '/payment',
    //   query: {
    //     planId: selectedPlan.id,
    //     amount: selectedPlan.amount,
    //     planName: selectedPlan.name
    //   }
    // });
    
    // Or redirect to Stripe Checkout
    // window.location.href = `/api/create-checkout-session?planId=${selectedPlan.id}`;
    
    alert(`Redirecting to payment page\nPlan: ${selectedPlan.name}\nAmount: $${selectedPlan.amount}`);
  };

  return (
    <div className="h-[cal(100hr-4rem)] bg-[#F7F4EF] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Choose one option for create your Story
        </h1>

        {/* Word Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => handleWordSelection(plan.words)}
              className={`bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all transform hover:scale-105 ${
                selectedWords === plan.words
                  ? 'ring-4 ring-blue-500 scale-105'
                  : ''
              }`}
            >
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {plan.words.toLocaleString()}
                </p>
                <p className="text-gray-600 font-medium">Word&#39;s</p>
              </div>
            </button>
          ))}
        </div>

        {/* Pricing Card - Shows when a plan is selected */}
        {selectedPlan && (
          <div className="bg-[#314B79] rounded-2xl p-8 shadow-lg max-w-md mx-auto animate-fadeIn">
            {/* Price */}
            <div className="text-center mb-6">
              <div className="mb-2">
                <span className="text-5xl font-bold text-white">
                  ${selectedPlan.amount}
                </span>
                <span className="text-white ml-2">One-time</span>
              </div>
              <p className="text-white font-semibold text-lg">
                What You&#39;ll Get
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {staticFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerateStory}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Lock className="w-5 h-5" />
              Generate Your Story - ${selectedPlan.amount}
            </button>
          </div>
        )}

        {/* Initial State Message */}
        {!selectedPlan && (
          <div className="text-center text-gray-500 mt-12">
            <p className="text-lg">Select a word count above to see your plan details</p>
          </div>
        )}
      </div>
    </div>
  );
}