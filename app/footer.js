import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { site } from "@/lib/site";

const linkClass = "text-stone-300 hover:text-brand-amber transition-colors";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-stone-300">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src="/logo.png"
              width={200}
              height={100}
              alt="Hotel Landmark Malda – feel the difference"
              className="h-auto w-44"
            />
            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              A business hotel in the centre of Malda, with a banquet hall and in-house restaurant
              under the same roof.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hotel-malda-wb" className={linkClass}>Rooms</Link></li>
              <li><Link href="/banquet-malda-wb" className={linkClass}>Banquet &amp; Restaurant</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
              <li><Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mt-0.5 text-brand-amber" />
                <div>
                  <Link href={site.phones.booking.tel} className={`${linkClass} block`}>
                    {site.phones.booking.display}
                  </Link>
                  <Link href={site.phones.reception.tel} className={`${linkClass} block`}>
                    {site.phones.reception.display}
                  </Link>
                  <span className="text-stone-400">{site.phones.landlines[0]}</span>
                </div>
              </li>
              <li className="flex gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mt-0.5 text-brand-amber" />
                <Link href={`mailto:${site.email}`} className={linkClass}>{site.email}</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Find us</h4>
            <p className="flex gap-3 text-sm">
              <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 mt-0.5 text-brand-amber" />
              <span>
                {site.address.line1},<br />
                {site.address.line2},<br />
                {site.address.region}
              </span>
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link href={site.links.googleBusinessProfile} target="_blank" className={linkClass}>
                Get directions →
              </Link>
              <Link href={site.links.googleReview} target="_blank" className={linkClass}>
                Review us on Google →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Hotel Landmark, Malda. All rights reserved.</p>
          <p>{site.tagline}.</p>
        </div>
      </div>
    </footer>
  );
}
