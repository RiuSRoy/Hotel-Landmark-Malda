import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBook, faPhone} from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image';

export default function Banquet() {
    return (
      <>
        <h1 className="text-center py-24 text-3xl">OUR STATE OF THE ART BANQUET</h1>
        <div className="md:flex bg-slate-100 p-2 md:p-4 border-y-black border-y-2">
          <Image className="w-48 h-48 mx-auto rounded-full" src="/banquet.png" alt="" width="384" height="384"/>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              The Ultimate Banquet Experience ✨
              <ul className="text-lg font-medium">
                <li>Hosting Up to 200 Guests</li>
                <li>Exquisite Cuisine 🍽️</li>
                <li>Elegant Ambiance 🕯️</li>
                <li>Exceptional Service 🙌</li>

                Indulge in an unforgettable banquet experience at Royal Touch. Whether it is a wedding, corporate event, or a special celebration, we have got you covered.
                
            
                Book Your Event Today!

                Make your special moments truly special at Royal Touch. Reserve your banquet now!
              </ul>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-purple-500 dark:text-purple-400">
                Royal Touch
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Restaurant and Banquet
              </div>
              <div className="text-slate-700 dark:text-slate-500">
              📞 +91-75012-63184
              </div>
              <Link className="text-sky-700 dark:text-sky-500" href="https://www.facebook.com/profile.php?id=100095382827717">
                <FontAwesomeIcon icon={faBook} width="20" height="20" className='inline'/>
                <span>Book from our facebook page</span>
              </Link>
              
            </figcaption>
          </div>
        </div>
        <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
              <div>
                  <Image className="h-auto max-w-full rounded-lg border-2 border-amber-800" src="/site-photo/banq-1.jpeg" alt="" width="300" height="450"/>
              </div>
              <div>
                  <Image className="h-auto max-w-full rounded-lg border-2 border-amber-800" src="/site-photo/banq-2.jpeg" alt="" width="300" height="300"/>
              </div>
              <div>
                  <Image className="h-auto max-w-full rounded-lg border-2 border-amber-800" src="/site-photo/banq-3.jpeg" alt="" width="300" height="300"/>
              </div>
              <div>
                  <Image className="h-auto max-w-full rounded-lg border-2 border-amber-800" src="/site-photo/banq-4.jpeg" alt="" width="300" height="300"/>
              </div>
            </div>
        </div>
        <div className="inline-block m-auto">
          <Link href="tel:+917501263184" target="_blank" className='inline-block m-auto'>
            <div className="text-center hover:bg-amber-800 font-bold px-8 py-4 rounded-xl my-8 cursor-pointer shadow-2xl shadow-yellow-600 hover:shadow-amber-600 hover:text-white transition duration-200 ease-in-out">
              <div className="flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} color="black" width={40} />
                <div>
                  <strong>Manager Nilanjan: +91-75012-63184</strong>
                </div>
              </div>
            </div>
          </Link> 

        </div>
      </>
    )
}