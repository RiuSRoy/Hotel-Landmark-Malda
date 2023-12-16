import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPhone} from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image';

export default function About() {
    return (
      <>
        <h1 className="text-center py-24 text-6xl">About Hotel Landmark Malda</h1>
        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-12 text-2xl text-justify">
            <p className="text-lime-800 mx-12">Welcome to Hotel Landmark, the most affordable destination for travellers in Malda, West Bengal. Our hotel is nestled in the heart of Malda amidst the hustling city life. Whether you are here for business or leisure, our luxurious accommodations and exceptional amenities will ensure that your stay is unforgettable.</p>

            <Image src="/10-dr.jpeg" width={500} height={500} alt="One of the top hotels in malda Reception double bedroom"/>

            <p className="text-amber-800 mx-12">At Landmark at Malda, we believe that every detail matters. That is why we have created a warm and inviting atmosphere, complete with beautiful furnishings, plush linens, and all the modern conveniences you need to feel at home.</p>

            <p className="text-lime-800 mx-12">At Landmark, we are proud to be a part of this vibrant and thriving community. We are located just minutes from the main market attraction of Malda. Our housekeeping staff family at Landmark are specially trained to meet every need of yours at any hour of the day. Your wish is our command.</p>
            
            <Image src="/1.jpeg" width={500} height={500} alt="One of the top hotels in malda Reception"/>
        
            <p className="text-amber-800 mx-12">As one of the leading hotels in Malda, we offer a range of exceptional services and amenities to make your stay even more memorable. Whether you are looking for a delicious meal, or healthy homely food, we will make everything you need right here on-site. </p>

            <p className="text-lime-800 mx-12">So why wait? Book your stay at Landmark at Malda, one of the top hotels in Malda, today and experience the best that West Bengal has to offer!</p>
            
            <Link href="tel:+919641693184" target="_blank">
              <div className="text-center hover:bg-amber-800 font-bold px-8 py-4 rounded-xl my-8 cursor-pointer shadow-2xl shadow-yellow-600 hover:shadow-amber-600 hover:text-white transition duration-200 ease-in-out">
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} color="black" width={40} />
                  <div>
                    <strong>+91-96416-93184</strong>
                  </div>
                </div>
              </div>
            </Link> 
        </div>
      </>
    )
}