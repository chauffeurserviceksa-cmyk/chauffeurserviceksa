import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact Us | Chauffeur Service KSA',
  description: 'Get in touch with Chauffeur KSA. Book airport transfers, intercity rides, or corporate travel. Available 24/7 by phone, email, or WhatsApp.',
  alternates: {
    canonical: 'https://chauffeurserviceksa.com/contact',
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chauffeur KSA",
    "image": "https://chauffeurserviceksa.com/hero-bg.jpg",
    "telephone": "+966501234567",
    "email": "bookings@chauffeurservice.sa",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "King Fahd Road, Olaya District",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh",
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
    "serviceArea": {
      "@type": "Country",
      "name": "SA"
    },
    "areaServed": ["Riyadh", "Jeddah", "Makkah", "Madinah", "Dammam", "Saudi Arabia"],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966501234567",
      "contactType": "WhatsApp",
      "availableLanguage": ["English", "Arabic"]
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="structured-data-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section style={{ 
        height: '40vh', 
        background: '#111', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}>
            24/7 Premium Concierge Support for Your Chauffeur Bookings.
          </p>
        </div>
      </section>

      {/* Main Info Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem' }}>
          <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', fontFamily: 'var(--font-heading)' }}>Get in Touch</h2>
             <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: '1.8', marginBottom: '3rem' }}>
               Our team is available round the clock to assist you with airport pickups, intercity bookings, and specialized corporate travel requests.
             </p>
             
             <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                   <div style={{ padding: '0.8rem', background: '#f8f8f8', borderRadius: '12px', color: 'var(--color-gold)' }}><Phone size={24} /></div>
                   <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>Booking & Support</h4>
                      <p style={{ color: '#666' }}>+966 50 123 4567</p>
                   </div>
                </li>
                <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                   <div style={{ padding: '0.8rem', background: '#f8f8f8', borderRadius: '12px', color: 'var(--color-gold)' }}><Mail size={24} /></div>
                   <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>Email Inquiries</h4>
                      <p style={{ color: '#666' }}>bookings@chauffeurservice.sa</p>
                   </div>
                </li>
                <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                   <div style={{ padding: '0.8rem', background: '#f8f8f8', borderRadius: '12px', color: 'var(--color-gold)' }}><MapPin size={24} /></div>
                   <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>Corporate Office</h4>
                      <p style={{ color: '#666' }}>King Fahd Road, Olaya District, Riyadh, Saudi Arabia</p>
                   </div>
                </li>
                <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                   <div style={{ padding: '0.8rem', background: '#f8f8f8', borderRadius: '12px', color: '#25D366' }}><MessageCircle size={24} /></div>
                   <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>WhatsApp Concierge</h4>
                      <p style={{ color: '#666' }}>Text us for instant availability checks 24/7.</p>
                   </div>
                </li>
             </ul>
          </div>
          
          <div style={{ background: '#111', padding: '4rem', borderRadius: '24px', color: 'white', alignSelf: 'start' }}>
             <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', color: 'var(--color-gold)', textAlign: 'center' }}>Secure Online Booking</h3>
             <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '8rem 0', background: '#fdfdfd' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Frequently Asked Questions</h2>
            <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>Everything you need to know about our chauffeur services in Saudi Arabia.</p>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#111' }}>How do I book a chauffeur service?</h4>
              <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '2rem' }}>You can book through our online form above, call our support line, or send us a message on WhatsApp. We recommend booking at least 12 hours in advance for guaranteed availability, though we often accommodate last-minute requests.</p>
              
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#111' }}>What payment methods do you accept?</h4>
              <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '2rem' }}>We accept all major credit cards (Visa, Mastercard, AMEX), local Mada cards, and bank transfers. For corporate clients, we offer monthly invoicing and credit terms upon verification.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#111' }}>Are your drivers English-speaking?</h4>
              <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '2rem' }}>Yes, we specialize in serving international clients. All our chauffeurs for executive and VIP services are fluent in English and trained in professional protocol to ensure a seamless communication experience.</p>
              
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#111' }}>What is your cancellation policy?</h4>
              <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '2rem' }}>We offer free cancellation up to 24 hours before your scheduled pickup time. For cancellations made within 24 hours, a small fee may apply. Please refer to your booking confirmation for specific terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ height: '400px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#999', fontSize: '1.2rem', fontWeight: 600 }}>[Interactive Riyadh Map Integration]</p>
      </section>

      <Footer />
    </main>
  );
}
