import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface ContactInfoItemProps {
  icon: LucideIcon
  label: string
  children: ReactNode
}

export default function ContactInfoItem({ icon: Icon, label, children }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4 border-t border-text/20 py-5">
      <Icon className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-ink">{label}</p>
        <div className="mt-1 text-base leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
