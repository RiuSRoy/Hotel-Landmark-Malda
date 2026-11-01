import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Hotel Landmark Malda",
  description:
    "Contact Hotel Landmark, Malda for room bookings, banquet and restaurant enquiries. Call, WhatsApp or visit us on Rabindra Avenue, Malda, West Bengal.",
};

function ContactRow({ icon, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-amber/15 text-brand-brown">
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      </span>
      <div className="text-stone-700">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">{label}</p>
        <div className="mt-1 space-y-0.5">{children}</div>
      </div>
    </div>
  );
}

const phoneLink = "block hover:text-brand-rust transition-colors";

export default function Contact() {
  return (
    <>
      <section className="bg-brand-ink">
        <div className="container-site py-16 md:py-20">
          <p className="eyebrow !text-brand-amber">Contact</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold !text-white">Talk to us</h1>
          <p className="mt-4 max-w-xl text-lg text-stone-300">
            The quickest way to book is a phone call or a WhatsApp message.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-6 md:grid-cols-2">
          <div className="card p-7 md:p-9">
            <p className="eyebrow">Rooms</p>
            <h2 className="mt-3 text-2xl font-semibold">{site.name}</h2>
            <div className="mt-7 space-y-6">
              <ContactRow icon={faPhone} label="Bookings & reception">
                <Link href={site.phones.booking.tel} className={`${phoneLink} font-semibold text-brand-ink`}>
                  {site.phones.booking.display}{" "}
                  <span className="text-xs font-medium text-brand-rust">· preferred for bookings</span>
                </Link>
                {site.phones.reception.tel !== site.phones.booking.tel && (
                  <Link href={site.phones.reception.tel} className={phoneLink}>
                    {site.phones.reception.display}{" "}
                    <span className="text-xs text-stone-500">· mobile &amp; WhatsApp</span>
                  </Link>
                )}
                {site.phones.landlines.map((number) => (
                  <p key={number} className="text-stone-500">{number}</p>
                ))}
              </ContactRow>
              <ContactRow icon={faEnvelope} label="Email">
                <Link href={`mailto:${site.email}`} className={phoneLink}>{site.email}</Link>
              </ContactRow>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href={site.phones.booking.tel} className="btn-primary">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                Call to book
              </Link>
              <Link href={site.phones.booking.whatsapp} target="_blank" className="btn-outline">
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                WhatsApp
              </Link>
            </div>
          </div>

          <div className="card p-7 md:p-9">
            <p className="eyebrow">Events &amp; dining</p>
            <h2 className="mt-3 text-2xl font-semibold">{site.venueName}</h2>
            <div className="mt-7 space-y-6">
              <ContactRow icon={faPhone} label="Banquet & restaurant manager">
                <Link href={site.phones.banquet.tel} className={phoneLink}>{site.phones.banquet.display}</Link>
              </ContactRow>
              <ContactRow icon={faLocationDot} label="Where">
                <p>Hotel Landmark building, 3rd floor (lift access)</p>
              </ContactRow>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href={site.phones.banquet.tel} className="btn-dark">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                Call the manager
              </Link>
              <Link href={site.phones.banquet.whatsapp} target="_blank" className="btn-outline">
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-brand-line">
        <div className="container-site grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="eyebrow">Find us</p>
            <h2 className="heading mt-4">On Rabindra Avenue, Malda</h2>
            <address className="mt-5 not-italic text-lg text-stone-700 leading-relaxed">
              {site.address.line1},<br />
              {site.address.line2},<br />
              {site.address.region}
            </address>
            <p className="mt-4 text-stone-600">
              Look for the Hotel Landmark signboard above Overseas Bank. There is no on-site parking.
            </p>
            <div className="mt-6 relative aspect-[3/4] max-w-xs rounded-lg overflow-hidden">
              <Image
                src="/rooms/exterior.jpg"
                alt="Hotel Landmark Malda building on Rabindra Avenue"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link href={site.links.googleBusinessProfile} target="_blank" className="text-link">
                Open in Google Maps
              </Link>
              <Link href={site.links.facebook} target="_blank" className="text-link inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                Facebook
              </Link>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="h-full min-h-[360px] rounded-lg overflow-hidden border border-brand-line">
              <iframe
                title="Map showing Hotel Landmark, Malda"
                src={site.links.mapEmbed}
                className="w-full h-full min-h-[360px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-2xl font-semibold">Still deciding?</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/hotel-malda-wb" className="btn-dark">View rooms</Link>
            <Link href="/banquet-malda-wb" className="btn-outline">Banquet &amp; restaurant</Link>
          </div>
        </div>
      </section>
    </>
  );
}
