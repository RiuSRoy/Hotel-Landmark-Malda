import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { header } from "../page";

export default function Banquet() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl p-8 bg-white rounded-lg shadow-lg">
          <h1
            className={`text-3xl md:text-5xl font-bold text-center mt-12 ${header.className}`}
          >
            {" "}
            ✨ Royal Touch ✨
          </h1>
          <h1 className="text-2xl font-bold mb-4 text-center">
            State of the art Banquet and Restro
          </h1>
          <div className="bg-gray-200 p-8 text-justify ">
            <p>
              আপনার বিশেষ দিনটি কি আসছে? 🦋 আপনি কি এমন একটি জায়গা খুঁজছেন যেখানে
              আপনার অতিথিরা একটি অবিস্মরণীয় অভিজ্ঞতা লাভ করতে পারে? রয়্যাল টাচ
              হল আপনার জন্য নিখুঁত স্থান।
            </p>

            <p className="my-4">
              আমরা বিবাহ, বাগদান, জন্মদিন, কর্পোরেট অনুষ্ঠান এবং আরও অনেক কিছুর
              জন্য আড়ম্বরপূর্ণ ও মার্জিত ইভেন্টগুলি হোস্ট করার জন্য নিবেদিত।
              আমাদের অভিজ্ঞ কর্মীরা আপনার প্রতিটি চাহিদা পূরণ করতে এবং আপনার
              স্বপ্নের অনুষ্ঠান বাস্তবায়নে আপনাকে সাহায্য করবে।
            </p>
            <button
            href="tel:+917501275012"
            className="bg-purple-500 text-white py-2 px-4 mt-6 rounded"
          >
            <Link href="tel:+917501275012">Call Now</Link>
          </button>
          </div>

          <section className="p-4">
            <h1 className={`text-4xl font-bold mb-8`}>
              Experience Unforgettable Celebrations at Our Banquet in Malda ❤
            </h1>

            <Image
              src="/banquet.png"
              alt="Malda Banquet Header Photo"
              className="w-full h-auto object-cover rounded my-4"
              width={400}
              height={900}
            />

            <article className="prose max-w-2xl mx-auto mb-8 ">
              <p className="text-justify">
                Are you searching for the perfect venue to host your next
                special event in Malda? Look no further! Our banquet is the
                ideal setting for creating cherished memories and hosting
                unforgettable celebrations.
              </p>

              <h2 className="text-2xl mt-8">
                The Perfect Venue for Every Occasion 🎉
              </h2>

              <Image
                src="/site-photo/banq-3.jpeg"
                alt="Landmark Banquet Photo 1"
                className="w-full h-auto object-cover rounded my-4"
                width={400}
                height={400}
              />
              <p className="text-justify">
                Whether you are planning a wedding reception, corporate event,
                or a milestone birthday party, our banquet in Malda is designed
                to meet your every need. Our versatile event spaces can be
                customized to suit the unique requirements of your celebration.
                From elegant wedding receptions to professional business
                conferences, we have the expertise to make every event a
                success.
              </p>

              <h2 className="text-2xl mt-8">
                Exceptional Facilities and Amenities
              </h2>
              <Image
                src="/site-photo/banq-2.jpeg"
                alt="Landmark Banquet Photo 2"
                className="w-full h-auto object-cover rounded my-4"
                width={400}
                height={400}
              />
              <p className="text-justify">
                Our banquet boasts state-of-the-art facilities and amenities to
                ensure a seamless and enjoyable experience for you and your
                guests. Our spacious and well-appointed banquet halls are
                equipped with modern audio-visual equipment, comfortable
                seating, and ambient lighting to create the perfect atmosphere
                for your event.
              </p>

              <h2 className="text-2xl mt-8">
                Culinary Delights to Satisfy Every Palate
              </h2>
              <Image
                src="/site-photo/banq-1.jpeg"
                alt="Landmark Banquet Photo 3"
                className="w-full h-auto object-cover rounded my-4"
                width={400}
                height={400}
              />
              <p className="text-justify">
                At our banquet in Malda, we understand the importance of good
                food in making an event truly memorable. Our experienced
                culinary team is dedicated to delighting your taste buds with a
                diverse menu of mouth-watering dishes. Whether you prefer
                traditional local cuisine or international flavors, we have a
                menu that can be tailored to your preferences.
              </p>

              <h2 className="text-2xl mt-8">Unmatched Hospitality ✅</h2>
              <Image
                src="/site-photo/banq-4.jpeg"
                alt="Landmark Banquet Photo 4"
                className="w-full h-auto object-cover rounded my-4"
                width={400}
                height={400}
              />
              <p className="text-justify">
                What sets our banquet apart is our commitment to providing
                unmatched hospitality. Our professional and friendly staff are
                dedicated to ensuring that every detail of your event is taken
                care of, allowing you to relax and enjoy the festivities. From
                event planning to execution, we are here to make your experience
                stress-free and enjoyable.
              </p>

              <h2 className="text-2xl mt-8">Discover the Difference 🔥</h2>
              <Image
                src="/site-photo/rest-5.jpg"
                alt="Landmark Banquet Photo 4"
                className="w-full h-auto object-cover rounded my-4"
                width={400}
                height={400}
              />
              <p>
                Choose our banquet in Malda for a celebration that exceeds your
                expectations. With our exceptional facilities, delicious
                cuisine, and unparalleled hospitality, we are the perfect venue
                for creating lasting memories. Book your event with us and
                experience the difference of hosting your celebration at the
                premier banquet in Malda.
              </p>
            </article>
          </section>

<div className="bg-gray-100 p-4">

          <h2 className="my-4 text-center text-xl">
            The Ultimate Banquet Experience ✨
          </h2>
          <ul className="">
            <li>Hosting Up to 200 Guests</li>
            <li>🍽️ Exquisite Cuisine</li>
            <li>🕯️ Elegant Ambiance </li>
            <li>🙌 Exceptional Service </li>
          </ul>

          <p className="my-4">
            Indulge in an unforgettable banquet experience at Royal Touch.
            Whether it is a wedding, corporate event, or a special celebration,
            we have got you covered. Book Your Event Today! Make your special
            moments truly special at Royal Touch.
          </p>
          <h1 className="text-xl my-4 text-center">
            Reserve your banquet now!
          </h1>
          <button
            href="tel:+917501275012"
            className="bg-purple-500 text-white py-2 px-4 mt-6 rounded"
          >
            <Link href="tel:+917501275012">Call Now</Link>
          </button>
</div>

          <p className="mt-4">
            আজই রয়্যাল টাচের সাথে যোগাযোগ করুন এবং আপনার বিশেষ অনুষ্ঠানের জন্য
            একটি বিনামূল্যে পরামর্শ পান। আমরা আপনার একটি স্মরণীয় দিন তৈরি করতে
            সাহায্য করার জন্য অপেক্ষা করছি!
          </p>
          <button
            className={`drop-shadow-xl mx-auto ${header.className} border-amber-700 border-b-8 bg-amber-600 hover:bg-amber-400 hover:text-black hover:border-amber-500 text-white transition ease-in py-2 px-4 mt-6 rounded block`}
          >
            <Link href="/contact">Contact US</Link>
          </button>
        </div>
      </div>
    </>
  );
}