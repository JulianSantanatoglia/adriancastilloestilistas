// Única fuente de datos del negocio. Al cambiar de cliente, se edita este archivo.

export interface ServiceItemData {
  name: string
  description: string
  price: string | null
}

export interface ServiceGroupData {
  number: string
  title: string
  items: ServiceItemData[]
}

export interface GalleryImage {
  src: string
  alt: string
}

export type DayKey =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export interface Review {
  name: string
  source: string
  text: string
}

export const business = {
  name: 'Adrián Castillo Estilistas',
  tagline: 'Peluquería con productos naturales en el corazón de Almería',

  phone: '+34 950 08 86 00',
  whatsapp: '34950088600', // mismo número que el teléfono, confirmado por el cliente

  address: 'Avenida del Mediterráneo, s/n (esquina C/ La Curva), 04007 Almería, España',
  city: 'Almería',

  instagram: null as string | null, // PENDIENTE: no confirmado — no mostrar el ícono/link hasta tenerlo

  mapsUrl: 'https://www.google.com/maps?q=36.826911,-2.445932',
  mapsEmbedSrc: 'https://www.google.com/maps?q=36.826911,-2.445932&z=17&output=embed',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=36.826911,-2.445932',

  googleRating: 4.3,

  hero: {
    eyebrow: 'PELUQUERÍA EN ALMERÍA',
    description:
      'Cortes modernos, con estilo, y productos profesionales de base natural. Pide tu cita con antelación.',
  },

  about: {
    eyebrow: 'SOBRE NOSOTROS',
    title: 'Productos naturales, atención especializada',
    text: 'En Adrián Castillo Estilistas trabajamos con productos profesionales Aveda, de base natural, y con la misma atención especializada en cada corte, color y tratamiento. Recomendamos pedir cita previa.',
  },

  servicesNote: 'Se recomienda pedir cita previa. Precios a consultar por WhatsApp.',

  openingHours: {
    monday: 'Cerrado',
    tuesday: '10:00–13:30 y 17:00–20:30',
    wednesday: '10:00–13:30 y 17:00–20:30',
    thursday: '10:00–13:30 y 17:00–20:30',
    friday: '10:00–13:30 y 17:00–20:30',
    saturday: '10:00–13:30 y 17:00–20:30',
    sunday: 'Cerrado',
  } satisfies Record<DayKey, string>,

  serviceGroups: [
    {
      number: '01',
      title: 'Cortes',
      items: [
        {
          name: 'Corte moderno',
          description: 'Cortes actuales adaptados a tu estilo, con atención especializada.',
          price: null,
        },
      ],
    },
    {
      number: '02',
      title: 'Color y cuidado capilar', // PENDIENTE: confirmar con el cliente el listado exacto de servicios de color/tratamiento
      items: [
        {
          name: 'Color y tratamientos',
          description: 'Trabajamos con productos profesionales Aveda, de base natural.',
          price: null,
        },
      ],
    },
  ] as ServiceGroupData[], // price:null → no mostrar precio inventado; pedir cita previa recomendado

  aboutFeatures: [
    { label: 'PRODUCTOS', value: 'Línea profesional Aveda, de base natural' },
    { label: 'ATENCIÓN', value: 'Especializada, con cita previa' },
    { label: 'VALORACIÓN', value: '4,3 en Google' },
  ],

  // Fotos de stock temporales (Unsplash). Sustituir por material real del negocio antes de publicar.
  images: {
    hero: {
      src: '/images/hero.webp',
      alt: 'Interior luminoso de una peluquería moderna con sillones y grandes espejos',
      width: 1920,
      height: 1440,
    },
    about: {
      src: '/images/founder.webp',
      alt: 'Estilista lavando el cabello de una clienta con productos naturales',
      width: 1000,
      height: 1500,
    },
    gallery: [
      { src: '/images/gallery-1.webp', alt: 'Melena rizada natural con volumen y definición' },
      { src: '/images/gallery-2.webp', alt: 'Cabello largo y ondulado con tono lila' },
      { src: '/images/gallery-3.webp', alt: 'Ondas castañas con reflejos, vistas de espaldas' },
      { src: '/images/gallery-4.webp', alt: 'Peinado con cepillo y secador en el salón' },
      { src: '/images/gallery-5.webp', alt: 'Estilista secando el cabello de una clienta en el salón' },
    ] as GalleryImage[],
  },

  contactOptions: {
    services: ['Corte', 'Color', 'Tratamiento capilar', 'Otra consulta'],
    timing: ['Esta semana', 'El fin de semana', 'Me adapto al hueco que tengáis'],
  },

  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre nosotros', href: '#sobre-nosotros' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ],

  legal: ['Aviso legal', 'Política de privacidad', 'Política de cookies'],
}

export const reviews: Review[] = [
  {
    name: 'Irene Salinas Montaño',
    source: 'Google',
    text: 'Desde que estoy con Laura mis rizos parecen otros. Recomiendo 100% ponerse en sus manos, cortes modernos y con estilo, productos naturales que no dejan mis rizos apelmazados. Vine por una recomendación y no puedo estar más contenta.',
  },
  {
    name: 'Nina Klein',
    source: 'Google',
    text: 'Los productos Aveda, con los que trabaja esta peluquería, son de los mejores del mercado. Importante e interesante: los precios son incluso más económicos que otras peluquerías con marcas menos reconocidas.',
  },
  {
    name: 'María Dolores García Fernández',
    source: 'Google',
    text: 'Aparte de tener un entorno agradable, trabajan con productos de calidad, muy importante para la salud de nuestro cabello, y con un gran estilo personalizado.',
  },
]

export const dayLabels: Record<DayKey, string> = {
  monday: 'Lunes',
  tuesday: 'Martes',
  wednesday: 'Miércoles',
  thursday: 'Jueves',
  friday: 'Viernes',
  saturday: 'Sábado',
  sunday: 'Domingo',
}

export type Business = typeof business
