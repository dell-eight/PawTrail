# Phase-by-Phase Codex Prompts

Minimalist 3-Product Pet Walk & Travel Accessories Website

Use these one phase at a time. Do not paste everything into Codex at once.
# Phase 0: Project Setup and Codebase Audit

## Phase Goal

Review the project structure first before building anything. This helps Codex understand your current codebase and avoid breaking existing files.

## Codex Prompt

```text
Act as a senior full-stack developer, ecommerce UX planner, and careful codebase reviewer.

I am building a minimalist, mobile-first ecommerce website for a pet walk and travel accessories dropshipping brand.

The website will launch with only 3 products:

1. Portable Dog Water Bottle with Built-In Bowl
- Selling angle: Hydration made easy anywhere.
- Estimated price: ₱299–₱799

2. 2-in-1 Water Bottle + Food/Treat Container
- Selling angle: Water and treats in one travel bottle.
- Estimated price: ₱399–₱899

3. Collapsible Silicone Travel Bowl
- Selling angle: A bowl that fits in your pocket.
- Estimated price: ₱99–₱299

Brand feeling:
Clean, modern, minimalist, soft, pet-friendly, trustworthy, mobile-first, premium but affordable.

Your task for this phase:
Audit the existing codebase before making any changes.

Please do the following:
1. Inspect the project structure.
2. Identify the framework being used.
3. Identify important folders, components, pages, routes, styling files, and config files.
4. Check how the app currently handles layout, navigation, images, buttons, product data, cart, checkout, and responsive design.
5. Identify whether the project already has ecommerce functionality.
6. Identify risks before editing.
7. Recommend the safest build order.

Important safety instructions:
- Do not rewrite the whole project.
- Do not delete existing files unless clearly unnecessary and you explain why.
- Do not install new packages unless required.
- Do not make major changes yet.
- First explain what you found.
- Then suggest the exact files that should be edited in the next phase.

Expected output:
- Codebase summary
- Current tech stack
- Existing pages/components
- Missing features
- Recommended file structure
- Safe next steps
```

## Expected Output

- Codebase summary
- Current tech stack
- Existing pages/components
- Missing features
- Recommended file structure
- Safe next steps

## Testing Checklist

- [ ] Codex correctly identifies your framework
- [ ] Codex does not change many files yet
- [ ] You understand the current project structure
- [ ] You know which files will be edited next

## Mistakes to Avoid

- Do not let Codex rebuild the full website in Phase 0.
- Do not skip the audit.
- Do not install random packages yet.
- Do not delete existing working code.


---

# Phase 1: Brand Foundation and Design System

## Phase Goal

Create the visual foundation: colors, typography, buttons, spacing, cards, badges, and reusable styling rules.

## Codex Prompt

```text
Act as a senior frontend developer, UI designer, and brand system specialist.

I am building a minimalist ecommerce website for a pet walk and travel accessories brand.

Business context:
- Niche: Pet walking and pet travel accessories
- Launch product count: 3 products only
- Target customers: dog owners, cat owners who travel, pet owners who walk or go outdoors often
- Brand feeling: helpful, calm, safe, convenient, clean, practical, trustworthy
- Website style: minimalist, modern, soft, mobile-first, premium but affordable

Products:
1. Portable Dog Water Bottle with Built-In Bowl
2. 2-in-1 Water Bottle + Food/Treat Container
3. Collapsible Silicone Travel Bowl

Design direction:
- Warm cream background
- Soft sage green brand color
- Deep forest green for strong text/buttons
- Warm beige cards
- Soft clay accent
- Clean rounded cards
- Gentle shadows
- Mobile-first spacing
- Simple icons
- Modern readable fonts

Suggested colors:
- Warm Cream: #F8F5EF
- Soft Sage: #8FA88B
- Deep Forest: #26352D
- Warm Beige: #D8C8B2
- Soft Clay: #C98F72
- Charcoal: #2F3437
- White: #FFFFFF

Your task:
Create or improve the design system safely.

Please do the following:
1. Inspect the existing styling setup first.
2. If the project uses Tailwind, update the Tailwind theme if appropriate.
3. If the project uses CSS modules or global CSS, add clean CSS variables.
4. Create consistent styles for:
   - Page background
   - Headings
   - Body text
   - Primary buttons
   - Secondary buttons
   - Product cards
   - Trust badges
   - Section spacing
   - Rounded containers
   - Mobile layout spacing
5. Make sure the styling works well on mobile and desktop.
6. Keep the design minimalist and not overly colorful.

Important safety instructions:
- Do not break existing layout.
- Do not remove existing styling unless replacing it carefully.
- Do not use heavy animation libraries unless already installed.
- Do not add complicated design effects.
- Keep the website fast and clean.
- Make changes incrementally.

Expected output:
- Updated styling files
- Reusable design tokens or CSS variables
- Button styles
- Card styles
- Section layout styles
- Explanation of changed files
```

