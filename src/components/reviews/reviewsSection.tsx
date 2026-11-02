import { Reveal } from "@/components/animations/reveal"
import { ReviewCard } from "@/components/reviews/reviewCard"
import { ReviewForm } from "@/components/reviews/reviewForm"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/data/content"
import { cn } from "@/lib/utils"
import { fetchReviews, HOME_REVIEW_LIMIT, type Review } from "@/lib/reviews"
import { X } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"

function staticReviews(): Review[] {
  return testimonials.map((item, index) => ({
    id: `static-${index}`,
    name: item.name,
    company: item.company,
    place: item.place,
    machines: item.machines,
    quote: item.quote,
    createdAtMs: 0,
  }))
}

function mergeReviews(live: Review[]): Review[] {
  const seen = new Set(live.map((item) => `${item.name}|${item.quote}`.toLowerCase()))
  const extras = staticReviews().filter((item) => !seen.has(`${item.name}|${item.quote}`.toLowerCase()))
  return [...live, ...extras]
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(staticReviews())
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [loadError, setLoadError] = useState("")

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        const live = await fetchReviews()
        if (!active) return
        setReviews(mergeReviews(live))
      } catch {
        if (!active) return
        setLoadError("Could not load live reviews. Showing saved customer feedback.")
        setReviews(staticReviews())
      } finally {
        if (active) setLoading(false)
      }
    })()
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (!showMore) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowMore(false)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [showMore])

  const preview = useMemo(() => reviews.slice(0, HOME_REVIEW_LIMIT), [reviews])
  const hasMore = reviews.length > HOME_REVIEW_LIMIT

  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="section-title text-2xl">Happy Customers</h2>
              <p className="mt-2 text-sm text-muted">India contractors on support &amp; service</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button type="button" variant="outline" size="sm" onClick={() => setShowForm((open) => !open)}>
                {showForm ? "Close Form" : "Write a Review"}
              </Button>
              <Link to="/about" className="text-sm font-semibold uppercase tracking-wide text-brand hover:underline">
                About GRS →
              </Link>
            </div>
          </div>
        </Reveal>

        {showForm ? (
          <div className="mt-6">
            <ReviewForm
              onCreated={(review) => {
                setReviews((prev) => [review, ...prev.filter((item) => item.id !== review.id)])
                setShowForm(false)
              }}
            />
          </div>
        ) : null}

        {loading ? <p className="mt-8 text-sm text-muted">Loading reviews...</p> : null}
        {loadError ? <p className="mt-4 text-sm text-muted">{loadError}</p> : null}

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {preview.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {hasMore ? (
          <div className="mt-8 flex justify-center">
            <Button type="button" variant="outline" onClick={() => setShowMore(true)}>
              More Reviews ({reviews.length - HOME_REVIEW_LIMIT}+)
            </Button>
          </div>
        ) : null}
      </div>

      {showMore ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/55 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="All customer reviews"
          onClick={() => setShowMore(false)}
        >
          <div
            className={cn(
              "max-h-[85dvh] w-full max-w-5xl overflow-hidden border border-line bg-paper shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
            )}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
              <div>
                <h3 className="font-display text-lg font-bold tracking-wide">All Reviews</h3>
                <p className="text-xs text-muted">{reviews.length} customer voices</p>
              </div>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-line hover:border-brand hover:text-brand"
                onClick={() => setShowMore(false)}
                aria-label="Close reviews"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[calc(85dvh-4rem)] overflow-y-auto p-4 sm:p-5">
              <div className="grid gap-4 md:grid-cols-2">
                {reviews.map((review) => (
                  <ReviewCard key={`modal-${review.id}`} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
