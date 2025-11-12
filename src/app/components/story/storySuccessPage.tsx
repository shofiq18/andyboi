"use client"

import { useSearchParams } from 'next/navigation';
import { CheckCircle, Download, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PaymentInfo {
  orderId: string;
  planId: string;
  planName: string;
  amount: number;
  paymentMethod: 'stripe' | 'paypal';
  status: string;
  timestamp: string;
}

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  // const planId = searchParams.get('plan_id');
  const orderId = searchParams.get('order_id');
  const sessionId = searchParams.get('session_id');
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);

  useEffect(() => {
    // Get payment info from localStorage
    const lastPayment = localStorage.getItem('lastPayment');
    if (lastPayment) {
      try {
        setPaymentInfo(JSON.parse(lastPayment) as PaymentInfo);
      } catch (error) {
        console.error('Error parsing payment info:', error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full text-center">
        <div className="mb-6">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your story plan has been activated.
          </p>
        </div>

        {paymentInfo && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-3">Order Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Plan:</span>
                <span className="font-medium">{paymentInfo.planName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-medium">${paymentInfo.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-medium capitalize">{paymentInfo.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium text-xs break-all">{orderId || sessionId}</span>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <button
            onClick={() => window.location.href = '/story-generator'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Start Creating Your Story
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          A confirmation email has been sent to your email address.
        </p>
      </div>
    </div>
  );
}