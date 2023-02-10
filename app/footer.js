import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
      <div className="font-thin text-justify p-14 bg-yellow-900 text-stone-300 mt-14">
        <br/>
        <div className="flex items-center justify-center">
            <Image src="/logo.png" width={200} height={200} alt="One of the top hotels in malda" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 mt-12">
            <Link href="/about" className="hover:text-amber-500 transition duration-200 hover:scale-105">→ About us</Link>
            <Link href="https://www.google.com/maps/place/Hotel+Landmark+Malda/@25.0005976,88.1417702,17z/data=!3m1!4b1!4m10!3m9!1s0x39fafd0d08beb08f:0x38ab756ecd2fcb53!5m3!1s2023-03-10!4m1!1i2!8m2!3d25.0005976!4d88.1417702!16s%2Fg%2F11nnvd67rb" className='hover:text-amber-500 transition duration-200 hover:scale-105' target="_blank">→ Directions</Link>
            <Link href="https://g.page/r/CVPLL81udas4EBM/review" className='hover:text-amber-500 transition duration-200 hover:scale-105' target="_blank">→ Review us</Link>
            <div>
                <div className='underline underline-offset-4'>→ Contacts</div>
                <div>03512-221184</div>
                <div>03512-221560</div>
                <div>91-96416-93184</div>
            </div>
        </div>
        <p className="text-center text-white mt-8 text-sm">Copyright © 2023 Landmark Inc. All rights reserved.</p>
      </div>
    )
  }
  