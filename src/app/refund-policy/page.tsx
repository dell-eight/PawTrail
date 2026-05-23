import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Refund Policy | Pet Walk & Travel Accessories",
  description:
    "Refund policy details for pet walk and travel accessory orders, including damaged items, wrong items, and returns guidance.",
  path: "/refund-policy",
});

const sections = [
  {
    title: "Refund window",
    body: "The final refund window has not been confirmed yet. Before live checkout, publish the number of days customers have to report an eligible issue.",
  },
  {
    title: "Damaged or wrong items",
    body: "Customers should contact support with their order number, email used at checkout, item name, and clear photos. The final review process should explain whether the next step is replacement, refund, or another resolution.",
  },
  {
    title: "Wrong item process",
    body: "If the wrong item is received, customers should keep the item and packaging until support reviews the issue. Publish the final instructions for photos, return needs, and replacement handling before accepting orders.",
  },
  {
    title: "Returns",
    body: "Return requirements are not final yet. State whether return shipping is required, who covers it, and what condition items must be in before live selling starts.",
  },
  {
    title: "Support contact",
    body: "The final support email and contact method should be listed before checkout is enabled. Avoid publishing refund promises that your supplier or payment provider cannot support.",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="page-shell">
      <section className="section content-hero">
        <div className="container section-heading">
          <p className="eyebrow">Refund Policy</p>
          <h1>Refund and issue support before live orders.</h1>
          <p className="lede">
            This page explains the support information customers should expect.
            Final refund windows and return steps should be confirmed before
            real payments are accepted.
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
