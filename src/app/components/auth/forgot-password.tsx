// "use client"

// import Image from 'next/image';
// import { useState, FormEvent } from 'react';



// export default function ForgetPasswordPage() {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("passoword fortet ")
//     // Handle login logic here
//   };

//   const handleEmailChange = (value: string) => {
//     setEmail(value);
   
//   };




//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-lg max-w-5xl h-[600px] w-full grid md:grid-cols-2 overflow-hidden">
//         {/* Left Section - Welcome */}
//         <div className="p-12 flex flex-col justify-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Forgot Password?</h2>
          
//           <div className="flex justify-center items-center">
//             <Image src="/icon/forgot-password.svg" alt='forgot-iamge' height={500} width={500}/> 
//           </div>
//         </div>

//         {/* Right Section - Form */}
//         <div className="pr-12 flex flex-col justify-center bg-white">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-xl font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => handleEmailChange(e.target.value)}
//                   placeholder="Email"
//                   className="block w-full pl-12 pr-4 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
//                 />
//               </div>
//             </div>

            
//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-[#00695C] text-white py-5 text-xl px-4 mt-16 rounded-lg font-semibold hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition"
//             >
//               Send Code
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }













// app/forgot-password/page.tsx
"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import { useForgetPasswordMutation } from "@/redux/api/authApi";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const [sendOtp, { isLoading }] = useForgetPasswordMutation();


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    try {
      await sendOtp({ email }).unwrap();
      toast.success("OTP sent to your email!");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to send OTP");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl h-[600px] w-full grid md:grid-cols-2 overflow-hidden">
        {/* Left */}
        <div className="p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Forgot Password?</h2>
          <div className="flex justify-center">
            <Image src="/icon/forgot-password.svg" alt="forgot" width={500} height={500} />
          </div>
        </div>

        {/* Right */}
        <div className="pr-12 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-xl font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="block w-full pl-12 pr-4 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#00695C] text-white py-5 text-xl rounded-lg font-semibold hover:bg-teal-800 disabled:opacity-70"
            >
              {isLoading ? "Sending..." : "Send Code"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}