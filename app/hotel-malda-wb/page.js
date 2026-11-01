import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCheck } from "@fortawesome/free-solid-svg-icons";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata = {
  title: "Rooms in Malda – Economy, Deluxe & Suite",
  description:
    "Business hotel rooms in Malda: Economy, Deluxe and Suite rooms with free Wi-Fi, AC, room service and complimentary breakfast at Hotel Landmark, Rabindra Avenue.",
};

const rooms = [
  {
    id: "economy",
    name: "Economy Room",
    description:
      "A practical, comfortable room for solo travellers on short work trips — everything you need, nothing you don't.",
    image: "/rooms/economy.jpg",
    amenities: ["Free Wi‑Fi", "Air conditioning", "TV", "Room service", "Complimentary breakfast"],
    capacity: "1 guest",
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    description:
      "More room to spread out, with modern furnishings and a layout that works as well for a laptop session as it does for a good night's sleep.",
    image: "/rooms/deluxe.jpeg",
    amenities: ["Free Wi‑Fi", "Air conditioning", "Premium TV", "Room service", "Complimentary breakfast"],
    capacity: "2 guests",
  },
  {
    id: "suite",
    name: "Suite",
    description:
      "Our largest rooms, with a separate seating area — ideal for longer stays, families, or meeting a colleague without leaving the hotel.",
    image: "/rooms/suite-1.jpg",
    amenities: ["Free Wi‑Fi", "Air conditioning", "Premium TV", "Room service", "Living area with sofa", "Complimentary breakfast"],
    capacity: "2–3 guests",
  },
];

const reasons = [
  {
    title: "Central location",
    text: "Minutes from Malda's main market on Rabindra Avenue — easy to reach for meetings across the city.",
  },
  {
    title: "Service at any hour",
    text: "Our housekeeping team is trained to help at any time of day, and guests regularly mention it in reviews.",
  },
  {
    title: "Trusted by business guests",
    text: "More than 70% of our business travellers come back — the best measure we know of a hotel that works.",
  },
  {
    title: "Everything in one building",
    text: "Lift to all three floors, an in-house restaurant and a banquet hall for meetings and events.",
  },
];

export default function Rooms() {
  return (
    <>
      <PageHero
        image="/rooms/deluxe2.jpeg"
        alt="Hotel room in Malda at Hotel Landmark"
        eyebrow="Rooms"
        title="Rooms for business in Malda"
      >
        Clean, quiet and well-equipped rooms in the heart of the city. Pick the size that fits your trip.
      </PageHero>

      <section className="section">
        <div className="container-site space-y-16 md:space-y-24">
          {rooms.map((room, index) => (
            <article key={room.id} id={room.id} className="grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
              <div className={`relative aspect-[4/3] rounded-lg overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={room.image}
                  alt={`${room.name} at Hotel Landmark Malda`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-brand-rust">
                  <FontAwesomeIcon icon={faUsers} className="w-4 h-4" />
                  {room.capacity}
                </p>
                <h2 className="heading mt-3">{room.name}</h2>
                <p className="lead mt-4">{room.description}</p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {room.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-2.5 text-stone-700">
                      <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-brand-amber" />
                      {amenity}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={site.phones.booking.tel} className="btn-primary">
                    Call to book
                  </Link>
                  <Link href={site.phones.booking.whatsapp} target="_blank" className="btn-outline">
                    Ask on WhatsApp
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-white border-y border-brand-line">
        <div className="container-site">
          <p className="eyebrow">Why Hotel Landmark</p>
          <h2 className="heading mt-4 max-w-2xl">The business hotel Malda keeps coming back to</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="border-l-2 border-brand-amber pl-5">
                <h3 className="text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <p className="eyebrow">Around the hotel</p>
          <h2 className="heading mt-4">A look inside</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { src: "/rooms/Reception.jpg", alt: "Hotel Landmark Malda reception", label: "Reception" },
              { src: "/site-photo/rest-1.jpg", alt: "Restaurant at Hotel Landmark Malda", label: "Restaurant", position: "object-[center_30%]" },
              { src: "/site-photo/banq-2.jpeg", alt: "Banquet hall at Hotel Landmark Malda", label: "Banquet hall" },
            ].map((photo) => (
              <figure key={photo.label}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover ${photo.position ?? ""}`}
                  />
                </div>
                <figcaption className="mt-3 text-sm font-medium text-stone-600">{photo.label}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-stone-600">
            Hosting a meeting or event?{" "}
            <Link href="/banquet-malda-wb" className="text-link">
              See our banquet hall and restaurant
            </Link>{" "}
            or{" "}
            <Link href={site.links.googleBusinessProfile} target="_blank" className="text-link">
              read guest reviews on Google
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title="Book your stay"
        text="Call or WhatsApp us for availability and today's rates."
        phone={site.phones.booking}
      />
    </>
  );
}
