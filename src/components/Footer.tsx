"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services' },
      { label: 'Mobile Apps', href: '/services' },
      { label: 'AI Integration', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '/work' },
      { label: 'Documentation', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="px-8 md:px-14 lg:px-20 pt-20 pb-8 bg-krudex-black border-t border-krudex-border/30 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-white font-bold text-lg tracking-[0.15em] uppercase block mb-4">
              KRUDEX
            </span>
            <p className="text-krudex-muted text-sm leading-relaxed max-w-xs">
              Building digital products that perform. Engineering, AI, and design under one roof.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white/60 text-xs uppercase tracking-[0.15em] mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-krudex-muted text-sm hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-krudex-border/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-krudex-muted/60 text-xs">
            © {new Date().getFullYear()} Krudex Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-krudex-muted/60 text-xs hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-krudex-muted/60 text-xs hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
