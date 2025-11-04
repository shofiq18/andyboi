"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Building2,
  Receipt,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Subscript,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/app/lib/utils"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Stories",
    icon: Building2,
    href: "/dashboard/stories",
  },
  {
    title: "Payments",
    icon: Receipt,
    href: "/dashboard/payments",
  },
  {
    title: "Subscriptions",
    icon: Subscript,
    href: "/dashboard/subscriptions",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
]

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "flex flex-col items-center bg-gray-50  transition-all duration-300",
        collapsed ? "w-16" : "w-[280px]",
      )}
    >
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between md:p-6 gap-4 ">
        {!collapsed && (
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-black">Admin Dashboard</span>
          </Link>
        )}
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-6 w-full px-6 ">
        <ul className="space-y-5 px-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive ? "bg-[#314B79] text-white" : "text-gray-700 hover:bg-gray-100",
                    collapsed && "justify-center",
                  )}
                >
                  <Icon className="h-6 w-6  flex-shrink-0" />
                  {!collapsed && <span className="text-xl">{item.title}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-2 ">
        <button
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-lg font-medium text-red-700 border border-gray-200 w-full transition-colors",
            collapsed && "justify-center",
          )}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span>Log out</span>}
        </button>
      </div>
    </aside>
  )
}
