"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const blobLeftRef = useRef<HTMLDivElement>(null);
  const blobRightRef = useRef<HTMLDivElement>(null);
  const lerpRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetRef.current = {
        x: ((e.clientX - cx) / cx) * 30,
        y: ((e.clientY - cy) / cy) * 30,
      };
    };

    const tick = () => {
      lerpRef.current.x += (targetRef.current.x - lerpRef.current.x) * 0.03;
      lerpRef.current.y += (targetRef.current.y - lerpRef.current.y) * 0.03;
      if (blobLeftRef.current) {
        blobLeftRef.current.style.transform = `translate(${lerpRef.current.x}px, ${lerpRef.current.y}px)`;
      }
      if (blobRightRef.current) {
        blobRightRef.current.style.transform = `translate(${-lerpRef.current.x}px, ${-lerpRef.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  const fadeUp = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Background blobs */}
      <div
        ref={blobLeftRef}
        className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.05]"
        style={{ background: "#5B5BFF", filter: "blur(160px)" }}
        aria-hidden
      />
      <div
        ref={blobRightRef}
        className="pointer-events-none absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.05]"
        style={{ background: "#00E5A0", filter: "blur(160px)" }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl pt-16">
        {/* Eyebrow */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center border border-border px-3 py-1.5 rounded-full mb-8"
        >
          <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-text-secondary">
            Hyderabad · Telangana · India
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="font-sans font-semibold leading-[1.08] tracking-tight text-6xl md:text-7xl lg:text-8xl mb-6"
          transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.06 }}
          initial="hidden"
          animate="visible"
          variants={
            prefersReducedMotion
              ? {}
              : {
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
                }
          }
        >
          {["We", "build", "digital"].map((w) => (
            <motion.span
              key={w}
              className="inline-block mr-[0.2em] text-text-primary"
              variants={
                prefersReducedMotion
                  ? {}
                  : {
                      hidden: { opacity: 0, y: 24 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                    }
              }
            >
              {w}
            </motion.span>
          ))}
          <br />
          {["products", "that"].map((w) => (
            <motion.span
              key={w}
              className="inline-block mr-[0.2em] text-text-primary"
              variants={
                prefersReducedMotion
                  ? {}
                  : {
                      hidden: { opacity: 0, y: 24 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                    }
              }
            >
              {w}
            </motion.span>
          ))}
          <motion.span
            className="inline-block text-accent relative"
            variants={
              prefersReducedMotion
                ? {}
                : {
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                  }
            }
          >
            perform.
            <span
              className="animate-underline absolute left-0 bottom-1 h-[3px] w-full bg-accent block"
              aria-hidden
            />
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.55, ease: EASE }}
          className="text-text-secondary text-lg leading-[1.7] max-w-xl mb-10"
        >
          Krudex Technologies is a Hyderabad-based engineering firm at the
          intersection of software architecture, AI systems, and precision design.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/work"
            className="group flex items-center gap-2 border border-border text-text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:border-accent transition-colors duration-150 min-w-[160px] justify-center"
          >
            View our work
            <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-150" />
          </Link>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-150 min-w-[160px] text-center"
          >
            Book a free call
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-border relative overflow-hidden">
          <motion.div
            animate={prefersReducedMotion ? {} : { y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
            className="absolute inset-x-0 h-1/2 bg-accent"
          />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-secondary">
          Scroll
        </span>
      </div>
    </section>
  );
}
