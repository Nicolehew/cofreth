import FirstsContent from '@/components/about/FirstsContent';

export const metadata = {
  title: 'Our Many Firsts — FM Industry Milestones in Malaysia',
  description:
    "Cofreth's industry firsts: first ISO-certified FM in Malaysia (1996), first ESCO CEEP contract (2001), first DCS in Asia (1997–2000), NEA 1st Prize 2018. A trail of pioneering achievements since 1986.",
  alternates: { canonical: '/about/firsts' },
  openGraph: { title: 'Our Many Firsts | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/firsts' },
};

export default function FirstsPage() {
  return <FirstsContent />;
}