## Expected Output

- Updated styling files
- Reusable design tokens or CSS variables
- Button styles
- Card styles
- Section layout styles
- Explanation of changed files

## Testing Checklist

- [ ] Website still loads
- [ ] Background color looks soft and clean
- [ ] Buttons are consistent
- [ ] Cards have rounded corners
- [ ] Text is readable on mobile
- [ ] No layout is broken

## Mistakes to Avoid

- Do not use too many colors.
- Do not make the site look childish.
- Do not use tiny text on mobile.
- Do not add complicated animations yet.
- Do not make buttons inconsistent.


---

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


---

# Phase 3: Website Layout, Navigation, and Footer

## Phase Goal

Build the basic website shell: header, navigation, footer, trust links, and mobile menu.

## Codex Prompt

```text
Act as a senior frontend developer and ecommerce UX designer.

I am building a minimalist 3-product ecommerce website for pet walk and travel accessories.

Brand positioning:
A focused collection of simple travel-ready pet essentials for cleaner, easier, and more convenient walks, parks, and trips.

The website should feel clean, trustworthy, mobile-first, premium but affordable, and not like a generic dropshipping store.

Your task:
Build or improve the main website layout.

Please do the following:
1. Inspect the existing layout/header/footer structure first.
2. Create or improve the main header.
3. Create or improve the mobile navigation.
4. Create or improve the footer.
5. Add navigation links: Home, Shop, About, FAQ, Contact.
6. Add footer links: Shipping Policy, Refund Policy, Privacy Policy, Terms & Conditions, Contact.
7. Add a footer tagline: “Simple outdoor essentials for happier pet walks and cleaner travel days.”
8. Add basic trust badges in the footer: Secure checkout, Clear shipping updates, Friendly support.
9. Make sure the layout works well on mobile.
10. Keep the header simple and not overcrowded.

Important safety instructions:
- Do not create a huge mega menu.
- Do not add many product categories.
- Do not make the site look like a general pet store.
- Do not break existing routing.
- Keep navigation clear and simple.

Expected output:
- Header component
- Footer component
- Mobile navigation
- Basic page layout
- Explanation of changed files
```

## Expected Output

- Header component
- Footer component
- Mobile navigation
- Basic page layout
- Explanation of changed files

## Testing Checklist

- [ ] Header appears on all pages
- [ ] Footer appears on all pages
- [ ] Mobile menu works
- [ ] Links do not break
- [ ] Footer looks clean
- [ ] Website still feels focused

## Mistakes to Avoid

- Do not add too many menu items.
- Do not use cluttered icons.
- Do not make the header too tall on mobile.
- Do not hide important policy links.


---

# Phase 4: Homepage Hero and Brand Introduction

## Phase Goal

Create the first impression of the website: clear hero section, brand promise, and main call-to-action.

## Codex Prompt

```text
Act as a senior ecommerce homepage designer, copywriter, and frontend developer.

I am building a minimalist pet walk and travel accessories store with only 3 launch products.

Brand message:
Simple pet travel essentials for cleaner, easier, and safer outdoor moments.

Homepage hero copy:
Headline: “Pet walks and trips made easier.”
Subheadline: “Simple, travel-ready accessories that help keep your pet hydrated, fed, and comfortable wherever you go.”
Primary CTA: “Shop Travel Essentials”
Secondary CTA: “Find the Right Product”

Trust badges:
- Hydration anywhere
- Lightweight travel gear
- Easy outdoor pet care

Your task:
Build the homepage hero and intro section.

Please do the following:
1. Inspect the existing homepage first.
2. Add or improve the hero section.
3. Use a clean two-column desktop layout if appropriate.
4. Use a stacked mobile layout.
5. Include the headline, subheadline, CTA buttons, and trust badges.
6. Add a clean placeholder image or image area for a pet outdoor lifestyle photo.
7. Add a short brand intro below the hero: “Outdoor pet care should not feel messy or complicated.”
8. Add 3 problem-solution cards:
   - Thirsty pet outside → Portable water bottle
   - Need snacks and water → 2-in-1 travel bottle
   - Need a bowl anywhere → Collapsible travel bowl

Important safety instructions:
- Keep the section simple and fast-loading.
- Do not use fake reviews.
- Do not use aggressive sales copy.
- Do not add too many animations.
- Make sure buttons are visible on mobile.

Expected output:
- Updated homepage hero
- Problem-solution intro section
- Mobile-friendly layout
- Explanation of changed files
```

