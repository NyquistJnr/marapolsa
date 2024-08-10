/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marapolsamovies.onrender.com",
      },
    ],
  },
};

export default nextConfig;
