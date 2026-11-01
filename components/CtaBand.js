import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Dark closing band with call + WhatsApp buttons. `phone` is an entry from site.phones.
export default function CtaBand({ title, text, phone, children }) {
  return (
    <section className="bg-brand-brown">
      <div className="container-site py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold !text-white">{title}</h2>
          {text && <p className="mt-3 text-stone-200">{text}</p>}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link href={phone.tel} className="btn-primary">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
            {phone.display}
          </Link>
          <Link href={phone.whatsapp} target="_blank" className="btn-outline-light">
            <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
            WhatsApp
          </Link>
          {children}
        </div>
      </div>
    </section>
  );
}
