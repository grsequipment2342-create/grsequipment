import { cn } from "@/lib/utils"
import type { TextareaHTMLAttributes } from "react"

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-sm border border-line bg-paper px-3 py-3 text-base text-ink outline-none transition focus:border-brand md:text-sm",
        className
      )}
      {...props}
    />
  )
}
