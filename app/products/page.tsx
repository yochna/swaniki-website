import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Digital products designed and shipped by Swaniki to solve real-world problems and generate ongoing value.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-paper dark:bg-[#16110a] pb-16 pt-32 md:pt-44 text-wink dark:text-paper transition-colors duration-300">
        <div className="container-ed">
          <SectionHeader
            eyebrow="OUR PRODUCTS"
            title="Products We've Built"
            description="Digital products designed to solve real-world problems and generate ongoing value."
          />
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-hairline bg-paper-deep/50 dark:border-white/10 dark:bg-white/[0.02] transition-colors duration-300">
        <div className="container-ed grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
