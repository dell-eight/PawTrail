import type { Metadata } from "next";

export const siteName = "PawTrail";

export const homepageTitle =
  "PawTrail | Simple Pet Walk & Travel Essentials";

export const homepageDescription =
  "Shop minimalist pet walk and travel accessories for easier hydration, feeding, and outdoor care during walks, parks, and trips.";

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
};

export function buildSeoMetadata({
  title,
  description,
}: SeoMetadataOptions): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
