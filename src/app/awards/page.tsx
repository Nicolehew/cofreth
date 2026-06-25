import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AwardsPage from '@/components/pages/AwardsPage';

export const metadata = {
  title: 'Cofreth Awards | Frost & Sullivan, NEA & ASEAN Recognition',
  description:
    "5× Frost & Sullivan Malaysia Excellence Award, NEA EPC Champion 2022, ASEAN Energy Award & more. Malaysia's most decorated FM & energy company.",
  alternates: { canonical: '/awards' },
  openGraph: {
    title:       'Cofreth Awards | Frost & Sullivan, NEA & ASEAN Recognition',
    description: "5× Frost & Sullivan winner, NEA EPC Champion 2022, ASEAN Energy Award — Malaysia's most decorated FM & energy company.",
    url:         'https://www.cofreth.com.my/awards',
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <AwardsPage />
      </main>
      <Footer />
    </>
  );
}
