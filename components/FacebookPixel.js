// components/FacebookPixel.js

import Script from 'next/script';
import { useEffect } from 'react';

const FacebookPixel = ({ pixelId }) => {
  useEffect(() => {
    // Facebook Pixel initialization
    if (typeof window !== 'undefined') {
      !function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      // Initialize the Facebook Pixel with your pixel ID
      fbq('init', pixelId);

      // Track a PageView event
      fbq('track', 'PageView');
    }
  }, [pixelId]);

  return null; // Facebook Pixel doesn't need to render anything
};

export default FacebookPixel;
