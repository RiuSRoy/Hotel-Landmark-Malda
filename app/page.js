import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faWifi,
  faSnowflake,
  faMugHot,
  faElevator,
  faLocationDot,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";
import { categories, roomTypes } from "@/lib/rooms";

const facts = [
  { value: String(roomTypes.length), label: "Room types" },
  { value: "200", label: "Guest banquet hall" },
  { value: "70%+", label: "Business guests return" },
  { value: "Free", label: "Breakfast in our restaurant" },
];

const reasons = [
  {
    icon: faLocationDot,
    title: "Central location",
    text: "On Rabindra Avenue, minutes from Malda's main market and business district.",
  },
  {
    icon: faWifi,
    title: "Wi‑Fi in every room",
    text: "Free high-speed internet so you can work from your room.",
  },
  {
    icon: faSnowflake,
    title: "Air-conditioned rooms",
    text: "Clean, quiet, climate-controlled rooms with fresh linen.",
  },
  {
    icon: faMugHot,
    title: "Breakfast included",
    text: `Complimentary breakfast in our restaurant, ${site.breakfastHours}. Room service for lunch and dinner.`,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-ink">
        <Image
          src="/rooms/Reception.jpg"
          alt="Reception and lobby of Hotel Landmark, business hotel in Malda"
          fill
          priority
          sizes="100vw"
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-ink via-brand-ink/80 to-brand-ink/20" />
        <div className="container-site py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="eyebrow !text-brand-amber">Business hotel · {site.address.short}</p>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] !text-white">
              Your base for business in Malda.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-stone-200 leading-relaxed">
              Well-kept rooms in the city centre, a banquet hall for up to 200 guests and an in-house
              restaurant — all under one roof.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href={site.phones.booking.tel} className="btn-primary">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                Call to book
              </Link>
              <Link href={site.phones.booking.whatsapp} target="_blank" className="btn-outline-light">
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                Book on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="bg-white border-b border-brand-line">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-line">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-white px-4 py-7 text-center">
                <p className="font-display text-3xl font-semibold text-brand-ink">{fact.value}</p>
                <p className="mt-1 text-sm text-stone-500">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why stay */}
      <section className="section">
        <div className="container-site grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">{site.tagline}</p>
            <h2 className="heading mt-4">Built around the working traveller</h2>
            <p className="lead mt-5">
              Hotel Landmark is the hotel of choice for people visiting Malda on business. More than 70%
              of our business guests stay with us again — because the rooms are clean, the location is
              convenient and the team gets the basics right every time.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-amber/15 text-brand-brown">
                    <FontAwesomeIcon icon={reason.icon} className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-base">{reason.title}</h3>
                    <p className="mt-1 text-sm text-stone-600 leading-relaxed">{reason.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="/rooms/Reception.jpg"
              alt="Reception of Hotel Landmark, business hotel in Malda"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="section bg-white border-y border-brand-line">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="eyebrow">Rooms</p>
              <h2 className="heading mt-4">Three ways to stay</h2>
            </div>
            <Link href="/hotel-malda-wb" className="text-link">
              See all {roomTypes.length} room types in Malda
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} href="/hotel-malda-wb" className="card group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={category.image}
                    alt={`${category.name} room at Hotel Landmark Malda`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="mt-2 text-sm text-stone-600">{category.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banquet & Restaurant */}
      <section className="section">
        <div className="container-site">
          <p className="eyebrow">{site.venueName}</p>
          <h2 className="heading mt-4 max-w-2xl">Meetings, functions and meals under one roof</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Banquet hall",
                text: "A spacious hall on the top floor for up to 200 guests — conferences, receptions, weddings and family functions, with catering by our own kitchen.",
                image: "/banquet/decoration.jpg",
                alt: "Banquet hall at Hotel Landmark Malda",
                position: "object-center",
              },
              {
                title: "Restaurant",
                text: "Multi-cuisine dining in a calm setting — good for a working lunch, a client dinner or a quiet meal after a long day.",
                image: "/site-photo/rest-ext.webp",
                alt: "Restaurant dining area at Hotel Landmark Malda",
                position: "object-[center_35%]",
              },
            ].map((item) => (
              <Link key={item.title} href="/banquet-malda-wb" className="card group">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={`object-cover ${item.position} transition-transform duration-500 group-hover:scale-[1.03]`}
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-stone-600 leading-relaxed">{item.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-rust">
                    Learn more <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practical info */}
      <section className="bg-white border-y border-brand-line">
        <div className="container-site py-10 grid gap-6 md:grid-cols-3 text-sm">
          <div className="flex gap-4">
            <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-brand-amber mt-0.5" />
            <p>
              <span className="block font-semibold text-brand-ink">Address</span>
              {site.address.line1}, {site.address.line2}
            </p>
          </div>
          <div className="flex gap-4">
            <FontAwesomeIcon icon={faElevator} className="w-5 h-5 text-brand-amber mt-0.5" />
            <p>
              <span className="block font-semibold text-brand-ink">Lift to all floors</span>
              Three-storey building with lift access.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="w-5 h-5 mt-0.5 font-display font-bold text-brand-amber text-center">P</span>
            <p>
              <span className="block font-semibold text-brand-ink">Parking</span>
              No on-site parking is available.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container-site max-w-3xl text-center">
          <div className="flex justify-center gap-1 text-brand-amber">
            {[0, 1, 2, 3, 4].map((i) => (
              <FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5" />
            ))}
          </div>
          <h2 className="heading mt-5">Stayed with us?</h2>
          <p className="lead mt-4">
            If you liked your stay, tell others on Google. If something wasn&apos;t right, tell us
            directly — we read every message.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={site.links.googleReview} target="_blank" className="btn-dark">
              Review us on Google
            </Link>
            <Link href={site.phones.feedback.whatsapp} target="_blank" className="btn-outline">
              <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
              Send feedback
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to book your stay?"
        text="Call or message us for availability and rates."
        phone={site.phones.booking}
      />
    </>
  );
}
