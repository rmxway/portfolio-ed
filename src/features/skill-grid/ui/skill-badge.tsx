import styled, { css } from "styled-components";

const Root = styled.span`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    padding: ${theme.space[2]} ${theme.space[3]};
    font-size: 0.875rem;
    font-weight: 500;
    color: ${theme.colors.text};
    background: ${theme.colors.background};
    border: 1px solid ${theme.colors.glassBorder};
    border-radius: ${theme.radii.full};
    box-shadow: ${theme.shadows.sm};
  `}
`;

type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return <Root>{label}</Root>;
}
