"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, Code, BarChart3, GraduationCap, ArrowRight, CheckCircle2, X } from 'lucide-react';

interface AgentRole {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  prompt: string;
  output: string;
  badge: string;
}

export default function ClickUpSuperAgent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [activeModal, setActiveModal] = useState(false);
  const [selectedAgentId, setSelectedAgentId] = useState('eng');

  // Parallax transform for floating telemetry badges
  const badgeY1 = useTransform(scrollYProgress, [0, 1], [-20, 30]);
  const badgeY2 = useTransform(scrollYProgress, [0, 1], [30, -25]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.3]);

  const agentTemplates: AgentRole[] = [
    {
      id: 'eng',
      name: 'PRD & Architecture Agent',
      category: 'Software Engineering',
      icon: <Code className="w-4 h-4 text-[#00D2FF]" />,
      badge: 'SPEC[PRD#7]',
      prompt: 'Generate Next.js 16 Edge architecture spec with Prisma ORM and strict OpenAPI contracts.',
      output: '✓ Spec verified: 14 typed endpoints, 99 Lighthouse target, zero runtime vulnerabilities.'
    },
    {
      id: 'mktg',
      name: 'ROAS & Acquisition Agent',
      category: 'Performance Marketing',
      icon: <BarChart3 className="w-4 h-4 text-[#E01E5A]" />,
      badge: 'ROAS[4.2X]',
      prompt: 'Monitor Google Ads bid pacing, eliminate negative match keywords, and link GA4 conversion telemetry.',
      output: '✓ Attribution confirmed: ROAS increased to 4.2x across search, CPA reduced by 22%.'
    },
    {
      id: 'train',
      name: 'NovaSkill Review Agent',
      category: 'Student Academy',
      icon: <GraduationCap className="w-4 h-4 text-[#10B981]" />,
      badge: 'MENTOR[ACTIVE]',
      prompt: 'Audit student pull requests against production React 19 standards and simulate system design interview.',
      output: '✓ PR Review: Memory leaks prevented, edge rendering optimized, student certified for partner placement.'
    }
  ];

  const currentTemplate = agentTemplates.find(a => a.id === selectedAgentId) || agentTemplates[0];

  return (
    <section ref={containerRef} className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#06040A]">
      {/* Dynamic Parallax Atmospheric Background Glow */}
      <motion.div 
        style={{ opacity: glowOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[450px] bg-gradient-to-tr from-[#7B68EE]/20 via-[#E01E5A]/15 to-[#00D2FF]/20 blur-[140px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Section Pill matching Video Frame 01 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-white/90 uppercase tracking-wider mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
          <span>The Autonomous Studio Model</span>
        </motion.div>

        {/* Headline matching Video Frame 01 & 02 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight text-center max-w-3xl mb-6 leading-[1.08]"
        >
          A new era of execution, <br />
          <span className="clickup-gradient-text">with Krudex Super Agents.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-krudex-muted text-base sm:text-lg text-center max-w-2xl mb-10 leading-relaxed"
        >
          Autonomous agents plugged into your architecture, live Google Ads budgets, and student cohorts with strict SLA delivery.
        </motion.p>

        {/* Action Buttons matching Video Frame 01 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            type="button"
            onClick={() => setActiveModal(true)}
            className="clickup-btn-primary px-7 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#7B68EE]/30"
          >
            <Bot className="w-4 h-4" />
            <span>Build your own agent</span>
          </button>

          <a
            href="/services"
            className="clickup-btn-secondary px-7 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
          >
            <span>Explore Agent Capabilities</span>
            <ArrowRight className="w-4 h-4 text-white/50" />
          </a>
        </motion.div>

        {/* =========================================================================
            HERO VISUAL: SUPER AGENT PORTRAIT WITH GRADIENT MASK (Matching Video Frame 03)
            ========================================================================= */}
        <div className="relative w-full max-w-3xl h-[420px] sm:h-[480px] rounded-3xl bg-gradient-to-b from-[#120D22] via-[#0D091A] to-[#07050E] border border-white/10 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-2xl">
          {/* Subtle Cyber Grid Lines in Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Floating Monospace Telemetry Badges (Exact match to Video Frame 03) */}
          <motion.div 
            style={{ y: badgeY1 }}
            className="absolute top-10 left-6 sm:left-12 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-white/60 tracking-wider backdrop-blur-md pointer-events-none flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
            <span>ARCHITECTURE_ 2&#125;+7</span>
          </motion.div>

          <motion.div 
            style={{ y: badgeY2 }}
            className="absolute top-12 right-6 sm:right-12 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-[#A78BFA] tracking-wider backdrop-blur-md pointer-events-none flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
            <span>SUPER[AGENT#ENG]__</span>
          </motion.div>

          <motion.div 
            style={{ y: badgeY2 }}
            className="absolute bottom-16 left-6 sm:left-14 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-[#F472B6] tracking-wider backdrop-blur-md pointer-events-none flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F472B6]" />
            <span>DELEGATE_AN&#125;#&gt;_.[</span>
          </motion.div>

          <motion.div 
            style={{ y: badgeY1 }}
            className="absolute bottom-20 right-6 sm:right-16 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-[#10B981] tracking-wider backdrop-blur-md pointer-events-none flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>ROAS[4.2X]_VERIFIED</span>
          </motion.div>

          {/* Central Portrait Silhouette with Holographic Cyber Mask */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Luminous Glow Behind Head */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-tr from-[#7B68EE]/40 via-[#E01E5A]/30 to-[#00D2FF]/40 blur-3xl pointer-events-none clickup-glow-breathe" />

            {/* Cyber Agent Avatar Silhouette */}
            <div className="w-40 sm:w-48 h-48 sm:h-56 rounded-full bg-[#181329] border border-white/15 flex flex-col items-center justify-center relative overflow-hidden shadow-inner group cursor-pointer"
                 onClick={() => setActiveModal(true)}>
              {/* Subtle Body Contour */}
              <div className="w-28 h-28 rounded-full bg-[#221B3A] border border-white/10 flex items-center justify-center relative">
                
                {/* Authentic Multi-Color Gradient Super Agent Visor Mask (Matching Frame 03) */}
                <div className="w-32 h-14 rounded-2xl bg-gradient-to-r from-[#FF0BE5] via-[#7D09FF] to-[#45C4F9] p-[2px] shadow-[0_0_30px_rgba(255,11,229,0.5)] transform -translate-y-2 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-[#0E0A1A] rounded-[14px] flex items-center justify-around px-3">
                    {/* Glowing Left Eye Slot */}
                    <div className="w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center bg-black/50">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] animate-pulse" />
                    </div>
                    {/* Center Brand Star */}
                    <Sparkles className="w-3.5 h-3.5 text-white/80 animate-spin" style={{ animationDuration: '8s' }} />
                    {/* Glowing Right Eye Slot */}
                    <div className="w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center bg-black/50">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF0BE5] animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Collar Contour */}
              <div className="w-36 h-20 rounded-t-full bg-[#201836] border-t border-white/10 mt-2" />
            </div>

            {/* Pill CTA beneath portrait matching video */}
            <button
              type="button"
              onClick={() => setActiveModal(true)}
              className="mt-6 px-6 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-xs font-semibold text-white tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              Build your own agent
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE AGENT BUILDER MODAL (Opened by "Build your own agent")
          ========================================================================= */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-xl bg-[#0F0C1B] border border-[#7B68EE]/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7B68EE] via-[#E01E5A] to-[#00D2FF] flex items-center justify-center text-white">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Custom Super Agent Builder</h3>
                    <p className="text-[11px] text-krudex-muted">Configure an autonomous agent for your production workflow</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModal(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Template Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {agentTemplates.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedAgentId(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedAgentId === item.id
                        ? 'bg-[#7B68EE]/20 border-[#7B68EE] text-white shadow-sm'
                        : 'bg-white/[0.03] border-white/5 text-white/60 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      {item.icon}
                      <span className="text-[9px] font-mono text-white/40">{item.badge}</span>
                    </div>
                    <div className="text-xs font-semibold truncate">{item.name}</div>
                  </button>
                ))}
              </div>

              {/* Agent Execution Preview */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/50 block mb-1.5">
                    Agent Instruction Prompt
                  </label>
                  <div className="p-3 rounded-xl bg-[#09070F] border border-white/10 text-xs text-white/80 font-mono">
                    {currentTemplate.prompt}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#10B981] flex items-center gap-1.5 mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Real-Time Output Guarantee</span>
                  </label>
                  <div className="p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-xs text-[#6EE7B7] font-mono leading-relaxed">
                    {currentTemplate.output}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveModal(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="clickup-btn-primary px-6 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5"
                >
                  <span>Deploy to Studio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
