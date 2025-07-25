import {BookOpen, Bot, type LucideIcon, Settings2, SquareTerminal} from "lucide-react";

export type ProjectItem = {
  title: string;
  url: string;
}

export type ProjectGroupItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: ProjectItem[];
}

export const projectNavItems = [
  {
    title: "EnviDat",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "Frontend",
        url: "#",
      },
      {
        title: "Design",
        url: "#",
      },
      {
        title: "CI/CD",
        url: "#",
      },
    ],
  },
  {
    title: "Models",
    url: "#",
    icon: Bot,
    items: [
      {
        title: "Genesis",
        url: "#",
      },
      {
        title: "Explorer",
        url: "#",
      },
      {
        title: "Quantum",
        url: "#",
      },
    ],
  },
  {
    title: "Documentation",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Introduction",
        url: "#",
      },
      {
        title: "Get Started",
        url: "#",
      },
      {
        title: "Tutorials",
        url: "#",
      },
      {
        title: "Changelog",
        url: "#",
      },
    ],
  },
  {
    title: "Side-Projects",
    url: "#",
    icon: Settings2,
    items: [
      {
        title: "General",
        url: "#",
      },
      {
        title: "Team",
        url: "#",
      },
      {
        title: "Billing",
        url: "#",
      },
      {
        title: "Limits",
        url: "#",
      },
    ],
  },
];
