import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Banquet() {
  return (
    <div className="bg-gradient-to-r from-black via-amber-600 to-black    min-h-screen flex items-center justify-center ">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mt-12"> ✨Royal Touch ✨</h1>
        <h1 className="text-2xl font-bold mb-4 text-center">State of the art Banquet and Restro</h1>
        <p>আপনার বিশেষ দিনটি কি আসছে? আপনি কি এমন একটি জায়গা খুঁজছেন যেখানে আপনার অতিথিরা একটি অবিস্মরণীয় অভিজ্ঞতা লাভ করতে পারে? রয়্যাল টাচ হল আপনার জন্য নিখুঁত স্থান।</p>

<p className="my-4">আমরা বিবাহ, বাগদান, জন্মদিন, কর্পোরেট অনুষ্ঠান এবং আরও অনেক কিছুর জন্য আড়ম্বরপূর্ণ ও মার্জিত ইভেন্টগুলি হোস্ট করার জন্য নিবেদিত। আমাদের অভিজ্ঞ কর্মীরা আপনার প্রতিটি চাহিদা পূরণ করতে এবং আপনার স্বপ্নের অনুষ্ঠান বাস্তবায়নে আপনাকে সাহায্য করবে।</p>
        <div className="mb-4">
          <Image
            src="/banquet.png" // Replace with your image URL
            alt="Banquet Photo 1"
            className="w-full h-auto object-cover rounded"
            width={400} height={900}
          />
        </div>

        <h2 className="my-4 text-center">
        The Ultimate Banquet Experience ✨</h2>
        <ul className="">
          <li>Hosting Up to 200 Guests</li>
          <li>🍽️ Exquisite Cuisine</li>
          <li>🕯️ Elegant Ambiance </li>
          <li>🙌 Exceptional Service </li>
        </ul>

<p className="my-4">Indulge in an unforgettable banquet experience at Royal Touch. Whether it is a wedding, corporate event, or a special celebration, we have got you covered. Book Your Event Today! Make your special moments truly special at Royal Touch.
        </p>
        <h1 className="text-xl my-4 text-center">Reserve your banquet now!</h1>

        <div className="grid grid-cols-1 md:grid-col-2 gap-4">
          <Image
            src="/site-photo/banq-3.jpeg" // Replace with your image URL
            alt="Banquet Photo 2"
            className="w-full h-auto object-cover rounded"
            width={400} height={400}
          />
          <Image
            src="/site-photo/banq-2.jpeg" // Replace with your image URL
            alt="Banquet Photo 3"
            className="w-full h-auto object-cover rounded"
            width={400} height={400}
          />
          <Image
            src="/site-photo/banq-1.jpeg" // Replace with your image URL
            alt="Banquet Photo 4"
            className="w-full h-auto object-cover rounded"
            width={400} height={400}
          />
          <Image
            src="/site-photo/banq-4.jpeg" // Replace with your image URL
            alt="Banquet Photo 5"
            className="w-full h-auto object-cover rounded"
            width={400} height={400}
          />
        </div>


        
        <button href="tel:+917501275012" className="bg-purple-500 text-white py-2 px-4 mt-6 rounded">
        <Link href="tel:+917501275012" >
          Call Now
          
        </Link>
        </button>
        <p className="mt-4">আজই রয়্যাল টাচের সাথে যোগাযোগ করুন এবং আপনার বিশেষ অনুষ্ঠানের জন্য একটি বিনামূল্যে পরামর্শ পান। আমরা আপনার একটি স্মরণীয় দিন তৈরি করতে সাহায্য করার জন্য অপেক্ষা করছি!</p>

        <p className="text-xl mt-4">যোগাযোগের তথ্য:</p>
<ul>
<li><strong>ঠিকানা: Rabindra Avenue, Above Overseas Bank, Hotel Landmark Building, 2nd floor</strong></li>
<li>
<strong>ফোন: 94351-17480, 75012-75012</strong>
</li>
<li>ই-মেইল: royaltouchmalda@gmail.com</li>
<li>ওয়েবসাইট: https://www.hotellandmarkmalda.in/</li>
</ul>
<p className="text-xl mt-4">আমাদের সোশ্যাল মিডিয়ায় অনুসরণ করুন:</p>
<ul>
  <li>ফেসবুক: https://www.facebook.com/profile.php?id=100095382827717</li>
  <li>ইনস্টাগ্রাম: https://www.instagram.com/royal_touch_malda/</li>
</ul>
      </div>
    </div>
  );
}
