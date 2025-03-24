import React from "react";

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary", 
  disabled = false, 
  leftIcon: LeftIcon, 
  rightIcon: RightIcon, 
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition duration-200 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 disabled:bg-gray-400",
    accent: "bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 disabled:bg-gray-400",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-100 active:bg-blue-200 disabled:border-gray-400 disabled:text-gray-400",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {LeftIcon && <LeftIcon className="w-5 h-5" />}
      {children}
      {RightIcon && <RightIcon className="w-5 h-5" />}
    </button>
  );
};

export default Button;
