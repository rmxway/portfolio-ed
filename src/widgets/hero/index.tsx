import { motion } from 'framer-motion';
import { faFolderOpen, faPaperPlane } from '@/shared/lib/fontawesome';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import { FaIcon } from '@/shared/ui/fa-icon';
import { GradientBackground } from '@/shared/ui/gradient-background';
import { Eyebrow, Heading1, Lead } from '@/shared/ui/text';
import { staggerContainer, staggerItem } from '@/shared/lib/animations';
import { HeroActions, HeroText, HeroGrid, HeroInner, HeroPhoto, HeroPhotoWrap, HeroRoot, HeroSurface, List } from './styled';

export function HeroSection() {
    return (
        <HeroRoot id="top">
            <GradientBackground accent="purple" angle={130} />
            <HeroSurface>
                <Container>
                    <HeroInner variants={staggerContainer} initial="hidden" animate="visible">
                        <HeroGrid>
                            <HeroText>
                                <motion.div variants={staggerItem}>
                                    <Eyebrow>Frontend-разработчик (React / TypeScript)</Eyebrow>
                                </motion.div>
                                <motion.div variants={staggerItem}>
                                    <Heading1>Довгань Евгений</Heading1>
                                </motion.div>
                                <motion.div variants={staggerItem}>
                                    <Lead>
                                        Основные направления работы:
                                        <List>
                                            <li>Разработка современных веб-приложений</li>
                                            <li>React, Next.js, Vue, REST API, GraphQL, Redux Toolkit, TanStack и т.д.</li>
                                            <li>Оптимизация производительности</li>
                                            <li>Интеграция AI для повышения эффективности</li>
                                            <li>Работа в Figma (создание нового макета или работа в существующем)</li>
                                        </List>
                                    </Lead>
                                    <Lead>
                                        Готов к задачам любого уровня: новые проекты, поддержка, доработка, рефакторинг, покрытие тестами. Быстро вникаю в чужой код и соблюдаю code style. Использую AI
                                        в разработке как инструмент, а не замену.
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
                            </HeroText>
                            <HeroPhotoWrap variants={staggerItem}>
                                <HeroPhoto src="./img/photo.jpg" alt="Довгань Евгений" />
                            </HeroPhotoWrap>
                        </HeroGrid>
                    </HeroInner>
                </Container>
            </HeroSurface>
        </HeroRoot>
    );
}
