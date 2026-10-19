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
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMobileMenuOpen(false); };
    if (isMobileMenuOpen) document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full flex items-center justify-between px-6 md:px-14 lg:px-20 fixed top-0 z-50 transition-all duration-300
        bg-krudex-black/70 backdrop-blur-2xl border-b border-white/10 shadow-[inset_0_1px_1px_rgba(212,180,131,0.1),0_4px_30px_rgba(0,0,0,0.1)]
        ${scrolled ? 'py-2 lg:py-4' : 'py-3 lg:py-6'}
      `}
    >
      {/* Left side: Brand */}
      <div className="flex-1 flex items-center justify-start">
        <Link href="/" aria-label="Krudex Technologies — home" className="flex items-center">
          <Image
            src="/krudex-bg-gold.png"
            alt="Krudex"
            width={240}
            height={80}
            className="h-14 lg:h-20 w-auto object-contain scale-[2] lg:scale-[2.5] origin-left"
            preload
          />
        </Link>
      </div>

      {/* Right side: Nav Links & CTA */}
      <div className="flex-1 flex justify-end items-center gap-6 lg:gap-8 xl:gap-10">
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <MotionLink
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.05, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                aria-current={isActive ? 'page' : undefined}
                className={`whitespace-nowrap py-3 text-[14px] transition-colors duration-200 relative ${isActive ? 'text-white font-medium' : 'text-krudex-muted hover:text-white'
                  }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-1 left-0 right-0 h-[2px] bg-krudex-accent rounded-full origin-center"
                  />
                )}
              </MotionLink>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <MotionLink
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whitespace-nowrap inline-flex items-center min-h-11 text-[14px] font-medium text-white border border-white/20 bg-white/5 px-5 rounded-full hover:bg-krudex-accent hover:text-krudex-black hover:border-krudex-accent hover:shadow-[0_0_25px_rgba(212,180,131,0.4)] transition-all duration-300"
          >
            Contact Us
          </MotionLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <motion.button
            onClick={() => setIsMobileMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            className="text-white hover:text-krudex-muted transition-colors w-11 h-11 -mr-2.5 flex items-center justify-center"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </div>



      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
          >
            {/* Clickable backdrop to close */}
            <div
              className="absolute inset-0"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Black Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-4 right-4 left-4 sm:left-auto sm:w-72 max-h-[calc(100dvh-2rem)] overflow-y-auto bg-krudex-black border border-white/10 rounded-2xl p-6 flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="absolute top-3 right-3 text-white hover:text-krudex-muted transition-colors bg-white/5 hover:bg-white/10 rounded-full w-11 h-11 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col gap-1 pt-12">
                {navLinks.map((link, idx) => {
                  const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={`text-xl font-serif transition-colors flex items-center gap-3 min-h-12 ${isActive ? 'text-white' : 'text-krudex-muted hover:text-white'
                          }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="w-1.5 h-1.5 rounded-full bg-krudex-accent origin-center"
                          />
                        )}
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-2 pt-5 border-t border-white/10"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full min-h-12 text-krudex-black bg-krudex-accent px-6 rounded-full text-[15px] font-semibold hover:bg-krudex-accent-hover transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
