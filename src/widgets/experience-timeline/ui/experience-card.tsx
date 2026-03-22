"use client";

import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import type { ExperienceItem } from "@/entities/experience";
import { Body, Heading3 } from "@/shared/ui/text";
import { fadeInUp } from "@/shared/lib/animations";
import { Card } from "../styles";

const MotionCard = motion(Card);

const Meta = styled.p`
  ${({ theme }) => css`
    font-size: 0.875rem;
    font-weight: 600;
    color: ${theme.colors.textMuted};
    margin-bottom: ${theme.space[2]};
  `}
`;

const RoleLine = styled(Body)`
  ${({ theme }) => css`
    margin-top: 0.25rem;
    color: ${theme.colors.text};
  `}
`;

const Desc = styled(Body)`
  ${({ theme }) => css`
    margin-top: ${theme.space[3]};
  `}
`;

const List = styled.ul`
  ${({ theme }) => css`
    margin: ${theme.space[3]} 0 0;
    padding-left: 1.1rem;
    color: ${theme.colors.textSecondary};
    font-size: ${theme.typography.body};
    line-height: 1.55;
  `}
`;

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
      <Meta>{item.period}</Meta>
      <Heading3 as="h3">{item.company}</Heading3>
      <RoleLine as="p">
        {item.role}
        {item.location ? ` · ${item.location}` : ""}
      </RoleLine>
      <Desc as="p">{item.description}</Desc>
      <List>
        {item.highlights.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </List>
    </MotionCard>
  );
}
