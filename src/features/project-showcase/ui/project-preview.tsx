"use client";

import { scaleIn } from "@/shared/lib/animations";
import { PreviewFrame, PreviewGlow } from "../styled";

type ProjectPreviewProps = {
  accent: string;
  title: string;
  className?: string;
};

export function ProjectPreview({
  accent,
  title,
  className,
}: ProjectPreviewProps) {
  return (
    <PreviewFrame
      className={className}
      $accent={accent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={scaleIn}
      aria-hidden
    >
      <PreviewGlow $accent={accent} />
      <span className="visually-hidden">{title}</span>
    </PreviewFrame>
  );
}
