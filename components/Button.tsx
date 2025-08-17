import React, { AnchorHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  className,
  ...rest
}: ButtonProps) {
  const base =
    "inline-block rounded-2xl px-5 py-3 font-semibold transition-transform hover:-translate-y-0.5 shadow-soft";
  const solid = "bg-brand text-white hover:shadow-lg";
  const outline = "border border-brand text-brand hover:bg-blue-50";

  return (
    <a
      href={href}
      className={clsx(base, variant === "solid" ? solid : outline, className)}
      {...rest} // allows target, rel, etc.
    >
      {children}
    </a>
  );
}