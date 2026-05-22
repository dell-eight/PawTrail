# Phase 03: Hero Section

## 1. Phase Goal

Make the first viewport feel unmistakably like Wag & Roam: premium, calm, useful, mobile-first, and product-led.

## 2. What Problem This Phase Solves

The current hero is functional but still generic. It should more clearly show the brand, the three-product promise, and the main shopping path.

## 3. UI/UX Recommendations

- Use a headline that names the product category plainly, such as “Premium walk and travel essentials for calmer pet outings.”
- Mention the three product types in concise supporting copy.
- Keep primary CTA focused on shopping the collection.
- Add a secondary CTA for product finder or comparison.
- Use a strong product/lifestyle visual above the fold, ideally showing actual product context.
- Keep hero height mobile-friendly so the next section is hinted without excessive scrolling.
- Include small trust cues, such as “Made for daily walks,” “Easy travel packing,” or “Simple after-walk cleanup.”

## 4. Interaction Recommendations

- Use button hover/press polish only: color, border, shadow, tiny translate.
- Avoid animated hero text, parallax, large blur layers, or constant motion.
- Ensure hero CTAs are at least 44px high.

## 5. Files Likely To Be Created Or Edited

- `src/app/page.tsx`
- `src/app/globals.css`
- `public/images/landing/*` if image assets are updated later

## 6. Exact Codex Prompt To Execute This Phase

```text
Use the ui-ux-pro-max skill. Complete Phase 03 only from docs/redesign-phases/phase-03-hero-section.md. First propose the Wag & Roam hero copy, layout, CTA hierarchy, and visual direction. List files before editing and wait for my approval. Keep the hero minimalist, premium, mobile-first, and fast.
```

## 7. Expected Output

- Stronger hero copy and CTA hierarchy.
- Cleaner mobile first viewport.
- Better brand and product clarity.
- Hero visual direction that supports ecommerce trust.

## 8. Testing Checklist

- Verify LCP image uses Next.js image best practices if applicable.
- Check hero at 375px and 390px widths.
- Confirm CTAs fit without wrapping awkwardly.
- Confirm keyboard focus order starts logically.
- Confirm reduced motion is respected.

## 9. Mistakes To Avoid

- Do not use vague lifestyle-only copy.
- Do not crop product visuals so much that users cannot understand the product.
- Do not add more than two primary hero actions.
- Do not make the hero so tall that products feel buried.

## 10. Approval Checkpoint

Stop after hero work and ask for approval before Phase 04.

