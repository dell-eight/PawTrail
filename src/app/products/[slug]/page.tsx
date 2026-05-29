import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductViewTracker } from "@/components/product-view-tracker";
import {
  Reveal,
  RevealSection,
  Stagger,
  StaggerItem,
} from "@/components/ui/motion-reveal";
import { getProductBySlug, getProductSlugs, products } from "@/data/products";
import { productVisualClasses } from "@/lib/product-visuals";
import { buildSeoMetadata, getSiteUrl } from "@/lib/seo";

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

const productFitGuides: Record<string, { title: string; body: string }[]> = {
  "walksip-portable-dog-water-bottle": [
    {
      title: "Choose it for",
      body: "Daily walks, park breaks, errands, and quick car rides.",
    },
    {
      title: "Best paired with",
      body: "CleanPaws when you want water breaks and a cleaner return.",
    },
    {
      title: "Keep in mind",
      body: "Use a larger separate bowl for long meals or extended stops.",
    },
  ],
  "foldbowl-collapsible-pet-travel-bowl": [
    {
      title: "Choose it for",
      body: "Light after-walk mess before getting into the car or home.",
    },
    {
      title: "Best paired with",
      body: "RoamPack so cleanup items stay easy to grab while traveling.",
    },
    {
      title: "Keep in mind",
      body: "This is everyday cleanup support, not a medical or sanitizing product.",
    },
  ],
  "trailpack-2-in-1-pet-water-treat-bottle": [
    {
      title: "Choose it for",
      body: "Longer walks, park days, car rides, and small travel essentials.",
    },
    {
      title: "Best paired with",
      body: "RoamSip and CleanPaws for a complete hydrate, clean, carry routine.",
    },
    {
      title: "Keep in mind",
      body: "Empty and reset it after outings so the next walk starts ready.",
    },
  ],
};

const productRoutineSteps: Record<
  string,
  { title: string; body: string }[]
