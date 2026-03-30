import styled, { css } from "styled-components";
import { media } from "@/theme/media";
import { motion } from "framer-motion";

export const HeroRoot = styled.header`
  ${({ theme }) => css`
    position: relative;
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: ${theme.space[6]} ${theme.space[3]} ${theme.space[5]};

    ${media.greaterThan("md")`
      padding: ${theme.space[6]} ${theme.space[4]};
    `}
  `}
`;

export const HeroInner = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.space[6]};
  `}
`;

export const HeroGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: ${theme.space[5]};

    ${media.greaterThan("md")`
      grid-template-columns: minmax(0, 1fr) auto;
      gap: ${theme.space[6]};
    `}
  `}
`;

export const HeroCopy = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[3]};
    text-align: center;

    ${media.greaterThan("md")`
      text-align: left;
      align-items: flex-start;
      gap: ${theme.space[6]};
    `}
  `}
`;

export const HeroPhotoWrap = styled(motion.div)`
  ${({ theme }) => css`
    order: -1;
    justify-self: center;
    width: min(52vw, 280px);
    height: min(52vw, 280px);
    border-radius: ${theme.radii.full};
    overflow: hidden;
    border: 1px solid ${theme.colors.glassBorder};
    box-shadow: ${theme.shadows.md};
    background: ${theme.colors.gray100};

    ${media.greaterThan("md")`
      order: 0;
      justify-self: end;
      width: min(30vw, 320px);
      height: min(30vw, 320px);
    `}
  `}
`;

export const HeroPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const HeroSurface = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const HeroActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.space[2]};
    margin-top: ${theme.space[2]};

    ${media.greaterThan("md")`
      justify-content: flex-start;
    `}
  `}
`;
