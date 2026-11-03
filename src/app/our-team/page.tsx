
import React from "react";
import * as motion from 'framer-motion/client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";

const teamMembers = [
  {
    name: "Kushwant Kumar Reddy",
    role: "Founder & Principal Engineer",
    initials: "KK",
    accent: "#D4B483",
    accentRgb: "212, 180, 131",
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
    role: "Co-Founder",
    initials: "SL",
    accent: "#D4B483",
    accentRgb: "212, 180, 131",
    bio: "Architects scalable solutions and ensures every digital product meets rigorous standards for performance and reliability. Champion of the 'Architecture first' principle.",
    skills: ["Architecture", "Systems Integration", "React", "DevOps", "Scaling"],
    socials: [
      { type: "linkedin" as const, url: "#" },
      { type: "github" as const, url: "#" },
    ],
  },
  {
    name: "Abhinay Reddy",
    role: "Chief Technology Officer",
    initials: "AR",
    accent: "#D4B483",
    accentRgb: "212, 180, 131",
    bio: "Leads technology at Krudex: sets the technical direction, owns architecture and engineering standards, and makes sure every product is built to last.",
    skills: ["Technical Strategy", "System Architecture", "Engineering Leadership", "Cloud", "Product Delivery"],
    socials: [
      { type: "linkedin" as const, url: "#" },
    ],
  },
  {
    name: "Anil",
    role: "Marketing Lead",
    initials: "AN",
    accent: "#D4B483",
    accentRgb: "212, 180, 131",
    bio: "Leads Krudex's marketing: positioning, campaigns and brand presence, so the right customers find our products and services.",
    skills: ["Marketing Strategy", "Brand", "Campaign Planning", "Content", "Market Research"],
    socials: [
      { type: "linkedin" as const, url: "#" },
    ],
  },
  {
    name: "Allu Nanda Kishore",
    role: "Digital Marketing Head",
    initials: "AK",
    accent: "#D4B483",
    accentRgb: "212, 180, 131",
    bio: "Heads digital marketing for Krudex and its clients, running Google Ads, SEO, social and content as one system measured by leads and revenue.",
    skills: ["Google Ads", "SEO", "Social Media", "Analytics", "Performance Marketing"],
    socials: [
      { type: "linkedin" as const, url: "#" },
    ],
  },
  {
    name: "Karing Raghawendhra",
    role: "Lead AI/ML Engineer",
    initials: "KR",
    accent: "#D4B483",
    accentRgb: "212, 180, 131",
    bio: "Leads AI and machine learning work: designing and building intelligent features, from LLM integrations to custom models, that work reliably in production.",
    skills: ["Machine Learning", "LLMs", "Python", "Computer Vision", "MLOps"],
    socials: [
      { type: "linkedin" as const, url: "#" },
    ],
  },
  {
    name: "Siddharth Naidu",
    role: "Training Team Lead (Students)",
    initials: "SN",
    accent: "#D4B483",
    accentRgb: "212, 180, 131",
    bio: "Leads student training at Krudex with NovaSkill Hub, shaping programs with industry experts so students learn how the work is done in practice.",
    skills: ["Training Programs", "Mentoring", "Curriculum Design", "Student Success", "Industry Partnerships"],
    socials: [
      { type: "linkedin" as const, url: "#" },
    ],
  },
];

export default function OurTeamPage() {
  return (
    <main className="min-h-svh bg-transparent selection:bg-krudex-accent selection:text-krudex-black flex flex-col">
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
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[128px] opacity-[0.07]"
            style={{ background: "#D4B483" }}
          />
          <motion.div
            animate={{
              x: [0, -30, 40, 0],
              y: [0, 20, -40, 0],
              scale: [1, 0.8, 1.1, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[128px] opacity-[0.05]"
            style={{ background: "#D4B483" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold">
                OUR TEAM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
            >
              <span className="text-white">The people behind</span>
              <br />
              <span className="text-white/45">the work.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-krudex-muted text-lg leading-relaxed max-w-2xl"
            >
              Senior engineers on every project. No handoffs, no junior proxies
              — the people you meet are the people who build your product.
            </motion.p>
          </div>
        </div>
      </section>

      {/* === Team Grid === */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10">
        {/* Grid background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,180,131,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,180,131,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto relative">

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.initials} member={member} index={index} />
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
