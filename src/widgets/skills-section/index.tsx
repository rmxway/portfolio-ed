"use client";

import { skillCategories } from "@/entities/skill";
import { SkillCategoryBlock } from "@/features/skill-grid";
import { Container } from "@/shared/ui/container";
import { Heading2, Lead } from "@/shared/ui/text";
import { Section } from "@/shared/ui/section";
import { SkillsGrid, SkillsIntro, SkillsRoot } from "./styles";

export function SkillsSection() {
  return (
    <SkillsRoot id="skills">
      <Container>
        <Section>
          <SkillsIntro>
            <Heading2>Навыки</Heading2>
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
