import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ScrollProgress from '@/components/ScrollProgress';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const BASE_URL = 'https://www.cofreth.com.my';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  'Cofreth (M) Sdn Bhd — Facilities Management & Energy Services Malaysia',
    template: '%s | Cofreth Malaysia',
  },
  description:
    "Malaysia's leading Facilities Management and Energy Services company since 1986. ISO 9001, 14001, 45001, 50001 & 41001 certified. 5× Frost & Sullivan Award winner. Registered ESCO.",

  applicationName: 'Cofreth (M) Sdn Bhd',
  authors:   [{ name: 'Cofreth (M) Sdn Bhd', url: BASE_URL }],
  referrer:  'origin-when-cross-origin',

  alternates: { canonical: '/' },

  openGraph: {
    type:        'website',
    locale:      'en_MY',
    siteName:    'Cofreth (M) Sdn Bhd',
    title:       'Cofreth (M) Sdn Bhd — Facilities Management & Energy Services Malaysia',
    description: "Malaysia's leading FM and Energy Services company since 1986. ISO certified, ESCO registered, 5× Frost & Sullivan Award winner.",
    images: [{
      url:    '/projects/klia2.jpg',
      width:  1200,
      height: 630,
      alt:    'KLIA2 — a Cofreth-managed landmark facility in Malaysia',
    }],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'Cofreth — FM & Energy Services Malaysia',
    description: "Malaysia's FM pioneer since 1986. ISO certified, ESCO registered.",
    images:      ['/projects/klia2.jpg'],
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('cofreth-theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans min-h-full flex flex-col`}>
        <ThemeProvider>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
