import styled, { css } from "styled-components";
import { media } from "@/theme/media";

/** Центрируемая оболочка контента с max-width и горизонтальными отступами. */
export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.space[3]};
    padding-right: ${theme.space[3]};

    ${media.greaterThan("lg")`
      padding-left: ${theme.space[4]};
      padding-right: ${theme.space[4]};
    `}
  `}
`;
