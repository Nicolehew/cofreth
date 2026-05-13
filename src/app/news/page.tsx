import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsPage from '@/components/pages/NewsPage';

export const metadata = {
  title: 'News & Insights — Facilities Management & Energy Malaysia',
  description:
    'Latest news, industry insights and announcements from Cofreth — Malaysia\'s leading FM and Energy Services company. Stay current on FM trends, awards, and energy efficiency developments.',
  alternates: { canonical: '/news' },
  openGraph: {
    title:       'News & Insights | Cofreth Malaysia',
    description: 'FM and energy news, insights and announcements from Malaysia\'s FM pioneer since 1986.',
    url:         'https://www.cofreth.com.my/news',
  },
};
export default function Page() {
  return (
    <>
      <Navbar />
      <main><NewsPage /></main>
      <Footer />
    </>
  );
}
