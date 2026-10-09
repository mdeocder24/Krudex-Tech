"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Work', href: '/work' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'SaaS & Web Platforms', href: '/services' },
      { label: 'Mobile Apps', href: '/services' },
      { label: 'AI Integration', href: '/services' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Start a project', href: '/contact' },
      { label: 'krudextechnologies@gmail.com', href: 'mailto:krudextechnologies@gmail.com' },
      { label: '+91 89782 61053', href: 'tel:+918978261053' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="px-6 md:px-14 lg:px-20 pt-20 pb-8 bg-krudex-black border-t border-krudex-border relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start">
            <Link href="/" aria-label="Krudex Technologies — home" className="mb-6 block">
              <Image 
                src="/krudex-bg.png" 
                alt="Krudex" 
                width={240} 
                height={80} 
                className="h-16 w-auto object-contain scale-[2] md:scale-[2.5] origin-left"
              />
            </Link>
            <p className="text-krudex-muted text-sm leading-relaxed max-w-xs">
              SaaS product engineering. Web, mobile, AI, and design under one roof.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h2 className="text-white/60 text-xs uppercase tracking-[0.15em] mb-5">{col.title}</h2>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <MotionLink
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-krudex-muted text-sm hover:text-white transition-colors inline-flex items-center gap-1 group py-0.5 break-all sm:break-normal"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </MotionLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-krudex-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-krudex-muted text-xs">
            © {new Date().getFullYear()} Krudex Technologies. All rights reserved.
          </p>
          <p className="text-krudex-muted text-xs">Hyderabad, Telangana, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
