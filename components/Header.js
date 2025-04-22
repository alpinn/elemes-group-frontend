'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import Sidebar from './Sidebar';
import { HiOutlineHome, HiOutlineTicket, HiOutlineMenu } from 'react-icons/hi';
import '../styles/components.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="w-[100px] md:w-[120px] lg:w-[150px] relative">
                <Image
                  src="/icons/logo.svg"
                  alt="Elemes ID Logo"
                  width={150}
                  height={40}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5">Home</Link>
              <Link href="/about" className="text-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5">About</Link>
              <Link href="/promotions" className="text-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5 relative">
                <span className="absolute -top-3 left-1/2 translate-x-1/2 text-[10px] bg-[#E7462D] text-white px-2 py-0.5 rounded-full">HOT</span>
                Promotions
              </Link>
              <Link href="/blogs" className="text-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5">Blogs</Link>
              <Link href="/contact" className="text-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5">Contact Us</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="transparent" className="hidden lg:block transition-all duration-300 ease-in-out hover:-translate-y-0.5">Masuk</Button>
              <Button variant="primary" className="text-xs md:text-sm lg:text-base rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">Daftar Sekarang</Button>
            </div>
          </div>
        </nav>
      </header>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white z-50 border-t border-gray-200">
        <div className="flex justify-between px-4 items-center py-3">
          <Link href="/" className="flex flex-col items-center space-y-1">
            <HiOutlineMenu className="w-6 h-6 text-gray-700" />
            <span className="text-xs md:text-sm text-gray-700">Home</span>
          </Link>
          <Link href="/promotions" className="flex flex-col items-center space-y-1">
            <HiOutlineMenu className="w-6 h-6 text-gray-700" />
            <span className="text-xs md:text-sm text-gray-700">Promotions</span>
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="flex flex-col items-center space-y-1"
          >
            <HiOutlineMenu className="w-6 h-6 text-gray-700" />
            <span className="text-xs md:text-sm text-gray-700">Others</span>
          </button>
        </div>
      </nav>

      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  );
};

export default Header;
