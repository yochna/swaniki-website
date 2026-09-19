import type { Metadata } from "next";
import Link from "next/link";
import { Waveform } from "@/components/Waveform";
import { ArrowRightIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { websites } from "@/lib/websites";

export const metadata: Metadata = {
  title: "Swaniki — Digital Products, IT Solutions & Web Development",
  description:
    "Swaniki builds SaaS products, custom IT solutions, business automations and modern websites for startups, businesses and ambitious founders.",
};

const workIndex = [
  ...products.map((p) => ({
    name: p.name,
    href: `/products/${p.slug}`,
    tag: p.category,
  })),
  ...websites.map((w) => ({
    name: w.name,
    href: `/websites/${w.slug}`,
    tag: w.category,
  })),
];

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We start with the problem, not the technology. Business goals, users and constraints are mapped in a focused discovery sprint before a single line of code is written.",
    meta: "Deliverable — Sprint blueprint",
  },
  {
    n: "02",
    title: "Design",
    desc: "Architecture and experience are defined together: data model, user flows, interface language and the automation seams in between. You see and approve a working prototype.",
    meta: "Deliverable — Prototype & spec",
  },
  {
    n: "03",
    title: "Build & Ship",
    desc: "We engineer, integrate and automate in weekly iterations, then launch, measure and improve. No hand-off into a void — the product keeps getting better after release.",
    meta: "Deliverable — Live product",
  },
];

