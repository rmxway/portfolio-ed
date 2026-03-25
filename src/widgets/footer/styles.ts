import styled, { css } from "styled-components";
import { Body, Lead } from "@/shared/ui/text";

export const FooterRoot = styled.footer`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.space[6]} 0 ${theme.space[5]};
    background: linear-gradient(
      180deg,
      ${theme.colors.gray50} 0%,
      ${theme.colors.background} 100%
    );
    border-top: 1px solid ${theme.colors.glassBorder};
  `}
`;

export const FooterGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.space[5]};

    @media (min-width: 768px) {
      grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
      align-items: start;
    }
  `}
`;

export const IntroBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[3]};
    max-width: 28rem;

    ${Lead} {
      margin: 0;
    }
  `}
`;

export const ContactLabel = styled(Body)`
  ${({ theme }) => css`
    font-weight: 600;
    color: ${theme.colors.text};
    margin: 0 0 ${theme.space[2]};
  `}
`;

export const ContactCardsGrid = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: ${theme.space[3]};

    @media (min-width: 480px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `}
`;

export const ContactCard = styled.li`
  ${({ theme }) => css`
    border-radius: ${theme.radii.lg};
    border: 1px solid ${theme.colors.glassBorder};
    background: ${theme.colors.background};
    box-shadow: ${theme.shadows.sm};
    transition:
      box-shadow 0.25s ease,
      transform 0.25s ease,
      border-color 0.25s ease;

    &:hover {
      box-shadow: ${theme.shadows.md};
      transform: translateY(-2px);
      border-color: ${theme.colors.gray300};
    }

    a {
      display: flex;
      flex-direction: column;
      gap: ${theme.space[2]};
      padding: ${theme.space[4]};
      min-height: 100%;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
    }
  `}
`;

export const ContactCardHeader = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space[2]};
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${theme.colors.textMuted};
  `}
`;

export const ContactCardValue = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.typography.body};
    font-weight: 500;
    color: ${theme.colors.text};
    line-height: 1.4;
    word-break: break-word;
  `}
`;

export const ContactCardHint = styled.span`
  ${({ theme }) => css`
    font-size: 0.8125rem;
    color: ${theme.colors.textSecondary};
    line-height: 1.45;
  `}
`;

export const LocationCard = styled.div`
  ${({ theme }) => css`
    // grid-column: 1 / -1;
    color: ${theme.colors.textMuted};
    border-radius: ${theme.radii.lg};
    border: 1px solid ${theme.colors.glassBorder};
    background-color: ${theme.colors.gray100};
    padding: ${theme.space[4]};
    display: flex;
    align-items: flex-start;
    gap: ${theme.space[3]};
  `}
`;

export const NavDivider = styled.div`
  ${({ theme }) => css`
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${theme.colors.gray300},
      transparent
    );
    margin: ${theme.space[5]} 0 ${theme.space[3]};
  `}
`;

export const LinkRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.space[2]} ${theme.space[4]};
    align-items: center;
  `}
`;

export const NavLinkInner = styled.span`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    gap: ${theme.space[2]};
    font-size: 0.9375rem;
    font-weight: 500;
  `}
`;
