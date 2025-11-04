// "use client";

// import { setUser } from "@/feature/user/userSlice";
// import { useSignInMutation } from "@/redux/api/authApi";
// // import { setUser } from "@/feature/user/userSlice";
// // import { useSignInMutation } from "@/redux/api/auth/authApi";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// import { useState, FormEvent } from "react";
// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
//  // Adjust path to your baseApi
// // import { useDispatch } from "react-redux";
//  // Adjust path to your userSlice

// interface FormErrors {
//   general?: string; // For backend error messages
// }

// export default function LoginForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [signIn, { isLoading }] = useSignInMutation(); // Hook for sign-in mutation
//   const dispatch = useDispatch();
//   const router = useRouter()

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setErrors({}); // Clear previous errors

//     try {
//       // Send sign-in data to the backend
//       const response = await signIn({ email, password }).unwrap();
//       toast.success("sign-in successfully")
//       router.push("/")

//       // Assuming the backend returns { user: { id, name, email, role }, token }
//       // dispatch(setUser({ user: response.user, token: response.token }));
//       console.log("Sign-in successful:", response);

//       // Optionally, redirect to dashboard or home page
//       // Example: router.push("/dashboard"); // If using Next.js router
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       // Handle backend errors
//       const errorMessage =
//         error.data?.message || "Sign-in failed. Please check your credentials.";
//       setErrors({ general: errorMessage });
//       console.error("Sign-in failed:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center p-4">
//       <div className=" max-w-6xl w-full grid md:grid-cols-2 gap-8 overflow-hidden">
//         {/* Left Section - Welcome */}
//         <div className="p-4 flex flex-col justify-center">
//           <Image
//             src="/login.svg"
//             alt="login"
//             width={600}
//             height={500}
//           />

//         </div>

//         {/* Right Section - Form */}
//         <div className="p-6 mx-12 my-12 flex flex-col border border-gray-200 rounded-2xl justify-center ">
//           <div className="flex  justify-center my-8">
//             <Image
//             src="/logo.svg"
//             alt="login"
//             width={139}
//             height={50}
//           />
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* General Error Message */}
//             {errors.general && (
//               <p className="text-sm text-red-600">{errors.general}</p>
//             )}

//             {/* Email Field */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <svg
//                     className="h-5 w-5 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email"
//                   className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <svg
//                     className="h-5 w-5 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                     />
//                   </svg>
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Password"
//                   className="block w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center"
//                 >
//                   {showPassword ? (
//                     <svg
//                       className="h-5 w-5 text-gray-400 hover:text-gray-600"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="h-5 w-5 text-gray-400 hover:text-gray-600"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Forgot Password */}
//             <div className="text-right">
//               <a
//                 href="/forgot-password"
//                 className="text-sm font-semibold text-teal-700 hover:text-teal-800"
//               >
//                 Forgot password?
//               </a>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-[#E5B96C]  py-3 px-4 rounded-lg cursor-pointer font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition disabled:bg-teal-400"
//             >
//               Login
//             </button>
//             <button
//               type="submit"
//               className="w-full border border-green-200  py-3 px-4 rounded-lg cursor-pointer font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition disabled:bg-teal-400"
//             >
//               Guest mode
//             </button>
//           </form>
//           <div>
//             <p className="text-gray-600 text-center mt-8">
//             Don&apos;t have an account?{" "}
//             <a
//               href="/signup"
//               className="text-teal-700 font-semibold hover:text-teal-800"
//             >
//               Sign up
//             </a>
//           </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { setCredentials, setGuestSession } from "@/feature/user/userSlice";
import { useGetMe } from "@/hooks/useGetMe";
import {
  useCreateGuestSessionMutation,
  useSignInMutation,
} from "@/redux/api/authApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

// Define UserProfile type (shared with userSlice)
interface UserProfile {
  id: string;
  name: string;
  email: string;
  role?: string;
}

interface FormErrors {
  general?: string;
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [signIn, { isLoading }] = useSignInMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useGetMe();
  console.log("user from login form", user);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    if (!email || !password) {
      setErrors({ general: "Please enter both email and password." });
      return;
    }

    try {
      const response = await signIn({ email, password }).unwrap();
      console.log("refdfdf", response);

      const { accessToken, refreshToken } = response.data;

      // Safely decode JWT payload
      let userFromToken: UserProfile = {
        id: "",
        email,
        name: email.split("@")[0],
        role: undefined,
      };

      try {
        const payload = JSON.parse(atob(accessToken.split(".")[1]));
        userFromToken = {
          id: payload.id || "",
          email: payload.email || email,
          name: payload.name || email.split("@")[0],
          role: payload.role,
        };
      } catch (decodeError) {
        console.warn(
          "JWT decode failed, using fallback user info",
          decodeError
        );
      }

      // Dispatch with correct, type-safe payload
      dispatch(
        setCredentials({
          user: userFromToken,
          accessToken,
          refreshToken, // optional, fully type-safe
        })
      );

      toast.success("Welcome back!");
      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage =
        error?.data?.message || "Invalid email or password. Please try again.";
      setErrors({ general: errorMessage });
      toast.error(errorMessage);
      console.error("Login failed:", error);
    }
  };

  const [createGuestSession, { isLoading: isGuestLoading }] =
    useCreateGuestSessionMutation();

  const handleGuestMode = async () => {
    try {
      const response = await createGuestSession().unwrap();
      const guestId = response.data.guestSession;

      dispatch(setGuestSession({ guestSession: guestId }));
      toast.success("Welcome, Guest!");
      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to start guest session");
    }
  };

 

  // Add inside LoginForm component
  useEffect(() => {
    if (user?.role === "ADMIN") {
      router.push("/dashboard");
    } else if (user?.role === "USER") {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="md:h-[calc(84vh-1rem)] bg-[#F7F4EF] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 overflow-hidden">
        {/* Left: Illustration (hidden on mobile) */}
        <div className=" md:flex items-center justify-center p-8">
          <Image
            src="/login.svg"
            alt="Login illustration"
            width={600}
            height={500}
            priority
          />
        </div>

        {/* Right: Form */}
        <div className="p-6 md:mx-12 my-12 flex flex-col border border-gray-300 rounded-2xl justify-center">
          <div className="flex justify-center mb-8">
            <Image src="/logo.svg" alt="Logo" width={139} height={50} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* General Error */}
            {errors.general && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                {errors.general}
              </div>
            )}

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
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

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="block w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#E5B96C] hover:bg-yellow-500 text-white font-semibold py-3 px-4 rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Login"}
            </button>

            {/* Guest Mode */}
            <button
              type="button"
              onClick={handleGuestMode}
              disabled={isGuestLoading}
              className="w-full border border-green-300  font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition disabled:opacity-70"
            >
              {isGuestLoading ? "Starting..." : "Continue as Guest"}
            </button>
          </form>

          {/* Sign Up */}
          <p className="text-center text-gray-600 mt-8">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="text-teal-700 font-semibold hover:text-teal-800"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
