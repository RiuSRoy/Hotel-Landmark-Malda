import Head from 'next/head'
import { Cinzel_Decorative} from '@next/font/google';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faWifi, faSnowflake, faUser, faBowlFood, faLocation, faStar, faPhone, faChampagneGlasses, faCakeCandles, faLocationDot, faMapPin, faArrowRight, faArrowRightArrowLeft, faArrowRightLong} from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import Image from 'next/image'

export const header = Cinzel_Decorative({ 
  subsets: ['latin'],
  weight: ['700', '700'],
});
export default function Home() {
  return (
    <main className="w-full h-full my-3">
      
      {/* <div className="relative">
        <Image
          src="/cover2.png"
          alt="Hotel Landmark Malda"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div> */}
      <Link href="/banquet+malda+wb" className="animate-bounce bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-auto flex py-1 md:py-2 text-white hover:from-pink-500 hover:to-yellow-500">
        <div className='md:text-xl m-auto'>
          <FontAwesomeIcon icon={faCakeCandles} width="20" height="20" className="inline"/>
          <span>✨ BANQUET CUM CONFERENCE HALL ✨</span>
          <FontAwesomeIcon icon={faArrowRightLong} width="20" height="20" className="inline"/>
        </div>
      </Link>
      <div className="m-auto max-w-[80%] flex flex-col lg:gap-y-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-y-16 justify-center text-center ">
          <div className="flex flex-col gap-y-4 justify-center text-center">
            <div className={`text-5xl sm:text-6xl md:text-8xl lg:text-7xl flex flex-col text-center trans ${header.className}`}>
              <h1>Welcome to</h1>
              <h1>Hotel Landmark,</h1>
              <h1>Malda</h1>
            </div>
            <p className="font-thin text-center text-2xl sm:text-xl md:text-3xl my-8 italic">
              Feel the difference
            </p>
            <div className="flex justify-center -space-x-14">
              <div className="mix-blend-multiply bg-amber-300 rounded-full w-24 h-24"></div>
              <div className="mix-blend-multiply bg-yellow-500 rounded-full w-24 h-24"></div>
            </div>
            <div className="block grid-col-1 content-center gap-4 text-center">
              <div className='text-xl'>Call us at <strong>+91-96416-93184</strong> 
                <Link href="tel:+919641693184" target="_blank">
                    <div className=" transition duration-200 ease-in-out text-center text-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-xl my-8 cursor-pointer shadow-xl shadow-sky-300">📞 96416-93184</div>
                </Link> 
                or whatsapp! 
                <Link href="https://wa.me/919641693184" target="_blank">
                    <div className=" transition duration-200 ease-in-out text-center text-2xl bg-lime-700 hover:bg-lime-800 text-white font-bold px-8 py-4 rounded-xl my-8 cursor-pointer shadow-xl shadow-lime-600">96416-93184</div>
                </Link> 
                for booking purpose or any other queries.
              </div>
            </div>
          </div>
        </div>
        <div className="border-y-black py-1 md:py-2 px-4 text-center md:text-xl text-sm my-4">
          <FontAwesomeIcon icon={faLocationDot} width="20" height="20" className="inline"/>
          <span className="">Rabindra Avenue, Above Overseas Bank, near Raj Hotel, Malda</span>
        </div>
        <div className='m-auto text-center mt-8 md:mt-0 text-pink-500'>
          <FontAwesomeIcon icon={faChampagneGlasses} beatFade width="50" height="50" className="inline-block animate-spin" />
          <strong>  OUR ALL-NEW RESTRO IS HERE !</strong>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
          <div>
              <Image className="h-auto max-w-full rounded-lg" src="/site-photo/rest-1.jpg" alt="" width="300" height="450"/>
          </div>
          <div>
              <Image className="h-auto max-w-full rounded-lg" src="/site-photo/rest-2.jpg" alt="" width="300" height="300"/>
          </div>
          <div>
              <Image className="h-auto max-w-full rounded-lg" src="/site-photo/rest-3.jpg" alt="" width="300" height="300"/>
          </div>
          <div>
              <Image className="h-auto max-w-full rounded-lg" src="/site-photo/rest-4.jpg" alt="" width="300" height="300"/>
          </div>
          <div>
              <Image className="h-auto max-w-full rounded-lg" src="/site-photo/rest-5.jpg" alt="" width="300" height="300"/>
          </div>
          <div>
              <Image className="h-auto max-w-full rounded-lg" src="/site-photo/rest-6.jpg" alt="" width="300" height="300"/>
          </div>
        </div>
        <div className="md:flex bg-slate-100 rounded-xl p-2 md:p-4 border-black border-2">
          <Image className="w-48 h-48 mx-auto" src="/prim-logo.png" alt="" width="384" height="384"/>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                Immerse yourself in a warm, inviting ambiance where each meal is an unforgettable journey. Our restaurant, a symphony of tastes, offers a menu crafted with passion. Come savor the art of delicious dining – an experience that goes beyond the plate.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-pink-400">
                Royal Touch
              </div>
              <div className="text-pink-700">
                Fine Dine Restaurant
              </div>
              <div className="inline-block">
                <Link href="https://royaltouch.my.canva.site/" target="_blank">
                      <div className="transition duration-200 ease-in-out text-center text-xl bg-pink-800 hover:bg-amber-400 hover:text-black text-white font-bold px-4 py-2 my-4 rounded cursor-pointer dark:bg-pink-400">Learn more...</div>
                </Link> 
              </div>
            </figcaption>
          </div>
        </div>


        <div className="grid lg:grid-cols-5 grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 mt-12">
          <div className="rounded-sm p-8 text-center shadow-2xl">
            <FontAwesomeIcon icon={faWifi} />
            <p>Free Wifi</p>
          </div>
          <div className="rounded-sm p-8 text-center  text-amber-900 shadow-2xl">
            <FontAwesomeIcon icon={faLocation} />
            <p>Prime Location</p>
          </div>
          <div className="rounded-sm p-8 text-center shadow-2xl">
            <FontAwesomeIcon icon={faSnowflake} />
            <p>Air Conditioning</p>
          </div>
          <div className="rounded-sm p-8 text-center text-amber-900 shadow-2xl">
            <FontAwesomeIcon icon={faUser} />
            <p>Room Service</p>
          </div>
          <div className="rounded-sm p-8 text-center shadow-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
            <p>Fine Dine Restaurant</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 justify-center text-center m-auto mt-12">
          <div className="flex flex-col justify-center text-center">
            <div className="text-5xl sm:text-6xl md:text-8xl lg:text-7xl flex flex-col text-center">
              <h1>Have you visited</h1>
              <h1>us before?</h1>
            </div>
            <p className="font-thin text-center text-2xl sm:text-xl md:text-3xl my-12 italic">
              We would love to hear your feedback.
            </p>
            <div className='text-xl'>
              Whatsapp us 
              <span className="inline-flex items-baseline">
              <FontAwesomeIcon icon={faPhone} color="violet" width={40}/>
              <Link href="http://wa.me/919435117480" target="_blank">
                <div className='underline underline-offset-4 text-blue-700  transition duration-200 ease-in-out'>&nbsp;here&nbsp;</div>
              </Link>
              </span>
              for any complaints. We will make sure your issue gets resolved.
            </div>
          </div>
          <div className="block grid-col-1 content-center gap-4 text-center">
            <span className="grid grid-cols-5 gap-4">
              <span><FontAwesomeIcon icon={faStar} color="violet" className="animate-ping" /></span>
              <span><FontAwesomeIcon icon={faStar} color="pink" className="animate-ping"  /></span>
              <span><FontAwesomeIcon icon={faStar} color="violet" className="animate-ping"  /></span>
              <span><FontAwesomeIcon icon={faStar} color="pink" className="animate-ping"  /></span>
              <span><FontAwesomeIcon icon={faStar} color="violet" className="animate-ping"  /></span>
              <span></span>
            </span>
            <Link href="https://g.page/r/CVPLL81udas4EBM/review" target="_blank">
              <div className="text-center text-3xl bg-amber-400 hover:bg-amber-800 font-bold px-8 py-4 rounded-xl my-8 cursor-pointer shadow-xl shadow-amber-600 hover:text-white  transition duration-500 ease-in-out">Rate us here</div>
            </Link>  
            <div className="font-thin text-center text-2xl sm:text-xl md:text-3xl my-12 block grid-col-1 ">
              “If you hated us, tell us. If you loved us, tell others!“
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
