



// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useGetMe } from "@/hooks/useGetMe";
// import { Button } from "@/components/ui/button";
// import { logout } from "@/feature/user/userSlice";
// import { useDispatch } from "react-redux";

// const Navbar = () => {
//   const pathname = usePathname();
//   const { user, isGuest } = useGetMe();
//   const dispatch = useDispatch();
//   console.log("user in navbar", user);

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   const isHome = pathname === "/";

//   return (
//     <div className={`${isHome ? "bg-transparent" : "bg-[#F7F4EF]"} relative z-50`}>
//       <nav className="max-w-7xl mx-auto w-full px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex flex-col items-start">
//           <div className="text-teal-600 font-bold text-2xl">
//             <Link href="/">
//               <div className="flex justify-center">
//                 <Image src="/logo.svg" alt="logo" width={139} height={50} />
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* Right side */}
//         {user ? (
//           <div className="flex items-center gap-4">
//             <span className="text-sm text-gray-600">
//               {isGuest ? "Guest Mode" : `Hi, ${user.name}`}
//             </span>
//             <Button onClick={handleLogout} variant="destructive" size="sm">
//               {isGuest ? "End Session" : "Log out"}
//             </Button>
//           </div>
//         ) : (
//           <Link href="/login">
//             <Button className={`${isHome ? "bg-transparent text-[#2B2B2B] border border-[#96D1C7]" : "text-[##2B2B2B] border border-[#96D1C7]"} `} variant="outline">Sign In</Button>
//           </Link>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;









"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useGetMe } from "@/hooks/useGetMe";
import { Button } from "@/components/ui/button";
import { logout } from "@/feature/user/userSlice";
import { useDispatch } from "react-redux";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const { user, isGuest } = useGetMe();
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
  };

  const isHome = pathname === "/";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`${isHome ? "bg-transparent" : "bg-[#F7F4EF]"} relative z-50`}>
      <nav className="max-w-7xl mx-auto w-full px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <div className="text-teal-600 font-bold text-2xl">
            <Link href="/">
              <div className="flex justify-center">
                <Image src="/logo.svg" alt="logo" width={139} height={50} />
              </div>
            </Link>
          </div>
        </div>

        {/* Right side */}
        {user ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#96D1C7] bg-[#F7F4EF] hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium text-[#2B2B2B]">
                {isGuest ? "Guest" : user.name}
              </span>
              <ChevronDown 
                className={`w-4 h-4 text-[#2B2B2B] transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`} 
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {!isGuest && (
                  <Link
                    href="/my-story"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-[#2B2B2B] hover:bg-gray-100 transition-colors"
                  >
                    My Story
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                >
                  {isGuest ? "End Session" : "Logout"}
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <Button 
              className={`${
                isHome
                  ? "bg-transparent text-[#2B2B2B] border cursor-pointer border-[#96D1C7]"
                  : "text-[#2B2B2B] bg-[#F7F4EF] border cursor-pointer hover:bg-[#96D1C7] border-[#96D1C7]"
              }`}
              variant="outline"
            >
              Sign In
            </Button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;