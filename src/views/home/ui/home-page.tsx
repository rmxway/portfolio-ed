"use client";

import styled, { css } from "styled-components";
import { ExperienceTimeline } from "@/widgets/experience-timeline";
import { FooterSection } from "@/widgets/footer";
import { HeroSection } from "@/widgets/hero";
import { ProjectsSection } from "@/widgets/projects-showcase";
import { SkillsSection } from "@/widgets/skills-section";

const Page = styled.main`
  ${({ theme }) => css`
    min-height: 100vh;
    min-height: 100svh;
    background: ${theme.colors.background};
  `}
`;

export function HomePage() {
  return (
    <Page>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceTimeline />
      <FooterSection />
    </Page>
  );
}
