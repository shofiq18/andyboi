







// "use client"

// import React, { useState, useEffect } from 'react';
// import { Lock, CheckCircle } from 'lucide-react';
// import { useGetAllUserPlansQuery } from '@/redux/api/planApi';

// type PlanType = {
//   id: string;
//   name: string;
//   words: number;
//   amount: number;
// };

// export default function StorySelectionPage() {
//   const [selectedWords, setSelectedWords] = useState<number | null>(null);
//   const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
//  const { data: plansResponse,} = useGetAllUserPlansQuery();

//   console.log('Plans Response:', plansResponse);



//   // Real plans from API
//   const plans = plansResponse?.data ?? [];
//   console.log('Fetched Plans:', plans); 

//   const staticFeatures = [
//     'Complete, professionally written life story',
//     'Beautifully formatted PDF download',
//     'Unlimited access to your story',
//     'Share with family and friends'
//   ];

//   // Set default plan (Basic) on mount
//   useEffect(() => {
//     const basicPlan = plans.find(p => p.name === 'Basic');
//     if (basicPlan) {
//       setSelectedWords(basicPlan.words);
//       setSelectedPlan(basicPlan);
//     }
//   }, []); // Empty dependency array → runs once on mount

//   const handleWordSelection = (words: number) => {
//     setSelectedWords(words);
    
//     const plan = plans.find(p => p.words === words);
//     if (plan) {
//       setSelectedPlan(plan);
//       console.log('Selected Plan:', {
//         id: plan.id,
//         name: plan.name,
//         words: plan.words,
//         amount: plan.amount
//       });
//     }
//   };

//   const handleGenerateStory = () => {
//     if (!selectedPlan) return;

//     console.log('Redirecting to payment with plan:', selectedPlan);
    
//     alert(`Redirecting to payment page\nPlan: ${selectedPlan.name}\nAmount: $${selectedPlan.amount}`);
//   };

//   return (
//     <div className="h-[calc(89vh-4rem)] bg-[#F7F4EF] py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         {/* Title */}
//         <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
//           Choose one option for create your Story
//         </h1>

//         {/* Word Selection Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
//           {plans?.map((plan) => (
//             <button
//               key={plan.id}
//               onClick={() => handleWordSelection(plan.words)}
//               className={`bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all transform hover:scale-105 ${
//                 selectedWords === plan.words
//                   ? 'ring-4 ring-blue-500 scale-105'
//                   : ''
//               }`}
//             >
//               <div className="text-center">
//                 <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
//                   {plan.words.toLocaleString()}
//                 </p>
//                 <p className="text-gray-600 font-medium">Word&#39;s</p>
//               </div>
//             </button>
//           ))}
//         </div>

//         {/* Pricing Card - Always shows (default: Basic) */}
//         {selectedPlan && (
//           <div className="bg-[#314B79] rounded-2xl p-8 shadow-lg max-w-md mx-auto animate-fadeIn">
//             {/* Price */}
//             <div className="text-center mb-6">
//               <div className="mb-2">
//                 <span className="text-5xl font-bold text-white">
//                   ${selectedPlan.amount}
//                 </span>
//                 <span className="text-white ml-2">One-time</span>
//               </div>
//               <p className="text-white font-semibold text-lg">
//                 What You&#39;ll Get
//               </p>
//             </div>

//             {/* Features List */}
//             <div className="space-y-4 mb-8">
//               {staticFeatures.map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
//                   <span className="text-white text-sm">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Generate Button */}
//             <button
//               onClick={handleGenerateStory}
//               className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
//             >
//               <Lock className="w-5 h-5" />
//               Generate Your Story - ${selectedPlan.amount}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }










"use client"

import React, { useState, useEffect } from 'react';
import { Lock, CheckCircle, CreditCard, Loader2, ArrowLeft } from 'lucide-react';
import { useGetAllUserPlansQuery } from '@/redux/api/planApi';

type PlanType = {
  id: string;
  name: string;
  words: number;
  amount: number;
};

type PaymentMethod = 'stripe' | 'paypal' | null;

