"use client";

import styled, { css } from "styled-components";
import { ContactLink } from "@/features/contact-form";
import { Container } from "@/shared/ui/container";
import { Body, Heading2, Lead } from "@/shared/ui/text";
import { Section } from "@/shared/ui/section";
import {
  ContactItem,
  ContactList,
  FooterGrid,
  FooterRoot,
  LinkRow,
} from "../styles";

const ContactLabel = styled(Body)`
  ${({ theme }) => css`
    font-weight: 600;
    color: ${theme.colors.text};
  `}
`;

export function FooterSection() {
  return (
    <FooterRoot id="contact">
      <Container>
        <Section>
          <FooterGrid>
            <div>
              <Heading2>Контакты</Heading2>
              <Lead>
                Пишите на почку или в Telegram — предпочтительно email. Телефон
                доступен до 21:00.
              </Lead>
            </div>
            <div>
              <ContactLabel as="p">Связь</ContactLabel>
              <ContactList>
                <ContactItem>
                  <ContactLink href="mailto:rmxway@mail.ru">
                    rmxway@mail.ru
                  </ContactLink>
                </ContactItem>
                <ContactItem>
                  <ContactLink
                    href="https://t.me/evgenydovgan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram: @evgenydovgan
                  </ContactLink>
                </ContactItem>
                <ContactItem>
                  <ContactLink href="tel:+79672295802">
                    +7 (967) 229-58-02
                  </ContactLink>
                </ContactItem>
                <ContactItem>Москва · готов к переезду</ContactItem>
              </ContactList>
              <LinkRow>
                <ContactLink href="#top">Наверх</ContactLink>
                <ContactLink href="#projects">Проекты</ContactLink>
                <ContactLink href="#skills">Навыки</ContactLink>
                <ContactLink href="#experience">Опыт</ContactLink>
              </LinkRow>
            </div>
          </FooterGrid>
        </Section>
      </Container>
    </FooterRoot>
  );
}
