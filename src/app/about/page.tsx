"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  Award
} from 'lucide-react';

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const partners = [
  {
    name: "Kushwant Kumar Reddy",
    role: "Founder & Principal Engineer",
    initials: "KK",
    badge: "FOUNDER & PARTNER",
    bio: "Directs client engineering engagements end-to-end. Specializes in Next.js 16 edge architecture, computer vision, and high-throughput web applications with audited sub-second load times.",
    skills: ["Next.js 16", "TypeScript", "FastAPI", "System Architecture", "Edge Delivery"],
    socials: [
      { name: "LinkedIn", url: "#", icon: LinkedinIcon },
      { name: "GitHub", url: "#", icon: GithubIcon }
    ]
  },
  {
    name: "Abhinay Musku",
    role: "Partner",
    initials: "AM",
    badge: "PARTNER",
    bio: "Partner at Krudex Technologies leading software engineering initiatives and student training programs in collaboration with NovaSkill Hub. Oversees architectural standards, student lab mentorship, and enterprise delivery.",
    skills: ["System Architecture", "Next.js", "Student Training", "NovaSkill Hub Collab", "Cloud Infrastructure"],
    socials: [
      { name: "LinkedIn", url: "https://in.linkedin.com/in/abhinay-musku", icon: LinkedinIcon },
      { name: "GitHub", url: "https://github.com/NOiD-777", icon: GithubIcon }
    ]
  }
];

const timelineData = [
  {
    year: "2022",
    title: "Foundations & Core Engineering",
    text: "Initial engineering practice established in Hyderabad — delivering full-stack Next.js, React, and Python platforms."
  },
  {
    year: "2023",
    title: "Design Systems & Performance Labs",
    text: "Expanded into high-converting UI/UX design tokens and scalable backends. First machine learning & computer vision integrations deployed."
  },
  {
    year: "2024",
    title: "Scaled Client Platforms & High-Profile Systems",
    text: "TEDx MLRIT platform delivered. Enterprise manufacturing modernization completed. Client roster exceeds 20 major engagements."
  },
  {
    year: "2025",
    title: "NovaSkill Hub Strategic Collaboration",
    text: "Formed strategic collaboration with NovaSkill Hub to provide industry-grade software training to engineering students, led directly by practicing engineers."
  },
  {
    year: "2026",
    title: "Official Incorporation & Leadership Partnership",
    text: "Krudex Technologies officially incorporated in Telangana, India, under the leadership of partners Kushwant Kumar Reddy and Abhinay Musku."
  }
];

