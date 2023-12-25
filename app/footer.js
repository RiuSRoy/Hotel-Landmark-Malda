import Image from "next/image";
import Link from "next/link";
import { googleBusinessProfile } from "./layout";

export default function Footer() {
  return (
    <div className="shadow-inner shadow-yellow-300 font-thin text-justify p-14 bg-yellow-900 text-stone-300 mt-14">
      <br />
      <div className="flex items-center justify-center">
        <Image
          src="/favicon.ico"
          width={200}
          height={200}
          alt="One of the top hotels in malda"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 mt-12">
        <Link
          href="/hotel-malda-wb"
          className="hover:text-amber-500 transition duration-200 hover:scale-105"
        >
          → Browse Rooms
        </Link>
        <Link href={googleBusinessProfile} target="_blank">
          → Directions
        </Link>
        <Link
          href="https://g.page/r/CVPLL81udas4EBM/review"
          className="hover:text-amber-500 transition duration-200 hover:scale-105"
          target="_blank"
        >
          → Review us
        </Link>
        <div>
          <div className="underline underline-offset-4">→ Contacts</div>
          <div>03512-221184</div>
          <div>03512-221560</div>
          <div>91-96416-93184</div>
        </div>
      </div>
      <p className="text-center text-white mt-8 text-sm">
        Copyright © 2023 Landmark Inc. All rights reserved.
      </p>
    </div>
  );
}
