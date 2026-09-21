import type { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'solid' | 'outline'
  /** Sobre fondos oscuros o fotografía (hero, footer). */
  onDark?: boolean
  href?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  ariaLabel?: string
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-none px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-200 min-h-12'

const variants = {
  solid: {
    light: 'bg-text text-background border border-text hover:bg-footer',
    dark: 'bg-background text-text border border-background hover:bg-surface',
  },
  outline: {
    light: 'border border-text text-text hover:bg-text hover:text-background',
    dark: 'border border-background text-background hover:bg-background hover:text-text',
  },
}

export default function Button({
  variant = 'solid',
  onDark = false,
  href,
  external = false,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
  children,
}: ButtonProps) {
  const classes = `${base} ${variants[variant][onDark ? 'dark' : 'light']} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
