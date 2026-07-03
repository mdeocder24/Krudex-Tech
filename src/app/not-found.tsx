"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* ── Content wrapper ── */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* ════════════ HERO / 404 ════════════ */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-16 md:py-0">
          <h1 className="text-white/80 text-lg sm:text-3xl md:text-5xl font-light leading-snug tracking-tight mb-1 sm:mb-2">
            This page seems to have
          </h1>
          <h1 className="text-white/80 text-lg sm:text-3xl md:text-5xl font-light leading-snug tracking-tight mb-8 sm:mb-12">
            slipped beyond our reach :/
          </h1>

          <div className="relative mb-8 sm:mb-12 w-full flex justify-center overflow-visible">
            <span className="four-oh-four text-[80px] sm:text-[140px] md:text-[200px] lg:text-[260px] font-black text-white leading-none tracking-tighter select-none">
              404
            </span>
          </div>

          <Link
            href="/"
            className="liquid-glass text-white text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full uppercase hover:scale-105 transition-transform duration-300"
          >
            Return to Main Page
          </Link>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
