import Link from "next/link";

const footerLinks = [
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/contact", label: "Contact" },
];

const footerTrustBadges = [
  { href: "/checkout", label: "Checkout setup clearly marked" },
  { href: "/refund-policy", label: "Clear refund policy" },
  { href: "/contact", label: "Support available before launch" },
  { href: "/shop", label: "Pet-friendly essentials" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand stack">
          <Link className="brand-mark" href="/">
            <span className="brand-symbol" aria-hidden="true" />
            <span>
              <span className="brand-name">Wag & Roam</span>
              <span className="brand-tagline">Walk & travel essentials</span>
            </span>
          </Link>
          <p>
            Calm, practical essentials for easier pet walks and cleaner travel
            days.
          </p>
        </div>

        <div className="footer-column">
          <h2 className="footer-heading">Support</h2>
          <nav className="footer-links" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-column">
          <h2 className="footer-heading">Trust</h2>
          <div className="badge-row">
            {footerTrustBadges.map((badge) => (
              <Link className="trust-badge" href={badge.href} key={badge.label}>
                {badge.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
