import './globals.css'
import { Kurale} from '@next/font/google';
import Link from 'next/link'
import { initGA, logPageView } from '../analytics';
import Footer from './footer';

const font = Kurale({ 
  subsets: ['latin'],
  weight: ['400', '400'],
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${font.className}`} >
        <div className="my-2 text-xs md:text-lg">
            <div className="grid grid-cols-5 border-y border-dotted border-slate-700 py-1 px-3 text-center">
              <Link href="/" className='hover:text-amber-700 transition duration-150 ease-in-out '>Home</Link>
              <Link href="/contact" className='hover:text-amber-700 transition duration-150 ease-in-out'>Contact</Link>
              <Link href="/hotel+malda+wb" className='hover:text-amber-700 transition duration-150 ease-in-out'>Rooms</Link>
              <Link href="/banquet+malda+wb" className='hover:text-amber-700 transition duration-150 ease-in-out '>Banquet</Link>
              <Link href="https://royaltouch.my.canva.site/" target="_blank" className='hover:text-amber-700 transition duration-150 ease-in-out '>Restaurant</Link>
            </div>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
