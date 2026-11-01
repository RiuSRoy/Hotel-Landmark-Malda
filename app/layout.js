import "./globals.css";
import localFont from "next/font/local";
import Footer from "./footer";
import Navigation from "@/components/Navigation";

// Fonts are self-hosted (variable woff2, latin subset, from Google Fonts — SIL OFL) instead of
// next/font/google, so builds never depend on fetching from Google. Next 13's Google font loader
// crashed on Vercel when Google returned font URLs it couldn't parse.
const display = localFont({
  src: "./fonts/Outfit-latin.woff2",
  weight: "400 700",
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: "./fonts/Inter-latin.woff2",
  weight: "400 600",
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Hotel Landmark Malda | Business Hotel, Banquet & Restaurant",
    template: "%s | Hotel Landmark Malda",
  },
  description:
    "Hotel Landmark is a business hotel on Rabindra Avenue, Malda, West Bengal, with Economy, Deluxe and Suite rooms for 1 to 3 guests, a 200-guest banquet hall and an in-house restaurant.",
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
