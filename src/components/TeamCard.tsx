"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type SocialType = "linkedin" | "github" | "twitter" | "dribbble" | "behance";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  avatar?: string;
  accent?: string;
  accentRgb?: string;
  bio: string;
  skills: string[];
  socials?: { type: SocialType; url: string }[];
}

const socialIcons: Record<SocialType, React.ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  dribbble: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
    </svg>
  ),
  behance: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.166-1.27.25-1.95.25H0v-15.03h6.938zM6.545 10.46c.558 0 1.02-.154 1.39-.462.37-.308.56-.748.56-1.32 0-.32-.06-.594-.174-.823-.116-.23-.27-.414-.46-.553-.19-.14-.41-.24-.66-.3-.25-.063-.51-.093-.78-.093H3.293v3.55h3.252zm.2 5.493c.3 0 .585-.04.862-.118.275-.08.51-.2.72-.354.208-.153.37-.354.49-.6.12-.248.18-.548.18-.9 0-.71-.21-1.24-.64-1.58-.43-.34-.99-.51-1.69-.51H3.293v4.06h3.453zM15.076 14.463c.374.413.914.62 1.622.62.53 0 .99-.14 1.374-.42.383-.277.618-.548.71-.814h2.35c-.374 1.173-.942 2.01-1.71 2.52-.77.508-1.698.763-2.79.763-.756 0-1.44-.127-2.047-.38-.606-.255-1.12-.608-1.553-1.06-.43-.453-.766-.99-1.006-1.614-.24-.624-.36-1.31-.36-2.057 0-.723.126-1.39.376-2.012.25-.623.6-1.16 1.046-1.614.447-.452.976-.808 1.588-1.066.612-.257 1.29-.387 2.035-.387.834 0 1.563.164 2.19.493.627.328 1.14.775 1.54 1.34.403.567.693 1.22.87 1.963.176.742.22 1.533.132 2.372H14.86c.02.78.198 1.36.572 1.77h-.356zm2.88-4.73c-.307-.353-.787-.53-1.44-.53-.426 0-.78.08-1.065.237-.285.16-.516.36-.693.6-.178.24-.3.49-.372.758-.07.267-.113.507-.128.72h4.467c-.078-.71-.364-1.43-.77-1.785zM14.336 5.39h5.166v1.39h-5.166V5.39z" />
    </svg>
  ),
};

export default function TeamCard({ member, index = 0 }: { member: TeamMember; index?: number }) {
  const socials = (member.socials ?? []).filter((s) => s.url && s.url !== "#");
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 220, damping: 35 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 220, damping: 35 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{ perspective: 1000 }}
      className="group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="clickup-card p-6 flex flex-col justify-between h-full hover:border-[#7B68EE]/40 transition-all duration-300 relative overflow-hidden"
      >
        <div>
          {/* Top Info */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-krudex-muted">
                ENGINEER #{String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] font-mono status-pill-purple px-2 py-0.5 rounded-full font-bold">
              ACTIVE SPRINT
            </span>
          </div>

          {/* Avatar & Name */}
          <div className="flex items-start gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#7B68EE] via-[#E01E5A] to-[#00D2FF] p-[1.5px] shadow-[0_0_20px_rgba(123,104,238,0.3)] shrink-0">
              <div className="w-full h-full bg-[#0E0B19] rounded-[14px] flex items-center justify-center font-heading font-black text-xl text-white">
                {member.initials}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-white leading-tight">
                {member.name}
              </h3>
              <p className="text-xs font-mono text-[#A78BFA] mt-1">
                {member.role}
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed mb-6">
            {member.bio}
          </p>
        </div>

        {/* Competencies */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Socials */}
          {socials.length > 0 && (
            <div className="pt-3 border-t border-white/5 flex items-center gap-2">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#7B68EE]/40 transition-colors"
                >
                  {socialIcons[social.type]}
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
