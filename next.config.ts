import type { NextConfig } from "next";

/** Явный путь (например в `.env.local`): иначе Next может дописать в `tsconfig` абсолютные `include`. Для тома `/Volumes/…` удобнее симлинк `.next` → локальный кэш (см. README). */
const distDir = process.env.NEXT_DIST_DIR?.trim() || ".next";

const nextConfig: NextConfig = {
  distDir,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
