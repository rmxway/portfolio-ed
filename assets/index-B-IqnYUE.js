import{a as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t}from"./vendor-BK6Eqj51.js";import{r as n,t as r}from"./vendor-CoBs3g5F.js";import{t as i}from"./vendor-C6u1JydP.js";import{a,c as o,d as s,i as c,l,n as ee,o as u,r as d,s as f,t as te,u as ne}from"./vendor-CgMo-5xT.js";import{n as re,t as ie}from"./vendor-C_ZT8GSF.js";import{a as ae,i as p,n as oe,r as m,t as h}from"./vendor-LKzrSikF.js";import{t as g}from"./vendor-B8bb30P_.js";import{t as _}from"./vendor-BrfEro6Z.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var v=e(n(),1),y=t(),se=re(),ce=ie();i.autoAddCss=!1;var b={xs:`320px`,sm:`576px`,md:`768px`,lg:`992px`,xl:`1200px`},le={colors:{background:`#ffffff`,backgroundSecondary:`#f5f5f7`,text:`#201f1e`,textMuted:`#6e6e73`,textSecondary:`#8c8987`,primary:`#5715e5`,accent:`#5715e5`,accentHover:`#723fde`,success:`#34c759`,glassBorder:`rgba(0, 0, 0, 0.12)`,glassBackground:`rgba(255, 255, 255, 0.72)`,gray50:`#fcf7f7`,gray100:`#fbf4f4`,gray200:`#f1eeee`,gray300:`#e3dede`,gray400:`#c4bfbf`,gray500:`#a49d9d`,gray600:`#7a7575`,gray700:`#626060`,gray800:`#464343`,gray900:`#222020`},gradients:{hero:`linear-gradient(180deg, #f5f5f7 0%, #ffffff 45%, #e8eef8 100%)`,heroAccent:`radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 113, 227, 0.15), transparent)`,card:`linear-gradient(145deg, #ffffff 0%, #f5f5f7 100%)`},typography:{heroTitle:`clamp(2rem, 8vw, 3.5rem)`,sectionTitle:`clamp(1.8rem, 5vw, 2.6rem)`,lead:`clamp(1.125rem, 2vw, 1.375rem)`,body:`1.0625rem`},shadows:{sm:`0 2px 8px rgba(0, 0, 0, 0.06)`,md:`0 8px 24px rgba(0, 0, 0, 0.08)`,cardHover:`0 16px 40px rgba(0, 0, 0, 0.12)`},space:[`0`,`0.25rem`,`0.5rem`,`1rem`,`1.5rem`,`2rem`,`3rem`],radii:{sm:`6px`,md:`12px`,lg:`18px`,xl:`24px`,full:`9999px`},fonts:{body:`var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, sans-serif`,mono:`var(--font-geist-mono), ui-monospace, monospace`},zIndex:{header:100,modal:200}},ue=oe`  
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
`,x=h(b),de={...le,breakpoints:{...b}},S=r();function fe({children:e}){return(0,S.jsxs)(ae,{theme:de,children:[(0,S.jsx)(ue,{}),e]})}var pe=[{id:`freelance-2025`,period:`Июнь 2025 — Май 2026`,start:{month:5,year:2025},end:{month:4,year:2026},company:`Фриланс`,role:`Frontend-разработчик`,location:`Москва`,description:`Pet-проекты, тестовые задания и развитие существующих приложений с упором на современный стек и AI-инструменты.`,highlights:[`Stories, Simple Trading, Green Shop, React Notes, ITGuru Test, Соколиная охота`,`Автотесты, Storybook, NextAuth, Firebase`,`Повышение скорости разработки за счёт AI-практик`]},{id:`trust-medanketa`,period:`Март 2023 — Апрель 2025`,start:{month:2,year:2023},end:{month:3,year:2025},company:`Trust System (фриланс)`,role:`Frontend-разработчик`,location:`Москва`,description:`Проект Medanketa и саморазвитие: Next.js, GraphQL, RTK, TanStack Query, деплой.`,highlights:[`Medanketa: анкеты, статистика, шаблоны, справочники, API`,`Оптимизация производительности и рефакторинг`,`Пет-проекты и тестовые задания для роста стека`]},{id:`askona`,period:`Ноябрь 2020 — Август 2022`,start:{month:10,year:2020},end:{month:7,year:2022},company:`Аскона Тех`,role:`Frontend-разработчик`,location:`Москва`,description:`Развитие интернет-магазина: каталог, фильтры, карточки, подборщики, мобильная версия.`,highlights:[`UI Kit и новые страницы на React + TypeScript`,`Менторинг коллег, code review, Agile/Scrum`,`Ускорение загрузки и рефакторинг legacy`]},{id:`585-junior`,period:`Ноябрь 2019 — Апрель 2020`,start:{month:10,year:2017},end:{month:3,year:2020},company:`585, Холдинг`,role:`Младший разработчик`,location:`Москва`,description:`Вёрстка по макетам, переход к современному фронтенду. Поддержка и развитие витрины под руководством senior-разработчика. Большой опыт вёрстки и оптимизации скорости загрузки страницы.`,highlights:[`PSD / Zeplin / Figma → HTML, LESS/SCSS, Pug, Webpack`,`Сокращение времени загрузки страницы с ~7 с до ~1.5 с`,`Формы с валидацией`,`Новые UI-блоки и страницы`,`Оптимизация скорости`]}],C=p.div`
    ${({theme:e})=>m`
        width: 100%;
        max-width: 1120px;
        margin-left: auto;
        margin-right: auto;
        padding-left: ${e.space[3]};
        padding-right: ${e.space[3]};

        ${x.greaterThan(`lg`)`
      padding-left: ${e.space[4]};
      padding-right: ${e.space[4]};
    `}
    `}
