import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes } from "react"

type ButtonVariant = "primary" | "outline" | "ghost" | "dark"
type ButtonSize = "sm" | "md" | "lg"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark shadow-[0_8px_24px_rgba(198,40,40,0.28)]",
  outline: "border border-brand text-brand hover:bg-brand hover:text-white",
  ghost: "text-ink hover:text-brand",
  dark: "bg-ink text-white hover:bg-brand",
}

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-sm",
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide uppercase transition-colors duration-300 disabled:opacity-50",
        variantClass[variant],
        sizeClass[size],
        className
      )}
      {...props}
    />
  )
}