const principlesData = [
  {
    num: "01",
    title: "Architecture first",
    text: "We design systems before writing code. Every project begins with an unambiguous technical specification that both parties agree on — so scope is clear before a single sprint starts."
  },
  {
    num: "02",
    title: "Practitioner-led delivery & training",
    text: "No bait-and-switch. The engineers who scope client platforms are the specialists who build them, and the same practitioners train students alongside collaborator NovaSkill Hub."
  },
  {
    num: "03",
    title: "Measurable outcomes",
    text: "Every engagement has defined success criteria — 99 Lighthouse scores, sub-200ms latency budgets, and 4.2x ROAS attribution. If we cannot measure it, we will not promise it."
  },
  {
    num: "04",
    title: "Production quality & full IP transfer",
    text: "We build as if we are maintaining the system ourselves for three years. 100% typed codebases, documented APIs, zero vendor lock-in, and full source code handover."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-[#7B68EE]/30 selection:text-white flex flex-col">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-20 md:pb-28 relative z-10 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-[#7B68EE]/20 via-[#E01E5A]/15 to-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7B68EE]/10 border border-[#7B68EE]/30 mb-8 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
                <span className="text-xs uppercase tracking-wider text-[#A78BFA] font-semibold font-mono">
                  ABOUT KRUDEX TECHNOLOGIES
                </span>
              </div>
              <h1 className="font-heading font-black text-4xl sm:text-6xl text-white leading-[1.08] tracking-tight mb-6">
                Built to last. <br />
                <span className="clickup-gradient-text">
                  Not just to ship.
                </span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-krudex-muted text-base sm:text-lg leading-relaxed">
                Krudex Technologies is an incorporated engineering firm registered in Hyderabad, Telangana, led by partners <strong className="text-white font-semibold">Kushwant Kumar Reddy</strong> and <strong className="text-white font-semibold">Abhinay Musku</strong>. We exist at the intersection of full-stack software engineering, performance digital marketing, and student training.
              </p>
              <p className="text-krudex-muted text-base sm:text-lg leading-relaxed mt-4">
                We build high-throughput SaaS platforms, manage data-driven Google Ads funnels, and <strong className="text-[#00D2FF] font-semibold">provide software trainings to students with NovaSkill Hub as collaborator</strong>, empowering future engineers with authentic production experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Studio Leadership & Partners Spotlight */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5 relative z-10 bg-[#07050E]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span className="text-xs uppercase tracking-wider text-[#00D2FF] font-semibold font-mono">
                STUDIO LEADERSHIP &amp; PARTNERS
              </span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
              Architects of <span className="clickup-gradient-text">the studio.</span>
            </h2>

            <p className="text-krudex-muted text-base sm:text-lg max-w-2xl leading-relaxed">
              Meet the partners directing engineering architecture, enterprise delivery, and student training programs alongside NovaSkill Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="clickup-card p-8 sm:p-10 rounded-3xl border border-[#7B68EE]/30 relative overflow-hidden flex flex-col justify-between group hover:border-[#7B68EE] transition-all duration-300 bg-gradient-to-b from-[#120E22]/90 to-[#0A0713]/95 shadow-xl"
              >
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-[#7B68EE]/20 via-[#E01E5A]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-krudex-muted flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                      EXECUTIVE PARTNER
                    </span>
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full border bg-[#E01E5A]/15 text-[#F472B6] border-[#E01E5A]/30">
                      {partner.badge}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    <div className="w-16 h-16 rounded-2xl p-[1.5px] shrink-0 bg-gradient-to-tr from-[#7B68EE] via-[#E01E5A] to-[#00D2FF] shadow-[0_0_25px_rgba(224,30,90,0.35)]">
                      <div className="w-full h-full bg-[#0E0B19] rounded-[14px] flex items-center justify-center font-heading font-black text-2xl text-white">
                        {partner.initials}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-2xl text-white leading-tight">
                        {partner.name}
                      </h3>
                      <p className="text-sm font-mono text-[#A78BFA] mt-1 font-semibold">
                        {partner.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-krudex-muted text-sm sm:text-base leading-relaxed mb-6 relative z-10">
                    {partner.bio}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {partner.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Partner Socials */}
                  {partner.socials.some(s => s.url !== "#") && (
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                        DIRECT SOCIALS:
                      </span>
                      <div className="flex items-center gap-3">
                        {partner.socials.filter(s => s.url !== "#").map((s) => {
                          const Icon = s.icon;
                          return (
                            <a
                              key={s.name}
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${partner.name} ${s.name}`}
                              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#7B68EE]/20 border border-white/10 hover:border-[#7B68EE]/50 text-white/80 hover:text-white transition-all text-xs font-mono flex items-center gap-2 shadow-sm"
                            >
                              <span className="text-[#00D2FF]"><Icon /></span>
                              <span>{s.name}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NovaSkill Hub Collaboration & Student Training Section */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="clickup-card p-8 sm:p-14 rounded-3xl border border-[#10B981]/30 relative overflow-hidden shadow-2xl bg-[#090712]/95 backdrop-blur-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#10B981]/20 via-[#00D2FF]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-mono font-bold text-[#6EE7B7] uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-[#10B981]" />
                  <span>ACADEMIC COLLABORATOR · NOVASKILL HUB</span>
                </div>

                <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.12]">
                  We provide software trainings to students with <span className="clickup-gradient-text">NovaSkill Hub as collaborator.</span>
                </h2>

                <p className="text-krudex-muted text-base sm:text-lg leading-relaxed">
                  Traditional engineering bootcamps teach isolated toy projects that fail when faced with real production standards. In strategic collaboration with <strong>NovaSkill Hub</strong>, Krudex provides intensive training where students write code inside active repositories, master Next.js 16 and cloud deployments, and receive code reviews directly from practicing senior engineers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5 border border-[#10B981]/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Real Production Repositories</h4>
                      <p className="text-xs text-krudex-muted mt-0.5">Students ship pull requests to live architectures rather than toy tutorials.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5 border border-[#10B981]/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Practitioner-Led Mentorship</h4>
                      <p className="text-xs text-krudex-muted mt-0.5">Direct 1:15 mentorship ratio with engineers who build commercial platforms daily.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5 border border-[#10B981]/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Accredited NovaSkill Certification</h4>
                      <p className="text-xs text-krudex-muted mt-0.5">Structured graduation milestones validated by the NovaSkill academic network.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5 border border-[#10B981]/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Placement &amp; Hiring Pipeline</h4>
                      <p className="text-xs text-krudex-muted mt-0.5">Rigorous DSA, system design interview rounds, and direct hiring partner referrals.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-center">
                <div className="w-full rounded-2xl bg-white/[0.02] border border-white/10 p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#10B981] to-[#00D2FF] flex items-center justify-center text-white shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                      STUDENT ACADEMY METRICS
                    </span>
                    <span className="font-heading font-black text-4xl text-white mt-1 block">
                      500+
                    </span>
                    <span className="text-xs font-semibold text-[#10B981] uppercase tracking-wider">
                      Students Trained &amp; Mentored
                    </span>
                  </div>

                  <p className="text-xs text-krudex-muted leading-relaxed">
                    Jointly certified by Krudex Technologies and NovaSkill Hub.
                  </p>

                  <Link
                    href="/training"
                    className="clickup-btn-primary w-full py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 group"
                  >
                    <span>View Student Training Tracks</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Story / Timeline Section */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 mb-8 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-[#00D2FF] font-semibold font-mono">
                  OUR EVOLUTION
                </span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mb-8 leading-[1.1] tracking-tight">
                From independent craft to incorporated firm.
              </h2>
              <div className="flex flex-col gap-6 text-krudex-muted text-sm sm:text-base leading-relaxed">
                <p>
                  Krudex began as an independent engineering practice tackling complex challenges in full-stack web platforms and backend architecture. Driven by an uncompromising commitment to code quality and performance benchmarks, our engagements quickly expanded across high-growth startups and established organizations.
                </p>
                <p>
                  Over four years, the practice expanded across three unified disciplines: full-stack SaaS engineering, performance digital marketing, and student training. Recognizing that the tech industry suffered from a massive disconnect between university theory and production realities, we partnered with <strong className="text-white">NovaSkill Hub</strong> as collaborator to train students on live codebases.
                </p>
                <p>
                  In 2026, Krudex Technologies was officially incorporated in Telangana, India, formalizing our leadership partnership under Kushwant Kumar Reddy and Abhinay Musku. Today, we deliver production software for enterprises while cultivating the next generation of top-tier engineers.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="flex flex-col">
              {timelineData.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex gap-6 relative pb-12 last:pb-0 group"
                >
                  {/* Vertical Line */}
                  {idx !== timelineData.length - 1 && (
                    <div className="absolute left-6 top-8 bottom-0 w-px bg-white/10 hidden md:block" />
                  )}
                  
                  <div className="flex-shrink-0">
                    <div className="border border-[#7B68EE]/40 bg-[#0F0C1B] px-3.5 py-1.5 text-[#A78BFA] font-mono text-xs font-bold relative z-10 rounded-xl shadow-[0_0_15px_rgba(123,104,238,0.2)] group-hover:border-[#00D2FF] group-hover:text-[#00D2FF] transition-colors">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className="pt-1">
                    <h3 className="font-heading font-bold text-white text-base mb-1 group-hover:text-[#A78BFA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Principles Section */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E01E5A]/10 border border-[#E01E5A]/30 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
              <span className="text-xs uppercase tracking-wider text-[#F472B6] font-semibold font-mono">
                OUR PRINCIPLES
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4"
            >
              How we operate.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-krudex-muted text-base max-w-2xl"
            >
              Four commitments that govern every client engagement and student cohort.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principlesData.map((principle, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="clickup-card p-7 sm:p-8 hover:border-[#7B68EE]/50 hover:shadow-[0_20px_40px_-10px_rgba(123,104,238,0.2)] transition-all duration-300 group"
              >
                <div className="text-[#A78BFA] font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#7B68EE]/15 border border-[#7B68EE]/30 w-max mb-5">
                  {principle.num}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#A78BFA] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-krudex-muted text-sm leading-relaxed">
                  {principle.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. About CTA */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-5"
          >
            Ready to build or train with Krudex?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-krudex-muted text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
          >
            Whether you want to build a mission-critical platform or enroll students in our NovaSkill Hub training tracks, let&apos;s talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/contact"
              className="clickup-btn-primary px-8 py-4 rounded-xl text-sm font-semibold flex items-center gap-2 group/btn"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/training"
              className="clickup-btn-secondary px-8 py-4 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <span>Explore Student Academy</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
