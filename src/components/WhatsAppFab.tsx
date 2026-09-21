import WhatsAppIcon from './WhatsAppIcon'

// Tijeras que "cortan" un par de veces cada pocos segundos. Se detienen con prefers-reduced-motion.
function SnippingScissors({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g className="scissor-blade scissor-blade-a">
        <line x1="20" y1="4" x2="8" y2="16" />
        <circle cx="6" cy="18" r="2.5" />
      </g>
      <g className="scissor-blade scissor-blade-b">
        <line x1="4" y1="4" x2="16" y2="16" />
        <circle cx="18" cy="18" r="2.5" />
      </g>
    </svg>
  )
}

export default function WhatsAppFab({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar cita por WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-text text-background transition-colors hover:bg-footer md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
      <span className="absolute -left-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-text/20 bg-background text-text">
        <SnippingScissors className="h-4 w-4" />
      </span>
    </a>
  )
}
