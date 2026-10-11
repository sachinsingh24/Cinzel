# Build Prompt — Saints Voyager Responsive Landing Page

Act as a senior frontend engineer and recreate the supplied Saints Voyager Canva landing-page design as a polished, production-ready, responsive website.

## Source material
- Design reference: `assets/canva-design-reference.png`
- Use these exact supplied photo assets:
  - `assets/yacht-deck-bespoke-travel.jpg` — Bespoke Travel Packages
  - `assets/dinner-party-corporate-events.jpg` — Events & Corporate Parties
  - `assets/beach-wedding-destination-events.jpg` — Destination Events
- Design source: https://www.canva.com/design/DAHXovnGtWk/vF4Eu4hRkB02cFEE2pd3fQ/edit

## Goal
Match the screenshot closely while making the page responsive on mobile, tablet, laptop, and large desktop. Do not put the full screenshot into the page as a single image; build the page from semantic HTML/components and the separate image assets.

## Visual direction
- Luxury, minimal, editorial travel-concierge branding.
- Main colors: deep navy (approximately #0B1E3A), warm ivory (approximately #F5F0E7), muted gold (approximately #C9A45C), and white.
- Use elegant high-contrast serif display typography for headlines and service labels; clean sans-serif for contact details.
- Keep generous whitespace and restrained decoration.
- Hero should use a full-bleed yacht/helm background, dark navy translucent overlay, centered brand lockup, headline and tagline. Use `background-size: cover`, `background-position: center 55%`, and adjust the focal point on small screens.
- Add a soft curved/wave-like boundary from the hero to the ivory service section (CSS `clip-path`, SVG, or pseudo-element; it must not cause horizontal overflow).
- Services area has a left-aligned heading and two-line intro, then three equal image cards. Each card uses `object-fit: cover`, a dark gradient overlay behind the white serif label, and consistent dimensions. Add slim vertical dividers between cards on desktop.
- Center the “Let’s Connect for your Upcoming Plans” CTA below the cards.
- Footer has a centered Saints Voyager wordmark, then Email / Phone / Social columns.
- Use the exact visible text below.

## Content
Brand:
- SAINTS
- VOYAGER
- TRAVEL & CONCIERGE

Hero:
- LUXURY TRAVEL CONCIERGE
- Go somewhere worth the jet lag.
- Member Requests Registration

Services:
- Services
- From exceptional stays to extraordinary experiences,
- We curate bespoke journeys shaped around your tastes, your pace, and your idea of luxury.
- Bespoke Travel Packages
- Events & Corporate Parties
- Destination Events

CTA:
- Let’s Connect for your Upcoming Plans

Footer:
- Email — info@saintsvoyager.com
- Phone — (+91) 81281 23456
- Social — Instagram icon/link

## Responsive behavior
- Desktop (≥ 1024px): hero is approximately 460–500px tall at 1366px width; centered content; services cards in one row with separators; footer contact items in three columns.
- Tablet (768–1023px): hero text scales down; cards remain three columns only if each card retains adequate width, otherwise use a 2+1 layout; reduce whitespace.
- Mobile (< 768px): hero uses a viewport-aware height (roughly 620–720px depending on device); headline wraps cleanly and never clips; CTA is comfortably tappable; services cards stack vertically with 16–24px gaps; hide vertical separators; footer contact blocks stack or form a two-column layout as space permits.
- Ensure no horizontal overflow at 320px width.
- Use responsive `clamp()` typography, fluid paddings, and max-width containers.
- Respect `prefers-reduced-motion`.
- Keep links and buttons keyboard accessible with visible focus rings and sufficient contrast.

## Functional requirements
- “Member Requests Registration” and “Let’s Connect for your Upcoming Plans” must be real links/buttons. If destinations are unknown, use clearly named placeholder URLs/configuration and centralize them so they can be replaced easily. Do not invent a form submission backend.
- Email uses `mailto:info@saintsvoyager.com`.
- Phone uses `tel:+918128123456`.
- Instagram icon links to a configurable Instagram URL; if unknown, use a placeholder constant and make it easy to update.
- Use semantic landmarks (`header`, `main`, `section`, `footer`), meaningful alt text, and correct heading hierarchy.
- Optimize images with appropriate dimensions and lazy-load service images. Do not lazy-load the hero background if it causes visible delay.
- Avoid unnecessary JavaScript; prefer CSS for the wave, overlays, layout and responsive behavior.

## Suggested component structure
- `HeroSection`
- `ServicesSection`
- `ServiceCard`
- `ContactCTA`
- `SiteFooter`
- `BrandWordmark`

## Acceptance checklist
1. Desktop composition resembles the reference in spacing, typography, image order, colors and hero overlay.
2. The three supplied service images are used exactly, in the correct order.
3. The hero, wave transition, cards and footer reflow correctly on mobile and tablet.
4. No clipped text, broken images, horizontal scrolling, or console errors.
5. Buttons/links work and use the correct mailto/tel behavior.
6. Code is organized, readable, and ready for future replacement of placeholder logo/CTA destinations.
7. Include setup/run instructions and a brief list of files changed.
