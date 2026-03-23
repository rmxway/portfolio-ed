export type ProjectKind = "pet" | "commercial" | "freelance";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  kind: ProjectKind;
  githubUrl?: string;
  demoUrl?: string;
  accent: string;
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
