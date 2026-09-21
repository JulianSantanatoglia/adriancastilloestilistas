# PROMPT — ADRIÁN CASTILLO ESTILISTAS | .js agency

Actúa como un **frontend developer senior + UI/UX designer especializado en webs comerciales premium para pequeños negocios locales**.

Vamos a construir la **landing demo de Adrián Castillo Estilistas**, una peluquería real en la zona de El Zapillo, Almería, para una propuesta comercial de `.js agency`. Hoy el negocio no tiene página web — esta landing es la primera presencia digital que va a tener.

El objetivo no es una web genérica que parezca hecha por IA. Queremos que el dueño, al verla, piense:

> "Esto podría ser la web de mi peluquería."

**Referencia de estilo directa:** misma familia visual que estas demos reales ya construidas por `.js agency` — son la fuente de verdad si hay dudas de un detalle:

- `mmpeluqueria.vercel.app` (María Miralles Peluquería)
- `salondebelleza-five.vercel.app` (Alina Esthetic)

**Nota de público:** las reseñas reales de este negocio mencionan estilistas mujeres ("Laura", "las chicas") y clientas con cabello rizado — todo indica una peluquería **unisex**, no una barbería exclusivamente masculina, aunque el nombre de marca sea el del dueño. Por eso este proyecto sigue el house style claro y cálido de María Miralles/Alina Esthetic, no una dirección oscura de barbería. Si Julián confirma que el enfoque real es distinto, ajustar paleta y tono, pero no asumas "barbería masculina" solo por el nombre.

---

# 1. CONTEXTO DEL PROYECTO

Proyecto ya creado con:

```bash
npm create vite@latest
```

usando React + TypeScript. Trabajá sobre este proyecto existente.

### Instalar y configurar

- Tailwind CSS, correctamente configurado.
- `lucide-react` para iconos. No usar emojis como iconos de interfaz.
- `framer-motion` solo para las animaciones on-scroll de la sección 23.

---

# 2. ESTRUCTURA DE IMÁGENES

**Este cliente todavía no tiene fotos reales.** No hay `public/images/` con material del negocio. Usá fotografía de stock libre de derechos (Unsplash/Pexels, buscando "hair salon interior modern", "hairdresser portrait professional", "hair salon natural products") como placeholder temporal:

- Una foto de salón/peluquería moderna y luminosa para el Hero.
- Un retrato profesional de un estilista para la sección "Sobre nosotros" — usalo como si fuera una foto de Adrián, el dueño, para mostrarle en la propuesta lo bien que queda una foto personal ahí. Dejá un comentario bien visible en el código: `{/* TODO: reemplazar por foto real de Adrián Castillo antes de publicar */}`.
- 4-6 fotos de trabajos de peluquería (cortes, color) para la Galería, también de stock, con el mismo comentario TODO.

No inventes rutas a archivos que no existen — si vas a usar imágenes de stock, que sean URLs reales y funcionales (o, si no hay acceso a internet desde el entorno de desarrollo, bloques de color placeholder con el aspect-ratio correcto y `alt` descriptivo, dejando el mismo comentario TODO).

---

# 3. DATOS CONFIGURABLES

