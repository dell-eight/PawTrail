# Phase 07: Cart And Checkout Flow

## 1. Phase Goal

Make cart and checkout feel polished, clear, safe, and mobile-friendly.

## 2. What Problem This Phase Solves

The cart drawer and checkout preview exist, but the flow can better communicate order confidence, empty states, checkout status, and mobile usability.

## 3. UI/UX Recommendations

- Keep the cart drawer simple: product name, quantity, price, remove, subtotal, checkout CTA.
- Add a calm free-support or shipping-note area only if truthful.
- Improve empty cart state with a clear return-to-shop CTA.
- Make checkout preview status obvious if payment is still not live.
- Use form labels, autocomplete, correct input types, and mobile keyboard-friendly attributes.
- Make order summary sticky on larger screens and naturally positioned on mobile.

## 4. Interaction Recommendations

- Preserve Escape-to-close and backdrop-to-close behavior.
- Add focus management that returns focus to the cart button after close if feasible.
- Keep quantity buttons at least 44px.
- Avoid drawer animations longer than 300ms.

## 5. Files Likely To Be Created Or Edited

- `src/components/cart-provider.tsx`
- `src/components/checkout-form.tsx`
- `src/components/add-to-cart-button.tsx`
- `src/app/checkout/page.tsx`
- `src/app/globals.css`

## 6. Exact Codex Prompt To Execute This Phase

```text
Use the ui-ux-pro-max skill. Complete Phase 07 only from docs/redesign-phases/phase-07-cart-checkout-flow.md. First review the current cart and checkout flow and recommend UX improvements. List files before editing and wait for approval. Keep the flow accessible, mobile-friendly, and trustworthy.
```

## 7. Expected Output

- Cleaner cart drawer behavior and layout.
- More helpful empty cart and checkout preview states.
- Better mobile form usability.
- Improved accessibility and focus handling where practical.

## 8. Testing Checklist

- Run `npm run typecheck`.
- Add each product to cart.
- Increase, decrease, and remove quantities.
- Close cart with Escape and backdrop.
- Navigate to checkout with items and with empty cart.
- Test keyboard focus order.

## 9. Mistakes To Avoid

- Do not connect or imply live payment unless payment is actually implemented.
- Do not disable cart actions without clear feedback.
- Do not trap focus incorrectly.
- Do not hide subtotal or checkout status.

## 10. Approval Checkpoint

Stop after cart/checkout work and ask for approval before Phase 08.

