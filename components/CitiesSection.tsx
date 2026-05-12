"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const cities = [
  { slug: 'riyadh', name: 'Riyadh', img: '/blogs/private-driver-riyadh-saudi-arabia.jpeg', alt: 'Private Driver Riyadh Saudi Arabia' },
  { slug: 'jeddah', name: 'Jeddah', img: '/blogs/airport-transfer-jeddah-chauffeur.jpeg', alt: 'Airport Transfer Jeddah Saudi Arabia' },
  { slug: 'makkah', name: 'Makkah', img: '/blogs/luxury-chauffeur-service-makkah.jpeg', alt: 'Luxury Chauffeur Service Makkah Saudi Arabia' },
  { slug: 'madinah', name: 'Madinah', img: '/blogs/chauffeur-service-madinah-saudi-arabia.jpeg', alt: 'Private Chauffeur Madinah Saudi Arabia' },
  { slug: 'dammam', name: 'Dammam', img: '/blogs/dammam-chauffeur-service-saudi-arabia.jpeg', alt: 'Luxury Chauffeur Dammam Saudi Arabia' }
];

export default function CitiesSection() {
  return (
    <section id="cities" className="section-white" style={{ background: '#fdfdfd', padding: '8rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Our Network</span>
          <h2 style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '3.5rem', color: 'var(--color-black)', fontFamily: 'var(--font-heading)' }}>
            Cities We Serve
          </h2>
          <p style={{ color: '#555', maxWidth: '850px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.8' }}>
            Our elite chauffeur services are available across Saudi Arabia’s most important hubs. We provide premier luxury transportation in major cities such as Riyadh, Jeddah, Makkah, Madinah, and Dammam.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '2rem' 
        }}>
          {cities.map((city, i) => (
            <Link href={`/cities/${city.slug}`} key={i}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{
                  position: 'relative',
                  aspectRatio: '4 / 5',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                }}
              >
                <img src={city.img} alt={city.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.15)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%', height: '100%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '2rem'
                }}>
                  <h3 style={{ color: 'white', fontSize: '1.6rem', fontFamily: 'var(--font-poppins)', fontWeight: 600 }}>{city.name}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
