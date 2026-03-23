"use client";

import "@/shared/lib/fontawesome";
import { type PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { appTheme, GlobalStyle } from "@/theme";
import { StyledRegistry } from "./styled-registry";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <StyledRegistry>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledRegistry>
  );
}
