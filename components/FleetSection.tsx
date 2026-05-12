"use client";
import React from 'react';
import { motion } from 'framer-motion';

const vehicles = [
  { name: 'Mercedes S-Class', type: 'Luxury Sedan', image: '/Cars/mercedes-s-class-chauffeur-service-saudi-arabia.jpeg', pax: 3, luggage: 2, price: '450 SAR' },
  { name: 'BMW 7 Series', type: 'Executive Sedan', image: '/Cars/bmw-7-series-executive-chauffeur-ksa.jpeg', pax: 3, luggage: 2, price: '450 SAR' },
  { name: 'Genesis G90', type: 'Luxury Sedan', image: '/Cars/Genesis G90.jpeg', pax: 3, luggage: 2, price: '500 SAR' },
  { name: 'Ford Taurus', type: 'Executive Sedan', image: '/Cars/Ford Taurus.jpeg', pax: 3, luggage: 2, price: '300 SAR' },
  { name: 'Cadillac Escalade', type: 'VIP SUV', image: '/Cars/cadillac-escalade-vip-chauffeur-saudi-arabia.jpeg', pax: 6, luggage: 5, price: '700 SAR' },
  { name: 'GMC Yukon XL', type: 'Premium SUV', image: '/Cars/gmc-yukon-xl-private-driver-ksa.jpeg', pax: 6, luggage: 6, price: '500 SAR' },
  { name: 'Mercedes V-Class', type: 'Executive Van', image: '/Cars/Mercedes Benz V Class.jpeg', pax: 7, luggage: 7, price: '550 SAR' },
  { name: 'Daihatsu Gran Max', type: 'Standard Van', image: '/Cars/Daihatsu Gran Max.jpeg', pax: 5, luggage: 4, price: '250 SAR' }
];

export default function FleetSection() {
  return (
    <section id="fleet" className="section-dark" style={{ padding: '8rem 0', background: '#111' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>The Collection</span>
          <h2 style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '3.5rem', color: 'var(--color-white)', fontFamily: 'var(--font-heading)' }}>
            Exquisite Luxury Fleet
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '850px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.8' }}>
            Our fleet offers the pinnacle of executive ground transportation. Choose from our meticulously maintained luxury sedans, executive SUVs, and premium vehicles, all operated by professional chauffeurs across Saudi Arabia for a seamless travel experience.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {vehicles.map((v, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{ 
                overflow: 'hidden', 
                borderRadius: '16px', 
                background: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'transform 0.3s ease',
              }}
              whileHover={{ y: -10, borderColor: 'rgba(201,162,39,0.5)' }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img src={v.image} alt={v.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', 
                  top: '1rem', 
                  right: '1rem', 
                  background: 'var(--color-gold)', 
                  color: '#111', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '20px', 
                  fontWeight: 600,
                  fontSize: '0.85rem'
                }}>
                  From {v.price} / day
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <p style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{v.type}</p>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: 'white' }}>{v.name}</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                     <span style={{ fontSize: '0.95rem' }}>{v.pax} Passengers</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 16V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path><path d="M4 16h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"></path><path d="M12 6V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2"></path></svg>
                     <span style={{ fontSize: '0.95rem' }}>{v.luggage} Luggage</span>
                   </div>
                </div>

                <a href="#contact" className="btn-gold" style={{ width: '100%', padding: '1rem', fontSize: '1.05rem', textAlign: 'center', borderRadius: '8px' }}>
                  Reserve Vehicle
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
