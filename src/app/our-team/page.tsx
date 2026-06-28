"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const skillsData = [
  "Artificial Intelligence & Machine Learning",
  "Full-Stack Web Engineering (Next.js / FastAPI)",
  "Computer Vision · MediaPipe · TensorFlow",
  "Cross-platform Mobile (React Native)",
  "System Architecture & Performance Engineering",
  "UI/UX Design & Brand Identity"
];

const foundersData = [
  {
    initials: "KK",
    name: "Kushwant Kumar Reddy Avuthu",
    role: "Founder & Principal Engineer",
    location: "Hyderabad, Telangana · Available for enterprise engagements",
    bio: [
      "Kushwant is the founding engineer and principal at Krudex Technologies. He leads every client engagement end-to-end — from initial technical scoping through production deployment. There are no account managers between you and the engineer doing the work.",
      "His technical specialization spans full-stack web engineering, computer vision, machine learning systems, and cross-platform mobile development. He has shipped production systems for enterprise clients, research institutions, and high-traffic event platforms.",
      "Outside of client work, Kushwant contributes to open-source tooling and maintains an active interest in the intersection of AI and accessibility — which led to the Sign Language Recognition Platform that achieved 94.7% gesture accuracy running entirely in-browser."
    ],
    showSkills: true
  },
  {
    initials: "SL",
    name: "Sri Likhin Prasad",
    role: "Co-Founder",
    location: "Hyderabad, Telangana · Available for enterprise engagements",
    bio: [
      "Sri Likhin Prasad is a co-founder at Krudex Technologies. He partners directly with clients to architect scalable solutions, ensuring that every digital product we ship meets our rigorous standards for performance and reliability.",
      "With a strong foundation in modern web architectures and systems integration, Likhin oversees critical engineering workflows and ensures that complex integrations operate seamlessly under load.",
      "He is deeply committed to the firm's 'Architecture first' principle, spending significant time in the planning and modeling phases to eliminate technical debt before the first line of code is ever written."
    ],
    showSkills: false
  }
];

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-krudex-blue selection:text-krudex-black flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-8 md:px-16 lg:px-24 pt-48 pb-20 bg-krudex-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-krudex-blue"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-blue font-semibold">
                OUR TEAM
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
            >
              <span className="text-white">The people behind</span><br />
              <span className="text-krudex-blue">the work.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-krudex-muted text-lg leading-relaxed max-w-2xl"
            >
              Senior engineers on every project. No handoffs, no junior proxies — the people you meet are the people who build your product.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="px-8 md:px-16 lg:px-24 py-32 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-24 lg:gap-32">
            {foundersData.map((founder, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-4"
                >
                  <div className="bg-krudex-card/40 border border-krudex-border/50 p-8 border-t-4 border-t-krudex-blue h-full">
                    <div className="w-20 h-20 bg-krudex-black border border-krudex-border flex items-center justify-center mb-8">
                      <span className="font-serif text-2xl font-bold text-krudex-blue">{founder.initials}</span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{founder.name}</h3>
                    <p className="text-krudex-blue text-sm font-medium mb-8">{founder.role}</p>
                    <p className="text-krudex-muted/70 text-xs leading-relaxed">
                      {founder.location}
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
                    {founder.bio.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {founder.showSkills && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {skillsData.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-krudex-card/30 border border-krudex-border/30 p-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-krudex-blue flex-shrink-0"></div>
                          <span className="text-krudex-muted text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
