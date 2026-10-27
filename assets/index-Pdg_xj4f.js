import{a as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t}from"./vendor-BK6Eqj51.js";import{r as n,t as r}from"./vendor-CoBs3g5F.js";import{t as i}from"./vendor-C6u1JydP.js";import{a,c as o,d as s,i as c,l,n as ee,o as te,r as u,s as d,t as ne,u as re}from"./vendor-CgMo-5xT.js";import{n as ie,t as ae}from"./vendor-C_ZT8GSF.js";import{a as oe,i as f,n as se,r as p,t as m}from"./vendor-LKzrSikF.js";import{t as h}from"./vendor-B8bb30P_.js";import{t as g}from"./vendor-BrfEro6Z.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var _=e(n(),1),v=t(),ce=ie(),le=ae();i.autoAddCss=!1;var y={xs:`320px`,sm:`576px`,md:`768px`,lg:`992px`,xl:`1200px`},ue={colors:{background:`#ffffff`,backgroundSecondary:`#f5f5f7`,text:`#201f1e`,textMuted:`#6e6e73`,textSecondary:`#8c8987`,primary:`#5715e5`,accent:`#5715e5`,accentHover:`#723fde`,success:`#34c759`,glassBorder:`rgba(0, 0, 0, 0.12)`,glassBackground:`rgba(255, 255, 255, 0.72)`,gray50:`#fcf7f7`,gray100:`#fbf4f4`,gray200:`#f1eeee`,gray300:`#e3dede`,gray400:`#c4bfbf`,gray500:`#a49d9d`,gray600:`#7a7575`,gray700:`#626060`,gray800:`#464343`,gray900:`#222020`},gradients:{hero:`linear-gradient(180deg, #f5f5f7 0%, #ffffff 45%, #e8eef8 100%)`,heroAccent:`radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 113, 227, 0.15), transparent)`,card:`linear-gradient(145deg, #ffffff 0%, #f5f5f7 100%)`},typography:{heroTitle:`clamp(2rem, 8vw, 3.5rem)`,sectionTitle:`clamp(1.8rem, 5vw, 2.6rem)`,lead:`clamp(1.125rem, 2vw, 1.375rem)`,body:`1.0625rem`},shadows:{sm:`0 2px 8px rgba(0, 0, 0, 0.06)`,md:`0 8px 24px rgba(0, 0, 0, 0.08)`,cardHover:`0 16px 40px rgba(0, 0, 0, 0.12)`},space:[`0`,`0.25rem`,`0.5rem`,`1rem`,`1.5rem`,`2rem`,`3rem`],radii:{sm:`6px`,md:`12px`,lg:`18px`,xl:`24px`,full:`9999px`},fonts:{body:`var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, sans-serif`,mono:`var(--font-geist-mono), ui-monospace, monospace`},zIndex:{header:100,modal:200}},de=se`  
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
`,b=m(y),fe={...ue,breakpoints:{...y}},x=r();function pe({children:e}){return(0,x.jsxs)(oe,{theme:fe,children:[(0,x.jsx)(de,{}),e]})}var me=[{id:`freelance-2025`,period:`Июнь 2025 — Май 2026`,start:{month:5,year:2025},end:{month:4,year:2026},company:`Фриланс`,role:`Frontend-разработчик`,location:`Москва`,description:`Pet-проекты, тестовые задания и развитие существующих приложений с упором на современный стек и AI-инструменты.`,highlights:[`Stories, Simple Trading, Green Shop, React Notes, ITGuru Test, Соколиная охота`,`Автотесты, Storybook, NextAuth, Firebase`,`Повышение скорости разработки за счёт AI-практик`]},{id:`trust-medanketa`,period:`Март 2023 — Апрель 2025`,start:{month:2,year:2023},end:{month:3,year:2025},company:`Trust System (фриланс)`,role:`Frontend-разработчик`,location:`Москва`,description:`Проект Medanketa и саморазвитие: Next.js, GraphQL, RTK, TanStack Query, деплой.`,highlights:[`Medanketa: анкеты, статистика, шаблоны, справочники, API`,`Оптимизация производительности и рефакторинг`,`Пет-проекты и тестовые задания для роста стека`]},{id:`askona`,period:`Ноябрь 2020 — Август 2022`,start:{month:10,year:2020},end:{month:7,year:2022},company:`Аскона Тех`,role:`Frontend-разработчик`,location:`Москва`,description:`Развитие интернет-магазина: каталог, фильтры, карточки, подборщики, мобильная версия.`,highlights:[`UI Kit и новые страницы на React + TypeScript`,`Менторинг коллег, code review, Agile/Scrum`,`Ускорение загрузки и рефакторинг legacy`]},{id:`585-junior`,period:`Ноябрь 2019 — Апрель 2020`,start:{month:10,year:2017},end:{month:3,year:2020},company:`585, Холдинг`,role:`Младший разработчик`,location:`Москва`,description:`Вёрстка по макетам, переход к современному фронтенду. Поддержка и развитие витрины под руководством senior-разработчика. Большой опыт вёрстки и оптимизации скорости загрузки страницы.`,highlights:[`PSD / Zeplin / Figma → HTML, LESS/SCSS, Pug, Webpack`,`Сокращение времени загрузки страницы с ~7 с до ~1.5 с`,`Формы с валидацией`,`Новые UI-блоки и страницы`,`Оптимизация скорости`]}],S=f.div`
    ${({theme:e})=>p`
        width: 100%;
        max-width: 1120px;
        margin-left: auto;
        margin-right: auto;
        padding-left: ${e.space[3]};
        padding-right: ${e.space[3]};

        ${b.greaterThan(`lg`)`
      padding-left: ${e.space[4]};
      padding-right: ${e.space[4]};
    `}
    `}
