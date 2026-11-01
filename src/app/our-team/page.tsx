"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import TeamCard from "@/components/TeamCard";
import { Sparkles } from "lucide-react";

const teamMembers = [
  {
    name: "Kushwant Kumar Reddy",
    role: "Founder & Principal Engineer",
    initials: "KK",
    avatar: "/images/team-kushwant.webp",
    accent: "#7B68EE",
    accentRgb: "123, 104, 238",
    bio: "Founding engineer leading every client engagement end-to-end — from technical scoping through production deployment. Specializes in full-stack web engineering, computer vision, and ML systems.",
    skills: ["Next.js", "FastAPI", "TensorFlow", "Computer Vision", "System Design"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "github" as const, url: "#" },
      { type: "twitter" as const, url: "#" },
    ],
  },
  {
    name: "Sri Likhin Prasad",
    role: "Co-Founder & Systems Architect",
    initials: "SL",
    avatar: "/images/team-likhin.webp",
    accent: "#00D2FF",
    accentRgb: "0, 210, 255",
    bio: "Architects scalable solutions and ensures every digital product meets rigorous standards for performance and reliability. Champion of the 'Architecture first' principle.",
    skills: ["Architecture", "Systems Integration", "React", "DevOps", "Scaling"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "github" as const, url: "#" },
    ],
  },
  {
    name: "Aarav Mehta",
    role: "Lead AI/ML Engineer",
    initials: "AM",
    avatar: "/images/team-aarav.webp",
    accent: "#E01E5A",
    accentRgb: "224, 30, 90",
    bio: "Builds production-grade machine learning pipelines and intelligent systems. Deep expertise in NLP, recommendation engines, and real-time inference at scale.",
    skills: ["PyTorch", "MLOps", "NLP", "LLMs", "Data Engineering"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "github" as const, url: "#" },
      { type: "twitter" as const, url: "#" },
    ],
  },
  {
    name: "Priya Venkatesh",
    role: "Senior Frontend Engineer",
    initials: "PV",
    avatar: "/images/team-priya.webp",
    accent: "#7B68EE",
    accentRgb: "123, 104, 238",
    bio: "Crafts pixel-perfect, high-performance interfaces with meticulous attention to animation, accessibility, and cross-browser consistency. Design-engineering hybrid.",
    skills: ["React", "TypeScript", "Framer Motion", "WebGL", "CSS Architecture"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "github" as const, url: "#" },
      { type: "dribbble" as const, url: "#" },
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
    bio: "Translates complex product requirements into intuitive, beautiful interfaces. Bridges the gap between design vision and engineering reality with systematic design systems.",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Brand"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "dribbble" as const, url: "#" },
      { type: "behance" as const, url: "#" },
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
      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-20 relative z-10 overflow-hidden">
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
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[140px] opacity-15 bg-[#00D2FF]"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full bg-[#7B68EE]/10 border border-[#7B68EE]/30 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
              <span className="text-xs uppercase tracking-wider text-[#A78BFA] font-semibold font-mono">
                ENGINEERING CORE
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
              className="text-krudex-muted text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              Senior engineers and practitioners on every project. No handoffs, no junior proxies
              — the people you meet are the specialists who architect and build your product.
            </motion.p>
          </div>
        </div>
      </section>

      {/* === Team Grid === */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto relative">
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.initials} member={member} index={index} />
            ))}

            {/* "You?" ghost card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href="/contact"
                className="relative rounded-2xl h-full min-h-[340px] border border-dashed border-white/15 bg-white/[0.02] flex flex-col items-center justify-center gap-4 group/ghost hover:border-[#7B68EE]/50 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl border border-dashed border-white/20 flex items-center justify-center group-hover/ghost:border-[#7B68EE] group-hover/ghost:bg-[#7B68EE]/10 transition-all duration-300">
                  <span className="text-2xl text-krudex-muted group-hover/ghost:text-[#A78BFA] transition-colors">
                    +
                  </span>
                </div>
                <div className="text-center px-6">
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
