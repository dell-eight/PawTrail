# Phase 00: UI/UX Audit

## 1. Phase Goal

Review the current PetStore site structure before making any redesign edits. Identify what is already strong, what conflicts with Wag & Roam, and which improvements should be prioritized.

## 2. What Problem This Phase Solves

It prevents random redesign work. The current site already has a homepage, shop, cart drawer, product pages, checkout preview, FAQ, policies, product data, images, and global CSS, so the redesign should preserve useful structure while correcting weak areas.

## 3. UI/UX Recommendations

- Keep the existing ecommerce foundation: homepage, shop, product detail pages, cart, checkout preview, FAQ, and policies.
- Replace remaining `PawTrail` brand language with `Wag & Roam`.
- Align products with the requested lineup: portable pet water bottle with travel bowl, after-walk/travel cleaning product, and pet essentials carrying product.
- Audit whether the current CSS product illustrations feel premium enough; plan to use stronger product imagery or refined product visuals.
- Tighten homepage hierarchy so the first scroll clearly answers: what this is, who it is for, why it matters, and what to buy first.
- Keep policy/trust content visible, but make it feel like confidence-building commerce copy rather than pre-launch disclaimers.
- Review all mobile touch targets, sticky elements, and section spacing.

## 4. Interaction Recommendations

- Keep existing smooth scroll only if it respects reduced motion.
- Audit hover effects for layout shift; keep subtle translate or shadow only when it does not harm mobile usability.
- Review cart drawer focus handling, escape behavior, and backdrop closing.
- Identify where accordions, product reveal sections, and sticky CTAs would be useful.

## 5. Files Likely To Be Created Or Edited

- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/site-header.tsx`
- `src/components/site-footer.tsx`
- `src/components/product-card.tsx`
- `src/components/product-selector.tsx`
- `src/components/bundle-section.tsx`
- `src/components/cart-provider.tsx`
- `src/components/checkout-form.tsx`
- `src/data/products.ts`
- `src/app/shop/page.tsx`
- `src/app/products/[slug]/page.tsx`

## 6. Exact Codex Prompt To Execute This Phase

```text
Use the ui-ux-pro-max skill. Complete Phase 00 only from docs/redesign-phases/phase-00-ui-ux-audit.md. Review the current Wag & Roam/PetStore codebase and explain the UI/UX audit findings before editing. Do not edit website code in this phase unless I explicitly approve. List the files you inspected, summarize strengths and weaknesses, and recommend the next phase.
```

## 7. Expected Output

- A clear UI/UX audit summary.
- A list of current strengths worth preserving.
- A list of redesign gaps and risks.
- A recommended Phase 01 starting point.
- No website code changes unless separately approved.

## 8. Testing Checklist

- Run `npm run typecheck` if no code edits are made and dependencies are installed.
- Inspect current homepage, shop, product page, cart drawer, and checkout preview.
- Check 375px, 768px, 1024px, and desktop layouts if a browser is available.
- Confirm no app files were changed during audit.

## 9. Mistakes To Avoid

- Do not start rewriting sections during the audit.
- Do not remove existing ecommerce flows just because they need polish.
- Do not ignore the product lineup mismatch.
- Do not treat desktop as the primary layout.

## 10. Approval Checkpoint

Stop after presenting the audit. Ask for approval before Phase 01.

