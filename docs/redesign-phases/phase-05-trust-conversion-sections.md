# Phase 05: Trust And Conversion Sections

## 1. Phase Goal

Improve ecommerce confidence with calm, useful trust sections that support buying decisions without clutter.

## 2. What Problem This Phase Solves

The current site includes policy and support references, but they read partly like pre-launch disclaimers. Wag & Roam needs trust content that feels polished and conversion-friendly.

## 3. UI/UX Recommendations

- Add or refine trust cues: shipping clarity, easy support, secure checkout status, product care guidance, simple returns, and practical use cases.
- Use concise trust cards, not long blocks.
- Add a section that explains “Why Wag & Roam” in 3 points: calm outings, compact essentials, easy cleanup.
- Place conversion support near CTAs and before checkout links.
- Keep FAQ preview short and link to full FAQ.
- Make final CTA specific: shop the walk kit, compare products, or build your outing set.

## 4. Interaction Recommendations

- Keep FAQ accordion simple and accessible.
- Use smooth open/close only if CSS-only or lightweight and reduced-motion safe.
- Use hover states on trust cards only when they are links.

## 5. Files Likely To Be Created Or Edited

- `src/app/page.tsx`
- `src/app/faq/page.tsx`
- `src/app/shop/page.tsx`
- `src/components/site-footer.tsx`
- `src/app/globals.css`
- Policy pages if copy needs consistency

## 6. Exact Codex Prompt To Execute This Phase

```text
Use the ui-ux-pro-max skill. Complete Phase 05 only from docs/redesign-phases/phase-05-trust-conversion-sections.md. First recommend trust and conversion sections for Wag & Roam and list files before editing. Wait for my approval. Keep copy concise, trustworthy, and non-gimmicky.
```

## 7. Expected Output

- Stronger ecommerce trust hierarchy.
- Cleaner FAQ preview and final CTA.
- Support/policy links feel intentional.
- Less pre-launch sounding copy where appropriate.

## 8. Testing Checklist

- Run `npm run typecheck`.
- Test FAQ accordions with keyboard.
- Verify all trust links go to valid pages.
- Check mobile spacing and CTA placement.
- Confirm copy avoids unsupported claims.

## 9. Mistakes To Avoid

- Do not invent shipping times, guarantees, or return windows.
- Do not add too many badges.
- Do not use trust copy that sounds generic or spammy.
- Do not hide important policy information.

## 10. Approval Checkpoint

Stop after trust/conversion work and ask for approval before Phase 06.

