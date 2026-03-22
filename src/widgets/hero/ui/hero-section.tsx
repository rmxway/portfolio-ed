"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Eyebrow, Heading1, Lead } from "@/shared/ui/text";
import { staggerContainer, staggerItem } from "@/shared/lib/animations";
import { HeroActions, HeroInner, HeroRoot, HeroSurface } from "../styles";
import { HeroBackground } from "./hero-background";

const MotionGroup = motion.div;

export function HeroSection() {
  return (
    <HeroRoot id="top">
      <HeroBackground />
      <HeroSurface>
        <Container>
          <HeroInner>
            <MotionGroup
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={staggerItem}>
                <Eyebrow>Frontend-разработчик</Eyebrow>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Heading1>Довгань Евгений</Heading1>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Lead>
                  React, TypeScript и Next.js — продуктовые интерфейсы,
                  производительность и современные практики. Москва · гибрид,
                  офис или удалённо.
                </Lead>
              </motion.div>
              <motion.div variants={staggerItem}>
                <HeroActions>
                  <Button href="#projects" variant="primary">
                    Смотреть проекты
                  </Button>
                  <Button href="#contact" variant="secondary">
                    Связаться
                  </Button>
                </HeroActions>
              </motion.div>
            </MotionGroup>
          </HeroInner>
        </Container>
      </HeroSurface>
    </HeroRoot>
  );
}
