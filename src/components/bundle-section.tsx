"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { products, type Product } from "@/data/products";

type Bundle = {
  id: string;
  name: string;
  productSlugs: string[];
  bestUseCase: string;
  savingsMessage: string;
  ctaText: string;
  ctaHref: string;
};

const bundles: Bundle[] = [
  {
    id: "daily-walk-kit",
    name: "Daily Walk Kit",
    productSlugs: [
      "walksip-portable-dog-water-bottle",
      "foldbowl-collapsible-pet-travel-bowl",
    ],
    bestUseCase:
      "Best for short walks, park breaks, and simple hydration or clean-stop moments.",
    savingsMessage: "Daily walk routine",
    ctaText: "Choose Daily Walk Kit",
    ctaHref: "/products/walksip-portable-dog-water-bottle",
  },
  {
    id: "weekend-travel-kit",
    name: "Travel Day Kit",
    productSlugs: [
      "trailpack-2-in-1-pet-water-treat-bottle",
      "walksip-portable-dog-water-bottle",
      "foldbowl-collapsible-pet-travel-bowl",
    ],
    bestUseCase:
      "Best for longer walks, road trips, and pet-friendly errands when you want water, cleanup, and carry handled together.",
    savingsMessage: "Longer outing routine",
    ctaText: "Choose Travel Day Kit",
    ctaHref: "/products/trailpack-2-in-1-pet-water-treat-bottle",
  },
  {
    id: "complete-outdoor-kit",
    name: "Complete Outing Routine",
    productSlugs: products.map((product) => product.slug),
    bestUseCase:
      "Best for pet parents who want hydration, cleaner stops, and organized carry ready together.",
    savingsMessage: "Hydrate, clean, carry",
    ctaText: "Compare Complete Routine",
    ctaHref: "/shop",
  },
];

function getBundleProducts(productSlugs: string[]) {
  return productSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is Product => Boolean(product));
}

function getProductPriceValue(product: Product) {
  return Number(product.price.replace(/[^\d.]/g, ""));
}

function formatEstimatedTotal(bundleProducts: Product[]) {
  const total = bundleProducts.reduce(
    (sum, product) => sum + getProductPriceValue(product),
    0,
  );

  return `PHP ${total.toLocaleString("en-PH")}`;
}

export function BundleSection() {
  const [selectedBundleId, setSelectedBundleId] = useState(bundles[0].id);
  const selectedBundle =
    bundles.find((bundle) => bundle.id === selectedBundleId) ?? bundles[0];
  const selectedProducts = useMemo(
    () => getBundleProducts(selectedBundle.productSlugs),
    [selectedBundle],
  );

  return (
    <section className="section" id="bundles">
      <div className="container bundle-layout">
        <div className="section-heading">
          <p className="eyebrow">Kit ideas</p>
          <h2>Build your pet outing routine around the day.</h2>
          <p>
            Pair the essentials by how you hydrate, clean up, and carry what
            your pet needs outside the home.
          </p>
        </div>

        <div className="bundle-selector-panel">
          <fieldset className="bundle-choice-list">
            <legend>Choose a routine idea</legend>
            {bundles.map((bundle) => (
              <label
                className="bundle-choice"
                data-selected={bundle.id === selectedBundleId}
                htmlFor={`bundle-choice-${bundle.id}`}
                key={bundle.id}
              >
                <input
                  checked={bundle.id === selectedBundleId}
                  id={`bundle-choice-${bundle.id}`}
                  name="bundle-choice"
                  onChange={() => setSelectedBundleId(bundle.id)}
                  type="radio"
                  value={bundle.id}
                />
                <div className="bundle-card-heading">
                  <span className="product-label">{bundle.savingsMessage}</span>
                  <h3>{bundle.name}</h3>
                </div>

                <p>{bundle.bestUseCase}</p>

                <span className="bundle-choice-meta">
                  {bundle.productSlugs.length} products included
                </span>
              </label>
            ))}
          </fieldset>

          <article className="bundle-card bundle-summary" aria-live="polite">
            <div className="bundle-card-heading">
              <span className="product-label">Selected kit</span>
              <h3>{selectedBundle.name}</h3>
            </div>

            <ul className="bundle-product-list" aria-label="Included products">
              {selectedProducts.map((product) => (
                <li key={product.id}>
                  <span>{product.name}</span>
                  <strong>{product.price}</strong>
                </li>
              ))}
            </ul>

            <div className="bundle-total-row">
              <span>Estimated total</span>
              <strong>{formatEstimatedTotal(selectedProducts)}</strong>
            </div>

            <p>{selectedBundle.bestUseCase}</p>

            <Link
              className="button button-primary button-full"
              href={selectedBundle.ctaHref}
            >
              {selectedBundle.ctaText}
            </Link>
          </article>
        </div>

        <p className="bundle-note">
          Bundle availability and final product pairings can be finalized before
          launch.
        </p>
      </div>
    </section>
  );
}
