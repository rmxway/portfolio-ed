"use client";

import { fadeInUp } from "@/shared/lib/animations";
import { MotionSection } from "./styled";

type SectionProps = {
  /** Контент секции. */
  children: React.ReactNode;
  className?: string;
  /** Якорь для навигации и `aria-labelledby`. */
  id?: string;
};

/**
 * Секция страницы с анимацией появления при скролле (`whileInView`).
 * Обертка над `motion.section`: единый viewport и варианты из `fadeInUp`.
 */
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
