"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function AnimatedSection({ 
  children, 
  delay = 0.2, 
  direction = "up", 
  className = "" 
}: AnimatedSectionProps) {
  const ref = useRef(null);
  
  // Define initial offsets based on direction
  const initialY = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const initialX = direction === "left" ? 40 : direction === "right" ? -40 : 0;

  // Animation variants
  const variants = {
    hidden: { 
      y: initialY,
      x: initialX,
      opacity: 0 
    },
    visible: { 
      y: 0,
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
} 