import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {faWifi, faSnowflake, faUser, faBowlFood, faLocation, faStar, faPhone, faChampagneGlasses, faCakeCandles, faLocationDot, faMapPin, faArrowRight, faArrowRightArrowLeft, faArrowRightLong} from "@fortawesome/free-solid-svg-icons"


export default function Restaurant() {
  return (
    <div className="m-auto w-full h-full">
      <div className="text-center mt-8 md:mt-0 text-pink-500">
        <FontAwesomeIcon
          icon={faChampagneGlasses}
          beatFade
          width="50"
          height="50"
          className="inline-block animate-spin"
        />
        <strong> OUR ALL-NEW RESTRO IS HERE !</strong>
      </div>
      <div className="block grid-col-1 content-center gap-4 text-center">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/site-photo/rest-1.jpg"
            alt=""
            width="300"
            height="450"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/site-photo/rest-2.jpg"
            alt=""
            width="300"
            height="300"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/site-photo/rest-3.jpg"
            alt=""
            width="300"
            height="300"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/site-photo/rest-4.jpg"
            alt=""
            width="300"
            height="300"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/site-photo/rest-5.jpg"
            alt=""
            width="300"
            height="300"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/site-photo/rest-6.jpg"
            alt=""
            width="300"
            height="300"
          />
        </div>
      </div>
      <div className="md:flex bg-slate-100 rounded-xl p-2 md:p-4 border-black border-2">
        <Image
          className="w-48 h-48 mx-auto"
          src="/prim-logo.png"
          alt=""
          width="384"
          height="384"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Immerse yourself in a warm, inviting ambiance where each meal is
              an unforgettable journey. Our restaurant, a symphony of tastes,
              offers a menu crafted with passion. Come savor the art of
              delicious dining – an experience that goes beyond the plate.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-pink-400">Royal Touch</div>
            <div className="text-pink-700">Fine Dine Restaurant</div>
            <div className="inline-block">
              <Link href="https://royaltouch.my.canva.site/" target="_blank">
                <div className="transition duration-200 ease-in-out text-center text-xl bg-pink-800 hover:bg-amber-400 hover:text-black text-white font-bold px-4 py-2 my-4 rounded cursor-pointer dark:bg-pink-400">
                  Learn more...
                </div>
              </Link>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
}
