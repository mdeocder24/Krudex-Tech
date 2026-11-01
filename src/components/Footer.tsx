"use client";

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const footerNav = {
  Solutions: [
    { label: 'SaaS & Web Platforms', href: '/services' },
    { label: 'Mobile Applications', href: '/services' },
    { label: 'AI & ML Integrations', href: '/services' },
    { label: 'UI/UX & Brand Systems', href: '/services' },
    { label: 'Google Ads & CRO', href: '/services#digital-marketing' },
  ],
  Academy: [
    { label: 'Student Training Tracks', href: '/training' },
    { label: 'NovaSkill Hub Partnership', href: '/training' },
    { label: 'Full-Stack Web Dev (12 Wks)', href: '/training' },
    { label: 'Cloud & DevOps Labs (8 Wks)', href: '/training' },
  ],
  Company: [
    { label: 'About Studio', href: '/about' },
    { label: 'Our Engineering Team', href: '/our-team' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Careers & Hiring', href: '/contact' },
  ],
  Connect: [
    { label: 'Email: krudextechnologies@gmail.com', href: 'mailto:krudextechnologies@gmail.com' },
    { label: 'Phone: +91 89782 61053', href: 'tel:+918978261053' },
    { label: 'Phone: +91 94902 48160', href: 'tel:+919490248160' },
    { label: 'Location: Hyderabad, India', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#07050C] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          {/* Brand Info (Cols 1 to 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed max-w-sm">
              The unified engineering studio. Production SaaS platforms, performance-driven digital marketing, and practitioner-led talent training alongside NovaSkill Hub.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs text-white/70 font-mono">
                All Systems Operational · 99.98% Uptime
              </span>
            </div>
          </div>

          {/* Categorized Links (Cols 3 to 6) */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerNav).map(([category, links]) => (
              <div key={category} className="space-y-3">
                <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white/80">
                  {category}
                </h4>
                <ul className="space-y-2 text-xs text-krudex-muted">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors block line-clamp-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-krudex-muted font-medium">
          <p>© {new Date().getFullYear()} Krudex Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Incorporated in Telangana, India</span>
            <span>·</span>
            <span>Engineered with discipline</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
