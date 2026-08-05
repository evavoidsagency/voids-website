import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  onDark?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
};

/**
 * VOIDS Button — primary actions use purple (authority), secondary
 * use blue (modern). Renders as a Link when `href` is passed.
 */
export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    fullWidth = false,
    onDark = false,
    className,
    children,
  } = props;

  const cls = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? "btn--full" : "",
    variant === "outline" && onDark ? "btn--on-dark" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  const {
    href: _href,
    variant: _v,
    size: _s,
    fullWidth: _fw,
    onDark: _od,
    ...rest
  } = props as ButtonAsButton & { href?: undefined };
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
