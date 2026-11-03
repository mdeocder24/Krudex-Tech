"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/faqs';

/** Homepage FAQ, same accordion as the contact page. */
const HomeFaq = () => {
  const [open, setOpen] = useState<number | null>(null);
  const items = faqs.slice(0, 6);

  return (
    <section id="faq" className="px-6 md:px-14 lg:px-20 py-24 md:py-32 bg-krudex-black border-t border-krudex-border relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <div className="inline-flex items-center gap-2.5 bg-krudex-surface/50 border border-krudex-border px-4 py-2 rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
            <span className="text-xs text-krudex-muted tracking-wide">FAQ</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white font-normal mb-6 leading-[1.1] tracking-tight">
            Questions, <br /> answered.
          </h2>
          <p className="text-krudex-muted text-base leading-relaxed mb-8">
            Everything you need to know about working with us.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-krudex-accent hover:text-krudex-black active:scale-[0.97] transition-[background-color,color,transform] duration-200"
          >
            Ask us anything
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="lg:col-span-7 flex flex-col gap-3">
          {items.map((faq, idx) => (
            <div key={faq.question} className="bg-krudex-card/30 border border-krudex-border overflow-hidden transition-colors hover:border-white/25">
              <button
                type="button"
                id={`home-faq-q-${idx}`}
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`home-faq-a-${idx}`}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
              >
                <span className="text-white text-sm font-medium pr-8">{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-krudex-muted flex-shrink-0 transition-transform duration-300 ${open === idx ? 'rotate-180 text-white' : ''}`} />
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    id={`home-faq-a-${idx}`}
                    role="region"
                    aria-labelledby={`home-faq-q-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/65 text-sm leading-relaxed border-t border-krudex-border pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
