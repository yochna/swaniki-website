import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { websites } from "@/lib/websites";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
import { Tag } from "@/components/Tag";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return websites.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const site = websites.find((w) => w.slug === params.slug);
  if (!site) return {};
  return {
    title: site.name,
    description: site.description,
    openGraph: {
      title: site.name,
      description: site.description,
      images: site.heroScreenshot ? [{ url: site.heroScreenshot }] : undefined,
    },
  };
}

export default function WebsiteDetailPage({ params }: { params: { slug: string } }) {
  const site = websites.find((w) => w.slug === params.slug);
  if (!site) notFound();

  const related = websites.filter((w) => w.slug !== site.slug);

  return (
    <>
      <section className="bg-paper dark:bg-[#16110a] pb-16 pt-32 md:pt-44 text-wink dark:text-paper transition-colors duration-300">
        <div className="container-ed">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent dark:text-accent-bright">{site.category}</span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl lg:text-6xl text-wink dark:text-paper">{site.name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-wink/65 dark:text-paper/60 leading-relaxed font-sans">{site.objective}</p>
        </div>
      </section>

      <section className="py-12 border-t border-hairline bg-paper dark:border-white/10 dark:bg-[#16110a] transition-colors duration-300">
        <div className="container-ed">
          <ScreenshotFrame src={site.heroScreenshot} alt={`${site.name} website`} name={site.name} kind="Website" url={site.url} priority />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper-deep/50 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container-ed grid gap-10 md:grid-cols-3">
          <div className="rounded-3xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-8">
            <h2 className="font-display text-2xl font-bold text-wink dark:text-paper">The Challenge</h2>
            <p className="mt-3 text-wink/65 dark:text-paper/60 leading-relaxed font-sans">{site.challenge}</p>
          </div>
          <div className="rounded-3xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-8">
            <h2 className="font-display text-2xl font-bold text-wink dark:text-paper">The Approach</h2>
            <p className="mt-3 text-wink/65 dark:text-paper/60 leading-relaxed font-sans">{site.approach}</p>
          </div>
          <div className="rounded-3xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-8">
            <h2 className="font-display text-2xl font-bold text-wink dark:text-paper">The Solution</h2>
            <p className="mt-3 text-wink/65 dark:text-paper/60 leading-relaxed font-sans">{site.solution}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper dark:border-white/10 dark:bg-[#16110a] transition-colors duration-300">
        <div className="container-ed">
          <SectionHeader eyebrow="KEY FEATURES" title="What we built" align="left" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-6">
                <h3 className="font-display text-xl font-bold text-wink dark:text-paper">{f.title}</h3>
                <p className="mt-2 text-sm text-wink/65 dark:text-paper/60 leading-relaxed font-sans">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-wink/50 dark:text-paper/50">Key Pages</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {site.keyPages.map((k) => (
                  <Tag key={k}>{k}</Tag>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-wink/50 dark:text-paper/50">Responsive</h4>
              <p className="mt-3 text-sm text-wink/65 dark:text-paper/60 font-sans">
                {site.responsive ? "Fully responsive across mobile, tablet and desktop." : "Designed for its primary device."}
              </p>
            </div>
          </div>

          {site.technology.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-wink/60 dark:text-paper/60">Technology:</span>
              {site.technology.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper-deep/50 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container-ed">
          <SectionHeader eyebrow="THE RESULT" title="Outcome" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-wink/65 dark:text-paper/60 leading-relaxed font-sans">{site.result}</p>
        </div>
      </section>

      {site.hasLive && (
        <section className="py-16 border-t border-hairline bg-paper dark:border-white/10 dark:bg-[#16110a] transition-colors duration-300">
          <div className="container-ed text-center">
            <a
              href={site.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-wink px-7 py-3.5 text-sm font-semibold text-[#f7f1e4] transition-colors hover:bg-accent dark:bg-paper dark:text-wink dark:hover:bg-accent-bright dark:hover:text-white"
            >
              Visit Live Website <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28 border-t border-hairline bg-paper-deep/50 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container-ed">
          <SectionHeader eyebrow="MORE WORK" title="More Websites" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.slice(0, 6).map((w) => (
              <Link key={w.slug} href={`/websites/${w.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-paper-card dark:border-white/10 dark:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                <ScreenshotFrame src={w.screenshot} alt={w.name} name={w.name} kind="Website" url={w.url} />
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-wink group-hover:text-accent dark:text-paper dark:group-hover:text-accent-bright transition-colors">{w.name}</h3>
                    <p className="mt-1 text-sm text-wink/65 dark:text-paper/60 font-sans">{w.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
