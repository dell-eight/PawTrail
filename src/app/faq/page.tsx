import type { Metadata } from "next";
import Link from "next/link";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "FAQ | Wag & Roam Pet Walk & Travel Essentials",
  description:
    "Answers to common Wag & Roam questions about checkout, shipping, product care, bundles, tracking, and returns.",
  path: "/faq",
});

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Shipping timelines will be shown before checkout accepts live orders. Final delivery estimates and courier details should be visible before customers place real orders.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Checkout is currently a preview and does not collect card details or process payment. Accepted payment methods should appear once the payment provider is connected.",
  },
  {
    question: "Can I use these products for cats?",
    answer:
      "Some products may be useful for cats during travel or outdoor breaks, depending on your pet's size and routine. Always choose what fits your pet comfortably.",
  },
  {
    question: "How do I care for the products?",
    answer:
      "Follow the care notes on each product page. For reusable pieces, clean as needed and let items dry fully before storage. Supplier instructions should be confirmed before live selling.",
  },
  {
    question: "What if my item arrives damaged?",
    answer:
      "Support should ask for the order number, checkout email, item name, and clear photos. Final refund or replacement steps should be published before live orders.",
  },
  {
    question: "Do you offer bundles?",
    answer:
      "Yes. The site includes simple outing routines such as the Daily Walk Kit, Travel Day Kit, and Complete Outing Routine. Bundle availability may vary during launch.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Tracking details should be provided once courier and fulfillment steps are confirmed. The tracking process should be available before accepting real orders.",
  },
  {
    question: "Do you accept returns or refunds?",
    answer:
      "The refund policy page explains the information customers should expect to see. The final refund window and eligible issue process should be confirmed before live payment is enabled.",
  },
];

export default function FaqPage() {
  return (
    <main className="page-shell">
      <section className="section content-hero">
        <div className="container section-heading">
          <p className="eyebrow">FAQ</p>
          <h1>Questions before your first order?</h1>
          <p className="lede">
            Clear answers for product care, checkout, shipping, outing
            routines, and order support.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container faq-list">
          {faqs.map((faq) => (
            <details className="faq-card faq-accordion" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container related-bundle-card">
          <div className="section-heading">
            <p className="eyebrow">Need help?</p>
            <h2>Contact support before checkout.</h2>
            <p>
              Use the contact page for order questions, product questions, or
              launch details that still need confirmation.
            </p>
          </div>
          <Link className="button button-secondary" href="/contact">
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}
