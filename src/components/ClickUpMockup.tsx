"use client";

import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  LayoutGrid, 
  UserPlus, 
  HelpCircle, 
  Paperclip, 
  AtSign, 
  Smile, 
  Mic, 
  Send, 
  Plus, 
  CheckCircle2, 
  Circle,
  Calendar,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Message {
  id: number;
  sender: string;
  role: string;
  time: string;
  text: string;
  isAi: boolean;
  avatar?: string;
}

interface TaskItem {
  id: string;
  name: string;
  owner: string;
  ownerInitial: string;
  ownerColor: string;
  date: string;
  status: 'On track' | 'Ready' | 'Waiting' | 'Done';
  statusClass: string;
  progress: number;
  completed: boolean;
}

export default function ClickUpMockup() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'board' | 'artifacts'>('timeline');
  const [chatInput, setChatInput] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const messageCounterRef = useRef(10);

  // Dynamic tasks that user can toggle
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: 'task-1',
      name: 'Full-Stack Next.js 16 Edge Architecture',
      owner: 'Kushwant',
      ownerInitial: 'K',
      ownerColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      date: 'Nov 5',
      status: 'On track',
      statusClass: 'status-pill-blue',
      progress: 90,
      completed: false,
    },
    {
      id: 'task-2',
      name: 'Design System Tokens & Figma Polish',
      owner: 'Sneha',
      ownerInitial: 'S',
      ownerColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      date: 'Nov 6',
      status: 'Ready',
      statusClass: 'status-pill-green',
      progress: 100,
      completed: true,
    },
    {
      id: 'task-3',
      name: 'Google Ads ROAS & GA4 Telemetry Funnel',
      owner: 'Priya',
      ownerInitial: 'P',
      ownerColor: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      date: 'Nov 8',
      status: 'Waiting',
      statusClass: 'status-pill-orange',
      progress: 65,
      completed: false,
    },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'Priya',
      role: 'Lead Frontend',
      time: '9:15 am',
      text: "Let's line up the remaining work for Nov 12. @Brain, add Jake's two bugs to the list.",
      isAi: false,
    },
    {
      id: 2,
      sender: 'Brain',
      role: 'Krudex AI Agent',
      time: '9:15 am',
      text: 'Created "Fix the last two bugs" for Jake, due Nov 5.',
      isAi: true,
    },
    {
      id: 3,
      sender: 'PM Agent',
      role: 'Automated Sprints',
      time: '9:16 am',
      text: 'Board is current. Three tasks moved forward.',
      isAi: false,
    },
    {
      id: 4,
      sender: 'Jake',
      role: 'Senior Architect',
      time: '9:17 am',
      text: '@Brain, can you make us a shareable launch plan we can track together?',
      isAi: false,
    },
    {
      id: 5,
      sender: 'Brain',
      role: 'Krudex AI Agent',
      time: '9:17 am',
      text: 'The launch plan is ready. All 3 verticals synced.',
      isAi: true,
    },
  ]);

  // Toggle task completion
  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextState = !t.completed;
          return {
            ...t,
            completed: nextState,
            status: nextState ? 'Done' : 'On track',
            statusClass: nextState ? 'status-pill-green' : 'status-pill-blue',
          };
        }
        return t;
      })
    );
  };

  // Quick Prompt chips
  const quickPrompts = [
    { label: '⚡ Sprint status', query: 'What is our current sprint velocity and release status?' },
    { label: '📊 Lighthouse score', query: 'Audit our performance score and edge latency budget.' },
    { label: '🎯 Google Ads ROAS', query: 'Give me the current ROAS on our search campaigns.' },
  ];

  const sendQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    messageCounterRef.current += 1;
    const userMsgId = messageCounterRef.current;
    const userMsg: Message = {
      id: userMsgId,
      sender: 'You',
      role: 'Product Lead',
      time: 'Just now',
      text: queryText,
      isAi: false,
    };

    setMessages((prev) => [...prev, userMsg]);
    setChatInput('');
    setIsAiTyping(true);

    setTimeout(() => {
      let replyText = `Verified: All tasks on schedule. CI/CD test gates passed with 0 regression errors.`;
      if (queryText.toLowerCase().includes('lighthouse')) {
        replyText = `Audit complete: Performance score is 99/100, FCP is 0.4s, and LCP is 0.8s on AWS Global Edge.`;
      } else if (queryText.toLowerCase().includes('roas')) {
        replyText = `Current Google Ads ROAS is 4.2x across Search & Performance Max funnels with GA4 attribution verified.`;
      } else if (queryText.toLowerCase().includes('sprint')) {
        replyText = `Sprint 2026.04 is 88% complete. Architecture frozen, code handover scheduled for Friday.`;
      }

      messageCounterRef.current += 1;
      const aiReplyId = messageCounterRef.current;
      const aiReply: Message = {
        id: aiReplyId,
        sender: 'Brain',
        role: 'Krudex AI Agent',
        time: 'Just now',
        text: replyText,
        isAi: true,
      };
      setIsAiTyping(false);
      setMessages((prev) => [...prev, aiReply]);
    }, 600);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendQuery(chatInput);
  };

  return (
    <div className="w-full max-w-6xl mx-auto clickup-mockup-frame overflow-hidden text-left">
      {/* Top Window Chrome */}
      <div className="bg-[#120F1F] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]/80 hover:bg-[#EF4444] transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80 hover:bg-[#F59E0B] transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]/80 hover:bg-[#10B981] transition-colors cursor-pointer" />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 ml-3 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-white/50">
            <span className="text-white/30">https://</span>
            <span className="text-white/80 font-medium">app.krudex.com</span>
            <span className="text-[#A78BFA]">/workspace/atlas-launch</span>
          </div>
        </div>

        {/* View Switcher Tabs inside Mockup */}
        <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/5">
          <button
            type="button"
            onClick={() => setActiveTab('timeline')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              activeTab === 'timeline'
                ? 'bg-gradient-to-r from-[#7B68EE] to-[#E01E5A] text-white shadow-sm'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Timeline
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('board')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              activeTab === 'board'
                ? 'bg-gradient-to-r from-[#7B68EE] to-[#E01E5A] text-white shadow-sm'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Workstreams
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('artifacts')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              activeTab === 'artifacts'
                ? 'bg-gradient-to-r from-[#7B68EE] to-[#E01E5A] text-white shadow-sm'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Decisions
          </button>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#7B68EE]/20 text-[#A78BFA] border border-[#7B68EE]/40 flex items-center gap-1 shadow-[0_0_12px_rgba(123,104,238,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
            Brain 4.0 Active
          </span>
        </div>
      </div>

      {/* Main Mockup Workspace Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px] bg-[#0E0B19]">
        {/* =========================================================================
            LEFT COLUMN: Mini App Sidebar
            ========================================================================= */}
        <div className="hidden sm:flex lg:col-span-1 bg-[#09070F] border-r border-white/5 flex-col items-center justify-between py-4 px-2">
          <div className="flex flex-col items-center gap-4">
            {/* Brain Sparkle Launcher */}
            <div className="relative group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7B68EE] via-[#E01E5A] to-[#00D2FF] p-[1.5px] shadow-[0_0_15px_rgba(123,104,238,0.5)] transition-transform hover:scale-110">
                <div className="w-full h-full bg-[#0E0B19] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white animate-pulse" />
                </div>
              </div>
              <span className="text-[9px] font-medium text-white/70 mt-1 block text-center">Brain</span>
            </div>

            {/* Apps Launcher */}
            <button
              type="button"
              className="flex flex-col items-center gap-1 text-white/40 hover:text-white hover:scale-105 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                <LayoutGrid className="w-4 h-4" />
              </div>
              <span className="text-[9px]">Apps</span>
            </button>

            {/* Layers */}
            <button
              type="button"
              className="flex flex-col items-center gap-1 text-white/40 hover:text-white hover:scale-105 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-[9px]">Views</span>
            </button>
          </div>

          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              aria-label="Invite collaborator"
              className="text-white/40 hover:text-white hover:scale-105 transition-all flex flex-col items-center gap-1"
            >
              <UserPlus className="w-4 h-4" />
              <span className="text-[9px]">Invite</span>
            </button>
            <button
              type="button"
              aria-label="Workspace help"
              className="text-white/40 hover:text-white transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            CENTER COLUMN: Interactive Timeline & Workstreams (6 Cols)
            ========================================================================= */}
        <div className="lg:col-span-6 p-4 sm:p-6 border-r border-white/5 flex flex-col justify-between gap-5 relative overflow-hidden bg-[#0D0A18]/70">
          {/* Subtle Ambient Artifact Glow in Center (ClickUp Video Tribute) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 pointer-events-none opacity-20 blur-3xl bg-gradient-to-tr from-[#7B68EE] via-[#E01E5A] to-[#00D2FF]" />

          {/* Section A: Timeline & Gantt with Hover Details */}
          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between pb-1 border-b border-white/5">
              <span className="text-xs font-bold text-white/80 tracking-wider font-mono uppercase flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#7B68EE]" />
                <span>TIMELINE OVERVIEW</span>
              </span>
              <div className="flex items-center gap-5 text-[11px] font-mono text-white/50">
                <span className="hover:text-white transition-colors cursor-default">Oct 28</span>
                <span className="hover:text-white transition-colors cursor-default">Nov 4</span>
                <span className="text-[#00D2FF] font-bold bg-[#00D2FF]/10 px-1.5 py-0.5 rounded border border-[#00D2FF]/30">Nov 11</span>
                <span className="hover:text-white transition-colors cursor-default">Nov 18</span>
              </div>
            </div>

            {/* Gantt Interactive Progress Bars */}
            <div className="space-y-3 pt-1">
              {tasks.map((task) => (
                <div key={task.id} className="group cursor-pointer">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => toggleTask(task.id)}
                        className="text-white/40 hover:text-[#10B981] transition-colors"
                        title={task.completed ? "Mark incomplete" : "Mark done"}
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                        ) : (
                          <Circle className="w-4 h-4 hover:scale-110 transition-transform" />
                        )}
                      </button>
                      <span
                        className={`font-medium transition-all ${
                          task.completed ? 'line-through text-white/40' : 'text-white/90 group-hover:text-white'
                        }`}
                      >
                        {task.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-white/50 group-hover:text-[#00D2FF] transition-colors">
                      {task.progress}%
                    </span>
                  </div>

                  <div className="h-3 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5 group-hover:border-[#7B68EE]/40 transition-colors">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${task.progress}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        task.completed
                          ? 'bg-gradient-to-r from-[#10B981] to-[#34D399]'
                          : 'bg-gradient-to-r from-[#7B68EE] via-[#E01E5A] to-[#00D2FF]'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section B: Workstreams Cards with Real Status Pills */}
          <div className="space-y-2.5 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white/80 tracking-wider font-mono uppercase">
                ACTIVE WORKSTREAMS
              </span>
              <span className="text-[10px] text-white/40 font-mono">CLICK TO TOGGLE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer select-none ${
                    task.completed
                      ? 'bg-[#10B981]/5 border-[#10B981]/30 hover:border-[#10B981]/50'
                      : 'bg-white/[0.03] border-white/10 hover:border-[#7B68EE]/40 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-white truncate max-w-[80px]">
                      {task.owner}
                    </span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${task.statusClass}`}>
                      {task.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/60">Target: {task.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section C: Live Dynamic Artifact Notice (Pulsing exactly like user's video) */}
          <div className="py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-[#7B68EE]/15 via-[#E01E5A]/15 to-[#00D2FF]/15 border border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="font-mono text-[10px] tracking-widest text-white/80 uppercase flex items-center gap-2 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] animate-ping" />
              CREATING INTERACTIVE ARTIFACT
            </span>
            <span className="text-[10px] font-semibold text-[#A78BFA] bg-[#7B68EE]/20 px-2 py-0.5 rounded border border-[#7B68EE]/40">
              SOW #2026.04
            </span>
          </div>

          {/* Section D: Key Decisions Log */}
          <div className="space-y-2 relative z-10">
            <span className="text-xs font-bold text-white/80 tracking-wider font-mono uppercase block">
              SYNCHRONIZED DECISIONS
            </span>
            <div className="space-y-1.5 text-xs text-white/70">
              <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors">
                <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#7B68EE] to-[#00D2FF] flex items-center justify-center text-[9px] text-white font-bold shrink-0">
                  ✦
                </span>
                <span><strong className="text-white">Brain:</strong> Launch set for Nov 12, from planning notes.</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors">
                <div className="w-4 h-4 rounded-full bg-pink-500/30 text-pink-300 flex items-center justify-center text-[9px] font-bold shrink-0">
                  P
                </div>
                <span><strong className="text-white">Priya:</strong> PM Agent owns announcement, Sarah reviews.</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors">
                <div className="w-4 h-4 rounded-full bg-blue-500/30 text-blue-300 flex items-center justify-center text-[9px] font-bold shrink-0">
                  J
                </div>
                <span><strong className="text-white">Jake:</strong> Two remaining bugs ship before the freeze.</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: Live Collaboration & Brain AI Chat Stream (5 Cols)
            ========================================================================= */}
        <div className="lg:col-span-5 p-4 sm:p-5 flex flex-col justify-between bg-[#0F0C1B]">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#7B68EE] to-[#E01E5A] flex items-center justify-center text-white text-[12px] shadow-[0_0_12px_rgba(123,104,238,0.5)]">
                ✦
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  # atlas-launch
                </h4>
                <p className="text-[10px] text-krudex-muted">4 members · Krudex Brain enabled</p>
              </div>
            </div>
            <span className="text-[9px] font-mono text-[#00D2FF] bg-[#00D2FF]/10 px-2 py-0.5 rounded-full border border-[#00D2FF]/20 flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
              LIVE
            </span>
          </div>

          {/* Chat Messages Stream */}
          <div className="space-y-3 max-h-[290px] overflow-y-auto pr-1">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-start gap-2.5 text-xs group">
                {msg.isAi ? (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#7B68EE] via-[#E01E5A] to-[#00D2FF] flex items-center justify-center text-white font-bold text-[10px] shrink-0 shadow-[0_0_10px_rgba(123,104,238,0.5)]">
                    ✦
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-white/10 text-white font-bold text-[10px] flex items-center justify-center shrink-0 border border-white/20">
                    {msg.sender.charAt(0)}
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`font-semibold ${msg.isAi ? 'text-[#A78BFA]' : 'text-white'}`}>
                      {msg.sender}
                    </span>
                    <span className="text-[10px] text-white/40">{msg.time}</span>
                  </div>
                  <p className="text-white/80 leading-relaxed text-[12px]">
                    {msg.text.includes('@Brain') ? (
                      <>
                        {msg.text.split('@Brain')[0]}
                        <span className="text-[#A78BFA] font-medium bg-[#7B68EE]/20 px-1 py-0.5 rounded border border-[#7B68EE]/30">
                          @Brain
                        </span>
                        {msg.text.split('@Brain')[1]}
                      </>
                    ) : (
                      msg.text
                    )}
                  </p>
                </div>
              </div>
            ))}

            {isAiTyping && (
              <div className="flex items-center gap-2 text-xs text-krudex-muted pt-1">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#7B68EE] to-[#00D2FF] flex items-center justify-center text-white text-[9px] animate-pulse">
                  ✦
                </div>
                <span className="text-[11px] font-mono text-[#A78BFA]">Brain is synthesizing...</span>
              </div>
            )}
          </div>

          {/* Quick Prompt Chips */}
          <div className="mt-3 pt-2 border-t border-white/5">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
              {quickPrompts.map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => sendQuery(chip.query)}
                  className="px-2 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#7B68EE]/40 text-[10px] text-white/70 hover:text-white transition-all whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Interactive Chat Form Input */}
            <form onSubmit={handleFormSubmit} className="mt-1.5">
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2 focus-within:border-[#7B68EE]/70 focus-within:bg-white/[0.06] transition-all shadow-inner">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask Brain or message atlas-launch..."
                  className="w-full bg-transparent text-xs text-white placeholder:text-white/30 focus:outline-none px-1 py-1"
                />
                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-white/40">
                  <div className="flex items-center gap-2">
                    <button type="button" aria-label="Add attachment" className="hover:text-white transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                    <button type="button" aria-label="Attach file" className="hover:text-white transition-colors">
                      <Paperclip className="w-3.5 h-3.5" />
                    </button>
                    <button type="button" aria-label="Mention teammate" className="hover:text-white transition-colors">
                      <AtSign className="w-3.5 h-3.5" />
                    </button>
                    <button type="button" aria-label="Insert emoji" className="hover:text-white transition-colors">
                      <Smile className="w-3.5 h-3.5" />
                    </button>
                    <button type="button" aria-label="Voice input" className="hover:text-white transition-colors">
                      <Mic className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <button
                    type="submit"
                    aria-label="Send message"
                    className="w-6 h-6 rounded-lg bg-gradient-to-r from-[#7B68EE] to-[#E01E5A] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-md shadow-[#7B68EE]/40"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
