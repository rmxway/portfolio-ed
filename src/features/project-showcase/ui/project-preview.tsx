"use client";

import { scaleIn } from "@/shared/lib/animations";
import { ACCENT_COLORS, type AccentColorName } from "@/shared/lib";
import { PreviewFrame, PreviewImage } from "../styled";

type ProjectPreviewProps = {
  accent: AccentColorName;
  title: string;
  imageSrc?: string;
  demoUrl?: string;
  className?: string;
};

export function ProjectPreview({
  accent,
  demoUrl,
  imageSrc,
  className,
}: ProjectPreviewProps) {
  const accentColor = ACCENT_COLORS[accent];

  return (
    <PreviewFrame
      href={demoUrl ?? ""}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      $accent={accentColor}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={scaleIn}
      aria-hidden
    >
      {imageSrc ? <PreviewImage src={imageSrc} alt="" /> : null}
    </PreviewFrame>
  );
}
