import type { ServiceGroupData } from '../config/business'
import Button from './Button'
import WhatsAppIcon from './WhatsAppIcon'
import Reveal from './Reveal'
import SectionEyebrow from './SectionEyebrow'
import ServiceGroup from './ServiceGroup'

interface ServicesProps {
  groups: ServiceGroupData[]
  note: string
  whatsappHref: string
}

export default function Services({ groups, note, whatsappHref }: ServicesProps) {
  return (
    <section id="servicios" className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <Reveal>
        <SectionEyebrow>SERVICIOS</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
          Cortes, color y cuidado del cabello
        </h2>
      </Reveal>

      <div className="mt-14 space-y-14 md:mt-20 md:space-y-16">
        {groups.map((group) => (
          <Reveal key={group.number}>
            <ServiceGroup group={group} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 flex flex-col gap-6 border-t border-text/20 pt-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-ink">{note}</p>
        <Button href={whatsappHref} external variant="outline" className="self-start">
          <WhatsAppIcon className="h-4 w-4" />
          Consultar por WhatsApp
        </Button>
      </Reveal>
    </section>
  )
}
