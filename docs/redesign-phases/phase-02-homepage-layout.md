# Phase 02: Homepage Layout

## 1. Phase Goal

Restructure the homepage into a clear mobile-first ecommerce journey for Wag & Roam.

## 2. What Problem This Phase Solves

The homepage has many useful parts, but the story should become sharper: calm pet outings, three practical products, trust, product comparison, and a simple path to cart.

## 3. UI/UX Recommendations

- Use a conversion journey: hero, product problem, three-product collection, product finder, product kit/bundle, trust, FAQ, final CTA.
- Make the brand name and product category immediately clear in the first viewport.
- Replace generic “3-piece walk collection” messaging with Wag & Roam’s premium walk/travel accessories positioning.
- Ensure the product lineup matches the requested products.
- Keep section headings short and skimmable.
- Use one primary CTA per section.
- Make mobile card stacks compact and easy to scan.

## 4. Interaction Recommendations

- Use smooth anchor scrolling only when reduced motion allows it.
- Use subtle section reveal styles only if they do not delay content.
- Keep product finder interactions tap-first, not hover-dependent.

## 5. Files Likely To Be Created Or Edited

- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/product-selector.tsx`
- `src/components/bundle-section.tsx`
- `src/components/product-card.tsx`
- `src/data/products.ts`

## 6. Exact Codex Prompt To Execute This Phase

```text
Use the ui-ux-pro-max skill. Complete Phase 02 only from docs/redesign-phases/phase-02-homepage-layout.md. First review the current homepage structure and recommend the new homepage section order. List the files you plan to edit and wait for my approval before editing. Keep all changes mobile-first and conversion-focused.
```

## 7. Expected Output

- A clearer homepage section order.
- Better Wag & Roam messaging.
- Product lineup alignment at the homepage level.
- Improved scanability and CTA hierarchy.

## 8. Testing Checklist

- Run `npm run typecheck`.
- Verify homepage renders at 375px, 768px, 1024px, and desktop.
- Confirm no horizontal scroll.
- Confirm CTA anchors work.
- Check that headings are sequential and meaningful.

## 9. Mistakes To Avoid

- Do not add a marketing-heavy landing page that hides shopping.
- Do not overload the homepage with long paragraphs.
- Do not add multiple competing primary CTAs in the same viewport.
- Do not rely on desktop-only product grids.

## 10. Approval Checkpoint

Stop after homepage layout changes and ask for approval before Phase 03.