## Expected Output

- Updated homepage hero
- Problem-solution intro section
- Mobile-friendly layout
- Explanation of changed files

## Testing Checklist

- [ ] Hero is visible above the fold
- [ ] Main headline is clear
- [ ] CTA buttons work
- [ ] Mobile layout looks clean
- [ ] Text does not overflow
- [ ] Image area does not break layout

## Mistakes to Avoid

- Do not make the hero vague.
- Do not say “best pet store.”
- Do not add too much text above the fold.
- Do not use fake discounts yet.


---

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


---

# Phase 6: Interactive Product Selector

## Phase Goal

Add a simple interactive feature that helps users choose the right product without overwhelming them.

## Codex Prompt

```text
Act as a frontend developer and ecommerce UX conversion specialist.

I want to add a simple interactive product selector to my minimalist pet walk and travel accessories website.

Section headline: “What does your pet need outside?”

Options:
1. Quick daily walks → WalkSip Portable Dog Water Bottle
2. Longer walks or road trips → TrailPack 2-in-1 Pet Water & Treat Bottle
3. Budget travel backup → FoldBowl Collapsible Pet Travel Bowl
4. Complete outdoor kit → Bundle all 3 products

Your task:
Build a simple interactive product selector section.

Please do the following:
1. Use clean buttons, tabs, or cards for the choices.
2. When a user selects an option, show the recommended product, short reason why, and CTA button.
3. Use the existing product data where possible.
4. Keep the interaction lightweight.
5. Make it fully usable on mobile.
6. Add it after the product collection or before the bundle section.

Important safety instructions:
- Do not create a complicated quiz.
- Do not require user personal data.
- Do not add email capture here.
- Do not use heavy packages unless already installed.
- Keep accessibility in mind.
- Make sure the default state is clear.

Expected output:
- Interactive product selector component
- Responsive section added to homepage
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


---

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


---

# Phase 8: Product Listing Page

## Phase Goal

Create a simple shop page that shows all 3 products clearly.

## Codex Prompt

```text
Act as a senior ecommerce frontend developer.

I need a simple product listing page for my minimalist pet walk and travel accessories store.

This store only launches with 3 products:
1. WalkSip Portable Dog Water Bottle
2. TrailPack 2-in-1 Pet Water & Treat Bottle
3. FoldBowl Collapsible Pet Travel Bowl

The shop page should feel curated, not like a big marketplace.

Page headline: “Pet travel essentials for easier walks and trips.”
Page subheadline: “A focused collection of simple outdoor accessories for hydration, snacks, and feeding anywhere.”

Your task:
Create or improve the Shop page.

Please do the following:
1. Check existing routing first.
2. Create a Shop page if it does not exist.
3. Use the product data file.
4. Display the 3 products in a clean responsive grid.
5. Add a simple intro section.
6. Add a product comparison area if useful.
7. Add trust badges near the bottom: Secure checkout, Clear shipping updates, Friendly support.
8. Add a final CTA: “Build Your Pet Walk Kit”.

Important safety instructions:
- Do not add filters unless needed.
- Do not add many categories.
- Do not add fake product reviews.
- Do not add products beyond the 3 launch products.
- Make sure routing works with the existing framework.

Expected output:
- Shop page
- Product grid using product data
- Responsive layout
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


---

# Phase 9: Product Detail Pages

## Phase Goal

Create clear, conversion-focused product pages for each of the 3 products.

## Codex Prompt

