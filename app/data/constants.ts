export const PERSONAL = {
  name: "Sithija Shehara",
  title: "Senior Software Engineer",
  bio: "I build scalable, performant web applications with React, Next.js, and modern backend technologies. Focused on clean architecture, thoughtful design, and delivering products that are both technically solid and genuinely useful.",
  email: "nsithijashehara@gmail.com",
  github: "https://github.com/Sithija97",
  linkedin: "https://www.linkedin.com/in/sithijashehara/",
  twitter: "https://x.com/sithijashehara",
  resumeFilename: "Sithija_Shehara_Resume.pdf",
} as const;

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "SCSS",
  "Tailwind CSS",
  "Git",
  "Docker",
  "React Native",
  "Expo",
] as const;

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Aventude",
    period: "May 2023 — Present",
    location: "Colombo, Sri Lanka",
    highlights: [
      "Built a reusable React component library adopted across multiple product teams.",
      "Built a rich text editor on Meta's Lexical framework, plus analytics dashboards used in production.",
      "Profiled and reworked data fetching and rendering paths to reduce unnecessary re-renders and network calls.",
      "Mentored junior engineers on React and Redux patterns, including code review and pairing.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Aventude",
    period: "Mar 2022 — May 2023",
    location: "Colombo, Sri Lanka",
    highlights: [
      "Extended a low-code platform's editor UI in React/TypeScript, adding features that drove internal adoption.",
      "Worked full-stack on a legal case management system, from API design to UI implementation.",
      "Profiled slow API endpoints and front-end render paths, then fixed the specific bottlenecks found.",
      "Migrated a legacy class-component codebase to functional components and hooks.",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  challenge: string;
  tags: string[];
  image: string | null;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  github: string;
  live: string | null;
}

export const PROJECTS: Project[] = [
  {
    title: "SkillHub",
    description:
      "A community platform for creating, versioning, forking, and sharing AI coding assistant prompts (\"skills\") for tools like Claude, Cursor, Copilot, Windsurf, and Continue — think npm for prompt engineering.",
    challenge:
      "Key challenge: forking a skill has to stay consistent under concurrent writes, so skill creation, tag copying, the initial version snapshot, and the original's fork count are all wrapped in a single Prisma transaction rather than sequential writes.",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Clerk"],
    image: "/projects/project-4.png",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "Screenshot of the SkillHub explore page showing a grid of community-created AI coding skills with tool and tag filters",
    github: "https://github.com/Sithija97/skill-hub",
    live: "https://skill-hub-v1.vercel.app/",
  },
  {
    title: "JS Event Loop Visualizer",
    description:
      "An interactive tool that visualizes how JavaScript handles async operations with the event loop, microtasks, and macrotasks through step-by-step simulations.",
    challenge:
      "Key challenge: the analyzer traces real execution by monkey-patching setTimeout/queueMicrotask/console.log inside a Web Worker, then has to detect when tracing is actually finished with no reliable end signal — solved with a quiet-period check that polls pending micro/macrotask counts.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/project-2.png",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "Screenshot of the JS Event Loop Visualizer showing the call stack, microtask, and macrotask queues",
    github: "https://github.com/Sithija97/JS-Visualizer",
    live: "https://js-visualizer-jade.vercel.app/",
  },
  {
    title: "Mo Marketplace (Assessment)",
    description:
      "A full-stack e-commerce marketplace built as a take-home technical assessment: NestJS/TypeORM/PostgreSQL API with a React + Vite frontend, JWT access + refresh-token auth, role-based access control, and product browsing with search, filters, and pagination.",
    challenge:
      "Key challenge: quick-buy has to decrement stock without overselling under concurrent requests, solved with a conditional SQL update on the variant row instead of a check-then-write from application code.",
    tags: ["NestJS", "TypeORM", "PostgreSQL", "React", "Vite", "TypeScript"],
    image: "/projects/project-5.png",
    imageWidth: 1600,
    imageHeight: 1000,
    imageAlt: "Screenshot of the Mo Marketplace sign-in screen",
    github: "https://github.com/Sithija97/Mo-Marketplace-Assessment",
    live: null,
  },
  {
    title: "Lexical Rich Text Editor",
    description:
      "A React and TypeScript-based rich text editor built with Meta's Lexical framework. Features include text formatting, font customization, code blocks with syntax highlighting, lists, links, alignment controls, and undo/redo support.",
    challenge:
      "Key challenge: migrating from Lexical v0.16 to v0.40 across breaking selection-model changes (GridSelection/NodeSelection/RangeSelection consolidated into BaseSelection) without breaking existing editor state.",
    tags: ["React", "TypeScript", "Lexical"],
    image: "/projects/project-1.png",
    imageWidth: 1400,
    imageHeight: 340,
    imageAlt: "Screenshot of the Lexical rich text editor toolbar and formatting controls",
    github: "https://github.com/Sithija97/Lexical-rich-text-editor-typescript",
    live: "https://lexical-rich-text-editor-typescript.vercel.app/",
  },
  {
    title: "LinkedIn Clone",
    description:
      "A full-stack social media platform with user authentication, posting, commenting, and interactions. Features user profiles, post feeds, like/unlike functionality, and comment management.",
    challenge:
      "Key challenge: sequencing image uploads to Cloudinary with post creation through Next.js server actions so a failed upload never leaves an orphaned post in MongoDB.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Clerk",
      "Cloudinary",
      "Tailwind CSS",
    ],
    image: "/projects/project-3.png",
    imageWidth: 1600,
    imageHeight: 700,
    imageAlt: "Screenshot of the LinkedIn Clone feed showing a post composer and profile sidebar",
    github: "https://github.com/Sithija97/linkedin-clone",
    live: "https://linkedin-clone-z.vercel.app/",
  },
];
