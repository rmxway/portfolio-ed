"use client";

import { forwardRef } from "react";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export type FaIconProps = FontAwesomeIconProps & {
  /**
   * Размер иконки в пикселях (width/height SVG).
   * Удобно, когда нужен произвольный размер; предопределённый `size` из Font Awesome тоже поддерживается.
   */
  pixels?: number;
};

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
