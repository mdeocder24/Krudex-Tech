
import React from 'react';
import * as motion from 'framer-motion/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const vision =
  "To be the technology partner that businesses and the next generation of builders trust to turn ideas into products that scale, from Hyderabad to the world.";

const mission =
  "To engineer dependable software, take it to market with growth you can measure, and train students in the skills the industry needs today.";

const missionPillars = [
  {
    label: "01 / BUILD",
    title: "Products that last",
    text: "We design and engineer SaaS platforms, mobile apps and AI features to production standards: documented, monitored and owned by you.",
  },
  {
    label: "02 / GROW",
    title: "Growth you can measure",
    text: "We take products to market with Google Ads, SEO, social and content, run as one system and judged by the leads and revenue they bring.",
  },
  {
    label: "03 / EMPOWER",
    title: "Skills for what's next",
    text: "With NovaSkill Hub, we train students with industry experts so they learn how software and digital marketing are done in practice.",
  },
];

const principlesData = [
  {
    num: "01",
    title: "Architecture first",
    text: "We design systems before writing code. Every project begins with a technical specification that both parties agree on — so scope is clear before a single sprint starts."
  },
  {
    num: "02",
    title: "Senior-led delivery",
    text: "No bait-and-switch. The engineers who scope your project are the engineers who build it. We don't delegate client work to junior staff."
  },
  {
    num: "03",
    title: "Measurable outcomes",
    text: "Every engagement has defined success criteria — Lighthouse scores, latency budgets, accuracy thresholds. If we can't measure it, we won't promise it."
  },
  {
    num: "04",
    title: "Production quality",
    text: "We build as if we're maintaining the system ourselves for three years. Typed codebases, documented APIs, test coverage, and monitoring from day one."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-svh bg-transparent selection:bg-krudex-accent selection:text-krudex-black flex flex-col">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24 md:pb-32 bg-krudex-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent"></div>
                <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold">
                  ABOUT US
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">Built to last.</span><br />
                <span className="text-white/45">Not just to<br />ship.</span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-krudex-muted text-lg leading-relaxed pt-8 lg:pt-0">
                Krudex Global is an incorporated engineering firm registered in Hyderabad, Telangana. We exist at the intersection of software engineering, artificial intelligence, digital design, and digital marketing — and we treat those disciplines as a unified craft, not separate silos. We build SaaS products, run Google Ads and digital marketing, and train students with industry experts in collaboration with NovaSkill Hub.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold">
                VISION &amp; MISSION
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold max-w-3xl leading-tight">
              Why Krudex exists, and how we get there.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-krudex-border border border-krudex-border mb-px">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-krudex-black p-10 lg:p-14"
            >
              <div className="text-krudex-accent font-mono text-sm mb-6">OUR VISION</div>
              <p className="font-serif text-2xl md:text-3xl text-white leading-snug">
                {vision}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-krudex-black p-10 lg:p-14"
            >
              <div className="text-krudex-accent font-mono text-sm mb-6">OUR MISSION</div>
              <p className="font-serif text-2xl md:text-3xl text-white leading-snug">
                {mission}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-krudex-border border border-t-0 border-krudex-border">
            {missionPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-krudex-black p-10"
              >
                <div className="text-krudex-muted font-mono text-sm mb-6">{pillar.label}</div>
                <h3 className="text-white font-bold text-xl mb-4">{pillar.title}</h3>
                <p className="text-krudex-muted text-sm leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Principles Section */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold">
                OUR PRINCIPLES
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl text-white font-bold mb-6"
            >
              How we operate.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-krudex-muted text-lg max-w-2xl"
            >
              Four commitments that govern every client relationship and every line of code.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {principlesData.map((principle, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-krudex-card/40 border border-krudex-border p-10 lg:p-12"
              >
                <div className="text-krudex-muted font-mono text-sm mb-6">{principle.num}</div>
                <h3 className="text-white font-bold text-xl mb-4">{principle.title}</h3>
                <p className="text-krudex-muted text-sm leading-relaxed">
                  {principle.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About CTA */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Want to work together?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-krudex-muted text-lg max-w-xl mb-12 leading-relaxed"
          >
            We take on a limited number of new client engagements each quarter. If your project is the right fit, we&apos;d like to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact" className="group flex items-center gap-2 bg-krudex-accent text-krudex-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-krudex-accent-hover transition-colors">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
