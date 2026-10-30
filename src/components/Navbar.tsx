"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Training', href: '/training' },
  { label: 'About', href: '/about' },
  { label: 'Our Team', href: '/our-team' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
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
    <nav
      className={`w-full flex items-center justify-between px-6 md:px-14 lg:px-20 fixed top-0 z-50 transition-all duration-300
        bg-[#080608]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]
        ${scrolled ? 'py-2.5 lg:py-3.5' : 'py-3.5 lg:py-5'}
      `}
    >
      {/* Left side: Brand */}
      <div className="flex-1 flex items-center justify-start">
        <Link href="/" aria-label="Krudex Technologies — home" className="flex items-center group">
          <Image
            src="/krudex-bg-red.png"
            alt="Krudex Technologies"
            width={240}
            height={80}
            className="h-12 lg:h-14 w-auto object-contain scale-[1.7] lg:scale-[1.9] origin-left group-hover:brightness-110 transition-all duration-300"
            priority
          />
        </Link>
      </div>

      {/* Right side: Nav Links & CTA */}
      <div className="flex-1 flex justify-end items-center gap-6 lg:gap-8 xl:gap-10">
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`whitespace-nowrap py-1.5 px-0.5 text-[13.5px] transition-all duration-200 hover:-translate-y-0.5 relative ${
                  isActive ? 'text-white font-medium' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-krudex-accent rounded-full shadow-[0_0_8px_rgba(229,43,59,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="group whitespace-nowrap inline-flex items-center gap-2 min-h-10 text-[13px] font-semibold text-white bg-krudex-accent hover:bg-krudex-accent-hover px-5 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5),0_0_15px_rgba(229,43,59,0.25)] hover:shadow-[0_0_25px_rgba(229,43,59,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            className="text-white hover:text-krudex-accent transition-colors w-10 h-10 -mr-2 flex items-center justify-center rounded-full hover:bg-white/5 active:scale-95"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl z-[60]"
          >
            <div
              className="absolute inset-0"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-4 right-4 left-4 sm:left-auto sm:w-80 max-h-[calc(100dvh-2rem)] overflow-y-auto bg-[#0D0A0C] border border-white/[0.1] rounded-2xl p-6 flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full w-9 h-9 flex items-center justify-center border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col gap-2 pt-8">
                {navLinks.map((link, idx) => {
                  const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + idx * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={`text-base font-medium transition-colors flex items-center justify-between p-3 rounded-lg hover:bg-white/5 ${
                          isActive ? 'text-white bg-white/[0.04] border-l-2 border-krudex-accent' : 'text-white/60 hover:text-white'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="flex items-center gap-2.5">
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_6px_#E52B3B]" />
                          )}
                          {link.label}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 text-white bg-krudex-accent px-6 rounded-full text-sm font-semibold hover:bg-krudex-accent-hover shadow-[0_0_20px_rgba(229,43,59,0.3)] transition-all"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
