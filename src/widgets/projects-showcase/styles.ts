import styled, { css } from "styled-components";
import { media } from "@/theme/media";

export const ProjectsRoot = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.backgroundSecondary};
    border-top: 1px solid ${theme.colors.glassBorder};
    border-bottom: 1px solid ${theme.colors.glassBorder};
  `}
`;

export const ProjectsIntro = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space[6]} 0 ${theme.space[4]};
    text-align: center;
    max-width: 40rem;
    margin: 0 auto;
  `}
`;

export const ProjectSlide = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    min-height: 100dvh;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    display: flex;
    align-items: center;
    padding: ${theme.space[6]} 0;
    border-bottom: 1px solid ${theme.colors.glassBorder};
    background: ${theme.colors.gray50};

    &:nth-of-type(even) {
      background: ${theme.colors.gray100};
    }

    &:last-of-type {
      border-bottom: none;
    }

    ${media.lessThan("md")`
      padding: ${theme.space[5]} 0;
    `}
  `}
`;
