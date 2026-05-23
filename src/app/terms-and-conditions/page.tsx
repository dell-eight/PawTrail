import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Terms & Conditions | Pet Walk & Travel Accessories",
  description:
    "Terms and conditions for using the pet walk and travel accessories store, product information, orders, shipping, and refunds.",
  path: "/terms-and-conditions",
});

const sections = [
  {
    title: "Store use",
    body: "Customers should use the site for personal shopping and provide accurate information when checkout becomes available.",
  },
  {
    title: "Product information",
    body: "Product descriptions are written to be practical and beginner-friendly. Final supplier specifications, care details, and product limitations should be confirmed before live selling.",
  },
  {
    title: "Orders and payment",
    body: "Payment processing is not connected yet. Orders should not be treated as final until a real payment provider, confirmation flow, and fulfillment process are active.",
  },
  {
    title: "Shipping and refunds",
    body: "Shipping and refund information should be read together with the Shipping Policy and Refund Policy. Timelines, return requirements, and support steps should be finalized before accepting orders.",
  },
  {
    title: "Business contact details",
    body: "Add the final support email, business name if applicable, and any required contact details before launch.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="page-shell">
      <section className="section content-hero">
        <div className="container section-heading">
          <p className="eyebrow">Terms & Conditions</p>
          <h1>Store terms for a safe pre-launch experience.</h1>
          <p className="lede">
            These plain-language terms explain how the store should work once
            checkout, payment, fulfillment, and support are fully connected.
          </p>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container policy-stack">
          {sections.map((section) => (
            <article className="policy-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
