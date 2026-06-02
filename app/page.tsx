"use client";

import {
  Bot,
  BookOpen,
  ExternalLink,
  FileSearch,
  Github,
  LayoutDashboard,
  Linkedin,
  PanelsTopLeft,
  Workflow
} from "lucide-react";
import { motion } from "motion/react";

import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { ToolRow } from "@/components/ToolRow/ToolRow";
import {
  overviewTools,
  portfolioAboutContent,
  credibilitySignals,
  insightCards,
  projectNarratives,
  selectedLiveWork,
  solutionCategories
} from "@/lib/content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const solutionIcons = [Bot, FileSearch, Workflow, LayoutDashboard, PanelsTopLeft];

// Hero section is static — cinematic motion lives in scroll-driven parallax and whileInView reveals below the fold.


function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className="w-full max-w-[430px] overflow-hidden rounded-[1.35rem] border border-emerald-950/10 bg-[#fffdfa] shadow-[0_22px_50px_rgba(20,33,28,0.08)]"
    >
      <div className="flex h-11 items-center gap-2 border-b border-emerald-950/8 bg-[linear-gradient(180deg,#f6f2e9_0%,#ece6db_100%)] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d46f5f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d0a44b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4d766a]" />
      </div>
      <div className="grid gap-4 p-5">{children}</div>
    </motion.div>
  );
}

