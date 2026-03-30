import styled, { css } from "styled-components";
import { media } from "@/theme/media";
import { Body } from "@/shared/ui/text";

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

export const ExperienceMeta = styled.p`
  ${({ theme }) => css`
    font-size: 0.875rem;
    font-weight: 600;
    color: ${theme.colors.textMuted};
    margin-bottom: ${theme.space[2]};
  `}
`;

export const ExperienceRoleLine = styled(Body)`
  ${({ theme }) => css`
    margin-top: 0.25rem;
    color: ${theme.colors.text};
  `}
`;

export const ExperienceDesc = styled(Body)`
  ${({ theme }) => css`
    margin-top: ${theme.space[3]};
  `}
`;

export const ExperienceHighlights = styled.ul`
  ${({ theme }) => css`
    margin: ${theme.space[3]} 0 0;
    padding-left: 1.1rem;
    color: ${theme.colors.textSecondary};
    font-size: ${theme.typography.body};
    line-height: 1.55;
  `}
`;
