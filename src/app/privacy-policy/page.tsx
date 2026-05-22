import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Privacy Policy | Pet Walk & Travel Accessories",
  description:
    "Privacy policy details for customer information, order support, payment providers, and store contact information.",
});

const sections = [
  {
    title: "Information collected",
    body: "When checkout is connected, the store may need customer details such as name, email, phone number, shipping address, and order details to process purchases and provide support.",
  },
  {
    title: "How information is used",
    body: "Customer details should only be used for checkout, delivery, order support, fraud prevention, and required business records.",
  },
  {
    title: "Payment provider",
    body: "Payment provider details are not connected yet. Once selected, name the provider here and keep card handling inside the secure provider flow rather than collecting card details manually on this site.",
  },
  {
    title: "Analytics and marketing",
    body: "Analytics support is prepared through public environment variables for Google Analytics, Meta Pixel, and TikTok Pixel. These scripts stay disabled while IDs are blank. Before enabling any tracking, publish the final disclosure for analytics, pixels, email tools, and advertising platforms.",
  },
  {
    title: "Business contact",
    body: "Add the final support email and any required business contact details for privacy questions before accepting real orders.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell">
      <section className="section content-hero">
        <div className="container section-heading">
          <p className="eyebrow">Privacy Policy</p>
          <h1>Privacy details for checkout and support.</h1>
          <p className="lede">
            This pre-launch privacy page explains how customer information
            should be handled once checkout, support, and analytics are
            connected.
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
