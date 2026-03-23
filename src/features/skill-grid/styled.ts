import styled, { css } from "styled-components";

export const SkillBadgeRoot = styled.span`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    padding: ${theme.space[2]} ${theme.space[3]};
    font-size: 0.875rem;
    font-weight: 500;
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.glassBorder};
    border-radius: ${theme.radii.full};
    box-shadow: ${theme.shadows.sm};
  `}
`;

export const SkillCategoryPanel = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[3]};
    padding: ${theme.space[4]};
    border-radius: ${theme.radii.lg};
    background-color: ${theme.colors.gray100};
    border: 1px solid ${theme.colors.glassBorder};
    box-shadow: ${theme.shadows.sm};
  `}
`;

export const SkillBadgeList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.space[2]};
  `}
`;
