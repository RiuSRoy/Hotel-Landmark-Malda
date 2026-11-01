"use client";

import Link from "next/link";
import { site } from "@/lib/site";

export default function Error({ reset }) {
  return (
    <section className="section">
      <div className="container-site max-w-xl text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="heading mt-4">This page didn&apos;t load</h1>
        <p className="lead mt-4">
          You can still book or ask us anything by phone or WhatsApp.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={site.phones.booking.tel} className="btn-primary">
            Call {site.phones.booking.display}
          </Link>
          <Link href={site.phones.booking.whatsapp} target="_blank" className="btn-outline">
            WhatsApp us
          </Link>
          <button onClick={() => reset()} className="btn-outline">
            Try again
          </button>
        </div>
      </div>
    </section>
  );
}
