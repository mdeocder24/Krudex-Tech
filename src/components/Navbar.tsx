"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { ChevronDown, Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const solutionsDropdown = [
  {
    title: 'SaaS Engineering',
    desc: 'High-throughput production platforms from architecture to scale.',
    href: '/services',
    tag: 'PRODUCTION',
    tagColor: 'text-[#00D2FF] bg-[#00D2FF]/10 border-[#00D2FF]/30',
  },
  {
    title: 'Performance Marketing',
    desc: 'Conversion-engineered Google Ads and full-funnel tracking.',
    href: '/services#digital-marketing',
    tag: 'GROWTH',
    tagColor: 'text-[#F472B6] bg-[#E01E5A]/10 border-[#E01E5A]/30',
  },
  {
    title: 'Student Training Academy',
    desc: 'Practitioner-led tracks in direct partnership with NovaSkill Hub.',
    href: '/training',
    tag: 'NOVASKILL',
    tagColor: 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30',
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E0B19]/85 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(123,104,238,0.1)]'
            : 'bg-[#0E0B19]/50 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Krudex Technologies">
          <Logo />
        </Link>

        {/* Center: Desktop Nav Items with Dropdowns */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                activeDropdown === 'solutions' ? 'text-white bg-white/5' : 'text-krudex-muted hover:text-white'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {activeDropdown === 'solutions' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 w-80 p-2 rounded-2xl bg-[#0F0C1B] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(123,104,238,0.2)]"
                >
                  <div className="space-y-1">
                    {solutionsDropdown.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-xl block hover:bg-white/5 transition-colors group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white text-xs font-semibold group-hover:text-[#A78BFA] transition-colors">
                            {item.title}
                          </span>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${item.tagColor}`}>
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-krudex-muted leading-relaxed line-clamp-2">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Regular Links */}
          <Link
            href="/services"
            className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              pathname === '/services' ? 'text-white font-semibold' : 'text-krudex-muted hover:text-white'
            }`}
          >
            Services
          </Link>

          <Link
            href="/training"
            className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors flex items-center gap-1.5 ${
              pathname === '/training' ? 'text-white font-semibold' : 'text-krudex-muted hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
            <span>Academy</span>
          </Link>

          <Link
            href="/about"
            className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              pathname === '/about' ? 'text-white font-semibold' : 'text-krudex-muted hover:text-white'
            }`}
          >
            About
          </Link>

          <Link
            href="/our-team"
            className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              pathname === '/our-team' ? 'text-white font-semibold' : 'text-krudex-muted hover:text-white'
            }`}
          >
            Team
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-xs font-medium text-white/80 hover:text-white transition-colors"
          >
            Contact Desk
          </Link>

          <Link
            href="/contact"
            className="clickup-btn-primary px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-[#0E0B19]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl space-y-4"
          >
            <div className="space-y-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services & Modules', href: '/services' },
                { label: 'Student Training Academy', href: '/training' },
                { label: 'About Studio', href: '/about' },
                { label: 'Our Engineering Team', href: '/our-team' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    pathname === link.href ? 'bg-white/10 text-white font-semibold' : 'text-krudex-muted hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="clickup-btn-primary w-full py-3 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-2"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
