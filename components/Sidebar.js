import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import Button from './Button';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'spring', damping: 20 }}
      className="fixed top-0 right-0 h-full w-[200px] md:w-[250px] bg-white z-50 shadow-[-4px_0_6px_-1px_rgba(0,0,0,0.1)]"
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        <button
          onClick={onClose}
          className="self-end text-gray-500 hover:text-gray-700"
        >
          <IoClose className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        <div className="mt-8 md:mt-10 flex flex-col space-y-8 md:space-y-10">
          <Link
            href="/about"
            className="text-[#757575] text-lg md:text-xl hover:text-primary transition-colors"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            href="/blogs"
            className="text-[#757575] text-lg md:text-xl hover:text-primary transition-colors"
            onClick={onClose}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-[#757575] text-lg md:text-xl hover:text-primary transition-colors"
            onClick={onClose}
          >
            Contact Us
          </Link>
          <Button
            variant="primary"
            className="justify-start !p-0 text-lg md:text-xl rounded-full"
            onClick={onClose}
          >
            Masuk
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar; 