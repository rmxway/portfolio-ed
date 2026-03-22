import type { AppTheme } from "@/types/theme";
import { breakpoints } from "./breakpoints";
import { tokens } from "./tokens";

export const appTheme: AppTheme = {
  ...tokens,
  breakpoints: { ...breakpoints },
};

export { breakpoints } from "./breakpoints";
export { GlobalStyle } from "./global-styles";
export { media } from "./media";
export { tokens } from "./tokens";
