import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Luxury Chauffeur Service Saudi Arabia | Private Driver KSA",
  description: "Experience premium chauffeur and private driver services in Saudi Arabia. VIP airport transfers at Riyadh (RUH) & Jeddah (JED), executive corporate travel, and long-distance intercity rides.",
  alternates: {
    canonical: 'https://chauffeurserviceksa.com',
  },
  verification: {
    google: "dVFvgm7T3nA_Vtxpw31BnKlggjctvFUsUUgd1TAfg6c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body style={{ 
        fontFamily: 'var(--font-poppins)',
        '--font-playfair': playfair.style.fontFamily,
        '--font-poppins': poppins.style.fontFamily 
      } as any}>
        {children}
      </body>
    </html>
  );
}
