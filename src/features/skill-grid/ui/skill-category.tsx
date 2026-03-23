import type { SkillCategory } from "@/types/entities";
import { Heading3 } from "@/shared/ui/text";
import { SkillBadge } from "./skill-badge";
import { SkillBadgeList, SkillCategoryPanel } from "../styled";

type SkillCategoryProps = {
  category: SkillCategory;
};

export function SkillCategoryBlock({ category }: SkillCategoryProps) {
  return (
    <SkillCategoryPanel>
      <Heading3 as="h2">{category.title}</Heading3>
      <SkillBadgeList>
        {category.items.map((item) => (
          <SkillBadge key={item} label={item} />
        ))}
      </SkillBadgeList>
    </SkillCategoryPanel>
  );
}
