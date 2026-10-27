import { useEffect } from 'react';
import { faArrowUpRightFromSquare, faGithub } from '@/shared/lib/fontawesome-icons';
import type { Project, ProjectKind } from '@/types/entities';
import { Button } from '@/shared/ui/button';
import { FaIcon } from '@/shared/ui/fa-icon';
import { Heading2, Heading3, Lead } from '@/shared/ui/text';
import { staggerContainer, staggerItem } from '@/shared/lib/animations';
import { Chip, KindLabel, ProjectActions, ProjectCardRoot, ProjectColumn, StackRow } from '../styled';
import { ProjectPreview } from './project-preview';
import { useGetJSON } from '@/shared/lib/hooks';
import { linkToJson } from '@/shared/lib';

function kindRu(kind: ProjectKind) {
    if (kind === 'pet') return 'Pet-проект';
    if (kind === 'freelance') return 'Фриланс / продукт';
    if (kind === 'test') return 'Тестовое задание';
    if (kind === 'commercial') return 'Коммерческий проект';
}

type ProjectCardProps = {
    project: Project;
    headingId?: string;
    reversed?: boolean;
    updateProject: (data: Project) => void;
};

export const ProjectCard = ({ project, headingId, reversed = false, updateProject }: ProjectCardProps) => {
    const { data, loading, error } = useGetJSON(project.title ? '' : linkToJson(project.id));

    useEffect(() => {
        if (!project.title && !loading && data?.title) {
            updateProject(data);
        }
    }, [loading, data, project.title, updateProject]);

    return (
        <ProjectCardRoot $reversed={reversed} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }} key={project.title}>
            {error && <p>{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : project.title ? (
                <>
                    <ProjectColumn variants={staggerItem}>
                        <KindLabel>{kindRu(project.kind || 'commercial')}</KindLabel>
                        <Heading2 id={headingId}>{project.title}</Heading2>
                        <Heading3 as="p">{project.subtitle}</Heading3>
                        <Lead>{project.description}</Lead>
                        <span>{project.info}</span>
                        <StackRow>
                            {project.stack?.map((item) => (
                                <Chip key={item}>{item}</Chip>
                            ))}
                        </StackRow>
                        <ProjectActions>
                            {project.demoUrl ? (
                                <Button href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <FaIcon icon={faArrowUpRightFromSquare} pixels={18} aria-hidden />
                                    Посмотреть
                                </Button>
                            ) : null}
                            {project.githubUrl ? (
                                <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                                    <FaIcon icon={faGithub} pixels={18} aria-hidden />
                                    GitHub
                                </Button>
                            ) : null}
                        </ProjectActions>
                    </ProjectColumn>
                    <ProjectColumn variants={staggerItem}>
                        <ProjectPreview accent={project.accent} title={project.title} imageSrc={project.previewImage} demoUrl={project.demoUrl} />
                    </ProjectColumn>
                </>
            ) : (
                <p>Данные не найдены</p>
            )}
        </ProjectCardRoot>
    );
};
