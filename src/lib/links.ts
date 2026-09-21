import { business } from '../config/business'

export const DEFAULT_WHATSAPP_MESSAGE = `Hola, me gustaría pedir cita en ${business.name}.`

export const whatsappUrl = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`

export const telUrl = `tel:${business.phone.replace(/\s/g, '')}`
