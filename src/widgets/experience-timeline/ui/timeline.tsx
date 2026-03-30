"use client";

import { experienceItems } from "@/entities/experience";
import { Container } from "@/shared/ui/container";
import { GradientBackground } from "@/shared/ui/gradient-background";
import { Flex } from "@/shared/ui/flex";
import { Heading2, Lead } from "@/shared/ui/text";
import { Section } from "@/shared/ui/section";
import { ExperienceCard } from "./experience-card";
import {
  ExperienceIntro,
  ExperienceRoot,
  Timeline,
  TimelineItem,
} from "../styled";
import { FaIcon } from "@/shared/ui/fa-icon";
import { faUserTie } from "@/shared/lib/fontawesome-icons";

export function ExperienceTimeline() {
  return (
    <ExperienceRoot id="experience">
      <GradientBackground accent="purple" angle={0} />
      <Container>
        <Section>
          <ExperienceIntro>
            <Heading2>
              <Flex as="span" $inline $alignItems="center" $gap={2}>
                <FaIcon icon={faUserTie} pixels={18} aria-hidden />
                Опыт работы
              </Flex>
            </Heading2>
            <Lead>
              6+ лет в веб-разработке: от вёрстки до продуктового React и
              Next.js.
            </Lead>
          </ExperienceIntro>
          <Timeline>
            {experienceItems.map((item) => (
              <TimelineItem key={item.id}>
                <ExperienceCard item={item} />
              </TimelineItem>
            ))}
          </Timeline>
        </Section>
      </Container>
    </ExperienceRoot>
  );
}