```ts
// src/config/business.ts

export const business = {
  name: "Adrián Castillo Estilistas",
  tagline: "Peluquería con productos naturales en el corazón de Almería",

  phone: "+34 950 08 86 00",
  whatsapp: "34950088600", // mismo número que el teléfono, confirmado por el cliente

  address: "Avenida del Mediterráneo, s/n (esquina C/ La Curva), 04007 Almería, España",
  city: "Almería",

  instagram: null, // PENDIENTE: no confirmado — no mostrar el ícono/link hasta tenerlo

  mapsUrl: "https://www.google.com/maps?q=36.826911,-2.445932",
  mapsEmbedSrc: "https://www.google.com/maps?q=36.826911,-2.445932&z=17&output=embed",
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=36.826911,-2.445932",

  googleRating: 4.3,

  openingHours: {
    monday: "Cerrado",
    tuesday: "10:00–13:30 y 17:00–20:30",
    wednesday: "10:00–13:30 y 17:00–20:30",
    thursday: "10:00–13:30 y 17:00–20:30",
    friday: "10:00–13:30 y 17:00–20:30",
    saturday: "10:00–13:30 y 17:00–20:30",
    sunday: "Cerrado",
  },

  serviceGroups: [
    {
      number: "01",
      title: "Cortes",
      items: [
        { name: "Corte moderno", description: "Cortes actuales adaptados a tu estilo, con atención especializada.", price: null },
      ],
    },
    {
      number: "02",
      title: "Color y cuidado capilar", // PENDIENTE: confirmar con el cliente el listado exacto de servicios de color/tratamiento
      items: [
        { name: "Color y tratamientos", description: "Trabajamos con productos profesionales Aveda, de base natural.", price: null },
      ],
    },
  ], // price:null → no mostrar precio inventado; pedir cita previa recomendado

  aboutFeatures: [
    { label: "PRODUCTOS", value: "Línea profesional Aveda, de base natural" },
    { label: "ATENCIÓN", value: "Especializada, con cita previa" },
    { label: "VALORACIÓN", value: "4,3 en Google" },
  ],

  images: {
    hero: "/images/hero.jpg", // stock temporal, ver sección 2
    about: "/images/founder.jpg", // stock temporal etiquetado como Adrián, ver sección 2
    gallery: [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
    ], // stock temporal, ver sección 2
  },
};

export const reviews = [
  { name: "Irene Salinas Montaño", source: "Google", text: "Desde que estoy con Laura mis rizos parecen otros. Recomiendo 100% ponerse en sus manos, cortes modernos y con estilo, productos naturales que no dejan mis rizos apelmazados. Vine por una recomendación y no puedo estar más contenta." },
  { name: "Nina Klein", source: "Google", text: "Los productos Aveda, con los que trabaja esta peluquería, son de los mejores del mercado. Importante e interesante: los precios son incluso más económicos que otras peluquerías con marcas menos reconocidas." },
  { name: "María Dolores García Fernández", source: "Google", text: "Aparte de tener un entorno agradable, trabajan con productos de calidad, muy importante para la salud de nuestro cabello, y con un gran estilo personalizado." },
];
```

**No hay email ni Instagram confirmados.** Dejalos fuera de la UI (no mostrar un ícono de red social sin link real, no inventar un email). Si Julián los confirma más adelante, se agregan en `business.ts` sin tocar componentes.

---

# 4. OBJETIVO VISUAL

Mismo house style que María Miralles/Alina Esthetic: elegante, minimalista, editorial, cálido, casi monocromático — nunca clínico. El diferencial real de este negocio es el uso de **productos profesionales Aveda de base natural** (confirmado por reseñas reales de clientas) — es un ángulo de valor genuino, no un cliché de marketing, y debe aparecer explícitamente en "Sobre nosotros" y en los servicios.

NO debe parecer una plantilla de SaaS ni un sitio generado automáticamente por IA.

---

# 5. PROHIBICIONES DE DISEÑO

No utilizar: gradientes llamativos, fondos degradados, blobs, formas abstractas decorativas, glassmorphism, tarjetas de servicio con sombra pesada, elementos flotantes innecesarios, sombras exageradas, estética de dashboard/SaaS, exceso de animaciones, neón, colores saturados como acento, textos gigantes sin sentido, decoración sin función.

No quiero tarjetas de servicio tipo:

```text
[ tarjeta con sombra ]
[ tarjeta con sombra ]
```

Usá el formato de lista numerada con divisores de la sección 14.

Botones rectangulares, esquinas a 0 (no píldora): sólido para CTA primario, outline (borde 1px) para CTA secundario. Buen padding, mayúsculas con letter-spacing suave.

---

# 6. COLORES

```text
--color-background: #F8F5F0
--color-surface: #F2ECE4
--color-text: #211D1A
--color-muted: #8A8078
--color-footer: #1A1613
```

Sin acento saturado — el mismo `--color-text` funciona como color de botón sólido y de títulos. Tokens en `tailwind.config.ts`, nunca hex sueltos en componentes.

---

# 7. TIPOGRAFÍA

