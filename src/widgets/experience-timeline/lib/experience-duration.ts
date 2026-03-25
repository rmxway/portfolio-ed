import type { ExperienceItem } from "@/types/entities";

function getRussianPluralForm(
  num: number,
  one: string,
  few: string,
  many: string,
) {
  const mod10 = num % 10;
  const mod100 = num % 100;

  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

export function formatExperienceDurationText(
  start: ExperienceItem["start"],
  end: ExperienceItem["end"],
) {
  const startTotalMonths = start.year * 12 + start.month;
  const now = new Date();
  const resolvedEnd =
    end ??
    ({
      year: now.getFullYear(),
      month: now.getMonth(),
    } satisfies NonNullable<ExperienceItem["end"]>);

  const endTotalMonths = resolvedEnd.year * 12 + resolvedEnd.month;
  const totalMonths = endTotalMonths - startTotalMonths;

  if (totalMonths <= 0) return "0 месяцев";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearsText =
    years > 0
      ? `${years} ${getRussianPluralForm(years, "год", "года", "лет")}`
      : "";
  const monthsText =
    months > 0
      ? `${months} ${getRussianPluralForm(months, "месяц", "месяца", "месяцев")}`
      : "";

  if (yearsText && monthsText) return `${yearsText} ${monthsText}`;
  if (yearsText) return yearsText;
  return monthsText;
}
