import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientelePage from '@/components/pages/ClientelePage';

export const metadata = {
  title: 'Our Clientele — Airports, Data Centres & Government',
  description:
    'Cofreth serves 30+ major clients across Malaysia — airports, data centres, universities, government complexes, hospitals and commercial towers. Trusted by leading organisations since 1986.',
  alternates: { canonical: '/clientele' },
  openGraph: {
    title:       'Our Clientele | Cofreth Malaysia',
    description: '30+ major clients — airports, data centres, universities and government across Malaysia.',
    url:         'https://www.cofreth.com.my/clientele',
  },
};
export default function Page() {
  return (
    <>
      <Navbar />
      <main><ClientelePage /></main>
      <Footer />
    </>
  );
}
