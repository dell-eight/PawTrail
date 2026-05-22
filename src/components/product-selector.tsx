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
    need: "Hydrate",
    label: "My pet needs quick water breaks.",
    productSlug: "walksip-portable-dog-water-bottle",
    reason:
      "A built-in drinking setup keeps hydration easy when you are close to home, at the park, or running errands.",
    followUp: "Best first pick for daily walks and short outdoor breaks.",
    ctaText: "View Hydration Pick",
    ctaHref: "/products/walksip-portable-dog-water-bottle",
  },
  {
    id: "carrying-essentials",
    need: "Clean",
    label: "I want cleaner returns after walks.",
    productSlug: "foldbowl-collapsible-pet-travel-bowl",
    reason:
      "A compact cleanup pack helps light outdoor mess feel easier before you get back in the car or step inside.",
    followUp: "Best for parks, errands, car rides, and travel days.",
    ctaText: "View Cleanup Pick",
    ctaHref: "/products/foldbowl-collapsible-pet-travel-bowl",
  },
  {
    id: "cleaner-outdoor-stops",
    need: "Carry",
    label: "I want fewer loose walk-day items.",
    productSlug: "trailpack-2-in-1-pet-water-treat-bottle",
    reason:
      "A carry pouch keeps small essentials grouped so longer outings feel less scattered.",
    followUp: "Best for road trips, park days, and longer errands.",
    ctaText: "View Carry Pick",
    ctaHref: "/products/trailpack-2-in-1-pet-water-treat-bottle",
  },
  {
    id: "complete-kit",
    need: "Full routine",
    label: "I want the most prepared setup.",
    recommendationTitle: "Compare the full Wag & Roam routine",
    reason:
      "Pair hydration, cleanup, and organized carry when you want the most prepared setup for walks and travel.",
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
          <h2>Choose by the outing job you want to solve.</h2>
          <p>
            Answer one simple question and get a practical recommendation from
            the hydrate, clean, and carry routine.
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
