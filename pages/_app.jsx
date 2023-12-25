// pages/_app.tsx or pages/_app.jsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import FacebookPixel from '../components/FacebookPixel';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Trigger Facebook Pixel on route change
    const handleRouteChange = () => {
      fbq('track', 'PageView');
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup event listener on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
        strategy="afterInteractive"
      />
      <FacebookPixel pixelId={process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
