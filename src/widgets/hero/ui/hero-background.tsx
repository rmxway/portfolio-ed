"use client";

import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Layer = styled(motion.div)`
  ${({ theme }) => css`
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: ${theme.gradients.hero};
  `}
`;

const Accent = styled(motion.div)`
  ${({ theme }) => css`
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: ${theme.gradients.heroAccent};
  `}
`;

const Orb = styled(motion.div)`
  ${({ theme }) => css`
    position: absolute;
    width: min(60vw, 520px);
    height: min(60vw, 520px);
    top: -18%;
    right: -12%;
    border-radius: 50%;
    filter: blur(80px);
    background: radial-gradient(
      circle,
      ${theme.colors.accent}40,
      transparent 70%
    );
    pointer-events: none;
  `}
`;

export function HeroBackground() {
  return (
    <>
      <Layer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <Accent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      />
      <Orb
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
