import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ScrollProgress from '@/components/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const BASE_URL = 'https://www.cofreth.com.my';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  'Cofreth Malaysia | Facilities Management & Energy Services',
    template: '%s | Cofreth Malaysia',
  },
  description:
    "Malaysia's leading Facilities Management & Energy Services company since 1986. ISO certified ESCO, 5× Frost & Sullivan Award winner. Serving airports, data centres & government buildings.",

  applicationName: 'Cofreth (M) Sdn Bhd',
  authors:   [{ name: 'Cofreth (M) Sdn Bhd', url: BASE_URL }],
  referrer:  'origin-when-cross-origin',

  alternates: { canonical: '/' },

  openGraph: {
    type:        'website',
    locale:      'en_MY',
    siteName:    'Cofreth (M) Sdn Bhd',
    title:       'Cofreth Malaysia | Facilities Management & Energy Services',
    description: "Malaysia's FM & Energy pioneer since 1986. ISO certified ESCO, 5× Frost & Sullivan Award winner. Airports, data centres & government buildings.",
    images: [{
      url:    '/og-image.png',
      width:  1200,
      height: 630,
      alt:    'Cofreth Malaysia | Facilities Management & Energy Services',
    }],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'Cofreth — FM & Energy Services Malaysia',
    description: "Malaysia's FM pioneer since 1986. ISO certified, ESCO registered.",
    images:      ['/og-image.png'],
  },

  icons: {
    icon:  [
      { url: '/favicon.ico',     sizes: 'any' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },

  verification: {
    google: 'AaCMTlUZVnMEGi_DwLNB6RFJAhGEkidULp9o8SAThN4',
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-MY" className="h-full antialiased" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-full flex flex-col`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
