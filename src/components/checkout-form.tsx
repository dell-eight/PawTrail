"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCart } from "@/components/cart-provider";
import { trackBeginCheckout } from "@/lib/analytics";

const trustNotes = [
  "Checkout preview only",
  "No payment collected yet",
  "Cart saved on this device",
  "Policies linked before ordering",
];

const checkoutSteps = [
  "Review cart",
  "Add contact details",
  "Confirm policies",
];

function formatPeso(amount: number) {
  return `₱${amount.toLocaleString("en-PH")}`;
}

export function CheckoutForm() {
  const { items, itemCount, openCart, subtotal } = useCart();
  const hasTrackedBeginCheckout = useRef(false);

  useEffect(() => {
    if (!hasTrackedBeginCheckout.current && items.length > 0) {
      trackBeginCheckout(items, subtotal);
      hasTrackedBeginCheckout.current = true;
    }
  }, [items, subtotal]);

  return (
    <main className="page-shell">
      <section className="section checkout-hero">
        <div className="container checkout-hero-layout">
          <div className="section-heading">
            <p className="eyebrow">Checkout</p>
            <h1>Review your pet walk kit.</h1>
            <p className="lede">
              This page previews the checkout flow only. Payment is
              intentionally not connected yet, and no order is submitted.
            </p>
          </div>

          <div className="checkout-trust-panel" aria-label="Checkout trust notes">
            {trustNotes.map((note) => (
              <span className="trust-badge" key={note}>
                {note}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section checkout-status-section">
        <div className="container checkout-status-card">
          <div>
            <p className="eyebrow">Checkout status</p>
            <h2>Preview mode is active.</h2>
            <p>
              You can review the flow and cart summary, but this page will not
              submit customer details, process payment, or create an order.
            </p>
          </div>
          <ol className="checkout-step-list" aria-label="Checkout preview steps">
            {checkoutSteps.map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container checkout-layout">
          <form
            className="checkout-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <section className="checkout-card">
              <div className="checkout-card-heading">
                <p className="eyebrow">Customer information</p>
                <h2>Contact details preview</h2>
              </div>

              <div className="checkout-field-grid">
                <label>
                  Full name
                  <input name="fullName" type="text" autoComplete="name" />
                </label>
                <label>
                  Email address
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                  />
                </label>
                <label>
                  Mobile number
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </label>
              </div>
            </section>

            <section className="checkout-card">
              <div className="checkout-card-heading">
                <p className="eyebrow">Shipping information</p>
                <h2>Delivery address preview</h2>
              </div>

              <div className="checkout-field-grid">
                <label className="checkout-field-full">
                  Street address
                  <input name="address" type="text" autoComplete="street-address" />
                </label>
                <label>
                  City
                  <input name="city" type="text" autoComplete="address-level2" />
                </label>
                <label>
                  Province / region
                  <input name="region" type="text" autoComplete="address-level1" />
                </label>
                <label>
                  Postal code
                  <input
                    name="postalCode"
                    type="text"
                    autoComplete="postal-code"
                    inputMode="numeric"
                  />
                </label>
              </div>
            </section>

            <section className="checkout-card">
              <div className="checkout-card-heading">
                <p className="eyebrow">Payment method</p>
                <h2>Payment setup pending</h2>
              </div>
              <p>
                Payment options will be shown only after a real provider is
                connected. No card details are collected or stored on this page.
              </p>
            </section>

            <section className="checkout-card">
              <div className="checkout-card-heading">
                <p className="eyebrow">Policies</p>
                <h2>Before placing an order</h2>
              </div>
              <label className="policy-check">
                <input type="checkbox" name="policyAgreement" />
                <span>
                  The final checkout should reference the{" "}
                  <Link href="/shipping-policy">Shipping Policy</Link>,{" "}
                  <Link href="/refund-policy">Refund Policy</Link>, and{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>.
                </span>
              </label>
            </section>

            <button className="button button-primary button-full" type="submit" disabled>
              Payment Setup Pending
            </button>
            <p className="checkout-form-note" aria-live="polite" role="status">
              This checkout form is a safe pre-launch UI foundation only. It
              does not submit orders, process payments, or store customer
              details yet.
            </p>
          </form>

          <aside className="order-summary" aria-label="Order summary">
            <div className="checkout-card-heading">
              <p className="eyebrow">Order summary</p>
              <h2>{itemCount > 0 ? `${itemCount} item kit` : "Cart is empty"}</h2>
            </div>

            {items.length > 0 ? (
              <div className="summary-item-list">
                {items.map((item) => (
                  <article className="summary-item" key={item.product.id}>
                    <div>
                      <h3>{item.product.name}</h3>
                      <p>
                        Qty {item.quantity} × {item.product.price}
                      </p>
                    </div>
                    <strong>
                      {formatPeso(
                        Number(item.product.price.replace(/[^\d]/g, "")) *
                          item.quantity,
                      )}
                    </strong>
                  </article>
                ))}
              </div>
            ) : (
              <div className="summary-empty">
                <p>
                  Your cart is empty. Compare the essentials or open the cart
                  drawer before reviewing checkout.
                </p>
                <div className="summary-action-row">
                  <Link className="button button-secondary" href="/shop">
                    Compare Essentials
                  </Link>
                  <button
                    className="button button-secondary"
                    type="button"
                    onClick={openCart}
                  >
                    Open Cart
                  </button>
                </div>
              </div>
            )}

            <div className="summary-total">
              <span>Subtotal</span>
              <strong>{formatPeso(subtotal)}</strong>
            </div>

            <p className="support-note">
              Review shipping, refund, and privacy details before live checkout
              is enabled.
            </p>
            <div className="summary-policy-links" aria-label="Checkout policy links">
              <Link href="/shipping-policy">Shipping</Link>
              <Link href="/refund-policy">Refunds</Link>
              <Link href="/privacy-policy">Privacy</Link>
            </div>
            {items.length > 0 ? (
              <button
                className="button button-secondary button-full"
                type="button"
                onClick={openCart}
              >
                Edit Cart
              </button>
            ) : null}
          </aside>
        </div>
      </section>
    </main>
  );
}
