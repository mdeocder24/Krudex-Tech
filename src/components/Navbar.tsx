"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex items-center justify-between py-6 px-8 md:px-16 lg:px-24 bg-krudex-black/80 backdrop-blur-md fixed top-0 z-50 border-b border-krudex-border/50"
    >
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-24 h-20 flex-shrink-0 flex items-center justify-center">
          <Image src="/Krudex.jpeg" alt="Krudex Technologies" fill className="object-contain" priority />
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {['Home', 'Services', 'Our Work', 'About', 'Contact'].map((item) => (
          <Link 
            key={item} 
            href={item === 'Home' ? '/' : item === 'Services' ? '/services' : item === 'About' ? '/about' : item === 'Contact' ? '/contact' : item === 'Our Work' ? '/work' : `/#${item.toLowerCase().replace(' ', '-')}`}
            className="text-sm text-krudex-muted hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
        <Link 
          href="#hire-us"
          className="bg-krudex-blue text-krudex-black font-semibold text-sm px-6 py-2.5 hover:bg-krudex-blue-hover transition-colors shadow-[0_0_15px_rgba(204,255,0,0.15)]"
        >
          Hire Us
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-white hover:text-krudex-blue transition-colors focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-krudex-black z-[60] flex flex-col pt-6 px-8"
          >
            <div className="flex items-center justify-between w-full mb-12">
              <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative w-24 h-20 flex-shrink-0 flex items-center justify-center">
                  <Image src="/Krudex.jpeg" alt="Krudex Technologies" fill className="object-contain" priority />
                </div>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-krudex-blue transition-colors focus:outline-none"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 mt-8">
              {['Home', 'Services', 'Our Work', 'About', 'Contact'].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (idx * 0.1) }}
                >
                  <Link 
                    href={item === 'Home' ? '/' : item === 'Services' ? '/services' : item === 'About' ? '/about' : item === 'Contact' ? '/contact' : item === 'Our Work' ? '/work' : `/#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-3xl font-serif text-white hover:text-krudex-blue transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link 
                  href="#hire-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-krudex-blue text-krudex-black font-semibold text-base px-8 py-4 inline-block hover:bg-krudex-blue-hover transition-colors shadow-[0_0_15px_rgba(204,255,0,0.15)]"
                >
                  Hire Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
