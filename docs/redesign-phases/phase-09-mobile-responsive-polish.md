# Phase 09: Mobile Responsive Polish

## 1. Phase Goal

Refine mobile and tablet behavior so the store feels designed for phones first.

## 2. What Problem This Phase Solves

The site has mobile CSS already, but final polish should verify text fit, button stacking, sticky CTA behavior, cart drawer usability, product grids, and checkout fields on small screens.

## 3. UI/UX Recommendations

- Prioritize 375px and 390px widths.
- Keep primary buttons full-width when stacked.
- Make product cards easy to scan with compact text and clear CTAs.
- Ensure sticky header and sticky CTA do not crowd content.
- Tune section padding so the site feels premium without excessive scrolling.
- Confirm comparison tables are readable on mobile.
- Keep footer links tappable and grouped.

## 4. Interaction Recommendations

- Ensure mobile menu transitions are fast and not disorienting.
- Sticky CTA should include only price and primary action.
- Avoid hover-only affordances on touch screens.

## 5. Files Likely To Be Created Or Edited

- `src/app/globals.css`
- `src/components/site-header.tsx`
- `src/components/product-card.tsx`
- `src/components/cart-provider.tsx`
- `src/components/checkout-form.tsx`
- `src/app/page.tsx`
- `src/app/shop/page.tsx`
- `src/app/products/[slug]/page.tsx`

## 6. Exact Codex Prompt To Execute This Phase

```text
Use the ui-ux-pro-max skill. Complete Phase 09 only from docs/redesign-phases/phase-09-mobile-responsive-polish.md. First review mobile responsiveness and recommend targeted fixes. List files before editing and wait for approval. Focus on 375px, 390px, 768px, and no horizontal scroll.
```

## 7. Expected Output

- Cleaner phone layouts.
- Better touch target spacing.
- No horizontal overflow.
- Sticky elements behave safely.
- Product and checkout flows feel natural on mobile.

## 8. Testing Checklist

- Run `npm run typecheck`.
- Test 375px, 390px, 430px, 768px, 1024px, and desktop.
- Check no text overlaps or overflows.
- Check no horizontal scroll.
- Test mobile nav, cart drawer, product sticky CTA, checkout fields.

## 9. Mistakes To Avoid

- Do not shrink text below readable sizes.
- Do not hide important content on mobile.
- Do not allow sticky CTA to cover footer or form controls.
- Do not use desktop-first fixes that regress phones.

## 10. Approval Checkpoint

Stop after mobile polish and ask for approval before Phase 10.

