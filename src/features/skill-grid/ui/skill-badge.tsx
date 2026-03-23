import { SkillBadgeRoot } from "../styled";

type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return <SkillBadgeRoot>{label}</SkillBadgeRoot>;
}
