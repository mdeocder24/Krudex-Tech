"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type SocialType = "linkedin" | "github" | "twitter" | "dribbble" | "behance";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  accent: string;
  accentRgb: string;
  bio: string;
  skills: string[];
  socials?: { type: SocialType; url: string }[];
}

/* ── SVG Social Icons ── */
const socialIcons: Record<SocialType, React.ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  dribbble: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
    </svg>
  ),
  behance: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.166-1.27.25-1.95.25H0v-15.03h6.938zM6.545 10.46c.558 0 1.02-.154 1.39-.462.37-.308.56-.748.56-1.32 0-.32-.06-.594-.174-.823-.116-.23-.27-.414-.46-.553-.19-.14-.41-.24-.66-.3-.25-.063-.51-.093-.78-.093H3.293v3.55h3.252zm.2 5.493c.3 0 .585-.04.862-.118.275-.08.51-.2.72-.354.208-.153.37-.354.49-.6.12-.248.18-.548.18-.9 0-.71-.21-1.24-.64-1.58-.43-.34-.99-.51-1.69-.51H3.293v4.06h3.453zM15.076 14.463c.374.413.914.62 1.622.62.53 0 .99-.14 1.374-.42.383-.277.618-.548.71-.814h2.35c-.374 1.173-.942 2.01-1.71 2.52-.77.508-1.698.763-2.79.763-.756 0-1.44-.127-2.047-.38-.606-.255-1.12-.608-1.553-1.06-.43-.453-.766-.99-1.006-1.614-.24-.624-.36-1.31-.36-2.057 0-.723.126-1.39.376-2.012.25-.623.6-1.16 1.046-1.614.447-.452.976-.808 1.588-1.066.612-.257 1.29-.387 2.035-.387.834 0 1.563.164 2.19.493.627.328 1.14.775 1.54 1.34.403.567.693 1.22.87 1.963.176.742.22 1.533.132 2.372H14.86c.02.78.198 1.36.572 1.77h-.356zm2.88-4.73c-.307-.353-.787-.53-1.44-.53-.426 0-.78.08-1.065.237-.285.16-.516.36-.693.6-.178.24-.3.49-.372.758-.07.267-.113.507-.128.72h4.467c-.078-.71-.364-1.43-.77-1.785zM14.336 5.39h5.166v1.39h-5.166V5.39z" />
    </svg>
  ),
};

const socialLabels: Record<SocialType, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  twitter: "X",
  dribbble: "Dribbble",
  behance: "Behance",
};

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [12, -12]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), {
    stiffness: 200,
    damping: 30,
  });

  const glowX = useTransform(mouseX, [0, 1], [0, 100]);
  const glowY = useTransform(mouseY, [0, 1], [0, 100]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setIsHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1000 }}
      className="group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-2xl cursor-pointer"
      >
        {/* === Animated holographic border === */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: `linear-gradient(135deg, ${member.accent}, transparent 40%, ${member.accent}66 60%, transparent 80%, ${member.accent})`,
            backgroundSize: "300% 300%",
            animation: isHovered
              ? "holoShift 3s ease-in-out infinite"
              : "none",
          }}
        />

        {/* === Card body === */}
        <div className="relative rounded-2xl bg-[#0a0a0f] border border-white/[0.06] overflow-hidden z-10">
          {/* Cursor-following glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([x, y]) =>
                  `radial-gradient(circle at ${x}% ${y}%, ${member.accent}18 0%, transparent 60%)`
              ),
            }}
          />

          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Top section — avatar + identity */}
          <div className="relative p-6 pb-4">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none overflow-hidden">
              <div
                className="absolute top-3 right-3 w-12 h-[1px] opacity-20"
                style={{ background: member.accent }}
              />
              <div
                className="absolute top-3 right-3 w-[1px] h-12 opacity-20"
                style={{ background: member.accent }}
              />
            </div>

            {/* Status indicator + index */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full"
                  style={{ background: member.accent }}
                />
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-medium">
                  Active
                </span>
              </div>
              <span
                className="text-[10px] font-mono opacity-30"
                style={{ color: member.accent }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Avatar */}
            <div className="flex items-start gap-5">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative flex-shrink-0"
              >
                {/* Outer ring glow */}
                <div
                  className="absolute -inset-1 rounded-xl opacity-40 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${member.accent}, transparent)`,
                  }}
                />
                <div
                  className="relative w-16 h-16 rounded-xl flex items-center justify-center font-serif text-xl font-bold border"
                  style={{
                    background: `linear-gradient(135deg, ${member.accent}15, ${member.accent}05)`,
                    borderColor: `${member.accent}30`,
                    color: member.accent,
                  }}
                >
                  {member.initials}
                </div>
              </motion.div>

              <div className="min-w-0 pt-1">
                <h3 className="text-white font-bold text-base leading-tight truncate">
                  {member.name}
                </h3>
                <p
                  className="text-sm font-medium mt-1 truncate"
                  style={{ color: member.accent }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          </div>

          {/* Divider with accent glow */}
          <div className="relative px-6">
            <div className="h-[1px] bg-white/[0.06]" />
            <div
              className="absolute left-6 top-0 w-12 h-[1px] opacity-50"
              style={{ background: member.accent }}
            />
          </div>

          {/* Bio */}
          <div className="p-6 pt-4 pb-3">
            <p className="text-white/40 text-[13px] leading-relaxed line-clamp-3">
              {member.bio}
            </p>
          </div>

          {/* Skills */}
          <div className="px-6 pb-4">
            <div className="flex flex-wrap gap-1.5">
              {member.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    scale: 1.05,
                    y: -1,
                  }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors duration-200 cursor-default"
                  style={{
                    background: `${member.accent}08`,
                    borderColor: `${member.accent}15`,
                    color: `${member.accent}cc`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${member.accent}40`;
                    e.currentTarget.style.background = `${member.accent}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${member.accent}15`;
                    e.currentTarget.style.background = `${member.accent}08`;
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: member.accent }}
                  />
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ── Social Links Bar ── */}
          {member.socials && member.socials.length > 0 && (
            <div className="px-6 pb-5 pt-1">
              <div className="flex items-center gap-2">
                {member.socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-300 group/social"
                    style={{
                      background: `${member.accent}06`,
                      borderColor: `${member.accent}12`,
                      color: `${member.accent}88`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${member.accent}50`;
                      e.currentTarget.style.background = `${member.accent}18`;
                      e.currentTarget.style.color = member.accent;
                      e.currentTarget.style.boxShadow = `0 0 16px ${member.accent}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${member.accent}12`;
                      e.currentTarget.style.background = `${member.accent}06`;
                      e.currentTarget.style.color = `${member.accent}88`;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    title={socialLabels[social.type]}
                  >
                    {socialIcons[social.type]}
                  </motion.a>
                ))}

                {/* Subtle separator + connect label */}
                <div className="flex-1 flex items-center gap-3 ml-1">
                  <div
                    className="flex-1 h-[1px] opacity-10"
                    style={{ background: member.accent }}
                  />
                  <span
                    className="text-[9px] uppercase tracking-[0.2em] opacity-20 font-medium whitespace-nowrap"
                    style={{ color: member.accent }}
                  >
                    Connect
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Scanline effect on hover */}
          {isHovered && (
            <motion.div
              initial={{ top: "-10%" }}
              animate={{ top: "110%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] pointer-events-none z-30"
              style={{
                background: `linear-gradient(90deg, transparent, ${member.accent}20, transparent)`,
              }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default TeamCard;
