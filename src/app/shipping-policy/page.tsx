import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Shipping Policy | Pet Walk & Travel Accessories",
  description:
    "Shipping policy details for pet walk and travel accessory orders, including delivery timelines, tracking, and address guidance.",
});

export default function ShippingPolicyPage() {
  return (
    <main className="page-shell">
      <PolicyPage
        eyebrow="Shipping Policy"
        title="Shipping details will be confirmed before live checkout."
        sections={[
          {
            title: "Delivery timeline",
            body: "The final delivery range is not confirmed yet. Publish the actual estimated timeline for your target locations only after fulfillment and supplier handling time are verified.",
          },
          {
            title: "Courier and tracking",
            body: "Courier or fulfillment partner details should be listed once selected. Customers should be told when and how tracking details will be shared before live orders are accepted.",
          },
          {
            title: "Order processing",
            body: "Order processing time should be added after supplier handling time is confirmed. The store should not imply instant dispatch unless that process is actually in place.",
          },
          {
            title: "Address issues",
            body: "Customers should review shipping details before checkout. Add the final process for correcting an address before an order is handed to the courier.",
          },
        ]}
      />
    </main>
  );
}

function PolicyPage({
  eyebrow,
  sections,
  title,
}: {
  eyebrow: string;
  title: string;
  sections: { title: string; body: string }[];
}) {
  return (
    <>
      <section className="section content-hero">
        <div className="container section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lede">
            This page is written as a pre-launch policy preview. Final shipping
            timelines, courier details, and support steps should be published
            before accepting real orders.
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
    </>
  );
}
