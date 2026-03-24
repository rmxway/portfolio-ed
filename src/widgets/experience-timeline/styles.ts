import styled, { css } from "styled-components";
import { media } from "@/theme/media";

export const ExperienceRoot = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.space[6]} 0;
    overflow: hidden;
    border-top: 1px solid ${theme.colors.glassBorder};
  `}
`;

export const Timeline = styled.ol`
  ${({ theme }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: ${theme.space[4]};
    position: relative;

    ${media.greaterThan("md")`
      gap: ${theme.space[5]};
    `}
  `}
`;

export const TimelineItem = styled.li`
  ${({ theme }) => css`
    position: relative;
    padding-left: ${theme.space[4]};

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.35rem;
      width: 10px;
      height: 10px;
      border-radius: ${theme.radii.full};
      background: ${theme.colors.accent};
      box-shadow: 0 0 0 4px ${theme.colors.backgroundSecondary};
    }

    &:not(:last-child)::after {
      content: "";
      position: absolute;
      left: 4px;
      top: 1.25rem;
      bottom: calc(-1 * ${theme.space[4]} - 4px);
      width: 2px;
      background: ${theme.colors.glassBorder};
    }
  `}
`;

export const Card = styled.article`
  ${({ theme }) => css`
    padding: ${theme.space[4]};
    border-radius: ${theme.radii.lg};
    background: ${theme.colors.background};
    border: 1px solid ${theme.colors.glassBorder};
    box-shadow: ${theme.shadows.sm};
  `}
`;

export const ExperienceIntro = styled.div`
  ${({ theme }) => css`
    max-width: 40rem;
    margin: 0 auto ${theme.space[5]};
    text-align: center;
  `}
`;
