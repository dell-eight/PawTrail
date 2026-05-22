import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Shop Wag & Roam Pet Walk & Travel Essentials",
  description:
    "Browse three minimalist pet walk and travel essentials for hydration, after-walk cleanup, and organized carry.",
});

const trustBadges = [
  "Checkout status clearly labeled",
  "Policy pages easy to find",
  "Support details before ordering",
];

export default function ShopPage() {
  return (
    <main className="page-shell">
      <section className="section shop-hero">
        <div className="container shop-hero-layout">
          <div className="section-heading">
            <p className="eyebrow">Shop the essentials</p>
            <h1>Pet travel essentials for calmer walks and cleaner returns.</h1>
            <p className="lede">
              A focused three-product collection for hydration, after-walk
              cleanup, and organized carry outside the home.
            </p>
          </div>

          <div className="shop-summary-card">
            <span className="product-label">Launch collection</span>
            <strong>3 products</strong>
            <p>
              Curated for practical pet parents who want less clutter and a
              more prepared outdoor routine.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container collection-layout">
          <div className="collection-header">
            <div className="section-heading">
              <p className="eyebrow">All products</p>
              <h2>Everything in the store, clearly shown.</h2>
              <p>
                No long category list. Just the three launch essentials for
                hydrate, clean, and carry routines.
              </p>
            </div>
          </div>

          <div className="product-collection-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container comparison-layout">
          <div className="section-heading">
            <p className="eyebrow">Quick comparison</p>
            <h2>Choose by outdoor need.</h2>
          </div>

          <div className="comparison-table" role="table" aria-label="Product comparison">
            <div className="comparison-row comparison-head" role="row">
              <span role="columnheader">Product</span>
              <span role="columnheader">Best for</span>
              <span role="columnheader">Solves</span>
              <span role="columnheader">Helps with</span>
              <span role="columnheader">Price</span>
            </div>
            {products.map((product) => (
              <div className="comparison-row" key={product.id} role="row">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container shop-trust-layout">
          <div className="section-heading">
            <p className="eyebrow">Before checkout</p>
            <h2>Clear support for a focused routine.</h2>
          </div>

          <div className="badge-row" aria-label="Shop trust badges">
            {trustBadges.map((badge) => (
              <span className="trust-badge" key={badge}>
                {badge}
              </span>
            ))}
          </div>

          <Link className="button button-primary" href="/#bundles">
            Build Your Pet Outing Routine
          </Link>
        </div>
      </section>
    </main>
  );
}
