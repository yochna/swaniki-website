import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Swaniki is a digital product studio combining world-class engineering, intelligent automation and conversion design to build lasting digital products.",
};

const values = [
  {
    title: "Product-Minded Engineering",
    description: "We don't just write code; we solve business problems, optimize for user retention, and focus on ROI.",
  },
  {
    title: "High-Velocity Execution",
    description: "We move rapidly from discovery prototypes to production deployment through disciplined agile sprints.",
  },
  {
    title: "Intelligent Automation",
    description: "We eliminate operational drag by embedding AI workflows, automated test pipelines, and cloud telemetry.",
  },
  {
    title: "Zero-Compromise Craft",
    description: "Pixel-perfect visual design, sub-second load times, and rock-solid multi-tenant architectures.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper dark:bg-[#16110a] pb-16 pt-32 md:pt-44 text-wink dark:text-paper transition-colors duration-300">
        <div className="container-ed">
          <SectionHeader
            eyebrow="ABOUT SWANIKI"
            title="We Build What Moves Businesses Forward"
            description="Swaniki is a digital product studio that combines world-class engineering, intelligent automation, and conversion design to build lasting digital products."
          />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper-deep/50 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container-ed">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-wink/55 dark:text-paper/50">
                  OUR MISSION
                </p>
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl text-wink dark:text-paper">
                Bridging the Gap Between Vision and Scalable Execution
              </h2>
              <p className="mt-6 text-base sm:text-lg text-wink/65 dark:text-paper/60 leading-relaxed">
                Founders and enterprises often face a choice between slow corporate agencies or fragmented freelancers. Swaniki was founded to be the single elite partner capable of shipping full-stack SaaS platforms, automated workflow architectures, and high-converting web experiences.
              </p>
              <p className="mt-4 text-base sm:text-lg text-wink/65 dark:text-paper/60 leading-relaxed">
                Every project we take on is treated with the rigor of our own proprietary products — tested, optimized, and built to scale effortlessly.
              </p>
            </div>
            <div className="rounded-3xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-8">
              <h3 className="font-display text-2xl font-bold text-wink dark:text-paper mb-6">Our Core Principles</h3>
              <div className="space-y-6">
                {values.map((v, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/10 dark:bg-accent-bright/15 font-mono text-xs font-bold text-accent dark:text-accent-bright">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-bold text-wink dark:text-paper">{v.title}</h4>
                      <p className="mt-1 text-sm text-wink/65 dark:text-paper/60 leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
