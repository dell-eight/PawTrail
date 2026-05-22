"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";

type SelectorOption = {
  id: string;
  need: string;
  label: string;
  productSlug?: string;
  recommendationTitle?: string;
  reason: string;
  followUp: string;
  ctaText: string;
  ctaHref: string;
};

const selectorOptions: SelectorOption[] = [
  {
    id: "hydration-outside",
    need: "Hydration outside",
    label: "My pet gets thirsty on walks.",
    productSlug: "walksip-portable-dog-water-bottle",
    reason:
      "A built-in bowl makes quick water breaks easier when you are close to home, at the park, or running errands.",
    followUp: "Best first pick for daily walks and short outdoor breaks.",
    ctaText: "View WalkSip Bottle",
    ctaHref: "/products/walksip-portable-dog-water-bottle",
  },
  {
    id: "carrying-essentials",
    need: "Carrying essentials",
    label: "I need water and small treats together.",
    productSlug: "trailpack-2-in-1-pet-water-treat-bottle",
    reason:
      "Water and treats stay together, so longer outings need fewer loose containers in your bag.",
    followUp: "Best for road trips, park days, and longer errands.",
    ctaText: "View TrailPack Bottle",
    ctaHref: "/products/trailpack-2-in-1-pet-water-treat-bottle",
  },
  {
    id: "cleaner-outdoor-stops",
    need: "Cleaner stops after walks",
    label: "I want a cleaner food or water spot.",
    productSlug: "foldbowl-collapsible-pet-travel-bowl",
    reason:
      "A foldable bowl gives you a compact backup for food or water without taking much space.",
    followUp: "Best budget add-on for travel bags, cafes, parks, and cars.",
    ctaText: "View FoldBowl",
    ctaHref: "/products/foldbowl-collapsible-pet-travel-bowl",
  },
  {
    id: "complete-kit",
    need: "Full walk/travel kit",
    label: "I want the most prepared setup.",
    recommendationTitle: "Bundle all 3 products",
    reason:
      "Pair hydration, snack storage, and a compact bowl when you want the most prepared setup for walks and travel.",
    followUp: "Best when you want one simple kit instead of deciding item by item.",
    ctaText: "Compare All 3 Products",
    ctaHref: "/shop",
  },
];

function getProductName(productSlug?: string) {
  return products.find((product) => product.slug === productSlug)?.name;
}

export function ProductSelector() {
  const [selectedId, setSelectedId] = useState(selectorOptions[0].id);
  const selectedOption =
    selectorOptions.find((option) => option.id === selectedId) ??
    selectorOptions[0];
  const selectedProductName = getProductName(selectedOption.productSlug);
  const recommendationTitle =
    selectedProductName ?? selectedOption.recommendationTitle;

  return (
    <section className="section section-muted" id="product-selector">
      <div className="container selector-layout">
        <div className="section-heading">
          <p className="eyebrow">Quick product finder</p>
          <h2>Choose by the problem you want to solve.</h2>
          <p>
            Answer one simple question and get a practical recommendation from
            the three-product collection.
          </p>
        </div>

        <div className="selector-panel">
          <fieldset className="selector-quiz">
            <legend>What do you need most for walks or travel?</legend>
            <div className="selector-options">
              {selectorOptions.map((option) => (
                <label
                  className="selector-option"
                  data-selected={option.id === selectedId}
                  htmlFor={`selector-option-${option.id}`}
                  key={option.id}
                >
                  <input
                    checked={option.id === selectedId}
                    id={`selector-option-${option.id}`}
                    name="pet-outdoor-need"
                    onChange={() => setSelectedId(option.id)}
                    type="radio"
                    value={option.id}
                  />
                  <span>{option.need}</span>
                  <strong>{option.label}</strong>
                </label>
              ))}
            </div>
          </fieldset>

          <article
            aria-live="polite"
            className="selector-result"
            id="selector-recommendation"
          >
            <span className="product-label">Recommended</span>
            <h3>{recommendationTitle}</h3>
            <p>{selectedOption.reason}</p>
            <p className="selector-result-note">{selectedOption.followUp}</p>

            {selectedOption.id === "complete-kit" ? (
              <ul className="selector-included-list" aria-label="Included products">
                {products.map((product) => (
                  <li key={product.id}>{product.name}</li>
                ))}
              </ul>
            ) : null}

            <Link className="button button-primary" href={selectedOption.ctaHref}>
              {selectedOption.ctaText}
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
