import "./globals.css";
import { Outfit, Inter } from "next/font/google";
import Footer from "./footer";
import Navigation from "@/components/Navigation";

const display = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: {
    default: "Hotel Landmark Malda | Business Hotel, Banquet & Restaurant",
    template: "%s | Hotel Landmark Malda",
  },
  description:
    "Hotel Landmark is a business hotel on Rabindra Avenue, Malda, West Bengal, with Economy, Deluxe and Suite rooms, a 200-guest banquet hall and an in-house restaurant.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
