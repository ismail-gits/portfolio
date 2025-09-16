import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mohammed Ismail",
  initials: "MI",
  url: "https:ismaildevzone.tech",
  location: "Bengaluru, KA",
  description:
    "Passionate developer building AI-integrated applications using modern web technologies and cloud-native architectures.",
  summary:
    "A passionate developer specializing in building AI-integrated, full-stack applications using modern technologies like Next.js, TypeScript, React, and tRPC. As a Computer Science graduate, I've developed multiple production-ready feature-rich applications featuring real-time collaboration, intelligent automation, and seamless user experiences through robust, type-safe architectures, and I'm actively seeking opportunities at innovative product-based companies.",
  avatarUrl: "/me.png",
  skills: [
    "Java",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "Hono",
    "tRPC",
    "Inngest",
    "Spring Boot",
    "CI/CD",
    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "Ansible",
    "PostgreSQL",
    "MongoDB",
    "Drizzle ORM",
    "Prisma ORM",
    "Helm",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "mohammedismail72425@gmail.com",
    tel: "+919110274031",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ismail-gits",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammedismaildevops/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Ismailstwtt",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "Presidency University",
      href: "https://presidencyuniversity.in/",
      degree:
        "Bachelor of Technology in Computer Science and Engineering (CSE)",
      logoUrl: "/presidency-university-logo.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Meetvix",
      href: "https://meetvix.ismaildevzone.tech",
      dates: "June 2025 - Aug 2025",
      active: true,
      description:
        "Designed and Developed an AI-powered meeting platform using Next.js, TypeScript, and tRPC featuring real-time video conferencing, intelligent virtual agents, and automated transcriptions. Implemented event-driven automation with Inngest for meeting lifecycle management while maintaining 100% end-to-end type safety through tRPC and Zod validation. Integrated complex third-party services including Better Auth, Polar billing, and AI APIs to deliver a seamless user experience across authentication, payments, and intelligent features.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "tRPC",
        "TanStack Query",
        "Drizzle ORM",
        "Better Auth",
        "Inngest",
        "OpenAI",
        "Polar",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https:meetvix.ismaildevzone.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ismail-gits/meetvix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/meetvix.png",
      video: "",
    },
    {
      title: "Nyvo",
      href: "https://nyvo.ismaildevzone.tech",
      dates: "April 2025 - June 2025",
      active: true,
      description:
        "Designed and Developed a canvas-based design platform using Fabric.js and Next.js featuring real-time collaboration, advanced graphics, and multi-layer management. Integrated AI/ML services including Google Gemini for text-to-image generation and Remove.bg for background removal, while implementing a subscription billing system with Stripe integration and usage-based limits. Built a high-performance file system supporting multiple export formats including PNG, JPG, SVG, and PDF.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "Fabric.js",
        "Hono API",
        "Drizzle ORM",
        "NextAuth",
        "PostgreSQL",
        "Gemini AI",
        "Remove.bg",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://nyvo.ismaildevzone.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ismail-gits/nyvo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nyvo.png",
      video: "",
    },
  ],
} as const;
