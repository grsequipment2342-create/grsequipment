import { cn } from "@/lib/utils"

type ProductMediaProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  priority?: boolean
}

/** Full product photo centered in the frame — never crops the machine. */
export function ProductMedia({ src, alt, className, imgClassName, priority }: ProductMediaProps) {
  return (
    <div className={cn("relative overflow-hidden bg-[#f2f2f2]", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "absolute inset-0 m-auto box-border h-full w-full object-contain object-center p-4 sm:p-6",
          imgClassName
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  )
}
