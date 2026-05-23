"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const { itemCount, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand-mark"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="brand-symbol" aria-hidden="true" />
          <span>
            <span className="brand-name">Wag & Roam</span>
            <span className="brand-tagline">Walk & travel essentials</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="cart-header-button"
            type="button"
            aria-label={`Open cart with ${itemCount} item${
              itemCount === 1 ? "" : "s"
            }`}
            onClick={openCart}
          >
            Cart
            <span>{itemCount}</span>
          </button>

          <button
            className="menu-toggle"
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav ${isMenuOpen ? "mobile-nav-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
      >
        <div className="container mobile-nav-inner">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="mobile-cart-link"
            type="button"
            onClick={() => {
              setIsMenuOpen(false);
              openCart();
            }}
          >
            Cart ({itemCount})
          </button>
        </div>
      </nav>
    </header>
  );
}
