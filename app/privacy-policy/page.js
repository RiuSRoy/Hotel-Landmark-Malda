import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Hotel Landmark, Malda, including Hotel Landmark Banquet & Restaurant, collects, uses and protects your personal information.",
};

const LAST_UPDATED = "1 November 2026";

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 text-stone-700 leading-relaxed">{children}</div>
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5 marker:text-brand-amber">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-brand-ink">
        <div className="container-site py-14 md:py-16">
          <p className="eyebrow !text-brand-amber">Legal</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold !text-white">Privacy Policy</h1>
          <p className="mt-3 text-stone-300">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <article className="section">
        <div className="container-site max-w-3xl">
          <p className="lead">
            This policy explains how {site.name}, Malda (&ldquo;we&rdquo;, &ldquo;us&rdquo;), including{" "}
            {site.venueName}, collects, uses and protects personal information when you stay with us,
            book or attend an event, dine with us, contact us, or use this website. It applies to all
            of our services.
          </p>

          <Section title="1. Information we collect">
            <p><strong>Information you give us</strong></p>
            <List
              items={[
                "Contact details — name, phone number, WhatsApp number, email and address — when you make an enquiry or booking.",
                "Stay details — arrival and departure dates, number of guests, room preferences and special requests.",
                "Identity documents — a government-issued photo ID for every adult guest at check-in, and passport and visa details for foreign nationals, as required by Indian law.",
                "Event details — date, guest count, menu choices and other requirements for banquet or restaurant bookings.",
                "Payment information — billing details and, where applicable, GSTIN for invoices. Card and UPI payments are processed by banks or payment providers; we do not store full card numbers.",
                "Feedback you send us by phone, WhatsApp, email or review platforms.",
              ]}
            />
            <p><strong>Information collected automatically</strong></p>
            <List
              items={[
                "Website usage data such as IP address, browser and device type, pages visited and referring site, collected through cookies and similar technologies.",
                "CCTV footage in common areas of the property, where installed, for the safety and security of guests and staff.",
              ]}
            />
          </Section>

          <Section title="2. How we use your information">
            <List
              items={[
                "To confirm, manage and provide your room, banquet or restaurant booking.",
                "To complete check-in and meet legal obligations, including guest registers and reporting foreign nationals' stays to the authorities (Form C).",
                "To issue invoices, process payments and maintain accounting and tax records.",
                "To reply to enquiries and stay in touch about your booking by phone, SMS, WhatsApp or email.",
                "To keep the property safe and to prevent fraud or misuse.",
                "To improve our services and website, and — only where you have agreed or where permitted by law — to send you offers.",
              ]}
            />
          </Section>

          <Section title="3. Cookies, analytics and advertising">
            <p>
              Our website may use tools such as Google Analytics and the Meta (Facebook) Pixel to
              understand how visitors use the site and to measure our advertising. These services may
              set cookies and receive information about your visit. You can block or delete cookies in
              your browser settings; the site will continue to work.
            </p>
          </Section>

          <Section title="4. When we share information">
            <p>We do not sell your personal information. We share it only when necessary:</p>
            <List
              items={[
                "With government and law-enforcement authorities where required by law, such as police verification of guest records.",
                "With service providers who help us run the hotel — for example payment processors, booking platforms you used to reach us, IT and messaging providers — and only for that purpose.",
                "Where needed to protect the rights, property or safety of our guests, staff or the public.",
              ]}
            />
          </Section>

          <Section title="5. How long we keep it">
            <p>
              We keep personal information only for as long as needed for the purposes above, or for
              longer where the law requires it — for example guest registers and tax records. CCTV
              footage is overwritten automatically after a limited period unless it is needed for an
              investigation.
            </p>
          </Section>

          <Section title="6. How we protect it">
            <p>
              We take reasonable physical, technical and organisational measures to protect your
              information, and limit access to staff who need it to do their jobs. No method of
              storage or transmission is completely secure, but we work to keep your data safe.
            </p>
          </Section>

          <Section title="7. Your rights">
            <p>
              Under India&apos;s Digital Personal Data Protection Act, 2023 and other applicable law, you
              may ask us to:
            </p>
            <List
              items={[
                "tell you what personal information we hold about you and how we use it;",
                "correct or update information that is inaccurate or incomplete;",
                "delete information we no longer need to keep, subject to our legal obligations;",
                "withdraw consent you have given, for example to marketing messages.",
              ]}
            />
            <p>
              To make a request or raise a concern, contact us using the details below. We will
              respond within a reasonable time.
            </p>
          </Section>

          <Section title="8. Children">
            <p>
              Our services are booked by adults. Information about children is collected only when a
              parent or guardian provides it as part of a booking or check-in.
            </p>
          </Section>

          <Section title="9. Changes to this policy">
            <p>
              We may update this policy from time to time. The latest version will always be on this
              page, with the date it was last updated.
            </p>
          </Section>

          <Section title="10. Contact us">
            <p>
              {site.name}
              <br />
              {site.address.line1}, {site.address.line2}, {site.address.region}
              <br />
              Email:{" "}
              <Link href={`mailto:${site.email}`} className="text-link">
                {site.email}
              </Link>
              <br />
              Phone:{" "}
              <Link href={site.phones.reception.tel} className="text-link">
                {site.phones.reception.display}
              </Link>
            </p>
          </Section>
        </div>
      </article>
    </>
  );
}
