"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const drawerVariants = prefersReducedMotion
    ? {}
    : {
        hidden: { x: "100%" },
        visible: { x: 0 },
        exit: { x: "100%" },
      };

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 h-16 flex items-center px-6 md:px-12 border-b border-border"
        style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(20px)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-auto md:mr-0">
          <span className="w-2 h-2 rounded-sm bg-accent inline-block" />
          <span className="font-mono font-bold tracking-widest text-text-primary text-sm">
            KRUDEX
          </span>
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8 mx-auto">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="relative flex flex-col items-center gap-0.5 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
              >
                <span>{label}</span>
                {active && (
                  <span className="w-1 h-1 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Hire Us */}
        <div className="hidden md:block ml-auto">
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-150"
          >
            Hire Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 right-0 z-50 w-72 bg-surface flex flex-col p-6"
            >
              <button
                className="self-end text-text-secondary hover:text-text-primary transition-colors mb-10"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex flex-col gap-6 flex-1">
                {navLinks.map(({ label, href }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`text-lg font-semibold transition-colors duration-150 ${
                        active ? "text-accent" : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-4 py-3 rounded-lg transition-colors text-center mt-8"
              >
                Hire Us
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
