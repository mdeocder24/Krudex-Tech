import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-32 pb-20 px-8 overflow-hidden z-10">
      
      {/* The Glowing Eclipse Arc at the top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[100%] h-[500px] rounded-[100%] border-t-[3px] border-[#8b5cf6]/80 bg-gradient-to-b from-[#8b5cf6]/20 to-transparent blur-[2px] opacity-70 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] md:w-[80%] h-[400px] rounded-[100%] border-t-[2px] border-[#0ea5e9]/60 bg-gradient-to-b from-[#0ea5e9]/10 to-transparent blur-[4px] opacity-90 pointer-events-none" />

      {/* Small badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12 mb-6 px-4 py-1.5 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 backdrop-blur-md flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-[#0ea5e9] shadow-[0_0_8px_#0ea5e9] animate-pulse" />
        <span className="text-xs text-[#e2e8f0] font-medium tracking-wide">Optimize Your Workflow</span>
      </motion.div>

      {/* Centered Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-4xl text-center flex flex-col items-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Elevate Your Business Using <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2e8f0] via-[#8b5cf6] to-[#0ea5e9]">
            AI-Driven Automation
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light mb-10">
          An innovative software platform that simplifies your tasks, enhances efficiency, and helps your business grow seamlessly.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            href="#hire-us"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] text-white font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all"
          >
            Start Free Trial &rarr;
          </Link>
          <Link 
            href="#demo"
            className="px-8 py-3 rounded-full border border-slate-700 bg-slate-900/50 text-white font-medium hover:bg-slate-800 transition-all backdrop-blur-md"
          >
            Book a Demo &rarr;
          </Link>
        </div>
      </motion.div>

      {/* Elevated Glass Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-20 w-full max-w-5xl relative z-20"
      >
        {/* Glow behind the dashboard */}
        <div className="absolute inset-0 bg-[#8b5cf6]/20 blur-[100px] rounded-full" />
        
        <div className="relative w-full aspect-[16/9] rounded-2xl border border-slate-700/50 bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
          {/* Dashboard Header */}
          <div className="w-full h-12 border-b border-slate-700/50 flex items-center px-4 justify-between bg-slate-900/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex bg-slate-800/50 px-3 py-1 rounded-md border border-slate-700/50">
              <span className="text-xs text-slate-400">🔍 Search bar</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-slate-700" />
              <span className="text-sm text-slate-300">Hi David!</span>
            </div>
          </div>
          
          {/* Dashboard Body Mockup */}
          <div className="flex-1 p-8 flex gap-8">
            {/* Left Column (Chart) */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold text-white mb-6">My Dashboard</h3>
              <div className="flex gap-2 mb-6">
                <div className="px-3 py-1 rounded-full bg-[#8b5cf6] text-xs text-white">All</div>
                <div className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-400">Withdrawal</div>
                <div className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-400">Savings</div>
              </div>
              <div className="flex-1 bg-slate-800/30 rounded-xl border border-slate-700/30 p-6 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-[60%] flex items-end justify-between px-4 gap-2">
                  {/* Fake Bar Chart */}
                  {[30, 50, 40, 80, 60, 45, 70].map((h, i) => (
                    <div key={i} className="w-full bg-slate-700/50 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                      {i === 3 && (
                         <div className="absolute inset-0 bg-gradient-to-t from-[#8b5cf6] to-[#c4b5fd] rounded-t-sm shadow-[0_0_15px_#8b5cf6]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column (Stats) */}
            <div className="w-1/3 flex flex-col gap-6">
              <div className="w-full h-32 bg-gradient-to-br from-[#8b5cf6]/20 to-transparent rounded-xl border border-[#8b5cf6]/30 p-6 flex flex-col justify-center">
                <span className="text-sm text-slate-400 mb-1">Revenue Flow</span>
                <span className="text-3xl font-bold text-white">$456000</span>
              </div>
              <div className="flex-1 bg-slate-800/30 rounded-xl border border-slate-700/30 p-6">
                <span className="text-sm text-slate-400 mb-4 block">Transactions</span>
                <div className="flex flex-col gap-3">
                  <div className="w-full h-8 bg-slate-700/30 rounded-md" />
                  <div className="w-full h-8 bg-slate-700/30 rounded-md" />
                  <div className="w-full h-8 bg-slate-700/30 rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
