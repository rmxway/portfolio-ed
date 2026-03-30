"use client";

import { forwardRef } from "react";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

/**
 * Пропсы `FontAwesomeIcon` плюс необязательный размер в пикселях (`pixels`).
 * Проп `size` из библиотеки Font Awesome по-прежнему можно передавать.
 */
export type FaIconProps = FontAwesomeIconProps & {
  /**
   * Размер иконки в пикселях (`width` / `height` SVG и min-размеры).
   * Вместе с предопределённым `size` из Font Awesome можно не указывать.
   */
  pixels?: number;
};

/** Обёртка над `FontAwesomeIcon` с поддержкой `pixels` для фиксированного размера в px. */
export const FaIcon = forwardRef<SVGSVGElement, FaIconProps>(function FaIcon(
  { pixels, style, ...rest },
  ref,
) {
  const mergedStyle =
    pixels !== undefined
      ? {
          width: pixels,
          height: pixels,
          minWidth: pixels,
          minHeight: pixels,
          ...style,
        }
      : style;

  return <FontAwesomeIcon ref={ref} style={mergedStyle} {...rest} />;
});
