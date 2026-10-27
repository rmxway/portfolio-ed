import { projects } from '@/entities/project';
import { ProjectCard, ProjectPreview } from '@/features/project-showcase';
import { Container } from '@/shared/ui/container';
import { Flex } from '@/shared/ui/flex';
import { Heading2, Lead } from '@/shared/ui/text';
import { Section } from '@/shared/ui/section';
import { ProjectSlide, ProjectsIntro, ProjectsRoot } from './styled';
import { FaIcon } from '@/shared/ui';
import { faDiagramProject } from '@/shared/lib/fontawesome-icons';

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
                        <Lead>От свежих pet-проектов и продуктовой разработки до крупного <span>e-commerce</span>.</Lead>
                    </Section>
                </Container>
            </ProjectsIntro>
            {projects.map((project) => (
                <ProjectSlide key={project.id} aria-labelledby={`project-${project.id}-title`} $img={project.previewImage}>
                    <Container>
                        <ProjectCard
                            project={project}
                            headingId={`project-${project.id}-title`}
                            preview={<ProjectPreview accent={project.accent} title={project.title} imageSrc={project.previewImage} demoUrl={project.demoUrl} />}
                        />
                    </Container>
                </ProjectSlide>
            ))}
        </ProjectsRoot>
    );
}
