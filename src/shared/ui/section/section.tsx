"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { fadeInUp } from "@/shared/lib/animations";

const MotionSection = styled(motion.section)`
  position: relative;
  width: 100%;
`;

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <MotionSection
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
    >
      {children}
    </MotionSection>
  );
}
