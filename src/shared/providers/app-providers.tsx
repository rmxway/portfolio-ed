import '@/shared/lib/fontawesome';
import { type PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { appTheme, GlobalStyle } from '@/theme';

export function AppProviders({ children }: PropsWithChildren) {
    return (
        <ThemeProvider theme={appTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
}
