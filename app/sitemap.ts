import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { websites } from "@/lib/websites";

const BASE_URL = "https://swaniki.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/products", "/websites", "/blog", "/contact"].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
    })
  );

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: new Date(),
  }));

  const websiteRoutes = websites.map((w) => ({
    url: `${BASE_URL}/websites/${w.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes, ...websiteRoutes];
}
