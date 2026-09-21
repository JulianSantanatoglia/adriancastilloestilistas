import Reveal from './Reveal'
import SectionEyebrow from './SectionEyebrow'

interface AboutProps {
  eyebrow: string
  title: string
  text: string
  features: { label: string; value: string }[]
  image: { src: string; alt: string; width: number; height: number }
}

export default function About({ eyebrow, title, text, features, image }: AboutProps) {
  return (
    <section id="sobre-nosotros" className="bg-surface px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          {/* TODO: reemplazar por foto real de Adrián Castillo antes de publicar */}
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{title}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg">{text}</p>

          <dl className="mt-10 max-w-xl">
            {features.map((f) => (
              <div
                key={f.label}
                className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-text/20 py-4 sm:grid-cols-[10rem_1fr]"
              >
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-ink">
                  {f.label}
                </dt>
                <dd className="text-base">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
