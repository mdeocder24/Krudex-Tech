"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TrainingHighlight = () => {
  return (
    <section id="student-training" className="px-6 md:px-14 lg:px-20 py-24 md:py-32 bg-krudex-black border-t border-krudex-border relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2.5 bg-krudex-surface/50 border border-krudex-border px-4 py-2 rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent"></div>
            <span className="text-xs text-krudex-muted tracking-wide">
              FOR STUDENTS
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white font-normal leading-[1.1] tracking-tight">
            Student training, <br /> led by industry experts.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          <p className="text-krudex-muted text-base leading-relaxed mb-8">
            In collaboration with NovaSkill Hub, Krudex trains students with industry experts, so they can learn how software and digital marketing work outside the classroom.
          </p>
          <Link
            href="/training"
            className="group inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-krudex-accent hover:text-krudex-black active:scale-[0.97] transition-[background-color,color,transform] duration-200"
          >
            Explore Student Training
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingHighlight;