function OverviewMockup({ type }: { type: (typeof overviewTools)[number]["mockup"] }) {
  if (type === "v1") {
    return (
      <BrowserFrame>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            ["142", "Active POs"],
            ["38", "Certificates"],
            ["94%", "Fulfilment"]
          ].map(([value, label]) => (
            <div key={label} className="grid gap-1 rounded-xl border border-emerald-950/10 bg-emerald-50 px-3 py-3">
              <strong className="text-emerald-800">{value}</strong>
              <span className="text-[11px] text-stone-500">{label}</span>
            </div>
          ))}
        </div>
        <div className="grid gap-2.5">
          {["Issued", "In progress", "Pending", "Issued"].map((label, index) => (
            <div key={`${label}-${index}`} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border border-emerald-950/8 bg-stone-50 px-3 py-2.5">
              <span className={`h-2.5 w-2.5 rounded-full ${label === "Pending" ? "bg-stone-300" : label === "In progress" ? "bg-amber-600" : "bg-emerald-700"}`} />
              <div className="grid gap-1.5">
                <span className="block h-2.5 rounded-full bg-stone-300" />
                <span className="block h-2 w-3/5 rounded-full bg-stone-200" />
              </div>
              <span className="inline-flex min-h-6 items-center rounded-full bg-stone-100 px-2 text-[11px] text-stone-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      </BrowserFrame>
    );
  }

  if (type === "v2") {
    return (
      <BrowserFrame>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            ["12", "Pending vehicle actions"],
            ["09", "Pending QC"],
            ["24", "Open PO weight"]
          ].map(([value, label]) => (
            <div key={label} className="grid gap-1 rounded-xl border border-amber-200 bg-amber-50 px-3 py-3">
              <strong className="text-amber-800">{value}</strong>
              <span className="text-[11px] text-stone-500">{label}</span>
            </div>
          ))}
        </div>
        <div className="grid gap-2.5">
          {["Pending", "In progress", "Approved"].map((label, index) => (
            <div key={`${label}-${index}`} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border border-emerald-950/8 bg-stone-50 px-3 py-2.5">
              <span className={`h-2.5 w-2.5 rounded-full ${label === "Approved" ? "bg-emerald-700" : "bg-amber-600"}`} />
              <div className="grid gap-1.5">
                <span className="block h-2.5 rounded-full bg-stone-300" />
                <span className="block h-2 w-3/5 rounded-full bg-stone-200" />
              </div>
              <span className="inline-flex min-h-6 items-center rounded-full bg-stone-100 px-2 text-[11px] text-stone-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      </BrowserFrame>
    );
  }

  if (type === "ocrEpr") {
    return (
      <BrowserFrame>
        <div className="grid min-h-[140px] place-items-center gap-1 rounded-2xl border border-dashed border-emerald-950/20 bg-[linear-gradient(180deg,#f8fbf8_0%,#eff4f1_100%)]">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950/8 font-bold text-emerald-800">
            +
          </span>
          <span className="text-sm text-stone-500">Upload document</span>
        </div>
        <div className="grid gap-2.5">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="grid grid-cols-[70px_1fr] items-center gap-3 rounded-xl border border-emerald-950/8 bg-stone-50 px-3 py-2.5">
              <span className="block h-2.5 rounded-full bg-emerald-200" />
              <span className="block h-2.5 rounded-full bg-stone-300" />
            </div>
          ))}
        </div>
      </BrowserFrame>
    );
  }

  if (type === "ocrBiz") {
    return (
      <BrowserFrame>
        <div className="grid min-h-[150px] content-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#203a34_0%,#375f55_100%)] p-6">
          <span className="block h-3.5 w-[70px] rounded-full bg-white/90" />
          <span className="block h-2.5 w-[200px] rounded-full bg-white/90" />
          <span className="block h-2 w-[120px] rounded-full bg-white/75" />
        </div>
        <div className="grid gap-2.5">
          {[0, 1, 2].map((item) => (
            <div key={item} className="grid grid-cols-[70px_1fr] items-center gap-3 rounded-xl border border-emerald-950/8 bg-stone-50 px-3 py-2.5">
              <span className="block h-2.5 rounded-full bg-emerald-200" />
              <span className="block h-2.5 rounded-full bg-stone-300" />
            </div>
          ))}
        </div>
      </BrowserFrame>
    );
  }

  if (type === "route") {
    return (
      <BrowserFrame>
        <div className="relative min-h-[220px]">
          <span className="absolute left-[42px] top-8 h-3.5 w-3.5 rounded-full bg-emerald-800" />
          <span className="absolute right-[60px] top-[90px] h-3.5 w-3.5 rounded-full bg-emerald-800" />
          <span className="absolute bottom-[42px] left-[120px] h-3.5 w-3.5 rounded-full bg-emerald-800" />
          <span className="absolute bottom-[70px] right-[120px] h-3.5 w-3.5 rounded-full bg-emerald-800" />
          <span className="absolute left-[56px] top-[38px] h-[3px] w-[220px] origin-left rotate-[14deg] bg-emerald-300" />
          <span className="absolute left-[132px] top-[122px] h-[3px] w-[148px] origin-left rotate-[22deg] bg-emerald-300" />
          <span className="absolute bottom-[68px] left-[56px] h-[3px] w-[130px] origin-left -rotate-[10deg] bg-emerald-300" />
        </div>
      </BrowserFrame>
    );
  }

  if (type === "chat") {
    return (
      <BrowserFrame>
        <div className="h-14 w-[70%] rounded-2xl bg-emerald-50" />
        <div className="h-14 w-[62%] justify-self-end rounded-2xl bg-[#203a34]" />
        <div className="h-14 w-[52%] rounded-2xl bg-emerald-50" />
      </BrowserFrame>
    );
  }

  if (type === "marathi") {
    return (
      <BrowserFrame>
        <div className="h-14 w-[70%] rounded-2xl border border-amber-200 bg-amber-50" />
        <div className="h-14 w-[62%] justify-self-end rounded-2xl bg-amber-700" />
        <div className="h-14 w-[52%] rounded-2xl border border-amber-200 bg-amber-50" />
        <div className="h-14 w-[45%] justify-self-end rounded-2xl bg-amber-700" />
      </BrowserFrame>
    );
  }

  if (type === "fnm") {
    return (
      <BrowserFrame>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          {[0, 1].map((item) => (
            <div key={item} className="grid gap-2 rounded-xl border border-emerald-950/8 bg-stone-50 p-3">
              <span className="block h-8 w-8 rounded-full bg-emerald-950/10" />
              <span className="block h-2 rounded-full bg-stone-300" />
              <span className="block h-2 w-3/5 rounded-full bg-stone-200" />
            </div>
          ))}
          <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-800 text-[10px] font-bold text-white">
            OK
          </div>
        </div>
        <div className="rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-800">
          92% match
        </div>
      </BrowserFrame>
    );
  }

  if (type === "reo") {
    return (
      <BrowserFrame>
        <div className="grid gap-2">
          <div className="grid grid-cols-[1fr_1fr_auto] gap-2 border-b border-emerald-950/8 pb-2">
            <span className="block h-2 rounded bg-stone-200" />
            <span className="block h-2 rounded bg-stone-200" />
            <span className="block h-2 rounded bg-stone-200" />
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="grid grid-cols-[1fr_1fr_auto] items-center gap-2 rounded-xl border border-emerald-950/8 bg-stone-50 px-3 py-2.5">
              <span className="block h-2 rounded bg-stone-300" />
              <span className="block h-2 w-[70%] rounded bg-stone-200" />
              <span className="block h-5 w-[52px] rounded-full bg-emerald-50" />
            </div>
          ))}
        </div>
      </BrowserFrame>
    );
  }

  if (type === "aip") {
    return (
      <BrowserFrame>
        <div className="grid gap-2 rounded-xl bg-[linear-gradient(135deg,#2c473f_0%,#476f62_100%)] p-4">
          <span className="block h-2.5 rounded-full bg-white/70" />
          <span className="block h-2 w-[65%] rounded-full bg-white/45" />
          <span className="mt-1 block h-6 w-20 rounded-md bg-white/90" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-16 rounded-xl border border-emerald-950/10 bg-emerald-50" />
          ))}
        </div>
      </BrowserFrame>
    );
  }

  return (
    <BrowserFrame>
      <div className="grid min-h-[180px] grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="h-[110px] rounded-2xl bg-[linear-gradient(180deg,#f3f0e7_0%,#e6dfcf_100%)]" />
        <span className="font-bold text-emerald-800">auto</span>
        <div className="h-[110px] rounded-2xl bg-[linear-gradient(180deg,#f3f0e7_0%,#e6dfcf_100%)]" />
      </div>
    </BrowserFrame>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.14),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(6,95,70,0.12),transparent_28%),linear-gradient(180deg,#f8f4ec_0%,#f2ede3_45%,#f7f5ef_100%)]">
        <div className="relative mx-auto w-[min(1280px,calc(100%-32px))] py-18 md:w-[min(1240px,calc(100%-96px))] md:py-24">
          <div
            className="pointer-events-none absolute right-[-90px] top-4 h-[320px] w-[320px] rounded-full bg-[conic-gradient(from_120deg,rgba(217,119,6,0.22),rgba(6,95,70,0.08),rgba(255,255,255,0.08),rgba(217,119,6,0.22))] blur-xl md:right-0 md:top-12 md:h-[520px] md:w-[520px]"
          />

          <div className="relative grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.75fr)]">
            <div className="max-w-5xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
                AI Solution Architect
              </p>
              <p className="mt-7 text-sm font-bold uppercase tracking-[0.12em] text-amber-800">
                Strategy. Systems. Shipping.
              </p>
              <h1 className="mt-7 max-w-[15ch] text-[clamp(3rem,8vw,6rem)] leading-[1.02] tracking-[-0.065em] text-stone-950 max-md:max-w-none">
                Building AI-powered systems that solve
                <span className="block whitespace-nowrap text-emerald-800">
                  operational problems.
                </span>
              </h1>
              <p className="mt-8 max-w-4xl text-[clamp(1.15rem,2vw,1.55rem)] font-semibold leading-9 text-[#223731]">
                AI Solution Architect for automation, document intelligence, and operational
                systems.
              </p>
              <p className="mt-7 max-w-3xl text-lg leading-9 text-stone-600">
                I partner with organisations to understand how work flows across teams, identify
                opportunities for automation, and build AI-powered systems that improve efficiency,
                accuracy, and decision-making. My focus is on delivering technical solutions that
                become part of everyday operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-800 px-5 py-3 font-bold text-stone-50 shadow-[0_16px_28px_rgba(6,78,59,0.18)] transition-transform hover:-translate-y-0.5"
                  href="#solutions"
                >
                  Explore solutions
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-emerald-950/12 bg-white/60 px-5 py-3 font-bold text-stone-950 backdrop-blur-sm transition-transform hover:-translate-y-0.5"
                  href="#projects"
                >
                  View case studies
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-emerald-950/14 bg-white/60 px-4 py-2.5 text-sm font-bold text-stone-950 backdrop-blur-sm transition-transform hover:-translate-y-0.5"
                  href="https://github.com/VishalSingh1806"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-emerald-950/14 bg-white/60 px-4 py-2.5 text-sm font-bold text-stone-950 backdrop-blur-sm transition-transform hover:-translate-y-0.5"
                  href="https://www.linkedin.com/in/singhkumarvishal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
              <div className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-stone-500">
                <span className="h-px w-11 bg-stone-400/80" />
                <span>Scroll to explore</span>
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-emerald-950/12 bg-white/65 p-6 shadow-[0_24px_60px_rgba(33,40,37,0.08)] backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-800">
                What clients receive
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-500">
                Built and shipped solutions across compliance, logistics, education, philanthropy,
                and internal operations.
              </p>
              <div className="mt-5 grid gap-4">
                {[
                  ["A Clear Problem Definition", "Align business needs, stakeholder expectations & technical scope before development begins."],
                  ["AI Systems Built for Operations", "Tools that automate workflows, organise knowledge & support day-to-day decision-making."],
                  ["One Point of Ownership", "A single partner who carries the solution from discovery through deployment."],
                  ["Solutions That Stick", "Systems designed around how teams actually work, not how software is expected to work."]
                ].map(([title, body]) => (
                  <div key={title} className="grid grid-cols-[12px_1fr] gap-3">
                    <span className="mt-2.5 h-3 w-3 rounded-full bg-[linear-gradient(135deg,#d97706_0%,#065f46_100%)] shadow-[0_0_0_6px_rgba(6,78,59,0.06)]" />
                    <p className="leading-7 text-stone-600">
                      <strong className="text-stone-950">{title}:</strong> {body}
                    </p>
                  </div>
                ))}
              </div>
              <blockquote className="mt-6 border-t border-emerald-950/10 pt-5 text-lg leading-8 text-stone-950">
                The best systems feel simple to discuss, reliable in production, and indispensable
                to the people using them.
              </blockquote>
            </aside>
          </div>

          <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">
            Building systems across domains
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["11+ Operational Systems", "designed, built, and deployed"],
              ["End-to-End", "Discovery → Architecture → Development → Deployment"],
              ["AI-Driven", "Document intelligence, knowledge systems, and automation workflows"],
              ["5+ Sectors", "CleanTech, Waste Management, Education, Philanthropy & Consumer Products"]
            ].map(([value, label], index) => (
              <motion.article
                key={label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
                className="rounded-[1.4rem] border border-emerald-950/10 bg-white/72 px-5 py-5 shadow-[0_12px_30px_rgba(33,40,37,0.05)]"
              >
                <strong className="block text-2xl font-bold tracking-[-0.05em] text-stone-950">
                  {value}
                </strong>
                <span className="mt-2 block text-sm leading-6 text-stone-600">{label}</span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-b border-emerald-950/10 bg-[linear-gradient(180deg,#fdfcf9_0%,#f6f1e8_100%)]"
      >
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 py-14 md:w-[min(1180px,calc(100%-96px))] md:gap-16 md:py-22 lg:grid-cols-[minmax(280px,360px)_minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">About</p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.02] tracking-[-0.05em] text-stone-950">
              Building systems that solve operational problems.
            </h2>
            <p className="mt-4 max-w-[28ch] text-base font-semibold leading-8 text-[#41534d]">
              Business understanding, systems thinking, and technical execution.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {portfolioAboutContent.techStack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-emerald-950/8 bg-emerald-950/5 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-emerald-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="rounded-[1.9rem] border border-emerald-950/10 bg-white/76 p-6 shadow-[0_20px_50px_rgba(33,40,37,0.06)] backdrop-blur-sm md:p-9"
          >
            {portfolioAboutContent.bio.map((para, i) => (
              <p
                key={i}
                className={`text-base leading-9 text-stone-600 md:text-[1.08rem] ${i === 0 ? "first-letter:float-left first-letter:mr-2.5 first-letter:text-5xl first-letter:font-bold first-letter:leading-none first-letter:text-emerald-800 md:first-letter:text-6xl" : ""} ${i > 0 ? "mt-5" : ""}`}
              >
                {para}
              </p>
            ))}
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <article className="rounded-[1.4rem] border border-emerald-950/8 bg-[linear-gradient(180deg,#f7f5ef_0%,#f0ebe2_100%)] p-5">
                <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">
                  Working style
                </p>
                <p className="leading-8 text-stone-600">
                  I translate complex business processes into clear workflows, technical scope,
                  system design, and shipped software.
                </p>
              </article>
              <article className="rounded-[1.4rem] border border-emerald-950/8 bg-[linear-gradient(180deg,#f7f5ef_0%,#f0ebe2_100%)] p-5">
                <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">
                  What teams get
                </p>
                <p className="leading-8 text-stone-600">
                  A single partner who can align stakeholders, make technical decisions, build the
                  solution, and carry it through deployment.
                </p>
              </article>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="solutions"
        className="border-b border-emerald-950/10 bg-[linear-gradient(180deg,#eef3ef_0%,#f8f5ee_100%)]"
      >
        <div className="mx-auto w-[min(1280px,calc(100%-32px))] py-16 md:w-[min(1280px,calc(100%-96px))] md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
              What I build
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-[1] tracking-[-0.06em] text-stone-950">
              Most organisations need systems that remove friction, simplify decision-making, and
              fit naturally into existing workflows.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              AI and software systems designed to streamline operations, unlock knowledge, and
              reduce manual effort across teams.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {solutionCategories.map((solution, index) => {
              const Icon = solutionIcons[index];

              return (
                <motion.article
                  key={solution.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
                  className={`min-h-[280px] rounded-[1.5rem] border border-emerald-950/10 bg-white/75 p-6 shadow-[0_16px_36px_rgba(33,40,37,0.05)] xl:col-span-2 ${index === 3 ? "xl:col-start-2" : ""}`}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-800 text-stone-50">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-xl leading-6 tracking-[-0.04em] text-stone-950">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{solution.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {solution.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full bg-emerald-950/5 px-2.5 py-1 text-[11px] font-semibold text-emerald-800"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="border-b border-emerald-950/10 bg-[#f7f4ee]"
        id="proof"
      >
        <div className="mx-auto w-[min(1280px,calc(100%-32px))] py-16 md:w-[min(1280px,calc(100%-96px))] md:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
                Proof in practice
              </p>
              <h2 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-[1] tracking-[-0.06em] text-stone-950">
                Built around operational reality, not demo scenarios.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-stone-600">
              The portfolio includes systems used for compliance, logistics, document processing,
              education operations, nonprofit engagement, and consumer workflows.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {credibilitySignals.map((signal, index) => (
              <motion.article
                key={signal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
                className="rounded-[1.5rem] border border-emerald-950/10 bg-white/72 p-5 shadow-[0_14px_34px_rgba(33,40,37,0.05)]"
              >
                <strong className="text-4xl tracking-[-0.06em] text-emerald-800">
                  {signal.value}
                </strong>
                <h3 className="mt-4 text-xl leading-6 tracking-[-0.04em] text-stone-950">
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{signal.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-emerald-950/10 bg-emerald-950/[0.035] p-5 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              Explore selected live work
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {selectedLiveWork.map((project) => (
                <a
                  key={project.name}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-stone-700 transition-colors hover:text-emerald-800"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto w-[min(1280px,calc(100%-32px))] md:w-[min(1280px,calc(100%-96px))]"
      >
        <div className="max-w-3xl py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
            Case studies
          </p>
          <h2 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-[1] tracking-[-0.06em] text-stone-950">
            Systems built around real operational challenges.
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            A selection of AI, automation, and operational systems designed across sectors.
          </p>
        </div>
        {overviewTools.map((tool, index) => (
          <ToolRow
            key={tool.number}
            number={tool.number}
            name={tool.name}
            {...projectNarratives[tool.name]}
            status={tool.status}
            statusTone={tool.statusTone}
            href={tool.href}
            ctaLabel={tool.ctaLabel}
            reversed={index % 2 === 1}
            visual={<OverviewMockup type={tool.mockup} />}
          />
        ))}
        <p className="mx-auto max-w-4xl py-16 text-center text-lg leading-9 text-stone-600 md:py-20">
          These projects span different industries and use cases, but share one objective: helping
          teams make decisions faster, reduce manual effort, and operate more effectively through
          thoughtfully designed software and AI systems.
        </p>
      </section>

      <section
        id="insights"
        className="border-t border-emerald-950/10 bg-[linear-gradient(180deg,#eef3ef_0%,#f8f5ee_100%)]"
      >
        <div className="mx-auto w-[min(1280px,calc(100%-32px))] py-16 md:w-[min(1280px,calc(100%-96px))] md:py-24">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
                Working notes
              </p>
              <h2 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-[1] tracking-[-0.06em] text-stone-950">
                Lessons from designing systems for real workflows.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-stone-600">
              Practical principles for turning AI capabilities into tools that teams can use in
              day-to-day operations.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {insightCards.map((insight, index) => (
              <motion.article
                key={insight.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
                className="rounded-[1.5rem] border border-emerald-950/10 bg-white/75 p-6 shadow-[0_14px_34px_rgba(33,40,37,0.05)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                    Note {insight.number}
                  </span>
                  <BookOpen size={18} className="text-emerald-800" />
                </div>
                <h3 className="mt-6 text-2xl leading-7 tracking-[-0.05em] text-stone-950">
                  {insight.title}
                </h3>
                <p className="mt-4 leading-7 text-stone-600">{insight.description}</p>
              </motion.article>
            ))}
          </div>

          <a
            className="mt-8 inline-flex items-center gap-2 border-b-2 border-emerald-800 pb-1 font-bold text-emerald-800 transition-all hover:gap-3"
            href="https://www.linkedin.com/in/singhkumarvishal/"
            target="_blank"
            rel="noreferrer"
          >
            Follow future notes on LinkedIn
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      <FooterStrip />
    </main>
  );
}
