interface FooterProps {
  name: string
  tagline: string
  nav: { label: string; href: string }[]
  phone: string
  telHref: string
  whatsappHref: string
  address: string
  legal: string[]
}

const heading = 'text-xs font-semibold uppercase tracking-widest text-background/60'
const link = 'underline-offset-4 hover:underline'

export default function Footer({ name, tagline, nav, phone, telHref, whatsappHref, address, legal }: FooterProps) {
  return (
    <footer className="bg-footer px-6 pb-24 pt-16 text-background md:px-12 md:pb-10 lg:px-20">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div>
          <p className="font-display text-2xl">{name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-background/70">{tagline}</p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className={`${heading} font-sans`}>Navegación</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={`${heading} font-sans`}>Contacto</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={telHref} className={link}>
                {phone}
              </a>
            </li>
            <li>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={link}>
                WhatsApp
              </a>
            </li>
            <li>
              <address className="not-italic leading-relaxed text-background/80">{address}</address>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={`${heading} font-sans`}>Síguenos</h2>
          <p className="mt-4 text-sm text-background/80">Próximamente</p>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-3 border-t border-background/15 pt-6 text-xs text-background/70 md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {name}. Todos los derechos reservados.
        </p>
        <p>{legal.join(' · ')}</p>
      </div>
    </footer>
  )
}
