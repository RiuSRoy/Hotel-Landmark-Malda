import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faWifi, faSnowflake, faUser, faLocationDot, faStar, faPhone, faChampagneGlasses, faMapPin} from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full">
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cover2.png"
            alt="Hotel Landmark Malda - Luxury Hospitality"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/80 to-luxury-charcoal/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white luxury-container">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Welcome to Hotel Landmark
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
            Experience luxury hospitality in the heart of Malda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hotel-malda-wb" className="luxury-btn-primary">
              Explore Rooms
            </Link>
            <Link href="tel:+919641693184" className="luxury-btn-secondary">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Banquet Highlight Banner */}
      <section className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light py-4">
        <Link href="/banquet-malda-wb" className="block">
          <div className="luxury-container text-center">
            <p className="text-luxury-navy font-semibold text-lg md:text-xl flex items-center justify-center gap-3">
              <FontAwesomeIcon icon={faChampagneGlasses} className="w-6 h-6" />
              <span>✨ HOTEL LANDMARK BANQUET HALL FOR YOUR SPECIAL EVENTS ✨</span>
              <span className="hidden sm:inline">→</span>
            </p>
          </div>
        </Link>
      </section>

      {/* Welcome Section */}
      <section className="luxury-section bg-white">
        <div className="luxury-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="luxury-heading">
                Feel the Difference
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Welcome to Hotel Landmark, the premier destination for travelers in Malda, West Bengal. 
                Nestled in the heart of the city, our hotel offers luxurious accommodations and exceptional 
                amenities that ensure your stay is unforgettable.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a retention rate of over 70%, we are proud to be the favorite choice among business 
                travelers. Experience the perfect blend of comfort, elegance, and hospitality.
              </p>
              <Link href="/hotel-malda-wb" className="luxury-btn-primary inline-block">
                Discover Our Rooms
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image 
                src="/HL.png" 
                alt="Hotel Landmark Logo" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Images */}
      <section className="luxury-section bg-luxury-cream">
        <div className="luxury-container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="luxury-card group">
              <div className="relative h-[400px]">
                <Image 
                  src="/rooms/Reception.jpg" 
                  alt="Hotel Landmark Exterior" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="luxury-card overflow-hidden group">
              <div className="relative h-[400px]">
                <Image 
                  src="/rooms/entrance.jpeg" 
                  alt="Hotel Landmark Entrance" 
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-luxury-navy text-white py-6">
        <div className="luxury-container">
          <div className="flex items-center justify-center gap-3 text-center">
            <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-luxury-gold" />
            <p className="text-sm md:text-base">
              Rabindra Avenue, Above Overseas Bank, near Raj Hotel, Malda
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="luxury-section bg-white">
        <div className="luxury-container">
          <h2 className="luxury-heading text-center mb-12">
            Premium Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 luxury-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faWifi} className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-semibold text-luxury-navy mb-2">Free WiFi</h3>
              <p className="text-sm text-gray-600">High-speed internet</p>
            </div>
            <div className="text-center p-6 luxury-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faMapPin} className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-semibold text-luxury-navy mb-2">Prime Location</h3>
              <p className="text-sm text-gray-600">Heart of Malda</p>
            </div>
            <div className="text-center p-6 luxury-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faSnowflake} className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-semibold text-luxury-navy mb-2">Air Conditioning</h3>
              <p className="text-sm text-gray-600">Climate controlled</p>
            </div>
            <div className="text-center p-6 luxury-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-semibold text-luxury-navy mb-2">Room Service</h3>
              <p className="text-sm text-gray-600">24/7 availability</p>
            </div>
            <div className="text-center p-6 luxury-card col-span-2 md:col-span-4">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Our 3-storey hotel features lift facility for easy access. Parking space is not available on premises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="luxury-section bg-luxury-cream">
        <div className="luxury-container">
          <div className="text-center mb-12">
            <h2 className="luxury-heading">
              Fine Accommodations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of elegantly appointed rooms designed for your comfort
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="luxury-card">
              <div className="relative h-64">
                <Image 
                  src="/rooms/deluxe2.jpeg" 
                  alt="Economy Room" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold text-luxury-navy mb-2">Economy</h3>
                <p className="text-gray-600">Comfortable and affordable</p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="relative h-64">
                <Image 
                  src="/rooms/deluxe.jpeg" 
                  alt="Deluxe Room" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold text-luxury-navy mb-2">Deluxe</h3>
                <p className="text-gray-600">Premium comfort and style</p>
              </div>
            </div>
            <div className="luxury-card">
              <div className="relative h-64">
                <Image 
                  src="/rooms/suite-1.jpg" 
                  alt="Suite Room" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold text-luxury-navy mb-2">Suite</h3>
                <p className="text-gray-600">Ultimate luxury experience</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/hotel-malda-wb" className="luxury-btn-primary">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="luxury-section bg-white">
        <div className="luxury-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="luxury-heading">
                In-House Restaurant
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Savor delicious cuisine at our in-house restaurant. Experience a delightful dining 
                atmosphere with a menu crafted to satisfy every palate.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
                  Multi-cuisine menu
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
                  Comfortable dining ambiance
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
                  Room service available
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
                  Fresh, quality ingredients
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] md:h-[500px] luxury-card overflow-hidden">
              <Image 
                src="/rooms/in-house-restro.jpg" 
                alt="In-House Restaurant at Hotel Landmark" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banquet Preview */}
      <section className="luxury-section bg-luxury-cream">
        <div className="luxury-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] luxury-card overflow-hidden">
              <Image 
                src="/banquet.png" 
                alt="Banquet Hall" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="luxury-heading">
                Elegant Banquet Hall
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Host your special events in our state-of-the-art banquet hall. Perfect for weddings, 
                corporate events, and celebrations of all kinds.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
                  Capacity up to 200 guests
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
                  Modern audio-visual equipment
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
                  Professional catering services
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
                  Elegant ambiance
                </li>
              </ul>
              <Link href="/banquet-malda-wb" className="luxury-btn-primary">
                Explore Banquet Hall
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="luxury-section bg-luxury-navy text-white">
        <div className="luxury-container text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for reservations and inquiries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="tel:+919641693184" className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-navy font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
              <span>Call: +91-96416-93184</span>
            </Link>
            <Link href="https://wa.me/919641693184" target="_blank" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="luxury-section bg-luxury-cream">
        <div className="luxury-container">
          <div className="text-center mb-12">
            <h2 className="luxury-heading">
              Guest Reviews
            </h2>
            <p className="text-xl text-gray-600">
              See what our guests have to say
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon key={star} icon={faStar} className="w-8 h-8 text-luxury-gold" />
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-8 italic">
              &ldquo;If you loved us, tell others! If you hated us, tell us!&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://g.page/r/CY7o7t2FEsdPEBM/review" 
                target="_blank"
                className="luxury-btn-primary"
              >
                Rate Us on Google
              </Link>
              <Link 
                href="http://wa.me/919435117480" 
                target="_blank"
                className="luxury-btn-secondary"
              >
                Send Feedback
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
