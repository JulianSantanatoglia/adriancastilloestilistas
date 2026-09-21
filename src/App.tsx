import { MotionConfig } from 'framer-motion'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import LocationMap from './components/LocationMap'
import Reviews from './components/Reviews'
import Services from './components/Services'
import WhatsAppFab from './components/WhatsAppFab'
import { business, reviews } from './config/business'
import { telUrl, whatsappUrl } from './lib/links'

export default function App() {
  const whatsappHref = whatsappUrl()

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:px-4 focus:py-3"
      >
        Saltar al contenido
      </a>
      <Header name={business.name} nav={business.nav} whatsappHref={whatsappHref} />
      <main id="contenido">
        <Hero
          eyebrow={business.hero.eyebrow}
          title={business.tagline}
          description={business.hero.description}
          rating={business.googleRating}
          image={business.images.hero}
          whatsappHref={whatsappHref}
        />
        <Services
          groups={business.serviceGroups}
          note={business.servicesNote}
          whatsappHref={whatsappHref}
        />
        <About
          eyebrow={business.about.eyebrow}
          title={business.about.title}
          text={business.about.text}
          features={business.aboutFeatures}
          image={business.images.about}
        />
        <Gallery images={business.images.gallery} />
        <Reviews reviews={reviews} rating={business.googleRating} />
        <ContactForm
          businessName={business.name}
          phone={business.phone}
          telHref={telUrl}
          address={business.address}
          directionsUrl={business.mapsDirectionsUrl}
          services={business.contactOptions.services}
          timing={business.contactOptions.timing}
        />
        <LocationMap
          businessName={business.name}
          address={business.address}
          mapsEmbedSrc={business.mapsEmbedSrc}
          directionsUrl={business.mapsDirectionsUrl}
          openingHours={business.openingHours}
        />
      </main>
      <Footer
        name={business.name}
        tagline={business.tagline}
        nav={business.nav}
        phone={business.phone}
        telHref={telUrl}
        whatsappHref={whatsappHref}
        address={business.address}
        legal={business.legal}
      />
      <WhatsAppFab href={whatsappHref} />
    </MotionConfig>
  )
}
