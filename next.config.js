/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The old Royal Touch policy URL may still be linked from ads/lead forms.
      { source: "/privacy-policy-royal-touch", destination: "/privacy-policy", permanent: true },
    ];
  },
};

module.exports = nextConfig;