`,w=p.div`
    ${({theme:e,$direction:t=`row`,$inline:n=!1,$alignItems:r,$justifyContent:i,$gap:a,$flexWrap:o})=>m`
        display: ${n?`inline-flex`:`flex`};
        flex-direction: ${t};
        ${r!=null&&m`
                align-items: ${r};
            `}
        ${i!=null&&m`
                justify-content: ${i};
            `}
    ${a!=null&&m`
                gap: ${typeof a==`number`?e.space[a]:a};
            `}
    ${o!=null&&m`
                flex-wrap: ${o};
            `}
    `}
`,me=p.h1`
    ${({theme:e})=>m`
        font-size: ${e.typography.heroTitle};
        font-weight: 600;
        letter-spacing: -0.03em;
        line-height: 1.05;
        z-index: 1;
        color: ${e.colors.text};
    `}
`,T=p.h2`
    ${({theme:e})=>m`
        font-size: ${e.typography.sectionTitle};
        font-weight: 600;
        letter-spacing: -0.025em;
        line-height: 1.08;
        z-index: 1;
        color: ${e.colors.text};

        ${x.lessThan(`md`)`
      letter-spacing: -0.02em;
    `}
    `}
`,E=p.h3`
    ${({theme:e})=>m`
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: -0.02em;
        line-height: 1.15;
        z-index: 1;
        color: ${e.colors.text};

        ${x.greaterThan(`md`)`
      font-size: 1.3rem;
    `}
    `}
`,D=p.p`
    ${({theme:e})=>m`
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

        span {
            display: inline-block;
        }
    `}
`,O=p.p`
    ${({theme:e})=>m`
        font-size: ${e.typography.body};
        line-height: 1.55;
        color: ${e.colors.textSecondary};
    `}
`,k=p.div`
    ${({theme:e})=>m`
        display: block;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: ${e.colors.gray600};
        margin-bottom: ${e.space[2]};
    `}
`,A={hidden:{opacity:0,y:28},visible:{opacity:1,y:0,transition:{duration:.55,ease:[.22,1,.36,1]}}},j={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.06}}},M={hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:{duration:.45,ease:[.22,1,.36,1]}}},N={hidden:{opacity:0,scale:.96},visible:{opacity:1,scale:1,transition:{duration:.5,ease:[.22,1,.36,1]}}},P=p(g.section)`
    position: relative;
    width: 100%;
