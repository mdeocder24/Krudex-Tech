"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col bg-krudex-black">
      {/* ── Content wrapper ── */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* ════════════ HERO / 404 ════════════ */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-16 md:py-0 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-krudex-accent/10 blur-[160px] pointer-events-none -z-10" />

          <h1 className="text-white/80 text-lg sm:text-3xl md:text-5xl font-light leading-snug tracking-tight mb-8 sm:mb-12 font-serif">
            This page seems to have
            <br />
            slipped beyond our reach :/
          </h1>

          <div className="relative mb-8 sm:mb-12 w-full flex justify-center overflow-visible">
            <span aria-hidden="true" className="text-[80px] sm:text-[140px] md:text-[200px] lg:text-[260px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 via-white/5 to-transparent leading-none tracking-tighter select-none">
              404
            </span>
          </div>

          <Link
            href="/"
            className="liquid-glass text-white text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-medium px-6 sm:px-8 py-3.5 rounded-full uppercase hover:bg-krudex-accent hover:text-white hover:border-krudex-accent hover:shadow-[0_0_30px_rgba(229,43,59,0.4)] transition-all duration-300"
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
