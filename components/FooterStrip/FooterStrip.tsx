import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export function FooterStrip() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-16 border-t border-emerald-950/10 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.12),transparent_28%),linear-gradient(180deg,#f1ebdf_0%,#e8dfd0_100%)]"
    >
      <div className="mx-auto grid w-[min(1280px,calc(100%-32px))] gap-8 py-14 md:w-[min(1280px,calc(100%-96px))] lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
            Vishal Singh
          </p>
          <h2 className="mt-4 max-w-[18ch] text-[clamp(2.1rem,5vw,4rem)] leading-[0.98] tracking-[-0.05em] text-stone-950">
            Building AI products and operational systems people can actually run on.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
            Product ownership across planning, stakeholder alignment, architecture, development,
            deployment, and iteration after launch.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[1.5rem] border border-emerald-950/10 bg-white/60 p-5 backdrop-blur-sm">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
              Explore
            </p>
            <div className="grid gap-3">
              <Link className="font-semibold text-stone-900 transition-colors hover:text-emerald-800" href="/">
                Home
              </Link>
              <a className="font-semibold text-stone-900 transition-colors hover:text-emerald-800" href="/#about">
                About
              </a>
              <a className="font-semibold text-stone-900 transition-colors hover:text-emerald-800" href="/#projects">
                Projects
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-emerald-950/10 bg-white/60 p-5 backdrop-blur-sm">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
              Profiles
            </p>
            <div className="grid gap-3">
              <a
                className="inline-flex items-center justify-between rounded-2xl border border-emerald-950/8 bg-white/70 px-4 py-3 font-semibold text-stone-900 transition-transform hover:-translate-y-0.5"
                href="https://github.com/VishalSingh1806"
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <Github size={16} />
                  GitHub
                </span>
                <ArrowUpRight size={14} />
              </a>
              <a
                className="inline-flex items-center justify-between rounded-2xl border border-emerald-950/8 bg-white/70 px-4 py-3 font-semibold text-stone-900 transition-transform hover:-translate-y-0.5"
                href="https://www.linkedin.com/in/singhkumarvishal/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <Linkedin size={16} />
                  LinkedIn
                </span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-[min(1280px,calc(100%-32px))] flex-col gap-3 border-t border-emerald-950/8 py-6 text-sm text-stone-500 md:w-[min(1280px,calc(100%-96px))] md:flex-row md:items-center md:justify-between">
        <p>Built and presented by Vishal Singh.</p>
        <a className="font-bold text-emerald-800" href="#top">
          Back to top
        </a>
      </div>
    </motion.footer>
  );
}
