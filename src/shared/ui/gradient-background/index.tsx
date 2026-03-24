"use client";

import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { ACCENT_COLORS } from "@/shared/lib";

type GradientBackgroundProps = {
  accent?: keyof typeof ACCENT_COLORS;
  angle?: number;
};

function normalizeHexColor(color: string) {
  const value = color.trim();
  if (!value.startsWith("#")) return null;

  const hex = value.slice(1);
  if (hex.length === 3) {
    return `#${hex
      .split("")
      .map((char) => `${char}${char}`)
      .join("")}`;
  }

  if (hex.length === 6) return value;

  return null;
}

function withHexAlpha(color: string, alphaHex: string) {
  const normalized = normalizeHexColor(color);
  if (!normalized) return color;

  return `${normalized}${alphaHex}`;
}

const Layer = styled(motion.div)<{ $accent: string }>`
  ${({ theme, $accent }) => css`
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      ${theme.colors.backgroundSecondary} 0%,
      ${theme.colors.background} 45%,
      ${withHexAlpha($accent, "22")} 100%
    );
  `}
`;

const Accent = styled(motion.div)<{ $accent: string; $angle: number }>`
  ${({ $accent, $angle }) => css`
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      ${$angle}deg,
      ${withHexAlpha($accent, "29")} 0%,
      ${withHexAlpha($accent, "0d")} 42%,
      transparent 72%
    );
  `}
`;

const Orb = styled(motion.div)<{ $accent: string }>`
  ${({ $accent }) => css`
    position: absolute;
    width: min(60vw, 520px);
    height: min(60vw, 520px);
    top: -18%;
    right: -12%;
    border-radius: 50%;
    filter: blur(80px);
    background: radial-gradient(
      circle,
      ${withHexAlpha($accent, "40")},
      transparent 70%
    );
    pointer-events: none;
  `}
`;

export function GradientBackground({
  accent = "blue",
  angle = 130,
}: GradientBackgroundProps) {
  const accentColor = ACCENT_COLORS[accent];

  return (
    <>
      <Layer
        $accent={accentColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <Accent
        $accent={accentColor}
        $angle={angle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      />
      <Orb
        $accent={accentColor}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
