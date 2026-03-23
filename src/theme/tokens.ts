import type { AppTheme } from "@/types/theme";

export const tokens: Omit<AppTheme, "breakpoints"> = {
  colors: {
    background: "#ffffff",
    backgroundSecondary: "#f5f5f7",
    text: "#1d1d1f",
    textMuted: "#6e6e73",
    textSecondary: "#86868b",
    primary: "#0071e3",
    accent: "#0071e3",
    accentHover: "#0077ed",
    success: "#34c759",
    glassBorder: "rgba(0, 0, 0, 0.08)",
    glassBackground: "rgba(255, 255, 255, 0.72)",
    gray50: "#fafafa",
    gray100: "#f5f5f5",
    gray200: "#eeeeee",
    gray300: "#e0e0e0",
    gray400: "#bdbdbd",
    gray500: "#9e9e9e",
    gray600: "#757575",
    gray700: "#616161",
    gray800: "#424242",
    gray900: "#212121",
  },
  gradients: {
    hero: "linear-gradient(180deg, #f5f5f7 0%, #ffffff 45%, #e8eef8 100%)",
    heroAccent:
      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 113, 227, 0.15), transparent)",
    card: "linear-gradient(145deg, #ffffff 0%, #f5f5f7 100%)",
  },
  typography: {
    heroTitle: "clamp(2.5rem, 8vw, 4.5rem)",
    sectionTitle: "clamp(2rem, 5vw, 3rem)",
    lead: "clamp(1.125rem, 2vw, 1.375rem)",
    body: "1.0625rem",
  },
  shadows: {
    sm: "0 2px 8px rgba(0, 0, 0, 0.06)",
    md: "0 8px 24px rgba(0, 0, 0, 0.08)",
    cardHover: "0 16px 40px rgba(0, 0, 0, 0.12)",
  },
  space: ["0", "0.25rem", "0.5rem", "1rem", "1.5rem", "2rem", "3rem"],
  radii: {
    sm: "6px",
    md: "12px",
    lg: "18px",
    xl: "24px",
    full: "9999px",
  },
  fonts: {
    body: "var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "var(--font-geist-mono), ui-monospace, monospace",
  },
  zIndex: {
    header: 100,
    modal: 200,
  },
};
