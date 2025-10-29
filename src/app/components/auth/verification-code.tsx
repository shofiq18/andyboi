// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"

// interface VerificationCodeProps {
//   onVerify: () => void
// }

// export default function VerificationCode({ onVerify }: VerificationCodeProps) {
//   const [code, setCode] = useState(["", "", "", ""])
//   const [timeLeft, setTimeLeft] = useState(43)
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
//     }, 1000)
//     return () => clearInterval(timer)
//   }, [])

//   const handleCodeChange = (index: number, value: string) => {
//     if (!/^\d*$/.test(value)) return
//     const newCode = [...code]
//     newCode[index] = value.slice(-1)
//     setCode(newCode)

//     // Auto-focus next input
//     if (value && index < 3) {
//       const nextInput = document.getElementById(`code-${index + 1}`)
//       nextInput?.focus()
//     }
//   }

 

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (code.some((digit) => !digit)) {
//       alert("Please enter all 4 digits")
//       return
//     }

//     setIsLoading(true)
//     await new Promise((resolve) => setTimeout(resolve, 1500))
//     setIsLoading(false)
//     onVerify()
//   }

//   const formatTime = (seconds: number) => {
//     return `0:${seconds.toString().padStart(2, "0")}`
//   }

//   return (
//     <div className="">
//       <div className="max-w-5xl mx-auto mt-28 bg-white shadow-xl rounded-md">
//         <div className="flex">
//           <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-100 to-gray-50 items-center justify-center p-12">
//             <div className="text-center">
//               <svg
//                 className="w-64 h-64 mx-auto mb-8"
//                 viewBox="0 0 200 200"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {/* Illustration placeholder - person with phone and verification */}
//                 <circle cx="100" cy="60" r="25" fill="#1a7f7e" opacity="0.1" />
//                 <rect x="70" y="90" width="60" height="80" rx="8" fill="#1a7f7e" opacity="0.15" />
//                 <circle cx="140" cy="50" r="20" fill="#1a7f7e" opacity="0.2" />
//                 <path d="M 130 45 L 135 50 L 145 40" stroke="#1a7f7e" strokeWidth="2" fill="none" opacity="0.3" />
//               </svg>
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Account</h2>
//               <p className="text-gray-600">Enter the code sent to your email</p>
//             </div>
//           </div>

//           <div className="w-full lg:w-1/2 p-8 lg:p-12">
//             <h1 className="text-3xl font-bold text-gray-900 mb-8">Verification Code</h1>

//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* Code Input Fields */}
//               <div className="flex gap-4 justify-center lg:justify-start">
//                 {code.map((digit, index) => (
//                   <input
//                     key={index}
//                     id={`code-${index}`}
//                     type="text"
//                     maxLength={1}
//                     value={digit}
//                     onChange={(e) => handleCodeChange(index, e.target.value)}
//                     className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition"
//                     placeholder="-"
//                   />
//                 ))}
//               </div>

//               {/* Re-send Code Timer */}
//               <div className="text-sm text-gray-600">
//                 Re-send code in <span className="font-semibold text-gray-900">{formatTime(timeLeft)}</span>
//               </div>

//               {/* Submit Button */}
//               <button type="submit" disabled={isLoading} className="w-full bg-teal-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition">
//                 {isLoading ? "Verifying..." : "Continue"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }












// // app/verify-otp/page.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { useVerifyEmailMutation } from "@/redux/api/authApi";
// import { useSearchParams, useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// export default function VerifyOTPPage() {
//   const [code, setCode] = useState(["", "", "", ""]);
//   const [verify, { isLoading }] = useVerifyEmailMutation();
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const email = searchParams.get("email") || "";

//   const [timeLeft, setTimeLeft] = useState(43);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleChange = (index: number, value: string) => {
//     if (!/^\d*$/.test(value)) return;
//     const newCode = [...code];
//     newCode[index] = value.slice(-1);
//     setCode(newCode);
//     if (value && index < 3) {
//       document.getElementById(`code-${index + 1}`)?.focus();
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const otp = code.join("");
//     if (otp.length !== 4) {
//       toast.error("Enter all 4 digits");
//       return;
//     }

//     try {
//       const res = await verify({ email, otp }).unwrap();
//       const { userId, token } = res.data; // Adjust based on actual response
//       toast.success("Verified!");
//       router.push(`/reset-password?userId=${userId}&token=${token}`);
//     } catch (err: any) {
//       toast.error(err.data?.message || "Invalid OTP");
//     }
//   };

//   const formatTime = (s: number) => `0:${s.toString().padStart(2, "0")}`;

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="max-w-5xl w-full bg-white shadow-xl rounded-xl overflow-hidden grid md:grid-cols-2">
//         {/* Left */}
//         <div className="hidden md:flex items-center justify-center p-12 bg-gradient-to-br from-gray-100 to-gray-50">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Account</h2>
//             <p className="text-gray-600">Enter the code sent to your email</p>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="p-8 md:p-12">
//           <h1 className="text-3xl font-bold text-gray-900 mb-8">Verification Code</h1>
//           <form onSubmit={handleSubmit} className="space-y-8">
//             <div className="flex gap-4 justify-center">
//               {code.map((digit, i) => (
//                 <input
//                   key={i}
//                   id={`code-${i}`}
//                   type="text"
//                   maxLength={1}
//                   value={digit}
//                   onChange={(e) => handleChange(i, e.target.value)}
//                   className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-teal-600 outline-none"
//                   placeholder="-"
//                 />
//               ))}
//             </div>

//             <p className="text-sm text-gray-600 text-center">
//               Re-send code in <span className="font-bold">{formatTime(timeLeft)}</span>
//             </p>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-teal-700 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 disabled:opacity-70"
//             >
//               {isLoading ? "Verifying..." : "Continue"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }