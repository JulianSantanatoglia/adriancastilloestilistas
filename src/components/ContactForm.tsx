import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { whatsappUrl } from '../lib/links'
import Button from './Button'
import WhatsAppIcon from './WhatsAppIcon'
import ContactInfoItem from './ContactInfoItem'
import Reveal from './Reveal'
import SectionEyebrow from './SectionEyebrow'

interface ContactFormProps {
  businessName: string
  phone: string
  telHref: string
  address: string
  directionsUrl: string
  services: string[]
  timing: string[]
}

interface ChoiceGroupProps {
  legend: string
  name: string
  options: string[]
  value: string | null
  onChange: (value: string) => void
}

function ChoiceGroup({ legend, name, options, value, onChange }: ChoiceGroupProps) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="peer sr-only"
            />
            <span className="inline-flex min-h-11 items-center border border-text/40 px-4 py-2 text-sm transition-colors peer-checked:border-text peer-checked:bg-text peer-checked:text-background peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 hover:border-text">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function ContactForm({
  businessName,
  phone,
  telHref,
  address,
  directionsUrl,
  services,
  timing,
}: ContactFormProps) {
  const [service, setService] = useState<string | null>(null)
  const [when, setWhen] = useState<string | null>(null)
  const [name, setName] = useState('')

  const message = [
    name.trim() ? `Hola, soy ${name.trim()}.` : 'Hola.',
    `Me gustaría pedir cita en ${businessName}.`,
    service ? `Me interesa: ${service}.` : null,
    when ? `Para cuándo: ${when}.` : null,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id="contacto" className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <SectionEyebrow>CONTACTO</SectionEyebrow>
          <h2 className="mt-4 text-3xl leading-tight md:text-5xl">Pide tu cita</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed">
            Cuéntanos qué te quieres hacer y te respondemos por WhatsApp. Recomendamos pedir cita
            con antelación.
          </p>

          <div className="mt-10 max-w-md">
            <ContactInfoItem icon={Phone} label="Teléfono">
              <a href={telHref} className="underline-offset-4 hover:underline">
                {phone}
              </a>
            </ContactInfoItem>
            <div className="border-b border-text/20">
              <ContactInfoItem icon={MapPin} label="Dirección">
                <address className="not-italic">{address}</address>
              </ContactInfoItem>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault()
              window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
            }}
          >
            <ChoiceGroup
              legend="¿Qué te quieres hacer?"
              name="servicio"
              options={services}
              value={service}
              onChange={setService}
            />
            <ChoiceGroup
              legend="¿Para cuándo?"
              name="cuando"
              options={timing}
              value={when}
              onChange={setWhen}
            />

            <div>
              <label htmlFor="nombre" className="text-sm font-semibold">
                Nombre <span className="font-normal text-muted-ink">(opcional)</span>
              </label>
              <input
                id="nombre"
                type="text"
                autoComplete="given-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-3 block min-h-12 w-full rounded-none border border-text/40 bg-background px-4 text-base focus:border-text"
              />
            </div>

            <div className="bg-surface p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-ink">
                Mensaje listo para enviar
              </p>
              <p className="mt-3 text-base leading-relaxed" aria-live="polite">
                {message}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" ariaLabel="Mandar consulta por WhatsApp">
                <WhatsAppIcon className="h-4 w-4" />
                Mandar consulta
              </Button>
              <Button href={telHref} variant="outline" ariaLabel={`Llamar al ${phone}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Llamar ahora
              </Button>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] underline-offset-4 hover:underline sm:ml-2"
              >
                Cómo llegar
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <p className="text-sm text-muted-ink">
              O llámanos directamente al{' '}
              <a href={telHref} className="text-text underline underline-offset-4">
                {phone}
              </a>
              .
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
