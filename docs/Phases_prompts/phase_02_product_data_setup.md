# Phase 2: Product Data Setup

## Phase Goal

Create clean product data for the 3 launch products so the website does not hardcode the same information everywhere.

## Codex Prompt

```text
Act as a careful ecommerce frontend developer and product data architect.

I am building a 3-product pet walk and travel accessories ecommerce website.

The site should launch with only these 3 products:

Product 1:
Name: WalkSip Portable Dog Water Bottle
Original product type: Portable Dog Water Bottle with Built-In Bowl
Selling angle: Hydration made easy anywhere.
Short description: A travel-friendly water bottle with a built-in drinking bowl for easy hydration during walks, parks, and car rides.
Main benefit: Gives your dog water anywhere without carrying a separate bowl.
Estimated selling price: ₱499–₱699
CTA: Add to Cart — Keep My Dog Hydrated

Product 2:
Name: TrailPack 2-in-1 Pet Water & Treat Bottle
Original product type: 2-in-1 Water Bottle + Food/Treat Container
Selling angle: Water and treats in one travel bottle.
Short description: A compact travel bottle that carries both water and snacks for longer walks, road trips, and weekend outings.
Main benefit: Combines water and treats in one convenient travel container.
Estimated selling price: ₱599–₱799
CTA: Add to Cart — Pack Smarter

Product 3:
Name: FoldBowl Collapsible Pet Travel Bowl
Original product type: Collapsible Silicone Travel Bowl
Selling angle: A bowl that fits in your pocket.
Short description: A lightweight foldable bowl for food or water that clips to your bag, leash, or travel kit.
Main benefit: Gives your pet a bowl anywhere without taking up space.
Estimated selling price: ₱149–₱249
CTA: Add to Cart — Bring a Bowl Anywhere

Your task:
Create a safe product data structure for the website.

Please do the following:
1. Inspect the existing project structure first.
2. Create a product data file in the most appropriate location.
3. Include for each product:
   - id
   - slug
   - name
   - category
   - shortDescription
   - longDescription
   - price
   - compareAtPrice if useful
   - mainBenefit
   - painPoint
   - sellingAngle
   - features
   - idealCustomer
   - productPageHeadline
   - productPageSubheadline
   - ctaText
   - trustElements
   - image placeholder paths
4. Make the data easy to reuse on homepage, product cards, product pages, and bundle sections.
5. Use placeholder image paths for now if real images are not available.
6. Do not create fake customer reviews.

Important safety instructions:
- Do not hardcode product information in many components.
- Do not add more than 3 products.
- Do not invent unrealistic claims.
- Keep all copy beginner-friendly and trustworthy.
- Make sure prices use Philippine peso formatting.

Expected output:
- Product data file
- Explanation of where it is located
- Example of how to import/use it
- No major UI changes yet unless needed
```

## Expected Output

- Product data file
- Clean product objects
- Slugs for product pages
- Placeholder image paths
- Import example

## Testing Checklist

- [ ] Product data file exists
- [ ] Only 3 products are included
- [ ] Product names are correct
- [ ] Prices show peso format
- [ ] No fake reviews are added
- [ ] Data can be reused later

## Mistakes to Avoid

- Do not duplicate product data across many files.
- Do not add random pet products.
- Do not use fake urgency or fake ratings.
- Do not use supplier names publicly unless intentional.
