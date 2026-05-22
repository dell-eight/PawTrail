import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductViewTracker } from "@/components/product-view-tracker";
import { getProductBySlug, getProductSlugs, products } from "@/data/products";
import { productVisualClasses } from "@/lib/product-visuals";
import { buildSeoMetadata } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const bundleSuggestions: Record<
  string,
  { name: string; description: string; href: string }
> = {
  "walksip-portable-dog-water-bottle": {
    name: "Daily Walk Kit",
    description:
      "Pair RoamSip with CleanPaws when you want water breaks and a cleaner return after daily walks.",
    href: "/#bundles",
  },
  "trailpack-2-in-1-pet-water-treat-bottle": {
    name: "Travel Day Kit",
    description:
      "Pair RoamPack with RoamSip and CleanPaws for organized carry, water breaks, and cleanup support on longer outings.",
    href: "/#bundles",
  },
  "foldbowl-collapsible-pet-travel-bowl": {
    name: "Clean Return Kit",
    description:
      "Pair CleanPaws with RoamPack so cleanup items and small essentials stay easy to grab after parks and travel stops.",
    href: "/#bundles",
  },
};

const faqs: Record<string, { question: string; answer: string }[]> = {
  "walksip-portable-dog-water-bottle": [
    {
      question: "When is RoamSip most useful?",
      answer:
        "It is useful for daily walks, park visits, errands, and car rides when your pet may need a quick water break.",
    },
    {
      question: "Does RoamSip replace a separate travel bowl?",
      answer:
        "It covers quick drinking breaks with an attached bowl area, while a larger separate bowl may still help for longer meals or rest stops.",
    },
  ],
  "trailpack-2-in-1-pet-water-treat-bottle": [
    {
      question: "What should I keep in RoamPack?",
      answer:
        "Use it for small outing items like cleanup packs, light accessories, clips, and the extras you reach for during walks or travel days.",
    },
    {
      question: "When is RoamPack most useful?",
      answer:
        "It is most useful for longer walks, park days, car rides, and trips where loose essentials can scatter in a tote, stroller, or car.",
    },
  ],
  "foldbowl-collapsible-pet-travel-bowl": [
    {
      question: "What is CleanPaws for?",
      answer:
        "It is an everyday after-walk cleanup helper for light outdoor mess before your pet gets back into the car or home.",
    },
    {
      question: "Is CleanPaws a medical or sanitizing product?",
      answer:
        "No. It is positioned as an everyday cleanup product, and supplier instructions should be confirmed before the store goes live.",
    },
  ],
};

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return buildSeoMetadata({
    title: `${product.name} | Pet Walk & Travel Accessories`,
    description: product.shortDescription,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedBundle = bundleSuggestions[product.slug];
  const relatedFaqs = faqs[product.slug];
  const visualClass = productVisualClasses[product.slug];

  return (
    <main className="page-shell product-detail-page">
      <ProductViewTracker product={product} />
      <section className="section product-hero">
        <div className="container product-hero-grid">
          <div className="product-gallery" aria-label={`${product.name} gallery`}>
            <div
              className={`product-gallery-main product-visual ${visualClass}`}
              role="img"
              aria-label={product.images.primary.alt}
            >
              <span className="product-visual-shape" aria-hidden="true" />
            </div>
            <div className="product-gallery-thumbs">
              {product.images.gallery.map((image) => (
                <div
                  className={`product-gallery-thumb product-visual ${visualClass}`}
                  key={image.src}
                  role="img"
                  aria-label={image.alt}
                >
                  <span className="product-visual-shape" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          <div className="product-hero-copy">
            <p className="eyebrow">{product.category}</p>
            <div className="stack">
              <h1>{product.name}</h1>
              <h2>{product.productPageHeadline}</h2>
              <p className="lede">{product.productPageSubheadline}</p>
            </div>

            <div className="product-quick-facts" aria-label="Product quick facts">
              <span>{product.bestFor}</span>
              <span>{product.mainBenefit}</span>
            </div>

            <div className="product-price-row">
              <strong className="product-price">{product.price}</strong>
            </div>

            <div className="product-purchase-panel">
              <AddToCartButton product={product} />

              <p className="product-safe-note">
                Your cart is saved on this device. Checkout payment setup comes
                next.
              </p>

              <div className="badge-row" aria-label="Product trust notes">
                {product.trustElements.map((element) => (
                  <span className="trust-badge" key={element}>
                    {element}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container product-info-grid">
          <article className="info-card">
            <span className="product-label">Solves</span>
            <h3>{product.mainBenefit}</h3>
          </article>
          <article className="info-card">
            <span className="product-label">Pain point solved</span>
            <p>{product.painPoint}</p>
          </article>
          <article className="info-card">
            <span className="product-label">Best use case</span>
            <p>{product.idealCustomer}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container product-section-layout">
          <div className="section-heading">
            <p className="eyebrow">Features</p>
            <h2>Simple details that support outdoor routines.</h2>
            <p>
              The focus is practical use during walks, parks, errands, and
              travel days rather than complicated gear.
            </p>
          </div>

          <div className="feature-grid">
            {product.features.map((feature, index) => (
              <article className="feature-card" key={feature}>
                <span aria-hidden="true">{index + 1}</span>
                <p>{feature}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container product-section-layout">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>Three simple steps.</h2>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span>1</span>
              <h3>Pack it before heading out</h3>
              <p>Keep it with your leash, bag, or car kit so it is ready.</p>
            </article>
            <article className="step-card">
              <span>2</span>
              <h3>Use it during outdoor breaks</h3>
              <p>Use the hydration, cleanup, or carry support that matches the moment.</p>
            </article>
            <article className="step-card">
              <span>3</span>
              <h3>Reset it after use</h3>
              <p>Follow the care notes and store it where your next walk starts.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-notes-grid">
          <article className="note-card">
            <h2>What's included</h2>
            <ul className="product-detail-list">
              {product.whatsIncluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="note-card">
            <h2>Care notes</h2>
            <ul className="product-detail-list">
              {product.careNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
          <article className="note-card">
            <h2>Shipping and returns</h2>
            <p>
              Shipping timelines and return windows will be finalized in the
              store policies before launch. Support details will be shown clearly
              at checkout.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container product-section-layout">
          <div className="section-heading">
            <p className="eyebrow">Product FAQ</p>
            <h2>Helpful details before choosing.</h2>
          </div>

          <div className="faq-grid">
            {relatedFaqs.map((faq) => (
              <details className="faq-card faq-accordion" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container related-bundle-card">
          <div className="section-heading">
            <p className="eyebrow">Related bundle</p>
            <h2>{relatedBundle.name}</h2>
            <p>{relatedBundle.description}</p>
          </div>
          <Link className="button button-secondary" href={relatedBundle.href}>
            View Bundle Options
          </Link>
        </div>
      </section>

      <div className="mobile-sticky-cta">
        <span>{product.price}</span>
        <AddToCartButton product={product} label="Add to Cart" />
      </div>
    </main>
  );
}
