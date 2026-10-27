import { ProjectCard } from '@/features/project-showcase';
import { Container } from '@/shared/ui/container';
import { Flex } from '@/shared/ui/flex';
import { Heading2, Lead } from '@/shared/ui/text';
import { Section } from '@/shared/ui/section';
import { ProjectSlide, ProjectsIntro, ProjectsRoot } from './styled';
import { FaIcon } from '@/shared/ui';
import { faDiagramProject } from '@/shared/lib/fontawesome-icons';
import { projects as localProjects } from '@/entities/project';
import { Project } from '@/types/entities';
import { useState } from 'react';
import { repoLink } from '@/shared/lib';

export function ProjectsSection() {
    const [projects, setProjects] = useState(localProjects);

    const updateProject = (data: Project) => {
        if (data) {
            setProjects((prev) =>
                prev.map((item) => {
                    const previewImage = `${repoLink(data.id)}/public/${data.previewImage}` || '';
                    const newData: Project = { ...data, previewImage };
                    return item.id === data.id ? newData : item;
                }),
            );
        }
    };

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
                            От свежих pet-проектов и продуктовой разработки до крупного <span>e-commerce</span>.
                        </Lead>
                    </Section>
                </Container>
            </ProjectsIntro>
            {projects.map((project) => (
                <ProjectSlide key={project.id} aria-labelledby={`project-${project.id}-title`} $img={project.previewImage}>
                    <Container>
                        <ProjectCard headingId={`project-${project.id}-title`} {...{ project, updateProject }} />
                    </Container>
                </ProjectSlide>
            ))}
        </ProjectsRoot>
    );
}