- Titulares: **Fraunces**.
- Cuerpo y UI: **Manrope**.
- Google Fonts vía `<link>` en `index.html`, `font-display: swap`.
- Eyebrows en mayúscula, `tracking-widest`, color `--color-muted`, arriba de cada sección: "PELUQUERÍA EN ALMERÍA", "SERVICIOS", "SOBRE NOSOTROS", "GALERÍA", "RESEÑAS", "CONTACTO", "HORARIO".

---

# 8. DESKTOP

Aprovechar todo el ancho del viewport, nada de contenido encajonado en `max-width: 1200px` con márgenes enormes.

---

# 9. RESPONSIVE

Mobile-first real: navegación adaptada, botones cómodos, CTA de WhatsApp siempre accesible (botón flotante circular negro fijo en mobile), cero scroll horizontal.

---

# 10. ESTRUCTURA DE LA WEB

1. Header
2. Hero
3. Servicios
4. Sobre nosotros (incluye la mención a Adrián y a los productos Aveda)
5. Galería
6. Reseñas
7. Contacto / Formulario WhatsApp
8. Ubicación y horarios
9. Footer

Reseñas justo antes del formulario de contacto — prueba social inmediatamente antes de pedir la acción. No hay banner de "eventos" en este proyecto (a diferencia de Centro Belleza Natura): no inventes un ángulo comercial que el cliente no pidió.

---

# 11. HEADER

Nombre del negocio en Fraunces + navegación (`Inicio`, `Servicios`, `Sobre nosotros`, `Galería`, `Contacto`) + CTA "Reservar por WhatsApp" en botón sólido. Sticky con transición sutil al hacer scroll.

---

# 12. HERO

Foto real (stock por ahora, sección 2) con scrim sutil, eyebrow "PELUQUERÍA EN ALMERÍA", título grande en Fraunces, línea de descripción corta, badge "4,3 ⭐ en Google", dos CTAs: primario sólido "Reservar por WhatsApp", secundario outline "Ver servicios".

**Texto ya definido para la descripción del Hero:**

> "Cortes modernos, con estilo, y productos profesionales de base natural. Pedí tu cita con antelación."

---

# 13. COPYWRITING

Tono cercano, profesional, natural. Evitar frases como "transformamos tu imagen" o "experiencia revolucionaria". El ángulo real y verificable de este negocio es el uso de productos Aveda de base natural — apoyarse en eso, no en promesas genéricas.

**Texto ya definido para "Sobre nosotros":**

> "En Adrián Castillo Estilistas trabajamos con productos profesionales Aveda, de base natural, y con la misma atención especializada en cada corte, color y tratamiento. Recomendamos pedir cita previa."

---

# 14. SERVICIOS

Usar `business.serviceGroups`. Formato de lista numerada con líneas divisorias, igual que María Miralles/Alina Esthetic — nunca tarjetas. Con `price: null`, no mostrar precio inventado; en su lugar, una nota como "Se recomienda pedir cita previa. Precios a consultar por WhatsApp." — igual de honesto que el patrón ya usado en otros proyectos.

---

# 15. SOBRE NOSOTROS

Dos columnas en desktop: imagen (`images.about`, el retrato de stock etiquetado como Adrián — con el comentario TODO de reemplazo) + texto de la sección 13, seguido de los 3 pares label/valor de `aboutFeatures` (PRODUCTOS / ATENCIÓN / VALORACIÓN), mismo formato que María Miralles. No inventar años de trayectoria del negocio — no están confirmados.

---

# 16. GALERÍA

4-6 fotos de stock de peluquería (cortes, color, ambiente del salón) con el comentario TODO de reemplazo. Grid con tamaños variados, tono consistente entre todas. Lightbox simple con navegación por flechas y teclado. `alt` descriptivo, `loading="lazy"` salvo la primera.

---

# 17. RESEÑAS

Usar `reviews`. Formato simple: cita completa entre comillas + `"{name} · {source}"` debajo en `--color-muted` — igual que María Miralles. Sin tarjetas con sombra ni estrellas grandes. Eyebrow "RESEÑAS" + badge "4,3 ⭐ en Google".

---

# 18. CONTACTO / FORMULARIO WHATSAPP

Mismo patrón validado:

**"¿Qué te querés hacer?"**: `Corte` · `Color` · `Tratamiento capilar` · `Otra consulta`

