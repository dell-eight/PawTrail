# Phase 7: Bundle Offer Section

## Phase Goal

Increase average order value by presenting simple bundles.

## Codex Prompt

```text
Act as an ecommerce conversion strategist and frontend developer.

I want to add a simple bundle offer section to my 3-product pet walk and travel accessories website.

Headline: “Build your pet walk kit.”
Subheadline: “Pair hydration, snacks, and a portable bowl for a more prepared outdoor routine.”

Bundle ideas:
1. Daily Walk Kit: WalkSip + FoldBowl. Offer: Save ₱50.
2. Weekend Travel Kit: TrailPack + FoldBowl. Offer: Save ₱80.
3. Complete Outdoor Kit: All 3 products. Offer: Save ₱120–₱150.

Your task:
Build a clean bundle section.

Please do the following:
1. Create 3 bundle cards.
2. Each bundle card should include bundle name, included products, best use case, savings message, and CTA button.
3. CTA buttons: Choose Daily Walk Kit, Choose Weekend Travel Kit, Choose Complete Kit.
4. Keep the savings honest and not aggressive.
5. Add a note: “Bundle availability and discounts may vary during launch.”
6. Make the section mobile-friendly.
7. If cart functionality does not exist yet, make CTAs point to the relevant product or cart placeholder safely.

Important safety instructions:
- Do not create fake scarcity.
- Do not add countdown timers.
- Do not claim free shipping unless implemented.
- Do not break existing cart logic.
- If bundle cart logic is not ready, create UI only and clearly mark next implementation step.

Expected output:
- Bundle section
- 3 bundle cards
- Mobile-friendly layout
- Safe CTA behavior
- Explanation of changed files
```

## Expected Output

- Requested phase implemented or audited
- Changed files explained
- Mobile-friendly result
- No fake claims or fake reviews
- Safe next step identified

## Testing Checklist

- [ ] Page or feature loads correctly
- [ ] Mobile layout works
- [ ] Buttons and links work
- [ ] No console/build errors
- [ ] No fake reviews, fake urgency, or misleading claims
- [ ] Existing functionality is not broken

## Mistakes to Avoid

- Do not redesign unrelated parts of the site.
- Do not add extra products.
- Do not invent fake reviews or fake ratings.
- Do not expose secret keys or sensitive data.
- Do not make unsupported shipping, refund, or payment claims.
