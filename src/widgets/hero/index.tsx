"use client";

import { motion } from "framer-motion";
import { faFolderOpen, faPaperPlane } from "@/shared/lib/fontawesome";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { FaIcon } from "@/shared/ui/fa-icon";
import { GradientBackground } from "@/shared/ui/gradient-background";
import { Eyebrow, Heading1, Lead } from "@/shared/ui/text";
import { staggerContainer, staggerItem } from "@/shared/lib/animations";
import {
  HeroActions,
  HeroCopy,
  HeroGrid,
  HeroInner,
  HeroPhoto,
  HeroPhotoWrap,
  HeroRoot,
  HeroSurface,
} from "./styles";

export function HeroSection() {
  return (
    <HeroRoot id="top">
      <GradientBackground accent="blue" angle={130} />
      <HeroSurface>
        <Container>
          <HeroInner
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <HeroGrid>
              <HeroCopy>
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
                      <FaIcon icon={faFolderOpen} pixels={16} aria-hidden />
                      Смотреть проекты
                    </Button>
                    <Button href="#contact" variant="secondary">
                      <FaIcon icon={faPaperPlane} pixels={16} aria-hidden />
                      Связаться
                    </Button>
                  </HeroActions>
                </motion.div>
              </HeroCopy>
              <HeroPhotoWrap variants={staggerItem}>
                <HeroPhoto src="/img/resume.jpg" alt="Довгань Евгений" />
              </HeroPhotoWrap>
            </HeroGrid>
          </HeroInner>
        </Container>
      </HeroSurface>
    </HeroRoot>
  );
}
