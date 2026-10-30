"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Krudex', href: '/about' },
      { label: 'Engineering Team', href: '/our-team' },
    ],
  },
  {
    title: 'Practices',
    links: [
      { label: 'SaaS & Web Architecture', href: '/services' },
      { label: 'Mobile Engineering', href: '/services' },
      { label: 'AI & Inference Systems', href: '/services' },
      { label: 'Performance Digital Marketing', href: '/services#digital-marketing' },
      { label: 'NovaSkill Student Hub', href: '/training' },
    ],
  },
  {
    title: 'Direct Contact',
    links: [
      { label: 'Start a Project', href: '/contact' },
      { label: 'krudextechnologies@gmail.com', href: 'mailto:krudextechnologies@gmail.com' },
      { label: '+91 89782 61053', href: 'tel:+918978261053' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="px-6 md:px-14 lg:px-20 pt-20 pb-12 border-t border-white/[0.06] relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-start">
            <Link href="/" aria-label="Krudex Technologies — home" className="mb-6 block group">
              <Image 
                src="/krudex-bg-red.png" 
                alt="Krudex" 
                width={240} 
                height={80} 
                className="h-12 w-auto object-contain scale-[1.7] md:scale-[1.9] origin-left group-hover:brightness-110 transition-all duration-300"
              />
            </Link>
            <p className="text-krudex-muted text-sm leading-relaxed max-w-xs mb-6 font-normal">
              High-scale SaaS platforms, performance Google Ads acquisition, and hands-on student engineering training in collaboration with NovaSkill Hub.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-white/60 font-mono bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_6px_#E52B3B]" />
              <span>Accepting New Engagements</span>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h2 className="text-white/60 text-xs uppercase tracking-[0.18em] font-semibold mb-5 flex items-center gap-2 font-mono">
                <span className="w-1 h-1 rounded-full bg-krudex-accent" />
                {col.title}
              </h2>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-krudex-muted text-sm hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1 group py-0.5"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-krudex-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p suppressHydrationWarning className="text-white/40 text-xs font-mono">
            © {new Date().getFullYear()} Krudex Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-xs">Hyderabad, Telangana, India</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white/40 text-xs font-mono">Enterprise Software Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
