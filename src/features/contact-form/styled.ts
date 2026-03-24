import Link from "next/link";
import styled, { css } from "styled-components";

export const ContactLinkStyled = styled(Link)`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.colors.accent};
    border-radius: ${theme.radii.full};
    transition: color 0.2s ease;

    &:hover {
      color: ${theme.colors.accentHover};
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.accent};
      outline-offset: 3px;
    }
  `}
`;
