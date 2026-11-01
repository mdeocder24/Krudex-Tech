"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2
} from 'lucide-react';

export default function ClickUpWidgetGrid() {
  // Box 2: Interactive Model Carousel Index
  const [activeModelIndex, setActiveModelIndex] = useState(0);

  // Box 3: Interactive Persona Stack State
  const [activePersona, setActivePersona] = useState<'eng' | 'mktg' | 'academy'>('eng');

  // Box 4: MCP Connection State
  const [mcpStatus, setMcpStatus] = useState<'online' | 'syncing'>('online');

  // Box 5: Ambient Suggestions toggle
  const [activeSuggestions, setActiveSuggestions] = useState<string[]>([
    'billing', 'perf'
  ]);

  const toggleSuggestion = (id: string) => {
    setActiveSuggestions(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const models = [
    { id: 'brain', name: 'Krudex Brain', tag: 'Native', latency: '12ms', color: 'from-[#7B68EE] to-[#00D2FF]' },
    { id: 'gpt', name: 'OpenAI GPT-4o', tag: 'Fast', latency: '28ms', color: 'from-[#10B981] to-[#3B82F6]' },
    { id: 'claude', name: 'Claude 3.5 Sonnet', tag: 'Code', latency: '35ms', color: 'from-[#F59E0B] to-[#EF4444]' },
    { id: 'gemini', name: 'Gemini 2.0 Flash', tag: 'Edge', latency: '18ms', color: 'from-[#00D2FF] to-[#7B68EE]' },
  ];

  const personas = [
    {
      id: 'eng' as const,
      name: 'Lead Systems Engineer',
      avatar: 'K',
      avatarBg: 'bg-gradient-to-tr from-[#7B68EE] to-[#00D2FF]',
      role: 'Full-Stack & Edge Architect',
      tone: '"direct, zero fluff, typed contracts"',
      sprint: '"story points, CI/CD gates"',
      prefers: '"typed OpenAPI & zero bloat"',
      reports: '"weekly founder demo call"'
    },
    {
      id: 'mktg' as const,
      name: 'Growth & Ads Strategist',
      avatar: 'P',
      avatarBg: 'bg-gradient-to-tr from-[#E01E5A] to-[#F472B6]',
      role: 'Google Ads & Attribution Lead',
      tone: '"data-backed, ROAS-focused, high intent"',
      sprint: '"daily bid pacing & search terms"',
      prefers: '"verified GA4 backend telemetry"',
      reports: '"real-time conversion dashboards"'
    },
    {
      id: 'academy' as const,
      name: 'NovaSkill Practicing Mentor',
      avatar: 'S',
      avatarBg: 'bg-gradient-to-tr from-[#10B981] to-[#00D2FF]',
      role: 'Student Training Practitioner',
      tone: '"rigorous, constructive, production-grade"',
      sprint: '"weekly cohort lab reviews"',
      prefers: '"shipping real code to production"',
      reports: '"placement hiring partner status"'
    }
  ];

  const handlePrevModel = () => {
    setActiveModelIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  const handleNextModel = () => {
    setActiveModelIndex((prev) => (prev + 1) % models.length);
  };

  const handleMcpClick = () => {
    setMcpStatus('syncing');
    setTimeout(() => setMcpStatus('online'), 800);
  };

  const currentPersona = personas.find(p => p.id === activePersona) || personas[0];

  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#07050D]">
      {/* Dynamic Ambient Background Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-tr from-[#7B68EE]/15 via-[#E01E5A]/10 to-[#00D2FF]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header matching Video Frame 06 & 15 */}
        <div className="text-center flex flex-col items-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="clickup-animated-gradient-border mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E0B19]/90 text-xs font-semibold text-[#A78BFA] uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#F472B6] animate-pulse" />
              <span>Krudex Architecture Engine</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4"
          >
            Nothing comes close to <span className="clickup-gradient-text">Krudex Brain.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-krudex-muted text-base sm:text-lg max-w-2xl mb-8"
          >
            Already plugged into your team, your tools, and your production codebase.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono tracking-widest text-white/50 uppercase"
          >
            <span>AVAILABLE EVERYWHERE</span>
            <span>·</span>
            <span>MACOS</span>
            <span>·</span>
            <span>IOS</span>
            <span>·</span>
            <span>WINDOWS</span>
            <span>·</span>
            <span>ANDROID</span>
          </motion.div>
        </div>

        {/* =========================================================================
            ROW 1: Box 1 (Memory Updated), Box 2 (EveryModelCard Carousel), Box 3 (Personality Stack)
            (Exact Match to Video Frames 06, 08, 11)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* BOX 1: MEMORY UPDATED (Matching Video Frame 08 & REA Brain2MemoryVisual) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="clickup-card p-6 sm:p-7 flex flex-col justify-between hover:border-[#7B68EE]/50 group relative overflow-hidden"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D2FF] font-bold block mb-3">
                PERSISTENT CONTEXT
              </span>
              <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                Full-Repo Awareness
              </h3>
              <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed mb-6">
                Brain remembers architectural decisions and coding preferences across every sprint.
              </p>
            </div>

            {/* Authentic ClickUp Memory Visualizer (REA Brain2MemoryVisual) */}
            <div className="relative h-44 w-full bg-[#09070F] rounded-2xl p-4 border border-white/10 flex flex-col justify-between overflow-hidden shadow-inner group-hover:border-[#7B68EE]/50 transition-colors">
              {/* Conic Ambient Halo Glow behind card */}
              <div className="absolute inset-x-8 bottom-2 h-16 clickup-memory-glow pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Memory Card with Rainbow Edge */}
              <div className="relative z-10 w-full bg-[#120E22]/90 border border-white/15 rounded-xl p-3.5 backdrop-blur-md">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#7B68EE] via-[#E01E5A] to-[#00D2FF] flex items-center justify-center text-[10px] text-white font-bold">
                      ✦
                    </div>
                    <span className="text-xs font-semibold text-white/95">Memory Updated</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                </div>

                <div className="pt-2.5 space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block">
                    USER PREFERENCE:
                  </span>
                  <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                    <span>Values clarity &amp; zero bloat</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/40 pt-1">
                <span>INDEXED REPO KERNEL</span>
                <span className="text-[#00D2FF]">100% IN-SYNC</span>
              </div>
            </div>
          </motion.div>

          {/* BOX 2: EVERY MODEL CARD CAROUSEL (Matching Video Frame 08 & 11) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="clickup-card p-6 sm:p-7 flex flex-col justify-between hover:border-[#7B68EE]/50 group"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F472B6] font-bold block mb-3">
                INTELLIGENCE &amp; ROUTING
              </span>
              <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                Frontier Model Carousel
              </h3>
              <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed mb-6">
                Brain picks the best model for each task. One studio contract. Every frontier model running with full context.
              </p>
            </div>

            {/* Authentic ClickUp Model Carousel Widget (REA EveryModelCardVisual) */}
            <div className="relative h-44 w-full bg-[#09070F] rounded-2xl p-3 border border-white/10 flex items-center justify-between overflow-hidden shadow-inner">
              {/* Left Carousel Arrow */}
              <button
                type="button"
                aria-label="Previous Model"
                onClick={handlePrevModel}
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer z-20 shrink-0 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Vertical Stack with Fade Mask */}
              <div className="flex-1 flex flex-col items-center justify-center relative clickup-model-fade-mask h-full px-2">
                {models.map((m, idx) => {
                  const isActive = idx === activeModelIndex;
                  const isPrev = idx === (activeModelIndex - 1 + models.length) % models.length;
                  const isNext = idx === (activeModelIndex + 1) % models.length;

                  if (!isActive && !isPrev && !isNext) return null;

                  return (
                    <motion.div
                      key={m.id}
                      onClick={() => setActiveModelIndex(idx)}
                      layout
                      transition={{ duration: 0.3 }}
                      className={`cursor-pointer transition-all duration-300 ${
                        isActive
                          ? 'w-full py-2.5 px-3.5 rounded-full clickup-active-model-glow flex items-center justify-between my-1 z-10 scale-105'
                          : 'w-4/5 py-1 px-3 rounded-full bg-white/[0.03] border border-white/5 opacity-40 text-white/40 flex items-center justify-between my-0.5 scale-90'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-tr ${m.color}`} />
                        <span className={`text-xs font-semibold ${isActive ? 'text-white' : 'text-white/60'}`}>
                          {m.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-white/40">
                        {m.latency}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Carousel Arrow */}
              <button
                type="button"
                aria-label="Next Model"
                onClick={handleNextModel}
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer z-20 shrink-0 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* BOX 3: PERSONALITY CARD STACK (Matching Video Frame 08 & 11) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="clickup-card p-6 sm:p-7 flex flex-col justify-between hover:border-[#7B68EE]/50 group"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A78BFA] font-bold block mb-3">
                TEAM PERSONA &amp; CONFIG
              </span>
              <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                Tailored Team Shorthand
              </h3>
              <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed mb-6">
                Hover or click to switch active studio persona and inspect tailored prompt guidelines.
              </p>
            </div>

            {/* Authentic ClickUp Stacked Persona Visualizer (REA PersonalityCardVisual) */}
            <div className="relative h-44 w-full bg-[#09070F] rounded-2xl p-3 border border-white/10 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="space-y-1.5">
                {personas.map((persona) => {
                  const isSelected = activePersona === persona.id;

                  return (
                    <motion.div
                      key={persona.id}
                      onClick={() => setActivePersona(persona.id)}
                      onMouseEnter={() => setActivePersona(persona.id)}
                      className={`p-1.5 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'bg-white/[0.08] border border-[#7B68EE]/60 shadow-lg translate-x-1'
                          : 'bg-white/[0.02] border border-white/5 opacity-50 hover:opacity-80'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-6 h-6 rounded-lg ${persona.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                          {persona.avatar}
                        </div>
                        <div>
                          <div className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-white/70'}`}>
                            {persona.name}
                          </div>
                          <div className="text-[10px] text-white/40 font-mono">
                            {persona.role}
                          </div>
                        </div>
                      </div>

                      {/* Green Radio Button Indicator (Exact ClickUp style #00c07a) */}
                      <div className="flex items-center gap-1.5">
                        {isSelected && (
                          <div className="w-2.5 h-2.5 rounded-full clickup-persona-active-radio" />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Active persona preference readout matching video frame 08 */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/50">
                <span className="text-[#A78BFA] font-semibold">{currentPersona.name.split(' ')[0]} Prefers:</span>
                <span className="text-[#6EE7B7] truncate max-w-[140px]">{currentPersona.prefers}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            ROW 2: Box 4 (Connected Apps & MCP), Box 5 (Ambient Intelligence), Box 6 (Deep Search)
            (Matching Video Frame 08 & 11)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* BOX 4: CONNECTED APPS & MCP HUB */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="clickup-card p-6 sm:p-7 flex flex-col justify-between hover:border-[#7B68EE]/50 group"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D2FF] font-bold block mb-3">
                CONNECTED APPS &amp; ANY MCP
              </span>
              <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                Native Tool Integration
              </h3>
              <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed mb-6">
                Brain taps GitHub, Figma, AWS, Google Ads, and GA4 to get you answers and automated telemetry.
              </p>
            </div>

            {/* Interactive MCP Hub Visualizer matching Video Frame 08 */}
            <div 
              onClick={handleMcpClick}
              className="relative h-44 w-full bg-[#09070F] rounded-2xl p-4 border border-white/10 flex flex-col items-center justify-center cursor-pointer overflow-hidden group-hover:border-[#00D2FF]/40 transition-colors"
            >
              {/* Circuit Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-36 h-36 rounded-full border border-dashed border-[#7B68EE] animate-spin" style={{ animationDuration: '24s' }} />
              </div>

              {/* Central Glowing Flower Node */}
              <div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7B68EE] via-[#E01E5A] to-[#00D2FF] p-[2px] shadow-[0_0_25px_rgba(123,104,238,0.6)] mb-3 group-hover:scale-110 transition-transform clickup-glow-breathe">
                <div className="w-full h-full bg-[#0E0B19] rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
                </div>
              </div>

              {/* Status Pill */}
              <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border transition-all ${
                mcpStatus === 'online'
                  ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/40'
                  : 'bg-[#00D2FF]/20 text-[#00D2FF] border-[#00D2FF]/50 animate-pulse'
              }`}>
                {mcpStatus === 'online' ? '● MCP ONLINE' : 'SYNCING REPOS...'}
              </span>
              <span className="text-[9px] font-mono text-white/30 mt-1">CLICK TO TEST SYNC</span>
            </div>
          </motion.div>

          {/* BOX 5: AMBIENT INTELLIGENCE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="clickup-card p-6 sm:p-7 flex flex-col justify-between hover:border-[#7B68EE]/50 group"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F472B6] font-bold block mb-3">
                AMBIENT INTELLIGENCE
              </span>
              <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                Proactive Sprint Prompts
              </h3>
              <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed mb-6">
                Brain surfaces relevant context, related pull requests, and smart suggestions before you even ask.
              </p>
            </div>

            {/* Interactive Ambient Floating Suggestions matching Video Frame 08 & 11 */}
            <div className="relative h-44 w-full bg-[#09070F] rounded-2xl p-3.5 border border-white/10 flex flex-col justify-between overflow-hidden">
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-[#7B68EE]/20 via-[#FF0BE5]/15 to-[#45C4F9]/20 rounded-full blur-2xl pointer-events-none clickup-glow-drift" />

              {/* Gathering Data status pill */}
              <div className="py-1 px-2.5 rounded-lg bg-gradient-to-r from-[#7B68EE]/20 via-[#E01E5A]/20 to-transparent border border-white/10 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-white/80 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#00D2FF] animate-spin" style={{ animationDuration: '4s' }} />
                  Gathering Data...
                </span>
                <span className="text-[9px] font-bold text-[#A78BFA]">LIVE</span>
              </div>

              {/* Actionable Suggestions */}
              <div className="space-y-1.5">
                <div
                  onClick={() => toggleSuggestion('billing')}
                  className={`p-2 rounded-lg text-[11px] font-medium flex items-center justify-between cursor-pointer transition-all ${
                    activeSuggestions.includes('billing')
                      ? 'bg-blue-500/15 border border-blue-500/30 text-blue-300'
                      : 'bg-white/[0.03] border border-white/5 text-white/50 hover:text-white'
                  }`}
                >
                  <span>■ Improve Billing Error Handling</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                </div>

                <div
                  onClick={() => toggleSuggestion('perf')}
                  className={`p-2 rounded-lg text-[11px] font-medium flex items-center justify-between cursor-pointer transition-all ${
                    activeSuggestions.includes('perf')
                      ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                      : 'bg-white/[0.03] border border-white/5 text-white/50 hover:text-white'
                  }`}
                >
                  <span>■ Optimize Dashboard Load Time</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* BOX 6: DEEP SEARCH & AUDIT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="clickup-card p-6 sm:p-7 flex flex-col justify-between hover:border-[#7B68EE]/50 group"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#10B981] font-bold block mb-3">
                DEEP SEARCH &amp; AUDIT
              </span>
              <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                Cross-Platform Queries
              </h3>
              <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed mb-6">
                Ask something complex. Brain checks your workspace, cloud databases, and Google Ads metrics for instant clarity.
              </p>
            </div>

            {/* Deep Search Progress Widget matching Video Frame 08 & 11 */}
            <div className="relative h-44 w-full bg-[#09070F] rounded-2xl p-3.5 border border-white/10 flex flex-col justify-between overflow-hidden">
              <div className="text-[11px] text-white/80 leading-relaxed font-mono">
                <span className="text-[#00D2FF]">Growth &amp; Acquisition: </span>
                Paid ROAS holding at 4.2x across search, up from 3.1x.
              </div>

              <div className="p-3 rounded-xl bg-gradient-to-r from-[#7B68EE]/10 to-[#00D2FF]/10 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-white/70">Reports build in progress...</span>
                  </div>
                  <span className="text-[#10B981] font-bold">100%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5">
                  <div className="w-full h-full bg-gradient-to-r from-[#7B68EE] via-[#E01E5A] to-[#10B981] rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
