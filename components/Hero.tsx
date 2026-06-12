"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactForm from './ContactForm';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  
  return (
    <section style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: 'var(--header-height)'
    }}>
      {/* Background with Parallax */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '120%',
          y: y1,
          backgroundImage: 'url(/chauffeur-service-saudi-arabia-hero.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        }}
      />
      {/* Dark overlay for better text readability and premium feel */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, rgba(17,17,17,0.95) 10%, rgba(17,17,17,0.7) 50%, rgba(17,17,17,0.3) 100%)',
        zIndex: -1,
      }} />

      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', 
        gap: '4rem', 
        alignItems: 'center',
        width: '100%',
        zIndex: 10
      }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ paddingBottom: '120px' }}
        >
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.8rem', 
            background: 'rgba(255,255,255,0.08)', 
            padding: '0.6rem 1.6rem', 
            borderRadius: '50px', 
            marginBottom: '2.5rem', 
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--color-gold)' }}>
              <span style={{ fontSize: '1.1rem' }}>★</span>
              <span style={{ fontSize: '1.1rem' }}>★</span>
              <span style={{ fontSize: '1.1rem' }}>★</span>
              <span style={{ fontSize: '1.1rem' }}>★</span>
              <span style={{ fontSize: '1.1rem' }}>★</span>
            </div>
            <span style={{ fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.5px', color: 'rgba(255,255,255,0.95)' }}>
              TGA Licensed Operator • 4.9/5 Rating (500+ Verified Clients)
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', 
            lineHeight: '1.2', 
            marginBottom: '2rem', 
            color: 'var(--color-white)',
            maxWidth: '850px',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}>
            Professional Chauffeur & Private Driver Services <br /> 
            <span style={{ color: 'var(--color-gold)' }}>across Saudi Arabia</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255,255,255,0.8)', 
            marginBottom: '2rem', 
            maxWidth: '650px', 
            lineHeight: '1.8' 
          }}>
            Reliable ground transportation for airport transfers, intercity travel, and daily corporate journeys. Operating under official Saudi transport regulations, our professional drivers ensure punctual and seamless transfers between Riyadh, Jeddah, Makkah, Madinah, and Dammam.
          </p>

          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: '0 0 2.5rem 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            maxWidth: '650px'
          }}>
            {[
              'Professional Drivers',
              'Airport Transfers',
              'Intercity Travel',
              '24/7 Availability',
              'Easy Booking Process'
            ].map((benefit, idx) => (
              <li key={idx} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                color: 'rgba(255,255,255,0.9)', 
                fontSize: '1rem' 
              }}>
                <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span>
                {benefit}
              </li>
            ))}
          </ul>
          
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#booking-form" className="btn-gold" style={{ padding: '1.1rem 3rem', fontSize: '1rem', borderRadius: '50px' }}>
              Book Your Journey
            </a>
          </div>
        </motion.div>

        <motion.div 
          id="booking-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', justifySelf: 'end' }}
        >
          <ContactForm />
        </motion.div>

      </div>
      
      {/* Decorative Gradient Overlay for Bottom */}
      <div style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        width: '100%', 
        height: '150px', 
        background: 'linear-gradient(to top, var(--color-black), transparent)',
        pointerEvents: 'none',
        zIndex: -1
      }}></div>
    </section>
  );
}
