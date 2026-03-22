import styled, { css } from "styled-components";
import type { SkillCategory } from "@/entities/skill";
import { SkillBadge } from "./skill-badge";
import { Heading3 } from "@/shared/ui/text";

const Block = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[3]};
    padding: ${theme.space[4]};
    border-radius: ${theme.radii.lg};
    background: ${theme.colors.background};
    border: 1px solid ${theme.colors.glassBorder};
    box-shadow: ${theme.shadows.sm};
  `}
`;

const List = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.space[2]};
  `}
`;

type SkillCategoryProps = {
  category: SkillCategory;
};

export function SkillCategoryBlock({ category }: SkillCategoryProps) {
  return (
    <Block>
      <Heading3 as="h3">{category.title}</Heading3>
      <List>
        {category.items.map((item) => (
          <SkillBadge key={item} label={item} />
        ))}
      </List>
    </Block>
  );
}
