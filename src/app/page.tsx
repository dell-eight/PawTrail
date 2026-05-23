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
  path: "/",
});

const heroTrustCues = [
  "Made for daily walks",
  "Cleaner travel stops",
  "Organized essentials",
];

const problemSolutions = [
  {
    problem: "Hydrate",
    solution: "Make quick water breaks easier.",
    description:
      "Keep a simple drinking setup ready for parks, errands, car rides, and longer walks.",
  },
  {
    problem: "Clean",
    solution: "Plan for messier outdoor moments.",
    description:
      "After-walk cleanup, muddy paws, and travel stops feel calmer when the routine is prepared.",
  },
  {
    problem: "Carry",
    solution: "Keep small essentials from scattering.",
    description:
      "Choose pieces that reduce loose bottles, cleanup items, clips, and small walk-day add-ons.",
  },
];

const bestForLabels: Record<string, string> = {
  "walksip-portable-dog-water-bottle": "Hydrate on the go",
  "foldbowl-collapsible-pet-travel-bowl": "Clean after walks",
  "trailpack-2-in-1-pet-water-treat-bottle": "Carry essentials",
};

const homepageTrustItems = [
  {
    title: "Calmer outings",
    body: "Hydration, cleanup, and carry support are grouped around the way pet parents actually leave the house.",
    href: "/#bundles",
    cta: "View routines",
  },
  {
    title: "Clear product roles",
    body: "Each product has one obvious job, so choosing the right essential stays simple on mobile.",
    href: "/shop",
    cta: "Compare products",
  },
  {
    title: "Support before checkout",
    body: "Checkout status, shipping notes, refund guidance, and contact details stay easy to find before ordering.",
    href: "/faq",
    cta: "Read FAQs",
  },
];

const faqPreviewItems = [
  {
    question: "Is checkout live yet?",
    answer:
      "Checkout is currently presented as a clear preview. Live payment and shipping details should be confirmed before real orders are accepted.",
  },
  {
    question: "Which product should I start with?",
    answer:
      "Start with hydration for daily walks, cleanup for messy returns, or organized carry for longer outings.",
  },
  {
    question: "How should I care for the products?",
    answer:
      "Follow each product's care notes, keep items dry between outings, and confirm supplier instructions before launch.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="section section-hero homepage-hero">
        <div className="container hero-grid">
          <div className="stack stack-lg">
            <p className="eyebrow">Wag & Roam walk and travel essentials</p>
            <div className="stack">
              <h1>
                Premium pet outing essentials for calmer walks, cleaner stops,
                and easier carry.
              </h1>
              <p className="lede">
                Minimal gear for hydration, after-walk cleanup, and organized
                pet essentials, made for daily walks, park breaks, errands, and
                travel days.
              </p>
            </div>
            <div className="button-row">
              <Link className="button button-primary" href="/shop">
                Shop the Essentials
              </Link>
              <a className="button button-secondary" href="#product-selector">
                Find Your Outing Kit
              </a>
            </div>
            <div className="hero-trust-list" aria-label="Wag and Roam trust cues">
              {heroTrustCues.map((cue) => (
                <span key={cue}>{cue}</span>
              ))}
            </div>
          </div>

          <div className="hero-lifestyle">
            <Image
              alt="Dog on an outdoor walk with calm pet travel essentials nearby"
              className="hero-lifestyle-image"
              fill
              priority
              sizes="(min-width: 960px) 45vw, 100vw"
              src="/images/landing/pet-walk-hero-option-1.jpg"
            />
            <div className="hero-kit-list" aria-hidden="true">
              <span>Hydrate</span>
              <span>Clean</span>
              <span>Carry</span>
            </div>
            <div className="hero-visual-caption">
              <span>Hydrate. Clean. Carry.</span>
              <strong>A calmer outdoor routine in fewer pieces.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="product-guide">
        <div className="container intro-layout">
          <div className="section-heading">
            <p className="eyebrow">Why it matters</p>
            <h2>Every outing asks for the same three things.</h2>
            <p>
              Pets get thirsty, bags get crowded, and outdoor stops can get
              messy. Wag & Roam keeps the routine focused: hydrate, clean,
              and carry.
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
              <h2>Hydrate, clean, and carry with fewer loose extras.</h2>
              <p>
                Start with one practical piece or compare the full collection
                for daily walks, outdoor breaks, and pet-friendly travel.
              </p>
            </div>
            <Link className="button button-secondary" href="/shop">
              Compare Products
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
            <p className="eyebrow">Why Wag & Roam</p>
            <h2>Premium essentials without a complicated routine.</h2>
            <p>
              The store stays focused on practical pet-parent moments: clear
              product roles, easy policy access, and support details kept close
              to checkout.
            </p>
          </div>
          <div className="trust-grid" aria-label="Store trust points">
            {homepageTrustItems.map((item) => (
              <Link
                className="trust-card"
                href={item.href}
                key={item.title}
              >
                <span className="product-label">{item.title}</span>
                <strong>{item.body}</strong>
                <span>{item.cta}</span>
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
              <h2>Quick answers before choosing.</h2>
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
            <p className="eyebrow">Ready to compare</p>
            <h2>Start with one essential or build the full routine.</h2>
            <p>
              Choose the product that fits today's walk, or compare the full
              collection before adding to cart.
            </p>
          </div>
          <Link className="button button-primary" href="/shop">
            Compare the Essentials
          </Link>
        </div>
      </section>
    </main>
  );
}
