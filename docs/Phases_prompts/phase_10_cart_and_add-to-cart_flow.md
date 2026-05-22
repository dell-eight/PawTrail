# Phase 10: Cart and Add-to-Cart Flow

## Phase Goal

Allow customers to add products to cart clearly and safely.

## Codex Prompt

```text
Act as a careful ecommerce frontend developer.

I need a simple cart and add-to-cart flow for my 3-product pet walk and travel accessories website.

Products:
1. WalkSip Portable Dog Water Bottle
2. TrailPack 2-in-1 Pet Water & Treat Bottle
3. FoldBowl Collapsible Pet Travel Bowl

Your task:
Implement or improve basic cart functionality.

Please do the following:
1. Inspect existing cart functionality first.
2. If cart already exists, improve it safely instead of rebuilding everything.
3. If no cart exists, create a simple cart system suitable for a beginner ecommerce site.
4. Cart should support add product, increase quantity, decrease quantity, remove product, show subtotal, show shipping note, and show checkout button.
5. Add a cart drawer or cart page depending on the existing app structure.
6. Include a free shipping progress note if safe: “Free shipping over ₱999”.
7. Add checkout button text: “Proceed to Checkout”.
8. Make the cart mobile-friendly.

Important safety instructions:
- Do not connect to real payment yet unless payment setup already exists.
- Do not create fake successful orders.
- Do not store sensitive payment data.
- Do not break existing cart state.
- Keep cart logic simple and maintainable.
- Use local state/local storage only if appropriate.

Expected output:
- Working add-to-cart buttons
- Cart drawer or cart page
- Quantity controls
- Subtotal calculation
- Mobile-friendly cart UI
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
