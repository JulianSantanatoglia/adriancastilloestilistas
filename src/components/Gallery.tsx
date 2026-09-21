import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { GalleryImage } from '../config/business'
import Reveal from './Reveal'
import SectionEyebrow from './SectionEyebrow'

// Composición con tamaños variados (índice → clases del grid).
const layout = [
  'col-span-1 row-span-2 md:col-span-4 md:row-span-2',
  'col-span-1 row-span-2 md:col-span-3 md:row-span-3',
  'col-span-2 row-span-1 md:col-span-5 md:row-span-1',
  'col-span-2 row-span-1 md:col-span-5 md:row-span-2',
  'col-span-2 row-span-1 md:col-span-4 md:row-span-1',
]

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastTrigger = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setActive(null)
    lastTrigger.current?.focus()
  }, [])
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  )
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, prev, next])

  return (
    <section id="galeria" className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <Reveal>
        <SectionEyebrow>GALERÍA</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">Cabello, color y estilo</h2>
      </Reveal>

      <Reveal className="mt-12 grid grid-flow-dense auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-12 md:auto-rows-[200px] md:gap-4 lg:auto-rows-[240px]">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Ampliar foto: ${img.alt}`}
            onClick={(e) => {
              lastTrigger.current = e.currentTarget
              setActive(i)
            }}
            className={`group overflow-hidden ${layout[i % layout.length]}`}
          >
            {/* TODO: reemplazar por foto real de trabajos de Adrián Castillo antes de publicar */}
            <img
              src={img.src}
              alt={img.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </Reveal>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería de fotos ampliada"
          className="fixed inset-0 z-50 flex items-center justify-center bg-footer/95 p-4 md:p-12"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Cerrar galería"
            onClick={close}
            className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center text-background md:right-6 md:top-6"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-background md:left-6"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain"
          />
          <button
            type="button"
            aria-label="Foto siguiente"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-background md:right-6"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </section>
  )
}
