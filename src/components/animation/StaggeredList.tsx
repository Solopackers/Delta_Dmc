"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredListProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  animationDuration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function StaggeredList({
  children,
  className = "",
  staggerDelay = 0.1,
  animationDuration = 0.5,
  direction = "up"
}: StaggeredListProps) {
  // Define initial offsets based on direction
  const initialY = direction === "up" ? 20 : direction === "down" ? -20 : 0;
  const initialX = direction === "left" ? 20 : direction === "right" ? -20 : 0;
  
  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  // Child variants
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: initialY,
      x: initialX 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: animationDuration,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
} 