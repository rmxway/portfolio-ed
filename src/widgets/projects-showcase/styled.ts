import styled, { css } from 'styled-components';
import { media } from '@/theme/media';

export const ProjectsRoot = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.backgroundSecondary};
        border-top: 1px solid ${theme.colors.glassBorder};
        border-bottom: 1px solid ${theme.colors.glassBorder};
    `}
`;

export const ProjectsIntro = styled.div`
    ${({ theme }) => css`
        padding: 6rem 0;
        text-align: center;
        background-color: ${theme.colors.background};
    `}
`;

export const ProjectSlide = styled.div<{ $img?: string }>`
    ${({ theme, $img }) => css`
        position: relative;
        min-height: 100svh;
        display: flex;
        align-items: center;
        padding: ${theme.space[6]} 0;
        border-top: 1px solid ${theme.colors.glassBorder};
        background: ${theme.colors.gray50};
        ${
            $img &&
            $img.length > 0 &&
            css`
                background-image: url(${$img});
                background-size: cover;
                background-position: top center;
            `
        }

        &:before {
            content: '';
            background-image: linear-gradient(180deg, #0004, #fff);
            position: absolute;
            inset: -1px;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            z-index: 0;
        }

        ${media.lessThan('lg')`
            padding: ${theme.space[5]} 0;
            min-height: auto;
        `}
    `}
`;
