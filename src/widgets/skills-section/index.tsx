import { skillCategories } from '@/entities/skill';
import { SkillCategoryBlock } from '@/features/skill-grid';
import { Container } from '@/shared/ui/container';
import { Flex } from '@/shared/ui/flex';
import { Heading2 } from '@/shared/ui/text';
import { Section } from '@/shared/ui/section';
import { SkillsGrid, SkillsIntro, SkillsRoot } from './styled';

export function SkillsSection() {
    return (
        <SkillsRoot id="skills">
            <Container>
                <Section>
                    <SkillsIntro>
                        <Heading2>
                            <Flex as="span" $inline $alignItems="center" $gap={2}>
                                Навыки
                            </Flex>
                        </Heading2>
                    </SkillsIntro>
                    <SkillsGrid>
                        {skillCategories.map((category, i) => (
                            <SkillCategoryBlock key={category.id} category={category} num={i} />
                        ))}
                    </SkillsGrid>
                </Section>
            </Container>
        </SkillsRoot>
    );
}
