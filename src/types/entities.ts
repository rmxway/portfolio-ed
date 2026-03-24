import type { AccentColorName } from "@/shared/lib/accent-colors";

export type ProjectKind = "pet" | "commercial" | "freelance" | "test";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  info?: string;
  stack: string[];
  kind: ProjectKind;
  githubUrl?: string;
  demoUrl?: string;
  accent: AccentColorName;
  previewImage?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  items: string[];
};

export type ExperienceItem = {
  id: string;
  period: string;
  company: string;
  role: string;
  location?: string;
  description: string;
  highlights: string[];
};
