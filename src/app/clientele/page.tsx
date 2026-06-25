import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientelePage from '@/components/pages/ClientelePage';

export const metadata = {
  title: 'Our Clients | Airports, Data Centres & Government | Cofreth',
  description:
    'Trusted by 30+ major clients across Malaysia — airports, data centres, hospitals, universities & government buildings. Serving landmark facilities since 1986.',
  alternates: { canonical: '/clientele' },
  openGraph: {
    title:       'Our Clients | Airports, Data Centres & Government | Cofreth',
    description: 'Trusted by 30+ major clients — airports, data centres, hospitals, universities & government buildings across Malaysia.',
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
