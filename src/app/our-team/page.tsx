"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import TeamCard, { TeamMember } from "@/components/TeamCard";
import { Sparkles, GraduationCap, ArrowRight, CheckCircle2, ShieldCheck, Code2 } from "lucide-react";

const leadershipMembers: TeamMember[] = [
  {
    name: "Kushwant Kumar Reddy",
    role: "Founder & Principal Engineer",
    initials: "KK",
    avatar: "/images/team-kushwant.webp",
    accent: "#7B68EE",
    accentRgb: "123, 104, 238",
    badge: "FOUNDER & PARTNER",
    isPartner: true,
    bio: "Founding partner leading client engineering engagements end-to-end — from technical specifications through production deployment. Specializes in Next.js 16 edge architecture, computer vision, and high-throughput systems.",
    skills: ["Next.js 16", "TypeScript", "FastAPI", "System Architecture", "Edge Delivery"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "github" as const, url: "#" },
    ],
  },
  {
    name: "Abhinay Musku",
    role: "Partner",
    initials: "AM",
    accent: "#E01E5A",
    accentRgb: "224, 30, 90",
    badge: "PARTNER",
    isPartner: true,
    bio: "Partner at Krudex Technologies leading software engineering initiatives and student training programs in collaboration with NovaSkill Hub. Directs architectural standards, practitioner-led student labs, and enterprise technology delivery.",
    skills: ["System Architecture", "Next.js", "Student Training", "NovaSkill Hub Collab", "Cloud Infrastructure"],
    socials: [
      { type: "linkedin" as const, url: "https://in.linkedin.com/in/abhinay-musku" },
      { type: "github" as const, url: "https://github.com/NOiD-777" },
    ],
  },
  {
    name: "Sri Likhin Prasad",
    role: "Co-Founder & Systems Architect",
    initials: "SL",
    avatar: "/images/team-likhin.webp",
    accent: "#00D2FF",
    accentRgb: "0, 210, 255",
    badge: "CO-FOUNDER",
    isPartner: true,
    bio: "Architects scalable solutions and ensures every digital product meets rigorous standards for performance, security, and reliability. Champion of the 'Architecture first' philosophy.",
    skills: ["Cloud Architecture", "DevOps", "Systems Integration", "Observability", "PostgreSQL"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "github" as const, url: "#" },
    ],
  },
];

