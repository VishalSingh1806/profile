import Link from "next/link";
import { motion } from "motion/react";

type ToolRowProps = {
  number: string;
  name: string;
  tagline: string;
  status: string;
  statusTone: "live" | "comingSoon" | "inDev";
  href: string;
  ctaLabel: string;
  reversed?: boolean;
  visual: React.ReactNode;
  mailto?: boolean;
};

const badgeStyles: Record<ToolRowProps["statusTone"], string> = {
  live: "bg-emerald-100 text-emerald-900",
  comingSoon: "bg-amber-100 text-amber-900",
  inDev: "bg-sky-100 text-sky-900"
};

export function ToolRow({
  number,
  name,
  tagline,
  status,
  statusTone,
  href,
  ctaLabel,
  reversed = false,
  visual,
  mailto = false
}: ToolRowProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  const textCol = (
    <div className="flex flex-col justify-center px-5 py-10 sm:px-8 lg:px-14">
      <div className="mb-4 text-6xl font-bold leading-none tracking-[-0.08em] text-stone-300 md:text-7xl">
        {number}
      </div>
      <span
        className={`inline-flex min-h-6 w-fit items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${badgeStyles[statusTone]}`}
      >
        {status}
      </span>
      <h2 className="mt-5 text-3xl leading-tight tracking-[-0.04em] text-stone-950">{name}</h2>
      <p className="mt-4 max-w-[38ch] text-base leading-8 text-stone-600">{tagline}</p>
      {mailto ? (
        <a
          className={`mt-6 inline-flex w-fit items-center gap-2 border-b-2 pb-1 font-semibold transition-all hover:gap-3 ${statusTone === "comingSoon" || statusTone === "inDev" ? "border-amber-700 text-amber-800" : "border-emerald-800 text-emerald-800"}`}
          href={href}
        >
          <span>{ctaLabel}</span>
          <span>{">"}</span>
        </a>
      ) : isExternal ? (
        <a
          className="mt-6 inline-flex w-fit items-center gap-2 border-b-2 border-emerald-800 pb-1 font-semibold text-emerald-800 transition-all hover:gap-3"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <span>{ctaLabel}</span>
          <span>{">"}</span>
        </a>
      ) : (
        <Link
          className="mt-6 inline-flex w-fit items-center gap-2 border-b-2 border-emerald-800 pb-1 font-semibold text-emerald-800 transition-all hover:gap-3"
          href={href}
        >
          <span>{ctaLabel}</span>
          <span>{">"}</span>
        </Link>
      )}
    </div>
  );

  const visualCol = (
    <div className="flex items-center justify-center border-t border-emerald-950/10 bg-[linear-gradient(180deg,#f6f3ed_0%,#ede7dc_100%)] px-5 py-10 sm:px-8 lg:border-t-0 lg:px-12">
      {visual}
    </div>
  );

  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <article className="group grid border-b border-emerald-950/10 lg:min-h-[460px] lg:grid-cols-2">
      <motion.div
        className={reversed ? "order-2" : ""}
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease }}
      >
        {textCol}
      </motion.div>
      <motion.div
        className={reversed ? "order-1 lg:border-r lg:border-emerald-950/10" : "lg:border-l lg:border-emerald-950/10"}
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, delay: 0.1, ease }}
      >
        {visualCol}
      </motion.div>
    </article>
  );
}
