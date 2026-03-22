# Лендинг

Next.js (App Router), Yarn, [Feature-Sliced Design](https://feature-sliced.design/): `shared`, `views` (композиция страниц), `widgets`, `features`, `entities`. Стили — **styled-components**, тема и медиазапросы — в [`src/theme`](src/theme), типы — в [`src/types`](src/types). Анимации — **Framer Motion** (`whileInView`, variants в [`src/shared/lib/animations.ts`](src/shared/lib/animations.ts)).

Главная страница — портфолио в духе Apple: hero, полноэкранные блоки проектов со `scroll-snap`, навыки, опыт, контакты. Данные — в [`src/entities`](src/entities).

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

## Медленный диск и предупреждение про `.next/dev`

Проект на внешнем томе (`/Volumes/...`) даёт медленную запись в `./.next`. Next.js показывает предупреждение вида:

```
Slow filesystem detected. The benchmark took XXXms.
```

Это **не ошибка** — разработка продолжит работать, но HMR и сборка могут быть медленнее.

### Почему симлинк не работает

Попытка создать симлинк `.next` → локальный SSD вызывает ошибку:

```
Error: Cannot find module 'react/jsx-runtime'
```

Это происходит из-за того, что **Turbopack в SSR-режиме** не может корректно разрешить внешние модули (react, react-dom) через симлинк — пути резолвятся относительно кэша, а не `node_modules` проекта.

### Почему NEXT_DIST_DIR неудобен

Использование `NEXT_DIST_DIR=/Users/.../landing` через `.env.local`:

- Next дописывает в `tsconfig.json` **абсолютные** пути вида `/Users/jdesign/Library/Caches/...`
- Эти пути нельзя коммитить (индивидуальны для каждого разработчика)
- Требует ручного отката изменений `tsconfig.json` перед каждым коммитом

### Решение

**Оставить `.next` внутри проекта** и принять предупреждение как известное ограничение внешнего тома. Если скорость разработки критична, рассмотрите:

1. Клонирование проекта на встроенный SSD
2. Использование локальной виртуальной машины с примонтированным томом
3. Работу через SSH на машине с быстрым диском
