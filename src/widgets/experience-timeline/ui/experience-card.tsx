import type { ExperienceItem } from '@/types/entities';
import { Heading3 } from '@/shared/ui/text';
import { Card, ExperienceDesc, ExperienceHighlights, ExperienceMeta, ExperienceRoleLine } from '../styled';
import { formatExperienceDurationText } from '../lib/experience-duration';

type ExperienceCardProps = {
    item: ExperienceItem;
};

export function ExperienceCard({ item }: ExperienceCardProps) {
    const durationText = formatExperienceDurationText(item.start, item.end);

    return (
        <Card>
            <ExperienceMeta>
                {item.period} ( {durationText} )
            </ExperienceMeta>
            <Heading3 as="h3">{item.company}</Heading3>
            <ExperienceRoleLine as="p">
                {item.role}
                {item.location ? ` · ${item.location}` : ''}
            </ExperienceRoleLine>
            <ExperienceDesc as="p">{item.description}</ExperienceDesc>
            <ExperienceHighlights>
                {item.highlights.map((line) => (
                    <li key={line}>{line}</li>
                ))}
            </ExperienceHighlights>
        </Card>
    );
}
