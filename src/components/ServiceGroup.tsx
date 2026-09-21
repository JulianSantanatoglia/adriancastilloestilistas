import type { ServiceGroupData, ServiceItemData } from '../config/business'

function ServiceItem({ item }: { item: ServiceItemData }) {
  return (
    <li className="flex flex-col gap-2 border-t border-text/20 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
      <div className="max-w-xl">
        <h4 className="font-display text-xl">{item.name}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-ink">{item.description}</p>
      </div>
      {item.price && (
        <p className="shrink-0 font-display text-xl tabular-nums">{item.price}</p>
      )}
    </li>
  )
}

export default function ServiceGroup({ group }: { group: ServiceGroupData }) {
  return (
    <div className="grid gap-4 md:grid-cols-12 md:gap-10">
      <div className="flex items-baseline gap-4 md:col-span-4 md:pt-6">
        <span className="font-display text-sm text-muted-ink" aria-hidden="true">
          {group.number}
        </span>
        <h3 className="font-display text-2xl md:text-3xl">{group.title}</h3>
      </div>
      <ul className="md:col-span-8">
        {group.items.map((item) => (
          <ServiceItem key={item.name} item={item} />
        ))}
      </ul>
    </div>
  )
}
