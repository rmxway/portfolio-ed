import type { ExperienceItem } from "@/types/entities";

export const experienceItems: ExperienceItem[] = [
  {
    id: "freelance-2025",
    period: "Июнь 2025 — настоящее время",
    company: "Фриланс",
    role: "Frontend-разработчик",
    location: "Москва",
    description:
      "Pet-проекты, тестовые задания и развитие существующих приложений с упором на современный стек и AI-инструменты.",
    highlights: [
      "Green Shop, React Todos, ITGuru Test, Соколиная охота",
      "Автотесты, Storybook, NextAuth, Firebase",
      "Повышение скорости разработки за счёт AI-практик",
    ],
  },
  {
    id: "trust-medanketa",
    period: "Март 2023 — Апрель 2025",
    company: "Trust System (фриланс)",
    role: "Frontend-разработчик",
    location: "Москва",
    description:
      "Проект Medanketa и саморазвитие: Next.js, GraphQL, RTK, TanStack Query, деплой.",
    highlights: [
      "Medanketa: анкеты, статистика, шаблоны, справочники, API",
      "Оптимизация производительности и рефакторинг",
      "Пет-проекты и тестовые задания для роста стека",
    ],
  },
  {
    id: "askona",
    period: "Ноябрь 2020 — Август 2022",
    company: "Аскона Тех",
    role: "Frontend-разработчик",
    location: "Ковров · askona.ru",
    description:
      "Развитие интернет-магазина: каталог, фильтры, карточки, подборщики, мобильная версия.",
    highlights: [
      "UI Kit и новые страницы на React + TypeScript",
      "Менторинг коллег, code review, Agile/Scrum",
      "Ускорение загрузки и рефакторинг legacy",
    ],
  },
  {
    id: "585-junior",
    period: "Ноябрь 2019 — Апрель 2020",
    company: "585, Холдинг",
    role: "Младший разработчик",
    location: "Санкт-Петербург · zoloto585.ru",
    description:
      "Поддержка и развитие витрины под руководством senior-разработчика.",
    highlights: [
      "Формы с валидацией",
      "Новые UI-блоки и страницы",
      "Оптимизация скорости",
    ],
  },
  {
    id: "585-html",
    period: "Ноябрь 2017 — Октябрь 2019",
    company: "585, Холдинг",
    role: "HTML-верстальщик",
    location: "zoloto585.ru",
    description: "Вёрстка по макетам, переход к современному фронтенду.",
    highlights: [
      "PSD / Zeplin / Figma → HTML, LESS/SCSS, Pug, Webpack",
      "Сокращение времени загрузки страницы с ~7 с до ~1.5 с",
    ],
  },
];
