# Phase 08: Interactions And Microanimations

## 1. Phase Goal

Add tasteful interaction polish without making the site feel gimmicky or slow.

## 2. What Problem This Phase Solves

The website should feel lightly interactive and premium, but pet ecommerce needs speed, trust, and mobile usability more than showy motion.

## 3. UI/UX Recommendations

- Standardize hover, focus, active, and selected states.
- Use subtle card elevation, border changes, and color transitions.
- Make product finder and bundle selector states feel clear.
- Add a simple FAQ accordion style if needed.
- Consider a sticky CTA only where it helps mobile conversion, especially product pages.
- Keep all interactions understandable without motion.

## 4. Interaction Recommendations

- Use 150-300ms durations.
- Prefer `transform`, `opacity`, `border-color`, `background-color`, and `box-shadow`.
- Avoid infinite animations except loading states.
- Respect `prefers-reduced-motion`.
- Avoid animation that changes layout height unexpectedly.
- Do not rely on hover for important information.

## 5. Files Likely To Be Created Or Edited

- `src/app/globals.css`
- `src/components/product-card.tsx`
- `src/components/product-selector.tsx`
- `src/components/bundle-section.tsx`
- `src/components/cart-provider.tsx`
- `src/app/products/[slug]/page.tsx`

## 6. Exact Codex Prompt To Execute This Phase

```text
Use the ui-ux-pro-max skill. Complete Phase 08 only from docs/redesign-phases/phase-08-interactions-and-microanimations.md. First recommend tasteful interactions and list files before editing. Wait for approval. Keep motion subtle, fast, accessible, and mobile-friendly.
```

## 7. Expected Output

- Consistent hover/focus/active states.
- Better selected states for interactive product sections.
- Smooth but restrained cart, card, button, and accordion polish.
- Reduced-motion support remains intact.

## 8. Testing Checklist

- Run `npm run typecheck`.
- Test keyboard focus on links, buttons, radio-style selectors, and FAQ summaries.
- Test reduced motion.
- Confirm no layout shift from hover.
- Confirm mobile tap states still feel responsive.

## 9. Mistakes To Avoid

- Do not add scroll-jacking.
- Do not add slow 500ms+ UI transitions.
- Do not animate decorative elements forever.
- Do not make hover-only interactions required.

## 10. Approval Checkpoint

Stop after interaction polish and ask for approval before Phase 09.

