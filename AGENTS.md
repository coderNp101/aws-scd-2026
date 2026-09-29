<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history.
<!-- LOVABLE:END -->

- Keep all public-facing event content in `src/data/content.ts` so non-layout updates stay centralized.
- Keep the event experience as one scrolling route at `/`; navigation uses stable section anchors because the requested format is explicitly single-page.
- Use procedural CSS and pointer-responsive motion for the hero rather than a photographic hero asset, keeping the first screen lightweight and interactive.
