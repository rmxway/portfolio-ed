# Лендинг

## Структура проекта

Слои [FSD](https://feature-sliced.design/) (сверху вниз по зависимостям): `views` → `widgets` → `features` → `entities` → `shared`. Ниже — папки и типичное содержимое.

```
app/                              # Next.js App Router
├── layout.tsx                    # корень: провайдеры, глобальные стили, шрифты
└── page.tsx                      # главная → подключает view

src/
├── views/                        # композиция страниц (не путать с Pages Router)
│   └── home/ui/home-page.tsx
├── widgets/                      # крупные секции лендинга
│   ├── hero/                     # первый экран, фон
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
│   ├── lib/                      # animations.ts, fontawesome.ts
│   ├── providers/                # styled-components, приложение
│   └── ui/                       # button, container, section, text, fa-icon (+ styled.ts)
├── theme/                        # tokens, breakpoints, media, global-styles
└── types/                        # theme.ts, entities.ts, styled.d.ts
```

Корень репозитория: `next.config.ts`, `package.json`, `eslint.config.mjs`, `tsconfig.json`.

## Стек

| Направление | Что используется |
|-------------|------------------|
| Проект | Next.js (App Router), Yarn |
| Стили | **styled-components**, рядом с компонентами — `styled.ts` |
| Тема, брейкпоинты | [`src/theme`](src/theme) |
| Типы сущностей | [`src/types/entities.ts`](src/types/entities.ts) |
| Анимации | **Framer Motion** — `whileInView`, variants в [`src/shared/lib/animations.ts`](src/shared/lib/animations.ts) |
| Иконки | **Font Awesome** (React) |

**Font Awesome — проводка**

- CSS: [`app/layout.tsx`](app/layout.tsx) → `@fortawesome/fontawesome-svg-core/styles.css`
- `config.autoAddCss = false` → [`src/shared/lib/fontawesome.ts`](src/shared/lib/fontawesome.ts)
- Обёртка: [`FaIcon`](src/shared/ui/fa-icon/index.tsx) — проп `size` как в FA (`"sm"`, `"lg"`, `"1x"` …), опционально `pixels` (px)

Главная страница — портфолио: hero, полноэкранные блоки проектов со `scroll-snap`, навыки, опыт, контакты. Данные — в [`src/entities`](src/entities).

> В Next.js нельзя использовать папку `src/pages` вместе с корневым `app/` (зарезервировано под Pages Router), поэтому слой композиции страниц — **`src/views`**.

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

## Форматирование

```bash
yarn format
```


