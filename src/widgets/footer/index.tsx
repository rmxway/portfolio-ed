"use client";

import {
  faArrowUp,
  faBriefcase,
  faClockRotateLeft,
  faCode,
  faEnvelope,
  faLocationDot,
  faPhone,
  faTelegram,
} from "@/shared/lib/fontawesome-icons";
import { FaIcon } from "@/shared/ui/fa-icon";
import { ContactLink } from "@/features/contact-form";
import { Container, Heading2, Lead, Section } from "@/shared/ui";
import {
  ContactCard,
  ContactCardHeader,
  ContactCardHint,
  ContactCardValue,
  ContactCardsGrid,
  ContactLabel,
  FooterGrid,
  FooterRoot,
  IntroBlock,
  LinkRow,
  NavDivider,
  NavLinkInner,
} from "./styles";

export function FooterSection() {
  return (
    <FooterRoot id="contact">
      <Container>
        <Section>
          <FooterGrid>
            <IntroBlock>
              <Heading2>Контакты</Heading2>
              <Lead>
                Пишите на почту или в Telegram.
                <br />
                Телефон доступен до 21:00.
              </Lead>
            </IntroBlock>
            <div>
              <ContactLabel as="p">Связь</ContactLabel>
              <ContactCardsGrid>
                <ContactCard>
                  <ContactLink href="mailto:rmxway@mail.ru">
                    <ContactCardHeader>
                      <FaIcon icon={faEnvelope} size="2x" aria-hidden />
                      Email
                    </ContactCardHeader>
                    <ContactCardValue>rmxway@mail.ru</ContactCardValue>
                    <ContactCardHint>
                      Основной канал для откликов
                    </ContactCardHint>
                  </ContactLink>
                </ContactCard>
                <ContactCard>
                  <ContactLink
                    href="https://t.me/evgenydovgan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ContactCardHeader>
                      <FaIcon icon={faTelegram} size="2x" aria-hidden />
                      Telegram
                    </ContactCardHeader>
                    <ContactCardValue>@evgenydovgan</ContactCardValue>
                    <ContactCardHint>Быстрые вопросы, на связи</ContactCardHint>
                  </ContactLink>
                </ContactCard>
                <ContactCard>
                  <ContactLink href="tel:+79672295802">
                    <ContactCardHeader>
                      <FaIcon icon={faPhone} size="2x" aria-hidden />
                      Телефон
                    </ContactCardHeader>
                    <ContactCardValue>+7 (967) 229-58-02</ContactCardValue>
                    <ContactCardHint>До 21:00 по Москве</ContactCardHint>
                  </ContactLink>
                </ContactCard>
                <ContactCard>
                  <ContactLink href="">
                    <ContactCardHeader>
                      <FaIcon icon={faLocationDot} size="2x" aria-hidden />
                      Локация
                    </ContactCardHeader>
                    <ContactCardValue>Россия, Москва</ContactCardValue>
                    <ContactCardHint>ЮАО</ContactCardHint>
                  </ContactLink>
                </ContactCard>
              </ContactCardsGrid>

              <NavDivider />
              <ContactLabel as="p">Навигация</ContactLabel>
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
