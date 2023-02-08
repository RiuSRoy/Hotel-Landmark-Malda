import './globals.css'
import { Itim} from '@next/font/google';

const font = Itim({ 
  subsets: ['latin'],
  weight: ['400', '400'],
  variable: '--font-itim'
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
        {children}
      </body>
    </html>
  )
}
