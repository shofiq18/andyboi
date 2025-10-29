// "use client"

// import Image from 'next/image';
// import { useState, FormEvent } from 'react';

// interface FormErrors {
//   email?: string;
//   password?: string;
// }

// export default function ResetPassword() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [touched, setTouched] = useState({ email: false, password: false });

 

//   const validatePassword = (password: string): string | undefined => {
//     if (!password) return 'Password is required';
//     if (password.length < 6) return 'Password must be at least 6 characters';
//     return undefined;
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
   
//     const passwordError = validatePassword(password);
    
//     if ( passwordError) {
//       setErrors({ password: passwordError });
//       setTouched({ email: true, password: true });
//       return;
//     }
    
//     console.log('Form submitted:', { email, password });
//     // Handle login logic here
//   };

  

//   const handlePasswordChange = (value: string) => {
//     setPassword(value);
//     if (touched.password) {
//       setErrors(prev => ({ ...prev, password: validatePassword(value) }));
//     }
//   };

  

//   const handlePasswordBlur = () => {
//     setTouched(prev => ({ ...prev, password: true }));
//     setErrors(prev => ({ ...prev, password: validatePassword(password) }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-lg max-w-5xl h-[600px] w-full grid md:grid-cols-2 overflow-hidden">
//         {/* Left Section - Welcome */}
//         <div className="p-12 flex flex-col justify-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Create New Password</h2>
          
//           <div className="flex justify-center items-center">
//             <Image src="/icon/forgot-password.svg" alt='forgot-iamge' height={500} width={500}/> 
//           </div>

//         </div>

//         {/* Right Section - Form */}
//         <div className="pr-12 flex flex-col justify-start mt-24 bg-white">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* password Field */}
//             <div>
//               <label htmlFor="password" className="block text-xl font-medium text-gray-700 mb-2">
//                 New Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   id="password"
//                   value={password}
//                   onChange={(e) => handlePasswordChange(e.target.value)}
//                   onBlur={handlePasswordBlur}
//                   placeholder="Password"
//                   className="block w-full pl-12 pr-12 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center"
//                 >
//                   {showPassword ? (
//                     <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                     </svg>
//                   ) : (
//                     <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//               {touched.password && errors.password && (
//                 <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//               )}
//             </div>

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-xl font-medium text-gray-700 mb-2">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   id="password"
//                   value={password}
//                   onChange={(e) => handlePasswordChange(e.target.value)}
//                   onBlur={handlePasswordBlur}
//                   placeholder="Password"
//                   className="block w-full pl-12 pr-12 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center"
//                 >
//                   {showPassword ? (
//                     <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                     </svg>
//                   ) : (
//                     <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//               {touched.password && errors.password && (
//                 <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full mt-16 bg-[#00695C] text-white py-4 px-4 rounded-lg font-semibold hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition"
//             >
//               Reset Password
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }











// // app/reset-password/page.tsx
// "use client";

// import Image from "next/image";
// import { useState, FormEvent } from "react";
// import { useResetPasswordMutation } from "@/redux/api/authApi";
// import { useSearchParams, useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// export default function ResetPasswordPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [newPassword, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [reset, { isLoading }] = useResetPasswordMutation();
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const userId = searchParams.get("userId");
//   const token = searchParams.get("token");

//   const [errors, setErrors] = useState({ password: "", confirm: "" });

//   const validate = () => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const err: any = {};
//     if (!newPassword) err.password = "Password required";
//     else if (newPassword.length < 6) err.password = "Min 6 characters";
//     if (newPassword !== confirmPassword) err.confirm = "Passwords don't match";
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!validate() || !userId || !token) return;

//     try {
//       await reset({ userId, password: newPassword, token }).unwrap();
//       toast.success("Password reset successfully!");
//       setTimeout(() => router.push("/login"), 1500);
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (err: any) {
//       toast.error(err.data?.message || "Failed to reset password");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-lg max-w-5xl h-[600px] w-full grid md:grid-cols-2 overflow-hidden">
//         {/* Left */}
//         <div className="p-12 flex flex-col justify-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-8">Create New Password</h2>
//           <div className="flex justify-center">
//             <Image src="/icon/forgot-password.svg" alt="reset" width={500} height={500} />
//           </div>
//         </div>

//         {/* Right */}
//         <div className="pr-12 flex flex-col justify-center">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* New Password */}
//             <div>
//               <label className="block text-xl font-medium text-gray-700 mb-2">New Password</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={newPassword}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className="block w-full pl-12 pr-12 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
//                 />
//                 <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-6">
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//               {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-xl font-medium text-gray-700 mb-2">Confirm Password</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className="block w-full pl-12 pr-12 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
//                 />
//               </div>
//               {errors.confirm && <p className="mt-1 text-sm text-red-600">{errors.confirm}</p>}
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full mt-8 bg-[#00695C] text-white py-4 rounded-lg font-semibold hover:bg-teal-800 disabled:opacity-70"
//             >
//               {isLoading ? "Resetting..." : "Reset Password"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }






// app/reset-password/page.tsx
"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [reset, { isLoading }] = useResetPasswordMutation();
  const searchParams = useSearchParams();
  const router = useRouter();

  const userId = searchParams.get("userId");
  const token = searchParams.get("token");
  const [backendErrors, setBackendErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setBackendErrors({});

    if (newPassword !== confirmPassword) {
      setBackendErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    if (!userId || !token) {
      toast.error("Invalid reset link");
      return;
    }

    try {
      await reset({
        userId,
        password: newPassword,  // ← ONLY THIS
        token,
      }).unwrap();

      toast.success("Password reset successfully!");
      setTimeout(() => router.push("/login"), 1500);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const errors = err?.data?.errors || [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const map = errors.reduce((acc: any, e: any) => {
        acc[e.path] = e.message;
        return acc;
      }, {});
      setBackendErrors(map);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl h-[600px] w-full grid md:grid-cols-2 overflow-hidden">
        <div className="p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Create New Password</h2>
          <div className="flex justify-center">
            <Image src="/icon/forgot-password.svg" alt="reset" width={500} height={500} />
          </div>
        </div>

        <div className="pr-12 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password */}
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-2">New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-12 pr-12 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-6 text-sm">
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {backendErrors.password && <p className="mt-1 text-sm text-red-600">{backendErrors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-12 pr-12 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                />
              </div>
              {backendErrors.confirmPassword && <p className="mt-1 text-sm text-red-600">{backendErrors.confirmPassword}</p>}
              {newPassword && confirmPassword && newPassword !== confirmPassword && (
                <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-8 bg-[#00695C] text-white py-4 rounded-lg font-semibold hover:bg-teal-800 disabled:opacity-70"
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}