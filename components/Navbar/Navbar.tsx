"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navLinks } from "@/lib/content";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-emerald-700"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="sticky top-0 z-40 border-b border-emerald-950/10 bg-stone-100/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] w-[min(1280px,calc(100%-32px))] items-center justify-between gap-6 md:w-[min(1280px,calc(100%-96px))]">
          <Link
            className="inline-flex items-center gap-3 text-stone-950 transition-transform duration-200 hover:-translate-y-0.5"
            href="/"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-800 text-sm font-bold text-stone-50 shadow-lg shadow-emerald-950/10">
              VS
            </span>
            <span className="text-sm font-semibold tracking-[0.18em] uppercase">Vishal Singh</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 transition-colors duration-200 hover:text-emerald-800"
              >
                {link.label}
              </a>
            ))}
            <a
              className="inline-flex min-h-10 items-center rounded-full bg-emerald-800 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-stone-50 transition-transform duration-200 hover:-translate-y-0.5"
              href="/#contact"
            >
              Discuss a project
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-950/10 bg-white/60 text-stone-950 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="overflow-hidden border-t border-emerald-950/8 bg-stone-50/95 md:hidden"
            >
              <nav
                className="mx-auto grid w-[min(1280px,calc(100%-32px))] py-4"
                aria-label="Mobile primary"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex min-h-12 items-center text-lg font-medium text-stone-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/#contact"
                  className="flex min-h-12 items-center font-bold text-emerald-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Discuss a project
                </a>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
