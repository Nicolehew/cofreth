import AboutMainContent from '@/components/about/AboutMainContent';

export const metadata = {
  title: "About Cofreth | Malaysia's FM & Energy Pioneer Since 1986",
  description:
    "Established 1986 — Malaysia's first ISO-certified FM company & registered ESCO. 38+ years serving airports, hospitals, universities & government buildings nationwide.",
  alternates: { canonical: '/about' },
  openGraph: {
    title:       "About Cofreth | Malaysia's FM & Energy Pioneer Since 1986",
    description: "Established 1986 — Malaysia's first ISO-certified FM company & registered ESCO. 38+ years serving landmark buildings nationwide.",
    url:         'https://www.cofreth.com.my/about',
  },
};

export default function AboutPage() {
  return <AboutMainContent />;
}
