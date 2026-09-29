import { createFileRoute } from "@tanstack/react-router";
import EventPage from "@/components/EventPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AWS Student Community Day 2026 — Pokhara" },
      { name: "description", content: "Join Nepal’s student cloud community in Pokhara for one day of AWS, AI, serverless, security, workshops, and meaningful connections." },
      { property: "og:title", content: "AWS Student Community Day 2026 — Pokhara" },
      { property: "og:description", content: "Build beyond the clouds with Nepal’s next generation of cloud creators." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventPage,
});