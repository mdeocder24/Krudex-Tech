"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Our Team', href: '/our-team' },
];

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full flex items-center justify-between px-8 md:px-14 lg:px-20 fixed top-0 z-50 transition-all duration-300
        bg-krudex-black/30 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_30px_rgba(0,0,0,0.1)]
        ${scrolled ? 'py-4' : 'py-6'}
      `}
    >
      {/* Left side: Brand */}
      <div className="flex-1 flex items-center justify-start">
        <Link href="/" className="flex items-center">
          <Image 
            src="/krudex-logo.png" 
            alt="Krudex" 
            width={240} 
            height={80} 
            className="h-16 md:h-20 w-auto object-contain scale-[2] md:scale-[2.5] origin-left mix-blend-screen"
            priority
          />
        </Link>
      </div>

      {/* Right side: Nav Links & CTA */}
      <div className="flex-1 flex justify-end items-center gap-6 md:gap-10">
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <MotionLink
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.05, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-[13px] transition-colors duration-200 relative ${
                  isActive ? 'text-white font-medium' : 'text-krudex-muted hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white rounded-full origin-center"
                  />
                )}
              </MotionLink>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <MotionLink
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[13px] text-white border border-white/30 px-5 py-2 rounded-sm hover:bg-white hover:text-krudex-black transition-all duration-300"
          >
            Contact Us
          </MotionLink>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setIsMobileMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-krudex-muted transition-colors focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </div>



      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-krudex-black/95 backdrop-blur-3xl z-[60] flex flex-col pt-6 px-8"
          >
            <div className="flex items-center justify-between w-full mb-16">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image 
                  src="/krudex-logo.png" 
                  alt="Krudex" 
                  width={200} 
                  height={60} 
                  className="h-14 w-auto object-contain scale-[2] origin-left mix-blend-screen"
                  priority
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-krudex-muted transition-colors focus:outline-none"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-3xl font-serif transition-colors flex items-center gap-4 ${
                        isActive ? 'text-white' : 'text-krudex-muted hover:text-white'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="w-2 h-2 rounded-full bg-white origin-center"
                        />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white border border-white/30 px-8 py-4 inline-block text-[14px] font-medium hover:bg-white hover:text-krudex-black transition-all duration-300"
                >
                  Contact Us
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
