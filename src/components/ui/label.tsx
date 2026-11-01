import { cn } from "@/lib/utils"
import type { LabelHTMLAttributes } from "react"

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn("mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted", className)}
      {...props}
    />
  )
}
