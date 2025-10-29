// ==========================================
// FILE: src/components/layout/Navbar.tsx
// ==========================================
// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useGetMe } from "@/hooks/useGetMe";
// import { Button } from "@/components/ui/button";
// import { logout } from "@/feature/user/userSlice";
// import { useDispatch } from "react-redux";

// const Navbar = () => {
//   const { user, isGuest } = useGetMe();
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   console.log("user", user);
//   return (
//     <div className=" bg-[#F7F4EF] relative z-50">
//       <nav className="max-w-7xl mx-auto backdrop:w-full  px-4 py-4 flex items-center justify-between">
//         <div className="flex flex-col items-start">
//           <div className="text-teal-600 font-bold text-2xl">
//             <Link href="/">
//               <div className="flex  justify-center">
//                 <Image src="/logo.svg" alt="login" width={139} height={50} />
//               </div>
//             </Link>
//           </div>
//         </div>
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
//             <Button  variant="outline">Sign In</Button>
//           </Link>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useGetMe } from "@/hooks/useGetMe";
import { Button } from "@/components/ui/button";
import { logout } from "@/feature/user/userSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const pathname = usePathname();
  const { user, isGuest } = useGetMe();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const isHome = pathname === "/";

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
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {isGuest ? "Guest Mode" : `Hi, ${user.name}`}
            </span>
            <Button onClick={handleLogout} variant="destructive" size="sm">
              {isGuest ? "End Session" : "Log out"}
            </Button>
          </div>
        ) : (
          <Link href="/login">
            <Button className={`${isHome ? "bg-transparent text-[#2B2B2B] border border-[#96D1C7]" : "text-[##2B2B2B] border border-[#96D1C7]"} `} variant="outline">Sign In</Button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
