"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex items-center justify-between py-6 px-8 md:px-16 lg:px-24 bg-krudex-black/80 backdrop-blur-md fixed top-0 z-50 border-b border-krudex-border/50"
    >
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 bg-krudex-green flex items-center justify-center font-bold text-krudex-black text-sm tracking-wider group-hover:bg-krudex-green-hover transition-colors">
          KT
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-white text-lg leading-none tracking-wide">Krudex Technologies</span>
          <span className="text-[10px] text-krudex-green font-bold tracking-[0.2em] mt-1">PVT. LTD.</span>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {['Services', 'Our Work', 'About', 'Contact'].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-sm text-krudex-muted hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
        <Link 
          href="#hire-us"
          className="bg-krudex-green text-krudex-black font-semibold text-sm px-6 py-2.5 hover:bg-krudex-green-hover transition-colors"
        >
          Hire Us
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
