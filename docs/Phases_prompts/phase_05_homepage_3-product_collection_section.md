# Phase 5: Homepage 3-Product Collection Section

## Phase Goal

Display the 3 products clearly and make the small product count feel intentional.

## Codex Prompt

```text
Act as a senior ecommerce frontend developer and conversion-focused product section designer.

I am building a focused 3-product pet walk and travel accessories website.

The homepage should make the limited product count feel intentional, not incomplete.

Section headline: “Only the essentials. Nothing random.”
Section subheadline: “A small collection built for daily walks, outdoor breaks, and pet-friendly travel.”

Products:
1. WalkSip Portable Dog Water Bottle
2. TrailPack 2-in-1 Pet Water & Treat Bottle
3. FoldBowl Collapsible Pet Travel Bowl

Your task:
Build the homepage 3-product collection section using the product data file created earlier.

Please do the following:
1. Import product data from the product data file.
2. Create reusable product cards if they do not exist yet.
3. Each product card should include product image placeholder, product name, short description, main benefit, price, CTA button, and small “Best for” label.
4. Add these labels:
   - WalkSip: Best for daily walks
   - TrailPack: Best for longer trips
   - FoldBowl: Best budget add-on
5. Add a section CTA: “View All Products”.
6. Make the grid responsive: 1 column on mobile, 3 columns on desktop.
7. Keep the layout clean, premium, and uncluttered.

Important safety instructions:
- Do not add more than 3 products.
- Do not hardcode product data if it can come from the data file.
- Do not add fake star ratings.
- Do not add fake reviews.
- Do not make product cards too tall or cluttered.

Expected output:
- Product collection section
- Reusable product card component
- Responsive product grid
- Explanation of changed files
```

## Expected Output

- Product card component
- Product collection section
- Responsive grid
- Product CTA buttons

## Testing Checklist

- [ ] Only 3 products show
- [ ] Product cards look consistent
- [ ] Cards stack cleanly on mobile
- [ ] Prices display correctly
- [ ] CTA buttons work
- [ ] Product data is reused

## Mistakes to Avoid

- Do not add unrelated products.
- Do not make the section look like a marketplace.
- Do not use too much product text.
- Do not add fake ratings.
