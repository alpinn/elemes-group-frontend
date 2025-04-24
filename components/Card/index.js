'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Card = ({ 
  name, 
  items, 
  image, 
  bgColor = 'bg-white',
  className = '',
  onClick,
  ...props 
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHoverStart = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  return (
    <div className="h-[180px]"> 
      <motion.div 
        className={`relative ${bgColor} rounded-2xl p-4 cursor-pointer ${className}`}
        animate={{ 
          height: isHovered ? 170 : 150
        }}
        style={{
          position: 'relative',
          zIndex: isHovered ? 10 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onClick={onClick}
        {...props}
      >
        <motion.div 
          className="absolute inset-0 rounded-2xl overflow-hidden"
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/background.jpg"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="relative z-10">
          <motion.div 
            className="relative w-10 h-10 mx-auto mb-4"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
            />
          </motion.div>
          <div className="text-center">
            <h3 className="font-medium text-base mb-1">{name}</h3>
            {items !== undefined && (
              <p className="text-sm text-gray-600">{items} Items</p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card; 