export default function HomePage() {
  return (
    <div className="bg-paper text-wink transition-colors duration-300 dark:bg-[#16110a] dark:text-paper">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="container-ed pt-32 md:pt-44">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-wink/55 dark:text-paper/50">
              Digital Product Studio
            </p>
          </div>

          <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight text-wink dark:text-paper sm:text-7xl lg:text-[5.6rem]">
            We build digital solutions that{" "}
            <em className="italic text-accent dark:text-accent-bright">drive real impact.</em>
          </h1>

          <div className="mt-10 flex flex-col gap-10 md:mt-12 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-wink/65 dark:text-paper/60 sm:text-lg">
              SaaS products, custom IT solutions, intelligent automations and modern websites —
              designed, engineered and shipped by one senior studio team.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-wink px-7 py-3.5 text-sm font-semibold text-[#f7f1e4] transition-colors hover:bg-accent dark:bg-paper dark:text-wink dark:hover:bg-accent-bright dark:hover:text-white"
              >
                Explore our work <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="border-b border-wink/30 pb-1 text-sm font-semibold text-wink transition-colors hover:border-accent hover:text-accent dark:border-paper/30 dark:text-paper dark:hover:border-accent-bright dark:hover:text-accent-bright"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive waveform */}
        <div className="container-ed mt-16 md:mt-20">
          <div className="border-y border-hairline dark:border-white/10">
            <Waveform className="h-36 sm:h-44 lg:h-52" />
          </div>
          <div className="flex items-center justify-between py-3 font-mono text-[9.5px] font-semibold uppercase tracking-[0.24em] text-wink/40 dark:text-paper/35">
            <span>The Swaniki signal</span>
            <span className="hidden sm:inline">Move across · click or press enter to pulse</span>
            <span className="sm:hidden">Tap to pulse</span>
          </div>
        </div>

        {/* Proof numbers — sourced from real studio data */}
        <div className="container-ed">
          <div className="grid grid-cols-3 divide-x divide-hairline border-b border-hairline dark:divide-white/10 dark:border-white/10">
            {[
              { value: String(products.length), label: "Products built & shipped" },
              { value: String(websites.length), label: "Websites designed & developed" },
              { value: "Remote", label: "Global studio, direct communication" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-8 first:pl-0 sm:px-6 md:py-10">
                <div className="font-display text-3xl text-wink dark:text-paper sm:text-4xl lg:text-5xl">
                  {s.value}
                </div>
                <p className="mt-2 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-wink/45 dark:text-paper/40 sm:text-[10px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROOF OF WORK ================= */}
      <section className="py-24 md:py-32">
        <div className="container-ed grid gap-12 lg:grid-cols-[1fr_1.55fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-wink/55 dark:text-paper/50">
                Proof of work
              </p>
            </div>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-wink dark:text-paper sm:text-5xl">
              Shipped, live,{" "}
              <em className="italic text-accent dark:text-accent-bright">and in use.</em>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-wink/65 dark:text-paper/60">
              The strongest argument is the work itself. Products Swaniki operates, and sites
              designed and developed for real businesses — no stock imagery, no invented metrics.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-wink transition-colors hover:text-accent dark:text-paper dark:hover:text-accent-bright"
              >
                All products <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/websites"
                className="inline-flex items-center gap-2 text-sm font-semibold text-wink transition-colors hover:text-accent dark:text-paper dark:hover:text-accent-bright"
              >
                All websites <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            {workIndex.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline justify-between gap-4 border-t border-hairline py-5 transition-colors last:border-b hover:bg-paper-deep/50 dark:border-white/10 dark:hover:bg-white/[0.03] md:py-6"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-wink/35 dark:text-paper/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl text-wink transition-colors group-hover:text-accent dark:text-paper dark:group-hover:text-accent-bright md:text-3xl">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-wink/40 dark:text-paper/35 sm:inline">
                    {item.tag}
                  </span>
                  <ArrowRightIcon className="h-4 w-4 -translate-x-1 text-wink/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent dark:group-hover:text-accent-bright" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THREE-STEP WORKFLOW ================= */}
      <section className="border-t border-hairline bg-paper-deep/60 py-24 dark:border-white/10 dark:bg-white/[0.02] md:py-32">
        <div className="container-ed">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-accent" />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-wink/55 dark:text-paper/50">
                  How we work
                </p>
              </div>
              <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-wink dark:text-paper sm:text-5xl">
                From idea to impact in{" "}
                <em className="italic text-accent dark:text-accent-bright">three moves.</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-wink/55 dark:text-paper/50">
              Clear milestones, weekly iterations, direct communication with the people actually
              building your product.
            </p>
          </div>

          <div className="mt-14">
            {steps.map((step) => (
              <div
                key={step.n}
                className="group grid gap-4 border-t border-hairline py-10 dark:border-white/10 md:grid-cols-[120px_1fr_1.4fr_auto] md:gap-8 md:py-12"
              >
                <div className="font-display text-5xl text-accent/90 transition-colors dark:text-accent-bright md:text-6xl">
                  {step.n}
                </div>
                <h3 className="font-display text-3xl tracking-tight text-wink dark:text-paper md:text-4xl">
                  {step.title}
                </h3>
                <p className="max-w-lg text-base leading-relaxed text-wink/65 dark:text-paper/60">
                  {step.desc}
                </p>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-wink/40 dark:text-paper/35 md:pt-3">
                  {step.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#17110a] py-28 text-[#f6eee1] dark:bg-[#120d07] md:py-40">
        <div className="container-ed">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent-bright" />
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f6eee1]/50">
              Next project
            </p>
          </div>

          <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.4rem]">
            Have a project{" "}
            <em className="italic text-accent-bright">in mind?</em>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#f6eee1]/65 sm:text-lg">
            SaaS, automations, custom software or a website worth shipping — tell us what
            you&apos;re building and we&apos;ll take it from there.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#f6eee1] px-8 py-4 text-sm font-semibold text-[#17110a] transition-colors hover:bg-accent-bright hover:text-white"
            >
              Start a conversation <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a
              href={`mailto:${site.contact.email}`}
              className="border-b border-[#f6eee1]/30 pb-1 text-sm font-medium text-[#f6eee1]/80 transition-colors hover:border-accent-bright hover:text-accent-bright"
            >
              {site.contact.email}
            </a>
          </div>

          <p className="mt-20 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f6eee1]/35">
            SaaS · Automations · Custom software · Web development
          </p>
        </div>
      </section>
    </div>
  );
}
