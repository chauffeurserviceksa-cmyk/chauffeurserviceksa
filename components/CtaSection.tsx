"use client";
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="section-dark" style={{ 
      padding: '8rem 0',
      background: 'url(https://images.unsplash.com/photo-1549645062-8230722cc8f4?auto=format&fit=crop&w=1600&q=80)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)' }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white', fontFamily: 'var(--font-heading)' }}>
            Ready for a <span style={{ color: 'var(--color-gold)' }}>First-Class</span> Ride?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', maxWidth: '750px', margin: '0 auto 3rem', lineHeight: '1.9' }}>
            Whether it's an airport transfer, an important business meeting, or a VIP event, we have the perfect luxury vehicle and professional chauffeur ready for you.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-gold" style={{ padding: '1.2rem 3.5rem', fontSize: '1rem', borderRadius: '50px', fontWeight: 700, textTransform: 'none' }}>
              Book Now
            </a>
            <a href="https://wa.me/+966501234567" className="btn-gold" style={{ background: 'transparent', color: 'white', border: '2px solid white', padding: '1.2rem 3.5rem', fontSize: '1rem', borderRadius: '50px', fontWeight: 700, textTransform: 'none' }} onMouseEnter={e => {e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#111'}} onMouseLeave={e => {e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'}}>
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
