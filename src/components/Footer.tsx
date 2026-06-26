import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0A0A]/80 backdrop-blur-md border-t border-krudex-border/50">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-6 lg:col-span-5 flex flex-col">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <Logo width={32} height={32} />
            </Link>
            <p className="text-krudex-muted text-sm leading-relaxed max-w-sm">
              An incorporated engineering firm delivering high-performance digital products from Hyderabad, Telangana.
            </p>
          </div>

          <div className="md:col-span-3 lg:col-span-3 lg:col-start-7 flex flex-col">
            <h4 className="text-[10px] text-krudex-blue font-mono uppercase tracking-[0.2em] mb-6">Navigation</h4>
            <div className="flex flex-col gap-4">
              {['Services', 'Our Work', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Services' ? '/services' : `/#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-krudex-muted hover:text-white transition-colors w-fit"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-3 flex flex-col">
            <h4 className="text-[10px] text-krudex-blue font-mono uppercase tracking-[0.2em] mb-6">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-krudex-muted">
              <a href="mailto:krudextechnologies@gmail.com" className="hover:text-white transition-colors w-fit">krudextechnologies@gmail.com</a>
              <p>+91 89782 61053, +91 94902 48160</p>
              <p>Hyderabad, Telangana</p>
              <p>Response within 24 hrs</p>
            </div>
          </div>
        </div>

        <div className="border-t border-krudex-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-krudex-muted/60">
            &copy; 2026 Krudex Technologies
          </p>
          <p className="text-[10px] text-krudex-blue font-mono uppercase tracking-[0.15em]">
            INCORPORATED &middot; TELANGANA, INDIA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
