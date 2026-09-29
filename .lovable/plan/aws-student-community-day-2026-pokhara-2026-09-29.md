# AWS Student Community Day 2026 – Pokhara

## Goal
Build a polished, fully static, single-page event website with a cinematic AWS-inspired identity, smooth anchor navigation, and all editable event information centralized in one data file.

## Build
- Define the dark navy, AWS orange, blue, white, and light-section design tokens, typography, glows, grids, and motion system.
- Create one content file for event details, navigation, clubs, past events, speakers, schedule, partner groups, team, FAQs, map, and links.
- Build the page in the requested order: sticky navigation, immersive Pokhara hero, about and counters, past events, countdown registration band, speakers, schedule, speaker call, partners, team, FAQs, map, and footer.
- Add custom interactive details: mobile drawer, scroll progress and active section state, reduced-motion-aware reveals, countdown, counters, parallax scenery, card tilt/glow, partner marquee, schedule progress, and accordion.
- Use a cohesive set of generated Himalayan/event imagery and original CSS scenery rather than stock placeholders.
- Add event-specific metadata, favicon treatment, keyboard focus states, semantic landmarks, descriptive image text, and safe external links.

## Validation
- Verify the production preview has no build/runtime errors.
- Inspect desktop and mobile layouts for overflow, readability, navigation behavior, and key interactions.

## Technical details
- Keep TanStack Start’s existing React/Vite routing while delivering the experience at `/` as one scrolling page.
- Add Motion for React and keep every visual color behind semantic theme tokens in `src/styles.css`.
- Record the centralized-content and single-page architecture in `AGENTS.md`.
