import type { Review } from "@/lib/reviews"

type ReviewCardProps = {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <blockquote className="h-full border border-line border-l-4 border-l-brand bg-surface p-5">
      <p className="text-sm leading-relaxed text-ink-soft">“{review.quote}”</p>
      <footer className="mt-4">
        <div className="text-sm font-bold">{review.name}</div>
        <div className="text-xs text-muted">
          {review.company} · {review.place}
        </div>
        <div className="mt-1 text-[11px] uppercase tracking-wide text-brand">{review.machines}</div>
      </footer>
    </blockquote>
  )
}
