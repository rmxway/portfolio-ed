import type { ExperienceItem } from '@/types/entities';

export const experienceItems: ExperienceItem[] = [
    {
        id: 'freelance',
        period: 'Март 2023 — мая 2026',
        start: { month: 2, year: 2023 },
        end: { month: 4, year: 2026 },
        company: 'Фриланс',
        role: 'Frontend-разработчик (React / TypeScript)',
        location: 'Москва',
        description: 'Next.js, GraphQL, RTK, TanStack Query, деплой. Pet и временные проекты, тестовые задания, развитие существующих приложений с упором на современный стек + AI-инструменты.',
        highlights: [
            'Medanketa: анкеты, статистика, шаблоны, справочники, API',
            'Оптимизация производительности и рефакторинг',
            'Green Shop, Diving Center, Simple Trading, React Notes, Соколиная охота',
        ],
    },
    {
        id: 'askona',
        period: 'Ноябрь 2020 — Август 2022',
        start: { month: 10, year: 2020 },
        end: { month: 7, year: 2022 },
        company: 'Аскона Тех',
        role: 'Frontend-разработчик (React)',
        location: 'Москва',
        description: 'Развитие интернет-магазина: каталог, фильтры, карточки, подборщики, мобильная версия.',
        highlights: ['UI Kit и новые страницы на React + TypeScript', 'Менторинг коллег, code review, Agile/Scrum', 'Ускорение загрузки и рефакторинг legacy'],
    },
    {
        id: '585-junior',
        period: 'Ноябрь 2019 — Апрель 2020',
        start: { month: 10, year: 2017 },
        end: { month: 3, year: 2020 },
        company: '585, Холдинг',
        role: 'Младший разработчик, HTML-верстальщик',
        location: 'Москва',
        description:
            'Вёрстка по макетам, переход к современному фронтенду. Поддержка и развитие витрины под руководством senior-разработчика. Большой опыт вёрстки и оптимизации скорости загрузки страницы.',
        highlights: [
            'PSD / Zeplin / Figma → HTML, LESS/SCSS, Pug, Webpack',
            'Сокращение времени загрузки страницы с ~7 с до ~1.5 с',
            'Формы с валидацией',
            'Новые UI-блоки и страницы',
            'Оптимизация скорости',
        ],
    },
];
