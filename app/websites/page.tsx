import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { WebsiteCard } from "@/components/WebsiteCard";
import { CTASection } from "@/components/CTASection";
import { websites } from "@/lib/websites";

export const metadata: Metadata = {
  title: "Websites",
  description:
    "Digital experiences designed and developed by Swaniki, crafted around real business challenges, conversions and speed.",
};

export default function WebsitesPage() {
  return (
    <>
      <section className="bg-paper dark:bg-[#16110a] pb-16 pt-32 md:pt-44 text-wink dark:text-paper transition-colors duration-300">
        <div className="container-ed">
          <SectionHeader
            eyebrow="OUR WORK"
            title="Websites We've Built"
            description="Digital experiences crafted around real business challenges, conversions, and speed."
          />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper-deep/50 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container-ed grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {websites.map((w) => (
            <WebsiteCard key={w.slug} website={w} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
