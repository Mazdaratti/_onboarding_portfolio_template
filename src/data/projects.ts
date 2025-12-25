export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Testing Platform & CI Stability",
    description:
      "Built end-to-end testing infrastructure across JavaScript and Python services. Authored Jest unit/integration suites, Playwright E2E flows, and smoke checks to stabilize CI pipelines and improve reliability.",
    tags: ["Playwright", "Jest", "Pytest", "CI/CD", "Automation"],
    image: "/images/project-placeholder.svg",
  },
  {
    title: "Authentication Service",
    description:
      "Microservice handling user authentication with Fastify, JWT, and shared schema validation. Implemented secure login and refresh token flow, integrated Dockerized Postgres, and added route-level test coverage.",
    tags: ["Fastify", "JWT", "Docker", "PostgreSQL", "Zod", "Kafka"],
    image: "/images/project-placeholder.svg",
    repo: "https://github.com/MaliLala/layered-auth-service",
  },
  {
    title: "User Management Service",
    description:
      "Service responsible for user profiles, relations, and metadata. Integrated Zod-based validation, added Kafka event publishing, and maintained consistency between services in a shared architecture.",
    tags: ["Fastify", "PostgreSQL", "Kafka", "Zod", "Docker"],
    image: "/images/project-placeholder.svg",
    repo: "https://github.com/MaliLala/layered-users-service",
  },
  {
    title: "Web Client",
    description:
      "Frontend built with React and Remix, providing a unified interface for multiple microservices. Contributed to authentication flow, reusable UI components, and automated testing using Playwright and Vitest.",
    tags: ["React", "Remix", "TypeScript", "Tailwind CSS", "Playwright", "Vitest"],
    image: "/images/project-placeholder.svg",
    repo: "https://github.com/MaliLala/layered-web-client",
  },
  {
    title: "Instagram Clone",
    description:
      "Full-stack social media demo app with Fastify backend and React frontend. Implemented Reels, Tagged, and Highlights modules using TDD and Zod schemas, plus component and API tests.",
    tags: ["React", "Fastify", "TypeScript", "Zod", "Tailwind CSS", "Vitest"],
    image: "/images/project-placeholder.svg",
    link: "https://insta-clone-react-frontend.vercel.app",
    repo: "https://github.com/MaliLala/insta-clone-react-frontend",
  },
  {
    title: "MarketMate Test Automation",
    description:
      "Migrated a Selenium + PyTest suite to Playwright with a clean Page Object Model. Added reliable waits, CI-ready fixtures, and coverage for login, reviews, and shipping cost flows.",
    tags: ["Playwright", "Python", "Pytest", "POM", "CI/CD"],
    image: "/images/project-placeholder.svg",
    repo: "https://github.com/MaliLala/MarketMateTestAutomation",
  },
];
