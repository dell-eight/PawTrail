# Phase 06: Product Pages

## 1. Phase Goal

Make each product detail page easier to understand, trust, compare, and buy.

## 2. What Problem This Phase Solves

The current product pages have a good structure, but they need stronger product-specific storytelling, better gallery presentation, clearer purchase panels, and more refined mobile sticky CTA behavior.

## 3. UI/UX Recommendations

- Use a product hero with clear image, name, benefit, price, add-to-cart, and trust notes.
- Split content into practical sections: best for, what it solves, how to use, what is included, care notes, FAQ.
- Add cross-sells that fit the routine, such as “Pair with the carry pouch” or “Add cleaning wipes for after the walk.”
- Make the purchase panel sticky only on desktop if it improves scanning; keep mobile sticky CTA concise.
- Use product-specific FAQ items.
- Ensure the cleaning product page avoids unsupported medical or sanitizing claims unless verified.

## 4. Interaction Recommendations

- Keep gallery thumb interactions simple and accessible if a dynamic gallery is added.
- Keep sticky CTA unobtrusive and safe-area aware.
- Product accordions can reduce mobile length, but key purchase details should remain visible.

## 5. Files Likely To Be Created Or Edited

- `src/app/products/[slug]/page.tsx`
- `src/data/products.ts`
- `src/components/add-to-cart-button.tsx`
- `src/app/globals.css`
- `public/images/products/*` if product assets are updated later

## 6. Exact Codex Prompt To Execute This Phase

```text
Use the ui-ux-pro-max skill. Complete Phase 06 only from docs/redesign-phases/phase-06-product-pages.md. First review the existing product page template and recommend product-detail improvements. List files before editing and wait for approval. Keep product pages premium, clear, mobile-first, and conversion-focused.
```

## 7. Expected Output

- Product pages support the new Wag & Roam lineup.
- Purchase panel and sticky CTA are clearer.
- Product-specific FAQs and cross-sells are more helpful.
- Product information is easier to scan on mobile.

## 8. Testing Checklist

- Run `npm run typecheck`.
- Open each product slug.
- Test add-to-cart from each product page.
- Verify mobile sticky CTA does not cover important content.
- Check headings and alt text.

## 9. Mistakes To Avoid

- Do not create duplicate CTAs that compete visually.
- Do not make users scroll too far before seeing price or add-to-cart.
- Do not use inaccurate cleaning or safety claims.
- Do not break static params for product pages.

## 10. Approval Checkpoint

Stop after product page work and ask for approval before Phase 07.

