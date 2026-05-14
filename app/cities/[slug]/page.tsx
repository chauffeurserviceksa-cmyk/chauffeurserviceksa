import React from 'react';
import { Metadata } from 'next';
import { citiesData } from '@/lib/citiesData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import Script from 'next/script';

export async function generateStaticParams() {
  return Object.keys(citiesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = citiesData[slug.toLowerCase()];
  return {
    title: city ? `${city.title} | Luxury Chauffeur KSA` : 'City Chauffeur Service',
    description: city ? city.metaDescription : 'Premium private driver and chauffeur services in Saudi Arabia.',
    alternates: {
      canonical: `https://chauffeurserviceksa.com/cities/${slug}`,
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = citiesData[slug.toLowerCase()];

  if (!city) {
    return <div>City not found</div>;
  }

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Chauffeur Service",
      "name": `Luxury Chauffeur & Private Driver in ${city.name}`,
      "description": `Premium private driver and chauffeur services in ${city.name}, Saudi Arabia. Elite fleet for airport transfers and city travel.`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Chauffeur KSA"
      },
      "areaServed": {
        "@type": "City",
        "name": city.name
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": `https://chauffeurserviceksa.com/cities/${slug}`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://chauffeurserviceksa.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cities",
          "item": "https://chauffeurserviceksa.com/#cities"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": city.name,
          "item": `https://chauffeurserviceksa.com/cities/${slug}`
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Script
        id={`structured-data-city-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section style={{ 
        height: '60vh', 
        background: '#111', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>
            {city.title}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto' }}>
            Professional private driver and premium airport transfer services in {city.name}.
          </p>
        </div>
      </section>

      {/* Intro & Info */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Chauffeur Service in {city.name}</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem' }}>{city.intro}</p>
            
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>Airport Transfer</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555' }}>{city.airport}</p>
          </div>
          
          <div style={{ background: '#111', padding: '3rem', borderRadius: '24px', color: 'white' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}>Get a Quote for {city.name}</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Routes & Fleet */}
      <section style={{ padding: '8rem 0', background: '#f9f9f9' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Popular Routes from {city.name}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {city.popularRoutes.map((route: string, i: number) => (
                    <li key={i} style={{ padding: '1rem 0', borderBottom: '1px solid #eee', fontSize: '1.1rem' }}>
                      <span style={{ color: 'var(--color-gold)', marginRight: '1rem' }}>→</span> {route}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Top Vehicle Options</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {city.fleet.map((car: string, i: number) => (
                    <div key={i} style={{ background: 'white', padding: '0.8rem 1.5rem', borderRadius: '50px', border: '1px solid #ddd', fontWeight: 600 }}>
                      {car}
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '8rem 0', background: '#111', color: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem', fontFamily: 'var(--font-heading)' }}>
            Why Choose Our {city.name} Chauffeur Service?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: 'var(--color-gold)', fontSize: '1.4rem', marginBottom: '1.2rem' }}>Professional Chauffeurs</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                Our drivers in {city.name} are meticulously vetted and trained in the highest standards of VIP hospitality. They prioritize your safety, privacy, and comfort above all else, ensuring a dignified travel experience every time.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: 'var(--color-gold)', fontSize: '1.4rem', marginBottom: '1.2rem' }}>Punctuality & Reliability</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                Time is your most valuable asset. Whether it's an early morning airport transfer or a tight schedule of business meetings across {city.name}, our chauffeurs use advanced real-time traffic monitoring to guarantee on-time arrivals.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: 'var(--color-gold)', fontSize: '1.4rem', marginBottom: '1.2rem' }}>Impeccable Luxury Fleet</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                Travel in style with our selection of world-class vehicles. Every car in our {city.name} fleet undergoes rigorous daily inspections and deep cleaning, ensuring a pristine, climate-controlled environment for your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', fontFamily: 'var(--font-heading)' }}>FAQs - {city.name} Chauffeur</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {city.faqs.map((faq: any, i: number) => (
              <div key={i} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', fontWeight: 700 }}>{faq.q}</h4>
                <p style={{ color: '#666', lineHeight: '1.7' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
