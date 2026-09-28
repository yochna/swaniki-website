import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { CareerCard } from "@/components/CareerCard";
import { CTASection } from "@/components/CTASection";
import { ArrowRightIcon } from "@/components/icons";
import { careers, CAREERS_FORM_URL } from "@/lib/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Swaniki. Explore open jobs and internships across engineering, design and marketing, and apply directly through our careers form.",
};

export default function CareersPage() {
  const jobs = careers.filter((c) => c.type !== "Internship");
  const internships = careers.filter((c) => c.type === "Internship");

  return (
    <>
      <section className="bg-paper dark:bg-[#16110a] pb-16 pt-32 md:pt-44 text-wink dark:text-paper transition-colors duration-300">
        <div className="container-ed">
          <SectionHeader
            eyebrow="JOIN THE TEAM"
            title="Build the Future with Swaniki"
            description="We're a small, high-velocity product studio. Explore our open roles and internships below, and apply directly through our careers form."
          />
          <div className="mt-8 flex justify-center">
            <a
              href={CAREERS_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-wink px-6 py-3 text-sm font-semibold text-[#f7f1e4] transition-colors hover:bg-accent dark:bg-paper dark:text-wink dark:hover:bg-accent-bright dark:hover:text-white"
            >
              General Application <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper-deep/50 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container-ed">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-wink/55 dark:text-paper/50">
              OPEN ROLES
            </p>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-normal tracking-tight text-wink dark:text-paper">
            Jobs
          </h2>

          {jobs.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((c) => (
                <CareerCard key={c.slug} career={c} />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-wink/60 dark:text-paper/55">
              No open full-time roles right now — check back soon, or send us a general application.
            </p>
          )}

          <div className="mt-16 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-wink/55 dark:text-paper/50">
              LEARN & GROW
            </p>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-normal tracking-tight text-wink dark:text-paper">
            Internships
          </h2>

          {internships.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {internships.map((c) => (
                <CareerCard key={c.slug} career={c} />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-wink/60 dark:text-paper/55">
              No open internships right now — check back soon, or send us a general application.
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
