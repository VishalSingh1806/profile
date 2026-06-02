import { ArrowUpRight } from "lucide-react";

import { BackToTopButton } from "@/components/BackToTopButton/BackToTopButton";
export function FooterStrip() {
  return (
    <footer
      id="contact"
      className="border-t border-emerald-950/10 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.14),transparent_30%),linear-gradient(135deg,#17352e_0%,#24493f_100%)]"
    >
      <div className="mx-auto w-[min(1280px,calc(100%-32px))] py-16 md:w-[min(1280px,calc(100%-96px))] md:py-22">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
              Let's build something useful
            </p>
            <h2 className="mt-4 text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.98] tracking-[-0.06em] !text-stone-50">
              Good software delivers features. Great software changes how work gets done.
            </h2>
            <p className="mt-5 text-lg leading-8 text-emerald-50/80">
              Whether you are exploring an AI initiative, trying to automate a manual workflow,
              or looking to build an internal platform from scratch, I am always interested in
              solving meaningful operational problems with technology.
            </p>
            <p className="mt-4 text-base leading-8 text-emerald-50/60">
              I enjoy working on problems where better systems can save time, reduce friction,
              and help teams make better decisions.
            </p>
          </div>
          <a
            className="inline-flex min-h-13 w-fit items-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 font-bold text-emerald-950 shadow-[0_18px_32px_rgba(0,0,0,0.16)] transition-transform hover:-translate-y-0.5"
            href="https://www.linkedin.com/in/singhkumarvishal/"
            target="_blank"
            rel="noreferrer"
          >
            Discuss your challenge
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-14 border-t border-white/12 pt-5 text-sm text-emerald-50/60">
          <p>Built and presented by Vishal Singh.</p>
        </div>
      </div>
      <BackToTopButton />
    </footer>
  );
}
