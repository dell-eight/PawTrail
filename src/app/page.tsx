import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BundleSection } from "@/components/bundle-section";
import { ProductCard } from "@/components/product-card";
import { ProductSelector } from "@/components/product-selector";
import { products } from "@/data/products";
import {
  buildSeoMetadata,
  homepageDescription,
  homepageTitle,
} from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: homepageTitle,
  description: homepageDescription,
});

const heroActions = [
  {
    href: "/shop",
    label: "Shop products",
    description: "See the 3-piece walk and travel collection.",
  },
  {
    href: "#product-selector",
    label: "Find my product",
    description: "Choose by daily walks, travel days, or backup bowl needs.",
  },
  {
    href: "#bundles",
    label: "Build a travel kit",
    description: "Pair the essentials for a simpler outdoor routine.",
  },
];

const problemSolutions = [
  {
    problem: "Thirsty pet outside",
    solution: "Offer water without packing a separate bowl.",
    description:
      "A walk-ready bottle keeps quick hydration breaks simple at the park, in the car, or during errands.",
  },
  {
    problem: "Too many loose items",
    solution: "Keep water and small treats together.",
    description:
      "A 2-in-1 bottle helps reduce the bag clutter that builds up on longer outings.",
  },
  {
    problem: "Messy outdoor stops",
    solution: "Bring a compact bowl for food or water.",
    description:
      "A foldable bowl gives your pet a cleaner place to pause without taking over your bag.",
  },
  {
    problem: "Travel stress",
    solution: "Build a small kit before leaving.",
    description:
      "The three-product collection keeps outdoor pet care focused: hydration, snacks, and a backup bowl.",
  },
];

const bestForLabels: Record<string, string> = {
  "walksip-portable-dog-water-bottle": "Best for daily walks",
  "trailpack-2-in-1-pet-water-treat-bottle": "Best for longer trips",
  "foldbowl-collapsible-pet-travel-bowl": "Best budget add-on",
};

const homepageTrustBadges = [
  {
    href: "/checkout",
    label: "Checkout status clearly labeled",
  },
  {
    href: "/shipping-policy",
    label: "Shipping details before live orders",
  },
  {
    href: "/refund-policy",
    label: "Refund and wrong-item guidance",
  },
  {
    href: "/contact",
    label: "Support details before ordering",
  },
  {
    href: "/shop",
    label: "Pet-friendly essentials",
  },
];

const faqPreviewItems = [
  {
    question: "How long does shipping take?",
    answer:
      "Shipping timelines are being finalized and will be shown clearly before launch.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Payment options will be shown securely at checkout once payment setup is connected.",
  },
  {
    question: "What if my item arrives damaged?",
    answer:
      "Support guidance for damaged or wrong items will be included in the final refund policy.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="section section-hero homepage-hero">
        <div className="container hero-grid">
          <div className="stack stack-lg">
            <p className="eyebrow">3-piece pet walk collection</p>
            <div className="stack">
              <h1>Simple gear for walks, parks, and travel days.</h1>
              <p className="lede">
                A focused set of three pet accessories for hydration, snacks,
                and food or water breaks outside the home.
              </p>
            </div>
            <div className="button-row">
              <Link className="button button-primary" href="/shop">
                Shop the 3-Piece Walk Kit
              </Link>
              <a className="button button-secondary" href="#product-selector">
                Find the Right Accessory
              </a>
              <a className="button button-secondary" href="#bundles">
                Build Your Pet Travel Kit
              </a>
            </div>
            <div className="hero-action-list" aria-label="Homepage shopping paths">
              {heroActions.map((action) => (
                <a href={action.href} key={action.label}>
                  <span>{action.label}</span>
                  <small>{action.description}</small>
                </a>
              ))}
            </div>
          </div>

          <div
            className="hero-lifestyle"
          >
            <Image
              alt="Border Collie on a leash during an outdoor walk with its owner"
              className="hero-lifestyle-image"
              fill
              priority
              sizes="(min-width: 960px) 45vw, 100vw"
              src="/images/landing/hero_image.png"
            />
            <div className="hero-kit-list" aria-hidden="true">
              <span>Water bottle</span>
              <span>2-in-1 bottle</span>
              <span>Travel bowl</span>
            </div>
            <div className="hero-visual-caption">
              <span>Focused collection</span>
              <strong>3 essentials. One easier outdoor routine.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="product-guide">
        <div className="container intro-layout">
          <div className="section-heading">
            <p className="eyebrow">Why it matters</p>
            <h2>The little walk-day problems add up fast.</h2>
            <p>
              Pets get thirsty, bags get crowded, and outdoor stops can get
              messy. PawTrail keeps the kit simple with only the essentials.
            </p>
          </div>

          <div className="problem-list">
            {problemSolutions.map((item) => (
              <article className="problem-card" key={item.problem}>
                <span className="problem-label">{item.problem}</span>
                <h3>{item.solution}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="essentials">
        <div className="container collection-layout">
          <div className="collection-header">
            <div className="section-heading">
              <p className="eyebrow">The launch collection</p>
              <h2>Only the essentials. Nothing random.</h2>
              <p>
                Three practical accessories for daily walks, outdoor breaks,
                and pet-friendly travel.
              </p>
            </div>
            <Link className="button button-secondary" href="/shop">
              View Products
            </Link>
          </div>

          <div className="product-collection-grid">
            {products.map((product) => (
              <ProductCard
                bestFor={bestForLabels[product.slug]}
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductSelector />

      <BundleSection />

      <section className="section section-muted">
        <div className="container homepage-trust-layout">
          <div className="section-heading">
            <p className="eyebrow">Trust and support</p>
            <h2>Simple products with support details kept visible.</h2>
            <p>
              The store is still being prepared for live checkout, so policy
              details stay easy to find before any real orders are accepted.
            </p>
          </div>
          <div className="trust-grid" aria-label="Store trust points">
            {homepageTrustBadges.map((badge) => (
              <Link
                className="trust-badge trust-badge-large"
                href={badge.href}
                key={badge.label}
              >
                {badge.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container faq-preview-layout">
          <div className="collection-header">
            <div className="section-heading">
              <p className="eyebrow">Before you order</p>
              <h2>Questions before your first order?</h2>
            </div>
            <Link className="button button-secondary" href="/faq">
              View All FAQs
            </Link>
          </div>

          <div className="faq-preview-grid">
            {faqPreviewItems.map((item) => (
              <details className="faq-card faq-accordion" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta-card">
          <div className="section-heading">
            <p className="eyebrow">Ready when you are</p>
            <h2>Start with one accessory or build the full kit.</h2>
            <p>
              Choose the product that matches your routine, or compare all
              three before adding to cart.
            </p>
          </div>
          <Link className="button button-primary" href="/shop">
            Shop the 3-Piece Walk Kit
          </Link>
        </div>
      </section>
    </main>
  );
}
