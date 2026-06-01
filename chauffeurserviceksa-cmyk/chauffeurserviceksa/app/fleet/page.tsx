import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FleetSection from '@/components/FleetSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fleet | Chauffeur Service KSA',
  description: 'Explore our premium fleet of luxury vehicles for executive transport across Saudi Arabia.',
  alternates: {
    canonical: 'https://chauffeurserviceksa.com/fleet',
  },
};

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header />
      <FleetSection />
      <Footer />
    </main>
  );
}
