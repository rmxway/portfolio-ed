"use client";

import { projects } from "@/entities/project";
import { ProjectCard, ProjectPreview } from "@/features/project-showcase";
import { Container } from "@/shared/ui/container";
import { Heading2, Lead } from "@/shared/ui/text";
import { Section } from "@/shared/ui/section";
import { ProjectSlide, ProjectsIntro, ProjectsRoot } from "./styles";

export function ProjectsSection() {
  return (
    <ProjectsRoot id="projects">
      <ProjectsIntro>
        <Container>
          <Section id="projects-intro">
            <Heading2>Проекты</Heading2>
            <Lead>
              От свежих pet-проектов и продуктовой разработки до крупного
              e-commerce — сверху новее, ниже раньше по времени.
            </Lead>
          </Section>
        </Container>
      </ProjectsIntro>
      {projects.map((project, index) => (
        <ProjectSlide
          key={project.id}
          aria-labelledby={`project-${project.id}-title`}
        >
          <Container>
            <ProjectCard
              project={project}
              headingId={`project-${project.id}-title`}
              reversed={index % 2 === 1}
              preview={
                <ProjectPreview
                  accent={project.accent}
                  title={project.title}
                  imageSrc={project.previewImage}
                  demoUrl={project.demoUrl}
                />
              }
            />
          </Container>
        </ProjectSlide>
      ))}
    </ProjectsRoot>
  );
}
