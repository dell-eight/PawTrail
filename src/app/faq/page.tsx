import type { Metadata } from "next";
import Link from "next/link";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "FAQ | Pet Walk & Travel Accessories",
  description:
    "Answers to common questions about shipping, payments, product care, bundles, tracking, and returns.",
});

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Shipping timelines are being finalized before live checkout opens. The final delivery estimate, courier details, and tracking process should be shown before customers place real orders.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Payment provider setup is still pending. The checkout page is currently a safe preview and does not collect card details or process payment.",
  },
  {
    question: "Can I use these products for cats?",
    answer:
      "Some products may be useful for cats during travel or outdoor breaks, depending on your pet's size and routine. Always choose what fits your pet comfortably.",
  },
  {
    question: "How do I clean the bottles and bowls?",
    answer:
      "Rinse after use, clean with mild soap when needed, and let items dry fully before storage. Product-specific supplier care notes should be confirmed before live selling.",
  },
  {
    question: "What if my item arrives damaged?",
    answer:
      "The support process should ask customers for their order number, email used at checkout, item name, and clear photos. Final review and refund or replacement steps should be published before live orders.",
  },
  {
    question: "Do you offer bundles?",
    answer:
      "Yes. The site includes simple bundle options such as the Daily Walk Kit, Weekend Travel Kit, and Complete Outdoor Kit. Bundle availability may vary during launch.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Tracking details should be provided once the courier and fulfillment process are confirmed. The exact tracking process should be available before accepting real orders.",
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
            Clear answers for product care, checkout, shipping, bundles, and
            order support.
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
              launch policy details that still need confirmation.
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
