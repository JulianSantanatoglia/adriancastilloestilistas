import type { Review } from '../config/business'

export default function ReviewQuote({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col border-t border-text/20 pt-6">
      <blockquote className="font-display text-lg leading-relaxed md:text-xl">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-6 text-sm text-muted-ink">
        {review.name} · {review.source}
      </figcaption>
    </figure>
  )
}
