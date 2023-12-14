import './globals.css'
import { Itim} from '@next/font/google';
import Link from 'next/link'
import { initGA, logPageView } from '../analytics';
import Footer from './footer';

const font = Itim({ 
  subsets: ['latin'],
  weight: ['400', '400'],
  variable: '--font-itim'
});

export default function RootLayout({ children }) {

    // useEffect(() => {
    //   if (!window.GA_INITIALIZED) {
    //     initGA();
    //     window.GA_INITIALIZED = true;
    //   }
    //   logPageView();
    // }, []);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${font.className}`} >
        <div className="m-4 text-xl absolute">
          <Link href="/">
            <div className="border border-stone-900 p-3 hover:bg-amber-500 hover:translate-x-3 transition duration-150 ease-in-out">
              ← Back Home
            </div>
          </Link>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
