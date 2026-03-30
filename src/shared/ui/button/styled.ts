"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

/** Визуальный стиль кнопки или ссылки-кнопки. */
export type ButtonVariant = "primary" | "secondary" | "ghost";

/** Общие стили для {@link StyledButton} и {@link StyledLink} (размеры, фокус, варианты). */
export const buttonBase = css<{ $variant: ButtonVariant }>`
  ${({ theme, $variant }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.space[2]};
    min-height: 44px;
    padding: 0 ${theme.space[4]};
    font-family: ${theme.fonts.body};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    border-radius: ${theme.radii.full};
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition:
      background 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;

    &:focus-visible {
      outline: 2px solid ${theme.colors.accent};
      outline-offset: 3px;
    }

    ${$variant === "primary" &&
    css`
      color: #fff;
      background: ${theme.colors.accent};

      &:hover {
        background: ${theme.colors.accentHover};
      }

      &:active {
        transform: scale(0.98);
      }
    `}

    ${$variant === "secondary" &&
    css`
      color: ${theme.colors.accent};
      background: transparent;
      box-shadow: inset 0 0 0 1px ${theme.colors.accent};

      &:hover {
        background: rgba(0, 113, 227, 0.06);
      }
    `}

    ${$variant === "ghost" &&
    css`
      color: ${theme.colors.accent};
      background: transparent;

      &:hover {
        color: ${theme.colors.accentHover};
      }
    `}
  `}
`;

/** Нативная кнопка с вариантами из `buttonBase`. Обычно используют обёртку {@link Button}. */
export const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  ${buttonBase}
`;

/** Ссылка Next.js, оформленная как кнопка. Обычно через {@link Button} с `href`. */
export const StyledLink = styled(Link)<{ $variant: ButtonVariant }>`
  ${buttonBase}
`;
