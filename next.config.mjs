/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.ctfassets.net'],
        unoptimized:true
      },
      output:"standalone"
      
};

export default nextConfig;
