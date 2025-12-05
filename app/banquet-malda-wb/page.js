import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUsers, faUtensils, faMicrophone, faPhone, faCheckCircle, faChampagneGlasses, faCakeCandles, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { googleBusinessProfile } from "../layout";

export const metadata = {
  title: "Hotel Landmark Banquet Hall Malda | Weddings & Events",
  description: "Host unforgettable events at Hotel Landmark Banquet Hall in Malda. Perfect venue for weddings, corporate events, and celebrations. Capacity up to 200 guests."
}

export default function Banquet() {
  const features = [
    {
      icon: faUsers,
      title: "Capacity 200 Guests",
      description: "Spacious hall accommodating up to 200 guests comfortably"
    },
    {
      icon: faUtensils,
      title: "Exquisite Cuisine",
      description: "Professional catering with diverse menu options"
    },
    {
      icon: faMicrophone,
      title: "Modern AV Equipment",
      description: "State-of-the-art audio-visual systems"
    },
    {
      icon: faCheckCircle,
      title: "Elegant Ambiance",
      description: "Sophisticated decor and lighting"
    }
  ];

  const eventTypes = [
    {
      icon: faChampagneGlasses,
      title: "Weddings",
      description: "Create magical memories on your special day"
    },
    {
      icon: faBriefcase,
      title: "Corporate Events",
      description: "Professional setting for business gatherings"
    },
    {
      icon: faCakeCandles,
      title: "Celebrations",
      description: "Birthdays, anniversaries, and special occasions"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banquet.png"
            alt="Hotel Landmark Banquet Hall Malda"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-luxury-navy/75"></div>
        </div>
        
        <div className="relative z-10 text-center text-white luxury-container">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
            Hotel Landmark Banquet
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-6">
            Elegant Banquet Hall in Malda
          </p>
          <p className="text-lg mb-4">
            Top Floor | 3rd Floor with Lift Access
          </p>
          <div className="flex items-center justify-center gap-2 text-lg mb-8">
            <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-luxury-gold" />
            <span>Rabindra Avenue, Above Overseas Bank, near Raj Hotel, Malda</span>
          </div>
          <Link href="tel:+917501263184" className="luxury-btn-primary inline-block">
            Book Your Event
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="luxury-section bg-white">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="luxury-heading mb-6">
              Host Unforgettable Celebrations
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Are you searching for the perfect venue to host your next special event in Malda? Look no further! 
              Hotel Landmark Banquet Hall is the ideal setting for creating cherished memories and hosting 
              unforgettable celebrations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team is dedicated to crafting the ideal setting for your special moments, ensuring that 
              every detail is meticulously planned to exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="luxury-section bg-luxury-cream">
        <div className="luxury-container">
          <h2 className="luxury-heading text-center mb-12">
            Why Choose Hotel Landmark Banquet?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={feature.icon} className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-luxury-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="luxury-section bg-white">
        <div className="luxury-container">
          <h2 className="luxury-heading text-center mb-12">
            Perfect for Every Occasion
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {eventTypes.map((event, index) => (
              <div key={index} className="luxury-card p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={event.icon} className="w-10 h-10 text-luxury-gold" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-luxury-navy mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="luxury-section bg-luxury-cream">
        <div className="luxury-container">
          <h2 className="luxury-heading text-center mb-12">
            Explore Our Venue
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/site-photo/banq-5.jpeg", alt: "Banquet Hall Interior" },
              { src: "/site-photo/banq-8.jpeg", alt: "Event Setup" },
              { src: "/site-photo/banq-7.jpeg", alt: "Dining Arrangement" },
              { src: "/site-photo/rest-7.jpg", alt: "Hall Overview" },
              { src: "/site-photo/banq-1.jpeg", alt: "Stage Area" },
              { src: "/site-photo/banq-2.jpeg", alt: "Seating Arrangement" },
              { src: "/site-photo/rest-1.jpg", alt: "Banquet Hall Interior" },
              { src: "/site-photo/rest-2.jpg", alt: "Event Setup" },
              { src: "/site-photo/banq-3.jpeg", alt: "Dining Arrangement" },
              { src: "/site-photo/rest-4.jpg", alt: "Hall Overview" },
              { src: "/site-photo/rest-5.jpg", alt: "Stage Area" },
              { src: "/site-photo/rest-6.jpg", alt: "Seating Arrangement" }
            ].map((image, index) => (
              <div key={index} className="luxury-card overflow-hidden group">
                <div className="relative h-72">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="luxury-section bg-white">
        <div className="luxury-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="luxury-subheading mb-6">
                Exceptional Facilities
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our banquet hall boasts state-of-the-art facilities and amenities to ensure a seamless and 
                enjoyable experience for you and your guests. Our spacious and well-appointed hall is equipped 
                with modern audio-visual equipment, comfortable seating, and ambient lighting to create the 
                perfect atmosphere for your event.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-luxury-gold mt-1" />
                  <span>Spacious hall with elegant interiors</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-luxury-gold mt-1" />
                  <span>Professional sound and lighting systems</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-luxury-gold mt-1" />
                  <span>Comfortable seating arrangements</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-luxury-gold mt-1" />
                  <span>Climate-controlled environment</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-luxury-gold mt-1" />
                  <span>Lift access to top floor banquet hall</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="luxury-subheading mb-6">
                Culinary Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Hotel Landmark Banquet, we understand the importance of good food in making an event truly memorable. 
                Our experienced culinary team is dedicated to delighting your taste buds with a diverse menu 
                of mouth-watering dishes. Whether you prefer traditional local cuisine or international flavors, 
                we have a menu that can be tailored to your preferences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-luxury-gold mt-1" />
                  <span>Customizable menu options</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-luxury-gold mt-1" />
                  <span>Traditional and international cuisine</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-luxury-gold mt-1" />
                  <span>Professional catering staff</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-luxury-gold mt-1" />
                  <span>Vegetarian and non-vegetarian options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Section */}
      <section className="luxury-section bg-luxury-cream">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="luxury-heading mb-6">
              Unmatched Hospitality
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              What sets Hotel Landmark Banquet apart is our commitment to providing unmatched hospitality. Our professional 
              and friendly staff are dedicated to ensuring that every detail of your event is taken care of, 
              allowing you to relax and enjoy the festivities. From event planning to execution, we are here to 
              make your experience stress-free and enjoyable.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-xl text-luxury-navy font-semibold mb-4">
                &ldquo;আপনার বিশেষ দিনটি কি আসছে? হোটেল ল্যান্ডমার্ক ব্যাঙ্কোয়েট হল আপনার জন্য নিখুঁত স্থান।&rdquo;
              </p>
              <p className="text-gray-600">
                আমরা বিবাহ, বাগদান, জন্মদিন, কর্পোরেট অনুষ্ঠান এবং আরও অনেক কিছুর জন্য 
                আড়ম্বরপূর্ণ ও মার্জিত ইভেন্টগুলি হোস্ট করার জন্য নিবেদিত।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="luxury-section bg-luxury-navy text-white">
        <div className="luxury-container text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Book Your Event?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you create an unforgettable celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="tel:+917501263184" className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-navy font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
              <span>Call: +91-75012-63184</span>
            </Link>
            <Link href="https://wa.me/917501263184" target="_blank" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
              WhatsApp Us
            </Link>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="text-luxury-gold hover:text-luxury-gold-light underline text-lg">
              Visit our contact page for more information
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews CTA */}
      <section className="luxury-section bg-white">
        <div className="luxury-container">
          <div className="bg-luxury-cream rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-luxury-navy mb-4">
              See What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don&apos;t just take our word for it - read reviews from our satisfied clients
            </p>
            <Link 
              href={googleBusinessProfile}
              target="_blank"
              className="luxury-btn-primary inline-block"
            >
              Read Reviews on Google
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
