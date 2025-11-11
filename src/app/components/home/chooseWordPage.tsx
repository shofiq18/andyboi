/* eslint-disable @typescript-eslint/no-explicit-any */















// "use client"

// import React, { useState, useEffect } from 'react';
// import { Lock, CheckCircle, Loader2 } from 'lucide-react';
// import { useGetAllUserPlansQuery } from '@/redux/api/planApi';
// import { useRouter } from 'next/navigation';

// type PlanType = {
//   id: string;
//   name: string;
//   words: number;
//   amount: number;
// };

// export default function StorySelectionPage() {
//   const [selectedWords, setSelectedWords] = useState<number | null>(null);
//   const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const { data: plansResponse, isLoading } = useGetAllUserPlansQuery();
//   const router = useRouter();

//   const plans = plansResponse?.data ?? [];

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
//   }, [plans]);

//   const handleWordSelection = (words: number) => {
//     setSelectedWords(words);
    
//     const plan = plans.find(p => p.words === words);
//     if (plan) {
//       setSelectedPlan(plan);
//     }
//   };

//   // PayPal Payment Handler
//   const handlePayPalPayment = async () => {
//     if (!selectedPlan) return;
//     setIsProcessing(true);

//     try {
//       // Call your backend API to create PayPal order
//       const response = await fetch('/api/payment/paypal/create-order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // Add your auth token if required
//           // 'Authorization': `Bearer ${yourAuthToken}`,
//         },
//         body: JSON.stringify({
//           planId: selectedPlan.id,
//           planName: selectedPlan.name,
//           amount: selectedPlan.amount,
//           words: selectedPlan.words,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create PayPal order');
//       }

//       const data = await response.json();
//       console.log(data)
      
//       // Backend should return { approvalUrl: "paypal_approval_url" }
//       if (data.approvalUrl) {
//         // Redirect to PayPal for approval
//         window.location.href = data.approvalUrl;
//       } else if (data.orderId) {
//         // Alternative: if backend returns orderId
//         window.location.href = `https://www.paypal.com/checkoutnow?token=${data.orderId}`;
//       } else {
//         throw new Error('Invalid response from server');
//       }
//     } catch (error) {
//       console.error('PayPal payment error:', error);
//       alert('Failed to initialize PayPal payment. Please try again.');
//       setIsProcessing(false);
//     }
//   };
  

//   // Loading state for plans
//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 animate-spin text-blue-900 mx-auto mb-4" />
//           <p className="text-gray-600">Loading plans...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#F7F4EF] py-12 px-4 overflow-y-auto">
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
//               disabled={isProcessing}
//               className={`bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
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

//         {/* Pricing Card */}
//         {selectedPlan && (
//           <div className="bg-[#314B79] rounded-2xl p-8 shadow-lg max-w-md mx-auto">
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

//             {/* PayPal Payment Button */}
//             {!isProcessing ? (
//               <button
//                 onClick={handlePayPalPayment}
//                 className="w-full bg-[#E5B96C] hover:bg-[#D4A24D] text-gray-900 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
//               >
//                 <Lock className="w-5 h-5" />
//                 Pay with PayPal - ${selectedPlan.amount}
//               </button>
//             ) : (
//               <div className="space-y-4">
//                 <div className="w-full bg-gray-400 text-gray-900 font-semibold py-4 rounded-lg flex items-center justify-center gap-2">
//                   <Loader2 className="w-5 h-5 animate-spin" />
//                   Redirecting to PayPal...
//                 </div>
//                 <p className="text-white text-center text-sm">
//                   Please wait while we redirect you to PayPal
//                 </p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }












"use client"

import React, { useState, useEffect } from 'react';
import { Lock, CheckCircle, Loader2 } from 'lucide-react';
import { useGetAllUserPlansQuery } from '@/redux/api/planApi';
import { useCreatePaymentMutation } from '@/redux/api/paymentApi';
import { useRouter } from 'next/navigation';
import { useGetMe } from '@/hooks/useGetMe';

type PlanType = {
  id: string;
  name: string;
  words: number;
  amount: number;
};