> = {
  "walksip-portable-dog-water-bottle": [
    {
      title: "Fill before heading out",
      body: "Keep it near the leash area, stroller, or car kit so water is ready.",
    },
    {
      title: "Offer quick water breaks",
      body: "Use the attached bowl area during walks, errands, parks, and travel stops.",
    },
    {
      title: "Rinse and dry",
      body: "Clean with mild soap as needed and let it dry fully before storing.",
    },
  ],
  "foldbowl-collapsible-pet-travel-bowl": [
    {
      title: "Pack it where mess happens",
      body: "Keep it in a walk bag, car kit, or carry pouch before leaving.",
    },
    {
      title: "Wipe after outdoor moments",
      body: "Use it for light everyday cleanup after parks, errands, and travel stops.",
    },
    {
      title: "Close and store",
      body: "Close the pack after use and keep it in a cool, dry place.",
    },
  ],
  "trailpack-2-in-1-pet-water-treat-bottle": [
    {
      title: "Load the small essentials",
      body: "Group cleanup items, clips, and lightweight add-ons before heading out.",
    },
    {
      title: "Move it with the routine",
      body: "Carry it between the leash area, tote, stroller, or car without repacking.",
    },
    {
      title: "Reset after the outing",
      body: "Empty, wipe clean as needed, and let it dry before the next trip.",
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
    path: `/products/${product.slug}`,
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
  const fitGuide = productFitGuides[product.slug];
  const routineSteps = productRoutineSteps[product.slug];
  const visualClass = productVisualClasses[product.slug];
  const productUrl = new URL(`/products/${product.slug}`, getSiteUrl()).toString();
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    category: product.category,
    image: [new URL(product.images.primary.src, getSiteUrl()).toString()],
    brand: {
      "@type": "Brand",
      name: "Wag & Roam",
    },
    offers: {
      "@type": "Offer",
      price: product.price.replace(/[^\d.]/g, ""),
      priceCurrency: "PHP",
      availability: "https://schema.org/PreOrder",
      url: productUrl,
    },
  };

  return (
    <main className="page-shell product-detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductViewTracker product={product} />
      <RevealSection className="section product-hero">
        <div className="container product-hero-grid">
          <Reveal className="product-gallery" aria-label={`${product.name} gallery`}>
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
          </Reveal>

          <Reveal className="product-hero-copy" delay={0.08} direction="left">
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
              <div className="product-purchase-heading">
                <span className="product-label">Ready for {product.bestFor.toLowerCase()}</span>
                <strong>{product.sellingAngle}</strong>
              </div>

              <AddToCartButton product={product} />

              <p className="product-safe-note">
                Your cart is saved on this device. Checkout payment setup comes
                next.
              </p>

              <div className="product-fit-panel" aria-label="Product fit guidance">
                {fitGuide.map((item) => (
                  <article className="product-fit-item" key={item.title}>
                    <span>{item.title}</span>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>

              <div className="badge-row" aria-label="Product trust notes">
                {product.trustElements.map((element) => (
                  <span className="trust-badge" key={element}>
                    {element}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </RevealSection>

      <RevealSection className="section section-muted">
        <div className="container">
          <Stagger className="product-info-grid">
            <StaggerItem>
              <article className="info-card">
                <span className="product-label">Best for</span>
                <h3>{product.bestFor}</h3>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="info-card">
                <span className="product-label">Solves</span>
                <h3>{product.mainBenefit}</h3>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="info-card">
                <span className="product-label">Good fit if</span>
                <p>{product.idealCustomer}</p>
              </article>
            </StaggerItem>
          </Stagger>
        </div>
      </RevealSection>

      <RevealSection className="section">
        <div className="container product-section-layout">
          <Reveal className="section-heading">
            <p className="eyebrow">Features</p>
            <h2>Simple details that support outdoor routines.</h2>
            <p>
              The focus is practical use during walks, parks, errands, and
              travel days rather than complicated gear.
            </p>
          </Reveal>

          <Stagger className="feature-grid" delay={0.08}>
            {product.features.map((feature, index) => (
              <StaggerItem key={feature}>
                <article className="feature-card">
                  <span aria-hidden="true">{index + 1}</span>
                  <p>{feature}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </RevealSection>

      <RevealSection className="section section-muted">
        <div className="container product-section-layout">
          <Reveal className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>A simple routine from pack to reset.</h2>
          </Reveal>

          <Stagger className="steps-grid" delay={0.08}>
            {routineSteps.map((step, index) => (
              <StaggerItem key={step.title}>
                <article className="step-card">
                  <span>{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </RevealSection>

      <RevealSection className="section">
        <Stagger className="container product-notes-grid">
          <StaggerItem>
            <article className="note-card">
              <h2>What's included</h2>
              <ul className="product-detail-list">
                {product.whatsIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </StaggerItem>
          <StaggerItem>
            <article className="note-card">
              <h2>Care notes</h2>
              <ul className="product-detail-list">
                {product.careNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </article>
          </StaggerItem>
          <StaggerItem>
            <article className="note-card">
              <h2>Shipping and returns</h2>
              <p>
                Shipping timelines, return guidance, and support details stay
                linked before checkout. Final live-order details should be
                confirmed before payment is enabled.
              </p>
            </article>
          </StaggerItem>
        </Stagger>
      </RevealSection>

      <RevealSection className="section section-muted">
        <div className="container product-section-layout">
          <Reveal className="section-heading">
            <p className="eyebrow">Product FAQ</p>
            <h2>Helpful details before choosing.</h2>
          </Reveal>

          <Stagger className="faq-grid" delay={0.08}>
            {relatedFaqs.map((faq) => (
              <StaggerItem key={faq.question}>
                <details className="faq-card faq-accordion">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </RevealSection>

      <RevealSection className="section">
        <div className="container related-bundle-card">
          <div className="section-heading">
            <p className="eyebrow">Pair it with</p>
            <h2>{relatedBundle.name}</h2>
            <p>{relatedBundle.description}</p>
          </div>
          <Link className="button button-secondary" href={relatedBundle.href}>
            View Routine Options
          </Link>
        </div>
      </RevealSection>

      <div className="mobile-sticky-cta">
        <span>
          <small>{product.bestFor}</small>
          {product.price}
        </span>
        <AddToCartButton product={product} label="Add to Cart" />
      </div>
    </main>
  );
}
