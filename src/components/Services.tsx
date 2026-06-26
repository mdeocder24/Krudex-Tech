import React from 'react';
import { motion } from 'framer-motion';
import { Bot, LineChart, Network, AudioWaveform, Database } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="relative w-full py-24 px-8 md:px-16 lg:px-24 bg-[#020617] z-10">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#8b5cf6]" />
          <span className="text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold">Features</span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#8b5cf6]" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
          Accelerate your setup using <br className="hidden md:block" />
          streamlined processes.
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          All the tools you need to optimize operations, enhance productivity, and grow confidently.
          Powered by AI for intelligent expansion.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: AI Solutions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 bg-[#0f172a]/50 border border-[#8b5cf6]/20 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:border-[#8b5cf6]/50 transition-colors"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#8b5cf6]/20 blur-[50px]" />
          <div className="h-48 w-full flex items-center justify-center relative z-10 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.4)]">
              <Network className="w-8 h-8 text-white" />
            </div>
            {/* Connecting lines */}
            <div className="absolute w-full h-[1px] bg-[#8b5cf6]/30 left-0 top-1/2" />
            <div className="absolute h-full w-[1px] bg-[#8b5cf6]/30 left-1/2 top-0" />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-white mb-2">Krudex AI Solutions</h3>
            <p className="text-sm text-slate-400">AI-powered task management for streamlined and effective workflows.</p>
          </div>
        </motion.div>

        {/* Card 2: Custom Support */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 bg-[#0f172a]/50 border border-[#8b5cf6]/20 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:border-[#8b5cf6]/50 transition-colors"
        >
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#c084fc]/10 blur-[40px]" />
          <div className="h-48 w-full flex items-center justify-center relative z-10 mb-8">
            <div className="w-20 h-20 rounded-full border border-[#8b5cf6]/30 flex items-center justify-center relative">
              <div className="w-14 h-14 rounded-full bg-[#8b5cf6] flex items-center justify-center shadow-[0_0_20px_#8b5cf6]">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-700 border-2 border-[#0f172a]" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-slate-700 border-2 border-[#0f172a]" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-white mb-2">Custom Support Solutions</h3>
            <p className="text-sm text-slate-400">Many tasks are now automated, allowing your teams to work more effectively.</p>
          </div>
        </motion.div>

        {/* Card 3: Data Integration */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-1 bg-[#0f172a]/50 border border-[#0ea5e9]/20 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:border-[#0ea5e9]/50 transition-colors"
        >
          <div className="absolute top-1/2 right-0 w-32 h-32 bg-[#0ea5e9]/20 blur-[50px]" />
          <div className="h-48 w-full flex items-center justify-center relative z-10 mb-8">
            {/* Fake line chart */}
            <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
              <path d="M0 40 Q 10 30, 20 35 T 40 20 T 60 25 T 80 10 T 100 15 L 100 50 L 0 50 Z" fill="url(#gradient)" opacity="0.2" />
              <path d="M0 40 Q 10 30, 20 35 T 40 20 T 60 25 T 80 10 T 100 15" fill="none" stroke="#0ea5e9" strokeWidth="1.5" />
              <circle cx="80" cy="10" r="3" fill="#ffffff" className="shadow-[0_0_10px_#0ea5e9]" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-white mb-2">Data Integration Made Easy</h3>
            <p className="text-sm text-slate-400">Easily connect your data sources securely across multiple platforms.</p>
          </div>
        </motion.div>

        {/* Card 4: Intelligent Automation (Wide) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-2 bg-[#0f172a]/50 border border-[#8b5cf6]/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden relative group hover:border-[#8b5cf6]/50 transition-colors"
        >
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#8b5cf6]/10 blur-[60px]" />
          
          <div className="relative z-10 md:w-1/2 mb-8 md:mb-0 pr-4">
            <h3 className="text-xl font-semibold text-white mb-2">Intelligent Automation</h3>
            <p className="text-sm text-slate-400">Harnessing AI to create workflows that simplify tasks and boost overall productivity across your engineering pipeline.</p>
          </div>

          <div className="h-32 md:w-1/2 w-full flex items-center justify-center relative z-10">
            {/* Fake Audio Waveform */}
            <div className="flex items-center gap-1 w-full justify-center">
              {[10, 20, 15, 30, 25, 40, 60, 40, 25, 30, 15, 20, 10].map((h, i) => (
                <div key={i} className="w-1.5 bg-[#8b5cf6]/40 rounded-full" style={{ height: `${h}%` }} />
              ))}
              <div className="mx-4 w-12 h-12 rounded-full bg-[#8b5cf6] flex items-center justify-center shadow-[0_0_20px_#8b5cf6]">
                <AudioWaveform className="w-6 h-6 text-white" />
              </div>
              {[10, 20, 15, 30, 25, 40, 60, 40, 25, 30, 15, 20, 10].reverse().map((h, i) => (
                <div key={i} className="w-1.5 bg-[#8b5cf6]/40 rounded-full" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 5: Data Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 bg-[#0f172a]/50 border border-[#8b5cf6]/20 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:border-[#8b5cf6]/50 transition-colors"
        >
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#8b5cf6]/20 blur-[50px]" />
          
          <div className="h-32 w-full flex items-end justify-between gap-2 relative z-10 mb-8">
            {/* Fake Bar Chart */}
            {[30, 40, 20, 60, 90, 50, 70].map((h, i) => (
              <div key={i} className={`w-full rounded-t-md relative ${i === 4 ? 'bg-[#8b5cf6] shadow-[0_0_15px_#8b5cf6]' : 'bg-[#1e293b]'}`} style={{ height: `${h}%` }}>
                {i === 4 && <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white bg-slate-800 px-2 py-1 rounded">23.4k</div>}
              </div>
            ))}
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-white mb-2">Data Visualization</h3>
            <p className="text-sm text-slate-400">Effortlessly visualize and organize complex datasets for clearer insights.</p>
          </div>
        </motion.div>

      </div>
      
      {/* View all features button */}
      <div className="w-full flex justify-center mt-12">
        <button className="px-8 py-3 rounded-full bg-[#8b5cf6] text-white font-medium hover:bg-[#7c3aed] transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)]">
          Explore Features &rarr;
        </button>
      </div>

    </section>
  );
};

export default Services;
