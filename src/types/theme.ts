export interface AppTheme {
  colors: {
    background: string;
    backgroundSecondary: string;
    text: string;
    textMuted: string;
    textSecondary: string;
    primary: string;
    accent: string;
    accentHover: string;
    success: string;
    glassBorder: string;
    glassBackground: string;
    gray50: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
  };
  gradients: {
    hero: string;
    heroAccent: string;
    card: string;
  };
  typography: {
    heroTitle: string;
    sectionTitle: string;
    lead: string;
    body: string;
  };
  shadows: {
    sm: string;
    md: string;
    cardHover: string;
  };
  space: readonly [string, string, string, string, string, string, string];
  radii: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  fonts: {
    body: string;
    mono: string;
  };
  zIndex: {
    header: number;
    modal: number;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
