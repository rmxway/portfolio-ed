import styled, { css } from "styled-components";
import { media } from "@/theme/media";

/** Главный заголовок страницы (hero); размер из `theme.typography.heroTitle`. */
export const Heading1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.typography.heroTitle};
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1.05;
    color: ${theme.colors.text};
  `}
`;

/** Заголовок секции; размер из `theme.typography.sectionTitle`. */
export const Heading2 = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.typography.sectionTitle};
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.08;
    color: ${theme.colors.text};

    ${media.lessThan("md")`
      letter-spacing: -0.02em;
    `}
  `}
`;

/** Подзаголовок карточки или вложенного блока. */
export const Heading3 = styled.h3`
  ${({ theme }) => css`
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.15;
    color: ${theme.colors.text};

    ${media.greaterThan("md")`
      font-size: 1.5rem;
    `}
  `}
`;

/** Вводный абзац под заголовком секции; приглушённый цвет, ограниченная ширина. */
export const Lead = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.lead};
    line-height: 1.5;
    color: ${theme.colors.textMuted};
    max-width: 40rem;
    margin: 0 auto;
  `}
`;

/** Основной текст параграфа. */
export const Body = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.body};
    line-height: 1.55;
    color: ${theme.colors.textSecondary};
  `}
`;

/** Мелкая надпись над заголовком (категория, метка). */
export const Eyebrow = styled.div`
  ${({ theme }) => css`
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${theme.colors.gray600};
    margin-bottom: ${theme.space[2]};
  `}
`;
