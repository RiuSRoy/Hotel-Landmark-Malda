'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="luxury-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
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
          <button 
            className="md:hidden text-luxury-navy focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          <Link 
            href="/" 
            className="block text-luxury-charcoal hover:text-luxury-gold transition-colors py-2"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            href="/hotel-malda-wb" 
            className="block text-luxury-charcoal hover:text-luxury-gold transition-colors py-2"
            onClick={closeMenu}
          >
            Rooms
          </Link>
          <Link 
            href="/banquet-malda-wb" 
            className="block text-luxury-charcoal hover:text-luxury-gold transition-colors py-2"
            onClick={closeMenu}
          >
            Banquet
          </Link>
          <Link 
            href="/contact" 
            className="block luxury-btn-primary text-center text-sm"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
