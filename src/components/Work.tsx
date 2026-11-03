"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { WORK } from '@/content/offerings';

const Work = () => {
  return (
    <section id="work" className="px-6 md:px-14 lg:px-20 py-24 md:py-32 bg-krudex-black border-t border-krudex-border relative z-10">
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
            OUR WORK
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
            Selected work.
          </h2>
          <p className="text-krudex-muted text-base leading-relaxed">
            A few of the projects behind our 20+ client engagements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-krudex-border border border-krudex-border">
          {WORK.map((w, index) => (
            <motion.article
              key={w.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-krudex-black p-8 md:p-10 flex flex-col"
            >
              <div className="text-krudex-muted font-mono text-sm mb-6">{w.year} · {w.kind.toUpperCase()}</div>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-normal mb-4 tracking-tight">{w.name}</h3>
              <p className="text-krudex-muted text-sm leading-relaxed mb-8">{w.text}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <span key={t} className="border border-krudex-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-white/60">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
