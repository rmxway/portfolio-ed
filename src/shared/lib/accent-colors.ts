export const ACCENT_COLORS = {
  indigo: "#6366f1",
  emerald: "#16a34a",
  amber: "#b45309",
  yellow: "#fad233",
  sky: "#0ea5e9",
  purple: "#8b5cf6",
  blue: "#0071e3",
  cyan: "#00b9bf",
  violet: "#7c3aed",
} as const;

export type AccentColorName = keyof typeof ACCENT_COLORS;
