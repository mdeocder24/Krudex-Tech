"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const timelineData = [
  {
    year: "2022",
    text: "Kushwant begins freelancing \u2014 first client projects in full-stack React and Python."
  },
  {
    year: "2023",
    text: "Expanded into UI/UX and brand design. Delivered first AI/ML integration projects."
  },
  {
    year: "2024",
    text: "TEDx MLRIT platform ships. Kemplast modernization completed. Client base exceeds 20 engagements."
  },
  {
    year: "2025",
    text: "Krudex Technologies incorporated as a Private Limited entity in Telangana, India."
  }
];

const skillsData = [
  "Artificial Intelligence & Machine Learning",
  "Full-Stack Web Engineering (Next.js / FastAPI)",
  "Computer Vision \u00b7 MediaPipe \u00b7 TensorFlow",
  "Cross-platform Mobile (React Native)",
  "System Architecture & Performance Engineering",
  "UI/UX Design & Brand Identity"
];

const principlesData = [
  {
    num: "01",
    title: "Architecture first",
    text: "We design systems before writing code. Every project begins with a technical specification that both parties agree on \u2014 so scope is clear before a single sprint starts."
  },
  {
    num: "02",
    title: "Senior-led delivery",
    text: "No bait-and-switch. The engineers who scope your project are the engineers who build it. We don't delegate client work to junior staff."
  },
  {
    num: "03",
    title: "Measurable outcomes",
    text: "Every engagement has defined success criteria \u2014 Lighthouse scores, latency budgets, accuracy thresholds. If we can't measure it, we won't promise it."
  },
  {
    num: "04",
    title: "Production quality",
    text: "We build as if we're maintaining the system ourselves for three years. Typed codebases, documented APIs, test coverage, and monitoring from day one."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-krudex-black selection:bg-krudex-green selection:text-krudex-black flex flex-col">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="px-8 md:px-16 lg:px-24 pt-48 pb-32 bg-krudex-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-krudex-green"></div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-green font-semibold">
                  ABOUT US
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">Built to last.</span><br />
                <span className="text-krudex-green">Not just to<br />ship.</span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-krudex-muted text-lg leading-relaxed pt-8 lg:pt-0">
                Krudex Technologies is an incorporated engineering firm registered in Hyderabad, Telangana. We exist at the intersection of software engineering, artificial intelligence, and digital design \u2014 and we treat those disciplines as a unified craft, not separate silos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Our Story / Timeline Section */}
      <section className="px-8 md:px-16 lg:px-24 py-32 bg-krudex-black border-t border-krudex-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10 self-start">
                <div className="w-1.5 h-1.5 rounded-full bg-krudex-green"></div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-green font-semibold">
                  OUR STORY
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-10">
                From freelancer to firm.
              </h2>
              <div className="flex flex-col gap-8 text-krudex-muted text-base leading-relaxed">
                <p>
                  Krudex started as one engineer \u2014 Kushwant Kumar Reddy Avuthu \u2014 taking on freelance projects in full-stack React and Python while studying in Hyderabad. The work was good. The clients came back. The scope grew.
                </p>
                <p>
                  Over three years, the practice expanded: first into AI and machine learning, then into UI/UX design and brand identity. Each discipline reinforced the others. A product that performs well needs clean engineering and clean design in equal measure.
                </p>
                <p>
                  In 2025, Krudex Technologies was incorporated as a Private Limited company in Telangana \u2014 formalizing what had already become a serious operation. The incorporation wasn't a milestone. It was a signal: we're here to build companies, not just websites.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col">
              {timelineData.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex gap-8 relative pb-16 last:pb-0"
                >
                  {/* Vertical Line */}
                  {idx !== timelineData.length - 1 && (
                    <div className="absolute left-6 top-8 bottom-0 w-px bg-krudex-border/50 hidden md:block"></div>
                  )}
                  
                  <div className="flex-shrink-0">
                    <div className="border border-krudex-border bg-krudex-black px-4 py-2 text-krudex-green font-mono text-sm relative z-10">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-krudex-muted text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership Section */}
      <section className="px-8 md:px-16 lg:px-24 py-32 bg-krudex-black border-t border-krudex-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-krudex-green"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-green font-semibold">
                LEADERSHIP
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-white font-bold">
              The person behind the work.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="bg-krudex-card/40 border border-krudex-border/50 p-8 border-t-4 border-t-krudex-green h-full">
                <div className="w-20 h-20 bg-krudex-black border border-krudex-border flex items-center justify-center mb-8">
                  <span className="font-serif text-2xl font-bold text-krudex-green">KK</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Kushwant Kumar Reddy Avuthu</h3>
                <p className="text-krudex-green text-sm font-medium mb-8">Founder & Principal Engineer</p>
                <p className="text-krudex-muted/70 text-xs leading-relaxed">
                  Hyderabad, Telangana \u00b7 Available for enterprise engagements
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8 flex flex-col justify-center"
            >
              <div className="flex flex-col gap-6 text-krudex-muted text-base leading-relaxed mb-12">
                <p>
                  Kushwant is the founding engineer and principal at Krudex Technologies. He leads every client engagement end-to-end \u2014 from initial technical scoping through production deployment. There are no account managers between you and the engineer doing the work.
                </p>
                <p>
                  His technical specialization spans full-stack web engineering, computer vision, machine learning systems, and cross-platform mobile development. He has shipped production systems for enterprise clients, research institutions, and high-traffic event platforms.
                </p>
                <p>
                  Outside of client work, Kushwant contributes to open-source tooling and maintains an active interest in the intersection of AI and accessibility \u2014 which led to the Sign Language Recognition Platform that achieved 94.7% gesture accuracy running entirely in-browser.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillsData.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-krudex-card/30 border border-krudex-border/30 p-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-krudex-green flex-shrink-0"></div>
                    <span className="text-krudex-muted text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Principles Section */}
      <section className="px-8 md:px-16 lg:px-24 py-32 bg-krudex-black border-t border-krudex-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-krudex-green"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-green font-semibold">
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
                className="bg-krudex-card/40 border border-krudex-border/30 p-10 lg:p-12"
              >
                <div className="text-krudex-green font-mono text-sm mb-6">{principle.num}</div>
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
      <section className="px-8 md:px-16 lg:px-24 py-32 bg-krudex-black border-t border-krudex-border/50">
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
            We take on a limited number of new client engagements each quarter. If your project is the right fit, we'd like to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#contact" className="group flex items-center gap-2 bg-krudex-green text-krudex-black px-8 py-4 font-semibold text-sm hover:bg-krudex-green-hover transition-colors">
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
