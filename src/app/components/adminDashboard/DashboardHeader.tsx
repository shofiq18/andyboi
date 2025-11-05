"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetMe } from "@/hooks/useGetMe";


export function DashboardHeader() {
  const {user } = useGetMe();
  console.log("User in DashboardHeader:", user);
  return (
    <header className="bg-gray-50  border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Welcome Back, {user?.name || "John Doe"}!</h1>
        </div>

        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt={user?.name || "John Doe"} />
            <AvatarFallback>{user?.name ? user.name[0] : "JD"}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">{user?.role || "Admin"}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
