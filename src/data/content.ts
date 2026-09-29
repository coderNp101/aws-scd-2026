export const event = {
  name: "AWS Student Community Day 2026",
  city: "Pokhara",
  tagline: "Build beyond the clouds.",
  dateLabel: "Saturday, 21 November 2026",
  dateISO: "2026-11-21T09:00:00+05:45",
  venue: "Ranjit Event Center",
  address: "Ranjit Event Center, Pokhara, Nepal",
  landmark: "A short walk from Phewa Lake and Hallan Chowk",
  meetupUrl: "https://www.meetup.com/aws-student-community-pokhara/",
  speakerFormUrl: "https://forms.google.com/",
  partnerEmail: "mailto:hello@awsscdpokhara.org?subject=Partnership%20inquiry",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Ranjit+Event+Center+Pokhara+Nepal",
  email: "awscc@ioepas.edu.np",
  phone: "+977 9866212789",
  mapEmbedUrl: "https://www.google.com/maps?q=Ranjit+Event+Center,+Pokhara,+Nepal&output=embed",
  speakerDeadline: "30 September 2026",
};

export const navItems = [
  ["Home", "home"], ["About", "about"], ["Events", "events"], ["Speakers", "speakers"],
  ["Schedule", "schedule"], ["Partners", "partners"], ["Team", "team"], ["FAQs", "faqs"], ["Contact", "contact"],
] as const;

export const socialLinks = {
  linkedin: "https://www.linkedin.com/",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  github: "https://github.com/",
  x: "https://x.com/",
} as const;

export const stats = [
  { value: 500, suffix: "+", label: "Curious builders" },
  { value: 24, suffix: "+", label: "Cloud voices" },
  { value: 16, suffix: "", label: "Hands-on sessions" },
  { value: 1, suffix: " day", label: "Infinite possibilities" },
];

export const clubs = [
  { initials: "IOE", name: "AWS Student Builder Group: IOE Pashchimanchal", description: "Cloud builders from IOE Pashchimanchal Campus learning, experimenting, and shipping together." },
  { initials: "PEC", name: "AWS Student Builder Group: PEC", description: "Student builders at Pokhara Engineering College turning cloud ideas into practical projects." },
  { initials: "PN", name: "AWS Student Builder Group: PN", description: "A hands-on network for learners exploring AWS, software, data, and emerging technology." },
  { initials: "GCES", name: "AWS Student Builder Group: GCES", description: "Builders at Gandaki College of Engineering and Science growing through shared technical practice." },
];

export const pastEvents = [
  { year: "2025", title: "Community Day Kathmandu", description: "A packed day of architecture stories, live demos, and new connections.", image: "community" },
  { year: "2025", title: "Cloud Builder Workshop", description: "Student teams shipped their first serverless applications before sunset.", image: "workshop" },
  { year: "2024", title: "AI on AWS Meetup", description: "An evening of practical generative AI sessions with Nepal’s builder community.", image: "community" },
];

export const speakers = [
  { name: "Person 1", role: "Speaker details coming soon", talk: "Session announcement coming soon", bio: "Speaker profile and session details will be announced soon." },
  { name: "Person 2", role: "Speaker details coming soon", talk: "Session announcement coming soon", bio: "Speaker profile and session details will be announced soon." },
  { name: "Person 3", role: "Speaker details coming soon", talk: "Session announcement coming soon", bio: "Speaker profile and session details will be announced soon." },
  { name: "Person 4", role: "Speaker details coming soon", talk: "Session announcement coming soon", bio: "Speaker profile and session details will be announced soon." },
  { name: "Person 5", role: "Speaker details coming soon", talk: "Session announcement coming soon", bio: "Speaker profile and session details will be announced soon." },
  { name: "Person 6", role: "Speaker details coming soon", talk: "Session announcement coming soon", bio: "Speaker profile and session details will be announced soon." },
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
  { name: "Person 1", role: "Event Lead", club: "IOE Pashchimanchal" },
  { name: "Person 2", role: "Program Lead", club: "PEC" },
  { name: "Person 3", role: "Partnerships", club: "PN" },
  { name: "Person 4", role: "Community", club: "GCES" },
  { name: "Person 5", role: "Experience", club: "IOE Pashchimanchal" },
  { name: "Person 6", role: "Marketing", club: "PEC" },
  { name: "Person 7", role: "Technology", club: "PN" },
  { name: "Person 8", role: "Operations", club: "GCES" },
];

export const footerContent = {
  organizedBy: "Organized by AWS Cloud Club IOE Pashchimanchal & AWS Cloud Club Prithvi Narayan Campus.",
  quickLinks: [
    ["About", "about"],
    ["Schedule", "schedule"],
    ["Speakers", "speakers"],
    ["Register", "register"],
    ["FAQ", "faqs"],
  ],
  coordinators: [
    { name: "Yojana Ghimire", phone: "+977 9866212789" },
    { name: "Aayusha Adhikari", phone: "+977 9703322118" },
    { name: "Savyata Bhurtel", phone: "+977 9846917029" },
  ],
  designedBy: "Sujal Shrestha",
};

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
