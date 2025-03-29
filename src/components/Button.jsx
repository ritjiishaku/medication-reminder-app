import React from "react";

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary", 
  disabled = false, 
  leftIcon: LeftIcon, 
  rightIcon: RightIcon, 
  type = "button",
}) => {
 
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  
  const sizeStyles = "px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-2.5";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-400 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 disabled:bg-gray-400 focus:ring-gray-500",
    accent: "bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 disabled:bg-gray-400 focus:ring-orange-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 disabled:border-gray-400 disabled:text-gray-400 focus:ring-blue-500",
    text: "text-blue-600 hover:text-blue-700 active:text-blue-800 disabled:text-gray-400 focus:ring-blue-500 hover:bg-blue-50"
  };

  const iconStyles = "w-4 h-4 sm:w-5 sm:h-5";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles} ${variants[variant]} ${className}`}
    >
      {LeftIcon && <LeftIcon className={`${iconStyles} mr-2`} />}
      {children}
      {RightIcon && <RightIcon className={`${iconStyles} ml-2`} />}
    </button>
  );
};

export default Button;