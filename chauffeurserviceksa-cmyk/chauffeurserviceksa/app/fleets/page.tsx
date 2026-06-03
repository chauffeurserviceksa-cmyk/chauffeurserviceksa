import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FleetSection from '@/components/FleetSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fleets | Chauffeur Service KSA',
  description: 'Explore our luxurious fleet of vehicles for executive travel, airport transfers, and city tours across Saudi Arabia.',
  alternates: {
    canonical: 'https://chauffeurserviceksa.com/fleets',
  },
};

export default function FleetsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <FleetSection />
      <Footer />
    </main>
  );
}
