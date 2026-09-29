export const event = {
  name: "AWS Student Community Day 2026",
  city: "Pokhara",
  tagline: "Build beyond the clouds.",
  dateLabel: "Saturday, 21 November 2026",
  dateISO: "2026-11-21T09:00:00+05:45",
  venue: "Pokhara Event Center",
  address: "Lakeside Road, Pokhara 33700, Nepal",
  landmark: "A short walk from Phewa Lake and Hallan Chowk",
  meetupUrl: "https://www.meetup.com/aws-student-community-pokhara/",
  speakerFormUrl: "https://forms.google.com/",
  partnerEmail: "mailto:hello@awsscdpokhara.org?subject=Partnership%20inquiry",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Pokhara+Event+Center+Nepal",
  email: "hello@awsscdpokhara.org",
  phone: "+977 980-000-2026",
  mapEmbedUrl: "https://www.google.com/maps?q=Pokhara,Nepal&output=embed",
  speakerDeadline: "30 September 2026",
};

export const navItems = [
  ["Home", "home"], ["About", "about"], ["Events", "events"], ["Speakers", "speakers"],
  ["Schedule", "schedule"], ["Partners", "partners"], ["Team", "team"], ["FAQs", "faqs"], ["Contact", "contact"],
] as const;

export const stats = [
  { value: 500, suffix: "+", label: "Curious builders" },
  { value: 24, suffix: "+", label: "Cloud voices" },
  { value: 16, suffix: "", label: "Hands-on sessions" },
  { value: 1, suffix: " day", label: "Infinite possibilities" },
];

export const clubs = [
  { initials: "ASC", name: "AWS Cloud Club — Pokhara", description: "A student-led home for cloud learners, builders, and future architects." },
  { initials: "PEC", name: "Pokhara Engineering Club", description: "Turning ambitious engineering ideas into practical, community-led projects." },
  { initials: "CIC", name: "Cloud Innovation Circle", description: "Exploring serverless, AI, security, and the future of cloud-native technology." },
  { initials: "DSC", name: "Developers Society Pokhara", description: "Connecting the city’s next generation of software creators and open-source leaders." },
];

export const pastEvents = [
  { year: "2025", title: "Community Day Kathmandu", description: "A packed day of architecture stories, live demos, and new connections.", image: "community" },
  { year: "2025", title: "Cloud Builder Workshop", description: "Student teams shipped their first serverless applications before sunset.", image: "workshop" },
  { year: "2024", title: "AI on AWS Meetup", description: "An evening of practical generative AI sessions with Nepal’s builder community.", image: "community" },
];

export const speakers = [
  { name: "Aarav Shrestha", role: "Principal Cloud Architect · Fintech Labs", talk: "Designing systems that survive the unexpected", bio: "Aarav helps high-growth teams build resilient platforms across South Asia.", position: "0% 0%" },
  { name: "Nisha Gurung", role: "ML Engineer · Himalayan AI", talk: "From notebook to production: GenAI that works", bio: "Nisha turns ambitious machine-learning research into useful, responsible products.", position: "50% 0%" },
  { name: "Ritika Karki", role: "Developer Advocate · Cloud Native Nepal", talk: "Serverless without the mystery", bio: "Ritika teaches builders to move fast while keeping architecture simple.", position: "100% 0%" },
  { name: "Sujan Thapa", role: "Security Lead · SecureStack", talk: "Threat modelling for student builders", bio: "Sujan makes practical cloud security approachable from the first commit.", position: "0% 100%" },
  { name: "Pragya Bista", role: "Platform Engineer · Yeti Systems", talk: "The developer platform playbook", bio: "Pragya builds paved roads that help engineering teams ship with confidence.", position: "50% 100%" },
  { name: "Rohan Maharjan", role: "Solutions Architect · DataPeak", talk: "Real-time data from lake to insight", bio: "Rohan designs event-driven data systems for products used at national scale.", position: "100% 100%" },
];

export const schedule = [
  { time: "09:00", title: "Registration & mountain morning coffee", speaker: "Community team", tag: "Networking" },
  { time: "09:45", title: "Opening: Pokhara builds beyond the clouds", speaker: "Organizing clubs", tag: "Keynote" },
  { time: "10:15", title: "Designing systems that survive the unexpected", speaker: "Aarav Shrestha", tag: "Talk" },
  { time: "11:00", title: "Serverless without the mystery", speaker: "Ritika Karki", tag: "Talk" },
  { time: "11:45", title: "Build a production-ready AI workflow", speaker: "Nisha Gurung", tag: "Workshop" },
  { time: "13:00", title: "Lunch by the lake", speaker: "—", tag: "Break" },
  { time: "14:00", title: "The developer platform playbook", speaker: "Pragya Bista", tag: "Talk" },
  { time: "14:45", title: "Cloud security capture-the-flag", speaker: "Sujan Thapa", tag: "Workshop" },
  { time: "16:00", title: "Builder panel: careers without borders", speaker: "All featured speakers", tag: "Keynote" },
  { time: "16:45", title: "Closing notes & community photo", speaker: "Community team", tag: "Networking" },
];

export const partnerGroups = [
  { category: "Sponsors", names: ["CloudPeak", "DataYeti", "Kora Labs"] },
  { category: "Community Partners", names: ["Dev Pokhara", "Women in Cloud", "Open Source Nepal", "Techsansar"] },
  { category: "Media Partners", names: ["TechKagaj", "Digital Nepal"] },
  { category: "Internet Partner", names: ["Fewa Fiber"] },
  { category: "Training Partner", names: ["SkillFoundry"] },
];

export const team = [
  { name: "Sanjay Poudel", role: "Event Lead", club: "ASC", position: "0% 0%" },
  { name: "Aashika Rana", role: "Program Lead", club: "PEC", position: "33% 0%" },
  { name: "Bibek Adhikari", role: "Partnerships", club: "CIC", position: "66% 0%" },
  { name: "Srijana KC", role: "Community", club: "DSC", position: "100% 0%" },
  { name: "Roshan Giri", role: "Experience", club: "ASC", position: "0% 100%" },
  { name: "Samikshya Bhandari", role: "Marketing", club: "PEC", position: "33% 100%" },
  { name: "Niraj Lamichhane", role: "Technology", club: "CIC", position: "66% 100%" },
  { name: "Pratima Gurung", role: "Operations", club: "DSC", position: "100% 100%" },
];

export const faqs = [
  ["Is the event free?", "Yes. Registration is free, but seats are limited and confirmation is required."],
  ["Who can attend?", "Students from any discipline, recent graduates, educators, and curious technology builders are welcome."],
  ["Where is the event?", "The event is planned for Pokhara Event Center near Lakeside. Final entry details will be emailed to registered attendees."],
  ["What should I bring?", "Bring a charged laptop for workshops, your student ID, and plenty of questions. We will provide Wi-Fi and power."],
  ["Will I receive a certificate?", "Attendees who check in and participate through the closing session will receive a digital participation certificate."],
  ["Will food be provided?", "Morning refreshments, lunch, and afternoon tea are included for confirmed attendees."],
  ["Can I volunteer?", "Yes. Volunteer applications will open closer to the event through our community channels."],
  ["Can I speak at the event?", `Absolutely. Submit a focused, practical session before ${event.speakerDeadline}. First-time speakers are encouraged.`],
] as const;