export default function StorySelectionPage() {
  const [selectedWords, setSelectedWords] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { data: plansResponse } = useGetAllUserPlansQuery();

  const plans = plansResponse?.data ?? [];

  const staticFeatures = [
    'Complete, professionally written life story',
    'Beautifully formatted PDF download',
    'Unlimited access to your story',
    'Share with family and friends'
  ];

  // Set default plan (Basic) on mount
  useEffect(() => {
    const basicPlan = plans.find(p => p.name === 'Basic');
    if (basicPlan) {
      setSelectedWords(basicPlan.words);
      setSelectedPlan(basicPlan);
    }
  }, [plans]);

  const handleWordSelection = (words: number) => {
    setSelectedWords(words);
    setPaymentMethod(null);
    
    const plan = plans.find(p => p.words === words);
    if (plan) {
      setSelectedPlan(plan);
    }
  };

  // Stripe Payment Handler - Calls your backend API
  const handleStripePayment = async () => {
    if (!selectedPlan) return;
    setIsProcessing(true);

    try {
      // Call your backend API to create Stripe checkout session
      const response = await fetch('/api/payment/stripe/create-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add your auth token if required
          // 'Authorization': `Bearer ${yourAuthToken}`,
        },
        body: JSON.stringify({
          planId: selectedPlan.id,
          planName: selectedPlan.name,
          amount: selectedPlan.amount,
          words: selectedPlan.words,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment session');
      }

      const data = await response.json();
      
      // Backend should return { url: "stripe_checkout_url" }
      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else if (data.sessionId) {
        // Alternative: if backend returns sessionId instead of url
        // Redirect to Stripe Checkout with session ID
        window.location.href = `https://checkout.stripe.com/pay/${data.sessionId}`;
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Stripe payment error:', error);
      alert('Failed to initialize payment. Please try again.');
      setIsProcessing(false);
    }
  };

  // PayPal Payment Handler - Calls your backend API
  const handlePayPalPayment = async () => {
    if (!selectedPlan) return;
    setIsProcessing(true);

    try {
      // Call your backend API to create PayPal order
      const response = await fetch('/api/payment/paypal/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add your auth token if required
          // 'Authorization': `Bearer ${yourAuthToken}`,
        },
        body: JSON.stringify({
          planId: selectedPlan.id,
          planName: selectedPlan.name,
          amount: selectedPlan.amount,
          words: selectedPlan.words,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create PayPal order');
      }

      const data = await response.json();
      
      // Backend should return { approvalUrl: "paypal_approval_url" }
      if (data.approvalUrl) {
        // Redirect to PayPal for approval
        window.location.href = data.approvalUrl;
      } else if (data.orderId) {
        // Alternative: if backend returns orderId, construct PayPal URL
        window.location.href = `https://www.paypal.com/checkoutnow?token=${data.orderId}`;
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('PayPal payment error:', error);
      alert('Failed to initialize PayPal payment. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] py-12 px-4 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Choose one option for create your Story
        </h1>

        {/* Word Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {plans?.map((plan) => (
            <button
              key={plan.id}
              onClick={() => handleWordSelection(plan.words)}
              disabled={isProcessing}
              className={`bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
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

        {/* Pricing Card */}
        {selectedPlan && (
          <div className="bg-[#314B79] rounded-2xl p-8 shadow-lg max-w-md mx-auto">
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

            {/* Payment Method Selection */}
            {!paymentMethod && !isProcessing && (
              <div className="space-y-3">
                <p className="text-white text-center font-medium mb-4">
                  Choose Payment Method
                </p>
                
                {/* Stripe Button */}
                <button
                  onClick={() => setPaymentMethod('stripe')}
                  className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <CreditCard className="w-5 h-5" />
                  Pay with Card (Stripe)
                </button>

                {/* PayPal Button */}
                <button
                  onClick={() => setPaymentMethod('paypal')}
                  className="w-full bg-[#E5B96C] hover:bg-[#FFB700] text-gray-900 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.04.22-.63 3.993-.032.17a.804.804 0 01-.794.679H7.72a.483.483 0 01-.477-.558L7.418 20h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502z"/>
                  </svg>
                  Pay with PayPal
                </button>
              </div>
            )}
            {/* Stripe Payment Confirmation */}
            {paymentMethod === 'stripe' && !isProcessing && (
              <div className="space-y-4">
                <button
                  onClick={handleStripePayment}
                  className="w-full bg-[#E5B96C] hover:bg-[#D4A24D] text-gray-900 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Lock className="w-5 h-5" />
                  Proceed to Stripe Checkout - ${selectedPlan.amount}
                </button>
                <button
                  onClick={() => setPaymentMethod(null)}
                  className="w-full bg-transparent border border-white text-white py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Payment Options
                </button>
              </div>
            )}

            {/* PayPal Payment Confirmation */}
            {paymentMethod === 'paypal' && !isProcessing && (
              <div className="space-y-4">
                <button
                  onClick={handlePayPalPayment}
                  className="w-full bg-[#E5B96C] hover:bg-[#D4A24D] text-gray-900 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Lock className="w-5 h-5" />
                  Proceed to PayPal - ${selectedPlan.amount}
                </button>
                <button
                  onClick={() => setPaymentMethod(null)}
                  className="w-full bg-transparent border border-white text-white py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Payment Options
                </button>
              </div>
            )}

            {/* Processing State */}
            {isProcessing && (
              <div className="space-y-4">
                <div className="w-full bg-gray-400 text-gray-900 font-semibold py-4 rounded-lg flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Redirecting to payment...
                </div>
                <p className="text-white text-center text-sm">
                  Please wait while we redirect you to the payment page
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}