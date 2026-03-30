# Лендинг

Портфолио на Next.js: hero, навыки, опыт, контакты. Данные лежат в [`src/entities`](src/entities).

## Структура проекта

Слои [FSD](https://feature-sliced.design/) (сверху вниз по зависимостям): `views` → `widgets` → `features` → `entities` → `shared`.

```
app/                              # Next.js App Router
├── layout.tsx                    # корень: провайдеры, шрифты Geist, глобальные стили, Font Awesome CSS
└── page.tsx                      # главная → подключает view

src/
├── views/                        # композиция страниц (не путать с Pages Router)
│   └── home/ui/home-page.tsx
├── widgets/                      # крупные секции лендинга
│   ├── hero/                     # первый экран, фон и фото
│   ├── footer/
│   ├── projects-showcase/        # блок проектов
│   ├── skills-section/           # обёртка над сеткой навыков
│   └── experience-timeline/      # опыт работы
├── features/                     # сценарии и UI-паттерны
│   ├── contact-form/
│   ├── project-showcase/         # карточка и превью проекта
│   └── skill-grid/               # категории и бейджи навыков
├── entities/                     # данные и реэкспорты сущностей
│   ├── experience/               # data.ts, index
│   ├── project/
│   └── skill/
├── shared/
│   ├── lib/                      # animations, accent-colors, fontawesome (+ fontawesome-icons)
│   ├── providers/                # styled-components, приложение
│   └── ui/                       # button, container, flex, section, text, fa-icon, gradient-background
├── theme/                        # tokens, breakpoints, media, global-styles
└── types/                        # theme.ts, entities.ts, styled.d.ts
```

Корень репозитория: `next.config.ts`, `package.json`, `eslint.config.mjs`, `tsconfig.json`.

> В Next.js нельзя использовать папку `src/pages` вместе с корневым `app/` (зарезервировано под Pages Router), поэтому слой композиции страниц — **`src/views`**.

## Стек

| Направление | Что используется |
|-------------|------------------|
| Проект | Next.js 16 (App Router), React 19, Yarn 4 |
| Стили | **styled-components** (`styled.ts` рядом с компонентами), **styled-media-query** |
| Тема, брейкпоинты | [`src/theme`](src/theme) |
| Типы сущностей | [`src/types/entities.ts`](src/types/entities.ts) |
| Анимации | **Framer Motion** — `whileInView`, variants в [`src/shared/lib/animations.ts`](src/shared/lib/animations.ts) |
| Цветовые акценты | [`ACCENT_COLORS`](src/shared/lib/accent-colors.ts) + ключи в данных сущностей |
| Иконки | **Font Awesome** (React) |

**Font Awesome**

- CSS: [`app/layout.tsx`](app/layout.tsx) → `@fortawesome/fontawesome-svg-core/styles`
- `config.autoAddCss = false` → [`src/shared/lib/fontawesome.ts`](src/shared/lib/fontawesome.ts) (реэкспорт иконок из [`fontawesome-icons.ts`](src/shared/lib/fontawesome-icons.ts))
- Обёртка: [`FaIcon`](src/shared/ui/fa-icon/index.tsx) — проп `size` как в FA (`"sm"`, `"lg"`, `"1x"` …), опционально `pixels` (px)

Превью проектов: фоновый glow и опциональные изображения из [`public/img`](public/img).

## Запуск

```bash
yarn dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
yarn build
yarn start
```

## Качество кода

```bash
yarn lint
yarn format
```

`format` — Prettier для `src/**` и `app/**` (`*.ts`, `*.tsx`).
