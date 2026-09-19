import Link from "next/link";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { Tag } from "./Tag";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-paper-card dark:border-white/10 dark:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40"
    >
      <div className="p-3">
        <ScreenshotFrame
          src={product.screenshot}
          alt={`${product.name} screenshot`}
          name={product.name}
          kind="Product"
          url={product.url || "swaniki.com"}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl font-bold tracking-tight text-wink dark:text-paper group-hover:text-accent dark:group-hover:text-accent-bright transition-colors">
            {product.name}
          </h3>
          {product.status && (
            <span className="inline-flex items-center rounded-full bg-accent/10 dark:bg-accent-bright/15 px-2.5 py-0.5 font-mono text-[10px] font-bold text-accent dark:text-accent-bright border border-accent/20">
              {product.status}
            </span>
          )}
        </div>
        <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-wink/65 dark:text-paper/60 font-normal">
          {product.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
