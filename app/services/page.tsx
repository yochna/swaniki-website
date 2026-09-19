import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SaaS product development, custom IT solutions & automations, and web development — end-to-end digital engineering from Swaniki.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-paper dark:bg-[#16110a] pb-16 pt-32 md:pt-44 text-wink dark:text-paper transition-colors duration-300">
        <div className="container-ed">
          <SectionHeader
            eyebrow="OUR CAPABILITIES"
            title="End-to-End Digital Engineering"
            description="From discovery to architecture and scalable production deployment, we build software that drives measurable business outcomes."
          />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper-deep/50 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container-ed">
          <div className="grid gap-8 md:grid-cols-3">
            {site.services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                index={i}
                title={s.title}
                description={s.description}
                cta={s.cta}
                href={s.href}
                icon={s.icon}
              />
            ))}
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-3">
            {site.services.map((s) => (
              <div key={s.slug} className="rounded-3xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-8">
                <h3 className="font-display text-2xl font-bold text-wink dark:text-paper">{s.title} Highlights</h3>
                <ul className="mt-6 space-y-3">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-wink/65 dark:text-paper/60 font-sans">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-bright" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
