export type LinkItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  lookingFor: string;
  avatar: string;
  resumeUrl: string;
  skills: string[];
  links: LinkItem[];
};

export const profile: Profile = {
  name: "Goran Csonkity",
  role: "QA Engineer / SDET",
  summary:
    "QA-focused engineer building and testing web apps with TypeScript, React, Fastify, and Playwright. I value clean architecture, TDD, and practical automation that adds confidence. I enjoy helping new interns get started and sharing what I’ve learned along the way.",

  location: "Berlin, Germany",
  email: "csonkityg@gmail.com",
  lookingFor: "QA / SDET roles in Europe (remote or hybrid)",
  avatar: "/images/avatar.svg",
  resumeUrl: "https://www.linkedin.com/in/goran-csonkity",
  skills: [
    // Core Languages & Runtime
    "TypeScript",
    "JavaScript (ES6+)",
    "Python",
    "Node.js",

    // Frontend
    "React",
    "Next.js",
    "Zustand",
    "Tailwind CSS",
    "HTML5 / CSS3",

    // Backend & APIs
    "Fastify",
    "REST APIs",
    "JWT Authentication",
    "Zod Validation",

    // Databases & Data
    "PostgreSQL",
    "SQL",
    "Dockerized Postgres",
    "Migrations",

    // Messaging / Streaming
    "Kafka",
    "Event-driven Architecture",

    // Testing & QA
    "Playwright",
    "Vitest",
    "Jest",
    "Pytest",
    "Selenium (legacy)",
    "TDD / BDD",
    "Integration Testing",
    "E2E Testing",
    "CI/CD Pipelines",

    // DevOps & Tools
    "Docker",
    "Git / GitHub",
    "GitHub Actions",
    "VS Code",
    "Linux",
    "Shell / CLI Tools",

    // Patterns & Practices
    "Clean Architecture",
    "Page Object Model (POM)",
    "Microservices",
    "Schema Submodules",
    "Test Strategy Design",

    // Collaboration
    "Onboarding Support for New Interns",
    "Knowledge Sharing",
    "Team Communication",
    "Cross-functional Collaboration"
  ],
  links: [
    { label: "GitHub", href: "https://github.com/MaliLala" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/goran-csonkity" },
    { label: "Email", href: "mailto:csonkityg@gmail.com" },
  ],
};
