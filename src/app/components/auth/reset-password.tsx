



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
    <div className="pb-60 md:pb-0 md:h-[calc(84vh-1rem)] bg-[#F7F4EF] flex items-center justify-center p-4">
      <div className="max-w-5xl h-[600px] w-full grid md:grid-cols-2 ">
        <div className="p-12 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl  text-center font-bold text-gray-900 mb-8">Create New Password</h2>
          <div className="flex justify-center">
            <Image src="/forgot.svg" alt="reset" width={500} height={500} />
          </div>
        </div>

        <div className="p-6 md:mx-12 my-12 md:flex flex-col border border-gray-300 rounded-2xl justify-center">
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
                  className="block w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
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
                  className="block w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
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
              className="w-full mt-8 bg-[#E5B96C] hover:bg-yellow-500 text-white font-semibold py-3 px-4 rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}