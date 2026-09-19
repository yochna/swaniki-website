import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, case study reflections and architectural guides from Swaniki's engineering and product team.",
};

const articles = [
  {
    title: "How We Validate SaaS Ideas with Real Market Demand Signals",
    category: "Product Strategy",
    date: "August 2026",
    excerpt: "Why building on founder intuition fails, and how automated community data scraping uncovers profitable product niches.",
  },
  {
    title: "Architecting Next.js 14 for High-Performance Multi-Tenant Apps",
    category: "Engineering",
    date: "July 2026",
    excerpt: "Best practices for subdomain routing, edge middleware auth, and isolated database schemas in modern SaaS platforms.",
  },
  {
    title: "Intelligent Workflow Automation: Eliminating 20+ Hours of Weekly Drag",
    category: "Automation",
    date: "June 2026",
    excerpt: "A step-by-step framework for connecting CRM, support tickets, and database synchronization via custom API pipelines.",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-paper dark:bg-[#16110a] pb-16 pt-32 md:pt-44 text-wink dark:text-paper transition-colors duration-300">
        <div className="container-ed">
          <SectionHeader
            eyebrow="SWANIKI INSIGHTS"
            title="Thoughts on Product, Engineering & AI"
            description="Articles, case study reflections, and architectural guides from our engineering and product team."
          />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper-deep/50 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container-ed grid gap-8 md:grid-cols-3">
          {articles.map((a, i) => (
            <div
              key={i}
              className="flex flex-col p-8 rounded-3xl border border-hairline bg-paper-card dark:border-white/10 dark:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold uppercase tracking-wider text-accent dark:text-accent-bright">{a.category}</span>
                <span className="text-wink/40 dark:text-paper/40">{a.date}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-wink dark:text-paper leading-snug">
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-wink/65 dark:text-paper/60 leading-relaxed font-sans">
                {a.excerpt}
              </p>
              <span className="mt-6 font-mono text-xs font-bold uppercase tracking-wider text-accent dark:text-accent-bright">
                Read Article →
              </span>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