`;function F({children:e,className:t,id:n}){return(0,S.jsx)(P,{id:n,className:t,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-80px`},variants:A,children:e})}var I=p.section`
    ${({theme:e})=>m`
        position: relative;
        padding: ${e.space[6]} 0;
        overflow: hidden;
        border-top: 1px solid ${e.colors.glassBorder};
        background-image: radial-gradient(${e.colors.background} 20%, ${e.colors.gray400});
    `}
`,L=p.ol`
    ${({theme:e})=>m`
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: ${e.space[4]};
        position: relative;

        ${x.greaterThan(`md`)`
            gap: ${e.space[5]};
        `}
    `}
`,R=p(g.li)`
    ${({theme:e})=>m`
        position: relative;

        &::before {
            content: '';
            position: absolute;
            left: 20px;
            top: 2rem;
            width: 8px;
            height: 8px;
            border-radius: ${e.radii.full};
            background: ${e.colors.gray700};
            box-shadow: 0 0 0 4px ${e.colors.glassBorder};
            z-index: 3;
        }

        &:not(:last-child)::after {
            content: '';
            position: absolute;
            left: 23px;
            top: 2rem;
            height: calc(100% + ${e.space[5]});
            // bottom: calc(-1 * ${e.space[4]} - 23px);
            width: 2px;
            background: ${e.colors.glassBorder};
            z-index: 1;
        }
    `}
`,z=p.article`
    ${({theme:e})=>m`
        padding: ${e.space[4]};
        border-radius: ${e.radii.lg};
        background: ${e.colors.background};
        border: 1px solid ${e.colors.glassBorder};
        box-shadow: ${e.shadows.sm};
        padding-left: ${e.space[6]};
        z-index: 0;
    `}
`,he=p.div`
    ${({theme:e})=>m`
        max-width: 40rem;
        margin: 0 auto ${e.space[5]};
        text-align: center;
    `}
`,ge=p.p`
    ${({theme:e})=>m`
        font-size: 0.875rem;
        font-weight: 600;
        color: ${e.colors.textMuted};
        margin-bottom: ${e.space[2]};
    `}
`,_e=p(O)`
    ${({theme:e})=>m`
        margin-top: 0.25rem;
        color: ${e.colors.text};
    `}
`,ve=p(O)`
    ${({theme:e})=>m`
        margin-top: ${e.space[3]};
    `}
`,ye=p.ul`
    ${({theme:e})=>m`
        margin: ${e.space[3]} 0 0;
        padding-left: 1.1rem;
        color: ${e.colors.textSecondary};
        font-size: ${e.typography.body};
        line-height: 1.55;
    `}
`;function B(e,t,n,r){let i=e%10,a=e%100;return i===1&&a!==11?t:i>=2&&i<=4&&(a<10||a>=20)?n:r}function be(e,t){let n=e.year*12+e.month,r=new Date,i=t??{year:r.getFullYear(),month:r.getMonth()},a=i.year*12+i.month-n;if(a<=0)return`0 месяцев`;let o=Math.floor(a/12),s=a%12,c=o>0?`${o} ${B(o,`год`,`года`,`лет`)}`:``,l=s>0?`${s} ${B(s,`месяц`,`месяца`,`месяцев`)}`:``;return c&&l?`${c} ${l}`:c||l}function xe({item:e}){let t=be(e.start,e.end);return(0,S.jsxs)(z,{children:[(0,S.jsxs)(ge,{children:[e.period,` ( `,t,` )`]}),(0,S.jsx)(E,{as:`h3`,children:e.company}),(0,S.jsxs)(_e,{as:`p`,children:[e.role,e.location?` · ${e.location}`:``]}),(0,S.jsx)(ve,{as:`p`,children:e.description}),(0,S.jsx)(ye,{children:e.highlights.map(e=>(0,S.jsx)(`li`,{children:e},e))})]})}var V={indigo:`#6366f1`,emerald:`#16a34a`,amber:`#b45309`,yellow:`#fad233`,sky:`#0ea5e9`,purple:`#8b5cf6`,blue:`#0071e3`,cyan:`#00b9bf`,violet:`#7c3aed`};function Se(){return(0,S.jsx)(I,{id:`experience`,children:(0,S.jsx)(C,{children:(0,S.jsxs)(F,{children:[(0,S.jsxs)(he,{children:[(0,S.jsx)(T,{children:(0,S.jsx)(w,{as:`span`,$inline:!0,$alignItems:`center`,$gap:2,children:`Опыт работы`})}),(0,S.jsxs)(D,{children:[`5 лет коммерческой разработки от вёрстки до продуктового `,(0,S.jsx)(`span`,{children:`React и Next.js.`})]})]}),(0,S.jsx)(L,{children:pe.map(e=>(0,S.jsx)(R,{variants:A,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-50px`},children:(0,S.jsx)(xe,{item:e})},e.id))})]})})})}var H=m`
    ${({theme:e,$variant:t})=>m`
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

        ${t===`primary`&&m`
                color: #fff;
                background: ${e.colors.accent};

                &:hover {
                    background: ${e.colors.accentHover};
                }

                &:active {
                    transform: scale(0.98);
                }
            `}

        ${t===`secondary`&&m`
                color: ${e.colors.accent};
                background: transparent;
                box-shadow: inset 0 0 0 1px ${e.colors.accent};

                &:hover {
                    background: rgba(0, 113, 227, 0.06);
                }
            `}

    ${t===`ghost`&&m`
                color: ${e.colors.accent};
                background: transparent;

                &:hover {
                    color: ${e.colors.accentHover};
                }
            `}
    `}
`,Ce=p.button`
    ${H}
`,we=p.a`
    ${H}
`;function U(e){let{children:t,className:n,variant:r=`primary`}=e;if(`href`in e&&e.href){let{href:i,target:a,rel:o}=e;return(0,S.jsx)(we,{href:i,target:a,rel:o,className:n,$variant:r,children:t})}let{type:i=`button`,disabled:a,onClick:o,...s}=e;return(0,S.jsx)(Ce,{type:i,disabled:a,onClick:o,className:n,$variant:r,...s,children:t})}var W=(0,v.forwardRef)(function({pixels:e=18,style:t,...n},r){let i=e===void 0?t:{width:e,height:e,minWidth:e,minHeight:e,...t};return(0,S.jsx)(_,{ref:r,style:i,...n})});function Te(e){let t=e.trim();if(!t.startsWith(`#`))return null;let n=t.slice(1);return n.length===3?`#${n.split(``).map(e=>`${e}${e}`).join(``)}`:n.length===6?t:null}function G(e,t){let n=Te(e);return n?`${n}${t}`:e}var Ee=p(g.div)`
    ${({theme:e,$accent:t})=>m`
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(180deg, ${e.colors.backgroundSecondary} 0%, ${e.colors.background} 45%, ${G(t,`22`)} 100%);
    `}
`,De=p(g.div)`
    ${({$accent:e,$angle:t})=>m`
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(${t}deg, ${G(e,`29`)} 0%, ${G(e,`0d`)} 42%, transparent 72%);
    `}
`,Oe=p(g.div)`
    ${({$accent:e})=>m`
        position: absolute;
        width: min(60vw, 520px);
        height: min(60vw, 520px);
        top: -18%;
        right: -12%;
        border-radius: 50%;
        filter: blur(80px);
        background: radial-gradient(circle, ${G(e,`40`)}, transparent 70%);
        pointer-events: none;
    `}
`;function ke({accent:e=`blue`,angle:t=130}){let n=V[e];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Ee,{$accent:n,initial:{opacity:0},animate:{opacity:1},transition:{duration:.8}}),(0,S.jsx)(De,{$accent:n,$angle:t,initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.1}}),(0,S.jsx)(Oe,{$accent:n,initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.22,1,.36,1]}})]})}var Ae=p.a`
    ${({theme:e})=>m`
        display: inline-flex;
        align-items: center;
        justify-content: center;
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
`;function K({href:e=void 0,children:t,target:n,rel:r}){return(0,S.jsx)(Ae,{href:e,target:n,rel:r,children:t})}var je=p.footer`
    ${({theme:e})=>m`
        position: relative;
        padding: ${e.space[4]} 0 ${e.space[5]};
        background: linear-gradient(180deg, ${e.colors.gray600} 0%, ${e.colors.gray800} 100%);
    `}
`,Me=p.div`
    ${({theme:e})=>m`
        display: grid;
        gap: ${e.space[5]};
        margin-top: ${e.space[5]};
        @media (min-width: 768px) {
            grid-template-columns: 2fr;
            align-items: start;
        }
    `}
`;p.div`
    ${({theme:e})=>m`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ${D}, ${T} {
            margin: 0;
            color: ${e.colors.gray200};
        }
    `}
`,p(O)`
    ${({theme:e})=>m`
        font-weight: 600;
        color: ${e.colors.gray200};
        margin: 0 0 ${e.space[2]};
    `}
`;var Ne=p.ul`
    ${({theme:e})=>m`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: ${e.space[3]};
        grid-template-columns: 1fr;

        @media (min-width: 480px) {
            grid-template-columns: repeat(2, minmax(50px, 1fr));
        }
    `}
`,q=p.li`
    ${({theme:e})=>m`
        border-radius: ${e.radii.lg};
        border: 1px solid ${e.colors.glassBorder};
        background-color: ${e.colors.gray700};
        box-shadow: ${e.shadows.sm};
        min-height: 130px;
        text-align: center;
        transition:
            box-shadow 0.25s ease,
            transform 0.25s ease,
            border-color 0.25s ease;

        &:hover {
            box-shadow: ${e.shadows.md};
            transform: translateY(-2px);
            border-color: ${e.colors.gray600};
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
`,J=p.span`
    ${({theme:e})=>m`
        display: flex;
        align-items: center;
        gap: ${e.space[2]};
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: ${e.colors.gray300};
    `}
`,Y=p.span`
    ${({theme:e})=>m`
        font-size: ${e.typography.body};
        font-weight: 500;
        color: ${e.colors.gray100};
        line-height: 1.4;
        word-break: break-word;
    `}
`,X=p.span`
    ${({theme:e})=>m`
        font-size: 0.8125rem;
        color: ${e.colors.gray400};
        line-height: 1.45;
    `}
`;p.div`
    ${({theme:e})=>m`
        color: ${e.colors.textMuted};
        border-radius: ${e.radii.lg};
        border: 1px solid ${e.colors.glassBorder};
        background-color: ${e.colors.gray100};
        padding: ${e.space[4]};
        display: flex;
        align-items: flex-start;
        gap: ${e.space[3]};
    `}
`;var Pe=p.div`
    ${({theme:e})=>m`
        height: 1px;
        background: linear-gradient(90deg, transparent, ${e.colors.gray700}, transparent);
        margin: ${e.space[5]} 0 ${e.space[3]};
    `}
`,Fe=p.div`
    ${({theme:e})=>m`
        display: flex;
        flex-wrap: wrap;
        gap: ${e.space[2]};
        align-items: center;
        justify-content: center;

        ${x.greaterThan(`lg`)`
        gap: ${e.space[2]} ${e.space[4]};
            `}
    `}
`,Z=p.span`
    ${({theme:e})=>m`
        display: inline-flex;
        align-items: center;
        gap: ${e.space[2]};
        font-size: 0.9375rem;
        font-weight: 500;
        color: ${e.colors.gray100};
    `}
`;function Ie(){return(0,S.jsx)(je,{id:`contact`,children:(0,S.jsx)(C,{children:(0,S.jsx)(F,{children:(0,S.jsx)(Me,{children:(0,S.jsxs)(`div`,{children:[(0,S.jsxs)(Ne,{children:[(0,S.jsx)(q,{children:(0,S.jsxs)(K,{href:`mailto:rmxway@mail.ru`,children:[(0,S.jsx)(J,{children:(0,S.jsx)(W,{icon:f,pixels:22,"aria-hidden":!0})}),(0,S.jsx)(Y,{children:`rmxway@yandex.ru`}),(0,S.jsx)(X,{children:`Основной канал для откликов`})]})}),(0,S.jsx)(q,{children:(0,S.jsxs)(K,{href:`https://t.me/evgenydovgan`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,S.jsx)(J,{children:(0,S.jsx)(W,{icon:ce.faTelegramPlane,pixels:22,"aria-hidden":!0})}),(0,S.jsx)(Y,{children:`@evgenydovgan`}),(0,S.jsx)(X,{children:`Быстрые вопросы, на связи`})]})}),(0,S.jsx)(q,{children:(0,S.jsxs)(K,{href:`tel:+79672295802`,children:[(0,S.jsx)(J,{children:(0,S.jsx)(W,{icon:s,pixels:22,"aria-hidden":!0})}),(0,S.jsx)(Y,{children:`+7 (967) 229-58-02`}),(0,S.jsx)(X,{children:`До 22:00 по Москве`})]})}),(0,S.jsx)(q,{children:(0,S.jsxs)(K,{children:[(0,S.jsx)(J,{children:(0,S.jsx)(W,{icon:l,pixels:22,"aria-hidden":!0})}),(0,S.jsx)(Y,{children:`Россия, Москва`})]})})]}),(0,S.jsx)(Pe,{}),(0,S.jsxs)(Fe,{children:[(0,S.jsx)(K,{href:`#top`,children:(0,S.jsxs)(Z,{children:[(0,S.jsx)(W,{icon:te,size:`sm`,"aria-hidden":!0}),`Наверх`]})}),(0,S.jsx)(K,{href:`#projects`,children:(0,S.jsxs)(Z,{children:[(0,S.jsx)(W,{icon:d,size:`sm`,"aria-hidden":!0}),`Проекты`]})}),(0,S.jsx)(K,{href:`#skills`,children:(0,S.jsxs)(Z,{children:[(0,S.jsx)(W,{icon:a,size:`sm`,"aria-hidden":!0}),`Навыки`]})}),(0,S.jsx)(K,{href:`#experience`,children:(0,S.jsxs)(Z,{children:[(0,S.jsx)(W,{icon:c,size:`sm`,"aria-hidden":!0}),`Опыт`]})})]})]})})})})})}var Le=p.header`
    ${({theme:e})=>m`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: ${e.space[6]} ${e.space[3]};

        ${x.greaterThan(`lg`)`
            padding: ${e.space[6]} ${e.space[4]};
            min-height: 100svh;
        `}
    `}
`,Re=p(g.div)`
    ${({theme:e})=>m`
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: ${e.space[6]};
    `}
`,ze=p.div`
    ${({theme:e})=>m`
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        gap: ${e.space[5]};

        ${x.greaterThan(`lg`)`
            grid-template-columns: minmax(0, 1fr) auto;
            gap: ${e.space[6]};
        `}
    `}
`,Be=p.div`
    ${({theme:e})=>m`
        display: flex;
        flex-direction: column;
        gap: ${e.space[3]};
        text-align: center;

        ${x.greaterThan(`lg`)`
            text-align: left;
            align-items: flex-start;
            gap: ${e.space[6]};
        `}
    `}
`,Ve=p(g.div)`
    ${({theme:e})=>m`
        order: -1;
        justify-self: center;
        width: min(52vw, 220px);
        height: min(52vw, 220px);
        border-radius: ${e.radii.full};
        overflow: hidden;
        border: 1px solid ${e.colors.glassBorder};
        box-shadow: ${e.shadows.md};

        ${x.greaterThan(`lg`)`
            order: 0;
            justify-self: end;
            width: min(30vw, 250px);
            height: min(30vw, 250px);
        `}
    `}
`,He=p.img`
    width: 100%;
    height: 100%;
    background-position: center;
    pointer-events: none;
`,Ue=p.div`
    position: relative;
    z-index: 1;
    width: 100%;
`,We=p.div`
    ${({theme:e})=>m`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: ${e.space[2]};
        margin-top: ${e.space[2]};

        ${x.greaterThan(`lg`)`
            justify-content: flex-start;
        `}
    `}
`;function Ge(){return(0,S.jsxs)(Le,{id:`top`,children:[(0,S.jsx)(ke,{accent:`purple`,angle:130}),(0,S.jsx)(Ue,{children:(0,S.jsx)(C,{children:(0,S.jsx)(Re,{variants:j,initial:`hidden`,animate:`visible`,children:(0,S.jsxs)(ze,{children:[(0,S.jsxs)(Be,{children:[(0,S.jsx)(g.div,{variants:M,children:(0,S.jsx)(k,{children:`Frontend-разработчик`})}),(0,S.jsx)(g.div,{variants:M,children:(0,S.jsx)(me,{children:`Довгань Евгений`})}),(0,S.jsxs)(g.div,{variants:M,children:[(0,S.jsx)(D,{children:`Коммерческий опыт 5 лет. Во время перерыва (2023–2026) активно поддерживал навыки через временные проекты и учебу на пет-проектах: React / TypeScript, Next.js, архитектура FSD, тесты (Jest), Storybook, обработка edge-кейсов.`}),(0,S.jsx)(D,{children:`В октябре 2026 закончил курс по Frontend-разработке и Web-дизайну в РЭУ им. Г.В. Плеханова. В результате защитил итоговый проект и получил диплом о профессиональной переподготовке.`}),(0,S.jsx)(D,{children:`Готов к задачам любого уровня: новые проекты, поддержка, доработка, рефакторинг, покрытие тестами. Быстро вникаю в чужой код и соблюдаю code style. Использую AI в разработке как инструмент, а не замену.`})]}),(0,S.jsx)(g.div,{variants:M,children:(0,S.jsxs)(We,{children:[(0,S.jsxs)(U,{href:`#projects`,variant:`primary`,children:[(0,S.jsx)(W,{icon:o,pixels:16,"aria-hidden":!0}),`Смотреть проекты`]}),(0,S.jsxs)(U,{href:`#contact`,variant:`secondary`,children:[(0,S.jsx)(W,{icon:ne,pixels:16,"aria-hidden":!0}),`Связаться`]})]})})]}),(0,S.jsx)(Ve,{variants:M,children:(0,S.jsx)(He,{src:`./img/resume2.jpg`,alt:`Довгань Евгений`})})]})})})})]})}var Ke=[{id:`diving-center`,title:`Дайвинг-центр`,subtitle:`Итоговый проект обучения на курсе`,description:`Результат обучения на курсе Frontend-разработка и Web-дизайн в РЭУ им Г.В. Плеханова. Проект проектировался в Figma с нуля, после чего был перенесен на React. Разработан с помощью инструментов которые были изучены на курсе.`,stack:[`HTML`,`CSS`,`TypeScript`,`React`,`gh-pages`,`Font Awesome`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/diving-center`,demoUrl:`https://rmxway.github.io/diving-center/`,accent:`blue`,previewImage:`./img/diving-center.jpg`},{id:`green-shop`,title:`Green Shop Brand`,subtitle:`Интернет-магазин натуральной продукции`,description:`Каталог с поиском и фильтрами, корзина, избранное, сравнение товаров, NextAuth, личный кабинет, заказы в Firestore, тёмная тема, Storybook и тесты. Jest + React Testing Library: тесты ключевых компонентов. Storybook: визуальная документация 12+ компонентов UI-кита. Тёмная тема через styled-components.`,stack:[`Next.js 16`,`React 19`,`TypeScript`,`styled-components`,`Redux Toolkit`,`RTK Query`,`Firebase`,`NextAuth`,`Storybook`,`React Testing Library`,`Jest`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/green-shop`,demoUrl:`https://green-shop-brand.vercel.app/`,accent:`emerald`,previewImage:`./img/green-shop.jpg`},{id:`medanketa`,title:`Medanketa`,subtitle:`Медицинские анкеты и аналитика`,description:`Список и прохождение анкет, статистика, шаблоны и справочники. Интеграция API, оптимизация загрузки и рефакторинг.`,stack:[`React`,`TypeScript`,`Vite`,`TanStack Query`,`styled-components`,`ESLint`,`Prettier`],kind:`commercial`,githubUrl:`https://github.com/rmxway/medanketa`,demoUrl:`https://medanketa.com/`,accent:`purple`,previewImage:`./img/medanketa.jpg`},{id:`stories`,title:`Stories`,subtitle:`Виджет историй в духе мессенджеров и соцсетей`,description:`Демо виджета историй в стиле соцсетей: превью с кольцом прогресса, полноэкранный просмотр с автопереключением, навигация по тапам и клавиатуре, двухпальцевый zoom активной истории, режим просмотра зрителей и запоминание просмотренных в localStorage. Настроил ESLint/Prettier, написал README с инструкцией по запуску — код готов к передаче в команду.`,stack:[`Next.js`,`TypeScript`,`styled-components`,`Framer Motion`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/stories`,demoUrl:`https://stories-widget.vercel.app/`,accent:`violet`,previewImage:`./img/stories.jpg`},{id:`simpletrading`,title:`Simple Trading`,subtitle:`USD, EUR, CNY к рублю по данным ЦБ РФ`,description:`Трекер курсов доллара, евро и юаня к рублю: график за три месяца, переключение валюты, живые данные ЦБ. Интерфейс не моргает при смене котировки — старые цифры остаются, пока грузятся новые. Если запрос упал, значения не пропадают, а ошибка всплывает уведомлением. Архитектура FSD для лёгкой поддержки.`,stack:[`Next.js`,`TypeScript`,`TanStack Query`,`styled-components`,`MUI`,`lightweight-charts`,`Framer Motion`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/simpletrading`,demoUrl:`https://simpletrading-page.vercel.app/`,accent:`yellow`,previewImage:`./img/simpletrading.jpg`},{id:`react-notes`,title:`React Notes`,subtitle:`Заметки и задачи на FSD`,description:`CRUD заметок, фильтры, сортировка, оптимистичные обновления React Query, NextAuth и Firestore. FSD-архитектура для масштабирования.`,stack:[`Next.js 14`,`TypeScript`,`FSD`,`styled-components`,`Redux Toolkit`,`TanStack Query`,`NextAuth`,`Vitest`,`Framer Motion`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/react-notes`,demoUrl:`https://react-notes-service.vercel.app`,accent:`indigo`,previewImage:`./img/notes.jpg`},{id:`itguru-test`,title:`Products table`,subtitle:`Тестовое задание от itGuru`,description:`Авторизация DummyJSON, таблица товаров с пагинацией, поиск, сортировка, оптимистичное добавление в кэш React Query. React Hook Form + Yup: валидация форм с обработкой ошибок и состояний загрузки`,info:`login: emilys, password: emilyspass`,stack:[`React 19`,`TypeScript`,`Vite 7`,`TanStack Query`,`axios`,`React Hook Form`,`Yup`],kind:`test`,githubUrl:`https://github.com/rmxway/itguru-test`,demoUrl:`https://rmxway.github.io/itguru-test/`,accent:`sky`,previewImage:`./img/itguru.jpg`},{id:`sokolinayaohota`,title:`Соколиная охота`,subtitle:`Сайт ресторана`,description:`Вариант сайта ресторана на Next.js. Главная страница в виде лендинга, галерея, залы с описанием и бронированием, контакты.`,stack:[`Next.js 16`,`React 19`,`styled-components`,`Framer Motion`,`Storybook`,`Docker`,`Prettier`],kind:`commercial`,githubUrl:`https://github.com/rmxway/sokolinayaohota`,demoUrl:`https://sokolinayaohota.vercel.app/`,accent:`amber`,previewImage:`./img/sokol.jpg`},{id:`askona`,title:`Askona`,subtitle:`Аскона Тех — разработка и поддержка сайта`,description:`Каталог, фильтры, карточка товара, подборщики, UI Kit, менторинг фронтенда, Agile/Scrum и ускорение загрузки страниц.`,stack:[`React`,`TypeScript`,`UI Kit`,`Адаптивная вёрстка`],kind:`commercial`,demoUrl:`https://www.askona.ru/`,accent:`cyan`,previewImage:`./img/askona.jpg`},{id:`zoloto585`,title:`Золото 585`,subtitle:`Холдинг 585 — ювелирный ритейл`,description:`От вёрстки до React: формы с валидацией, каталоги, карточки товаров, рефакторинг и оптимизация скорости загрузки.`,stack:[`React`,`Webpack`,`SCSS`,`Формы и валидация`],kind:`commercial`,demoUrl:`https://zoloto585.ru/`,accent:`yellow`,previewImage:`./img/gold.jpg`}],qe=p(g.article)`
    ${({theme:e,$reversed:t})=>m`
        position: relative;
        display: grid;
        gap: ${e.space[6]};
        grid-template-columns: 1fr;
        background-color: #fff;
        z-index: 100;
        padding: ${e.space[5]};
        border-radius: ${e.radii.xl};
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);

        ${x.greaterThan(`lg`)`
            grid-template-columns: minmax(0, 1fr) minmax(100px, 300px);
            gap: ${e.space[6]};
            padding: calc(${e.space[6]} * 2);

            ${t&&m`
                    > *:first-child {
                        order: 2;
                    }

                    > *:last-child {
                        order: 1;
                    }
                `}
        `}
    `}
`,Q=p(g.div)`
    ${({theme:e})=>m`
        display: flex;
        flex-direction: column;
        gap: ${e.space[3]};

        ${D} {
            max-width: none;
        }
    `}
`,Je=p.ul`
    ${({theme:e})=>m`
        display: flex;
        flex-wrap: wrap;
        gap: ${e.space[2]};
        list-style: none;
        margin: 0;
        padding: 0;
    `}
`,Ye=p.li`
    ${({theme:e})=>m`
        padding: ${e.space[1]} ${e.space[3]};
        font-size: 0.8125rem;
        font-weight: 500;
        color: ${e.colors.text};
        border-radius: ${e.radii.full};
        border: 1px solid ${e.colors.gray400};
    `}
`,Xe=p.div`
    ${({theme:e})=>m`
        display: flex;
        flex-wrap: wrap;
        gap: ${e.space[2]};
        margin-top: ${e.space[2]};
    `}
`,Ze=p.span`
    ${({theme:e})=>m`
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: ${e.colors.textMuted};
    `}
`,Qe=p(g.a)`
    ${({theme:e,$accent:t})=>m`
        position: relative;
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: ${e.radii.xl};
        overflow: hidden;
        background: ${e.gradients.card};
        box-shadow: ${e.shadows.md};
        border: 1px solid ${e.colors.glassBorder};

        ${x.lessThan(`lg`)`
            margin-inline: auto;
            aspect-ratio: 6/4;
        `}

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 50% 30%, ${t}, transparent 95%);
            pointer-events: none;
        }
    `}
`,$e=p.img`
    ${({theme:e})=>m`
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
`;function et(e){if(e===`pet`)return`Pet-проект`;if(e===`freelance`)return`Фриланс / продукт`;if(e===`test`)return`Тестовое задание`;if(e===`commercial`)return`Коммерческий проект`}function tt({project:e,preview:t,headingId:n,reversed:r=!1}){return(0,S.jsxs)(qe,{$reversed:r,variants:j,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-120px`},children:[(0,S.jsxs)(Q,{variants:M,children:[(0,S.jsx)(Ze,{children:et(e.kind)}),(0,S.jsx)(T,{id:n,children:e.title}),(0,S.jsx)(E,{as:`p`,children:e.subtitle}),(0,S.jsx)(D,{children:e.description}),(0,S.jsx)(`span`,{children:e.info}),(0,S.jsx)(Je,{children:e.stack.map(e=>(0,S.jsx)(Ye,{children:e},e))}),(0,S.jsxs)(Xe,{children:[e.demoUrl?(0,S.jsxs)(U,{href:e.demoUrl,target:`_blank`,rel:`noopener noreferrer`,children:[(0,S.jsx)(W,{icon:ee,pixels:18,"aria-hidden":!0}),`Посмотреть`]}):null,e.githubUrl?(0,S.jsxs)(U,{href:e.githubUrl,target:`_blank`,rel:`noopener noreferrer`,variant:`secondary`,children:[(0,S.jsx)(W,{icon:se.faGithub,pixels:18,"aria-hidden":!0}),`GitHub`]}):null]})]}),(0,S.jsx)(Q,{variants:M,children:t})]})}function $({accent:e,demoUrl:t,imageSrc:n,className:r}){let i=V[e];return(0,S.jsx)(Qe,{href:t??``,target:`_blank`,rel:`noopener noreferrer`,className:r,$accent:i,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-60px`},variants:N,"aria-hidden":!0,children:n?(0,S.jsx)($e,{src:n,alt:``}):null})}var nt=p.div`
    ${({theme:e})=>m`
        background: ${e.colors.backgroundSecondary};
        border-top: 1px solid ${e.colors.glassBorder};
        border-bottom: 1px solid ${e.colors.glassBorder};
    `}
`,rt=p.div`
    ${({theme:e})=>m`
        padding: ${e.space[6]} 0;
        text-align: center;
        background-color: ${e.colors.background};
    `}
`,it=p.div`
    ${({theme:e,$img:t})=>m`
        position: relative;
        min-height: 100svh;
        display: flex;
        align-items: center;
        padding: ${e.space[6]} 0;
        border-top: 1px solid ${e.colors.glassBorder};
        background: ${e.colors.gray50};
        ${t&&t.length>0&&m`
                background-image: url(${t});
                background-size: cover;
                background-position: top center;
            `}

        &:before {
            content: '';
            background-image: linear-gradient(180deg, #0004, #fff);
            position: absolute;
            inset: -1px;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            z-index: 0;
        }

        ${x.lessThan(`lg`)`
            padding: ${e.space[5]} 0;
            min-height: auto;
        `}
    `}
`;function at(){return(0,S.jsxs)(nt,{id:`projects`,children:[(0,S.jsx)(rt,{children:(0,S.jsx)(C,{children:(0,S.jsxs)(F,{id:`projects-intro`,children:[(0,S.jsx)(T,{children:(0,S.jsxs)(w,{as:`span`,$inline:!0,$alignItems:`center`,$gap:2,children:[(0,S.jsx)(W,{icon:u,pixels:18,"aria-hidden":!0}),`Проекты`]})}),(0,S.jsxs)(D,{children:[`От свежих pet-проектов и продуктовой разработки до крупного `,(0,S.jsx)(`span`,{children:`e-commerce`}),`.`]})]})})}),Ke.map(e=>(0,S.jsx)(it,{"aria-labelledby":`project-${e.id}-title`,$img:e.previewImage,children:(0,S.jsx)(C,{children:(0,S.jsx)(tt,{project:e,headingId:`project-${e.id}-title`,preview:(0,S.jsx)($,{accent:e.accent,title:e.title,imageSrc:e.previewImage,demoUrl:e.demoUrl})})})},e.id))]})}var ot=[{id:`core`,title:`Основной стек`,items:[`React`,`Next.js`,`TypeScript / JS`,`HTML5`,`CSS3`]},{id:`state`,title:`Состояние и данные`,items:[`Redux Toolkit`,`TanStack Query`,`MobX`,`GraphQL`,`REST API`]},{id:`style`,title:`Стили и UI`,items:[`Figma`,`Адаптивная вёрстка`,`Styled-components`,`SCSS / LESS`,`CSS Modules`,`Tailwind`,`Bootstrap`,`MUI`]},{id:`quality`,title:`Качество и инструменты`,items:[`Git`,`Vite / Webpack`,`ESLint`,`Prettier`,`Storybook`,`Jest`,`React Testing Library`,`Docker`,`CI/CD`]},{id:`process`,title:`Процессы`,items:[`Jira`,`Agile/Scrum`,`Code Review`,`Postman`,`AI-ассистенты`]}],st=p.span`
    ${({theme:e})=>m`
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
`,ct=p.div`
    ${({theme:e})=>m`
        display: flex;
        position: relative;
        flex-direction: column;
        gap: ${e.space[3]};
        padding: ${e.space[4]};
        border-radius: ${e.radii.lg};
        background-color: ${e.colors.gray200};
        border: 1px solid ${e.colors.glassBorder};
        box-shadow: ${e.shadows.sm};
    `}
`,lt=p.div`
    ${({theme:e})=>m`
        display: flex;
        flex-wrap: wrap;
        gap: ${e.space[2]};
        z-index: 1;
    `}
`;function ut({label:e}){return(0,S.jsx)(st,{children:e})}function dt({category:e}){return(0,S.jsxs)(ct,{children:[(0,S.jsx)(E,{as:`h2`,children:e.title}),(0,S.jsx)(lt,{children:e.items.map(e=>(0,S.jsx)(ut,{label:e},e))})]})}var ft=p.section`
    ${({theme:e})=>m`
        position: relative;
        padding: ${e.space[6]} 0;
        background: ${e.colors.background};
    `}
`,pt=p.div`
    ${({theme:e})=>m`
        display: grid;
        gap: ${e.space[4]};

        ${x.greaterThan(`md`)`
      grid-template-columns: repeat(2, minmax(0, 1fr));
    `}

        ${x.greaterThan(`lg`)`
      grid-template-columns: repeat(3, minmax(0, 1fr));
    `}
    `}
`,mt=p.div`
    ${({theme:e})=>m`
        max-width: 40rem;
        margin: 0 auto ${e.space[5]};
        text-align: center;
    `}
`;function ht(){return(0,S.jsx)(ft,{id:`skills`,children:(0,S.jsx)(C,{children:(0,S.jsxs)(F,{children:[(0,S.jsx)(mt,{children:(0,S.jsx)(T,{children:(0,S.jsx)(w,{as:`span`,$inline:!0,$alignItems:`center`,$gap:2,children:`Навыки`})})}),(0,S.jsx)(pt,{children:ot.map((e,t)=>(0,S.jsx)(dt,{category:e,num:t},e.id))})]})})})}var gt=p.main`
    ${({theme:e})=>m`
        min-height: 100vh;
        min-height: 100svh;
        background: ${e.colors.background};
    `}
`;function _t(){return(0,S.jsxs)(gt,{children:[(0,S.jsx)(Ge,{}),(0,S.jsx)(at,{}),(0,S.jsx)(ht,{}),(0,S.jsx)(Se,{}),(0,S.jsx)(Ie,{})]})}(0,y.createRoot)(document.getElementById(`root`)).render((0,S.jsx)(v.StrictMode,{children:(0,S.jsx)(()=>(0,S.jsx)(fe,{children:(0,S.jsx)(_t,{})}),{})}));