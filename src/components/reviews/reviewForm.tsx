import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { addReview, type Review } from "@/lib/reviews"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const reviewSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter company name"),
  place: z.string().min(2, "Please enter city / place"),
  machines: z.string().min(2, "Please enter machine / model used"),
  quote: z.string().min(10, "Please write a short review"),
})

type ReviewFormValues = z.infer<typeof reviewSchema>

type ReviewFormProps = {
  onCreated: (review: Review) => void
}

export function ReviewForm({ onCreated }: ReviewFormProps) {
  const [error, setError] = useState("")
  const [done, setDone] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      company: "",
      place: "",
      machines: "",
      quote: "",
    },
  })

  const onSubmit = handleSubmit(async (values) => {
    setError("")
    setDone(false)
    try {
      const created = await addReview(values)
      onCreated(created)
      reset()
      setDone(true)
    } catch {
      setError("Could not save review. Check Firestore rules / network and try again.")
    }
  })

  return (
    <form onSubmit={onSubmit} className="border border-line bg-paper p-5 sm:p-6">
      <h3 className="font-display text-lg font-bold tracking-wide">Share Your Review</h3>
      <p className="mt-1 text-sm text-muted">Tell others about your STETON / GRS experience.</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="review-name">Name</Label>
          <Input id="review-name" {...register("name")} />
          {errors.name ? <p className="mt-1 text-xs text-brand">{errors.name.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="review-company">Company</Label>
          <Input id="review-company" {...register("company")} />
          {errors.company ? <p className="mt-1 text-xs text-brand">{errors.company.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="review-place">City / Place</Label>
          <Input id="review-place" {...register("place")} />
          {errors.place ? <p className="mt-1 text-xs text-brand">{errors.place.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="review-machines">Machine / Model</Label>
          <Input id="review-machines" placeholder="e.g. S200 / 33 ton" {...register("machines")} />
          {errors.machines ? <p className="mt-1 text-xs text-brand">{errors.machines.message}</p> : null}
        </div>
      </div>

      <div className="mt-4">
        <Label htmlFor="review-quote">Review</Label>
        <Textarea
          id="review-quote"
          placeholder="Share your experience with GRS / STETON support..."
          {...register("quote")}
        />
        {errors.quote ? <p className="mt-1 text-xs text-brand">{errors.quote.message}</p> : null}
      </div>

      <Button type="submit" className="mt-5" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </Button>
      {done ? <p className="mt-3 text-sm text-ink-soft">Thanks — your review is live.</p> : null}
      {error ? <p className="mt-3 text-sm text-brand">{error}</p> : null}
    </form>
  )
}
