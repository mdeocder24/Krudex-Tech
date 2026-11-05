import React from 'react';
import Link from 'next/link';
import * as motion from 'framer-motion/client';
import { ArrowRight, FolderGit, Handshake, MessageSquareCode, Presentation } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import ProgramExplorer from '@/components/ProgramExplorer';
import { PROGRAM_ICONS } from '@/components/programIcons';
import TrainingPathFinder from '@/components/TrainingPathFinder';
import { PROGRAMS, programEnquiryHref } from '@/content/training';
import { SITE_URL } from '@/lib/site';

const methodData = [
  {
    icon: Presentation,
    title: 'Taught by industry experts',
    text: 'Sessions are led by people who build software for a living, so the examples come from real projects.',
  },
  {
    icon: MessageSquareCode,
    title: 'Learn by building',
    text: 'Each module ends with hands-on work. You write the code yourself and get feedback on it.',
  },
  {
    icon: FolderGit,
    title: 'Finish with a portfolio',
    text: 'Every program ends in a deployed capstone project you can show on GitHub and in interviews.',
  },
];

const stepsData = [
  'Send an enquiry and tell us which program interests you.',
  'We reply within one business day.',
  'We share the current format, dates, and fees.',
];

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@graph': PROGRAMS.map((p) => ({
    '@type': 'Course',
    '@id': `${SITE_URL}/training#program-${p.id}`,
    name: `${p.title} Training`,
    description: p.description,
    url: `${SITE_URL}/training#program-${p.id}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    teaches: p.modules.map((m) => m.title),
  })),
};

export default function TrainingPage() {
  return (
    <main className="min-h-svh bg-transparent selection:bg-krudex-accent selection:text-krudex-black flex flex-col">
      <JsonLd data={courseJsonLd} />
      <Navbar />

      {/* 1. Hero */}
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
                  Student training · with NovaSkill Hub
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">AI/ML, Java and Python</span><br />
                <span className="text-white/45">taught by people who build.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-start"
            >
              <p className="text-krudex-muted text-lg leading-relaxed mb-8">
                Krudex Global and NovaSkill Hub train students in AI & Machine Learning, Java Full Stack and Python Full Stack. Industry experts take you from fundamentals to a deployed project.
              </p>

              <ul className="flex flex-wrap gap-2.5 mb-10" aria-label="Programs">
                {PROGRAMS.map((p) => {
                  const Icon = PROGRAM_ICONS[p.id];
                  return (
                    <li key={p.id}>
                      <a
                        href={`#program-${p.id}`}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm text-white/80 transition-colors hover:border-white/40 hover:text-white"
                      >
                        <Icon aria-hidden="true" className="h-4 w-4" />
                        {p.title}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <Link
                href={programEnquiryHref()}
                className="group flex items-center gap-2 bg-krudex-accent text-krudex-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-krudex-accent-hover active:scale-[0.97] transition-[background-color,transform] duration-200"
              >
                Enquire About Training
                <ArrowRight aria-hidden="true" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Programs and curricula */}
      <ProgramExplorer />

      {/* 3. How the training works */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl md:text-5xl text-white font-bold mb-16"
          >
            How the training works.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {methodData.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" }}
                className="bg-krudex-card/40 border border-krudex-border p-10"
              >
                <item.icon aria-hidden="true" className="h-5 w-5 text-krudex-accent mb-6" />
                <h3 className="text-white font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-krudex-muted text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Collaboration */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-8">
              <Handshake aria-hidden="true" className="h-3.5 w-3.5 text-krudex-accent" />
              <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold">In collaboration</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight">
              Krudex Global <span className="text-white/45">×</span> NovaSkill Hub
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 text-krudex-muted text-base leading-relaxed"
          >
            Krudex builds SaaS products, AI features and web platforms every day. Together with NovaSkill Hub, we bring that working knowledge to students, so what you learn matches how software teams work today.
          </motion.p>
        </div>
      </section>

      <TrainingPathFinder />

      {/* 5. Enquiry CTA */}
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
            href={programEnquiryHref()}
            className="group flex items-center gap-2 bg-krudex-accent text-krudex-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-krudex-accent-hover active:scale-[0.97] transition-[background-color,transform] duration-200"
          >
            Enquire About Training
            <ArrowRight aria-hidden="true" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
