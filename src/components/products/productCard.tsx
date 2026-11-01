import { MagneticCard } from "@/components/animations/magneticCard"
import { ProductMedia } from "@/components/products/productMedia"
import type { Product } from "@/data/products"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

type ProductCardProps = {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <MagneticCard>
      <Link
        to={`/products/${product.slug}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden border border-line bg-paper transition duration-500 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_40px_rgba(0,0,0,0.1)]",
          className
        )}
      >
        {product.hot ? (
          <span className="absolute right-0 top-0 z-10 bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            HOT
          </span>
        ) : null}

        <ProductMedia
          src={`${product.image}?v=8`}
          alt={`${product.model} ${product.nameEn}`}
          className="aspect-[4/3] w-full"
        />

        <div className="flex flex-1 flex-col border-t border-line px-3 py-3 sm:px-4 sm:py-3.5">
          <div className="font-display text-lg font-bold tracking-wide text-brand transition group-hover:tracking-[0.08em] sm:text-xl">
            {product.model}
          </div>
          <div className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-ink">{product.nameEn}</div>
          <div className="mt-0.5 truncate text-xs text-muted">{product.nameZh}</div>
        </div>
      </Link>
    </MagneticCard>
  )
}
