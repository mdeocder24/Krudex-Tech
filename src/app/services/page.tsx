
import React from 'react';
import * as motion from 'framer-motion/client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ServicesCTA from '@/components/ServicesCTA';
import Footer from '@/components/Footer';
import ProductMock from '@/components/ui/ProductMock';
import { OFFERINGS } from '@/content/offerings';
import AIDemo from '@/components/ai/AIDemo';

const servicesData = OFFERINGS;

export default function ServicesPage() {
  return (
    <main className="min-h-svh bg-transparent selection:bg-krudex-accent selection:text-krudex-black flex flex-col">
      <Navbar />

      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24 md:pb-32 bg-krudex-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold">
                SERVICES
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-20 md:mb-32 flex flex-col items-center"
            >
              <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-8 leading-[1.1] tracking-tight">
                What Krudex <br />
                <span className="text-white/45">builds and grows for you.</span>
              </h1>
              <p className="text-krudex-muted text-lg leading-relaxed max-w-2xl text-center">
                Five core disciplines. Senior engineers on every project. <br className="hidden md:block" />
                Measurable outcomes as the only deliverable that counts.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {servicesData.map((service) => (
              <div key={service.id} id={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 scroll-mt-32">
                {/* Left Column: Description */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col"
                >
                  <div className="text-krudex-muted font-mono text-sm mb-6 border-b border-krudex-border pb-4 inline-block w-full">{service.num}</div>
                  <h2 className="font-serif text-4xl text-white font-bold mb-4">{service.title}</h2>
                  <h3 className="text-white/70 font-medium mb-6">{service.tagline}</h3>
                  <p className="text-krudex-muted text-base leading-loose mb-10">
                    {service.description}
                  </p>
                  <div className="border-l-2 border-krudex-accent pl-6 py-3 bg-gradient-to-r from-white/5 to-transparent">
                    <div className="text-xs text-krudex-muted font-mono uppercase tracking-[0.15em] mb-2">
                      OUTCOME
                    </div>
                    <p className="text-white font-medium text-sm">
                      {service.outcome}
                    </p>
                  </div>
                  <ProductMock
                    kind={service.mock}
                    num={service.num}
                    tags={service.tags}
                    className="border border-krudex-border mt-10 min-h-[300px] sm:min-h-[340px]"
                  />
                </motion.div>

                {/* Right Column: Capabilities */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col lg:pt-12"
                >
                  <div className="text-xs text-krudex-muted font-mono uppercase tracking-[0.2em] mb-6">
                    CAPABILITIES
                  </div>
                  <div className="flex flex-col gap-2">
                    {service.capabilities.map((cap, capIdx) => (
                      <div
                        key={capIdx}
                        className="bg-krudex-card/50 border border-krudex-border p-5 flex items-center gap-4 hover:border-white/30 transition-colors"
                      >
                        <span className="text-krudex-muted font-mono text-xs">
                          {String(capIdx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-krudex-text text-sm">{cap}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <AIDemo />

          <div className="mt-24 md:mt-32 border border-krudex-border bg-krudex-card/40 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-white font-bold text-xl mb-3">Are you a student?</h2>
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
