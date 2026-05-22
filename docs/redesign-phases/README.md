# Wag & Roam Redesign Phases

This folder breaks the Wag & Roam ecommerce redesign into small, approval-based phases. The goal is a minimalist, premium, mobile-first site for pet walk and travel accessories that feels calm, trustworthy, and lightly interactive.

## Full Redesign Roadmap

| Phase | File | What it accomplishes |
|---|---|---|
| 00 | `phase-00-ui-ux-audit.md` | Reviews the current PetStore implementation and identifies the highest-impact UX gaps before editing code. |
| 01 | `phase-01-design-system.md` | Defines brand tokens, typography, spacing, radii, buttons, cards, and interaction rules for Wag & Roam. |
| 02 | `phase-02-homepage-layout.md` | Restructures the homepage into a conversion-focused journey from problem to product to trust to CTA. |
| 03 | `phase-03-hero-section.md` | Refines the first viewport for stronger brand clarity, product relevance, and mobile conversion. |
| 04 | `phase-04-product-showcase.md` | Reworks product cards and product reveal sections around the three Wag & Roam products. |
| 05 | `phase-05-trust-conversion-sections.md` | Adds trust, support, value, policy, and confidence sections without clutter. |
| 06 | `phase-06-product-pages.md` | Improves product detail pages for comparison, benefits, FAQs, and add-to-cart confidence. |
| 07 | `phase-07-cart-checkout-flow.md` | Polishes cart and checkout flow for mobile usability, trust, and accessibility. |
| 08 | `phase-08-interactions-and-microanimations.md` | Adds tasteful, fast, accessible interactions without heavy motion. |
| 09 | `phase-09-mobile-responsive-polish.md` | Tunes layouts, spacing, sticky CTAs, and touch targets across mobile breakpoints. |
| 10 | `phase-10-accessibility-seo-performance.md` | Audits accessibility, metadata, images, motion preferences, and performance. |
| 11 | `phase-11-final-review-launch-readiness.md` | Performs final QA and launch readiness checks before live checkout or release. |

## Recommended Phase Order

Follow the phases in numeric order. Start with Phase 00, then wait for approval before Phase 01. The redesign should move from strategy to tokens, then layout, then individual sections, then conversion flows, polish, and final QA.

## Rules For Codex

- Complete only one phase at a time.
- Do not continue without my approval.
- Explain recommendations before editing.
- List files before editing.
- Summarize changed files after each phase.
- Run tests/checks when possible.
- Do not delete files without asking.
- Do not change too much unless the current implementation is weak.
- Keep the design minimalist, premium, mobile-first, and lightly interactive.
- Use the `ui-ux-pro-max` skill for UI/UX decisions.
- Avoid unnecessary animations that hurt performance, accessibility, or mobile usability.

## Global Design Direction

Wag & Roam should feel clean, calm, premium, and practical. Use soft beige, sage green, cream, and warm gray as the foundation, with deeper forest or charcoal tones for readable text and primary CTAs. Interactions should feel quiet and polished: 150-300ms transitions, visible focus states, soft hover feedback, accessible accordions, and restrained reveal patterns.

## Current Implementation Notes

The site already has a usable Next.js ecommerce structure: homepage, shop page, product detail pages, cart drawer, checkout preview, FAQ, policy pages, product data, analytics helpers, and global CSS. The main redesign gaps are brand alignment, product lineup alignment, product imagery/presentation, ecommerce trust hierarchy, checkout confidence, and refinement of mobile-first spacing and interactions.

