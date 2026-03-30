"use client";

import { skillCategories } from "@/entities/skill";
import { SkillCategoryBlock } from "@/features/skill-grid";
import { Container } from "@/shared/ui/container";
import { Flex } from "@/shared/ui/flex";
import { Heading2, Lead } from "@/shared/ui/text";
import { Section } from "@/shared/ui/section";
import { SkillsGrid, SkillsIntro, SkillsRoot } from "./styled";
import { FaIcon } from "@/shared/ui/fa-icon";
import { faGears } from "@/shared/lib/fontawesome-icons";

export function SkillsSection() {
  return (
    <SkillsRoot id="skills">
      <Container>
        <Section>
          <SkillsIntro>
            <Heading2>
              <Flex as="span" $inline $alignItems="center" $gap={2}>
                <FaIcon icon={faGears} pixels={18} aria-hidden />
                Навыки
              </Flex>
            </Heading2>
            <Lead>
              Стек технологий: от React и TypeScript до тестов, Storybook и
              CI/CD.
            </Lead>
          </SkillsIntro>
          <SkillsGrid>
            {skillCategories.map((category) => (
              <SkillCategoryBlock key={category.id} category={category} />
            ))}
          </SkillsGrid>
        </Section>
      </Container>
    </SkillsRoot>
  );
}
