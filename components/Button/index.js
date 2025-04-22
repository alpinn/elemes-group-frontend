import React from 'react';
import '../../styles/components.css';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button 
      className={`button button--${variant} ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 