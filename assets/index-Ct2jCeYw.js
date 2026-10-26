import{a as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t}from"./vendor-BK6Eqj51.js";import{r as n,t as r}from"./vendor-CoBs3g5F.js";import{a as i,c as a,d as o,f as s,g as c,h as l,i as ee,l as u,m as te,n as d,o as ne,p as f,r as p,s as m,t as h,u as g}from"./vendor-Rr5ohtEI.js";import{a as _,i as v,n as re,r as y,t as ie}from"./vendor-LKzrSikF.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var b=e(n(),1),ae=t(),oe=l(),se=te(),ce=f(),le=s(),ue=o(),de=g(),fe=u(),pe=a(),me=m(),he=ne(),ge=i(),_e=ee(),ve=p();c.autoAddCss=!1;var x={xs:`320px`,sm:`576px`,md:`768px`,lg:`992px`,xl:`1200px`},ye={colors:{background:`#ffffff`,backgroundSecondary:`#f5f5f7`,text:`#1d1d1f`,textMuted:`#6e6e73`,textSecondary:`#86868b`,primary:`#0071e3`,accent:`#0071e3`,accentHover:`#0077ed`,success:`#34c759`,glassBorder:`rgba(0, 0, 0, 0.12)`,glassBackground:`rgba(255, 255, 255, 0.72)`,gray50:`#fafafa`,gray100:`#f5f5f5`,gray200:`#eeeeee`,gray300:`#e0e0e0`,gray400:`#bdbdbd`,gray500:`#9e9e9e`,gray600:`#757575`,gray700:`#616161`,gray800:`#424242`,gray900:`#212121`},gradients:{hero:`linear-gradient(180deg, #f5f5f7 0%, #ffffff 45%, #e8eef8 100%)`,heroAccent:`radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 113, 227, 0.15), transparent)`,card:`linear-gradient(145deg, #ffffff 0%, #f5f5f7 100%)`},typography:{heroTitle:`clamp(2rem, 8vw, 3.5rem)`,sectionTitle:`clamp(1.8rem, 5vw, 2.6rem)`,lead:`clamp(1.125rem, 2vw, 1.375rem)`,body:`1.0625rem`},shadows:{sm:`0 2px 8px rgba(0, 0, 0, 0.06)`,md:`0 8px 24px rgba(0, 0, 0, 0.08)`,cardHover:`0 16px 40px rgba(0, 0, 0, 0.12)`},space:[`0`,`0.25rem`,`0.5rem`,`1rem`,`1.5rem`,`2rem`,`3rem`],radii:{sm:`6px`,md:`12px`,lg:`18px`,xl:`24px`,full:`9999px`},fonts:{body:`var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, sans-serif`,mono:`var(--font-geist-mono), ui-monospace, monospace`},zIndex:{header:100,modal:200}},be=re`  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
  }

  body {
    min-height: 100%;
    min-width: 320px;
    font-family: ${({theme:e})=>e.fonts.body};
    font-size: 16px;
    line-height: 1.5;
    color: ${({theme:e})=>e.colors.text};
    background: ${({theme:e})=>e.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,S=ie(x),C={...ye,breakpoints:{...x}},w=r();function T({children:e}){return(0,w.jsxs)(_,{theme:C,children:[(0,w.jsx)(be,{}),e]})}var E=[{id:`freelance-2025`,period:`Июнь 2025 — Май 2026`,start:{month:5,year:2025},end:{month:4,year:2026},company:`Фриланс`,role:`Frontend-разработчик`,location:`Москва`,description:`Pet-проекты, тестовые задания и развитие существующих приложений с упором на современный стек и AI-инструменты.`,highlights:[`Stories, Simple Trading, Green Shop, React Notes, ITGuru Test, Соколиная охота`,`Автотесты, Storybook, NextAuth, Firebase`,`Повышение скорости разработки за счёт AI-практик`]},{id:`trust-medanketa`,period:`Март 2023 — Апрель 2025`,start:{month:2,year:2023},end:{month:3,year:2025},company:`Trust System (фриланс)`,role:`Frontend-разработчик`,location:`Москва`,description:`Проект Medanketa и саморазвитие: Next.js, GraphQL, RTK, TanStack Query, деплой.`,highlights:[`Medanketa: анкеты, статистика, шаблоны, справочники, API`,`Оптимизация производительности и рефакторинг`,`Пет-проекты и тестовые задания для роста стека`]},{id:`askona`,period:`Ноябрь 2020 — Август 2022`,start:{month:10,year:2020},end:{month:7,year:2022},company:`Аскона Тех`,role:`Frontend-разработчик`,location:`Москва`,description:`Развитие интернет-магазина: каталог, фильтры, карточки, подборщики, мобильная версия.`,highlights:[`UI Kit и новые страницы на React + TypeScript`,`Менторинг коллег, code review, Agile/Scrum`,`Ускорение загрузки и рефакторинг legacy`]},{id:`585-junior`,period:`Ноябрь 2019 — Апрель 2020`,start:{month:10,year:2017},end:{month:3,year:2020},company:`585, Холдинг`,role:`Младший разработчик`,location:`Москва`,description:`Вёрстка по макетам, переход к современному фронтенду. Поддержка и развитие витрины под руководством senior-разработчика. Большой опыт вёрстки и оптимизации скорости загрузки страницы.`,highlights:[`PSD / Zeplin / Figma → HTML, LESS/SCSS, Pug, Webpack`,`Сокращение времени загрузки страницы с ~7 с до ~1.5 с`,`Формы с валидацией`,`Новые UI-блоки и страницы`,`Оптимизация скорости`]}],D=v.div`
    ${({theme:e})=>y`
        width: 100%;
        max-width: 1120px;
        margin-left: auto;
        margin-right: auto;
        padding-left: ${e.space[3]};
        padding-right: ${e.space[3]};

        ${S.greaterThan(`lg`)`
      padding-left: ${e.space[4]};
      padding-right: ${e.space[4]};
    `}
    `}
`,O={hidden:{opacity:0,y:28},visible:{opacity:1,y:0,transition:{duration:.55,ease:[.22,1,.36,1]}}},k={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.06}}},A={hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:{duration:.45,ease:[.22,1,.36,1]}}},j={hidden:{opacity:0,scale:.96},visible:{opacity:1,scale:1,transition:{duration:.5,ease:[.22,1,.36,1]}}},M={indigo:`#6366f1`,emerald:`#16a34a`,amber:`#b45309`,yellow:`#fad233`,sky:`#0ea5e9`,purple:`#8b5cf6`,blue:`#0071e3`,cyan:`#00b9bf`,violet:`#7c3aed`};function N(e){let t=e.trim();if(!t.startsWith(`#`))return null;let n=t.slice(1);return n.length===3?`#${n.split(``).map(e=>`${e}${e}`).join(``)}`:n.length===6?t:null}function P(e,t){let n=N(e);return n?`${n}${t}`:e}var xe=v(d.div)`
    ${({theme:e,$accent:t})=>y`
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(180deg, ${e.colors.backgroundSecondary} 0%, ${e.colors.background} 45%, ${P(t,`22`)} 100%);
    `}
`,Se=v(d.div)`
    ${({$accent:e,$angle:t})=>y`
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(${t}deg, ${P(e,`29`)} 0%, ${P(e,`0d`)} 42%, transparent 72%);
    `}
`,Ce=v(d.div)`
    ${({$accent:e})=>y`
        position: absolute;
        width: min(60vw, 520px);
        height: min(60vw, 520px);
        top: -18%;
        right: -12%;
        border-radius: 50%;
        filter: blur(80px);
        background: radial-gradient(circle, ${P(e,`40`)}, transparent 70%);
        pointer-events: none;
    `}
`;function F({accent:e=`blue`,angle:t=130}){let n=M[e];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(xe,{$accent:n,initial:{opacity:0},animate:{opacity:1},transition:{duration:.8}}),(0,w.jsx)(Se,{$accent:n,$angle:t,initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.1}}),(0,w.jsx)(Ce,{$accent:n,initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.22,1,.36,1]}})]})}var I=v.div`
    ${({theme:e,$direction:t=`row`,$inline:n=!1,$alignItems:r,$justifyContent:i,$gap:a,$flexWrap:o})=>y`
        display: ${n?`inline-flex`:`flex`};
        flex-direction: ${t};
        ${r!=null&&y`
                align-items: ${r};
            `}
        ${i!=null&&y`
                justify-content: ${i};
            `}
    ${a!=null&&y`
                gap: ${typeof a==`number`?e.space[a]:a};
            `}
    ${o!=null&&y`
                flex-wrap: ${o};
            `}
    `}
`,we=v.h1`
    ${({theme:e})=>y`
        font-size: ${e.typography.heroTitle};
        font-weight: 600;
        letter-spacing: -0.03em;
        line-height: 1.05;
        z-index: 1;
        color: ${e.colors.text};
    `}
`,L=v.h2`
    ${({theme:e})=>y`
        font-size: ${e.typography.sectionTitle};
        font-weight: 600;
        letter-spacing: -0.025em;
        line-height: 1.08;
        z-index: 1;
        color: ${e.colors.text};

        ${S.lessThan(`md`)`
      letter-spacing: -0.02em;
    `}
    `}
`,R=v.h3`
    ${({theme:e})=>y`
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: -0.02em;
        line-height: 1.15;
        z-index: 1;
        color: ${e.colors.text};

        ${S.greaterThan(`md`)`
      font-size: 1.3rem;
    `}
    `}
`,z=v.p`
    ${({theme:e})=>y`
        font-size: ${e.typography.lead};
        line-height: 1.3;
        color: ${e.colors.textMuted};
        max-width: 40rem;
        margin: 0 auto;
        margin-bottom: 20px;
        z-index: 1;

        &:last-child {
            margin-bottom: 0;
        }
    `}
`,B=v.p`
    ${({theme:e})=>y`
        font-size: ${e.typography.body};
        line-height: 1.55;
        color: ${e.colors.textSecondary};
    `}
`,Te=v.div`
    ${({theme:e})=>y`
        display: block;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: ${e.colors.gray600};
        margin-bottom: ${e.space[2]};
    `}
`,Ee=v(d.section)`
    position: relative;
    width: 100%;
`;function V({children:e,className:t,id:n}){return(0,w.jsx)(Ee,{id:n,className:t,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-80px`},variants:O,children:e})}var De=v.section`
    ${({theme:e})=>y`
        position: relative;
        padding: ${e.space[6]} 0;
        overflow: hidden;
        border-top: 1px solid ${e.colors.glassBorder};
    `}
`,Oe=v.ol`
    ${({theme:e})=>y`
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: ${e.space[4]};
        position: relative;

        ${S.greaterThan(`md`)`
      gap: ${e.space[5]};
    `}
    `}
`,ke=v.li`
    ${({theme:e})=>y`
        position: relative;
        padding-left: ${e.space[4]};

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.35rem;
            width: 10px;
            height: 10px;
            border-radius: ${e.radii.full};
            background: ${e.colors.accent};
            box-shadow: 0 0 0 4px ${e.colors.backgroundSecondary};
        }

        &:not(:last-child)::after {
            content: '';
            position: absolute;
            left: 4px;
            top: 1.25rem;
            bottom: calc(-1 * ${e.space[4]} - 4px);
            width: 2px;
            background: ${e.colors.glassBorder};
        }
    `}
`,Ae=v.article`
    ${({theme:e})=>y`
        padding: ${e.space[4]};
        border-radius: ${e.radii.lg};
        background: ${e.colors.background};
        border: 1px solid ${e.colors.glassBorder};
        box-shadow: ${e.shadows.sm};
    `}
`,je=v.div`
    ${({theme:e})=>y`
        max-width: 40rem;
        margin: 0 auto ${e.space[5]};
        text-align: center;
    `}
`,Me=v.p`
    ${({theme:e})=>y`
        font-size: 0.875rem;
        font-weight: 600;
        color: ${e.colors.textMuted};
        margin-bottom: ${e.space[2]};
    `}
`,Ne=v(B)`
    ${({theme:e})=>y`
        margin-top: 0.25rem;
        color: ${e.colors.text};
    `}
`,Pe=v(B)`
    ${({theme:e})=>y`
        margin-top: ${e.space[3]};
    `}
`,Fe=v.ul`
    ${({theme:e})=>y`
        margin: ${e.space[3]} 0 0;
        padding-left: 1.1rem;
        color: ${e.colors.textSecondary};
        font-size: ${e.typography.body};
        line-height: 1.55;
    `}
`;function H(e,t,n,r){let i=e%10,a=e%100;return i===1&&a!==11?t:i>=2&&i<=4&&(a<10||a>=20)?n:r}function Ie(e,t){let n=e.year*12+e.month,r=new Date,i=t??{year:r.getFullYear(),month:r.getMonth()},a=i.year*12+i.month-n;if(a<=0)return`0 месяцев`;let o=Math.floor(a/12),s=a%12,c=o>0?`${o} ${H(o,`год`,`года`,`лет`)}`:``,l=s>0?`${s} ${H(s,`месяц`,`месяца`,`месяцев`)}`:``;return c&&l?`${c} ${l}`:c||l}var Le=d.create(Ae);function Re({item:e}){let t=Ie(e.start,e.end);return(0,w.jsxs)(Le,{variants:O,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-80px`},children:[(0,w.jsxs)(Me,{children:[e.period,` ( `,t,` )`]}),(0,w.jsx)(R,{as:`h3`,children:e.company}),(0,w.jsxs)(Ne,{as:`p`,children:[e.role,e.location?` · ${e.location}`:``]}),(0,w.jsx)(Pe,{as:`p`,children:e.description}),(0,w.jsx)(Fe,{children:e.highlights.map(e=>(0,w.jsx)(`li`,{children:e},e))})]})}function ze(){return(0,w.jsxs)(De,{id:`experience`,children:[(0,w.jsx)(F,{accent:`purple`,angle:0}),(0,w.jsx)(D,{children:(0,w.jsxs)(V,{children:[(0,w.jsxs)(je,{children:[(0,w.jsx)(L,{children:(0,w.jsx)(I,{as:`span`,$inline:!0,$alignItems:`center`,$gap:2,children:`Опыт работы`})}),(0,w.jsx)(z,{children:`~5 лет коммерческой разработки от вёрстки до продуктового React и Next.js.`})]}),(0,w.jsx)(Oe,{children:E.map(e=>(0,w.jsx)(ke,{children:(0,w.jsx)(Re,{item:e})},e.id))})]})})]})}var U=(0,b.forwardRef)(function({pixels:e,style:t,...n},r){let i=e===void 0?t:{width:e,height:e,minWidth:e,minHeight:e,...t};return(0,w.jsx)(h,{ref:r,style:i,...n})}),Be=v.a`
    ${({theme:e})=>y`
        display: inline-flex;
        align-items: center;
        min-height: 44px;
        font-size: 1rem;
        font-weight: 500;
        color: ${e.colors.accent};
        border-radius: ${e.radii.full};
        transition: color 0.2s ease;

        &:hover {
            color: ${e.colors.accentHover};
        }

        &:focus-visible {
            outline: 2px solid ${e.colors.accent};
            outline-offset: 3px;
        }
    `}
`;function W({href:e,children:t,target:n,rel:r}){return(0,w.jsx)(Be,{href:e,target:n,rel:r,children:t})}var G=y`
    ${({theme:e,$variant:t})=>y`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: ${e.space[2]};
        min-height: 44px;
        padding: 0 ${e.space[4]};
        font-family: ${e.fonts.body};
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.2;
        border-radius: ${e.radii.full};
        border: none;
        cursor: pointer;
        text-decoration: none;
        transition:
            background 0.2s ease,
            color 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.2s ease;

        &:focus-visible {
            outline: 2px solid ${e.colors.accent};
            outline-offset: 3px;
        }

        ${t===`primary`&&y`
                color: #fff;
                background: ${e.colors.accent};

                &:hover {
                    background: ${e.colors.accentHover};
                }

                &:active {
                    transform: scale(0.98);
                }
            `}

        ${t===`secondary`&&y`
                color: ${e.colors.accent};
                background: transparent;
                box-shadow: inset 0 0 0 1px ${e.colors.accent};

                &:hover {
                    background: rgba(0, 113, 227, 0.06);
                }
            `}

    ${t===`ghost`&&y`
                color: ${e.colors.accent};
                background: transparent;

                &:hover {
                    color: ${e.colors.accentHover};
                }
            `}
    `}
`,Ve=v.button`
    ${G}
`,He=v.a`
    ${G}
`;function K(e){let{children:t,className:n,variant:r=`primary`}=e;if(`href`in e&&e.href){let{href:i,target:a,rel:o}=e;return(0,w.jsx)(He,{href:i,target:a,rel:o,className:n,$variant:r,children:t})}let{type:i=`button`,disabled:a,onClick:o,...s}=e;return(0,w.jsx)(Ve,{type:i,disabled:a,onClick:o,className:n,$variant:r,...s,children:t})}var Ue=v.footer`
    ${({theme:e})=>y`
        position: relative;
        padding: ${e.space[6]} 0 ${e.space[5]};
        background: linear-gradient(180deg, ${e.colors.gray50} 0%, ${e.colors.background} 100%);
        border-top: 1px solid ${e.colors.glassBorder};
    `}
`,We=v.div`
    ${({theme:e})=>y`
        display: grid;
        gap: ${e.space[5]};

        margin-top: ${e.space[5]};

        @media (min-width: 768px) {
            grid-template-columns: 2fr;
            align-items: start;
        }
    `}
`,Ge=v.div`
    ${({theme:e})=>y`
        display: flex;
        flex-direction: column;
        gap: ${e.space[3]};
        max-width: 28rem;

        ${z} {
            margin: 0;
        }
    `}
`;v(B)`
    ${({theme:e})=>y`
        font-weight: 600;
        color: ${e.colors.text};
        margin: 0 0 ${e.space[2]};
    `}
`;var Ke=v.ul`
    ${({theme:e})=>y`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: ${e.space[3]};

        @media (min-width: 480px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `}
`,q=v.li`
    ${({theme:e})=>y`
        border-radius: ${e.radii.lg};
        border: 1px solid ${e.colors.glassBorder};
        background: ${e.colors.background};
        box-shadow: ${e.shadows.sm};
        transition:
            box-shadow 0.25s ease,
            transform 0.25s ease,
            border-color 0.25s ease;

        &:hover {
            box-shadow: ${e.shadows.md};
            transform: translateY(-2px);
            border-color: ${e.colors.gray300};
        }

        a {
            display: flex;
            flex-direction: column;
            gap: ${e.space[2]};
            padding: ${e.space[4]};
            min-height: 100%;
            text-decoration: none;
            color: inherit;
            border-radius: inherit;
        }
    `}
`,J=v.span`
    ${({theme:e})=>y`
        display: flex;
        align-items: center;
        gap: ${e.space[2]};
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: ${e.colors.textMuted};
    `}
`,Y=v.span`
    ${({theme:e})=>y`
        font-size: ${e.typography.body};
        font-weight: 500;
        color: ${e.colors.text};
        line-height: 1.4;
        word-break: break-word;
    `}
`,X=v.span`
    ${({theme:e})=>y`
        font-size: 0.8125rem;
        color: ${e.colors.textSecondary};
        line-height: 1.45;
    `}
`;v.div`
    ${({theme:e})=>y`
        color: ${e.colors.textMuted};
        border-radius: ${e.radii.lg};
        border: 1px solid ${e.colors.glassBorder};
        background-color: ${e.colors.gray100};
        padding: ${e.space[4]};
        display: flex;
        align-items: flex-start;
        gap: ${e.space[3]};
    `}
`;var qe=v.div`
    ${({theme:e})=>y`
        height: 1px;
        background: linear-gradient(90deg, transparent, ${e.colors.gray300}, transparent);
        margin: ${e.space[5]} 0 ${e.space[3]};
    `}
`,Je=v.div`
    ${({theme:e})=>y`
        display: flex;
        flex-wrap: wrap;
        gap: ${e.space[2]} ${e.space[4]};
        align-items: center;
    `}
`,Z=v.span`
    ${({theme:e})=>y`
        display: inline-flex;
        align-items: center;
        gap: ${e.space[2]};
        font-size: 0.9375rem;
        font-weight: 500;
    `}
`;function Ye(){return(0,w.jsx)(Ue,{id:`contact`,children:(0,w.jsx)(D,{children:(0,w.jsxs)(V,{children:[(0,w.jsxs)(Ge,{children:[(0,w.jsx)(L,{children:`Контакты`}),(0,w.jsx)(z,{children:`Пишите на почту или в Telegram.`})]}),(0,w.jsx)(We,{children:(0,w.jsxs)(`div`,{children:[(0,w.jsxs)(Ke,{children:[(0,w.jsx)(q,{children:(0,w.jsxs)(W,{href:`mailto:rmxway@mail.ru`,children:[(0,w.jsxs)(J,{children:[(0,w.jsx)(U,{icon:fe.faEnvelope,size:`2x`,"aria-hidden":!0}),`Email`]}),(0,w.jsx)(Y,{children:`rmxway@mail.ru`}),(0,w.jsx)(X,{children:`Основной канал для откликов`})]})}),(0,w.jsx)(q,{children:(0,w.jsxs)(W,{href:`https://t.me/evgenydovgan`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,w.jsxs)(J,{children:[(0,w.jsx)(U,{icon:ve.faTelegram,size:`2x`,"aria-hidden":!0}),`Telegram`]}),(0,w.jsx)(Y,{children:`@evgenydovgan`}),(0,w.jsx)(X,{children:`Быстрые вопросы, на связи`})]})}),(0,w.jsx)(q,{children:(0,w.jsxs)(W,{href:`tel:+79672295802`,children:[(0,w.jsxs)(J,{children:[(0,w.jsx)(U,{icon:ge.faPhone,size:`2x`,"aria-hidden":!0}),`Телефон`]}),(0,w.jsx)(Y,{children:`+7 (967) 229-58-02`}),(0,w.jsx)(X,{children:`До 22:00 по Москве`})]})}),(0,w.jsx)(q,{children:(0,w.jsxs)(W,{href:``,children:[(0,w.jsxs)(J,{children:[(0,w.jsx)(U,{icon:me.faLocationDot,size:`2x`,"aria-hidden":!0}),`Локация`]}),(0,w.jsx)(Y,{children:`Россия, Москва`}),(0,w.jsx)(X,{children:`ЮАО`})]})})]}),(0,w.jsx)(qe,{}),(0,w.jsxs)(Je,{children:[(0,w.jsx)(W,{href:`#top`,children:(0,w.jsxs)(Z,{children:[(0,w.jsx)(U,{icon:oe.faArrowUp,size:`sm`,"aria-hidden":!0}),`Наверх`]})}),(0,w.jsx)(W,{href:`#projects`,children:(0,w.jsxs)(Z,{children:[(0,w.jsx)(U,{icon:ce.faBriefcase,size:`sm`,"aria-hidden":!0}),`Проекты`]})}),(0,w.jsx)(W,{href:`#skills`,children:(0,w.jsxs)(Z,{children:[(0,w.jsx)(U,{icon:de.faCode,size:`sm`,"aria-hidden":!0}),`Навыки`]})}),(0,w.jsx)(W,{href:`#experience`,children:(0,w.jsxs)(Z,{children:[(0,w.jsx)(U,{icon:ue.faClockRotateLeft,size:`sm`,"aria-hidden":!0}),`Опыт`]})})]})]})})]})})})}var Xe=v.header`
    ${({theme:e})=>y`
        position: relative;
        min-height: 100vh;
        min-height: 100svh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: ${e.space[6]} ${e.space[3]} ${e.space[5]};

        ${S.greaterThan(`md`)`
      padding: ${e.space[6]} ${e.space[4]};
    `}
    `}
`,Ze=v(d.div)`
    ${({theme:e})=>y`
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: ${e.space[6]};
    `}
`,Qe=v.div`
    ${({theme:e})=>y`
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        gap: ${e.space[5]};

        ${S.greaterThan(`md`)`
      grid-template-columns: minmax(0, 1fr) auto;
      gap: ${e.space[6]};
    `}
    `}
`,$e=v.div`
    ${({theme:e})=>y`
        display: flex;
        flex-direction: column;
        gap: ${e.space[3]};
        text-align: center;

        ${S.greaterThan(`md`)`
      text-align: left;
      align-items: flex-start;
      gap: ${e.space[6]};
    `}
    `}
`,et=v(d.div)`
    ${({theme:e})=>y`
        order: -1;
        justify-self: center;
        width: min(52vw, 220px);
        height: min(52vw, 220px);
        border-radius: ${e.radii.full};
        overflow: hidden;
        border: 1px solid ${e.colors.glassBorder};
        box-shadow: ${e.shadows.md};

        ${S.greaterThan(`md`)`
      order: 0;
      justify-self: end;
      width: min(30vw, 250px);
      height: min(30vw, 250px);
    `}
    `}
`,tt=v.img`
    width: 100%;
    height: 100%;
    background-position: center;
    pointer-events: none;
`,nt=v.div`
    position: relative;
    z-index: 1;
    width: 100%;
`,rt=v.div`
    ${({theme:e})=>y`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: ${e.space[2]};
        margin-top: ${e.space[2]};

        ${S.greaterThan(`md`)`
      justify-content: flex-start;
    `}
    `}
`;function it(){return(0,w.jsxs)(Xe,{id:`top`,children:[(0,w.jsx)(F,{accent:`blue`,angle:130}),(0,w.jsx)(nt,{children:(0,w.jsx)(D,{children:(0,w.jsx)(Ze,{variants:k,initial:`hidden`,animate:`visible`,children:(0,w.jsxs)(Qe,{children:[(0,w.jsxs)($e,{children:[(0,w.jsx)(d.div,{variants:A,children:(0,w.jsx)(Te,{children:`Frontend-разработчик`})}),(0,w.jsx)(d.div,{variants:A,children:(0,w.jsx)(we,{children:`Довгань Евгений`})}),(0,w.jsxs)(d.div,{variants:A,children:[(0,w.jsx)(z,{children:`Коммерческий опыт 5 лет. Во время перерыва (2023–2026) активно поддерживал навыки через временные проекты и учебу на пет-проектах: React / TypeScript, Next.js, архитектура FSD, тесты (Jest), Storybook, обработка edge-кейсов.`}),(0,w.jsx)(z,{children:`В октябре 2026 закончил курс по Frontend-разработке и Web-дизайну в РЭУ им. Г.В. Плеханова. В результате защитил итоговый проект и получил диплом о профессиональной переподготовке.`}),(0,w.jsx)(z,{children:`Готов к задачам любого уровня: новые проекты, поддержка, доработка, рефакторинг, покрытие тестами. Быстро вникаю в чужой код и соблюдаю code style. Использую AI в разработке как инструмент, а не замену.`})]}),(0,w.jsx)(d.div,{variants:A,children:(0,w.jsxs)(rt,{children:[(0,w.jsxs)(K,{href:`#projects`,variant:`primary`,children:[(0,w.jsx)(U,{icon:pe.faFolderOpen,pixels:16,"aria-hidden":!0}),`Смотреть проекты`]}),(0,w.jsxs)(K,{href:`#contact`,variant:`secondary`,children:[(0,w.jsx)(U,{icon:he.faPaperPlane,pixels:16,"aria-hidden":!0}),`Связаться`]})]})})]}),(0,w.jsx)(et,{variants:A,children:(0,w.jsx)(tt,{src:`./img/resume2.jpg`,alt:`Довгань Евгений`})})]})})})})]})}var at=[{id:`diving-center`,title:`Дайвинг-центр`,subtitle:`Итоговый проект обучения на курсе`,description:`Результат обучения на курсе Frontend-разработка и Web-дизайн в РЭУ им Г.В. Плеханова. Проект проектировался в Figma с нуля, после чего был перенесен на React. Разработан с помощью инструментов которые были изучены на курсе.`,stack:[`HTML`,`CSS`,`TypeScript`,`React`,`gh-pages`,`Font Awesome`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/diving-center`,demoUrl:`https://rmxway.github.io/diving-center/`,accent:`blue`,previewImage:`./img/diving-center.jpg`},{id:`green-shop`,title:`Green Shop Brand`,subtitle:`Интернет-магазин натуральной продукции`,description:`Каталог с поиском и фильтрами, корзина, избранное, сравнение товаров, NextAuth, личный кабинет, заказы в Firestore, тёмная тема, Storybook и тесты. Jest + React Testing Library: тесты ключевых компонентов. Storybook: визуальная документация 12+ компонентов UI-кита. Тёмная тема через styled-components.`,stack:[`Next.js 16`,`React 19`,`TypeScript`,`styled-components`,`Redux Toolkit`,`RTK Query`,`Firebase`,`NextAuth`,`Storybook`,`React Testing Library`,`Jest`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/green-shop`,demoUrl:`https://green-shop-brand.vercel.app/`,accent:`emerald`,previewImage:`./img/green-shop.jpg`},{id:`medanketa`,title:`Medanketa`,subtitle:`Медицинские анкеты и аналитика`,description:`Список и прохождение анкет, статистика, шаблоны и справочники. Интеграция API, оптимизация загрузки и рефакторинг.`,stack:[`React`,`TypeScript`,`Vite`,`TanStack Query`,`styled-components`,`ESLint`,`Prettier`],kind:`commercial`,githubUrl:`https://github.com/rmxway/medanketa`,demoUrl:`https://medanketa.com/`,accent:`purple`,previewImage:`./img/medanketa.jpg`},{id:`stories`,title:`Stories`,subtitle:`Виджет историй в духе мессенджеров и соцсетей`,description:`Демо виджета историй в стиле соцсетей: превью с кольцом прогресса, полноэкранный просмотр с автопереключением, навигация по тапам и клавиатуре, двухпальцевый zoom активной истории, режим просмотра зрителей и запоминание просмотренных в localStorage. Настроил ESLint/Prettier, написал README с инструкцией по запуску — код готов к передаче в команду.`,stack:[`Next.js`,`TypeScript`,`styled-components`,`Framer Motion`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/stories`,demoUrl:`https://stories-widget.vercel.app/`,accent:`violet`,previewImage:`./img/stories.jpg`},{id:`simpletrading`,title:`Simple Trading`,subtitle:`USD, EUR, CNY к рублю по данным ЦБ РФ`,description:`Трекер курсов доллара, евро и юаня к рублю: график за три месяца, переключение валюты, живые данные ЦБ. Интерфейс не моргает при смене котировки — старые цифры остаются, пока грузятся новые. Если запрос упал, значения не пропадают, а ошибка всплывает уведомлением. Архитектура FSD для лёгкой поддержки.`,stack:[`Next.js`,`TypeScript`,`TanStack Query`,`styled-components`,`MUI`,`lightweight-charts`,`Framer Motion`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/simpletrading`,demoUrl:`https://simpletrading-page.vercel.app/`,accent:`yellow`,previewImage:`./img/simpletrading.jpg`},{id:`react-notes`,title:`React Notes`,subtitle:`Заметки и задачи на FSD`,description:`CRUD заметок, фильтры, сортировка, оптимистичные обновления React Query, NextAuth и Firestore. FSD-архитектура для масштабирования.`,stack:[`Next.js 14`,`TypeScript`,`FSD`,`styled-components`,`Redux Toolkit`,`TanStack Query`,`NextAuth`,`Vitest`,`Framer Motion`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/react-notes`,demoUrl:`https://react-notes-service.vercel.app`,accent:`indigo`,previewImage:`./img/notes.jpg`},{id:`itguru-test`,title:`Products table`,subtitle:`Тестовое задание от itGuru`,description:`Авторизация DummyJSON, таблица товаров с пагинацией, поиск, сортировка, оптимистичное добавление в кэш React Query. React Hook Form + Yup: валидация форм с обработкой ошибок и состояний загрузки`,info:`login: emilys, password: emilyspass`,stack:[`React 19`,`TypeScript`,`Vite 7`,`TanStack Query`,`axios`,`React Hook Form`,`Yup`],kind:`test`,githubUrl:`https://github.com/rmxway/itguru-test`,demoUrl:`https://rmxway.github.io/itguru-test/`,accent:`sky`,previewImage:`./img/itguru.jpg`},{id:`sokolinayaohota`,title:`Соколиная охота`,subtitle:`Сайт ресторана`,description:`Вариант сайта ресторана на Next.js. Главная страница в виде лендинга, галерея, залы с описанием и бронированием, контакты.`,stack:[`Next.js 16`,`React 19`,`styled-components`,`Framer Motion`,`Storybook`,`Docker`,`Prettier`],kind:`commercial`,githubUrl:`https://github.com/rmxway/sokolinayaohota`,demoUrl:`https://sokolinayaohota.vercel.app/`,accent:`amber`,previewImage:`./img/sokol.jpg`},{id:`askona`,title:`Askona`,subtitle:`Аскона Тех — разработка и поддержка сайта`,description:`Каталог, фильтры, карточка товара, подборщики, UI Kit, менторинг фронтенда, Agile/Scrum и ускорение загрузки страниц.`,stack:[`React`,`TypeScript`,`UI Kit`,`Адаптивная вёрстка`],kind:`commercial`,demoUrl:`https://www.askona.ru/`,accent:`cyan`,previewImage:`./img/askona.jpg`},{id:`zoloto585`,title:`Золото 585`,subtitle:`Холдинг 585 — ювелирный ритейл`,description:`От вёрстки до React: формы с валидацией, каталоги, карточки товаров, рефакторинг и оптимизация скорости загрузки.`,stack:[`React`,`Webpack`,`SCSS`,`Формы и валидация`],kind:`commercial`,demoUrl:`https://zoloto585.ru/`,accent:`yellow`,previewImage:`./img/gold.jpg`}],ot=v(d.article)`
    ${({theme:e,$reversed:t})=>y`
        display: grid;
        gap: ${e.space[6]};
        align-items: center;
        grid-template-columns: 1fr;

        ${S.greaterThan(`md`)`
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: ${e.space[6]};

      ${t&&y`
              > *:first-child {
                  order: 2;
              }

              > *:last-child {
                  order: 1;
              }
          `}
    `}
    `}
`,Q=v(d.div)`
    ${({theme:e})=>y`
        display: flex;
        flex-direction: column;
        gap: ${e.space[3]};

        ${z} {
            max-width: none;
        }
    `}
`,st=v.ul`
    ${({theme:e})=>y`
        display: flex;
        flex-wrap: wrap;
        gap: ${e.space[2]};
        list-style: none;
        margin: 0;
        padding: 0;
    `}
`,ct=v.li`
    ${({theme:e})=>y`
        padding: ${e.space[1]} ${e.space[3]};
        font-size: 0.8125rem;
        font-weight: 500;
        color: ${e.colors.text};
        border-radius: ${e.radii.full};
        border: 1px solid ${e.colors.gray400};
    `}
`,lt=v.div`
    ${({theme:e})=>y`
        display: flex;
        flex-wrap: wrap;
        gap: ${e.space[2]};
        margin-top: ${e.space[2]};
    `}
`,ut=v.span`
    ${({theme:e})=>y`
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: ${e.colors.textMuted};
    `}
`,dt=v(d.a)`
    ${({theme:e,$accent:t})=>y`
        position: relative;
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: ${e.radii.xl};
        overflow: hidden;
        background: ${e.gradients.card};
        box-shadow: ${e.shadows.md};
        border: 1px solid ${e.colors.glassBorder};

        ${S.lessThan(`md`)`
            margin-inline: auto;
        `}

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 50% 30%, ${t}, transparent 95%);
            pointer-events: none;
        }
    `}
`,ft=v.img`
    ${({theme:e})=>y`
        position: absolute;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        border-radius: ${e.radii.lg};
        border: 1px solid ${e.colors.glassBorder};
        background: ${e.colors.glassBackground};
        margin: 10px;
        object-fit: cover;
        object-position: top center;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: none;
    `}
`;function pt(e){if(e===`pet`)return`Pet-проект`;if(e===`freelance`)return`Фриланс / продукт`;if(e===`test`)return`Тестовое задание`;if(e===`commercial`)return`Коммерческий проект`}function mt({project:e,preview:t,headingId:n,reversed:r=!1}){return(0,w.jsxs)(ot,{$reversed:r,variants:k,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-100px`},children:[(0,w.jsxs)(Q,{variants:A,children:[(0,w.jsx)(ut,{children:pt(e.kind)}),(0,w.jsx)(L,{id:n,children:e.title}),(0,w.jsx)(R,{as:`p`,children:e.subtitle}),(0,w.jsx)(z,{children:e.description}),(0,w.jsx)(`span`,{children:e.info}),(0,w.jsx)(st,{children:e.stack.map(e=>(0,w.jsx)(ct,{children:e},e))}),(0,w.jsxs)(lt,{children:[e.demoUrl?(0,w.jsxs)(K,{href:e.demoUrl,target:`_blank`,rel:`noopener noreferrer`,children:[(0,w.jsx)(U,{icon:se.faArrowUpRightFromSquare,pixels:18,"aria-hidden":!0}),`Посмотреть`]}):null,e.githubUrl?(0,w.jsxs)(K,{href:e.githubUrl,target:`_blank`,rel:`noopener noreferrer`,variant:`secondary`,children:[(0,w.jsx)(U,{icon:_e.faGithub,pixels:18,"aria-hidden":!0}),`GitHub`]}):null]})]}),(0,w.jsx)(Q,{variants:A,children:t})]})}function ht({accent:e,demoUrl:t,imageSrc:n,className:r}){let i=M[e];return(0,w.jsx)(dt,{href:t??``,target:`_blank`,rel:`noopener noreferrer`,className:r,$accent:i,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-60px`},variants:j,"aria-hidden":!0,children:n?(0,w.jsx)(ft,{src:n,alt:``}):null})}var gt=v.div`
    ${({theme:e})=>y`
        background: ${e.colors.backgroundSecondary};
        border-top: 1px solid ${e.colors.glassBorder};
        border-bottom: 1px solid ${e.colors.glassBorder};
    `}
`,_t=v.div`
    ${({theme:e})=>y`
        padding: 6rem 0;
        text-align: center;
        background-color: ${e.colors.background};
    `}
`,vt=v.div`
    ${({theme:e})=>y`
        min-height: 100vh;
        min-height: 100svh;
        display: flex;
        align-items: center;
        padding: ${e.space[6]} 0;
        border-top: 1px solid ${e.colors.glassBorder};
        background: ${e.colors.gray50};

        &:nth-of-type(even) {
            background: ${e.colors.gray100};
        }

        ${S.lessThan(`md`)`
      padding: ${e.space[5]} 0;
    `}
    `}
`;function yt(){return(0,w.jsxs)(gt,{id:`projects`,children:[(0,w.jsx)(_t,{children:(0,w.jsx)(D,{children:(0,w.jsxs)(V,{id:`projects-intro`,children:[(0,w.jsx)(L,{children:(0,w.jsxs)(I,{as:`span`,$inline:!0,$alignItems:`center`,$gap:2,children:[(0,w.jsx)(U,{icon:le.faDiagramProject,pixels:18,"aria-hidden":!0}),`Проекты`]})}),(0,w.jsx)(z,{children:`От свежих pet-проектов и продуктовой разработки до крупного e-commerce.`})]})})}),at.map((e,t)=>(0,w.jsx)(vt,{"aria-labelledby":`project-${e.id}-title`,children:(0,w.jsx)(D,{children:(0,w.jsx)(mt,{project:e,headingId:`project-${e.id}-title`,reversed:t%2==1,preview:(0,w.jsx)(ht,{accent:e.accent,title:e.title,imageSrc:e.previewImage,demoUrl:e.demoUrl})})})},e.id))]})}var $=[{id:`core`,title:`Основной стек`,items:[`React`,`TypeScript`,`Next.js`,`JavaScript`,`HTML5`,`CSS3`]},{id:`state`,title:`Состояние и данные`,items:[`Redux Toolkit`,`TanStack Query`,`MobX`,`GraphQL`,`REST API`]},{id:`style`,title:`Стили и UI`,items:[`Styled-components`,`SCSS`,`Адаптивная вёрстка`,`Кроссбраузерная вёрстка`,`Figma`]},{id:`quality`,title:`Качество и инструменты`,items:[`Jest`,`React Testing Library`,`ESLint`,`Storybook`,`Git`,`Webpack`,`Vite`,`Docker`,`CI/CD`]},{id:`process`,title:`Процессы`,items:[`Jira`,`Agile/Scrum`,`Code review`,`Postman`,`AI-ассистенты (Cursor)`]}],bt=v.span`
    ${({theme:e})=>y`
        display: inline-flex;
        align-items: center;
        padding: ${e.space[2]} ${e.space[3]};
        font-size: 0.875rem;
        font-weight: 500;
        background-color: ${e.colors.background};
        border: 1px solid ${e.colors.glassBorder};
        border-radius: ${e.radii.full};
        box-shadow: ${e.shadows.sm};
    `}
`,xt=v.div`
    ${({theme:e})=>y`
        display: flex;
        position: relative;
        flex-direction: column;
        gap: ${e.space[3]};
        padding: ${e.space[4]};
        border-radius: ${e.radii.lg};
        background-color: ${e.colors.gray100};
        border: 1px solid ${e.colors.glassBorder};
        box-shadow: ${e.shadows.sm};
    `}
`,St=v.div`
    ${({theme:e})=>y`
        display: flex;
        flex-wrap: wrap;
        gap: ${e.space[2]};
        z-index: 1;
    `}
`;function Ct({label:e}){return(0,w.jsx)(bt,{children:e})}function wt({category:e}){return(0,w.jsxs)(xt,{children:[(0,w.jsx)(R,{as:`h2`,children:e.title}),(0,w.jsx)(St,{children:e.items.map(e=>(0,w.jsx)(Ct,{label:e},e))})]})}var Tt=v.section`
    ${({theme:e})=>y`
        position: relative;
        padding: ${e.space[6]} 0;
        background: ${e.colors.background};
    `}
`,Et=v.div`
    ${({theme:e})=>y`
        display: grid;
        gap: ${e.space[4]};

        ${S.greaterThan(`md`)`
      grid-template-columns: repeat(2, minmax(0, 1fr));
    `}

        ${S.greaterThan(`lg`)`
      grid-template-columns: repeat(3, minmax(0, 1fr));
    `}
    `}
`,Dt=v.div`
    ${({theme:e})=>y`
        max-width: 40rem;
        margin: 0 auto ${e.space[5]};
        text-align: center;
    `}
`;function Ot(){return(0,w.jsx)(Tt,{id:`skills`,children:(0,w.jsx)(D,{children:(0,w.jsxs)(V,{children:[(0,w.jsxs)(Dt,{children:[(0,w.jsx)(L,{children:(0,w.jsx)(I,{as:`span`,$inline:!0,$alignItems:`center`,$gap:2,children:`Навыки`})}),(0,w.jsx)(z,{children:`Стек технологий: от React и TypeScript до тестов, Storybook и CI/CD.`})]}),(0,w.jsx)(Et,{children:$.map((e,t)=>(0,w.jsx)(wt,{category:e,num:t},e.id))})]})})})}var kt=v.main`
    ${({theme:e})=>y`
        min-height: 100vh;
        min-height: 100svh;
        background: ${e.colors.background};
    `}
`;function At(){return(0,w.jsxs)(kt,{children:[(0,w.jsx)(it,{}),(0,w.jsx)(yt,{}),(0,w.jsx)(Ot,{}),(0,w.jsx)(ze,{}),(0,w.jsx)(Ye,{})]})}(0,ae.createRoot)(document.getElementById(`root`)).render((0,w.jsx)(b.StrictMode,{children:(0,w.jsx)(()=>(0,w.jsx)(T,{children:(0,w.jsx)(At,{})}),{})}));