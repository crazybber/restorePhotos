/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "upcdn.io",
      "replicate.delivery",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com"
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/crazybber/restorePhotos",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/ai-photo-restorer",
        permanent: false,
      },
    ];
  },
};
