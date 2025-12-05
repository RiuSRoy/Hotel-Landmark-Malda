import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { googleBusinessProfile } from "./layout";

export default function Footer() {
  return (
    <footer className="bg-luxury-navy text-white">
      <div className="luxury-container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/HL.png"
                width={80}
                height={80}
                alt="Hotel Landmark Malda"
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-2">
              Hotel <span className="text-luxury-gold">Landmark</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Experience luxury hospitality in the heart of Malda
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-luxury-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/hotel-malda-wb" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/banquet-malda-wb" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  Banquet Hall
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-luxury-gold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-luxury-gold mt-1" />
                <div>
                  <Link href="tel:+917501263184" className="text-gray-300 hover:text-luxury-gold transition-colors block">
                    +91-75012 63184
                  </Link>
                  <span className="text-gray-400">+(03512) 221184</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-luxury-gold mt-1" />
                <Link href="mailto:landmark2286@gmail.com" className="text-gray-300 hover:text-luxury-gold transition-colors">
                  landmark2286@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 text-luxury-gold mt-1" />
                <span className="text-gray-300">
                  Rabindra Avenue, Malda,<br />West Bengal, 732101
                </span>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-luxury-gold">More</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={googleBusinessProfile} 
                  target="_blank"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  Get Directions
                </Link>
              </li>
              <li>
                <Link 
                  href="https://g.page/r/CY7o7t2FEsdPEBM/review" 
                  target="_blank"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  Write a Review
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy-royal-touch" 
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Hotel Landmark Malda. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Designed with excellence for luxury hospitality
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
