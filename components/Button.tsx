import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "coral" | "mustard" | "mint" | "lavender" | "outline";
type Size = "md" | "lg" | "xl";

const variantClasses: Record<Variant, string> = {
  coral:
    "bg-coral-500 text-white shadow-[0_6px_0_0_#B02323] hover:bg-coral-400 active:shadow-none",
  mustard:
    "bg-mustard-400 text-cocoa-800 shadow-[0_6px_0_0_#C08419] hover:bg-mustard-300 active:shadow-none",
  mint: "bg-mint-500 text-white shadow-[0_6px_0_0_#26744A] hover:bg-mint-400 active:shadow-none",
  lavender:
    "bg-lavender-400 text-white shadow-[0_6px_0_0_#5D2FCB] hover:bg-lavender-300 active:shadow-none",
  outline:
    "bg-white text-cocoa-600 border-4 border-cocoa-600/15 shadow-[0_6px_0_0_rgba(91,62,52,0.12)] hover:border-mint-400 active:shadow-none",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
  xl: "px-10 py-5 text-xl gap-3",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps & {
  href: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "coral", size = "lg", icon, className = "" } = props;

  const classes = `btn-chunky inline-flex items-center justify-center rounded-full font-display font-semibold tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-4 focus-visible:outline-mustard-200 disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  // Importante: sacamos TODAS las props "de diseño" (children, variant, size,
  // icon, className) antes de esparcir el resto sobre el <button> nativo.
  // Si no, className/variant/size/icon terminan como atributos HTML crudos
  // y, peor, className del spread pisa el `classes` calculado arriba.
  const {
    href: _href,
    children: _children,
    variant: _variant,
    size: _size,
    icon: _icon,
    className: _className,
    ...nativeButtonProps
  } = props as ButtonAsButton;

  return (
    <button className={classes} {...nativeButtonProps}>
      {icon}
      {children}
    </button>
  );
}
