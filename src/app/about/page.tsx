import type { Metadata } from "next";
import Link from "next/link";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "About | Pet Walk & Travel Accessories",
  description:
    "Learn about a focused pet walk and travel accessories store built around hydration, cleanup, and organized carry essentials.",
});

const values = [
  {
    title: "Useful first",
    body: "Every product should solve a simple outdoor care problem without adding clutter.",
  },
  {
    title: "Focused collection",
    body: "The launch store stays small on purpose: hydration, cleanup, and organized carry.",
  },
  {
    title: "Clear support",
    body: "Policies, order support, and product details should be easy to find before checkout.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section content-hero">
        <div className="container content-hero-layout">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h1>Built for practical pet parents.</h1>
            <p className="lede">
              We focus on simple, useful pet accessories that make walks,
              trips, and outdoor care easier without adding clutter.
            </p>
          </div>
          <Link className="button button-primary" href="/shop">
            Shop the Essentials
          </Link>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container content-grid">
          {values.map((value) => (
            <article className="content-card" key={value.title}>
              <h2>{value.title}</h2>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
