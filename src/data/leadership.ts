export interface Leader {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string[];
  highlights: string[];
}

export const leadershipData: Leader[] = [
  {
    id: "shahim",
    name: "Eng. Muhammed Shahim E.S.",
    title: "Managing Partner & CEO",
    image: "/owner.jpeg",
    bio: [
      "Eng. Muhammed Shahim E.S. brings extensive international construction and leadership experience to Jeevana.",
      "His career encompasses significant exposure to global mega-projects, equipping him with world-class engineering standards and project management capabilities."
    ],
    highlights: [
      "King Abdulaziz International Airport, Jeddah",
      "Kingdom Tower, Jeddah",
      "Abraj Kudai Project, Jeddah",
      "Sidra Hospital, Doha, Qatar"
    ]
  },
  {
    id: "shafeeh",
    name: "Shafeeh E.S.",
    title: "Executive Partner & Operations Head",
    image: "/Shafeeh-E-S.jpeg",
    bio: [
      "Shafeeh E.S. is the driving force behind our on-site execution and operations.",
      "With a strong background in civil engineering, he specializes in high-rise construction, complex residential projects, and seamless workforce coordination."
    ],
    highlights: [
      "Civil Engineering",
      "High-Rise Construction",
      "Site Execution & Project Coordination",
      "Quality & Workforce Management"
    ]
  }
];
