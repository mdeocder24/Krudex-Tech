"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ASSURANCES, PROCESS } from '@/content/offerings';

const steps = PROCESS;
const assurances = ASSURANCES;

const Process = () => {
  return (
    <section id="process" className="px-6 md:px-14 lg:px-20 py-24 md:py-32 bg-krudex-black border-t border-krudex-border relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-krudex-surface/50 border border-krudex-border px-4 py-2 rounded-full mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
          <span className="text-xs text-krudex-muted tracking-wide">
            HOW WE WORK
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-white font-normal mb-6 leading-[1.1] tracking-tight">
            From first call to production.
          </h2>
          <p className="text-krudex-muted text-base leading-relaxed">
            One predictable process for every product build, so scope, cost and ownership are clear before we start.
          </p>
        </motion.div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-krudex-border border border-krudex-border mb-12">
          {steps.map((step, index) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-krudex-black p-8 flex flex-col"
            >
              <div className="text-krudex-muted font-mono text-sm mb-6">{step.num} / {step.phase.toUpperCase()}</div>
              <h3 className="text-white font-medium text-lg mb-3">{step.title}</h3>
              <p className="text-krudex-muted text-sm leading-relaxed">{step.text}</p>
              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                {step.tags.map((t) => (
                  <span key={t} className="border border-krudex-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-white/60">
                    {t}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>

        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {assurances.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-krudex-accent flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Process;
