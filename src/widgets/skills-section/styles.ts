import styled, { css } from "styled-components";
import { media } from "@/theme/media";

export const SkillsRoot = styled.section`
  ${({ theme }) => css`
    padding: ${theme.space[6]} 0;
    background: ${theme.colors.background};
  `}
`;

export const SkillsGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.space[4]};

    ${media.greaterThan("md")`
      grid-template-columns: repeat(2, minmax(0, 1fr));
    `}

    ${media.greaterThan("lg")`
      grid-template-columns: repeat(3, minmax(0, 1fr));
    `}
  `}
`;

export const SkillsIntro = styled.div`
  ${({ theme }) => css`
    max-width: 40rem;
    margin: 0 auto ${theme.space[5]};
    text-align: center;
  `}
`;
