"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`w-full flex items-center justify-between py-5 px-8 md:px-14 lg:px-20 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-krudex-black/90 backdrop-blur-md border-b border-krudex-border/30'
          : 'bg-transparent'
      }`}
    >
      {/* Brand */}
      <Link href="/" className="flex items-center">
        <span className="text-white font-bold text-lg tracking-[0.15em] uppercase">
          KRUDEX
        </span>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <MotionLink
            key={link.label}
            href={link.href}
            whileHover={{ scale: 1.05, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            className="text-[13px] text-krudex-muted hover:text-white transition-colors duration-200"
          >
            {link.label}
          </MotionLink>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex items-center">
        <MotionLink
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-[13px] text-white border border-white/30 px-5 py-2 rounded-sm hover:bg-white hover:text-krudex-black transition-all duration-300"
        >
          Book Call
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-krudex-black z-[60] flex flex-col pt-6 px-8"
          >
            <div className="flex items-center justify-between w-full mb-16">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-white font-bold text-lg tracking-[0.15em] uppercase">
                  KRUDEX
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-krudex-muted transition-colors focus:outline-none"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-serif text-white hover:text-krudex-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
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
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white border border-white/30 px-8 py-4 inline-block text-[14px] font-medium hover:bg-white hover:text-krudex-black transition-all duration-300"
                >
                  Book Call
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
