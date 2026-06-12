import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import FleetSection from '../components/FleetSection';
import CitiesSection from '../components/CitiesSection';
import RoutesSection from '../components/RoutesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import { FloatingWhatsApp, SocialSidebar } from '../components/FloatingButtons';
import Script from 'next/script';

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://chauffeurserviceksa.com/#organization",
      "name": "Chauffeur KSA",
      "url": "https://chauffeurserviceksa.com",
      "logo": "https://chauffeurserviceksa.com/app/icon.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966501234567",
        "contactType": "customer service",
        "email": "info@chauffeurserviceksa.com"
      },
      "sameAs": [
        "https://facebook.com/chauffeurksa",
        "https://twitter.com/chauffeurksa",
        "https://instagram.com/chauffeurksa"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://chauffeurserviceksa.com/#localbusiness",
      "name": "Chauffeur KSA",
      "image": "https://chauffeurserviceksa.com/chauffeur-service-saudi-arabia-hero.webp",
      "url": "https://chauffeurserviceksa.com",
      "telephone": "+966501234567",
      "email": "bookings@chauffeurservice.sa",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "King Fahd Road, Olaya District",
        "addressLocality": "Riyadh",
        "addressRegion": "Riyadh Province",
        "postalCode": "12211",
        "addressCountry": "SA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.7136,
        "longitude": 46.6753
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": ["Riyadh", "Jeddah", "Makkah", "Madinah", "Dammam", "Saudi Arabia"],
      "priceRange": "$$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a chauffeur service cost in Saudi Arabia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chauffeur service rates in Saudi Arabia start at approximately 250 SAR to 700 SAR per day depending on the vehicle class (e.g. Ford Taurus, GMC Yukon XL, Mercedes S-Class) and booking type (hourly, daily, intercity)."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide Umrah transfers from Jeddah Airport to Makkah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in luxury private transfers for Umrah pilgrims. Our chauffeurs meet guests at King Abdulaziz International Airport (JED) in Jeddah and transport them directly to their hotel in Makkah or Madinah."
          }
        }
      ]
    }
  ];

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Script
        id="structured-data-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <Hero />
      <TrustSection />
      
      {/* About Company Snippet */}
      <section id="about" className="section-padding section-dark text-center">
         <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Welcome to Chauffeur KSA</span>
            <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', margin: '1rem 0 2rem', lineHeight: 1.2 }}>Defining Professional Ground Transportation in Saudi Arabia</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.15rem', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
              <p>
                Chauffeur KSA is a fully licensed ground transportation company operating under the regulations of the Transport General Authority (TGA) of Saudi Arabia. With a physical headquarters located in the Olaya District, Riyadh, we offer bespoke travel solutions for diplomats, corporate executives, and international guests across the Kingdom.
              </p>
              <p>
                We specialize in reliable <a href="/services" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>airport transfer services</a> at King Khalid International Airport (RUH) in Riyadh and King Abdulaziz International Airport (JED) in Jeddah, alongside professional <a href="/services" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>private chauffeur drivers</a> for intercity business trips and spiritual Hajj & Umrah transfers to Makkah and Madinah. We guarantee 100% punctuality, absolute privacy, and a pristine <a href="/fleet" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>modern vehicle fleet</a>.
              </p>
            </div>
         </div>
      </section>

      <ServicesSection />
      <FeaturesSection />
      <FleetSection />
      <CtaSection />
      <CitiesSection />
      <RoutesSection />
      <TestimonialsSection />
      <FaqSection />
      
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
