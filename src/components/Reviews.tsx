import { Star } from 'lucide-react'
import type { Review } from '../config/business'
import ReviewQuote from './ReviewQuote'
import Reveal from './Reveal'
import SectionEyebrow from './SectionEyebrow'

interface ReviewsProps {
  reviews: Review[]
  rating: number
}

export default function Reviews({ reviews, rating }: ReviewsProps) {
  return (
    <section id="resenas" className="bg-surface px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionEyebrow>RESEÑAS</SectionEyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
            Lo que dicen nuestras clientas
          </h2>
        </div>
        <p className="inline-flex items-center gap-2 self-start border border-text/30 px-3 py-1.5 text-sm md:self-auto">
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          <span>{rating.toString().replace('.', ',')} en Google</span>
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
        {reviews.map((review, i) => (
          <Reveal key={review.name} delay={i * 0.08}>
            <ReviewQuote review={review} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
