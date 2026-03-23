"use client";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import type { Project } from "@/types/entities";
import { Button } from "@/shared/ui/button";
import { FaIcon } from "@/shared/ui/fa-icon";
import { Heading2, Heading3, Lead } from "@/shared/ui/text";
import { staggerContainer, staggerItem } from "@/shared/lib/animations";
import {
  Chip,
  KindLabel,
  ProjectActions,
  ProjectCardRoot,
  ProjectColumn,
  StackRow,
} from "../styled";

function kindRu(kind: Project["kind"]) {
  if (kind === "pet") return "Pet-проект";
  if (kind === "freelance") return "Фриланс / продукт";
  return "Коммерческий опыт";
}

type ProjectCardProps = {
  project: Project;
  preview: React.ReactNode;
  headingId?: string;
  reversed?: boolean;
};

export function ProjectCard({
  project,
  preview,
  headingId,
  reversed = false,
}: ProjectCardProps) {
  return (
    <ProjectCardRoot
      $reversed={reversed}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <ProjectColumn variants={staggerItem}>
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
        <ProjectActions>
          {project.demoUrl ? (
            <Button
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcon icon={faArrowUpRightFromSquare} pixels={18} aria-hidden />
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
              <FaIcon icon={faGithub} pixels={18} aria-hidden />
              GitHub
            </Button>
          ) : null}
        </ProjectActions>
      </ProjectColumn>
      <ProjectColumn variants={staggerItem}>{preview}</ProjectColumn>
    </ProjectCardRoot>
  );
}
