import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { media } from '@/theme/media';
import { Lead } from '@/shared/ui';

export const ProjectCardRoot = styled(motion.article)<{ $reversed?: boolean }>`
    ${({ theme, $reversed }) => css`
        position: relative;
        display: grid;
        gap: ${theme.space[6]};
        grid-template-columns: 1fr;
        background-color: #fff;
        z-index: 100;
        padding: ${theme.space[5]};
        border-radius: ${theme.radii.xl};
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);

        ${media.greaterThan('lg')`
            grid-template-columns: minmax(0, 1fr) minmax(100px, 300px);
            gap: ${theme.space[6]};
            padding: calc(${theme.space[6]} * 2);

            ${
                $reversed &&
                css`
                    > *:first-child {
                        order: 2;
                    }

                    > *:last-child {
                        order: 1;
                    }
                `
            }
        `}
    `}
`;

export const ProjectColumn = styled(motion.div)`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: ${theme.space[3]};

        ${Lead} {
            max-width: none;
        }
    `}
`;

export const StackRow = styled.ul`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.space[2]};
        list-style: none;
        margin: 0;
        padding: 0;
    `}
`;

export const Chip = styled.li`
    ${({ theme }) => css`
        padding: ${theme.space[1]} ${theme.space[3]};
        font-size: 0.8125rem;
        font-weight: 500;
        color: ${theme.colors.text};
        border-radius: ${theme.radii.full};
        border: 1px solid ${theme.colors.gray400};
    `}
`;

export const ProjectActions = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.space[2]};
        margin-top: ${theme.space[2]};
    `}
`;

export const KindLabel = styled.span`
    ${({ theme }) => css`
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: ${theme.colors.textMuted};
    `}
`;

export const PreviewFrame = styled(motion.a)<{ $accent: string }>`
    ${({ theme, $accent }) => css`
        position: relative;
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: ${theme.radii.xl};
        overflow: hidden;
        background: ${theme.gradients.card};
        box-shadow: ${theme.shadows.md};
        border: 1px solid ${theme.colors.glassBorder};

        ${media.lessThan('lg')`
            margin-inline: auto;
            aspect-ratio: 6/4;
        `}

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 50% 30%, ${$accent}, transparent 95%);
            pointer-events: none;
        }
    `}
`;

export const PreviewImage = styled.img`
    ${({ theme }) => css`
        position: absolute;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        border-radius: ${theme.radii.lg};
        border: 1px solid ${theme.colors.glassBorder};
        background: ${theme.colors.glassBackground};
        margin: 10px;
        object-fit: cover;
        object-position: top center;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: none;
    `}
`;
