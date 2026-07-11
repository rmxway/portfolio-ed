import type { SkillCategory } from "@/types/entities";
import { Heading3 } from "@/shared/ui/text";
import { SkillBadge } from "./skill-badge";
import { SkillBadgeList, SkillCategoryPanel } from "../styled";
import { GradientBackground } from "@/shared/ui/gradient-background";
import { ACCENT_COLORS, type AccentColorName } from "@/shared/lib";

type SkillCategoryProps = {
  category: SkillCategory;
  num: number;
};

const accentColorNames = Object.keys(ACCENT_COLORS) as AccentColorName[];

export function SkillCategoryBlock({ category, num = 0 }: SkillCategoryProps) {
  const accent = accentColorNames[num];

  return (
    <SkillCategoryPanel>
      <Heading3 as="h2">{category.title}</Heading3>
      <SkillBadgeList>
        {category.items.map((item) => (
          <SkillBadge key={item} label={item} />
        ))}
      </SkillBadgeList>
      <GradientBackground accent={accent} angle={110} />
    </SkillCategoryPanel>
  );
}