**"¿Para cuándo?"**: `Esta semana` · `El fin de semana` · `Me adapto al hueco que tengáis`

**Nombre (opcional).** Panel "Mensaje listo para enviar" con texto armado en vivo. Botón sólido "Mandar consulta" → `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(mensaje)}`. Debajo: botón outline "Llamar ahora" (`tel:+34950088600`), link "Cómo llegar", teléfono como fallback visible.

---

# 19. UBICACIÓN Y HORARIOS

Dos columnas en desktop. Mapa embebido compacto (~300-350px de alto):

```html
<iframe
  src="https://www.google.com/maps?q=36.826911,-2.445932&z=17&output=embed"
  width="100%"
  height="320"
  style="border:0"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Ubicación de Adrián Castillo Estilistas en Google Maps"
></iframe>
```

Horarios en filas simples desde `business.openingHours` (lunes y domingo cerrado, martes a sábado en dos turnos). Botón outline "Cómo llegar".

---

# 20. FOOTER

Casi negro (`--color-footer`), 4 columnas:

1. Nombre del negocio + tagline.
2. "Navegación": links a secciones.
3. "Contacto": teléfono, WhatsApp, dirección.
4. "Síguenos": "Próximamente" (no hay redes sociales confirmadas — no inventar un link de Instagram que no existe).

Barra inferior: `© {new Date().getFullYear()} Adrián Castillo Estilistas. Todos los derechos reservados.` + `Aviso legal · Política de privacidad · Política de cookies` (placeholders de una línea).

---

# 21. ICONOGRAFÍA

`lucide-react`: `Scissors`, `Sparkles`, `Phone`, `MapPin`, `Clock`, `Calendar`, `MessageCircle`, `ArrowUpRight`. Sin mezclar estilos, sin iconos gigantes decorativos.

---

# 22. ANIMACIONES

Fade + pequeño desplazamiento on-scroll (`framer-motion` `whileInView`), hover con leve escala en galería. Prohibido: parallax, textos rebotando, loaders innecesarios. Respetar `prefers-reduced-motion`.

---

# 23. SEO

- `<title>`: "Adrián Castillo Estilistas | Peluquería en Almería"
- `<meta name="description">`: "Peluquería en Almería con productos profesionales Aveda de base natural. Cortes modernos y atención especializada. Reserva tu cita por WhatsApp."
- `lang="es"`, HTML5 semántico, headings jerarquizados, `alt` en todas las imágenes, Open Graph básico.

---

# 24. SEO LOCAL

JSON-LD `HairSalon`:

```json
{
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Adrián Castillo Estilistas",
  "image": "URL_ABSOLUTA_DE_HERO",
  "telephone": "+34950088600",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Avenida del Mediterráneo, s/n",
    "postalCode": "04007",
    "addressLocality": "Almería",
    "addressCountry": "ES"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 36.826911, "longitude": -2.445932 }
}
```

No agregar `sameAs` (sin redes confirmadas) ni `aggregateRating` con `reviewCount` inventado — si más adelante se confirma la cantidad total de reseñas de Google, ahí sí se agrega.

---

# 25. ACCESIBILIDAD

Contraste AA, focus states visibles, navegación por teclado, botones/enlaces reales, `aria-label` en CTAs, headings y landmarks correctos, tamaño táctil adecuado.

---

# 26. PERFORMANCE

Imágenes a `.webp` cuando sea posible, `width`/`height` o `aspect-ratio`, lazy loading fuera del primer viewport. Lighthouse mobile >90 en performance y accesibilidad.

---

# 27. ARQUITECTURA DEL CÓDIGO

```text
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   ├── Reviews.tsx
│   ├── ContactForm.tsx
│   ├── LocationMap.tsx
│   └── Footer.tsx
├── config/
│   └── business.ts
├── App.tsx
└── main.tsx
```

Componentes que reciben datos vía props desde `business`/`reviews`, nada hardcodeado en el JSX.

---

# 28. PERSONALIZACIÓN PARA FUTUROS CLIENTES

Aunque este proyecto ya tiene datos reales de Adrián Castillo, el código debe quedar reutilizable para el próximo cliente de peluquería. Al cambiar de cliente, solo debería tocarse `src/config/business.ts`, las imágenes de `public/images/`, y los tokens de color si el nuevo negocio pide otra paleta.

