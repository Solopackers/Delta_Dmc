"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4f7f0] shadow-lg h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="https://res.cloudinary.com/dwcislsn6/image/upload/v1763725922/Delta_dmc_logo-removebg-preview_xftabl.png"
                  alt="Delta DMC Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <span className="text-2xl font-bold text-blue-600">Delta DMC</span>
              </Link>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8 md:items-center">
            <Link href="/" className="text-black text-md
            -700 hover:text-blue-600 px-3 py-2 font-semibold">
              Home
            </Link>
            <Link href="/destinations" className="text-black text-md
            -700 hover:text-blue-600 px-3 py-2 font-semibold">
              Destinations
            </Link>
            <Link href="/services" className="text-black text-md
            -700 hover:text-blue-600 px-3 py-2 font-semibold">
              Services
            </Link>
            <Link href="/about" className="text-black text-md
            -700 hover:text-blue-600 px-3 py-2 font-semibold">
              About Us
            </Link>
            <Link href="/contact" className="text-black text-md
            -700 hover:text-blue-600 px-3 py-2 font-semibold">
              Contact
            </Link>
            <Link href="/contact" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700">
              Partner Registration 
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black
              -700 hover:text-blue-600 hover:bg-gray-100"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#f4f7f0] shadow-md rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-black text-lg
            -700 hover:text-blue-600 hover:bg-gray-100 font-bold rounded-md">
              Home
            </Link>
            <Link href="/destinations" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 text-lg hover:text-blue-900 hover:bg-black
            -100 font-bold rounded-md">
              Destinations
            </Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-black text-lg
            -700 hover:text-blue-600 hover:bg-gray-100 font-bold rounded-md">
              Services
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 text-lg hover:text-blue-600 hover:bg-gray-100 font-bold rounded-md">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 text-lg hover:text-blue-600 hover:bg-gray-100 font-bold rounded-md">
              Contact
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 mx-3 mt-2 text-center text-white text-lg bg-blue-600 hover:bg-blue-700 font-bold rounded-full">
              Partner Registration
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 
