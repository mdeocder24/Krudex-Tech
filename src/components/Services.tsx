"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, LayoutGrid, Smartphone, Brain, Paintbrush } from "lucide-react";

const services = [
  {
    num: "01",
    Icon: LayoutGrid,
    title: "Full-Stack Web Development",
    desc: "From architecture to deployment — performant, accessible, and built to scale.",
  },
  {
    num: "02",
    Icon: Smartphone,
    title: "Mobile App Development",
    desc: "React Native and Expo apps with native-feel interactions and offline-first architecture.",
  },
  {
    num: "03",
    Icon: Brain,
    title: "AI / ML Integration",
    desc: "Custom models, inference pipelines, and intelligent features woven into your product.",
  },
  {
    num: "04",
    Icon: Paintbrush,
    title: "UI/UX Design",
    desc: "Design systems and interfaces that make complex products feel effortless.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="px-6 md:px-12 py-[120px] md:py-[120px]">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: EASE }}
          className="text-[11px] font-medium uppercase tracking-[0.1em] text-accent mb-4"
        >
          What we do
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05, ease: EASE }}
          className="font-sans font-semibold text-3xl md:text-4xl text-text-primary mb-12"
        >
          Four disciplines. One partner.
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {services.map(({ num, Icon, title, desc }, i) => (
            <motion.div
              key={num}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-[0_0_24px_rgba(91,91,255,0.10)] hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <span className="font-mono text-xs text-text-secondary mb-4">{num}</span>
              <Icon className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-semibold text-text-primary text-lg mb-2">{title}</h3>
              <p className="text-text-secondary text-sm leading-[1.7] flex-1">{desc}</p>
              <div className="mt-6 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-text-secondary text-sm -translate-x-1 group-hover:translate-x-0 transition-transform duration-150">
                  Learn more
                </span>
                <ArrowRight className="w-4 h-4 text-text-secondary -translate-x-1 group-hover:translate-x-0 transition-transform duration-150" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="group flex items-center gap-2 border border-border text-text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:border-accent transition-colors duration-150"
          >
            Explore all services
            <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-150" />
          </Link>
        </div>
      </div>
    </section>
  );
}
