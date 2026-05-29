import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import {
  Reveal,
  RevealSection,
  Stagger,
  StaggerItem,
} from "@/components/ui/motion-reveal";
import { products } from "@/data/products";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Shop Wag & Roam Pet Walk & Travel Essentials",
  description:
    "Browse three minimalist pet walk and travel essentials for hydration, after-walk cleanup, and organized carry.",
  path: "/shop",
});

const conversionSupportItems = [
  {
    title: "Compare by need",
    body: "Choose Hydrate, Clean, or Carry based on the routine you want to improve first.",
    href: "#comparison",
  },
  {
    title: "Check care notes",
    body: "Each product page lists simple use and care guidance before you add to cart.",
    href: "/faq",
  },
  {
    title: "Review support details",
    body: "Shipping, refund, checkout, and contact pages stay visible before live ordering.",
    href: "/faq",
  },
];

export default function ShopPage() {
  return (
    <main className="page-shell">
      <RevealSection className="section shop-hero">
        <div className="container shop-hero-layout">
          <Reveal className="section-heading">
            <p className="eyebrow">Shop the essentials</p>
            <h1>Pet travel essentials for calmer walks and cleaner returns.</h1>
            <p className="lede">
              A focused three-product collection for hydration, after-walk
              cleanup, and organized carry outside the home.
            </p>
          </Reveal>

          <Reveal className="shop-summary-card" delay={0.1} direction="left">
            <span className="product-label">Launch collection</span>
            <strong>3 products</strong>
            <p>
              Curated for practical pet parents who want less clutter and a
              more prepared outdoor routine.
            </p>
          </Reveal>
        </div>
      </RevealSection>

      <RevealSection className="section section-muted">
        <div className="container collection-layout">
          <Reveal className="collection-header">
            <div className="section-heading">
              <p className="eyebrow">All products</p>
              <h2>Everything in the store, clearly shown.</h2>
              <p>
                No long category list. Just the three launch essentials for
                hydrate, clean, and carry routines.
              </p>
            </div>
          </Reveal>

          <div className="product-collection-grid">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                revealDelay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section" id="comparison">
        <div className="container comparison-layout">
          <Reveal className="section-heading">
            <p className="eyebrow">Quick comparison</p>
            <h2>Choose by outdoor need.</h2>
          </Reveal>

          <Stagger className="comparison-table" role="table" aria-label="Product comparison">
            <div className="comparison-row comparison-head" role="row">
              <span role="columnheader">Product</span>
              <span role="columnheader">Best for</span>
              <span role="columnheader">Solves</span>
              <span role="columnheader">Helps with</span>
              <span role="columnheader">Price</span>
            </div>
            {products.map((product) => (
              <StaggerItem className="comparison-row" key={product.id} role="row">
                <span data-label="Product" role="cell">
                  {product.name}
                </span>
                <span data-label="Best for" role="cell">
                  {product.bestFor}
                </span>
                <span data-label="Solves" role="cell">
                  {product.mainBenefit}
                </span>
                <span data-label="Helps with" role="cell">
                  {product.features[0]}
                </span>
                <span data-label="Price" role="cell">
                  {product.price}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </RevealSection>

      <RevealSection className="section section-muted">
        <div className="container shop-trust-layout">
          <Reveal className="section-heading">
            <p className="eyebrow">Before you choose</p>
            <h2>Clear support for a focused routine.</h2>
            <p>
              A small collection should make decisions easier, not add more
              work before checkout.
            </p>
          </Reveal>

          <Stagger className="conversion-support-grid" aria-label="Shop conversion support">
            {conversionSupportItems.map((item) => (
              <StaggerItem key={item.title}>
                <Link className="trust-card" href={item.href}>
                  <span className="product-label">{item.title}</span>
                  <strong>{item.body}</strong>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.12}>
            <Link className="button button-primary" href="/#bundles">
              Build Your Pet Outing Routine
            </Link>
          </Reveal>
        </div>
      </RevealSection>
    </main>
  );
}
