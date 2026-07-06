"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';
import TextReveal from './TextReveal';


const projects = [
  {
    type: "Website",
    category: "Website",
    title: "Kemplast Inc.",
    desc: "Rebuilt a legacy React 16 platform on Next.js 16 + React 19 with a Tailwind v4 design system. Lighthouse score moved from 71 to 99. LCP dropped from 2.8s to 0.9s.",
    tags: ["99 Lighthouse", "0.9s LCP", "-47% JS"],
    demoLink: "https://www.kemplast.in/"
  },
  {
    type: "Website",
    category: "Website",
    title: "Sign Language Recognition Platform",
    desc: "Real-time ASL gesture classification using MediaPipe Hands + TensorFlow.js \u2014 running entirely in-browser. 26 gestures recognized at 94.7% accuracy with 18ms inference.",
    tags: ["94.7% accuracy", "18ms latency", "0 server calls"],
    demoLink: "https://sign-language-recognitio-a7e2a.web.app/"
  },
  {
    type: "Website",
    category: "Website",
    title: "Knowvation Learnings",
    desc: "Built a comprehensive ed-tech platform focused on 'Ignite, Innovate, Implement' for modern learners. Features interactive courses and real-time collaboration.",
    tags: ["EdTech", "E-Learning", "Interactive"],
    demoLink: "https://www.knowvationlearnings.in/"
  },
  {
    type: "Website",
    category: "Website",
    title: "GDG Hyderabad",
    desc: "Designed and developed the community portal for Google Developer Group (GDG) Hyderabad. Handled event registrations and served as a central hub for thousands of developers.",
    tags: ["Community", "Event Portal", "Google Tech"],
    demoLink: "https://gdghyd.in/"
  },
  {
    type: "App",
    category: "App",
    title: "Pepperstone Trading App",
    desc: "A highly responsive mobile trading application offering low-latency execution, real-time charting, and secure account management for Forex and CFD traders.",
    tags: ["React Native", "Low Latency", "Trading"],
    demoLink: "https://play.google.com/store/apps/details?id=com.pepperstone.app&hl=en_IN"
  },
  {
    type: "App",
    category: "App",
    title: "Farmable: Farm Management App",
    desc: "A comprehensive farm management application enabling growers to track field activities, manage harvests, and monitor spray logs through an intuitive mobile interface.",
    tags: ["AgriTech", "Offline Mode", "React Native"],
    demoLink: "https://play.google.com/store/apps/details?id=tech.farmable.farmable&hl=en_IN"
  },
  {
    type: "Website",
    category: "Website",
    title: "TEDx MLRIT",
    desc: "Designed and built the official TEDx MLRIT platform to manage speaker line-ups, ticket registrations, and showcase the event theme with rich interactive animations.",
    tags: ["Next.js", "Animations", "Event Platform"],
    demoLink: "https://tedx-mlrit.vercel.app/"
  },
  {
    type: "Website",
    category: "Website",
    title: "AI Career Coach",
    desc: "Developed an AI-powered career coach providing personalized resume reviews, interview preparation, and career path guidance using advanced LLM integrations.",
    tags: ["Generative AI", "LLM", "Next.js"],
    demoLink: "https://ai-career-coach-mu.vercel.app/"
  }
];

const SelectedWork = () => {
  const [filter, setFilter] = useState<'All' | 'Website' | 'App'>('All');
  const filteredProjects = projects.filter(p => filter === 'All' || p.type === filter);

  return (
    <section id="our-work" className="px-8 md:px-16 lg:px-24 py-32 bg-krudex-black border-t border-krudex-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-krudex-blue"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-blue font-semibold">
            SELECTED WORK
          </span>
        </motion.div>

        <div className="flex flex-col mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TextReveal className="font-serif text-5xl md:text-6xl text-white font-bold mb-4 tracking-tight">
              What we&apos;ve shipped
            </TextReveal>
            <p className="text-krudex-muted text-lg">
              A selection of our most technically demanding engagements.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 mt-8"
          >
            {['All', 'Website', 'App'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-5 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                  filter === f 
                    ? 'border-krudex-blue bg-krudex-blue/10 text-krudex-blue' 
                    : 'border-krudex-border/50 text-krudex-muted hover:border-krudex-blue/50 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TiltCard className="h-full group bg-krudex-card border border-krudex-border p-8 md:p-12 hover:border-krudex-blue/50 transition-colors">
                <div className="text-[10px] text-krudex-blue font-mono uppercase tracking-[0.15em] mb-6">
                  {project.category}
                </div>
                <h3 className="text-xl text-white font-bold mb-4 group-hover:text-krudex-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-krudex-muted text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-krudex-blue border border-krudex-blue/30 bg-krudex-blue/5 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.demoLink && (
                  <div className="mt-8">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-krudex-blue transition-colors group/link">
                      {project.type === 'App' ? 'View app' : 'Live website'}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <MagneticButton 
            href="/work" 
            className="group flex items-center gap-2 bg-krudex-blue text-krudex-black px-8 py-4 font-semibold text-sm hover:bg-krudex-blue-hover transition-colors"
          >
            See All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;
