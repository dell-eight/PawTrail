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
  openGraph: {
    title: homepageTitle,
    description: homepageDescription,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: homepageTitle,
    description: homepageDescription,
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
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
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
          <SiteHeader />
          {children}
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