---

# 29. COMPONENTES REUTILIZABLES

`SectionEyebrow`, `Button` (variantes solid/outline), `ServiceGroup`/`ServiceItem`, `ReviewQuote`, `ContactInfoItem`. Equilibrio razonable.

---

# 30. DETALLE SOBRE LA MARCA LOCAL

Almería, zona de Avenida del Mediterráneo/El Zapillo: comercio de proximidad, trato cercano. Sin hashtags de barrio ni frases de campaña institucional.

---

# 31. NO INVENTAR INFORMACIÓN

No hay email, Instagram, precios ni listado detallado de tratamientos confirmados — todo eso queda fuera de la UI o marcado `PENDIENTE`, nunca inventado. Las reseñas y el rating (4,3) sí son reales, usarlos tal cual. Las fotografías son de stock temporal (sección 2), claramente marcadas para reemplazo.

---

# 32. EXPERIENCIA FINAL

La web debe transmitir: **"peluquería local profesional con presencia digital moderna"**, nunca "landing generada por IA". Desde el móvil, sin fricción: saber qué peluquería es → entender que usa productos profesionales Aveda → ver los servicios → ver trabajos → saber dónde está y cuándo abre → contactar por WhatsApp.

---

# 33. CRITERIO DE DISEÑO

Antes de dar por terminada cada sección: **¿esto se ve como María Miralles o Alina Esthetic, o como una plantilla genérica?** Priorizar tipografía + fotografía + composición + espacio + jerarquía por encima de efectos y decoración.

---

# 34. DESARROLLO (orden de trabajo)

1. Inspeccionar estructura actual, `package.json`, config de Vite/TS (no hay imágenes reales que inspeccionar en este proyecto).
2. Instalar y configurar Tailwind.
3. Instalar `lucide-react` y `framer-motion`.
4. Crear `src/config/business.ts` con los datos de la sección 3.
5. Conseguir/generar las imágenes de stock de la sección 2 con sus comentarios TODO.
6. Crear la arquitectura de componentes de la sección 27.
7. Implementar cada sección en el orden de la sección 10.
8. Comprobar responsive, accesibilidad, SEO.
9. Ejecutar el proyecto, confirmar cero errores de TypeScript y de consola.
10. Revisar visualmente contra María Miralles/Alina Esthetic y corregir lo genérico.

---

# 35. CHECK FINAL

- [ ] Tailwind funciona, TS sin errores, sin errores de consola.
- [ ] Todas las imágenes de stock cargan y tienen el comentario TODO de reemplazo.
- [ ] Fraunces + Manrope cargadas correctamente.
- [ ] Paleta casi monocromática aplicada, sin acento saturado.
- [ ] Botones rectangulares (radio 0), variantes solid/outline.
- [ ] Eyebrows arriba de cada sección.
- [ ] Servicios en lista numerada, sin precios inventados, con nota de "cita previa"/"consultar por WhatsApp".
- [ ] Sobre nosotros menciona productos Aveda/naturales y tiene el retrato placeholder de Adrián con su TODO.
- [ ] Reseñas reales (Irene, Nina, María Dolores) en formato cita simple, antes del contacto.
- [ ] Formulario WhatsApp arma el mensaje en vivo y abre `wa.me` con el número correcto.
- [ ] Horarios correctos (lunes y domingo cerrado, martes a sábado en dos turnos).
- [ ] Footer con "Próximamente" en redes (sin Instagram inventado), legales y copyright dinámico.
- [ ] SEO local JSON-LD `HairSalon` sin `sameAs` ni `aggregateRating` inventados.
- [ ] Sin gradientes, blobs, glassmorphism ni estética SaaS.
- [ ] Comparación visual final contra María Miralles/Alina Esthetic: misma familia.

---

# RESULTADO ESPERADO

Landing terminada y visualmente convincente, al nivel de María Miralles y Alina Esthetic, lista para mostrarle a Adrián Castillo como primera presencia digital de su peluquería a través de `.js agency`. Las fotos de stock son temporales — el checklist de la sección 35 debe dejar clarísimo dónde hace falta reemplazarlas por material real antes de publicar.
