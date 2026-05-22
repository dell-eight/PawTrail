import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { getSiteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/shop",
  "/about",
  "/faq",
  "/contact",
  "/checkout",
  "/shipping-policy",
  "/refund-policy",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();
  const productRoutes = products.map((product) => `/products/${product.slug}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith("/products") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/products") ? 0.8 : 0.6,
  }));
}
