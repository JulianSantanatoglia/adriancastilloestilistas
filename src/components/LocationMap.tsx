import { ArrowUpRight } from 'lucide-react'
import { dayLabels, type DayKey } from '../config/business'
import Button from './Button'
import Reveal from './Reveal'
import SectionEyebrow from './SectionEyebrow'

interface LocationMapProps {
  businessName: string
  address: string
  mapsEmbedSrc: string
  directionsUrl: string
  openingHours: Record<DayKey, string>
}

const order: DayKey[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
const jsDayToKey: DayKey[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

export default function LocationMap({
  businessName,
  address,
  mapsEmbedSrc,
  directionsUrl,
  openingHours,
}: LocationMapProps) {
  const today = jsDayToKey[new Date().getDay()]

  return (
    <section id="ubicacion" className="bg-surface px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <Reveal>
        <SectionEyebrow>HORARIO</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">Dónde estamos y cuándo abrimos</h2>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <iframe
            src={mapsEmbedSrc}
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Ubicación de ${businessName} en Google Maps`}
            className="h-[320px] w-full md:h-[340px]"
          />
          <p className="mt-4 text-sm text-muted-ink">{address}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl>
            {order.map((day) => (
              <div
                key={day}
                className="flex items-baseline justify-between gap-6 border-t border-text/20 py-3.5 last:border-b"
              >
                <dt className={day === today ? 'font-semibold' : ''}>
                  {dayLabels[day]}
                  {day === today && (
                    <span className="ml-2 text-xs font-semibold uppercase tracking-widest text-muted-ink">
                      Hoy
                    </span>
                  )}
                </dt>
                <dd
                  className={`text-right ${openingHours[day] === 'Cerrado' ? 'text-muted-ink' : ''} ${
                    day === today ? 'font-semibold' : ''
                  }`}
                >
                  {openingHours[day]}
                </dd>
              </div>
            ))}
          </dl>
          <Button
            href={directionsUrl}
            external
            variant="outline"
            className="mt-8"
            ariaLabel="Cómo llegar en Google Maps"
          >
            Cómo llegar
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
