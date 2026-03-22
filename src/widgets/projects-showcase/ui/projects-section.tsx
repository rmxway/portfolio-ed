"use client";

import { projects } from "@/entities/project";
import { ProjectCard, ProjectPreview } from "@/features/project-showcase";
import { Container } from "@/shared/ui/container";
import { Heading2, Lead } from "@/shared/ui/text";
import { Section } from "@/shared/ui/section";
import { ProjectSlide, ProjectsIntro, ProjectsRoot } from "../styles";

export function ProjectsSection() {
  return (
    <ProjectsRoot id="projects">
      <Container>
        <Section id="projects-intro">
          <ProjectsIntro>
            <Heading2>Проекты</Heading2>
            <Lead>
              От свежих pet-проектов и продуктовой разработки до крупного
              e-commerce — сверху новее, ниже раньше по времени.
            </Lead>
          </ProjectsIntro>
        </Section>
      </Container>
      {projects.map((project) => (
        <ProjectSlide
          key={project.id}
          aria-labelledby={`project-${project.id}-title`}
        >
          <Container>
            <ProjectCard
              project={project}
              headingId={`project-${project.id}-title`}
              preview={
                <ProjectPreview accent={project.accent} title={project.title} />
              }
            />
          </Container>
        </ProjectSlide>
      ))}
    </ProjectsRoot>
  );
}
