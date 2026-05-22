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
