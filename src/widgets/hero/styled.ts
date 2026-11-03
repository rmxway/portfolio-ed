import styled, { css } from 'styled-components';
import { media } from '@/theme/media';
import { motion } from 'framer-motion';

export const HeroRoot = styled.header`
    ${({ theme }) => css`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: ${theme.space[6]} ${theme.space[3]};

        ${media.greaterThan('lg')`
            padding: ${theme.space[6]} ${theme.space[4]};
            min-height: 100svh;
        `}
    `}
`;

export const HeroInner = styled(motion.div)`
    ${({ theme }) => css`
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: ${theme.space[6]};
    `}
`;

export const HeroGrid = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        gap: ${theme.space[5]};

        ${media.greaterThan('lg')`
            grid-template-columns: 1fr 300px ;
            gap: ${theme.space[6]};
        `}
    `}
`;

export const HeroText = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: ${theme.space[3]};
        text-align: center;

        ${media.greaterThan('lg')`
            text-align: left;
            align-items: flex-start;
            gap: ${theme.space[6]};
        `}
    `}
`;

export const List = styled.ul`
    ${({ theme }) => css`
        font-size: 1rem;
        font-weight: 600;
        color: ${theme.colors.gray700};
        margin: 0;
        list-style-type: circle;
        padding: 10px 0;

        li {
            display: inline-block;
            background-color: ${theme.colors.gray700}22;
            border-radius: 10px;
            margin-bottom: 10px;
            padding: 8px 12px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    `}
`;

export const HeroPhotoWrap = styled(motion.div)`
    ${({ theme }) => css`
        order: -1;
        justify-self: center;
        width: min(62vw, 220px);
        height: min(62vw, 220px);
        border-radius: ${theme.radii.full};
        overflow: hidden;
        border: 1px solid ${theme.colors.glassBorder};
        box-shadow: ${theme.shadows.md};

        ${media.greaterThan('lg')`
            order: 0;
            justify-self: end;
            width: min(30vw, 300px);
            height: min(30vw, 300px);
        `}
    `}
`;

export const HeroPhoto = styled.img`
    width: 100%;
    height: 100%;
    background-position: center;
    pointer-events: none;
`;

export const HeroSurface = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
`;

export const HeroActions = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: ${theme.space[2]};
        margin-top: ${theme.space[2]};

        ${media.greaterThan('lg')`
            justify-content: flex-start;
        `}
    `}
`;
