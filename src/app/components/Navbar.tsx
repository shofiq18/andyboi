// ==========================================
// FILE: src/components/layout/Navbar.tsx
// ==========================================
'use client';

import React from 'react';
import { ChevronDown, Divide } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    
    <div className='bg-[#F7F4EF]'>
      <nav className="max-w-7xl mx-auto backdrop:w-full  px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col items-start">
          <div className="text-teal-600 font-bold text-2xl">
            <Link href='/'>
            <div className="flex  justify-center">
            <Image
            src="/logo.svg"
            alt="login"
            width={139}
            height={50}
          />
          </div>
            </Link>
          </div>
        </div>

        <div className="flex items-center border border-gray-200 px-4 py-2 rounded-lg font-semibold space-x-4">
          <Link href="/login" className="text-gray-700 hover:text-teal-400 transition">Sign In</Link>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;
