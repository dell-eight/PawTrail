import type { Metadata } from "next";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Contact | Pet Walk & Travel Accessories",
  description:
    "Contact support with questions about pet walk and travel accessories, product details, orders, or launch policy information.",
});

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="section content-hero">
        <div className="container section-heading">
          <p className="eyebrow">Contact</p>
          <h1>Support for simple pet travel essentials.</h1>
          <p className="lede">
            Send product questions, order questions, or launch policy questions
            here before checkout is fully connected.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container contact-layout">
          <form className="contact-form">
            <div className="checkout-card-heading">
              <p className="eyebrow">Contact form</p>
              <h2>Message support</h2>
            </div>
            <label>
              Name
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" autoComplete="email" />
            </label>
            <label>
              Order number, if available
              <input type="text" name="orderNumber" />
            </label>
            <label>
              Message
              <textarea name="message" rows={6} />
            </label>
            <button className="button button-primary button-full" type="button" disabled>
              Form Submission Setup Pending
            </button>
            <p className="checkout-form-note">
              This pre-launch form is not connected yet, so it does not submit
              or store messages.
            </p>
          </form>

          <aside className="support-panel">
            <article className="content-card">
              <h2>Support email</h2>
              <p>
                The final support inbox should be added here before accepting
                orders. Do not collect live orders until customers have a real
                contact method.
              </p>
            </article>
            <article className="content-card">
              <h2>Expected response time</h2>
              <p>
                Response timing should be published after support capacity is
                confirmed. Avoid promising a reply window until the inbox and
                team process are ready.
              </p>
            </article>
            <article className="content-card">
              <h2>Order support instructions</h2>
              <p>
                Include your order number, email used at checkout, item name,
                and photos if an item arrives damaged or incorrect.
              </p>
            </article>
          </aside>
        </div>
      </section>
    </main>
  );
}
