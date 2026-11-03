"use client";

import { motion, useReducedMotion } from "framer-motion";

// Templates re-mount on navigation but never animate out, so only an enter
// transition is defined. No permanent will-change: it would keep a GPU layer
// alive for the whole page after the 0.4s fade finishes.
export default function Template({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
