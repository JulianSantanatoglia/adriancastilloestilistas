interface SectionEyebrowProps {
  children: string
  className?: string
}

export default function SectionEyebrow({ children, className = '' }: SectionEyebrowProps) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-widest text-muted-ink ${className}`}>
      {children}
    </p>
  )
}