`,C=f.div`
    ${({theme:e,$direction:t=`row`,$inline:n=!1,$alignItems:r,$justifyContent:i,$gap:a,$flexWrap:o})=>p`
        display: ${n?`inline-flex`:`flex`};
        flex-direction: ${t};
        ${r!=null&&p`
                align-items: ${r};
            `}
        ${i!=null&&p`
                justify-content: ${i};
            `}
    ${a!=null&&p`
                gap: ${typeof a==`number`?e.space[a]:a};
            `}
    ${o!=null&&p`
                flex-wrap: ${o};
            `}
    `}
`,he=f.h1`
    ${({theme:e})=>p`
        font-size: ${e.typography.heroTitle};
        font-weight: 600;
        letter-spacing: -0.03em;
        line-height: 1.05;
        z-index: 1;
        color: ${e.colors.text};
    `}
`,w=f.h2`
    ${({theme:e})=>p`
        font-size: ${e.typography.sectionTitle};
        font-weight: 600;
        letter-spacing: -0.025em;
        line-height: 1.08;
        z-index: 1;
        color: ${e.colors.text};

        ${b.lessThan(`md`)`
      letter-spacing: -0.02em;
    `}
    `}
`,T=f.h3`
    ${({theme:e})=>p`
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: -0.02em;
        line-height: 1.15;
        z-index: 1;
        color: ${e.colors.text};

        ${b.greaterThan(`md`)`
      font-size: 1.3rem;
    `}
    `}
