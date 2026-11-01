"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Clock, FileCode2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    phase: '01',
    name: 'Discovery & Scoping',
    timing: 'Day 1 – 3',
    headline: 'Technical Audit & Feasibility Review',
    desc: 'We map your exact business goals, user flows, database constraints, and latency targets. We establish hard milestones and deliver a fixed-scope Statement of Work (SOW) before any code is written.',
    deliverable: 'Technical Specification Document & Fixed Quote',
  },
  {
    phase: '02',
    name: 'System Architecture',
    timing: 'Week 1',
    headline: 'Schema Modeling & API Contracts',
    desc: 'Database schema modeling, component tree design in Figma, OpenAPI contract definitions, and CI/CD deployment pipelines. Both parties align on architectural blueprints upfront.',
    deliverable: 'System Architecture Blueprint & Sprint Schedule',
  },
  {
    phase: '03',
    name: 'Senior-Led Build',
    timing: 'Weeks 2 – 5',
    headline: 'Agile Sprints with Continuous Staging',
    desc: 'Focused bi-weekly sprints with automated testing, live preview deployments, and direct stakeholder Slack/demo check-ins. Built directly by senior engineers with zero junior proxy delegation.',
    deliverable: 'Live Staging Builds & Automated Test Suites',
  },
  {
    phase: '04',
    name: 'Launch & Warranty',
    timing: 'Week 6+',
    headline: 'Production Rollout & 30-Day SLA',
    desc: 'Zero-downtime DNS cutover, cloud monitoring, telemetry dashboards, analytics tracking, and full source code handover with 30 days of included post-launch warranty support.',
    deliverable: '100% IP Handover, Admin Credentials & 30-Day Warranty',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-4"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Disciplined Delivery Cadence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight max-w-3xl mb-4"
          >
            How we take you from concept to{' '}
            <span className="clickup-gradient-text">production in 4 sprints.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-krudex-muted text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            A battle-tested engineering process refined across dozens of successful production launches.
          </motion.p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {steps.map((step, idx) => (
            <button
              key={step.phase}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#151124] border-[#7B68EE]/60 shadow-[0_0_20px_rgba(123,104,238,0.25)] -translate-y-1'
                  : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:-translate-y-0.5'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono font-bold ${activeStep === idx ? 'text-[#00D2FF]' : 'text-white/40'}`}>
                  PHASE {step.phase}
                </span>
                <span className="text-[10px] font-mono text-white/50">{step.timing}</span>
              </div>
              <h4 className="font-heading font-bold text-sm text-white truncate">
                {step.name}
              </h4>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="clickup-card p-6 sm:p-10 border border-white/10 mb-12 hover:border-[#7B68EE]/40 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#A78BFA] font-bold">
                  PHASE {steps[activeStep].phase} {"//"} {steps[activeStep].timing}
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                  {steps[activeStep].headline}
                </h3>
                <p className="text-krudex-muted text-sm sm:text-base leading-relaxed">
                  {steps[activeStep].desc}
                </p>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <FileCode2 className="w-5 h-5 text-[#00D2FF] shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/50 block">MILESTONE ARTIFACT:</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {steps[activeStep].deliverable}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end">
                <Link
                  href="/contact"
                  className="clickup-btn-primary px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 group/btn"
                >
                  <span>Initiate Phase 01</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4 Core Assurances */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: '100% IP Transfer', desc: 'You own all code, designs, and cloud credentials.' },
            { title: '1 Business Day SLA', desc: 'Direct Slack, WhatsApp, and email response.' },
            { title: '30-Day Post-Launch Warranty', desc: 'Performance calibration & bug fixes included.' },
            { title: 'Zero Vendor Lock-In', desc: 'Standard open technologies, fully documented.' },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 hover:border-white/15 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-white">{item.title}</h5>
                <p className="text-[11px] text-krudex-muted mt-0.5">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
