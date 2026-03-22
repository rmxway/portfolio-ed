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
