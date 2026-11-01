import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUtensils,
  faMicrophone,
  faElevator,
  faBriefcase,
  faRing,
  faCakeCandles,
  faCheck,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata = {
  title: "Banquet Hall & Restaurant in Malda",
  description:
    "Hotel Landmark Banquet & Restaurant, Malda: a 200-guest banquet hall for conferences, weddings and celebrations, plus a multi-cuisine in-house restaurant on Rabindra Avenue.",
};

const hallFeatures = [
  { icon: faUsers, title: "Up to 200 guests", text: "Flexible layouts for seated dinners, theatre-style sessions or receptions." },
  { icon: faUtensils, title: "In-house catering", text: "Menus from our own kitchen, tailored to your event and budget." },
  { icon: faMicrophone, title: "Sound & lighting", text: "Audio-visual equipment for presentations, speeches and music." },
  { icon: faElevator, title: "Top floor, lift access", text: "On the 3rd floor of the hotel, reachable by lift." },
];

const events = [
  { icon: faBriefcase, title: "Corporate", text: "Conferences, dealer meets, training sessions and product launches." },
  { icon: faRing, title: "Weddings", text: "Receptions, engagements and pre-wedding functions." },
  { icon: faCakeCandles, title: "Celebrations", text: "Birthdays, anniversaries and family get-togethers." },
];

const hallPhotos = [
  { src: "/site-photo/banq-1.jpeg", alt: "Banquet hall in Malda – main floor" },
  { src: "/site-photo/banq-5.jpeg", alt: "Banquet hall in Malda set up for a reception" },
  { src: "/banquet/decoration.jpg", alt: "Banquet hall in Malda – pillars and lighting" },
  { src: "/site-photo/banq-9.jpeg", alt: "Buffet counter at Hotel Landmark banquet, Malda" },
  { src: "/banquet/empty.jpg", alt: "Open floor of the Hotel Landmark banquet hall, Malda" },
  { src: "/site-photo/banq-8.jpeg", alt: "Seating arrangement in the banquet hall, Malda" },
];

const restaurantPhotos = [
  { src: "/site-photo/rest-2.jpg", alt: "Restaurant in Malda – main dining room" },
  { src: "/site-photo/rest-1.jpg", alt: "Booth seating at Hotel Landmark restaurant, Malda" },
  { src: "/site-photo/rest-4.jpg", alt: "Table for two at Hotel Landmark restaurant, Malda" },
  { src: "/site-photo/rest-3.jpg", alt: "Private corner table at Hotel Landmark restaurant, Malda" },
];

function PhotoGrid({ photos, sizes }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {photos.map((photo) => (
        <div key={photo.src} className="relative aspect-[4/3] rounded-lg overflow-hidden">
          {/* object position keeps the bottom of portrait phone photos (and their watermark) out of frame */}
          <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover object-[center_30%]" />
        </div>
      ))}
    </div>
  );
}

export default function BanquetAndRestaurant() {
  return (
    <>
      <PageHero
        image="/site-photo/banq-1.jpeg"
        alt="Hotel Landmark Banquet & Restaurant, Malda"
        eyebrow="Banquet & Restaurant"
        title={site.venueName}
      >
        A 200-guest banquet hall and a multi-cuisine restaurant inside Hotel Landmark, on Rabindra
        Avenue, Malda.
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href={site.phones.reception.tel} className="btn-primary">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
            Enquire about your event
          </Link>
          <Link href="#restaurant" className="btn-outline-light">
            See the restaurant
          </Link>
        </div>
      </PageHero>

      {/* Banquet */}
      <section className="section">
        <div className="container-site">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">Banquet hall</p>
              <h2 className="heading mt-4">A professional venue for meetings and occasions</h2>
              <p className="lead mt-5">
                Whether it&apos;s a company conference or a family celebration, our team handles the
                set-up, food and service so you can focus on your guests. Every event is planned
                with you in detail, from the seating plan to the menu.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {hallFeatures.map((feature) => (
                <div key={feature.title} className="card p-6">
                  <FontAwesomeIcon icon={feature.icon} className="w-5 h-5 text-brand-amber" />
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <PhotoGrid photos={hallPhotos.slice(0, 4)} sizes="(min-width: 768px) 50vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Event types */}
      <section className="section bg-white border-y border-brand-line">
        <div className="container-site">
          <p className="eyebrow">What we host</p>
          <h2 className="heading mt-4">Built for every kind of gathering</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <div key={event.title} className="rounded-lg bg-brand-sand p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-ink text-brand-amber">
                  <FontAwesomeIcon icon={event.icon} className="w-5 h-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{event.title}</h3>
                <p className="mt-2 text-stone-600">{event.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Facilities</h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Spacious, climate-controlled hall",
                  "Professional sound and lighting",
                  "Comfortable seating in flexible layouts",
                  "Lift access to the top-floor hall",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-stone-700">
                    <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 mt-1.5 text-brand-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Catering</h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Customisable menus for any budget",
                  "Traditional and international cuisine",
                  "Vegetarian and non-vegetarian options",
                  "Experienced service staff",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-stone-700">
                    <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 mt-1.5 text-brand-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-lg border-l-4 border-brand-amber bg-brand-sand p-6 md:p-8">
            <p className="text-lg font-semibold text-brand-ink">
              আপনার বিশেষ দিনটি কি আসছে? হোটেল ল্যান্ডমার্ক ব্যাঙ্কোয়েট অ্যান্ড রেস্টুরেন্ট আপনার জন্য নিখুঁত স্থান।
            </p>
            <p className="mt-2 text-stone-600">
              আমরা বিবাহ, বাগদান, জন্মদিন, কর্পোরেট অনুষ্ঠান এবং আরও অনেক কিছুর আয়োজন করি।
            </p>
          </div>

          <div className="mt-12">
            <PhotoGrid photos={hallPhotos.slice(4)} sizes="50vw" />
          </div>
        </div>
      </section>

      {/* Restaurant */}
      <section id="restaurant" className="section scroll-mt-20">
        <div className="container-site grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Restaurant</p>
            <h2 className="heading mt-4">Good food, without leaving the hotel</h2>
            <p className="lead mt-5">
              Our in-house restaurant serves a multi-cuisine menu in a calm, modern dining room —
              right for a working lunch, a dinner with clients, or a relaxed meal after a long day.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["Multi-cuisine menu", "Fresh, quality ingredients", `Complimentary breakfast for hotel guests, ${site.breakfastHours}`, "Room service for lunch and dinner", "Booth seating for small groups"].map(
                (item) => (
                  <li key={item} className="flex gap-3 text-stone-700">
                    <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 mt-1.5 text-brand-amber" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <p className="mt-8 text-stone-600">
              Staying with us?{" "}
              <Link href="/hotel-malda-wb" className="text-link">
                See our rooms in Malda
              </Link>
              .
            </p>
          </div>
          <PhotoGrid photos={restaurantPhotos} sizes="(min-width: 768px) 25vw, 50vw" />
        </div>
      </section>

      <section className="bg-white border-y border-brand-line">
        <div className="container-site py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-stone-700">
            <span className="font-semibold text-brand-ink">Banquet &amp; restaurant manager:</span>{" "}
            <Link href={site.phones.banquet.tel} className="text-link">
              {site.phones.banquet.display}
            </Link>
          </p>
          <Link href={site.links.googleBusinessProfile} target="_blank" className="text-link">
            Read reviews and get directions on Google
          </Link>
        </div>
      </section>

      <CtaBand
        title="Planning an event?"
        text="Tell us the date, guest count and type of event — we'll come back with options and a quote."
        phone={site.phones.reception}
      />
    </>
  );
}
