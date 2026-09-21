import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Button from './Button'
import WhatsAppIcon from './WhatsAppIcon'

interface HeaderProps {
  name: string
  nav: { label: string; href: string }[]
  whatsappHref: string
}

export default function Header({ name, nav, whatsappHref }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open
  const tone = solid ? 'text-text' : 'text-background'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300 ${
        solid ? 'border-b border-text/10 bg-background' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="flex h-16 items-center justify-between px-6 md:h-20 md:px-12 lg:px-20">
        <a
          href="#inicio"
          className={`font-display text-lg tracking-tight transition-colors duration-300 md:text-xl ${tone}`}
        >
          {name}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:opacity-70 ${tone}`}
            >
              {item.label}
            </a>
          ))}
          <Button href={whatsappHref} external onDark={!solid} className="py-3">
            Reservar por WhatsApp
          </Button>
        </nav>

        <button
          type="button"
          className={`-mr-2 flex h-12 w-12 items-center justify-center lg:hidden ${tone}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Principal móvil"
          className="flex h-[calc(100svh-4rem)] flex-col justify-between overflow-y-auto bg-background px-6 pb-8 pt-4 lg:hidden"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-text/15">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-5 font-display text-2xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={whatsappHref} external className="w-full">
            <WhatsAppIcon className="h-4 w-4" />
            Reservar por WhatsApp
          </Button>
        </nav>
      )}
    </header>
  )
}
