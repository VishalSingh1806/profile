"use client";

import { ArrowUp } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

export function BackToTopButton() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [360, 1800], [0, 1]);
  const y = useTransform(scrollY, [360, 1800], [16, 0]);
  const scale = useTransform(scrollY, [360, 1800], [0.88, 1]);

  return (
    <motion.a
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-emerald-950 shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-emerald-950"
      href="#top"
      style={{ opacity, scale, y }}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </motion.a>
  );
}
