"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/animation/AnimatedButton";

// Hero images with locations
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1974",
    alt: "Dubai skyline with luxury hotels",
    location: "Dubai & UAE",
  },
  {
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938",
    alt: "Serene Bali beach resort",
    location: "Bali, Indonesia",
  },
  {
    src: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1974",
    alt: "Ornate Thailand temple at sunset",
    location: "Thailand",
  },
  {
    src: "https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=1974",
    alt: "Majestic Swiss Alps panorama",
    location: "Switzerland",
  },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, delay: 0.2, ease: "easeOut" }
    }
  };

  const locationVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center mt-[-2rem]">
      {/* Background image slider */}
      {heroImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentImage === index ? 1 : 0,
            transition: { duration: 1.5 }
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </motion.div>
      ))}

      {/* Current location badge */}
      <motion.div 
        className="absolute top-10 right-10 z-10 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white border border-white/20"
        key={currentImage}
        initial="hidden"
        animate="visible"
        variants={locationVariants}
      >
        <span className="font-medium text-lg">{heroImages[currentImage].location}</span>
      </motion.div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            key={`title-${currentImage}`}
          >
            Premium Destination Management for Travel Agencies
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}
            key={`subtitle-${currentImage}`}
          >
            Elevate your clients' travel experiences with our exclusive access to luxury accommodations, private transportation, and unique cultural immersions.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <AnimatedButton href="/services" variant="primary" size="lg">
              Explore Our Services
            </AnimatedButton>
            <AnimatedButton href="/contact" variant="outline" size="lg">
              Partner With Us
            </AnimatedButton>
          </div>
        </div>
      </div>

      {/* Image navigation */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <div className="container-custom">
          <div className="flex justify-center gap-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImage === index 
                    ? "bg-white scale-125" 
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`View ${heroImages[index].location}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 