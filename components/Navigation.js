"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/hotel-malda-wb", label: "Rooms" },
  { href: "/banquet-malda-wb", label: "Banquet & Restaurant" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-brand-line">
      <nav className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <Image src="/HL.png" width={44} height={44} alt="Hotel Landmark Malda logo" priority />
            <span className="leading-none">
              <span className="block font-display text-xl md:text-2xl font-semibold text-brand-ink">
                Hotel Landmark
              </span>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-brand-rust mt-1">
                Malda
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors border-b-2 py-1 ${
                    active
                      ? "text-brand-ink border-brand-amber"
                      : "text-stone-600 border-transparent hover:text-brand-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href={site.phones.booking.tel} className="btn-primary !py-2.5">
              <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
              Call to book
            </Link>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-brand-ink"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden border-t border-brand-line overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-site py-4 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`block py-2.5 font-medium ${
                pathname === link.href ? "text-brand-ink" : "text-stone-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href={site.phones.booking.tel} onClick={closeMenu} className="btn-primary w-full mt-3">
            <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
            Call to book · {site.phones.booking.display}
          </Link>
        </div>
      </div>
    </header>
  );
}
