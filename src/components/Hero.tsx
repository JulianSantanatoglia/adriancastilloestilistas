import { Star } from 'lucide-react'
import Button from './Button'
import WhatsAppIcon from './WhatsAppIcon'
import SectionEyebrow from './SectionEyebrow'

interface HeroProps {
  eyebrow: string
  title: string
  description: string
  rating: number
  image: { src: string; alt: string; width: number; height: number }
  whatsappHref: string
}

export default function Hero({ eyebrow, title, description, rating, image, whatsappHref }: HeroProps) {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden text-background">
      {/* TODO: reemplazar por foto real de Adrián Castillo antes de publicar */}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-footer/55" aria-hidden="true" />

      <div className="relative w-full px-6 pb-14 pt-32 md:px-12 md:pb-20 lg:px-20">
        <SectionEyebrow className="text-background/80!">{eyebrow}</SectionEyebrow>
        <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-background/90 md:text-lg">
          {description}
        </p>

        <p className="mt-6 inline-flex items-center gap-2 border border-background/40 px-3 py-1.5 text-sm">
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          <span>{rating.toString().replace('.', ',')} en Google</span>
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappHref} external onDark ariaLabel="Reservar cita por WhatsApp">
            <WhatsAppIcon className="h-4 w-4" />
            Reservar por WhatsApp
          </Button>
          <Button href="#servicios" variant="outline" onDark>
            Ver servicios
          </Button>
        </div>
      </div>
    </section>
  )
}
