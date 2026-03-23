import styled, { css } from "styled-components";
import { Body } from "@/shared/ui/text";

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
