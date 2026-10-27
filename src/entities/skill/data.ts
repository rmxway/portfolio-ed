import type { SkillCategory } from '@/types/entities';

export const skillCategories: SkillCategory[] = [
    {
        id: 'core',
        title: 'Основной стек',
        items: ['React', 'Next.js', 'TypeScript / JS', 'HTML5', 'CSS3'],
    },
    {
        id: 'state',
        title: 'Состояние и данные',
        items: ['Redux Toolkit', 'TanStack Query', 'MobX', 'GraphQL', 'REST API'],
    },
    {
        id: 'style',
        title: 'Стили и UI',
        items: ['Figma', 'Адаптивная вёрстка', 'Styled-components', 'SCSS / LESS', 'CSS Modules', 'Tailwind', 'Bootstrap', 'MUI'],
    },
    {
        id: 'quality',
        title: 'Качество и инструменты',
        items: ['Git', 'Vite / Webpack', 'ESLint', 'Prettier', 'Storybook', 'Jest', 'React Testing Library', 'Docker', 'CI/CD'],
    },
    {
        id: 'process',
        title: 'Процессы',
        items: ['Jira', 'Agile/Scrum', 'Code Review', 'Postman', 'AI-ассистенты'],
    },
];
