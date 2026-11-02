import { firestoreDb } from "@/lib/firebase"
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore"

export const REVIEWS_COLLECTION = "reviews"
export const HOME_REVIEW_LIMIT = 6

export type Review = {
  id: string
  name: string
  company: string
  place: string
  machines: string
  quote: string
  createdAtMs: number
}

export type ReviewInput = {
  name: string
  company: string
  place: string
  machines: string
  quote: string
}

type ReviewDoc = {
  name?: string
  company?: string
  place?: string
  machines?: string
  quote?: string
  createdAt?: Timestamp
}

function mapReviewDoc(id: string, data: ReviewDoc): Review | null {
  if (!data.name || !data.quote || !data.company || !data.place || !data.machines) {
    return null
  }
  return {
    id,
    name: data.name,
    company: data.company,
    place: data.place,
    machines: data.machines,
    quote: data.quote,
    createdAtMs: data.createdAt?.toMillis?.() ?? 0,
  }
}

export async function fetchReviews(max = 100): Promise<Review[]> {
  const reviewsQuery = query(
    collection(firestoreDb, REVIEWS_COLLECTION),
    orderBy("createdAt", "desc"),
    limit(max)
  )
  const snapshot = await getDocs(reviewsQuery)
  const reviews: Review[] = []
  snapshot.forEach((docSnap) => {
    const mapped = mapReviewDoc(docSnap.id, docSnap.data() as ReviewDoc)
    if (mapped) reviews.push(mapped)
  })
  return reviews
}

export async function addReview(input: ReviewInput): Promise<Review> {
  const payload = {
    name: input.name.trim(),
    company: input.company.trim(),
    place: input.place.trim(),
    machines: input.machines.trim(),
    quote: input.quote.trim(),
    createdAt: serverTimestamp(),
  }
  const docRef = await addDoc(collection(firestoreDb, REVIEWS_COLLECTION), payload)
  return {
    id: docRef.id,
    name: payload.name,
    company: payload.company,
    place: payload.place,
    machines: payload.machines,
    quote: payload.quote,
    createdAtMs: Date.now(),
  }
}
