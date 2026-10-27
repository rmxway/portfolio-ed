import { experienceItems } from '@/entities/experience';
import { Container } from '@/shared/ui/container';
import { Flex } from '@/shared/ui/flex';
import { Heading2, Lead } from '@/shared/ui/text';
import { Section } from '@/shared/ui/section';
import { ExperienceCard } from './experience-card';
import { ExperienceIntro, ExperienceRoot, Timeline, TimelineItem } from '../styled';
import { fadeInUp } from '@/shared/lib';

export function ExperienceTimeline() {
    return (
        <ExperienceRoot id="experience">
            <Container>
                <Section>
                    <ExperienceIntro>
                        <Heading2>
                            <Flex as="span" $inline $alignItems="center" $gap={2}>
                                Опыт работы
                            </Flex>
                        </Heading2>
                        <Lead>
                            5 лет коммерческой разработки от вёрстки до продуктового <span>React и Next.js.</span>
                        </Lead>
                    </ExperienceIntro>
                    <Timeline>
                        {experienceItems.map((item) => (
                            <TimelineItem key={item.id} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
                                <ExperienceCard item={item} />
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Section>
            </Container>
        </ExperienceRoot>
    );
}
