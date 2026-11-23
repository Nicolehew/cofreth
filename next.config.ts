import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-Frame-Options',          value: 'DENY' },
  { key: 'X-Content-Type-Options',   value: 'nosniff' },
  { key: 'X-DNS-Prefetch-Control',   value: 'on' },
  { key: 'Referrer-Policy',          value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy',       value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'Strict-Transport-Security',value: 'max-age=63072000; includeSubDomains; preload' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",   // Next.js requires unsafe-inline/eval for hydration
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://images.unsplash.com https://www.cofreth.com.my",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
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

      /* ── Old /images/*.pdf → current /documents/ paths (301 permanent) ── */
      { source: '/images/ISO_45001-2018(OHS)(2023-2026).pdf',  destination: '/documents/ISO_45001-2018_OHS.pdf',  permanent: true },
      { source: '/images/ISO_14001-2015(EMS)(2023-2026).pdf',  destination: '/documents/ISO_14001-2015_EMS.pdf',  permanent: true },
      { source: '/images/ISO_9001-2015_(QMS)(2023-2026).pdf',  destination: '/documents/ISO_9001-2015_QMS.pdf',   permanent: true },
      { source: '/images/ISO_41001-2018(FMS)(2023-2025).pdf',  destination: '/documents/ISO_41001-2018_FMS.pdf',  permanent: true },
      { source: '/images/ISO_50001-2018(EnMS)(2023-2026).pdf', destination: '/documents/ISO_50001-2018_EnMS.pdf', permanent: true },

      /* ── Old service brochure PDFs → relevant service pages ── */
      { source: '/images/Project\\ Management.pdf',       destination: '/services/facilities-management', permanent: true },
      { source: '/images/Move\\ Management.pdf',          destination: '/services/facilities-management', permanent: true },
      { source: '/images/Work\\ Wizard.pdf',              destination: '/services/smart-technology',      permanent: true },
      { source: '/images/Strategic\\ Master\\ Planning.pdf', destination: '/services/facilities-management', permanent: true },
      { source: '/medini.pdf',                            destination: '/projects',                       permanent: true },
    ];
  },
};

export default nextConfig;
