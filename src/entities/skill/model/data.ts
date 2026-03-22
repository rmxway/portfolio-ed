import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    id: "core",
    title: "Основной стек",
    items: ["React", "TypeScript", "Next.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    id: "state",
    title: "Состояние и данные",
    items: ["Redux Toolkit", "TanStack Query", "MobX", "GraphQL", "REST API"],
  },
  {
    id: "style",
    title: "Стили и UI",
    items: [
      "Styled-components",
      "SCSS",
      "Адаптивная вёрстка",
      "Кроссбраузерная вёрстка",
      "Figma",
    ],
  },
  {
    id: "quality",
    title: "Качество и инструменты",
    items: [
      "Jest",
      "React Testing Library",
      "ESLint",
      "Storybook",
      "Git",
      "Webpack",
      "Vite",
      "Docker",
      "CI/CD",
    ],
  },
  {
    id: "process",
    title: "Процессы",
    items: [
      "Jira",
      "Agile/Scrum",
      "Code review",
      "Postman",
      "AI-ассистенты (Cursor)",
    ],
  },
];
