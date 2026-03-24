export const ACCENT_COLORS = {
  blue: "#0071e3",
  indigo: "#6366f1",
  sky: "#0ea5e9",
  emerald: "#16a34a",
  amber: "#b45309",
  cyan: "#00b9bf",
  violet: "#7c3aed",
  yellow: "#fad233",
  purple: "#8b5cf6",
} as const;

export type AccentColorName = keyof typeof ACCENT_COLORS;
