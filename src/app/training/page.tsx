"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const reasonsData = [
  {
    num: "01",
    title: "Taught by industry experts",
    text: "You learn from people who work in the field, so the examples and advice come from practice."
  },
  {
    num: "02",
    title: "Backed by working teams",
    text: "Krudex builds SaaS products and runs digital marketing, so the training stays close to how this work is done."
  },
  {
    num: "03",
    title: "In collaboration with NovaSkill Hub",
    text: "Krudex and NovaSkill Hub work together to bring this training to students."
  }
];

const topicsData = [
  {
    title: "SaaS & web development",
    text: "How web products are planned, built, and shipped."
  },
  {
    title: "AI & machine learning",
    text: "How AI features are added to real products."
  },
  {
    title: "UI/UX design",
    text: "How research and design shape a product people can use."
  },
  {
    title: "Google Ads & digital marketing",
    text: "How search, ads, social, and content bring in customers."
  }
];

const stepsData = [
  "Send an enquiry and tell us what you want to learn.",
  "We reply within one business day.",
  "We share the current format, dates, and fees."
];

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-krudex-accent selection:text-krudex-black flex flex-col">
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
                  STUDENT TRAINING
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">Learn from people</span><br />
                <span className="text-white/45">who do the work.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-start"
            >
              <p className="text-krudex-muted text-lg leading-relaxed mb-10">
                Krudex Technologies trains students with industry experts, in collaboration with NovaSkill Hub. Learn how software and digital marketing work from people who practise them.
              </p>
              <Link
                href="/contact?interest=training"
                className="group flex items-center gap-2 bg-krudex-accent text-krudex-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-krudex-accent-hover active:scale-[0.97] transition-[background-color,transform] duration-200"
              >
                Enquire About Training
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why Section */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl md:text-5xl text-white font-bold mb-16"
          >
            Why train with Krudex.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {reasonsData.map((reason, idx) => (
              <motion.div
                key={reason.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" }}
                className="bg-krudex-card/40 border border-krudex-border p-10"
              >
                <div className="text-krudex-muted font-mono text-sm mb-6">{reason.num}</div>
                <h3 className="text-white font-bold text-xl mb-4">{reason.title}</h3>
                <p className="text-krudex-muted text-sm leading-relaxed">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Topics Section */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">
              What you can learn.
            </h2>
            <p className="text-krudex-muted text-base leading-relaxed">
              Training areas follow the work Krudex does every day.
            </p>
          </motion.div>

          <div className="flex flex-col gap-2">
            {topicsData.map((topic, idx) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" }}
                className="bg-krudex-card/50 border border-krudex-border p-6"
              >
                <h3 className="text-white font-medium mb-2">{topic.title}</h3>
                <p className="text-krudex-muted text-sm leading-relaxed">{topic.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Enquiry CTA */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-12"
          >
            Ready to start learning?
          </motion.h2>

          <ol className="flex flex-col gap-4 text-sm text-left mb-12">
            {stepsData.map((step, i) => (
              <li key={step} className="flex items-center gap-4 text-white/80">
                <span className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center font-mono text-xs text-white flex-shrink-0">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <Link
            href="/contact?interest=training"
            className="group flex items-center gap-2 bg-krudex-accent text-krudex-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-krudex-accent-hover active:scale-[0.97] transition-[background-color,transform] duration-200"
          >
            Enquire About Training
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
