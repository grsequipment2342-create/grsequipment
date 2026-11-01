import { cn } from "@/lib/utils"
import type { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-sm border border-line bg-paper px-3 text-base text-ink outline-none transition focus:border-brand md:text-sm",
        className
      )}
      {...props}
    />
  )
}
