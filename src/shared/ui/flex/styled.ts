import type { Property } from "csstype";
import styled, { css } from "styled-components";

/** Индекс отступа в `theme.space` (0…6). */
export type FlexGap = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type FlexOwnProps = {
  /**
   * Направление главной оси (CSS `flex-direction`).
   *
   * Возможные значения: `"row"` | `"column"` | `"row-reverse"` | `"column-reverse"` | глобалы CSS.
   *
   * @default "row"
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  $direction?: Property.FlexDirection;
  /**
   * `inline-flex` вместо `block` flex — для использования внутри текста и заголовков.
   * @default false
   */
  $inline?: boolean;
  /**
   * Выравнивание по поперечной оси (`align-items`).
   *
   * Возможные значения: `"center"` | `"flex-start"` | `"flex-end"` | `"baseline"` | `"stretch"` | и др.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  $alignItems?: Property.AlignItems;
  /**
   * Распределение вдоль главной оси (`justify-content`).
   *
   * Возможные значения: `"center"` | `"flex-start"` | `"flex-end"` | `"space-between"` | `"space-around"` | и др.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  $justifyContent?: Property.JustifyContent;
  /**
   * Расстояние между элементами: индекс `theme.space` (0–6) или произвольное CSS-значение.
   */
  $gap?: FlexGap | (string & {});
  /**
   * Перенос строк (`flex-wrap`).
   *
   * Возможные значения: `"nowrap"` | `"wrap"` | `"wrap-reverse"` | глобалы CSS.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  $flexWrap?: Property.FlexWrap;
};

/**
 * Универсальный контейнер на CSS Flexbox: частые свойства вынесены в пропсы с префиксом `$`
 * (transient props styled-components — не попадают в DOM).
 * Поддерживает полиморфный `as` (например, `as="span"` внутри `h1`–`h6`).
 *
 * @example
 * ```tsx
 * <Flex as="span" $inline $alignItems="center" $gap={2}>
 *   <FaIcon icon={faStar} aria-hidden />
 *   Заголовок
 * </Flex>
 * ```
 */
export const Flex = styled.div<FlexOwnProps>`
  ${({
    theme,
    $direction = "row",
    $inline = false,
    $alignItems,
    $justifyContent,
    $gap,
    $flexWrap,
  }) => css`
    display: ${$inline ? "inline-flex" : "flex"};
    flex-direction: ${$direction};
    ${$alignItems != null &&
    css`
      align-items: ${$alignItems};
    `}
    ${$justifyContent != null &&
    css`
      justify-content: ${$justifyContent};
    `}
    ${$gap != null &&
    css`
      gap: ${typeof $gap === "number" ? theme.space[$gap] : $gap};
    `}
    ${$flexWrap != null &&
    css`
      flex-wrap: ${$flexWrap};
    `}
  `}
`;
