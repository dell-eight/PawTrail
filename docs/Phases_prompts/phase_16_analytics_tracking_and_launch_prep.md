# Phase 16: Analytics, Tracking, and Launch Prep

## Phase Goal

Prepare the site for launch tracking without breaking privacy or checkout.

## Codex Prompt

```text
Act as a careful ecommerce launch engineer and analytics setup assistant.

I need to prepare my minimalist 3-product pet accessories website for launch tracking.

The website sells:
1. WalkSip Portable Dog Water Bottle
2. TrailPack 2-in-1 Pet Water & Treat Bottle
3. FoldBowl Collapsible Pet Travel Bowl

Your task:
Prepare analytics and launch tracking safely.

Please do the following:
1. Inspect if analytics or tracking already exists.
2. Add placeholders or environment variable support for Google Analytics, Meta Pixel, and TikTok Pixel if applicable.
3. Do not add real IDs unless provided.
4. Add clear comments showing where IDs should be placed.
5. Track basic events if safe: Page view, Product view, Add to cart, Begin checkout.
6. Make sure tracking does not break if IDs are missing.
7. Make sure no sensitive customer data is sent to analytics.

Important safety instructions:
- Do not invent tracking IDs.
- Do not expose secret keys.
- Do not send names, addresses, phone numbers, or emails to analytics.
- Do not break the build if environment variables are missing.
- Keep implementation simple.

Expected output:
- Analytics-ready setup
- Safe event tracking structure
- Environment variable examples
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
