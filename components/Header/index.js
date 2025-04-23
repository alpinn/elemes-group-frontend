'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import Sidebar from '../Sidebar';
import NavLink from '../NavLink';
import { HiOutlineHome, HiOutlineTicket, HiOutlineMenu } from 'react-icons/hi';
import { NAVIGATION_LINKS } from '../../constants/navigation';

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
              {NAVIGATION_LINKS.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="transparent" className="hidden lg:block transition-all duration-300 ease-in-out hover:-translate-y-0.5">
                Masuk
              </Button>
              <Button variant="primary" className="text-sm lg:text-base rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white z-50 border-t border-gray-200">
        <div className="flex justify-between px-4 items-center py-3">
          <MobileNavItem href="/" icon={HiOutlineHome} label="Home" />
          <MobileNavItem href="/promotions" icon={HiOutlineTicket} label="Promotions" />
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

const MobileNavItem = ({ href, icon: Icon, label }) => (
  <Link href={href} className="flex flex-col items-center space-y-1">
    <Icon className="w-6 h-6 text-gray-700" />
    <span className="text-xs md:text-sm text-gray-700">{label}</span>
  </Link>
);

export default Header;
