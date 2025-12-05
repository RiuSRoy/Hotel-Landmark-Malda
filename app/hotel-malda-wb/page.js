import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUsers, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { googleBusinessProfile } from "../layout";

export const metadata = {
  title: "Luxury Rooms in Malda | Hotel Landmark",
  description: "Experience comfort and elegance in our premium rooms. Choose from Economy, Deluxe, and Suite accommodations at Hotel Landmark Malda."
}

export default function Rooms() {
  const rooms = [
    {
      id: "economy",
      name: "Economy Room",
      description: "Perfect for budget-conscious travelers seeking comfort and convenience. Our economy rooms offer all essential amenities for a pleasant stay.",
      image: "/rooms/economy.jpg",
      amenities: ["Free WiFi", "Air Conditioning", "TV", "Room Service", "Complimentary Breakfast"],
      capacity: "1 Guest"
    },
    {
      id: "deluxe",
      name: "Deluxe Room",
      description: "Experience premium comfort with our deluxe rooms featuring elegant furnishings, modern amenities, and spacious layouts.",
      image: "/rooms/deluxe.jpeg",
      amenities: ["Free WiFi", "Air Conditioning", "Premium TV", "Room Service", "Complimentary Breakfast" ],
      capacity: "2 Guests"
    },
    {
      id: "suite",
      name: "Luxury Suite",
      description: "Indulge in ultimate luxury with our spacious suites offering separate living areas, premium furnishings, and exceptional comfort.",
      image: "/rooms/suite-1.jpg",
      amenities: ["Free WiFi", "Air Conditioning", "Premium TV", "Room Service", "Living Area with sofa", "Complimentary Breakfast"],
      capacity: "2-3 Guests"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rooms/Reception.jpg"
            alt="Hotel Landmark Rooms"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-luxury-navy/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white luxury-container">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Luxury Accommodations
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Experience the finest hospitality in Malda
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="luxury-section bg-white">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="luxury-subheading mb-6">
              The Best Business Hotel in Malda
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Welcome to Hotel Landmark, the most sought-after destination for travelers in Malda, West Bengal. 
              Our hotel is nestled in the heart of Malda amidst the bustling city life. Whether you are here for 
              business or leisure, our luxurious accommodations and exceptional amenities will ensure that your 
              stay is unforgettable.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Hotel Landmark, we believe that every detail matters. That is why we have created a warm and 
              inviting atmosphere, complete with beautiful furnishings, plush linens, and all the modern 
              conveniences you need to feel at home.
            </p>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="luxury-section bg-luxury-cream">
        <div className="luxury-container">
          <div className="text-center mb-12">
            <h2 className="luxury-heading">
              Choose Your Perfect Room
            </h2>
            <p className="text-xl text-gray-600">
              Each room is designed with your comfort in mind
            </p>
          </div>

          <div className="space-y-16">
            {rooms.map((room, index) => (
              <div 
                key={room.id} 
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`luxury-card overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative h-[400px]">
                    <Image
                      src={room.image}
                      alt={`${room.name} at Hotel Landmark Malda`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-luxury-navy mb-4">
                    {room.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {room.description}
                  </p>
                  
                  <div>
                    <div className="flex items-center gap-2 text-luxury-gold mb-4">
                      <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
                      <span className="font-semibold">{room.capacity}</span>
                    </div>
                    
                    <h4 className="font-semibold text-luxury-navy mb-3">Amenities:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-700">
                          <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-luxury-gold" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Images Gallery */}
      <section className="luxury-section bg-white">
        <div className="luxury-container">
          <h2 className="luxury-heading text-center mb-12">
            Explore Our Property
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="luxury-card overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/rooms/exterior.jpg"
                  alt="Hotel Landmark Exterior View"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-luxury-navy">Exterior</h3>
              </div>
            </div>
            <div className="luxury-card overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/rooms/entrance.jpeg"
                  alt="Hotel Landmark Entrance"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-luxury-navy">Entrance</h3>
              </div>
            </div>
            <div className="luxury-card overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/rooms/in-house-restro.jpg"
                  alt="In-House Restaurant"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-luxury-navy">In-House Restaurant</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="luxury-section bg-luxury-cream">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="luxury-heading text-center mb-12">
              Why Choose Hotel Landmark?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-heading font-semibold text-luxury-navy mb-4">
                  Prime Location
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Located just minutes from the main market attractions of Malda, our hotel offers 
                  unparalleled convenience for both business and leisure travelers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-heading font-semibold text-luxury-navy mb-4">
                  Exceptional Service
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our housekeeping staff is specially trained to meet every need at any hour of the day. 
                  Guests consistently rave about our amazing service.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-heading font-semibold text-luxury-navy mb-4">
                  Business Traveler Favorite
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With a retention rate of over 70%, we are proud to be the preferred choice among 
                  business travelers visiting Malda.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-heading font-semibold text-luxury-navy mb-4">
                  Modern Amenities
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All rooms feature modern conveniences including free WiFi, air conditioning, 
                  and 24/7 room service. Our 3-storey hotel is equipped with lift facility for easy access to all floors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banquet CTA */}
      <section className="luxury-section bg-white">
        <div className="luxury-container">
          <div className="bg-gradient-luxury text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Planning an Event?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Check out our state-of-the-art banquet hall, perfect for weddings, corporate events, 
              and special celebrations.
            </p>
            <Link href="/banquet-malda-wb" className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-navy font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
              Explore Banquet Hall
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="luxury-section bg-luxury-navy text-white">
        <div className="luxury-container text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Book Your Stay Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the best hospitality Malda has to offer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+919641693184" className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-navy font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
              <span>Call: +91-96416-93184</span>
            </Link>
            <Link href="https://wa.me/919641693184" target="_blank" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
              WhatsApp Us
            </Link>
          </div>
          <div className="mt-8">
            <Link 
              href={googleBusinessProfile}
              target="_blank"
              className="text-luxury-gold hover:text-luxury-gold-light underline"
            >
              Read our reviews on Google
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
