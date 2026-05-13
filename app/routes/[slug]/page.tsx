import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FloatingWhatsApp, SocialSidebar } from '@/components/FloatingButtons';
import ContactForm from '@/components/ContactForm';
import { parseSlug, slugify, routeCategories } from '@/lib/routesData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const allParams: { slug: string }[] = [];
  routeCategories.forEach(category => {
    category.data.forEach(region => {
      region.routes.forEach(route => {
        allParams.push({ slug: slugify(route) });
      });
    });
  });
  return allParams;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const routeData = parseSlug(slug);
  if (!routeData) return { title: 'Route Not Found | Chauffeur KSA' };
  return {
    title: `${routeData.from} to ${routeData.to} | Chauffeur KSA`,
    description: `Book a luxury chauffeur and private driver from ${routeData.from} to ${routeData.to}. Premium vehicles, professional service, and reliable transfers.`,
    alternates: {
      canonical: `https://chauffeurserviceksa.com/routes/${slug}`,
    },
  };
}

export default async function RouteDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const routeData = parseSlug(slug);
  
  if (!routeData) {
    notFound();
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-black)' }}>
      <Header />
      <SocialSidebar />
      <FloatingWhatsApp />
      
      <section style={{ 
        paddingTop: '150px', 
        paddingBottom: '8rem',
        background: 'linear-gradient(to bottom, rgba(201,162,39,0.05), transparent)' 
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr)', gap: '4rem', alignItems: 'center' }}>
            
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '30px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>VIP Private Transfer</span>
              </div>
              
              <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2', fontFamily: 'var(--font-playfair)' }}>
                Private Chauffeur from <br/>
                <span style={{ color: 'var(--color-gold)' }}>{routeData.from}</span> to <span style={{ color: 'var(--color-gold)' }}>{routeData.to}</span>
              </h1>
              
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                Travel from {routeData.from} to {routeData.to} in comfort. Our drivers are on time, every time. Sit back and enjoy the ride.
              </p>

              <div style={{ display: 'flex', gap: '2rem' }}>
                 <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', flex: 1 }}>
                    <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Door-to-Door Service</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>We pick you up from {routeData.from} and drop you off at {routeData.to}. No stops, no hassle.</p>
                 </div>
                 <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', flex: 1 }}>
                    <h2 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Premium Amenities</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>Enjoy Wi-Fi, drinks, and wide leather seats on every trip.</p>
                 </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', zIndex: 10 }}>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#fff', textAlign: 'center' }}>
         <div className="container">
           <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>The Advantage</span>
           <h2 style={{ fontSize: '2.5rem', color: '#111', marginBottom: '1.5rem', marginTop: '0.5rem', fontFamily: 'var(--font-playfair)' }}>
             Why book your {routeData.from} to {routeData.to} trip with us?
           </h2>
           <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
             Long trips need a driver you can trust. Here is why travelers pick Chauffeur KSA.
           </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginBottom: '6rem' }}>
              <div style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: '#fdfdfd' }}>
                <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <h3 style={{ fontSize: '1.4rem', color: '#111', marginBottom: '1rem' }}>Absolute Safety</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>All our drivers are trained and tested. They follow strict safety rules on every road. We ensure that every vehicle undergoes a rigorous multi-point inspection before every journey to guarantee your peace of mind.</p>
              </div>
              <div style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: '#fdfdfd' }}>
                <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                <h3 style={{ fontSize: '1.4rem', color: '#111', marginBottom: '1rem' }}>Punctuality Guarantee</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>We pick you up on time, every time. Your schedule is our priority. Our advanced tracking systems allow us to monitor traffic patterns and flight timings in real-time, ensuring we are always there waiting for you.</p>
              </div>
              <div style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: '#fdfdfd' }}>
                <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
                <h3 style={{ fontSize: '1.4rem', color: '#111', marginBottom: '1rem' }}>Fixed Pricing</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>No surprises. The price you see includes tolls, fuel, and waiting time. We believe in transparent luxury, which is why our quotes are all-inclusive with no hidden surcharges or unexpected fees at the end of your trip.</p>
              </div>
            </div>

            <div style={{ textAlign: 'left', background: '#111', color: 'white', padding: '4rem', borderRadius: '24px' }}>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', fontFamily: 'var(--font-playfair)' }}>Exceptional Service from {routeData.from} to {routeData.to}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    When you book a private driver from {routeData.from} to {routeData.to}, you are choosing more than just a ride. You are choosing a premium travel experience tailored to your exact needs. Our professional chauffeurs are experts in navigating the long-distance highways of Saudi Arabia, ensuring a smooth and efficient transition between cities.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                    Whether you are traveling for a high-stakes business meeting, a family visit, or a spiritual journey for Umrah, we provide the ultimate environment for productivity or relaxation. Our vehicles are equipped with high-speed Wi-Fi, premium refreshments, and climate control to make the desert heat a non-issue.
                  </p>
                </div>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Safety is at the core of our operations. All our drivers undergo rigorous background checks and continuous training in defensive driving and VIP protocol. This commitment to excellence has made us the preferred chauffeur service for diplomats and executives across the Kingdom.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                    We understand that travel plans can change. That's why we offer 24/7 customer support and a flexible booking policy. If your flight is delayed or your meeting runs over, your chauffeur will be there, waiting with a smile and a helping hand for your luggage.
                  </p>
                </div>
              </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
