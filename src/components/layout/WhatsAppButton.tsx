"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message = "Hello! I'm interested in Delta DMC's travel services. Can you provide more information?" 
}: WhatsAppButtonProps) {
  // For controlling the pulse animation
  const [isVisible, setIsVisible] = useState(false);
  
  // Format the phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  
  // Construct the WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        delay: 1
      }
    },
    hover: { 
      scale: 1.15,
      boxShadow: "0px 0px 15px rgba(37, 211, 102, 0.5)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    tap: { 
      scale: 0.9,
      boxShadow: "0px 0px 0px rgba(37, 211, 102, 0.5)",
    }
  };
  
  // Pulse effect animation
  const pulseVariants = {
    initial: { 
      scale: 1.1, 
      opacity: 0.7 
    },
    pulse: { 
      scale: 2.2, 
      opacity: 0,
      transition: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 2.5,
        ease: "easeInOut"
      }
    }
  };
  
  // Show the button after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500"
        initial="initial"
        animate="pulse"
        variants={pulseVariants}
      />
      
      {/* Button */}
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
      >
        <Link 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-500"
          aria-label="Contact us on WhatsApp"
        >
          <motion.div
            animate={{
              rotateZ: [0, 8, -8, 8, 0],
            }}
            transition={{
              delay: 2,
              repeat: Infinity,
              repeatType: "loop",
              duration: 2.5,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          >
            <FaWhatsapp className="text-white text-3xl" />
          </motion.div>
        </Link>
      </motion.div>
      
      {/* Tooltip */}
      <motion.div
        className="absolute -top-10 right-0  px-3 py-1 rounded-lg shadow-md text-sm font-medium text-gray-700 whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 3, duration: 0.7, ease: "easeOut" }
        }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        Chat with us!
      </motion.div>
    </div>
  );
} 