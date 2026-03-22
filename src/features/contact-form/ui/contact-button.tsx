import styled, { css } from "styled-components";
import Link from "next/link";

const LinkStyled = styled(Link)`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0 ${theme.space[3]};
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

type ContactButtonProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

export function ContactLink({
  href,
  children,
  target,
  rel,
}: ContactButtonProps) {
  return (
    <LinkStyled href={href} target={target} rel={rel}>
      {children}
    </LinkStyled>
  );
}
