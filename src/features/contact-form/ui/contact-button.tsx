import { ContactLinkStyled } from '../styled';

type ContactButtonProps = {
    href?: string | undefined;
    children: React.ReactNode;
    target?: string;
    rel?: string;
};

export function ContactLink({ href = undefined, children, target, rel }: ContactButtonProps) {
    return (
        <ContactLinkStyled href={href} target={target} rel={rel}>
            {children}
        </ContactLinkStyled>
    );
}
