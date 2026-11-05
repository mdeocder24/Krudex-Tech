import React from 'react';
import * as motion from 'framer-motion/client';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ServicesCTA from '@/components/ServicesCTA';
import Footer from '@/components/Footer';
import ProductMock from '@/components/ui/ProductMock';
import { OFFERINGS } from '@/content/offerings';

const servicesData = OFFERINGS;

// Strong ease-out: content settles quickly instead of drifting in.
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function ServicesPage() {
  return (
    <main className="min-h-svh bg-transparent selection:bg-krudex-accent selection:text-krudex-black flex flex-col">
      <Navbar />

      <section className="px-6 md:px-16 lg:px-24 pt-32 md:pt-40 pb-16 md:pb-20 bg-krudex-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="flex flex-col items-center text-center pb-12 md:pb-16"
          >
            <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold">
                SERVICES
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 leading-[1.1] tracking-tight">
              What Krudex <br />
              <span className="text-white/45">builds and grows for you.</span>
            </h1>
            <p className="text-krudex-muted text-lg leading-relaxed max-w-2xl">
              Five core disciplines. Senior engineers on every project. <br className="hidden md:block" />
              Measurable outcomes as the only deliverable that counts.
            </p>

            {/* Jump links to each service */}
            <nav aria-label="Services on this page" className="mt-10 flex flex-wrap justify-center gap-2">
              {servicesData.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-2 border border-krudex-border bg-krudex-card/60 px-4 py-2 rounded-full text-sm text-krudex-text hover:border-white/40 hover:text-white active:scale-[0.97] transition-[border-color,color,transform] duration-150 ease-out"
                >
                  <span className="font-mono text-xs text-krudex-muted">{service.num}</span>
                  {service.title}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <div className="flex flex-col">
            {servicesData.map((service, idx) => (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 border-t border-krudex-border py-14 md:py-20 scroll-mt-24"
              >
                {/* Text */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-sm text-krudex-muted">{service.num}</span>
                    <span className="h-px w-8 bg-krudex-border" />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-3 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-white/70 font-medium mb-5">{service.tagline}</p>
                  <p className="text-krudex-muted text-base leading-relaxed max-w-2xl">{service.description}</p>

                  <h3 className="mt-8 mb-4 text-xs text-krudex-muted font-mono uppercase tracking-[0.2em]">
                    Capabilities
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3 text-sm text-krudex-text leading-snug">
                        <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-krudex-accent" />
                        {cap}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 lg:mt-auto lg:pt-8">
                    <div className="border-l-2 border-krudex-accent pl-5 py-3 bg-gradient-to-r from-white/5 to-transparent">
                      <div className="text-xs text-krudex-muted font-mono uppercase tracking-[0.15em] mb-1.5">
                        Outcome
                      </div>
                      <p className="text-white font-medium text-sm">{service.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Visual, alternating sides on desktop */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-first' : ''}`}>
                  <ProductMock
                    kind={service.mock}
                    num={service.num}
                    tags={service.tags}
                    className="h-full border border-krudex-border"
                  />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Student training */}
          <div className="border border-krudex-border bg-krudex-card/40 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-white font-bold text-xl mb-2">Are you a student?</h2>
              <p className="text-krudex-muted text-sm leading-relaxed max-w-xl">
                We also train students with industry experts, in collaboration with NovaSkill Hub.
              </p>
            </div>
            <Link
              href="/training"
              className="group inline-flex items-center gap-2 self-start md:self-auto whitespace-nowrap border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-krudex-accent hover:text-krudex-black active:scale-[0.97] transition-[background-color,color,transform] duration-200"
            >
              See Student Training
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <ServicesCTA />
      <Footer />
    </main>
  );
}
