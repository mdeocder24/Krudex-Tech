"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProductMock from '@/components/ui/ProductMock';
import { OFFERINGS } from '@/content/offerings';

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

const Services = () => {
  return (
    <section id="services-overview" className="px-6 md:px-14 lg:px-20 py-24 md:py-32 bg-krudex-black relative z-10">
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
            WHAT WE BUILD
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
            Your SaaS <br /> and Growth Partner.
          </h2>
          <p className="text-krudex-muted text-base leading-relaxed">
            From first version to production scale, then to market. Five disciplines, one senior team, so you can focus on your users.
          </p>
        </motion.div>

        <div className="flex flex-col gap-px bg-krudex-border border border-krudex-border mb-16">
          {OFFERINGS.map((svc, index) => (
            <motion.article
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-krudex-border"
            >
              <ProductMock
                kind={svc.mock}
                num={svc.num}
                tags={svc.tags}
                className={`bg-krudex-black ${index % 2 ? 'lg:order-2' : ''}`}
              />
              <div className={`bg-krudex-black p-8 md:p-12 flex flex-col justify-center min-w-0 ${index % 2 ? 'lg:order-1' : ''}`}>
                <div className="text-krudex-muted font-mono text-sm mb-6">{svc.num}</div>
                <h3 className="font-serif text-3xl md:text-4xl text-white font-normal mb-4 leading-[1.1] tracking-tight">{svc.title}</h3>
                <p className="text-krudex-muted text-sm md:text-base leading-relaxed mb-8">{svc.summary}</p>
                <ul className="flex flex-col gap-3 mb-10">
                  {svc.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-krudex-accent flex-shrink-0 mt-2" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={svc.href}
                  className="group inline-flex items-center gap-2 self-start text-white text-sm font-medium hover:text-krudex-accent transition-colors"
                >
                  {svc.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <MotionLink
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-krudex-accent hover:text-krudex-black transition-all duration-300"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
