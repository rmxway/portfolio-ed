"use client";

import { motion } from "framer-motion";
import type { ExperienceItem } from "@/types/entities";
import { Heading3 } from "@/shared/ui/text";
import { fadeInUp } from "@/shared/lib/animations";
import {
  Card,
  ExperienceDesc,
  ExperienceHighlights,
  ExperienceMeta,
  ExperienceRoleLine,
} from "../styled";
import { formatExperienceDurationText } from "../lib/experience-duration";

const MotionCard = motion.create(Card);

type ExperienceCardProps = {
  item: ExperienceItem;
};

export function ExperienceCard({ item }: ExperienceCardProps) {
  const durationText = formatExperienceDurationText(item.start, item.end);

  return (
    <MotionCard
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <ExperienceMeta>
        {item.period} ( {durationText} )
      </ExperienceMeta>
      <Heading3 as="h3">{item.company}</Heading3>
      <ExperienceRoleLine as="p">
        {item.role}
        {item.location ? ` · ${item.location}` : ""}
      </ExperienceRoleLine>
      <ExperienceDesc as="p">{item.description}</ExperienceDesc>
      <ExperienceHighlights>
        {item.highlights.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ExperienceHighlights>
    </MotionCard>
  );
}