`,E=f.p`
    ${({theme:e})=>p`
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
`,D=f.p`
    ${({theme:e})=>p`
        font-size: ${e.typography.body};
        line-height: 1.55;
        color: ${e.colors.textSecondary};
    `}
`,O=f.div`
    ${({theme:e})=>p`
        display: block;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: ${e.colors.gray600};
        margin-bottom: ${e.space[2]};
    `}
`,k={hidden:{opacity:0,y:28},visible:{opacity:1,y:0,transition:{duration:.55,ease:[.22,1,.36,1]}}},A={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.06}}},j={hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:{duration:.45,ease:[.22,1,.36,1]}}},M={hidden:{opacity:0,scale:.96},visible:{opacity:1,scale:1,transition:{duration:.5,ease:[.22,1,.36,1]}}},N=f(h.section)`
    position: relative;
    width: 100%;
`;function P({children:e,className:t,id:n}){return(0,x.jsx)(N,{id:n,className:t,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-80px`},variants:k,children:e})}var F=f.section`
    ${({theme:e})=>p`
        position: relative;
        padding: ${e.space[6]} 0;
        overflow: hidden;
        border-top: 1px solid ${e.colors.glassBorder};
        background-image: radial-gradient(${e.colors.background} 20%, ${e.colors.gray400});
    `}
`,I=f.ol`
    ${({theme:e})=>p`
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: ${e.space[4]};
        position: relative;

        ${b.greaterThan(`md`)`
            gap: ${e.space[5]};
        `}
    `}
`,L=f(h.li)`
    ${({theme:e})=>p`
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
`,R=f.article`
    ${({theme:e})=>p`
        padding: ${e.space[4]};
        border-radius: ${e.radii.lg};
        background: ${e.colors.background};
        border: 1px solid ${e.colors.glassBorder};
        box-shadow: ${e.shadows.sm};
        padding-left: ${e.space[6]};
        z-index: 0;
    `}
`,ge=f.div`
    ${({theme:e})=>p`
        max-width: 40rem;
        margin: 0 auto ${e.space[5]};
        text-align: center;
    `}
`,_e=f.p`
    ${({theme:e})=>p`
        font-size: 0.875rem;
        font-weight: 600;
        color: ${e.colors.textMuted};
        margin-bottom: ${e.space[2]};
    `}
`,ve=f(D)`
    ${({theme:e})=>p`
        margin-top: 0.25rem;
        color: ${e.colors.text};
    `}
`,ye=f(D)`
    ${({theme:e})=>p`
        margin-top: ${e.space[3]};
    `}
`,be=f.ul`
    ${({theme:e})=>p`
        margin: ${e.space[3]} 0 0;
        padding-left: 1.1rem;
        color: ${e.colors.textSecondary};
        font-size: ${e.typography.body};
        line-height: 1.55;
    `}
`;function z(e,t,n,r){let i=e%10,a=e%100;return i===1&&a!==11?t:i>=2&&i<=4&&(a<10||a>=20)?n:r}function xe(e,t){let n=e.year*12+e.month,r=new Date,i=t??{year:r.getFullYear(),month:r.getMonth()},a=i.year*12+i.month-n;if(a<=0)return`0 месяцев`;let o=Math.floor(a/12),s=a%12,c=o>0?`${o} ${z(o,`год`,`года`,`лет`)}`:``,l=s>0?`${s} ${z(s,`месяц`,`месяца`,`месяцев`)}`:``;return c&&l?`${c} ${l}`:c||l}function Se({item:e}){let t=xe(e.start,e.end);return(0,x.jsxs)(R,{children:[(0,x.jsxs)(_e,{children:[e.period,` ( `,t,` )`]}),(0,x.jsx)(T,{as:`h3`,children:e.company}),(0,x.jsxs)(ve,{as:`p`,children:[e.role,e.location?` · ${e.location}`:``]}),(0,x.jsx)(ye,{as:`p`,children:e.description}),(0,x.jsx)(be,{children:e.highlights.map(e=>(0,x.jsx)(`li`,{children:e},e))})]})}var B={indigo:`#6366f1`,emerald:`#16a34a`,amber:`#b45309`,yellow:`#fad233`,sky:`#0ea5e9`,purple:`#8b5cf6`,blue:`#0071e3`,cyan:`#00b9bf`,violet:`#7c3aed`},V=e=>`https://raw.githubusercontent.com/rmxway/${e}/refs/heads/master`,Ce=e=>`${V(e)}/project.json`;function we(){return(0,x.jsx)(F,{id:`experience`,children:(0,x.jsx)(S,{children:(0,x.jsxs)(P,{children:[(0,x.jsxs)(ge,{children:[(0,x.jsx)(w,{children:(0,x.jsx)(C,{as:`span`,$inline:!0,$alignItems:`center`,$gap:2,children:`Опыт работы`})}),(0,x.jsxs)(E,{children:[`5 лет коммерческой разработки от вёрстки до продуктового `,(0,x.jsx)(`span`,{children:`React и Next.js.`})]})]}),(0,x.jsx)(I,{children:me.map(e=>(0,x.jsx)(L,{variants:k,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-50px`},children:(0,x.jsx)(Se,{item:e})},e.id))})]})})})}var H=p`
    ${({theme:e,$variant:t})=>p`
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

        ${t===`primary`&&p`
                color: #fff;
                background: ${e.colors.accent};

                &:hover {
                    background: ${e.colors.accentHover};
                }

                &:active {
                    transform: scale(0.98);
                }
            `}

        ${t===`secondary`&&p`
                color: ${e.colors.accent};
                background: transparent;
                box-shadow: inset 0 0 0 1px ${e.colors.accent};

                &:hover {
                    background: rgba(0, 113, 227, 0.06);
                }
            `}

    ${t===`ghost`&&p`
                color: ${e.colors.accent};
                background: transparent;

                &:hover {
                    color: ${e.colors.accentHover};
                }
            `}
    `}
`,Te=f.button`
    ${H}
`,Ee=f.a`
    ${H}
`;function U(e){let{children:t,className:n,variant:r=`primary`}=e;if(`href`in e&&e.href){let{href:i,target:a,rel:o}=e;return(0,x.jsx)(Ee,{href:i,target:a,rel:o,className:n,$variant:r,children:t})}let{type:i=`button`,disabled:a,onClick:o,...s}=e;return(0,x.jsx)(Te,{type:i,disabled:a,onClick:o,className:n,$variant:r,...s,children:t})}var W=(0,_.forwardRef)(function({pixels:e=18,style:t,...n},r){let i=e===void 0?t:{width:e,height:e,minWidth:e,minHeight:e,...t};return(0,x.jsx)(g,{ref:r,style:i,...n})});function De(e){let t=e.trim();if(!t.startsWith(`#`))return null;let n=t.slice(1);return n.length===3?`#${n.split(``).map(e=>`${e}${e}`).join(``)}`:n.length===6?t:null}function G(e,t){let n=De(e);return n?`${n}${t}`:e}var Oe=f(h.div)`
    ${({theme:e,$accent:t})=>p`
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(180deg, ${e.colors.backgroundSecondary} 0%, ${e.colors.background} 45%, ${G(t,`22`)} 100%);
    `}
`,ke=f(h.div)`
    ${({$accent:e,$angle:t})=>p`
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(${t}deg, ${G(e,`29`)} 0%, ${G(e,`0d`)} 42%, transparent 72%);
    `}
`,Ae=f(h.div)`
    ${({$accent:e})=>p`
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
`;function je({accent:e=`blue`,angle:t=130}){let n=B[e];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Oe,{$accent:n,initial:{opacity:0},animate:{opacity:1},transition:{duration:.8}}),(0,x.jsx)(ke,{$accent:n,$angle:t,initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.1}}),(0,x.jsx)(Ae,{$accent:n,initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:[.22,1,.36,1]}})]})}var Me=f.a`
    ${({theme:e})=>p`
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
`;function K({href:e=void 0,children:t,target:n,rel:r}){return(0,x.jsx)(Me,{href:e,target:n,rel:r,children:t})}var Ne=f.footer`
    ${({theme:e})=>p`
        position: relative;
        padding: ${e.space[4]} 0 ${e.space[5]};
        background: linear-gradient(180deg, ${e.colors.gray600} 0%, ${e.colors.gray800} 100%);
    `}
`,Pe=f.div`
    ${({theme:e})=>p`
        display: grid;
        gap: ${e.space[5]};
        margin-top: ${e.space[5]};
        @media (min-width: 768px) {
            grid-template-columns: 2fr;
            align-items: start;
        }
    `}
`;f.div`
    ${({theme:e})=>p`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ${E}, ${w} {
            margin: 0;
            color: ${e.colors.gray200};
        }
    `}
`,f(D)`
    ${({theme:e})=>p`
        font-weight: 600;
        color: ${e.colors.gray200};
        margin: 0 0 ${e.space[2]};
    `}
`;var Fe=f.ul`
    ${({theme:e})=>p`
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
`,q=f.li`
    ${({theme:e})=>p`
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
`,J=f.span`
    ${({theme:e})=>p`
        display: flex;
        align-items: center;
        gap: ${e.space[2]};
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: ${e.colors.gray300};
    `}
`,Y=f.span`
    ${({theme:e})=>p`
        font-size: ${e.typography.body};
        font-weight: 500;
        color: ${e.colors.gray100};
        line-height: 1.4;
        word-break: break-word;
    `}
`,X=f.span`
    ${({theme:e})=>p`
        font-size: 0.8125rem;
        color: ${e.colors.gray400};
        line-height: 1.45;
    `}
`;f.div`
    ${({theme:e})=>p`
        color: ${e.colors.textMuted};
        border-radius: ${e.radii.lg};
        border: 1px solid ${e.colors.glassBorder};
        background-color: ${e.colors.gray100};
        padding: ${e.space[4]};
        display: flex;
        align-items: flex-start;
        gap: ${e.space[3]};
    `}
`;var Ie=f.div`
    ${({theme:e})=>p`
        height: 1px;
        background: linear-gradient(90deg, transparent, ${e.colors.gray700}, transparent);
        margin: ${e.space[5]} 0 ${e.space[3]};
    `}
`,Le=f.div`
    ${({theme:e})=>p`
        display: flex;
        flex-wrap: wrap;
        gap: ${e.space[2]};
        align-items: center;
        justify-content: center;

        ${b.greaterThan(`lg`)`
        gap: ${e.space[2]} ${e.space[4]};
            `}
    `}
`,Z=f.span`
    ${({theme:e})=>p`
        display: inline-flex;
        align-items: center;
        gap: ${e.space[2]};
        font-size: 0.9375rem;
        font-weight: 500;
        color: ${e.colors.gray100};
    `}
`;function Re(){return(0,x.jsx)(Ne,{id:`contact`,children:(0,x.jsx)(S,{children:(0,x.jsx)(P,{children:(0,x.jsx)(Pe,{children:(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(Fe,{children:[(0,x.jsx)(q,{children:(0,x.jsxs)(K,{href:`mailto:rmxway@mail.ru`,children:[(0,x.jsx)(J,{children:(0,x.jsx)(W,{icon:d,pixels:22,"aria-hidden":!0})}),(0,x.jsx)(Y,{children:`rmxway@yandex.ru`}),(0,x.jsx)(X,{children:`Основной канал для откликов`})]})}),(0,x.jsx)(q,{children:(0,x.jsxs)(K,{href:`https://t.me/evgenydovgan`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,x.jsx)(J,{children:(0,x.jsx)(W,{icon:le.faTelegramPlane,pixels:22,"aria-hidden":!0})}),(0,x.jsx)(Y,{children:`@evgenydovgan`}),(0,x.jsx)(X,{children:`Быстрые вопросы, на связи`})]})}),(0,x.jsx)(q,{children:(0,x.jsxs)(K,{href:`tel:+79672295802`,children:[(0,x.jsx)(J,{children:(0,x.jsx)(W,{icon:s,pixels:22,"aria-hidden":!0})}),(0,x.jsx)(Y,{children:`+7 (967) 229-58-02`}),(0,x.jsx)(X,{children:`До 22:00 по Москве`})]})}),(0,x.jsx)(q,{children:(0,x.jsxs)(K,{children:[(0,x.jsx)(J,{children:(0,x.jsx)(W,{icon:l,pixels:22,"aria-hidden":!0})}),(0,x.jsx)(Y,{children:`Россия, Москва`})]})})]}),(0,x.jsx)(Ie,{}),(0,x.jsxs)(Le,{children:[(0,x.jsx)(K,{href:`#top`,children:(0,x.jsxs)(Z,{children:[(0,x.jsx)(W,{icon:ne,size:`sm`,"aria-hidden":!0}),`Наверх`]})}),(0,x.jsx)(K,{href:`#projects`,children:(0,x.jsxs)(Z,{children:[(0,x.jsx)(W,{icon:u,size:`sm`,"aria-hidden":!0}),`Проекты`]})}),(0,x.jsx)(K,{href:`#skills`,children:(0,x.jsxs)(Z,{children:[(0,x.jsx)(W,{icon:a,size:`sm`,"aria-hidden":!0}),`Навыки`]})}),(0,x.jsx)(K,{href:`#experience`,children:(0,x.jsxs)(Z,{children:[(0,x.jsx)(W,{icon:c,size:`sm`,"aria-hidden":!0}),`Опыт`]})})]})]})})})})})}var ze=f.header`
    ${({theme:e})=>p`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: ${e.space[6]} ${e.space[3]};

        ${b.greaterThan(`lg`)`
            padding: ${e.space[6]} ${e.space[4]};
            min-height: 100svh;
        `}
    `}
`,Be=f(h.div)`
    ${({theme:e})=>p`
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: ${e.space[6]};
    `}
`,Ve=f.div`
    ${({theme:e})=>p`
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        gap: ${e.space[5]};

        ${b.greaterThan(`lg`)`
            grid-template-columns: minmax(0, 1fr) auto;
            gap: ${e.space[6]};
        `}
    `}
`,He=f.div`
    ${({theme:e})=>p`
        display: flex;
        flex-direction: column;
        gap: ${e.space[3]};
        text-align: center;

        ${b.greaterThan(`lg`)`
            text-align: left;
            align-items: flex-start;
            gap: ${e.space[6]};
        `}
    `}
`,Ue=f(h.div)`
    ${({theme:e})=>p`
        order: -1;
        justify-self: center;
        width: min(52vw, 220px);
        height: min(52vw, 220px);
        border-radius: ${e.radii.full};
        overflow: hidden;
        border: 1px solid ${e.colors.glassBorder};
        box-shadow: ${e.shadows.md};

        ${b.greaterThan(`lg`)`
            order: 0;
            justify-self: end;
            width: min(30vw, 250px);
            height: min(30vw, 250px);
        `}
    `}
`,We=f.img`
    width: 100%;
    height: 100%;
    background-position: center;
    pointer-events: none;
`,Ge=f.div`
    position: relative;
    z-index: 1;
    width: 100%;
`,Ke=f.div`
    ${({theme:e})=>p`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: ${e.space[2]};
        margin-top: ${e.space[2]};

        ${b.greaterThan(`lg`)`
            justify-content: flex-start;
        `}
    `}
`;function qe(){return(0,x.jsxs)(ze,{id:`top`,children:[(0,x.jsx)(je,{accent:`purple`,angle:130}),(0,x.jsx)(Ge,{children:(0,x.jsx)(S,{children:(0,x.jsx)(Be,{variants:A,initial:`hidden`,animate:`visible`,children:(0,x.jsxs)(Ve,{children:[(0,x.jsxs)(He,{children:[(0,x.jsx)(h.div,{variants:j,children:(0,x.jsx)(O,{children:`Frontend-разработчик`})}),(0,x.jsx)(h.div,{variants:j,children:(0,x.jsx)(he,{children:`Довгань Евгений`})}),(0,x.jsxs)(h.div,{variants:j,children:[(0,x.jsx)(E,{children:`Коммерческий опыт 5 лет. Во время перерыва (2023–2026) активно поддерживал навыки через временные проекты и учебу на пет-проектах: React / TypeScript, Next.js, архитектура FSD, тесты (Jest), Storybook, обработка edge-кейсов.`}),(0,x.jsx)(E,{children:`В октябре 2026 закончил курс по Frontend-разработке и Web-дизайну в РЭУ им. Г.В. Плеханова. В результате защитил итоговый проект и получил диплом о профессиональной переподготовке.`}),(0,x.jsx)(E,{children:`Готов к задачам любого уровня: новые проекты, поддержка, доработка, рефакторинг, покрытие тестами. Быстро вникаю в чужой код и соблюдаю code style. Использую AI в разработке как инструмент, а не замену.`})]}),(0,x.jsx)(h.div,{variants:j,children:(0,x.jsxs)(Ke,{children:[(0,x.jsxs)(U,{href:`#projects`,variant:`primary`,children:[(0,x.jsx)(W,{icon:o,pixels:16,"aria-hidden":!0}),`Смотреть проекты`]}),(0,x.jsxs)(U,{href:`#contact`,variant:`secondary`,children:[(0,x.jsx)(W,{icon:re,pixels:16,"aria-hidden":!0}),`Связаться`]})]})})]}),(0,x.jsx)(Ue,{variants:j,children:(0,x.jsx)(We,{src:`./img/resume2.jpg`,alt:`Довгань Евгений`})})]})})})})]})}var Je=f(h.article)`
    ${({theme:e,$reversed:t})=>p`
        position: relative;
        display: grid;
        gap: ${e.space[6]};
        grid-template-columns: 1fr;
        background-color: #fff;
        z-index: 100;
        padding: ${e.space[5]};
        border-radius: ${e.radii.xl};
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);

        ${b.greaterThan(`lg`)`
            grid-template-columns: minmax(0, 1fr) minmax(100px, 300px);
            gap: ${e.space[6]};
            padding: calc(${e.space[6]} * 2);

            ${t&&p`
                    > *:first-child {
                        order: 2;
                    }

                    > *:last-child {
                        order: 1;
                    }
                `}
        `}
    `}
`,Q=f(h.div)`
    ${({theme:e})=>p`
        display: flex;
        flex-direction: column;
        gap: ${e.space[3]};

        ${E} {
            max-width: none;
        }
    `}
`,Ye=f.ul`
    ${({theme:e})=>p`
        display: flex;
        flex-wrap: wrap;
        gap: ${e.space[2]};
        list-style: none;
        margin: 0;
        padding: 0;
    `}
`,Xe=f.li`
    ${({theme:e})=>p`
        padding: ${e.space[1]} ${e.space[3]};
        font-size: 0.8125rem;
        font-weight: 500;
        color: ${e.colors.text};
        border-radius: ${e.radii.full};
        border: 1px solid ${e.colors.gray400};
    `}
`,Ze=f.div`
    ${({theme:e})=>p`
        display: flex;
        flex-wrap: wrap;
        gap: ${e.space[2]};
        margin-top: ${e.space[2]};
    `}
`,Qe=f.span`
    ${({theme:e})=>p`
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: ${e.colors.textMuted};
    `}
`,$e=f(h.a)`
    ${({theme:e,$accent:t})=>p`
        position: relative;
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: ${e.radii.xl};
        overflow: hidden;
        background: ${e.gradients.card};
        box-shadow: ${e.shadows.md};
        border: 1px solid ${e.colors.glassBorder};

        ${b.lessThan(`lg`)`
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
`,et=f.img`
    ${({theme:e})=>p`
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
`;function tt({accent:e=`amber`,demoUrl:t,imageSrc:n,className:r}){let i=B[e];return(0,x.jsx)($e,{href:t??``,target:`_blank`,rel:`noopener noreferrer`,className:r,$accent:i,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-60px`},variants:M,"aria-hidden":!0,children:n?(0,x.jsx)(et,{src:n,alt:``}):null})}var nt=function(e=``){let[t,n]=(0,_.useState)(),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let t=new AbortController;return(async()=>{o(!0);try{if(e==``)return;let r=await fetch(e,{signal:t.signal});if(r.ok){let e=await r.json();if(typeof e==`object`)n(e);else throw Error(`Error: Ошибка в типе данных`)}else throw Error(`Error: Ошибка сервера`)}catch(e){i(e.message)}finally{o(!1)}})(),()=>{t.abort()}},[e]),{data:t,error:r,loading:a}};function rt(e){if(e===`pet`)return`Pet-проект`;if(e===`freelance`)return`Фриланс / продукт`;if(e===`test`)return`Тестовое задание`;if(e===`commercial`)return`Коммерческий проект`}var it=({project:e,headingId:t,reversed:n=!1,updateProject:r})=>{let{data:i,loading:a,error:o}=nt(e.title?``:Ce(e.id));return(0,_.useEffect)(()=>{!e.title&&!a&&i?.title&&r(i)},[a,i,e.title,r]),(0,x.jsxs)(Je,{$reversed:n,variants:A,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-120px`},children:[o&&(0,x.jsx)(`p`,{children:o}),a?(0,x.jsx)(`p`,{children:`Loading...`}):e.title?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(Q,{variants:j,children:[(0,x.jsx)(Qe,{children:rt(e.kind||`commercial`)}),(0,x.jsx)(w,{id:t,children:e.title}),(0,x.jsx)(T,{as:`p`,children:e.subtitle}),(0,x.jsx)(E,{children:e.description}),(0,x.jsx)(`span`,{children:e.info}),(0,x.jsx)(Ye,{children:e.stack?.map(e=>(0,x.jsx)(Xe,{children:e},e))}),(0,x.jsxs)(Ze,{children:[e.demoUrl?(0,x.jsxs)(U,{href:e.demoUrl,target:`_blank`,rel:`noopener noreferrer`,children:[(0,x.jsx)(W,{icon:ee,pixels:18,"aria-hidden":!0}),`Посмотреть`]}):null,e.githubUrl?(0,x.jsxs)(U,{href:e.githubUrl,target:`_blank`,rel:`noopener noreferrer`,variant:`secondary`,children:[(0,x.jsx)(W,{icon:ce.faGithub,pixels:18,"aria-hidden":!0}),`GitHub`]}):null]})]}),(0,x.jsx)(Q,{variants:j,children:(0,x.jsx)(tt,{accent:e.accent,title:e.title,imageSrc:e.previewImage,demoUrl:e.demoUrl})})]}):(0,x.jsx)(`p`,{children:`Данные не найдены`})]},e.title)},at=f.div`
    ${({theme:e})=>p`
        background: ${e.colors.backgroundSecondary};
        border-top: 1px solid ${e.colors.glassBorder};
        border-bottom: 1px solid ${e.colors.glassBorder};
    `}
`,ot=f.div`
    ${({theme:e})=>p`
        padding: ${e.space[6]} 0;
        text-align: center;
        background-color: ${e.colors.background};
    `}
`,st=f.div`
    ${({theme:e,$img:t})=>p`
        position: relative;
        min-height: 100svh;
        display: flex;
        align-items: center;
        padding: ${e.space[6]} 0;
        border-top: 1px solid ${e.colors.glassBorder};
        background: ${e.colors.gray50};
        ${t&&t.length>0&&p`
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

        ${b.lessThan(`lg`)`
            padding: ${e.space[5]} 0;
            min-height: auto;
        `}
    `}
`,ct=[{id:`diving-center`},{id:`green-shop`},{id:`medanketa`,title:`Medanketa`,subtitle:`Медицинские анкеты и аналитика`,description:`Список и прохождение анкет, статистика, шаблоны и справочники. Интеграция API, оптимизация загрузки и рефакторинг.`,stack:[`React`,`TypeScript`,`Vite`,`TanStack Query`,`styled-components`,`ESLint`,`Prettier`],kind:`commercial`,githubUrl:`https://github.com/rmxway/medanketa`,demoUrl:`https://medanketa.com/`,accent:`purple`,previewImage:`./img/medanketa.jpg`},{id:`stories`,title:`Stories`,subtitle:`Виджет историй в духе мессенджеров и соцсетей`,description:`Демо виджета историй в стиле соцсетей: превью с кольцом прогресса, полноэкранный просмотр с автопереключением, навигация по тапам и клавиатуре, двухпальцевый zoom активной истории, режим просмотра зрителей и запоминание просмотренных в localStorage. Настроил ESLint/Prettier, написал README с инструкцией по запуску — код готов к передаче в команду.`,stack:[`Next.js`,`TypeScript`,`styled-components`,`Framer Motion`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/stories`,demoUrl:`https://stories-widget.vercel.app/`,accent:`violet`,previewImage:`./img/stories.jpg`},{id:`simpletrading`,title:`Simple Trading`,subtitle:`USD, EUR, CNY к рублю по данным ЦБ РФ`,description:`Трекер курсов доллара, евро и юаня к рублю: график за три месяца, переключение валюты, живые данные ЦБ. Интерфейс не моргает при смене котировки — старые цифры остаются, пока грузятся новые. Если запрос упал, значения не пропадают, а ошибка всплывает уведомлением. Архитектура FSD для лёгкой поддержки.`,stack:[`Next.js`,`TypeScript`,`TanStack Query`,`styled-components`,`MUI`,`lightweight-charts`,`Framer Motion`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/simpletrading`,demoUrl:`https://simpletrading-page.vercel.app/`,accent:`yellow`,previewImage:`./img/simpletrading.jpg`},{id:`react-notes`,title:`React Notes`,subtitle:`Заметки и задачи на FSD`,description:`CRUD заметок, фильтры, сортировка, оптимистичные обновления React Query, NextAuth и Firestore. FSD-архитектура для масштабирования.`,stack:[`Next.js 14`,`TypeScript`,`FSD`,`styled-components`,`Redux Toolkit`,`TanStack Query`,`NextAuth`,`Vitest`,`Framer Motion`,`ESLint`,`Prettier`],kind:`pet`,githubUrl:`https://github.com/rmxway/react-notes`,demoUrl:`https://react-notes-service.vercel.app`,accent:`indigo`,previewImage:`./img/notes.jpg`},{id:`itguru-test`,title:`Products table`,subtitle:`Тестовое задание от itGuru`,description:`Авторизация DummyJSON, таблица товаров с пагинацией, поиск, сортировка, оптимистичное добавление в кэш React Query. React Hook Form + Yup: валидация форм с обработкой ошибок и состояний загрузки`,info:`login: emilys, password: emilyspass`,stack:[`React 19`,`TypeScript`,`Vite 7`,`TanStack Query`,`axios`,`React Hook Form`,`Yup`],kind:`test`,githubUrl:`https://github.com/rmxway/itguru-test`,demoUrl:`https://rmxway.github.io/itguru-test/`,accent:`sky`,previewImage:`./img/itguru.jpg`},{id:`sokolinayaohota`,title:`Соколиная охота`,subtitle:`Сайт ресторана`,description:`Вариант сайта ресторана на Next.js. Главная страница в виде лендинга, галерея, залы с описанием и бронированием, контакты.`,stack:[`Next.js 16`,`React 19`,`styled-components`,`Framer Motion`,`Storybook`,`Docker`,`Prettier`],kind:`commercial`,githubUrl:`https://github.com/rmxway/sokolinayaohota`,demoUrl:`https://sokolinayaohota.vercel.app/`,accent:`amber`,previewImage:`./img/sokol.jpg`},{id:`askona`,title:`Askona`,subtitle:`Аскона Тех — разработка и поддержка сайта`,description:`Каталог, фильтры, карточка товара, подборщики, UI Kit, менторинг фронтенда, Agile/Scrum и ускорение загрузки страниц.`,stack:[`React`,`TypeScript`,`UI Kit`,`Адаптивная вёрстка`],kind:`commercial`,demoUrl:`https://www.askona.ru/`,accent:`cyan`,previewImage:`./img/askona.jpg`},{id:`zoloto585`,title:`Золото 585`,subtitle:`Холдинг 585 — ювелирный ритейл`,description:`От вёрстки до React: формы с валидацией, каталоги, карточки товаров, рефакторинг и оптимизация скорости загрузки.`,stack:[`React`,`Webpack`,`SCSS`,`Формы и валидация`],kind:`commercial`,demoUrl:`https://zoloto585.ru/`,accent:`yellow`,previewImage:`./img/gold.jpg`}];function lt(){let[e,t]=(0,_.useState)(ct),n=e=>{e&&t(t=>t.map(t=>{let n=`${V(e.id)}/public/${e.previewImage}`||``,r={...e,previewImage:n};return t.id===e.id?r:t}))};return(0,x.jsxs)(at,{id:`projects`,children:[(0,x.jsx)(ot,{children:(0,x.jsx)(S,{children:(0,x.jsxs)(P,{id:`projects-intro`,children:[(0,x.jsx)(w,{children:(0,x.jsxs)(C,{as:`span`,$inline:!0,$alignItems:`center`,$gap:2,children:[(0,x.jsx)(W,{icon:te,pixels:18,"aria-hidden":!0}),`Проекты`]})}),(0,x.jsxs)(E,{children:[`От свежих pet-проектов и продуктовой разработки до крупного `,(0,x.jsx)(`span`,{children:`e-commerce`}),`.`]})]})})}),e.map(e=>(0,x.jsx)(st,{"aria-labelledby":`project-${e.id}-title`,$img:e.previewImage,children:(0,x.jsx)(S,{children:(0,x.jsx)(it,{headingId:`project-${e.id}-title`,project:e,updateProject:n})})},e.id))]})}var ut=[{id:`core`,title:`Основной стек`,items:[`React`,`Next.js`,`TypeScript / JS`,`HTML5`,`CSS3`]},{id:`state`,title:`Состояние и данные`,items:[`Redux Toolkit`,`TanStack Query`,`MobX`,`GraphQL`,`REST API`]},{id:`style`,title:`Стили и UI`,items:[`Figma`,`Адаптивная вёрстка`,`Styled-components`,`SCSS / LESS`,`CSS Modules`,`Tailwind`,`Bootstrap`,`MUI`]},{id:`quality`,title:`Качество и инструменты`,items:[`Git`,`Vite / Webpack`,`ESLint`,`Prettier`,`Storybook`,`Jest`,`React Testing Library`,`Docker`,`CI/CD`]},{id:`process`,title:`Процессы`,items:[`Jira`,`Agile/Scrum`,`Code Review`,`Postman`,`AI-ассистенты`]}],dt=f.span`
    ${({theme:e})=>p`
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
`,ft=f.div`
    ${({theme:e})=>p`
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
`,$=f.div`
    ${({theme:e})=>p`
        display: flex;
        flex-wrap: wrap;
        gap: ${e.space[2]};
        z-index: 1;
    `}
`;function pt({label:e}){return(0,x.jsx)(dt,{children:e})}function mt({category:e}){return(0,x.jsxs)(ft,{children:[(0,x.jsx)(T,{as:`h2`,children:e.title}),(0,x.jsx)($,{children:e.items.map(e=>(0,x.jsx)(pt,{label:e},e))})]})}var ht=f.section`
    ${({theme:e})=>p`
        position: relative;
        padding: ${e.space[6]} 0;
        background: ${e.colors.background};
    `}
`,gt=f.div`
    ${({theme:e})=>p`
        display: grid;
        gap: ${e.space[4]};

        ${b.greaterThan(`md`)`
      grid-template-columns: repeat(2, minmax(0, 1fr));
    `}

        ${b.greaterThan(`lg`)`
      grid-template-columns: repeat(3, minmax(0, 1fr));
    `}
    `}
`,_t=f.div`
    ${({theme:e})=>p`
        max-width: 40rem;
        margin: 0 auto ${e.space[5]};
        text-align: center;
    `}
`;function vt(){return(0,x.jsx)(ht,{id:`skills`,children:(0,x.jsx)(S,{children:(0,x.jsxs)(P,{children:[(0,x.jsx)(_t,{children:(0,x.jsx)(w,{children:(0,x.jsx)(C,{as:`span`,$inline:!0,$alignItems:`center`,$gap:2,children:`Навыки`})})}),(0,x.jsx)(gt,{children:ut.map((e,t)=>(0,x.jsx)(mt,{category:e,num:t},e.id))})]})})})}var yt=f.main`
    ${({theme:e})=>p`
        min-height: 100vh;
        min-height: 100svh;
        background: ${e.colors.background};
    `}
`;function bt(){return(0,x.jsxs)(yt,{children:[(0,x.jsx)(qe,{}),(0,x.jsx)(lt,{}),(0,x.jsx)(vt,{}),(0,x.jsx)(we,{}),(0,x.jsx)(Re,{})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,x.jsx)(_.StrictMode,{children:(0,x.jsx)(()=>(0,x.jsx)(pe,{children:(0,x.jsx)(bt,{})}),{})}));