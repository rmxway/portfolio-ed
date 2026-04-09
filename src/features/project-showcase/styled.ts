"use client";

import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { media } from "@/theme/media";

export const ProjectCardRoot = styled(motion.article)<{ $reversed?: boolean }>`
  ${({ theme, $reversed }) => css`
    display: grid;
    gap: ${theme.space[6]};
    align-items: center;
    grid-template-columns: 1fr;

    ${media.greaterThan("md")`
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: ${theme.space[6]};

      ${
        $reversed &&
        css`
          > *:first-child {
            order: 2;
          }

          > *:last-child {
            order: 1;
          }
        `
      }
    `}
  `}
`;

export const ProjectColumn = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[3]};
  `}
`;

export const StackRow = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.space[2]};
    list-style: none;
    margin: 0;
    padding: 0;
  `}
`;

export const Chip = styled.li`
  ${({ theme }) => css`
    padding: ${theme.space[1]} ${theme.space[3]};
    font-size: 0.8125rem;
    font-weight: 500;
    color: ${theme.colors.text};
    border-radius: ${theme.radii.full};
    border: 1px solid ${theme.colors.gray400};
  `}
`;

export const ProjectActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.space[2]};
    margin-top: ${theme.space[2]};
  `}
`;

export const KindLabel = styled.span`
  ${({ theme }) => css`
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${theme.colors.textMuted};
  `}
`;

export const PreviewFrame = styled(motion.a)<{ $accent: string }>`
  ${({ theme, $accent }) => css`
    position: relative;
    width: 100%;
    min-width: 300px;
    aspect-ratio: 1;
    height: 100%;
    border-radius: ${theme.radii.xl};
    overflow: hidden;
    background: ${theme.gradients.card};
    box-shadow: ${theme.shadows.md};
    border: 1px solid ${theme.colors.glassBorder};

    ${media.lessThan("md")`
      margin-inline: auto;
      aspect-ratio: 5 / 4;
    `}

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at 50% 30%,
        ${$accent},
        transparent 95%
      );
      pointer-events: none;
    }
  `}
`;

export const PreviewImage = styled.img`
  ${({ theme }) => css`
    position: absolute;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    border-radius: ${theme.radii.lg};
    border: 1px solid ${theme.colors.glassBorder};
    background: ${theme.colors.glassBackground};
    margin: 20px;
    object-fit: cover;
    object-position: top center;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  `}
`;
