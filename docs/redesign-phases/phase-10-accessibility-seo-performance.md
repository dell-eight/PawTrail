# Phase 10: Accessibility, SEO, And Performance

## 1. Phase Goal

Audit and improve accessibility, metadata, image performance, motion preferences, and basic technical quality.

## 2. What Problem This Phase Solves

A premium ecommerce site must be usable, discoverable, and fast. This phase catches issues that visual redesign can accidentally introduce.

## 3. UI/UX Recommendations

- Ensure headings follow a logical order.
- Ensure all product visuals have useful alt text or correct decorative handling.
- Keep body text contrast at 4.5:1 where required.
- Make focus states visible and brand-consistent.
- Use semantic buttons and links correctly.
- Improve metadata for Wag & Roam, product pages, FAQ, and policies.
- Use Next.js image best practices for hero and product visuals when raster images are used.

## 4. Interaction Recommendations

- Verify `prefers-reduced-motion` disables or minimizes animations.
- Ensure cart drawer and mobile nav are keyboard-operable.
- Ensure FAQ accordions are usable with keyboard and screen readers.

## 5. Files Likely To Be Created Or Edited

- `src/lib/seo.ts`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/shop/page.tsx`
- `src/app/products/[slug]/page.tsx`
- `src/components/cart-provider.tsx`
- `src/app/globals.css`
- `public/images/*` if image optimization is needed

## 6. Exact Codex Prompt To Execute This Phase

```text
Use the ui-ux-pro-max skill. Complete Phase 10 only from docs/redesign-phases/phase-10-accessibility-seo-performance.md. First audit accessibility, SEO, and performance risks and list files before editing. Wait for approval. Run typecheck/build when possible and summarize any remaining risks.
```

## 7. Expected Output

- Improved metadata and social sharing basics.
- Better accessibility semantics and focus behavior.
- Reduced-motion support confirmed.
- Image/performance recommendations applied where practical.

## 8. Testing Checklist

- Run `npm run typecheck`.
- Run `npm run build`.
- Test keyboard navigation.
- Test reduced motion.
- Check product and homepage metadata.
- Inspect image sizing, priority usage, and alt text.

## 9. Mistakes To Avoid

- Do not use fake SEO keywords or keyword stuffing.
- Do not mark meaningful product visuals as decorative.
- Do not set every image as priority.
- Do not remove focus rings.

## 10. Approval Checkpoint

Stop after accessibility/SEO/performance work and ask for approval before Phase 11.

