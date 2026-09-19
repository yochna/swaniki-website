import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
import { Tag } from "@/components/Tag";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.heroScreenshot ? [{ url: product.heroScreenshot }] : undefined,
    },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="bg-paper dark:bg-[#16110a] pb-16 pt-32 md:pt-44 text-wink dark:text-paper transition-colors duration-300">
        <div className="container-ed grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <Tag>{product.category}</Tag>
              {product.status && <Tag>{product.status}</Tag>}
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl lg:text-6xl text-wink dark:text-paper">
              {product.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-wink/65 dark:text-paper/60 leading-relaxed font-sans">
              {product.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {product.url ? (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-wink px-7 py-3.5 text-sm font-semibold text-[#f7f1e4] transition-colors hover:bg-accent dark:bg-paper dark:text-wink dark:hover:bg-accent-bright dark:hover:text-white"
                >
                  Visit Product <ArrowRightIcon className="h-4 w-4" />
                </a>
              ) : (
                <span className="inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold border border-hairline dark:border-white/15 text-wink/60 dark:text-paper/60">Coming Soon</span>
              )}
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold border border-hairline dark:border-white/15 text-wink dark:text-paper hover:border-accent hover:text-accent transition-colors"
              >
                All Products
              </Link>
            </div>
          </div>
          <ScreenshotFrame
            src={product.heroScreenshot}
            alt={`${product.name} screenshot`}
            name={product.name}
            kind="Product"
            url={product.url || "swaniki.com"}
            priority
          />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper-deep/50 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container-ed grid gap-10 md:grid-cols-3">
          <div className="rounded-3xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-8">
            <h2 className="font-display text-2xl font-bold text-wink dark:text-paper">The Problem</h2>
            <p className="mt-3 text-wink/65 dark:text-paper/60 leading-relaxed font-sans">{product.problem}</p>
          </div>
          <div className="rounded-3xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-8">
            <h2 className="font-display text-2xl font-bold text-wink dark:text-paper">The Idea</h2>
            <p className="mt-3 text-wink/65 dark:text-paper/60 leading-relaxed font-sans">{product.idea}</p>
          </div>
          <div className="rounded-3xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-8">
            <h2 className="font-display text-2xl font-bold text-wink dark:text-paper">How It Works</h2>
            <ul className="mt-3 space-y-2.5 text-wink/65 dark:text-paper/60 font-sans">
              {product.howItWorks.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-bright" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper dark:border-white/10 dark:bg-[#16110a] transition-colors duration-300">
        <div className="container-ed">
          <SectionHeader eyebrow="KEY FEATURES" title="What makes it work" align="left" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-hairline dark:border-white/10 bg-paper-card dark:bg-white/[0.03] p-6">
                <h3 className="font-display text-xl font-bold text-wink dark:text-paper">{f.title}</h3>
                <p className="mt-2 text-sm text-wink/65 dark:text-paper/60 leading-relaxed font-sans">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper-deep/50 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container-ed">
          <SectionHeader eyebrow="MORE FROM SWANIKI" title="More Products" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-paper-card dark:border-white/10 dark:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40"
              >
                <ScreenshotFrame src={p.screenshot} alt={p.name} name={p.name} kind="Product" url={p.url || "swaniki.com"} />
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-wink group-hover:text-accent dark:text-paper dark:group-hover:text-accent-bright transition-colors">{p.name}</h3>
                    <p className="mt-1 text-sm text-wink/65 dark:text-paper/60 leading-relaxed font-sans">{p.description}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent dark:text-accent-bright">
                    View Product <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
