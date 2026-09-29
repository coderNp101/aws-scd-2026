# Pokhara Cloud Showcase

Build a single-page, fully static, visually stunning website for "AWS Student Community Day 2026 – Pokhara", a one-day tech event organized by four student clubs. This must NOT look like a generic template, SaaS landing page, or default shadcn layout. It should feel like a top-tier, award-worthy event site: bold, modern, cinematic, and unmistakably AWS-inspired. Design quality is the #1 priority. Take inspiration from other AWS Student Community Day websites (structure, energy, cloud/tech visual language), but make this one more polished, more original, and more memorable.

## TECH
- React + Vite + TypeScript + Tailwind, framer-motion for animation.
- Single page, smooth-scroll anchor navigation. No backend, no auth, no database.
- Keep ALL editable content (speakers, schedule, team, partners, FAQs, past events, links, event date) in one separate data file (e.g. /src/data/content.ts) so it's easy to update.
- Fully responsive (mobile-first), fast, accessible, with prefers-reduced-motion respected.

## DESIGN SYSTEM (AWS-aligned)
- Colors: Squid Ink #232F3E as the main dark base, deeper navy #0F1B2D for backgrounds, AWS Orange #FF9900 as the primary accent, darker orange #EC7211 for hovers/gradients, white #FFFFFF, light gray #F2F3F3 for light sections, and a small touch of AWS blue #146EB4 for secondary highlights. Dark theme dominant, with occasional light sections for contrast and rhythm.
- Typography: a distinctive modern display font for headings (e.g. Space Grotesk or Sora), clean Inter for body, JetBrains Mono for small tech labels/tags. Big, confident headline typography with strong hierarchy.
- Visual language: cloud-infrastructure aesthetic. Think glowing orange nodes and connecting lines, subtle animated grid or dot-matrix background, gradient mesh glows, glassmorphism cards with thin borders, orange gradient text on key words, terminal/CLI-style micro details, and Himalayan mountain / Pokhara lake silhouettes woven in subtly to give the site a local identity (Annapurna range, Phewa lake, Fishtail).
- Consistent spacing, rounded corners, layered depth, soft glows. Avoid flat boxes, default gray cards, and stock-looking layouts.

## MOTION & SCROLL EFFECTS (make it feel alive)
- Cinematic hero with animated background (floating cloud nodes/particles, parallax mountain layers), staggered text reveal, and a glowing CTA.
- Scroll-triggered reveal animations on every section (fade/slide/blur-in, staggered children).
- Parallax layers, scroll progress bar at the top, sticky glassmorphic navbar that changes style on scroll with active-section highlighting (scroll-spy).
- Animated live countdown timer, animated number counters, 3D tilt/hover-lift on cards with glow following the cursor, magnetic buttons, infinite marquee for partner logos, animated timeline line that draws itself as you scroll.
- Section headings with a subtle text-reveal effect. Smooth, polished, never janky or overdone.

## SECTIONS (in this order, one page)
1. **Navbar** – logo + links (Home, About, Events, Speakers, Schedule, Partners, Team, FAQs, Contact) + a highlighted "Register" button. Mobile hamburger menu with animated drawer.

2. **Home / Hero** – full-screen. Event title "AWS Student Community Day 2026", subtitle "Pokhara", tagline [YOUR TAGLINE], date, venue, and two CTAs: "Register Now" (links to Meetup page) and "Become a Speaker". Stunning animated background as described above. Scroll-down indicator.

3. **About** – about the AWS Student Community Day and what attendees will learn/experience. Include animated stat counters (e.g. [X] attendees, [X] speakers, [X] sessions, 1 day). Then a "Organized by" subsection showcasing the 4 organizing clubs as beautiful logo cards: [CLUB 1], [CLUB 2], [CLUB 3], [CLUB 4], each with a short description.

4. **Events (Past Events)** – showcase previous editions/events as visually rich cards or a horizontal-scroll/gallery with image, title, year, and short description. Use placeholder images for now.

5. **Register** – bold, eye-catching call-to-action band with "Event starts in" live countdown (Days / Hours / Minutes / Seconds) to [EVENT DATE & TIME, e.g. 2026-MM-DD 09:00 NPT], and a large glowing "Register" button linking to [MEETUP PAGE URL] (open in new tab).

6. **Speakers** – "Featured Speakers" in premium card form: photo, name, role/company, session title, short bio, social links (LinkedIn/X/GitHub). Hover reveals extra details with a tilt/glow effect. Use 6 placeholder speakers.

7. **Schedule** – one-day vertical timeline with an animated connecting line. Each entry: time, session title, speaker, tag/track (Keynote, Talk, Workshop, Break, Networking). Include placeholders from registration (~9:00) to closing (~5:00).

8. **Call for Speakers** – striking section inviting speakers to submit talks, brief on what topics we want (AWS, cloud, AI/ML, DevOps, serverless, security, career, etc.), and a prominent "Apply as a Speaker" button linking to [GOOGLE FORM URL] (new tab). Also mention deadline: [DEADLINE].

9. **Partners** – grouped by category with clear headings and logo tiles: Sponsors, Community Partners, Media Partners, Internet Partner, Training Partner. Use placeholder logos, grayscale-to-color hover, marquee or elegant grid. Include a "Become a Partner" mini-CTA.

10. **Team** – "Meet Our Team": modern member cards with photo, name, role, and social icons (LinkedIn, Facebook, Instagram, GitHub). Optionally grouped by club or role.

11. **FAQs** – smooth animated accordion dropdowns with 8 sensible questions (Is it free? Who can attend? Where is it? What should I bring? Certificates? Food? Can I volunteer? Can I speak?). Styled to match the theme, not default.

12. **Map** – section with embedded Google Map iframe for the venue [VENUE NAME & ADDRESS, Pokhara], venue details card beside it (address, how to reach, landmark), and a "Get Directions" button.

13. **Footer** – rich, well-designed footer: logo, short description, quick links, contact info ([EMAIL], [PHONE]), social icons for the organizing clubs, a "Register" CTA, and a copyright line: "AWS Student Community Day 2026 Pokhara. This is a community-run event and is not officially operated by Amazon Web Services." Add a subtle animated gradient divider at the top.

## QUALITY BAR
- Every section must feel custom-designed, with its own layout idea, not the same card grid repeated.
- Strong visual rhythm: alternate dark and light sections, use large typography, generous whitespace, and layered backgrounds.
- Consistent design tokens (CSS variables/Tailwind theme) for colors, radii, shadows, glows.
- Real-looking placeholder content (no lorem ipsum), placeholder images from a consistent style, alt text on all images.
- Perfect on mobile, tablet, and desktop. No layout shift, no horizontal scroll bugs.
- Add smooth 404-safe anchor links, a favicon, page title, and OpenGraph meta tags for the event.

Build the complete site now, with the design polished and production-ready.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6ac347a2-2140-470d-a42a-93b20050f60c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
