import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { googleBusinessProfile } from "../layout";

export const metadata = {
  title: "Contact Hotel Landmark Malda | Book Your Stay",
  description: "Get in touch with Hotel Landmark Malda for room bookings and banquet inquiries. Call us or visit our location in Rabindra Avenue, Malda."
}

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-luxury text-white">
        <div className="luxury-container text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            We&apos;re here to help make your stay or event unforgettable
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="luxury-section bg-white">
        <div className="luxury-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Hotel Contact Card */}
            <div className="luxury-card p-8">
              <h2 className="text-3xl font-heading font-bold text-luxury-navy mb-6">
                Hotel Landmark
              </h2>
              
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <h3 className="font-semibold text-luxury-navy">Phone (Reception)</h3>
                  </div>
                  <div className="ml-13 space-y-2">
                    <Link href="tel:+917501263184" className="block text-gray-600 hover:text-luxury-gold transition-colors">
                      +91-75012 63184
                    </Link>
                    <p className="text-gray-600">+(03512) 221560</p>
                    <p className="text-gray-600">+(03512) 221184</p>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <h3 className="font-semibold text-luxury-navy">Email</h3>
                  </div>
                  <Link href="mailto:landmark2286@gmail.com" className="ml-13 text-gray-600 hover:text-luxury-gold transition-colors">
                    landmark2286@gmail.com
                  </Link>
                </div>

                {/* Address */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <h3 className="font-semibold text-luxury-navy">Address</h3>
                  </div>
                  <p className="ml-13 text-gray-600">
                    Rabindra Avenue, Above Overseas Bank,<br />
                    Near Raj Hotel, Malda,<br />
                    West Bengal, 732101, India
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 space-y-3">
                  <Link href="tel:+917501263184" className="luxury-btn-primary w-full text-center block">
                    Call Now
                  </Link>
                  <Link 
                    href={googleBusinessProfile} 
                    target="_blank"
                    className="luxury-btn-secondary w-full text-center block"
                  >
                    View on Google Maps
                  </Link>
                </div>
              </div>
            </div>

            {/* Banquet Contact Card */}
            <div className="luxury-card p-8">
              <h2 className="text-3xl font-heading font-bold text-luxury-navy mb-6">
                Hotel Landmark Banquet
              </h2>
              
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <h3 className="font-semibold text-luxury-navy">Phone</h3>
                  </div>
                  <div className="ml-13 space-y-2">
                    <div>
                      <Link href="tel:+919475875227" className="block text-gray-600 hover:text-luxury-gold transition-colors">
                        +91-94758 75227
                      </Link>
                      <span className="text-sm text-gray-500">(Banquet Manager)</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <h3 className="font-semibold text-luxury-navy">Email</h3>
                  </div>
                  <Link href="mailto:landmark2286@gmail.com" className="ml-13 text-gray-600 hover:text-luxury-gold transition-colors">
                    landmark2286@gmail.com
                  </Link>
                </div>

                {/* Address */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <h3 className="font-semibold text-luxury-navy">Address</h3>
                  </div>
                  <p className="ml-13 text-gray-600">
                    Rabindra Avenue, Above Overseas Bank,<br />
                    Hotel Landmark Building, 3rd Floor,<br />
                    Malda, West Bengal, 732101, India
                  </p>
                </div>

                {/* Social Media */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-luxury-navy">Follow Us</h3>
                  </div>
                  <div className="flex gap-3">
                    <Link 
                      href="https://www.facebook.com/profile.php?id=100095382827717"
                      target="_blank"
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                    >
                      <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 text-white" />
                    </Link>
                    <Link 
                      href="https://instagram.com/royal_touch_malda"
                      target="_blank"
                      className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-white" />
                    </Link>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 space-y-3">
                  <Link href="tel:+919475875227" className="luxury-btn-primary w-full text-center block">
                    Call Banquet Manager
                  </Link>
                  <Link href="https://wa.me/919475875227" target="_blank" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl w-full text-center block">
                    WhatsApp Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="luxury-section bg-luxury-cream">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="luxury-heading mb-8">
              Quick Contact Options
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Link href="tel:+917501263184" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="font-semibold text-luxury-navy mb-2">Call Hotel</h3>
                <p className="text-gray-600 text-sm">+91-75012 63184</p>
              </Link>

              <Link href="https://wa.me/919641693184" target="_blank" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-semibold text-luxury-navy mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm">Quick messaging</p>
              </Link>

              <Link href={googleBusinessProfile} target="_blank" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faMapPin} className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="font-semibold text-luxury-navy mb-2">Get Directions</h3>
                <p className="text-gray-600 text-sm">Find us on map</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="luxury-section bg-white">
        <div className="luxury-container">
          <h2 className="luxury-heading text-center mb-8">
            Find Us Here
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="luxury-card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.9858254901037!2d88.1417702!3d25.0005976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fafd0d08beb08f%3A0x38ab756ecd2fcb53!2sHotel%20Landmark%20Malda!5e0!3m2!1sen!2sin!4v1702795539511!5m2!1sen!2sin"
                width="100%"
                height="450"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <Link 
                href={googleBusinessProfile}
                target="_blank"
                className="luxury-btn-primary inline-block"
              >
                Open in Google Maps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="luxury-section bg-luxury-navy text-white">
        <div className="luxury-container text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay or event with us today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hotel-malda-wb" className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-navy font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
              View Rooms
            </Link>
            <Link href="/banquet-malda-wb" className="bg-white hover:bg-gray-100 text-luxury-navy font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
              View Banquet Hall
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
