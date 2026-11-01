"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Check, 
  CheckCircle2
} from 'lucide-react';

export default function ClickUpWidgetGrid() {
  // Box 2: Interactive Model Switcher State
  const [selectedModel, setSelectedModel] = useState<'brain' | 'gpt' | 'claude' | 'gemini'>('brain');

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
    { id: 'brain', name: 'Krudex Brain 4.0', tag: 'Native', latency: '12ms' },
    { id: 'gpt', name: 'OpenAI GPT-4o', tag: 'Fast', latency: '28ms' },
    { id: 'claude', name: 'Claude 3.5 Sonnet', tag: 'Code', latency: '35ms' },
    { id: 'gemini', name: 'Gemini 2.0 Flash', tag: 'Edge', latency: '18ms' },
  ];

  const handleMcpClick = () => {
    setMcpStatus('syncing');
    setTimeout(() => setMcpStatus('online'), 800);
  };

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#07050D]">
      {/* Dynamic Ambient Background Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-tr from-[#7B68EE]/15 via-[#E01E5A]/10 to-[#00D2FF]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header matching Video Frame 15 */}
        <div className="text-center flex flex-col items-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7B68EE]/10 border border-[#7B68EE]/30 text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
            <span>Krudex Architecture Engine</span>
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
            ROW 1: Context, Intelligence (Model Selector), Personality (JSON Editor)
            (Matching Video Frame 15 & 20)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* BOX 1: CONTEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="clickup-card p-6 sm:p-7 flex flex-col justify-between hover:border-[#7B68EE]/50 group"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D2FF] font-bold block mb-3">
                CONTEXT
              </span>
              <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                Full-Repo Awareness
              </h3>
              <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed mb-6">
                Brain sees your tasks, schema, and API contracts. It doesn&apos;t need a brief because it knows what&apos;s shipping in real-time.
              </p>
            </div>

            {/* Interactive Cascading Layered Windows */}
            <div className="relative h-44 w-full bg-[#09070F] rounded-xl p-3 border border-white/10 overflow-hidden group-hover:border-[#7B68EE]/40 transition-colors">
              <div className="absolute top-2 left-2 right-2 flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[9px] font-mono text-white/40">app/api/sprints/route.ts</span>
              </div>

              {/* Layered Cards Stack */}
              <div className="mt-8 space-y-2">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5 text-[10px] font-mono text-white/70 flex items-center justify-between group-hover:translate-x-1 transition-transform">
                  <span className="text-[#A78BFA]">export const dynamic = &apos;force-dynamic&apos;;</span>
                  <span className="text-[#10B981]">200 OK</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[10px] font-mono text-white/50 flex items-center justify-between translate-x-2 group-hover:translate-x-3 transition-transform">
                  <span>POST /api/v1/telemetry</span>
                  <span className="text-[#00D2FF]">14ms</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.01] border border-white/5 text-[10px] font-mono text-white/30 flex items-center justify-between translate-x-4">
                  <span>SELECT * FROM contracts</span>
                  <span>pg_pool</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BOX 2: INTELLIGENCE (Direct Video Match: Clickable Model Selector) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="clickup-card p-6 sm:p-7 flex flex-col justify-between hover:border-[#7B68EE]/50 group"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F472B6] font-bold block mb-3">
                INTELLIGENCE
              </span>
              <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                Dynamic Frontier Routing
              </h3>
              <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed mb-6">
                Brain picks the best model for each task. One studio contract. Every frontier model running with full context.
              </p>
            </div>

            {/* Interactive Model Selector Widget matching Video Frame 20 */}
            <div className="bg-[#09070F] rounded-xl p-3 border border-white/10 space-y-1.5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 pb-1.5 border-b border-white/5 flex items-center justify-between">
                <span>Select model</span>
                <span className="text-[#A78BFA] font-bold">CLICK TO TEST</span>
              </div>

              {models.map((m) => {
                const isSelected = selectedModel === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedModel(m.id as 'brain' | 'gpt' | 'claude' | 'gemini')}
                    className={`w-full p-2 rounded-lg flex items-center justify-between text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#7B68EE]/20 to-[#00D2FF]/10 border border-[#7B68EE]/50 text-white shadow-sm'
                        : 'bg-transparent text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-[#7B68EE] to-[#00D2FF]" />
                      <span className="font-medium">{m.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-white/40">{m.latency}</span>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-[#00D2FF]" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* BOX 3: PERSONALITY (Direct Video Match: Team Config Inspector) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="clickup-card p-6 sm:p-7 flex flex-col justify-between hover:border-[#7B68EE]/50 group"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A78BFA] font-bold block mb-3">
                PERSONALITY &amp; CONFIG
              </span>
              <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                Tailored Team Shorthand
              </h3>
              <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed mb-6">
                Brain learns how your team talks: your tone, your sprint methods, your deployment guidelines.
              </p>
            </div>

            {/* Interactive Code/JSON Widget matching Video Frame 20 */}
            <div className="bg-[#09070F] rounded-xl p-3.5 border border-white/10 font-mono text-[11px] space-y-2 overflow-hidden shadow-inner">
              <div className="flex items-center justify-between text-[9px] text-white/30 border-b border-white/5 pb-1">
                <span>krudex_team_profile.json</span>
                <span className="text-[#10B981]">ACTIVE</span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex items-start gap-2 hover:bg-white/5 p-1 rounded transition-colors cursor-pointer">
                  <span className="text-[#F472B6]">tone</span>
                  <span className="text-white/40">:</span>
                  <span className="text-[#38BDF8] truncate">&quot;direct, zero fluff, production&quot;</span>
                </div>
                <div className="flex items-start gap-2 hover:bg-white/5 p-1 rounded transition-colors cursor-pointer">
                  <span className="text-[#F472B6]">sprint</span>
                  <span className="text-white/40">:</span>
                  <span className="text-[#38BDF8] truncate">&quot;story points, CI/CD gates&quot;</span>
                </div>
                <div className="flex items-start gap-2 hover:bg-white/5 p-1 rounded transition-colors cursor-pointer">
                  <span className="text-[#F472B6]">prefers</span>
                  <span className="text-white/40">:</span>
                  <span className="text-[#38BDF8] truncate">&quot;typed OpenAPI contracts&quot;</span>
                </div>
                <div className="flex items-start gap-2 hover:bg-white/5 p-1 rounded transition-colors cursor-pointer">
                  <span className="text-[#F472B6]">reports</span>
                  <span className="text-white/40">:</span>
                  <span className="text-[#38BDF8] truncate">&quot;weekly founder demo call&quot;</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            ROW 2: Connected Apps (MCP), Ambient Intelligence, Deep Search
            (Matching Video Frame 30)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* BOX 4: CONNECTED APPS & MCP */}
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

            {/* Interactive MCP Hub Visualizer matching Video Frame 30 */}
            <div 
              onClick={handleMcpClick}
              className="relative h-44 w-full bg-[#09070F] rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center cursor-pointer overflow-hidden group-hover:border-[#00D2FF]/40 transition-colors"
            >
              {/* Background Connecting Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-36 h-36 rounded-full border border-dashed border-[#7B68EE] animate-spin" style={{ animationDuration: '20s' }} />
              </div>

              {/* Central Glowing Sparkle Node */}
              <div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7B68EE] via-[#E01E5A] to-[#00D2FF] p-[2px] shadow-[0_0_25px_rgba(123,104,238,0.6)] mb-3 group-hover:scale-110 transition-transform">
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

            {/* Interactive Ambient Floating Suggestions matching Video Frame 30 */}
            <div className="bg-[#09070F] rounded-xl p-3.5 border border-white/10 space-y-2.5">
              <div className="py-1 px-2.5 rounded-lg bg-gradient-to-r from-[#7B68EE]/20 via-[#E01E5A]/20 to-transparent border border-white/10 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-white/80 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#00D2FF] animate-spin" style={{ animationDuration: '4s' }} />
                  Gathering Data...
                </span>
                <span className="text-[9px] font-bold text-[#A78BFA]">LIVE</span>
              </div>

              {/* Clickable suggestion chips */}
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

            {/* Deep Search Progress Widget matching Video Frame 30 */}
            <div className="bg-[#09070F] rounded-xl p-3.5 border border-white/10 space-y-3">
              <div className="text-[11px] text-white/80 leading-relaxed font-mono">
                <span className="text-[#00D2FF]">Growth &amp; Acquisition: </span>
                Paid ROAS holding at 4.2x across search, up from 3.1x.
              </div>

              <div className="p-3 rounded-lg bg-gradient-to-r from-[#7B68EE]/10 to-[#00D2FF]/10 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-white/70">Reports build in progress...</span>
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