```text
Act as a senior ecommerce product page designer, frontend developer, and conversion copywriter.

I need product detail pages for my 3-product pet walk and travel accessories store.

Products:
1. WalkSip Portable Dog Water Bottle
Headline: Hydration made easy anywhere.
Subheadline: Keep your dog refreshed during walks, travel, and outdoor breaks with one simple bottle.
CTA: Add to Cart — Keep My Dog Hydrated

2. TrailPack 2-in-1 Pet Water & Treat Bottle
Headline: Water and treats in one travel bottle.
Subheadline: Stay prepared for longer walks, car rides, and outdoor moments with one compact pet travel essential.
CTA: Add to Cart — Pack Smarter

3. FoldBowl Collapsible Pet Travel Bowl
Headline: A pet bowl that fits in your pocket.
Subheadline: Lightweight, foldable, and easy to bring for walks, parks, cafés, and travel days.
CTA: Add to Cart — Bring a Bowl Anywhere

Your task:
Create or improve individual product pages.

Each product page should include:
1. Product hero section: gallery placeholder, product name, headline, subheadline, price, CTA button, small trust note.
2. Benefits section: main benefit, pain point solved, best use case.
3. Features section with feature icons or clean bullet cards.
4. How it works section with 3 simple steps.
5. Cleaning/care note.
6. Shipping/returns note.
7. Product-specific FAQ.
8. Related bundle suggestion.

Important safety instructions:
- Use the product data file.
- Do not hardcode duplicate data unnecessarily.
- Do not add fake reviews.
- Do not claim medical or safety guarantees.
- Do not promise shipping times unless configured in policy.
- Keep layout mobile-first.
- Add a sticky add-to-cart button on mobile only if safe and simple.

Expected output:
- Product detail page route or routes
- Product page template
- 3 working product pages
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


---

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


---

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


---

# Phase 12: About, FAQ, Contact, and Policy Pages

## Phase Goal

Add the pages that make the store feel trustworthy and complete.

## Codex Prompt

```text
Act as a senior ecommerce trust and compliance-focused website developer.

I need to add trust-building pages to my minimalist 3-product pet accessories website.

Brand message:
Simple outdoor essentials for happier pet walks and cleaner travel days.

Your task:
Create or improve these pages:
1. About
2. FAQ
3. Contact
4. Shipping Policy
5. Refund Policy
6. Privacy Policy
7. Terms & Conditions

Content direction:

About page:
Headline: Built for practical pet parents.
Message: We focus on simple, useful pet accessories that make walks, trips, and outdoor care easier without adding clutter.

FAQ questions:
- How long does shipping take?
- What payment methods do you accept?
- Can I use these products for cats?
- How do I clean the bottles and bowls?
- What if my item arrives damaged?
- Do you offer bundles?
- Can I track my order?
- Do you accept returns or refunds?

Contact page:
Include support email placeholder, contact form, expected response time, and order support instructions.

Policy pages:
Create beginner-friendly placeholder policies that I can edit later. Include clear notes where I need to customize delivery time, courier, refund window, business contact details, payment provider, and privacy details.

Important safety instructions:
- Do not write misleading legal guarantees.
- Do not use “no return, no exchange” language.
- Do not pretend the business has a physical address unless provided.
- Mark placeholders clearly.
- Keep policies simple and readable.
- Make sure footer links route correctly.

Expected output:
- About page
- FAQ page or section
- Contact page
- Shipping Policy page
- Refund Policy page
- Privacy Policy page
- Terms & Conditions page
- Footer links connected
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


---

# Phase 13: Homepage Trust, Reviews Placeholder, and Final CTA

## Phase Goal

Make the homepage feel more complete and trustworthy without using fake social proof.

## Codex Prompt

```text
Act as an ecommerce conversion designer and careful frontend developer.

I need to improve the trust and final conversion sections on my minimalist 3-product pet accessories homepage.

Important:
Do not create fake reviews. If reviews are not available yet, use an honest placeholder section for future customer feedback.

Sections to add or improve:

1. Trust Section
Headline: “Simple products. Clear policies. Friendly support.”
Trust badges:
- Secure checkout
- Clear shipping updates
- Friendly customer support
- Damage/wrong-item assistance
- Lightweight travel-friendly products
- Made for walks, parks, and trips

2. Customer Feedback Placeholder
Headline: “Small essentials pet owners actually use.”
Copy: “Customer feedback will be added here after real orders and verified product experiences.”

3. FAQ Preview
Headline: “Questions before your first order?”
Show 4 FAQ items:
- How long does shipping take?
- What payment methods do you accept?
- What if my item arrives damaged?
- Can I use these products for cats?

4. Final CTA
Headline: “Ready for cleaner, easier pet walks?”
Subheadline: “Start with one simple travel essential or build your full outdoor pet kit.”
CTA: “Shop Now”

Your task:
Add these homepage sections safely.

Important safety instructions:
- Do not fake reviews.
- Do not add fake star ratings.
- Do not add fake customer names.
- Do not use aggressive scarcity.
- Keep the layout clean and mobile-first.
- Reuse existing components where possible.

Expected output:
- Homepage trust section
- Honest customer feedback placeholder
- FAQ preview
- Final CTA section
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


---

# Phase 14: Mobile Optimization and UX Polish

## Phase Goal

Make the full website feel smooth and professional on mobile.

## Codex Prompt

```text
Act as a senior mobile-first ecommerce UX auditor and frontend developer.

