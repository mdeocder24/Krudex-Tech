"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const pillars = [
  {
    label: "Build",
    audience: "For founders and businesses",
    title: "SaaS products",
    desc: "We design and engineer SaaS platforms, mobile apps, and AI features, from first version to production scale.",
    cta: "See product services",
    href: "/services",
  },
  {
    label: "Grow",
    audience: "For businesses that need customers",
    title: "Google Ads & digital marketing",
    desc: "Google Ads, SEO, social, and content, run as one system and measured by the leads and revenue they bring.",
    cta: "See marketing services",
    href: "/services#digital-marketing",
  },
  {
    label: "Learn",
    audience: "For students",
    title: "Student training",
    desc: "Practical training from industry experts, offered in collaboration with NovaSkill Hub.",
    cta: "See student training",
    href: "/training",
  },
];

const Pillars = () => {
  return (
    <section id="what-krudex-does" className="px-6 md:px-14 lg:px-20 py-24 md:py-32 bg-krudex-black relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-serif text-4xl md:text-6xl text-white font-normal mb-16 leading-[1.1] tracking-tight"
        >
          One company. <br /> Three ways to work with us.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-krudex-border border border-krudex-border">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              className="bg-krudex-black"
            >
              <Link
                href={pillar.href}
                className="group flex flex-col h-full p-8 md:p-10 transition-colors duration-200 hover:bg-[#111111] active:bg-[#111111]"
              >
                <div className="text-krudex-accent font-mono text-xs uppercase tracking-[0.2em] mb-6">{pillar.label}</div>
                <h3 className="text-white font-medium text-xl mb-2">{pillar.title}</h3>
                <p className="text-white/60 text-sm mb-6">{pillar.audience}</p>
                <p className="text-krudex-muted text-sm leading-relaxed mb-10">{pillar.desc}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-white text-sm font-medium">
                  {pillar.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
