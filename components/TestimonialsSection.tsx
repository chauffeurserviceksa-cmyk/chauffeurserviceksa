"use client";
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Ahmad Al-Saud', role: 'Business Executive', quote: 'Absolutely flawless service. The driver was 15 minutes early, the S-Class was immaculate, and the entire ride from Riyadh Airport was smooth and professional.' },
  { name: 'Sarah O.', role: 'Tourist', quote: 'We booked them for a full day in Jeddah. Our chauffeur was incredibly polite, knew all the best routes, and made our trip stress-free. Highly recommended!' },
  { name: 'Khalid M.', role: 'Corporate Client', quote: 'The only chauffeur service we trust for our VIP delegates. Their attention to detail and punctuality is unmatched in Saudi Arabia.' }
];

export default function TestimonialsSection() {
  return (
    <section className="section-white" style={{ padding: '8rem 0', background: '#f5f5f5' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Social Proof</span>
          <h2 style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '3.5rem', color: 'var(--color-black)', fontFamily: 'var(--font-heading)' }}>
            What Our Clients Say
          </h2>
          <p style={{ color: '#555', maxWidth: '750px', margin: '0 auto 2.5rem', fontSize: '1.25rem', lineHeight: '1.8' }}>
            Trusted by travelers, executives, and pilgrims across Saudi Arabia. Experience why we are the official Kingdom choice for premium chauffeur services.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ color: 'var(--color-gold)', fontSize: '1.5rem', display: 'flex', gap: '0.2rem' }}>
              {"★★★★★"}
            </div>
            <p style={{ color: '#111', fontWeight: 600, fontSize: '1.2rem' }}>
              Rated 4.9/5 by 500+ satisfied clients.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                position: 'relative'
              }}
            >
              <div style={{ color: 'var(--color-gold)', fontSize: '2rem', marginBottom: '1rem', fontFamily: 'serif' }}>"</div>
              <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem', fontStyle: 'italic' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-gold)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 600 }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-black)', fontSize: '1.1rem' }}>{t.name}</h4>
                  <span style={{ color: '#888', fontSize: '0.9rem' }}>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
