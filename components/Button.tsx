import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'green';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  href, 
  children, 
  variant = 'primary', 
  className = '', 
  size = 'md',
  showIcon = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200",
    secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50",
    outline: "bg-transparent text-slate-700 border-2 border-slate-300 hover:border-slate-800 hover:text-slate-900",
    green: "bg-green-600 text-white hover:bg-green-700 shadow-green-200"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {showIcon && <ExternalLink className="ml-2 w-4 h-4" />}
    </a>
  );
};

export default Button;