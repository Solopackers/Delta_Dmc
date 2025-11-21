"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white border border-blue-600",
  secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700",
  outline: "bg-transparent hover:bg-white/10 text-white border border-white"
};

const sizeStyles = {
  sm: "text-sm px-4 py-1.5",
  md: "text-base px-5 py-2",
  lg: "text-lg px-6 py-3"
};

export default function AnimatedButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick
}: AnimatedButtonProps) {
  const buttonClass = `
    rounded-md font-medium transition-colors duration-200
    ${variantStyles[variant]} 
    ${sizeStyles[size]}
    ${className}
  `;

  const buttonVariants = {
    initial: { 
      scale: 1 
    },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { 
      scale: 0.95,
      transition: { 
        duration: 0.1 
      } 
    }
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      <Link href={href} className={buttonClass} onClick={onClick}>
        {children}
      </Link>
    </motion.div>
  );
} 