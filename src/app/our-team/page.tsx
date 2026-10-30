"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import TeamCard from "@/components/TeamCard";

const teamMembers = [
  {
    name: "Kushwant Kumar Reddy",
    role: "Founder & Principal Engineer",
    initials: "KK",
    avatar: "/images/team-kushwant.webp",
    accent: "#E52B3B",
    accentRgb: "229, 43, 59",
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
    accent: "#E52B3B",
    accentRgb: "229, 43, 59",
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
    accent: "#E52B3B",
    accentRgb: "229, 43, 59",
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
    accent: "#E52B3B",
    accentRgb: "229, 43, 59",
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
    accent: "#E52B3B",
    accentRgb: "229, 43, 59",
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
    accent: "#E52B3B",
    accentRgb: "229, 43, 59",
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
    accent: "#E52B3B",
    accentRgb: "229, 43, 59",
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
    <main className="min-h-screen bg-transparent selection:bg-krudex-accent selection:text-white flex flex-col">
      <Navbar />

      {/* === Hero Section === */}
      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-20 bg-krudex-black/40 backdrop-blur-md relative z-10 overflow-hidden">
        {/* Ambient background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[140px] opacity-[0.08]"
            style={{ background: "#E52B3B" }}
          />
          <motion.div
            animate={{
              x: [0, -30, 40, 0],
              y: [0, 20, -40, 0],
              scale: [1, 0.8, 1.1, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[140px] opacity-[0.06]"
            style={{ background: "#E52B3B" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-krudex-border px-3.5 py-1.5 mb-10 rounded-full bg-krudex-surface/60"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_8px_#E52B3B]"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold font-mono">
                ENGINEERING CORE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight mb-8"
            >
              <span className="text-white">The engineers behind</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-krudex-muted">
                the architecture.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-krudex-muted text-lg leading-relaxed max-w-2xl"
            >
              Senior engineers and practitioners on every project. No handoffs, no junior proxies
              — the people you meet are the specialists who architect and build your product.
            </motion.p>
          </div>
        </div>
      </section>

      {/* === Team Grid === */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10">
        <div className="max-w-7xl mx-auto relative">
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
                delay: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href="/contact"
                className="relative rounded-2xl h-full min-h-[340px] border border-dashed border-krudex-border/90 bg-krudex-card/50 flex flex-col items-center justify-center gap-4 group/ghost hover:border-krudex-accent/50 hover:bg-krudex-card/80 transition-all duration-500"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-16 h-16 rounded-2xl border border-dashed border-krudex-border flex items-center justify-center group-hover/ghost:border-krudex-accent group-hover/ghost:bg-krudex-accent/10 transition-colors duration-500"
                >
                  <span className="text-2xl text-krudex-muted group-hover/ghost:text-krudex-accent transition-colors duration-500">
                    +
                  </span>
                </motion.div>
                <div className="text-center px-6">
                  <p className="text-white font-medium text-base group-hover/ghost:text-krudex-white transition-colors duration-500">
                    Join Our Engineering Team
                  </p>
                  <p className="text-krudex-muted text-xs mt-2 group-hover/ghost:text-white/80 transition-colors duration-500 leading-relaxed">
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
