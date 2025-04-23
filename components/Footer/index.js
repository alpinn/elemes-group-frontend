import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import Button from '../Button';
import { CONTACT_INFO, FOOTER_CATEGORIES, FOOTER_ABOUT, SOCIAL_LINKS } from '../../constants/navigation';

const SocialIcon = ({ icon }) => {
  const icons = {
    email: HiOutlineMail,
    phone: HiOutlinePhone,
    instagram: FaInstagram
  };
  const Icon = icons[icon];
  return <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-white transition-colors duration-300" />;
};

const Footer = () => {
  return (
    <div className="px-0 lg:px-6 xl:px-8">
      <footer className="bg-footer pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 rounded-xl">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6">
            <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-4 sm:space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/icons/logo.svg"
                  alt="Elemes ID Logo"
                  width={150}
                  height={40}
                  className="w-[100px] md:w-[120px] lg:w-[150px] h-auto"
                />
              </Link>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-[280px]">
                {CONTACT_INFO.address}
              </p>
              <div className="flex items-center space-x-3 sm:space-x-4">
                {SOCIAL_LINKS.map(({ href, icon, label }) => (
                  <Link key={href} href={href} className="block">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-primary group flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
                      <SocialIcon icon={icon} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-medium">Categories</h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {FOOTER_CATEGORIES.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-gray-600 text-sm hover:text-primary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-medium">About Us</h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {FOOTER_ABOUT.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-gray-600 text-sm hover:text-primary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-4">
              <h3 className="text-base sm:text-lg font-medium">Newsletter</h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Get now free 50% discount for all products on your first order
                </p>
                <form className="flex max-w-[400px]">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-3 py-2 text-sm border border-r-0 border-black rounded-l-lg focus:outline-none focus:border-primary placeholder-black"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="!rounded-l-none !px-3 sm:!px-4 text-sm rounded-r-lg whitespace-nowrap"
                  >
                    SEND
                  </Button>
                </form>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-black">
                    <HiOutlineMail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm">{CONTACT_INFO.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-black">
                    <HiOutlinePhone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm">{CONTACT_INFO.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-6 sm:py-8 lg:py-10">
        <p className="text-center text-gray-600 text-xs sm:text-sm">
          © 2021 ELEMES ID. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer; 