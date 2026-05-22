# Phase 11: Checkout Flow Placeholder or Payment Integration Prep

## Phase Goal

Prepare checkout safely before connecting real payments.

## Codex Prompt

```text
Act as a senior ecommerce developer and checkout UX planner.

I need to prepare the checkout flow for my beginner-friendly 3-product pet accessories ecommerce website.

The checkout should feel trustworthy and simple.

Your task:
Create a safe checkout flow foundation.

Please do the following:
1. Inspect if checkout already exists.
2. If checkout exists, improve the UX without breaking payment logic.
3. If no checkout exists, create a checkout page or checkout placeholder.
4. Checkout page should show order summary, customer information form, shipping information form, payment method placeholder, support note, and policy agreement note.
5. Add payment method copy: “Payment options will be shown securely at checkout.”
6. Add trust notes: Secure checkout, Clear shipping updates, Support for damaged or wrong items.
7. Add links to Shipping Policy, Refund Policy, and Privacy Policy.
8. Do not process real payments unless a payment provider is already configured.

Important safety instructions:
- Do not collect or store credit card data manually.
- Do not create a fake payment success flow.
- Do not claim payment integration is complete unless it is actually connected.
- Do not expose API keys.
- Use environment variables for future payment keys.
- Keep forms beginner-friendly and mobile-first.

Expected output:
- Checkout page or improved checkout page
- Order summary
- Customer/shipping form UI
- Payment placeholder
- Trust and policy links
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
