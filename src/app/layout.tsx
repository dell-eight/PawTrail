import type { Metadata } from "next";
import { AnalyticsScripts } from "@/components/analytics";
import { CartProvider } from "@/components/cart-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getSiteUrl,
  homepageDescription,
  homepageTitle,
  siteName,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: siteName,
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: homepageTitle,
    template: `%s | ${siteName}`,
  },
  description: homepageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homepageTitle,
    description: homepageDescription,
    siteName,
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/landing/pet-walk-hero-option-1.jpg",
        width: 1200,
        height: 630,
        alt: "Wag & Roam pet walk and travel essentials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homepageTitle,
    description: homepageDescription,
    images: ["/images/landing/pet-walk-hero-option-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AnalyticsScripts
          googleAnalyticsId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          metaPixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID}
          tikTokPixelId={process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID}
        />
        <CartProvider>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <SiteHeader />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
