// pages/contact.js
import Link from 'next/link';
import { header } from '../page';

const Contact = () => {
  return (
    <>

      <section className="min-h-screen p-8">
        <h1 className={`text-4xl font-bold my-8 text-center ${header.className}`}>Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Hotel Contact */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Hotel Contact</h2>
            <p>Email: <Link href="mailto:landmark2286@gmail.com">landmark2286@gmail.com</Link></p>
            <p>(Reception) Phone: </p>
                <ul className="list-disc pl-8">
                    <li><Link href="tel:+917501263184">+91-75012 63184</Link></li>
                    <li>+(03512) 221560</li>
                    <li>+(03512) 221184</li>
                </ul>
            <p>Address: Rabindra Avenue, Above Overseas Bank, Near Raj Hotel, Malda, West Bengal, 732101, India</p>
            <button
            className="bg-gradient-to-br from-red-500 via-yellow-300 to-green-500 text-black py-2 px-4 mt-6 rounded "
          >
            <Link href="https://www.google.com/search?q=Hotel+Landmark+Malda&stick=H4sIAAAAAAAA_-NgU1I1qDC2TEtMSzFIMbBISk0ysEizAgpZJCaZm5qlJqcYpSUnmRovYhXxyC9JzVHwScxLyU0sylbwTcxJSQQAcoGI0UAAAAA&hl=en&mat=CZCCwmLOEYETElcBl7_Ll0EajnY54NBodbnY9sB-lWKSrZvBhd9FmVP-fSa-m4fVRCAQ-JoefqG17xdXJwnjuTZR-AyAf40R-Ja_o7WqGKrNHhO9ArcuNep8lW7HWgYvN9c&authuser=0" target='_blank'>Google Business Profile</Link>
            </button>
            <button
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 mt-6 rounded "
          >
            <Link href="https://www.google.com/maps/place/Hotel+Landmark+Malda/@25.0005976,88.1417702,17z/data=!3m1!4b1!4m10!3m9!1s0x39fafd0d08beb08f:0x38ab756ecd2fcb53!5m3!1s2023-03-10!4m1!1i2!8m2!3d25.0005976!4d88.1417702!16s%2Fg%2F11nnvd67rb" target='_blank'>Locate us on map</Link>
            </button>
          </div>

          {/* Banquet Contact */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Banquet + Restro Contact</h2>
            <p>Email: <Link href="mailto:royaltouchmalda@gmail.com">royaltouchmalda@gmail.com</Link></p>
            <p>Phone: </p>
                <ul className="list-disc pl-8">
                    <li>+91-94758 75227 (Banquet Manager)</li>
                    <li>+91-94351 17480 (Banquet Owner)</li>
                    <li><Link href="tel:+919641693184">+91-96416 93184 (Restaurant)</Link></li>
                </ul>
                <Link href="tel:+919641693184">+91-96416 93184</Link>
            <p>Address: Rabindra Avenue, Above Overseas Bank, Hotel Landmark Building, 3rd floor, Malda, West Bengal, 732101, India</p>
            <button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 mt-6 mr-1 rounded"
          >
            <Link href="https://www.facebook.com/profile.php?id=100095382827717" target='_blank'>Facebook page</Link>
            </button>
            <button
            className="bg-gradient-to-br from-pink-500 to-yellow-400 py-2 px-4 mt-6 rounded"
          >
            <Link href="https://instagram.com/royal_touch_malda" target='_blank'>Instagram page</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
