import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      /* ── Old PHP site → New Next.js routes (301 permanent) ── */
      { source: '/index.php',                          destination: '/',                                permanent: true },
      { source: '/index.php/:path*',                   destination: '/',                                permanent: true },
      { source: '/about.php',                          destination: '/about',                           permanent: true },
      { source: '/career.php',                         destination: '/careers',                         permanent: true },
      { source: '/careers.php',                        destination: '/careers',                         permanent: true },
      { source: '/clientele.php',                      destination: '/clientele',                       permanent: true },
      { source: '/services.php',                       destination: '/services',                        permanent: true },
      { source: '/awards.php',                         destination: '/awards',                          permanent: true },
      { source: '/projects.php',                       destination: '/projects',                        permanent: true },
      { source: '/news.php',                           destination: '/news',                            permanent: true },
      { source: '/contact.php',                        destination: '/contact',                         permanent: true },
      { source: '/green.php',                          destination: '/services/green-expertise',        permanent: true },
      { source: '/smart.php',                          destination: '/services/smart-technology',       permanent: true },
      { source: '/energy.php',                         destination: '/services/energy-services',        permanent: true },
      { source: '/fm.php',                             destination: '/services/facilities-management',  permanent: true },
      { source: '/facilities.php',                     destination: '/services/facilities-management',  permanent: true },
      { source: '/group.php',                          destination: '/group',                           permanent: true },
    ];
  },
};

export default nextConfig;
