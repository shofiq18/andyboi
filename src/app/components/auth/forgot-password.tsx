









// "use client";

// import Image from "next/image";
// import { useState, FormEvent } from "react";
// import toast from "react-hot-toast";
// import { useForgetPasswordMutation } from "@/redux/api/authApi";

// export default function ForgetPasswordPage() {
//   const [email, setEmail] = useState("");
//   const [sendOtp, { isLoading }] = useForgetPasswordMutation();


//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!email) return;

//     try {
//       await sendOtp({ email }).unwrap();
//       toast.success("OTP sent to your email!");
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (err: any) {
//       toast.error(err.data?.message || "Failed to send OTP");
//     }
//   };

//   return (
//     <div className=" pb-40 md:pb-0 md:h-[calc(84vh-1rem)] bg-[#F7F4EF] flex items-center justify-center p-4">
//       <div className="  max-w-5xl h-[600px] w-full grid md:grid-cols-2 ">
//         {/* Left */}
//         <div className="p-12 flex flex-col justify-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Forgot Password?</h2>
//           <div className="flex justify-center">
//             <Image src="/forgot.svg" alt="forgot" width={500} height={500} />
//           </div>
//         </div>

//         {/* Right */}
//         <div className="p-6 md:mx-12 my-12 pb-20 flex flex-col border border-gray-300 rounded-2xl justify-center">
//           <form onSubmit={handleSubmit} className="space-y-6">
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
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="you@example.com"
//                   required
//                   className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full md:mt-8 2xl:mt-8 bg-[#E5B96C] hover:bg-yellow-500 text-white font-semibold py-3 px-4 rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
//             >
//               {isLoading ? "Sending..." : "Send Code"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { useState, FormEvent, useEffect } from "react";
import toast from "react-hot-toast";
import { useForgetPasswordMutation } from "@/redux/api/authApi";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const [sendOtp, { isLoading }] = useForgetPasswordMutation();

  // Resend state
  const [canResend, setCanResend] = useState(true);
  const [timer, setTimer] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Countdown effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || isSubmitting || !canResend) return;

    setIsSubmitting(true);
    setCanResend(false);

    try {
      await sendOtp({ email }).unwrap();
      toast.success("OTP sent! Check your email.");

      // Start 60-second cooldown
      setTimer(60);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to send OTP");
      setCanResend(true); // Allow retry immediately on error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:min-h-[calc(89vh-4rem)] bg-[#F7F4EF] flex items-center justify-center p-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8  overflow-hidden">
        {/* Left - Illustration */}
        <div className=" md:block p-12">
          <div className="relative h-full">
            <Image
              src="/forgot.svg"
              alt="Forgot password illustration"
              width={500}
              height={500}
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Right - Form */}
        <div className="p-4 md:p-6 flex flex-col justify-center border border-gray-300 rounded-2xl ">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
          <p className="text-gray-600 mb-8">Enter your email to receive a verification code</p>

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
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>
            </div>

            {/* Submit / Resend Button */}
            <button
              type="submit"
              disabled={isLoading || isSubmitting || !canResend}
              className="w-full bg-[#E5B96C] hover:bg-yellow-600 text-white font-semibold py-4 rounded-xl transition flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading || isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending...
                </>
              ) : timer > 0 ? (
                `Resend in ${timer}s`
              ) : (
                "Send Code"
              )}
            </button>
          </form>

          {/* Optional: Show resend hint */}
          {timer > 0 && (
            <p className="mt-4 text-center text-sm text-gray-500">
              Didn&#39;t receive it? You can resend in {timer} seconds.
            </p>
          )}

          <div className="mt-8 text-center">
            <a href="/login" className="text-teal-600 hover:underline font-medium">
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


