"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const timelineData = [
  {
    year: "2022",
    title: "Foundations",
    text: "Initial engineering practice established — delivering full-stack React and Python solutions."
  },
  {
    year: "2023",
    title: "Design Systems & ML",
    text: "Expanded into UI/UX and brand design systems. Delivered first production AI/ML integration projects."
  },
  {
    year: "2024",
    title: "Scale & High-Profile Platforms",
    text: "TEDx MLRIT platform ships. Kemplast modernization completed. Client base exceeds 20 major engagements."
  },
  {
    year: "2026",
    title: "Official Incorporation",
    text: "Krudex Technologies incorporated as a high-performance software engineering firm in Telangana, India."
  }
];

const principlesData = [
  {
    num: "01",
    title: "Architecture first",
    text: "We design systems before writing code. Every project begins with an unambiguous technical specification that both parties agree on — so scope is clear before a single sprint starts."
  },
  {
    num: "02",
    title: "Senior-led delivery",
    text: "No bait-and-switch. The engineers who scope your project are the engineers who build it. We don't delegate client work to junior proxies."
  },
  {
    num: "03",
    title: "Measurable outcomes",
    text: "Every engagement has defined success criteria — Lighthouse scores, latency budgets, accuracy thresholds. If we can't measure it, we won't promise it."
  },
  {
    num: "04",
    title: "Production quality",
    text: "We build as if we're maintaining the system ourselves for three years. Strongly typed codebases, documented APIs, comprehensive test gates, and monitoring from day one."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-[#7B68EE]/30 selection:text-white flex flex-col">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-20 md:pb-28 relative z-10 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-[#7B68EE]/20 via-[#E01E5A]/15 to-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7B68EE]/10 border border-[#7B68EE]/30 mb-8 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
                <span className="text-xs uppercase tracking-wider text-[#A78BFA] font-semibold font-mono">
                  ABOUT KRUDEX TECHNOLOGIES
                </span>
              </div>
              <h1 className="font-heading font-black text-4xl sm:text-6xl text-white leading-[1.08] tracking-tight mb-6">
                Built to last. <br />
                <span className="clickup-gradient-text">
                  Not just to ship.
                </span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-krudex-muted text-base sm:text-lg leading-relaxed">
                Krudex Technologies is an incorporated engineering firm registered in Hyderabad, Telangana. We exist at the intersection of software engineering, artificial intelligence, digital design, and digital marketing — treating those disciplines as a unified craft, not separate silos. We build SaaS products, run Google Ads and digital marketing, and train students with industry experts in collaboration with NovaSkill Hub.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Our Story / Timeline Section */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 mb-8 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-[#00D2FF] font-semibold font-mono">
                  OUR EVOLUTION
                </span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mb-8 leading-[1.1] tracking-tight">
                From independent craft to established firm.
              </h2>
              <div className="flex flex-col gap-6 text-krudex-muted text-sm sm:text-base leading-relaxed">
                <p>
                  Krudex began as an independent engineering practice, taking on complex challenges in full-stack React and Python. Driven by a commitment to quality and technical excellence, the work spoke for itself. Clients returned, and the scope of our engagements naturally evolved.
                </p>
                <p>
                  Over three years, the practice expanded: first into AI and machine learning, then into UI/UX design and brand systems. We realized that each discipline reinforces the others. A product that performs at scale requires robust engineering and intuitive design in equal measure.
                </p>
                <p>
                  In 2026, Krudex Technologies was incorporated in Telangana — formalizing what had already become a serious, multidisciplinary operation. The incorporation was a clear signal: we are here to build enduring companies and scalable systems.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="flex flex-col">
              {timelineData.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex gap-6 relative pb-12 last:pb-0 group"
                >
                  {/* Vertical Line */}
                  {idx !== timelineData.length - 1 && (
                    <div className="absolute left-6 top-8 bottom-0 w-px bg-white/10 hidden md:block" />
                  )}
                  
                  <div className="flex-shrink-0">
                    <div className="border border-[#7B68EE]/40 bg-[#0F0C1B] px-3.5 py-1.5 text-[#A78BFA] font-mono text-xs font-bold relative z-10 rounded-xl shadow-[0_0_15px_rgba(123,104,238,0.2)] group-hover:border-[#00D2FF] group-hover:text-[#00D2FF] transition-colors">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className="pt-1">
                    <h3 className="font-heading font-bold text-white text-base mb-1 group-hover:text-[#A78BFA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Principles Section */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E01E5A]/10 border border-[#E01E5A]/30 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
              <span className="text-xs uppercase tracking-wider text-[#F472B6] font-semibold font-mono">
                OUR PRINCIPLES
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4"
            >
              How we operate.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-krudex-muted text-base max-w-2xl"
            >
              Four commitments that govern every client relationship and every line of code.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principlesData.map((principle, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="clickup-card p-7 sm:p-8 hover:border-[#7B68EE]/50 hover:shadow-[0_20px_40px_-10px_rgba(123,104,238,0.2)] transition-all duration-300 group"
              >
                <div className="text-[#A78BFA] font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#7B68EE]/15 border border-[#7B68EE]/30 w-max mb-5">
                  {principle.num}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#A78BFA] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-krudex-muted text-sm leading-relaxed">
                  {principle.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About CTA */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-5"
          >
            Want to build together?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-krudex-muted text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
          >
            We take on a limited number of high-impact engagements each quarter. If your project is ready to scale, let&apos;s talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="clickup-btn-primary px-8 py-4 rounded-xl text-sm font-semibold flex items-center gap-2 group/btn"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
