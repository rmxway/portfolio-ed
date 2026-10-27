import { faArrowUp, faBriefcase, faClockRotateLeft, faCode, faEnvelope, faLocationDot, faPhone, faTelegramPlane } from '@/shared/lib/fontawesome';

import { FaIcon } from '@/shared/ui';
import { ContactLink } from '@/features/contact-form';
import { Container, Section } from '@/shared/ui';
import { ContactCard, ContactCardHeader, ContactCardHint, ContactCardValue, ContactCardsGrid, FooterGrid, FooterRoot, LinkRow, NavDivider, NavLinkInner } from './styled';

export function FooterSection() {
    const size = 22;
    return (
        <FooterRoot id="contact">
            <Container>
                <Section>
                    <FooterGrid>
                        <div>
                            <ContactCardsGrid>
                                <ContactCard>
                                    <ContactLink href="mailto:rmxway@mail.ru">
                                        <ContactCardHeader>
                                            <FaIcon icon={faEnvelope} pixels={size} aria-hidden />
                                        </ContactCardHeader>
                                        <ContactCardValue>rmxway@yandex.ru</ContactCardValue>
                                        <ContactCardHint>Основной канал для откликов</ContactCardHint>
                                    </ContactLink>
                                </ContactCard>
                                <ContactCard>
                                    <ContactLink href="https://t.me/evgenydovgan" target="_blank" rel="noopener noreferrer">
                                        <ContactCardHeader>
                                            <FaIcon icon={faTelegramPlane} pixels={size} aria-hidden />
                                        </ContactCardHeader>
                                        <ContactCardValue>@evgenydovgan</ContactCardValue>
                                        <ContactCardHint>Быстрые вопросы, на связи</ContactCardHint>
                                    </ContactLink>
                                </ContactCard>
                                <ContactCard>
                                    <ContactLink href="tel:+79672295802">
                                        <ContactCardHeader>
                                            <FaIcon icon={faPhone} pixels={size} aria-hidden />
                                        </ContactCardHeader>
                                        <ContactCardValue>+7 (967) 229-58-02</ContactCardValue>
                                        <ContactCardHint>До 22:00 по Москве</ContactCardHint>
                                    </ContactLink>
                                </ContactCard>
                                <ContactCard>
                                    <ContactLink href="">
                                        <ContactCardHeader>
                                            <FaIcon icon={faLocationDot} pixels={size} aria-hidden />
                                        </ContactCardHeader>
                                        <ContactCardValue>Россия, Москва</ContactCardValue>
                                    </ContactLink>
                                </ContactCard>
                            </ContactCardsGrid>

                            <NavDivider />
                            <LinkRow>
                                <ContactLink href="#top">
                                    <NavLinkInner>
                                        <FaIcon icon={faArrowUp} size="sm" aria-hidden />
                                        Наверх
                                    </NavLinkInner>
                                </ContactLink>
                                <ContactLink href="#projects">
                                    <NavLinkInner>
                                        <FaIcon icon={faBriefcase} size="sm" aria-hidden />
                                        Проекты
                                    </NavLinkInner>
                                </ContactLink>
                                <ContactLink href="#skills">
                                    <NavLinkInner>
                                        <FaIcon icon={faCode} size="sm" aria-hidden />
                                        Навыки
                                    </NavLinkInner>
                                </ContactLink>
                                <ContactLink href="#experience">
                                    <NavLinkInner>
                                        <FaIcon icon={faClockRotateLeft} size="sm" aria-hidden />
                                        Опыт
                                    </NavLinkInner>
                                </ContactLink>
                            </LinkRow>
                        </div>
                    </FooterGrid>
                </Section>
            </Container>
        </FooterRoot>
    );
}
