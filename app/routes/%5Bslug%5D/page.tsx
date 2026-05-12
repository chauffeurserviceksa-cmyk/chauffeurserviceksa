import React from 'react';
import { Metadata } from 'next';
import { parseSlug } from '@/lib/routesData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const route = parseSlug(params.slug);
  return {
    title: route ? `${route.string} Chauffeur Service | Luxury Travel KSA` : 'Chauffeur Service Saudi Arabia',
    description: route ? `Premium chauffeur service from ${route.from} to ${route.to}. Book your private driver for a seamless long-distance intercity journey in KSA.` : 'Luxury intercity chauffeur services.'
  };
}

export default function RoutePage({ params }: { params: { slug: string } }) {
  const route = parseSlug(params.slug);

  if (!route) {
    return <div className="min-h-screen flex items-center justify-center">Route not found. <a href="/">Return to Home</a></div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Route Hero */}
      <section style={{ 
        height: '65vh', 
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(/chauffeur-service-saudi-arabia-hero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>Premium Intercity Transfer</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            {route.from} to {route.to} <br /> 
            <span style={{ color: 'var(--color-gold)' }}>Chauffeur Service</span>
          </h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '0 auto' }}>
            Experience first-class intercity travel with our elite private drivers. Direct, comfortable, and professional transportation from {route.from} to {route.to}.
          </p>
        </div>
      </section>

      {/* Overview & Booking */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Journey Overview</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444', marginBottom: '3rem' }}>
              Travel between {route.from} and {route.to} in absolute comfort and safety. Whether for business or spiritual pilgrimage, our professional chauffeurs manage all the logistics while you relax in our premium luxury fleet.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
               <div style={{ padding: '1.5rem', background: '#f8f8f8', borderRadius: '16px' }}>
                  <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#999', marginBottom: '0.5rem' }}>Travel Time</h4>
                  <p style={{ fontSize: '1.4rem', fontWeight: 600 }}>Approx. 4 - 5 Hours</p>
               </div>
               <div style={{ padding: '1.5rem', background: '#f8f8f8', borderRadius: '16px' }}>
                  <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#999', marginBottom: '0.5rem' }}>Distance</h4>
                  <p style={{ fontSize: '1.4rem', fontWeight: 600 }}>Available Upon Request</p>
               </div>
            </div>

            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Benefits of Hiring a Private Driver</h3>
             <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.1rem' }}><span style={{ color: 'var(--color-gold)', fontSize: '1.5rem' }}>✓</span> Punctual Door-to-Door Service</li>
               <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.1rem' }}><span style={{ color: 'var(--color-gold)', fontSize: '1.5rem' }}>✓</span> Premium Fleet with Wi-Fi & Refreshments</li>
               <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.1rem' }}><span style={{ color: 'var(--color-gold)', fontSize: '1.5rem' }}>✓</span> Professional, Multi-lingual Chauffeurs</li>
               <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.1rem' }}><span style={{ color: 'var(--color-gold)', fontSize: '1.5rem' }}>✓</span> Safe & Discreet VIP Transportation</li>
             </ul>
          </div>
          
          <div style={{ background: '#111', padding: '3.5rem', borderRadius: '24px', color: 'white' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-gold)', textAlign: 'center' }}>Book This Route</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Fleet & Pricing */}
      <section style={{ padding: '8rem 0', background: '#111', color: 'white' }}>
        <div className="container">
           <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', fontFamily: 'var(--font-heading)' }}>Select Your Elite Vehicle</h2>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                 <h4 style={{ color: 'var(--color-gold)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Executive Sedan</h4>
                 <p style={{ marginBottom: '1.5rem', opacity: 0.7 }}>Mercedes S-Class or BMW 7 Series</p>
                 <p style={{ fontSize: '1.4rem', fontWeight: 700 }}>Starting from 800 SAR</p>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                 <h4 style={{ color: 'var(--color-gold)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Premium SUV</h4>
                 <p style={{ marginBottom: '1.5rem', opacity: 0.7 }}>GMC Yukon XL or Cadillac Escalade</p>
                 <p style={{ fontSize: '1.4rem', fontWeight: 700 }}>Starting from 1200 SAR</p>
              </div>
           </div>
        </div>
      </section>

      {/* Route FAQ */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', fontFamily: 'var(--font-heading)' }}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
             <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', fontWeight: 700 }}>How long is the travel time from {route.from} to {route.to}?</h4>
                <p style={{ color: '#666', lineHeight: '1.7', fontSize: '1.1rem' }}>The typical travel time between {route.from} and {route.to} is approximately 4 to 5 hours, depending on traffic and scheduled stops.</p>
             </div>
             <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', fontWeight: 700 }}>Can I book a return journey for this route?</h4>
                <p style={{ color: '#666', lineHeight: '1.7', fontSize: '1.1rem' }}>Yes, we provide round-trip intercity chauffeur services. You can book both ways via our concierge or the booking form above.</p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
