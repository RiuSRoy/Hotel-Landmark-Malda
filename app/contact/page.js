// pages/contact.js
import Link from "next/link";
import { header } from "../page";
import { googleBusinessProfile } from "../layout";

const Contact = () => {
  return (
    <>
      <section className="min-h-screen p-4">
        <h1
          className={`text-4xl font-bold my-8 text-center ${header.className}`}
        >
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Hotel Contact */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Hotel Contact</h2>
            <p>
              Email:{" "}
              <Link href="mailto:landmark2286@gmail.com">
                landmark2286@gmail.com
              </Link>
            </p>
            <p>(Reception) Phone: </p>
            <ul className="list-disc pl-8">
              <li>
                <Link href="tel:+917501263184">+91-75012 63184</Link>
              </li>
              <li>+(03512) 221560</li>
              <li>+(03512) 221184</li>
            </ul>
            <p>
              Address: Rabindra Avenue, Above Overseas Bank, Near Raj Hotel,
              Malda, West Bengal, 732101, India
            </p>
            <button className="hover:shadow-black hover:shadow-inner transition-shadow bg-gradient-to-br from-red-500 via-yellow-300 to-green-500 text-black py-2 px-4 mt-6 rounded mr-1">
              <Link href={googleBusinessProfile} target="_blank">
                Google Business Profile
              </Link>
            </button>
          </div>

          {/* Banquet Contact */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Banquet + Restro Contact
            </h2>
            <p>
              Email:{" "}
              <Link href="mailto:royaltouchmalda@gmail.com">
                royaltouchmalda@gmail.com
              </Link>
            </p>
            <p>Phone: </p>
            <ul className="list-disc pl-8">
              <li>+91-94758 75227 (Banquet Manager)</li>
              <li>
                <Link href="tel:+919641693184">
                  +91-96416 93184 (Restaurant)
                </Link>
              </li>
            </ul>
            <Link href="tel:+919641693184">+91-96416 93184</Link>
            <p>
              Address: Rabindra Avenue, Above Overseas Bank, Hotel Landmark
              Building, 3rd floor, Malda, West Bengal, 732101, India
            </p>
            <button className="hover:shadow-black hover:shadow-inner bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 mt-6 mr-1 rounded">
              <Link
                href="https://www.facebook.com/profile.php?id=100095382827717"
                target="_blank"
              >
                Facebook page
              </Link>
            </button>
            <button className="hover:shadow-black hover:shadow-inner bg-gradient-to-br from-pink-500 to-yellow-400 py-2 px-4 mt-6 rounded">
              <Link
                href="https://instagram.com/royal_touch_malda"
                target="_blank"
              >
                Instagram page
              </Link>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 max-w-3xl mx-auto">
          <button
            className={`mx-auto ${header.className} w-full hover:border-blue-800 border-b-8 text-black hover:bg-blue-600 bg-emerald-400 hover:text-white border-emerald-500 hover:shadow-black hover:shadow-2xl  transition ease-in p-2 mt-6 rounded block`}
          >
            <Link href={googleBusinessProfile}>Directions</Link>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.9858254901037!2d88.1417702!3d25.0005976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fafd0d08beb08f%3A0x38ab756ecd2fcb53!2sHotel%20Landmark%20Malda!5e0!3m2!1sen!2sin!4v1702795539511!5m2!1sen!2sin"
              width="300"
              height="500"
              className="border-0 w-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
