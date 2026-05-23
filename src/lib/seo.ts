import type { Metadata } from "next";

export const siteName = "Wag & Roam";

export const homepageTitle =
  "Wag & Roam | Premium Pet Walk & Travel Essentials";

export const homepageDescription =
  "Shop minimalist pet walk and travel accessories for calmer outings, easier hydration, simple cleanup, and organized essentials.";

export function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000";

  return siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;
}

type SeoMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export function buildSeoMetadata({
  title,
  description,
  path = "/",
  image = "/images/landing/pet-walk-hero-option-1.jpg",
  type = "website",
}: SeoMetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      siteName,
      type,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteName} pet walk and travel essentials`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