export default function StorySelectionPage() {
  const [selectedWords, setSelectedWords] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const { data: plansResponse, isLoading: isLoadingPlans } = useGetAllUserPlansQuery();
  const [createPayment, { isLoading: isProcessing }] = useCreatePaymentMutation();
  const { user } = useGetMe();
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const plans = plansResponse?.data ?? [];

  const staticFeatures = [
    'Complete, professionally written life story',
    'Beautifully formatted PDF download',
    'Unlimited access to your story',
    'Share with family and friends'
  ];

  // Set default plan (Basic) on mount
  useEffect(() => {
    if (plans.length > 0) {
      const basicPlan = plans.find(p => p.name === 'Basic');
      if (basicPlan) {
        setSelectedWords(basicPlan.words);
        setSelectedPlan(basicPlan);
      }
    }
  }, [plans]);

  const handleWordSelection = (words: number) => {
    setSelectedWords(words);
    
    const plan = plans.find(p => p.words === words);
    if (plan) {
      setSelectedPlan(plan);
    }
  };

  // PayPal Payment Handler with RTK Query
  const handlePayPalPayment = async () => {
    // Check if plan is selected
    if (!selectedPlan) {
      alert('Please select a plan first');
      return;
    }

    // Check if user is logged in and has email
    if (!user?.email) {
      alert('Please login to continue with payment');
      router.push('/login'); // Redirect to login page
      return;
    }

    try {
      console.log('Creating payment with:', {
        planId: selectedPlan.id,
        email: user.email,
      });

      // Call API using RTK Query mutation
      const response = await createPayment({
        planId: selectedPlan.id,
        email: user.email,
      }).unwrap();

      console.log('Payment Response:', response);

      // Check if payment session created successfully
      if (response.success && response.data?.approvalUrl) {
        // Store payment info in localStorage for verification after return
        localStorage.setItem('pendingPayment', JSON.stringify({
          orderId: response.data.orderId,
          paymentId: response.data.paymentId,
          planId: selectedPlan.id,
          planName: selectedPlan.name,
          amount: selectedPlan.amount,
          words: selectedPlan.words,
          timestamp: new Date().toISOString(),
        }));

        console.log('Redirecting to PayPal:', response.data.approvalUrl);

        // Redirect to PayPal
        window.location.href = response.data.approvalUrl;
      } else {
        throw new Error(response.message || 'Invalid response from server');
      }
    } catch (error: any) {
      console.error('PayPal payment error:', error);
      
      // Show user-friendly error message
      const errorMessage = error?.data?.message 
        || error?.message 
        || 'Failed to initialize PayPal payment. Please try again.';
      
      alert(errorMessage);
    }
  };

  // Loading state for plans
  if (isLoadingPlans) {
    return (
      <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading plans...</p>
        </div>
      </div>
    );
  }

  // No plans available
  if (plans.length === 0) {
    return (
      <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No Plans Available
          </h2>
          <p className="text-gray-600 mb-6">
            Please contact support or try again later.
          </p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF] py-12 px-4 overflow-y-auto">
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

            {/* PayPal Payment Button */}
            {!isProcessing ? (
              <button
                onClick={handlePayPalPayment}
                disabled={!user?.email}
                className="w-full bg-[#E5B96C] hover:bg-[#D4A24D] disabled:bg-gray-400 disabled:cursor-not-allowed text-gray-900 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Lock className="w-5 h-5" />
                {user?.email 
                  ? `Pay with PayPal - $${selectedPlan.amount}`
                  : 'Please Login to Pay'
                }
              </button>
            ) : (
              <div className="space-y-4">
                <div className="w-full bg-gray-400 text-gray-900 font-semibold py-4 rounded-lg flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Redirecting to PayPal...
                </div>
                <p className="text-white text-center text-sm">
                  Please wait while we redirect you to PayPal
                </p>
              </div>
            )}

            {/* Login Hint */}
            {!user?.email && (
              <p className="text-white text-center text-sm mt-4">
                You need to be logged in to make a payment
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}