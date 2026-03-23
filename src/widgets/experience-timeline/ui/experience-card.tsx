"use client";

import { motion } from "framer-motion";
import type { ExperienceItem } from "@/types/entities";
import { Heading3 } from "@/shared/ui/text";
import { fadeInUp } from "@/shared/lib/animations";
import { Card } from "../styles";
import {
  ExperienceDesc,
  ExperienceHighlights,
  ExperienceMeta,
  ExperienceRoleLine,
} from "../styled";

const MotionCard = motion.create(Card);

type ExperienceCardProps = {
  item: ExperienceItem;
};

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <MotionCard
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <ExperienceMeta>{item.period}</ExperienceMeta>
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
