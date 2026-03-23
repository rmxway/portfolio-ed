"use client";

import type { ButtonVariant } from "./styled";
import { StyledButton, StyledLink } from "./styled";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary" } = props;

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <StyledLink
        href={href}
        target={target}
        rel={rel}
        className={className}
        $variant={variant}
      >
        {children}
      </StyledLink>
    );
  }

  const {
    type = "button",
    disabled,
    onClick,
    ...rest
  } = props as ButtonAsButton;

  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      $variant={variant}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
