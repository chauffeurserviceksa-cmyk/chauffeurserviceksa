"use client";
import { ShieldCheck, Clock4, Award, User, Plane, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: <User size={40} />, title: 'Professional Chauffeurs', text: 'Highly trained and experienced chauffeurs with deep local knowledge of Saudi roads.' },
  { icon: <Award size={40} />, title: 'Luxury Vehicles', text: 'An elite fleet of impeccably maintained, late-model luxury sedans and executive SUVs.' },
  { icon: <Plane size={40} />, title: 'Reliable Airport Transfers', text: 'Punctual meet-and-greet services at all major Saudi airports with flight tracking.' },
  { icon: <Briefcase size={40} />, title: 'Corporate Travel Solutions', text: 'Tailored chauffeur services for executives, business delegations, and corporate events.' },
  { icon: <Clock4 size={40} />, title: 'Punctual Service', text: 'Real-time traffic monitoring ensures our chauffeurs are always on time, every time.' },
  { icon: <ShieldCheck size={40} />, title: 'Absolute Discretion', text: 'Confidential and highly discreet transportation for VIPs, diplomats, and private guests.' }
];

export default function FeaturesSection() {
  return (
    <section className="section-dark" style={{ background: '#111', padding: '8rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>The Difference</span>
            <h2 style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '3rem', lineHeight: '1.1' }}>
              Why Choose Our Chauffeur Service
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              We pride ourselves on offering more than just a ride. We offer an experience characterized by absolute discretion, uncompromised safety, and unmatched luxury. 
            </p>
            <a href="#contact" className="btn-gold" style={{ padding: '1rem 2rem', borderRadius: '8px' }}>Book Your Ride</a>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  padding: '2rem', 
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'white' }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', fontSize: '0.95rem' }}>{f.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
