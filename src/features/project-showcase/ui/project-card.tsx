"use client";

import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import type { Project } from "@/entities/project";
import { Button } from "@/shared/ui/button";
import { Heading2, Heading3, Lead } from "@/shared/ui/text";
import { staggerContainer, staggerItem } from "@/shared/lib/animations";
import { media } from "@/theme/media";

const Root = styled(motion.article)`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.space[5]};
    align-items: center;

    ${media.greaterThan("md")`
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: ${theme.space[6]};
    `}
  `}
`;

const Column = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[3]};
  `}
`;

const StackRow = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.space[2]};
    list-style: none;
    margin: 0;
    padding: 0;
  `}
`;

const Chip = styled.li`
  ${({ theme }) => css`
    padding: ${theme.space[1]} ${theme.space[3]};
    font-size: 0.8125rem;
    font-weight: 500;
    color: ${theme.colors.text};
    background: ${theme.colors.backgroundSecondary};
    border-radius: ${theme.radii.full};
    border: 1px solid ${theme.colors.glassBorder};
  `}
`;

const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.space[2]};
    margin-top: ${theme.space[2]};
  `}
`;

const KindLabel = styled.span`
  ${({ theme }) => css`
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${theme.colors.textMuted};
  `}
`;

function kindRu(kind: Project["kind"]) {
  if (kind === "pet") return "Pet-проект";
  if (kind === "freelance") return "Фриланс / продукт";
  return "Коммерческий опыт";
}

type ProjectCardProps = {
  project: Project;
  preview: React.ReactNode;
  headingId?: string;
};

export function ProjectCard({ project, preview, headingId }: ProjectCardProps) {
  return (
    <Root
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Column variants={staggerItem}>
        <KindLabel>{kindRu(project.kind)}</KindLabel>
        <Heading2 as="h2" id={headingId}>
          {project.title}
        </Heading2>
        <Heading3 as="p">{project.subtitle}</Heading3>
        <Lead>{project.description}</Lead>
        <StackRow>
          {project.stack.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </StackRow>
        <Actions>
          {project.demoUrl ? (
            <Button
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть демо
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              GitHub
            </Button>
          ) : null}
        </Actions>
      </Column>
      <Column variants={staggerItem}>{preview}</Column>
    </Root>
  );
}
