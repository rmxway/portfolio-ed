"use client";

import { projects } from "@/entities/project";
import { ProjectCard, ProjectPreview } from "@/features/project-showcase";
import { Container } from "@/shared/ui/container";
import { Flex } from "@/shared/ui/flex";
import { Heading2, Lead } from "@/shared/ui/text";
import { Section } from "@/shared/ui/section";
import { ProjectSlide, ProjectsIntro, ProjectsRoot } from "./styled";
import { FaIcon } from "@/shared/ui/fa-icon";
import { faDiagramProject } from "@/shared/lib/fontawesome-icons";

export function ProjectsSection() {
  return (
    <ProjectsRoot id="projects">
      <ProjectsIntro>
        <Container>
          <Section id="projects-intro">
            <Heading2>
              <Flex as="span" $inline $alignItems="center" $gap={2}>
                <FaIcon icon={faDiagramProject} pixels={18} aria-hidden />
                Проекты
              </Flex>
            </Heading2>
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
