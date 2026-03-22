"use client";

import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { scaleIn } from "@/shared/lib/animations";

const Frame = styled(motion.div)<{ $accent: string }>`
  ${({ theme, $accent }) => css`
    position: relative;
    width: min(100%, 420px);
    aspect-ratio: 4 / 5;
    border-radius: ${theme.radii.xl};
    overflow: hidden;
    background: ${theme.gradients.card};
    box-shadow: ${theme.shadows.md};
    border: 1px solid ${theme.colors.glassBorder};

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at 30% 20%,
        ${$accent}33,
        transparent 55%
      );
      pointer-events: none;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 12%;
      border-radius: ${theme.radii.lg};
      border: 1px solid ${theme.colors.glassBorder};
      background: ${theme.colors.glassBackground};
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
  `}
`;

const Glow = styled.div<{ $accent: string }>`
  ${({ $accent }) => css`
    position: absolute;
    inset: auto 10% 14%;
    height: 38%;
    border-radius: 50%;
    filter: blur(48px);
    background: ${$accent};
    opacity: 0.35;
    pointer-events: none;
  `}
`;

type ProjectPreviewProps = {
  accent: string;
  title: string;
  className?: string;
};

export function ProjectPreview({
  accent,
  title,
  className,
}: ProjectPreviewProps) {
  return (
    <Frame
      className={className}
      $accent={accent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={scaleIn}
      aria-hidden
    >
      <Glow $accent={accent} />
      <span className="visually-hidden">{title}</span>
    </Frame>
  );
}