const engineeringMembers: TeamMember[] = [
  {
    name: "Aarav Mehta",
    role: "Lead AI/ML Engineer",
    initials: "AM",
    avatar: "/images/team-aarav.webp",
    accent: "#E01E5A",
    accentRgb: "224, 30, 90",
    bio: "Builds production-grade machine learning pipelines and intelligent systems. Deep expertise in NLP, recommendation engines, and real-time inference at scale.",
    skills: ["PyTorch", "MLOps", "NLP", "LLMs", "Data Pipelines"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "github" as const, url: "#" },
    ],
  },
  {
    name: "Priya Venkatesh",
    role: "Senior Frontend Engineer",
    initials: "PV",
    avatar: "/images/team-priya.webp",
    accent: "#7B68EE",
    accentRgb: "123, 104, 238",
    bio: "Crafts pixel-perfect, high-performance interfaces with meticulous attention to animation, accessibility, and sub-100ms interaction latency. Design-engineering hybrid.",
    skills: ["React", "TypeScript", "Framer Motion", "WebGL", "CSS Architecture"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "github" as const, url: "#" },
    ],
  },
  {
    name: "Rohan Iyer",
    role: "Backend & Infrastructure",
    initials: "RI",
    avatar: "/images/team-rohan.webp",
    accent: "#10B981",
    accentRgb: "16, 185, 129",
    bio: "Designs resilient backend architectures and cloud infrastructure. Obsessed with zero-downtime deployments, observability, and sub-100ms API responses.",
    skills: ["Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "github" as const, url: "#" },
    ],
  },
  {
    name: "Sneha Reddy",
    role: "UI/UX Design Lead",
    initials: "SR",
    avatar: "/images/team-sneha.webp",
    accent: "#F59E0B",
    accentRgb: "245, 158, 11",
    bio: "Translates complex product requirements into intuitive, beautiful interfaces. Bridges the gap between design vision and engineering reality with systematic design tokens.",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Brand"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "dribbble" as const, url: "#" },
    ],
  },
  {
    name: "Vikram Nair",
    role: "Mobile & Cross-Platform",
    initials: "VN",
    avatar: "/images/team-vikram.webp",
    accent: "#00D2FF",
    accentRgb: "0, 210, 255",
    bio: "Ships cross-platform mobile experiences that feel truly native. Expert in performance optimization, offline-first architectures, and smooth 60fps animations.",
    skills: ["React Native", "Swift", "Kotlin", "Firebase", "App Performance"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "github" as const, url: "#" },
    ],
  },
];

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-[#7B68EE]/30 selection:text-white flex flex-col">
      <Navbar />

      {/* === Hero Section === */}
      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-16 relative z-10 overflow-hidden">
        {/* Ambient background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[140px] opacity-20 bg-[#7B68EE]"
          />
          <motion.div
            animate={{
              x: [0, -30, 40, 0],
              y: [0, 20, -40, 0],
              scale: [1, 0.8, 1.1, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[140px] opacity-15 bg-[#E01E5A]"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full bg-[#7B68EE]/10 border border-[#7B68EE]/30 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
              <span className="text-xs uppercase tracking-wider text-[#A78BFA] font-semibold font-mono">
                PRACTITIONERS &amp; PARTNERS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white leading-[1.08] tracking-tight mb-6"
            >
              The engineers behind <br />
              <span className="clickup-gradient-text">
                the architecture.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-krudex-muted text-base sm:text-lg leading-relaxed max-w-3xl"
            >
              Senior engineers and active practitioners on every project. Led by partners Kushwant Kumar Reddy and Abhinay Musku, our team builds production SaaS platforms, scales customer acquisition, and trains ambitious students in collaboration with NovaSkill Hub.
            </motion.p>
          </div>
        </div>
      </section>

      {/* === Leadership & Partners Tier === */}
      <section className="px-6 md:px-16 lg:px-24 py-16 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#7B68EE]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/90">
                Studio Leadership &amp; Partners
              </span>
            </div>
            <span className="text-[11px] font-mono text-white/40">
              EXECUTIVE &amp; ARCHITECTURAL DIRECTORS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* === NovaSkill Hub Collaboration & Student Training Spotlight === */}
      <section className="px-6 md:px-16 lg:px-24 py-16 border-t border-white/5 relative z-10 bg-[#07050E]">
        <div className="max-w-6xl mx-auto">
          <div className="clickup-card p-8 sm:p-12 rounded-3xl border border-[#7B68EE]/30 relative overflow-hidden shadow-2xl bg-gradient-to-r from-[#120E22]/90 via-[#0A0714]/95 to-[#0E0B19]/90">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#10B981]/15 via-[#00D2FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-mono font-bold text-[#6EE7B7] uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-[#10B981]" />
                  <span>COLLABORATOR · NOVASKILL HUB</span>
                </div>

                <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight leading-[1.15]">
                  We provide software training to students with <span className="clickup-gradient-text">NovaSkill Hub as collaborator.</span>
                </h2>

                <p className="text-krudex-muted text-sm sm:text-base leading-relaxed">
                  Led by partner Abhinay Musku alongside our senior engineers, Krudex bridges the gap between college curricula and high-performance industry demands. Students learn by shipping code to production repositories, participating in real PR reviews, and solving enterprise system design challenges.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xl font-heading font-black text-white">500+</div>
                    <div className="text-[11px] font-mono text-white/50 uppercase mt-0.5">Students Mentored</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xl font-heading font-black text-[#00D2FF]">100%</div>
                    <div className="text-[11px] font-mono text-white/50 uppercase mt-0.5">Production Codebases</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xl font-heading font-black text-[#10B981]">Accredited</div>
                    <div className="text-[11px] font-mono text-white/50 uppercase mt-0.5">NovaSkill Certification</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end">
                <div className="w-full max-w-sm rounded-2xl bg-white/[0.02] border border-white/10 p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-white/80">
                    <Code2 className="w-4 h-4 text-[#A78BFA]" />
                    <span>Practitioner Mentorship SLA</span>
                  </div>
                  
                  <div className="space-y-2 text-xs text-krudex-muted">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>Direct 1:15 mentor ratio with active engineers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>Full-stack Next.js, FastAPI &amp; Cloud Labs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>Direct hiring pipelines to tech partners</span>
                    </div>
                  </div>

                  <Link
                    href="/training"
                    className="clickup-btn-primary w-full py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 group mt-2"
                  >
                    <span>Explore Academy Tracks</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Specialist Engineering & Mentorship Team === */}
      <section className="px-6 md:px-16 lg:px-24 py-16 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <Code2 className="w-4 h-4 text-[#00D2FF]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/90">
                Specialist Engineering &amp; Mentorship Team
              </span>
            </div>
            <span className="text-[11px] font-mono text-white/40">
              PRODUCTION DEVELOPERS &amp; LAB MENTORS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index + leadershipMembers.length} />
            ))}

            {/* "Join the Team" Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
            >
              <Link
                href="/contact"
                className="relative rounded-2xl h-full min-h-[340px] border border-dashed border-white/15 bg-white/[0.02] flex flex-col items-center justify-center gap-4 group/ghost hover:border-[#7B68EE]/50 hover:bg-white/[0.04] transition-all duration-300 p-6"
              >
                <div className="w-16 h-16 rounded-2xl border border-dashed border-white/20 flex items-center justify-center group-hover/ghost:border-[#7B68EE] group-hover/ghost:bg-[#7B68EE]/10 transition-all duration-300">
                  <span className="text-2xl text-krudex-muted group-hover/ghost:text-[#A78BFA] transition-colors">
                    +
                  </span>
                </div>
                <div className="text-center px-4">
                  <p className="text-white font-heading font-bold text-lg group-hover/ghost:text-[#A78BFA] transition-colors">
                    Join Our Engineering Team
                  </p>
                  <p className="text-krudex-muted text-xs mt-2 group-hover/ghost:text-white/80 transition-colors leading-relaxed">
                    We&apos;re always looking for outstanding engineers and mentors — get in touch.
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
