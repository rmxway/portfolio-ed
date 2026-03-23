import styled, { css } from "styled-components";
import { media } from "@/theme/media";
import { motion } from "framer-motion";

export const HeroRoot = styled.header`
  ${({ theme }) => css`
    position: relative;
    min-height: 100vh;
    min-height: 100dvh;
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

export const HeroSurface = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const HeroActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.space[2]};
    margin-top: ${theme.space[2]};
  `}
`;
