import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCheck, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";
import { categories, roomTypes, categoryById, guestLabel } from "@/lib/rooms";

export const metadata = {
  title: "Rooms in Malda – Single, Double, Triple & Suite",
  description:
    "Business hotel rooms in Malda for 1, 2 or 3 guests: Single, Double and Triple rooms in Economy and Deluxe, plus Suites with an additional room for an assistant. Free Wi-Fi, AC and complimentary breakfast at Hotel Landmark, Rabindra Avenue.",
};

const guestGroups = [1, 2, 3].map((guests) => ({
  guests,
  id: `guests-${guests}`,
  label: `${guests} guest${guests > 1 ? "s" : ""}`,
  rooms: roomTypes.filter((room) => room.guests === guests && room.category !== "suite"),
}));

const suite = roomTypes.find((room) => room.category === "suite");

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

const whatsappFor = (room) =>
  `${site.phones.booking.whatsapp}?text=${encodeURIComponent(`Hi, I'd like to book a ${room.name} room at Hotel Landmark.`)}`;

function BookingButtons({ room }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={site.phones.booking.tel} className="btn-primary">
        <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
        Call to book
      </Link>
      <Link href={whatsappFor(room)} target="_blank" className="btn-outline">
        <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
        WhatsApp
      </Link>
    </div>
  );
}

function RoomPhoto({ room, sizes }) {
  const category = categoryById[room.category];
  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      <Image
        src={room.image ?? category.image}
        alt={`${room.name} room in Malda at Hotel Landmark`}
        fill
        sizes={sizes}
        className="object-cover"
      />
      {!room.image && (
        <span className="absolute bottom-3 left-3 rounded bg-brand-ink/75 px-2 py-1 text-[11px] font-medium text-white">
          Representative photo
        </span>
      )}
    </div>
  );
}

function RoomCard({ room }) {
  const category = categoryById[room.category];
  return (
    <article id={room.id} className="card scroll-mt-28 flex flex-col">
      <RoomPhoto room={room} sizes="(min-width: 768px) 50vw, 100vw" />
      <div className="p-6 md:p-7 flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-brand-amber/15 px-2.5 py-1 text-xs font-semibold text-brand-brown">
            {category.name}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-stone-500">
            <FontAwesomeIcon icon={faUsers} className="w-3.5 h-3.5" />
            {guestLabel(room)}
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold">{room.name}</h3>
        <p className="mt-2 mb-6 text-sm text-stone-600">{category.amenities.join(" · ")}</p>
        <div className="mt-auto pt-6 border-t border-brand-line">
          <BookingButtons room={room} />
        </div>
      </div>
    </article>
  );
}

export default function Rooms() {
  const suiteCategory = categoryById.suite;

  return (
    <>
      <PageHero
        image="/rooms/show.jpeg"
        alt="Hotel room in Malda at Hotel Landmark"
        eyebrow="Rooms"
        title="Rooms for business in Malda"
      >
        {roomTypes.length} room types for 1, 2 or 3 guests, in Economy or Deluxe — plus Suites with an additional room for guests travelling with an assistant.
      </PageHero>

      {/* Comfort levels */}
      <section className="section pb-10 md:pb-12">
        <div className="container-site">
          <p className="eyebrow">Choose your comfort</p>
          <h2 className="heading mt-4">Three levels, one standard of service</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <div key={category.id} className="card p-6 md:p-7">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="mt-2 text-sm text-stone-600">{category.summary}</p>
                <ul className="mt-5 space-y-2">
                  {category.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-2.5 text-sm text-stone-700">
                      <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-brand-amber" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border-l-4 border-brand-amber bg-white p-5 md:p-6 text-stone-700">
            <p>
              <span className="font-semibold text-brand-ink">Breakfast &amp; room service: </span>
              Complimentary breakfast is served in our restaurant from {site.breakfastHours} and is not
              available as room service. Room service is available for lunch and dinner.
            </p>
          </div>
        </div>
      </section>

      {/* Jump links by guest count */}
      <nav aria-label="Rooms by number of guests" className="sticky top-16 md:top-20 z-40 bg-brand-sand/95 backdrop-blur border-y border-brand-line">
        <div className="container-site py-3 flex items-center gap-2 overflow-x-auto">
          <span className="mr-2 shrink-0 text-sm font-semibold text-brand-ink">How many guests?</span>
          {guestGroups.map((group) => (
            <Link
              key={group.id}
              href={`#${group.id}`}
              className="shrink-0 rounded-full border border-brand-ink/15 bg-white px-4 py-1.5 text-sm font-medium text-brand-ink hover:border-brand-amber"
            >
              {group.label}
            </Link>
          ))}
          <Link
            href="#suite"
            className="shrink-0 rounded-full border border-brand-ink/15 bg-white px-4 py-1.5 text-sm font-medium text-brand-ink hover:border-brand-amber"
          >
            Suite
          </Link>
        </div>
      </nav>

      {/* Rooms grouped by guest count */}
      {guestGroups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={`section scroll-mt-28 ${index % 2 === 0 ? "" : "bg-white border-y border-brand-line"}`}
        >
          <div className="container-site">
            <p className="eyebrow">{group.label}</p>
            <h2 className="heading mt-4">
              {group.guests === 1 ? "Rooms for solo travellers" : group.guests === 2 ? "Rooms for two" : "Rooms for three"}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {group.rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Suite */}
      <section id="suite" className="section scroll-mt-28 bg-brand-ink">
        <div className="container-site grid gap-10 md:grid-cols-2 md:items-center">
          <div className="rounded-lg overflow-hidden">
            <RoomPhoto room={suite} sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <div>
            <p className="eyebrow !text-brand-amber">Suite · {guestLabel(suite)}</p>
            <h2 className="heading mt-4 !text-white">The Suite</h2>
            <p className="mt-4 text-lg text-stone-300 leading-relaxed">{suiteCategory.summary}</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {suiteCategory.amenities.map((amenity) => (
                <li key={amenity} className="flex items-center gap-2.5 text-stone-200">
                  <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-brand-amber" />
                  {amenity}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={site.phones.booking.tel} className="btn-primary">
                <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
                Call to book
              </Link>
              <Link href={whatsappFor(suite)} target="_blank" className="btn-outline-light">
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white border-b border-brand-line">
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
