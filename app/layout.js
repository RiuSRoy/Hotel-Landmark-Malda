import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google';
import { initGA, logPageView } from '../analytics';
import Footer from './footer';
import Navigation from '@/components/Navigation';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
});

const metadata = {
  title: {
    default: `Hotel Landmark Malda: Luxury Hospitality | Premium Rooms & Banquet Hall`,
    template: `%s | Hotel Landmark Malda`
  },
  description: 'Experience luxury hospitality at Hotel Landmark Malda. Premium rooms and elegant banquet hall for weddings, corporate events, and special occasions. Book your perfect stay today.'
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head />
      <body>
        <Navigation />
        {children}
        <Footer/>
      </body>
    </html>
  )
}

export const googleBusinessProfile = "https://maps.app.goo.gl/8qn2799ytFekerMP8"
