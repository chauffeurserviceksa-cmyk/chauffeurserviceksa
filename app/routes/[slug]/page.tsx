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
    title: `Private Chauffeur from ${routeData.from} to ${routeData.to} | Chauffeur KSA`,
    description: `Book a luxury chauffeur and private driver from ${routeData.from} to ${routeData.to}. Premium vehicles, professional service, and reliable transfers.`
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
                Experience a seamless, comfortable, and luxurious journey from {routeData.from} to {routeData.to}. Our fleet of premium vehicles and professional designated drivers ensure you arrive at your destination refreshed and on time. Let us handle the logistics while you relax.
              </p>

              <div style={{ display: 'flex', gap: '2rem' }}>
                 <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', flex: 1 }}>
                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Door-to-Door Service</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>Direct pickup from your location in {routeData.from} with a smooth ride straight to your destination in {routeData.to}.</p>
                 </div>
                 <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', flex: 1 }}>
                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Premium Amenities</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>Wi-Fi, refreshments, and spacious leather seating to ensure maximum comfort during your travel.</p>
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
             Traveling long distances requires the utmost safety and comfort. Here is why discerning travelers choose Chauffeur KSA for their transportation needs.
           </p>

           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
              <div style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: '#fdfdfd' }}>
                <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <h3 style={{ fontSize: '1.4rem', color: '#111', marginBottom: '1rem' }}>Absolute Safety</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>Our drivers undergo rigorous training and adhere to the highest safety protocols designed for all road conditions.</p>
              </div>
              <div style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: '#fdfdfd' }}>
                <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                <h3 style={{ fontSize: '1.4rem', color: '#111', marginBottom: '1rem' }}>Punctuality Guarantee</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>We value your time. We guarantee on-time pickup and efficient routing to your destination.</p>
              </div>
              <div style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', background: '#fdfdfd' }}>
                <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
                <h3 style={{ fontSize: '1.4rem', color: '#111', marginBottom: '1rem' }}>Fixed Pricing</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>Transparent, upfront pricing with absolutely no hidden costs. Tolls, fuel, and wait times are all included.</p>
              </div>
           </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
