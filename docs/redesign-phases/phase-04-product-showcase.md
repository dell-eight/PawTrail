# Phase 04: Product Showcase

## 1. Phase Goal

Present the three Wag & Roam products clearly and persuasively: water bottle with travel bowl, cleaning product, and essentials carrying product.

## 2. What Problem This Phase Solves

The current product data does not match the requested lineup, and the product cards need stronger ecommerce hierarchy around benefit, use case, price, trust, and action.

## 3. UI/UX Recommendations

- Update product names, benefits, descriptions, features, and trust elements to match the three requested products.
- Give each product a clear role: hydrate, clean, carry.
- Use product cards with consistent visual hierarchy: label, image, product name, benefit, 2-3 bullets, price, add-to-cart, view details.
- Add a simple comparison section by use case.
- Keep product cards equal in rhythm but not forced into awkward equal heights on mobile.
- Include practical trust copy such as easy to clean, compact carry, walk/travel ready, and support details.

## 4. Interaction Recommendations

- Use soft card hover on desktop and clear pressed states on mobile.
- Avoid card hover states that shift surrounding layout.
- Product reveal sections can use simple image/text alternation, not heavy scroll animation.
- Add `aria-live` only where recommendations update dynamically.

## 5. Files Likely To Be Created Or Edited

- `src/data/products.ts`
- `src/components/product-card.tsx`
- `src/components/product-selector.tsx`
- `src/components/bundle-section.tsx`
- `src/app/page.tsx`
- `src/app/shop/page.tsx`
- `src/app/globals.css`
- `public/images/products/*` if product assets are updated later

## 6. Exact Codex Prompt To Execute This Phase

```text
Use the ui-ux-pro-max skill. Complete Phase 04 only from docs/redesign-phases/phase-04-product-showcase.md. First explain how you will realign the product lineup to Wag & Roam and list files before editing. Wait for my approval. Keep product sections clean, premium, conversion-focused, and mobile-first.
```

## 7. Expected Output

- Product lineup matches the requested Wag & Roam products.
- Product cards are clearer and more persuasive.
- Product finder and bundle/kit logic reflect hydrate, clean, and carry needs.
- Shop page comparison becomes more useful.

## 8. Testing Checklist

- Run `npm run typecheck`.
- Verify all product slugs generate correctly.
- Test add-to-cart for all products.
- Check product cards at mobile and desktop breakpoints.
- Confirm all product visual alt text is meaningful.

## 9. Mistakes To Avoid

- Do not leave old product references mixed with new product names.
- Do not make the cleaning product feel secondary or unrelated.
- Do not add unverified medical, safety, or material claims.
- Do not bury price or add-to-cart actions.

## 10. Approval Checkpoint

Stop after product showcase changes and ask for approval before Phase 05.

