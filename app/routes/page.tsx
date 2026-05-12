import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FloatingWhatsApp, SocialSidebar } from '@/components/FloatingButtons';
import { routeCategories, slugify } from '@/lib/routesData';
import Link from 'next/link';

export const metadata = {
  title: "City to City Routes | Chauffeur Service KSA",
  description: "Explore all our long-distance intercity chauffeur and private driver routes across Saudi Arabia and the GCC."
};

export default function RoutesPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-black)' }}>
      <Header />
      <SocialSidebar />
      <FloatingWhatsApp />
      
      <section style={{ paddingTop: '150px', paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h1 style={{ color: 'var(--color-gold)', fontSize: '3.8rem', marginBottom: '1.5rem', fontFamily: 'var(--font-playfair)' }}>All Directory Routes</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto', lineHeight: '1.8' }}>
              We provide luxury city-to-city transfers, VIP Hajj & Umrah logistics, and International Cross-Border chauffeur services. Select your desired route below to view details and book.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {routeCategories.map((category, catIdx) => (
              <div key={catIdx} style={{ background: 'rgba(255,255,255,0.02)', padding: '4rem 3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                  <h2 style={{ fontSize: '2.8rem', color: 'white', fontFamily: 'var(--font-playfair)', marginBottom: '0.5rem' }}>
                    {category.name}
                  </h2>
                  <p style={{ color: 'var(--color-gold)', fontSize: '1.1rem' }}>{category.description}</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                   {category.data.map((region, idx) => (
                     <div key={idx}>
                       <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'white', borderBottom: '1px solid rgba(201,162,39,0.3)', paddingBottom: '1rem', fontFamily: 'var(--font-playfair)' }}>
                         {region.region}
                       </h3>
                       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                         {region.routes.map((route, rIdx) => (
                           <Link 
                             key={rIdx} 
                             href={`/routes/${slugify(route)}`}
                             className="route-card-link"
                             style={{ 
                               background: 'rgba(0,0,0,0.5)', 
                               padding: '1.2rem 1.5rem', 
                               borderRadius: '8px',
                               border: '1px solid rgba(255,255,255,0.1)',
                               color: 'white',
                               display: 'flex',
                               alignItems: 'center',
                               justifyContent: 'space-between',
                               transition: 'all 0.3s ease',
                               textDecoration: 'none'
                             }}
                           >
                             <span style={{ fontWeight: 500, fontSize: '1.05rem' }}>{route}</span>
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                           </Link>
                         ))}
                       </div>
                     </div>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
