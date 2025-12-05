import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google';
import Link from 'next/link'
import { initGA, logPageView } from '../analytics';
import Footer from './footer';

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
        {/* Luxury Navigation */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
          <div className="luxury-container">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <span className="text-2xl md:text-3xl font-heading font-bold text-luxury-navy">
                  Hotel <span className="text-luxury-gold">Landmark</span>
                </span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-200 font-medium">
                  Home
                </Link>
                <Link href="/hotel-malda-wb" className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-200 font-medium">
                  Rooms
                </Link>
                <Link href="/banquet-malda-wb" className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-200 font-medium">
                  Banquet
                </Link>
                <Link href="/contact" className="luxury-btn-primary text-sm">
                  Contact Us
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-luxury-navy">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <Link href="/" className="block text-luxury-charcoal hover:text-luxury-gold transition-colors">
                Home
              </Link>
              <Link href="/hotel-malda-wb" className="block text-luxury-charcoal hover:text-luxury-gold transition-colors">
                Rooms
              </Link>
              <Link href="/banquet-malda-wb" className="block text-luxury-charcoal hover:text-luxury-gold transition-colors">
                Banquet
              </Link>
              <Link href="/contact" className="block luxury-btn-primary text-center text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>

        {children}
        <Footer/>
      </body>
    </html>
  )
}

export const googleBusinessProfile = "https://maps.app.goo.gl/8qn2799ytFekerMP8"
