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
      "Pair WalkSip with FoldBowl when you want hydration plus a compact backup bowl.",
    href: "/#bundles",
  },
  "trailpack-2-in-1-pet-water-treat-bottle": {
    name: "Weekend Travel Kit",
    description:
      "Pair TrailPack with FoldBowl for longer walks, road trips, and outdoor snack breaks.",
    href: "/#bundles",
  },
  "foldbowl-collapsible-pet-travel-bowl": {
    name: "Complete Outdoor Kit",
    description:
      "Add FoldBowl to either bottle option for a more prepared pet walk setup.",
    href: "/#bundles",
  },
};

const faqs: Record<string, { question: string; answer: string }[]> = {
  "walksip-portable-dog-water-bottle": [
    {
      question: "When is WalkSip most useful?",
      answer:
        "It is useful for daily walks, park visits, errands, and car rides when your dog may need a quick water break.",
    },
    {
      question: "Does this replace every travel bowl?",
      answer:
        "It helps with quick drinking breaks, but a separate bowl can still be helpful for longer food or water stops.",
    },
  ],
  "trailpack-2-in-1-pet-water-treat-bottle": [
    {
      question: "What outings is TrailPack best for?",
      answer:
        "It is best for longer walks, road trips, park days, and outdoor moments where water and small treats are both useful.",
    },
    {
      question: "Why choose this over a simple bottle?",
      answer:
        "It keeps hydration and treats together, which can reduce the number of separate containers in your bag.",
    },
  ],
  "foldbowl-collapsible-pet-travel-bowl": [
    {
      question: "Can FoldBowl be used for food and water?",
      answer:
        "Yes, it is positioned as a compact bowl option for either food or water breaks while away from home.",
    },
    {
      question: "When should I bring a collapsible bowl?",
      answer:
        "Bring it for walks, park visits, cafes, car rides, or travel days when your pet may need a simple food or water spot.",
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
            <span className="product-label">Main benefit</span>
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
              <p>Offer water, snacks, or a bowl depending on your pet routine.</p>
            </article>
            <article className="step-card">
              <span>3</span>
              <h3>Clean and store after use</h3>
              <p>Rinse after outings and let it dry before the next walk.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-notes-grid">
          <article className="note-card">
            <h2>What’s included</h2>
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