I need to polish my minimalist 3-product pet accessories website for mobile users.

The site should feel clean, fast, easy to use, trustworthy, beginner-friendly, and premium but affordable.

Your task:
Audit and improve the mobile experience across the whole website.

Please check:
1. Header and mobile menu
2. Hero section
3. Product cards
4. Product selector
5. Bundle section
6. Product pages
7. Cart
8. Checkout page
9. FAQ accordions
10. Footer links

Mobile UX requirements:
- Buttons must be easy to tap.
- Text must be readable.
- Product cards must not feel cramped.
- Images must not overflow.
- Sticky add-to-cart should not block important content.
- Forms should be easy to fill out.
- Navigation should be simple.
- Page spacing should feel comfortable.

Important safety instructions:
- Do not redesign the whole site.
- Only polish layout, spacing, responsiveness, and usability.
- Do not add heavy animations.
- Do not add new major features.
- Do not break desktop layout while fixing mobile.

Expected output:
- Mobile layout improvements
- Responsiveness fixes
- Cleaner spacing
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


---

# Phase 15: SEO Basics and Metadata

## Phase Goal

Add basic SEO and metadata so the website looks professional when shared.

## Codex Prompt

```text
Act as a frontend developer and beginner-friendly ecommerce SEO specialist.

I need basic SEO setup for my minimalist 3-product pet walk and travel accessories website.

Brand positioning:
Simple outdoor pet essentials for easier walks, parks, and travel days.

Products:
1. WalkSip Portable Dog Water Bottle
2. TrailPack 2-in-1 Pet Water & Treat Bottle
3. FoldBowl Collapsible Pet Travel Bowl

Your task:
Add basic SEO and metadata.

Please do the following:
1. Inspect the framework’s SEO or metadata structure.
2. Add homepage title and description.
3. Add product page titles and descriptions.
4. Add Shop page title and description.
5. Add About, FAQ, Contact, and policy page metadata.
6. Add Open Graph metadata if supported.
7. Add clean alt text for images and placeholders.
8. Make sure metadata is not keyword-stuffed.

Suggested homepage SEO:
Title: Pet Walk & Travel Accessories | Simple Outdoor Pet Essentials
Description: Shop minimalist pet walk and travel accessories for easier hydration, feeding, and outdoor care during walks, parks, and trips.

Important safety instructions:
- Do not overpromise.
- Do not keyword stuff.
- Do not add fake location claims.
- Do not break existing metadata.
- Keep SEO natural and brand-safe.

Expected output:
- SEO metadata
- Image alt text improvements
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


---

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


---

# Phase 17: Final Pre-Launch Audit

## Phase Goal

Review everything before publishing.

## Codex Prompt

```text
Act as a senior ecommerce QA tester, conversion auditor, and frontend developer.

I need a final pre-launch audit for my minimalist 3-product pet walk and travel accessories website.

The website should feel clean, trustworthy, mobile-first, focused, beginner-friendly, and not like a generic dropshipping store.

Products:
1. WalkSip Portable Dog Water Bottle
2. TrailPack 2-in-1 Pet Water & Treat Bottle
3. FoldBowl Collapsible Pet Travel Bowl

Your task:
Audit the full website before launch.

Please check:
1. Homepage
2. Shop page
3. Product pages
4. Cart
5. Checkout
6. About page
7. FAQ
8. Contact page
9. Shipping Policy
10. Refund Policy
11. Privacy Policy
12. Terms & Conditions
13. Header and footer
14. Mobile responsiveness
15. Button links
16. Product data accuracy
17. Pricing display
18. Trust messaging
19. SEO metadata
20. Build errors

Please provide:
1. List of issues found
2. Severity: Critical, Important, Nice to have
3. Recommended fixes
4. Apply only safe fixes immediately
5. Do not make risky changes without explaining them

Important safety instructions:
- Do not redesign the whole site.
- Do not remove important pages.
- Do not change business strategy.
- Do not add new products.
- Do not add fake reviews.
- Do not create fake urgency.
- Prioritize launch blockers first.

Expected output:
- Final audit report
- Safe fixes applied
- Remaining recommendations
- Launch readiness score from 1 to 10
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


---

