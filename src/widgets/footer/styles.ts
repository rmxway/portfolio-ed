import styled, { css } from "styled-components";

export const FooterRoot = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.space[6]} 0 ${theme.space[5]};
    background: ${theme.colors.background};
    border-top: 1px solid ${theme.colors.glassBorder};
  `}
`;

export const FooterGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.space[4]};

    @media (min-width: 768px) {
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
      align-items: start;
    }
  `}
`;

export const ContactList = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    margin: ${theme.space[3]} 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: ${theme.space[2]};
    font-size: ${theme.typography.body};
  `}
`;

export const ContactItem = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.textSecondary};
  `}
`;

export const LinkRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.space[3]};
    margin-top: ${theme.space[3]};
  `}
`;
