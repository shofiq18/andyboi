
import type React from "react"
import { DashboardSidebar } from "../components/adminDashboard/DashbaordSidebar"
import { DashboardHeader } from "../components/adminDashboard/DashboardHeader"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-white">{children}</main>
      </div>
    </div>
  )
}
