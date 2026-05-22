# Wag & Roam Design System

Wag & Roam should feel minimalist, premium, calm, trustworthy, mobile-first, and lightly interactive. The system favors warm neutrals, sage accents, deep forest contrast, modest radii, readable typography, and restrained motion.

## Color Tokens

- Background: warm cream for the page base.
- Surface: soft ivory/white for cards, product panels, cart, and checkout.
- Muted surface: warm beige for alternating sections.
- Primary: deep forest for headings, primary buttons, and high-confidence actions.
- Secondary: sage green for selected states, badges, and calm accents.
- Accent: muted clay for small highlights and eyebrow labels.
- Text: deep charcoal/forest.
- Muted text: warm gray-green with readable contrast.
- Border: low-contrast forest tint, visible on both cream and white surfaces.

## Typography

- Primary family: `DM Sans`.
- Use one family with multiple weights for a premium but approachable commerce feel.
- Keep headings strong and readable; avoid high-contrast editorial serif styling for now.
- Preserve default letter spacing for professional mobile readability.

## Spacing And Shape

- Mobile-first page gutters use responsive clamp tokens.
- Section spacing is generous but not oversized on small screens.
- Radius scale stays modest: 8px, 12px, 16px.
- Cards use border plus soft shadow, not heavy glass effects.

## Interaction Rules

- Default transition duration: 160-220ms.
- Animate color, border, opacity, box-shadow, and very small transforms only.
- Avoid parallax, scroll-jacking, decorative infinite motion, and slow effects.
- Preserve visible focus states.
- Respect `prefers-reduced-motion`.

## Ecommerce UI Rules

- Primary CTA: deep forest button.
- Secondary CTA: light surface with visible border.
- Product cards should show benefit, price, and action clearly.
- Trust content should be visible but calm.
- Mobile touch targets should stay at least 44px.

