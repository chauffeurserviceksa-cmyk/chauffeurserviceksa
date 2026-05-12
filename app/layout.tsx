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
  title: "Chauffeur Service in Saudi Arabia – Professional Private Drivers",
  description: "Book a professional chauffeur or private driver anywhere in Saudi Arabia. We provide reliable airport transfers, corporate travel, and city-to-city rides with experienced drivers and comfortable vehicles. Available in Riyadh, Jeddah, Makkah, Madinah, and other major cities.",
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
