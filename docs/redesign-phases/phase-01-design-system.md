# Phase 01: Design System

## 1. Phase Goal

Define the Wag & Roam visual system before redesigning sections: color tokens, typography, spacing, radius, surfaces, buttons, cards, badges, forms, focus states, and motion rules.

## 2. What Problem This Phase Solves

The site currently has a good warm/sage foundation, but a redesign needs a tighter brand system so every page feels intentionally premium, calm, and consistent.

## 3. UI/UX Recommendations

- Keep the palette soft and grounded: cream background, warm beige surfaces, sage accents, warm gray body text, deep forest or charcoal for headings and CTAs.
- Avoid making the site too beige by using sage, deep forest, warm gray, and product imagery as balancing anchors.
- Use a refined sans-serif-first type system. Consider a premium display font only for large brand moments if it remains readable.
- Define spacing tokens for mobile-first rhythm: compact cards, comfortable section padding, and predictable gutters.
- Keep cards at modest radii and avoid overly bubbly shapes.
- Use semantic tokens such as `--color-background`, `--color-surface`, `--color-primary`, `--color-text`, `--color-muted`, `--color-border`, and `--shadow-card`.
- Define button hierarchy: primary shop CTA, secondary compare/detail CTA, quiet text links.

## 4. Interaction Recommendations

- Standardize transitions at 150-250ms for color, border, opacity, box-shadow, and small transform.
- Respect `prefers-reduced-motion`.
- Use visible focus states that match the brand palette.
- Avoid slow blur, parallax, constant floating, or decorative animations.

## 5. Files Likely To Be Created Or Edited

- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/components/site-header.tsx`
- `src/components/site-footer.tsx`
- Optional: `docs/design-system.md`

## 6. Exact Codex Prompt To Execute This Phase

```text
Use the ui-ux-pro-max skill. Complete Phase 01 only from docs/redesign-phases/phase-01-design-system.md. First explain the proposed Wag & Roam design system and list the files you plan to edit. Wait for my approval before editing. Keep the design minimalist, premium, mobile-first, calm, trustworthy, and lightly interactive.
```

## 7. Expected Output

- A documented design-token direction.
- Updated global CSS tokens only after approval.
- Consistent typography, color, spacing, surface, button, card, and focus rules.
- No section-level redesign yet unless needed for token testing.

## 8. Testing Checklist

- Run `npm run typecheck`.
- Run `npm run build` if practical.
- Check color contrast for headings, body text, muted text, and CTAs.
- Verify focus states with keyboard navigation.
- Check light mode readability on mobile.

## 9. Mistakes To Avoid

- Do not introduce heavy glassmorphism or low-contrast translucent text.
- Do not make every surface the same beige tone.
- Do not add a font that slows the site or harms readability.
- Do not redesign the entire homepage in this phase.

## 10. Approval Checkpoint

Stop after design-system changes and summarize changed files. Ask for approval before Phase 02.

