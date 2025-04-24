'use client';

import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components.css';

const Button = ({ children, variant = 'primary', className = '', withAnimation = false, customShadow, ...props }) => {
  const motionProps = withAnimation ? {
    whileHover: { 
      scale: 1.05,
      boxShadow: customShadow || '0 0 20px rgba(64, 94, 182, 0.5)'
    },
    whileTap: { scale: 0.95 },
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 15,
      duration: 0.2
    }
  } : {};

  return (
    <motion.button 
      className={`button button--${variant} ${className} cursor-pointer`}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button; 