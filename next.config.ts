import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const contentSecurityPolicy = [
  "default-src 'self'",
  // Hydration needs unsafe-inline; unsafe-eval is only needed by the dev server.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://images.unsplash.com https://www.cofreth.com.my https://img.youtube.com",
  "frame-src 'self' https://www.youtube.com https://www.google.com https://maps.google.com",
  "connect-src 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ');

// The certificate viewer embeds these PDFs in a same-site iframe.
// No default-src/object-src here: they can stop the browser's built-in PDF viewer.
const embeddablePdfHeaders = [
  { key: 'X-Frame-Options',         value: 'SAMEORIGIN' },
  { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
];

const securityHeaders = [
  { key: 'X-Frame-Options',          value: 'DENY' },
  { key: 'X-Content-Type-Options',   value: 'nosniff' },
  { key: 'X-DNS-Prefetch-Control',   value: 'on' },
  { key: 'Referrer-Policy',          value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy',       value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'Strict-Transport-Security',value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy',  value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
      { source: '/api/pdf/:file', headers: embeddablePdfHeaders },
    ];
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

      /* ── Old /images/*.pdf → current /api/pdf/ paths (301 permanent) ── */
      { source: '/images/ISO_45001-2018(OHS)(2023-2026).pdf',  destination: '/api/pdf/ISO_45001-2018_OHS.pdf',  permanent: true },
      { source: '/images/ISO_14001-2015(EMS)(2023-2026).pdf',  destination: '/api/pdf/ISO_14001-2015_EMS.pdf',  permanent: true },
      { source: '/images/ISO_9001-2015_(QMS)(2023-2026).pdf',  destination: '/api/pdf/ISO_9001-2015_QMS.pdf',   permanent: true },
      { source: '/images/ISO_41001-2018(FMS)(2023-2025).pdf',  destination: '/api/pdf/ISO_41001-2018_FMS.pdf',  permanent: true },
      { source: '/images/ISO_50001-2018(EnMS)(2023-2026).pdf', destination: '/api/pdf/ISO_50001-2018_EnMS.pdf', permanent: true },

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
