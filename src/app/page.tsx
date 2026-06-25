import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import HomeAboutSnippet from '@/components/home/HomeAboutSnippet';
import HomeVideo from '@/components/home/HomeVideo';
import HomeServices from '@/components/home/HomeServices';
import HomeWhyUs from '@/components/home/HomeWhyUs';
import HomeAwards from '@/components/home/HomeAwards';
import HomeProjects from '@/components/home/HomeProjects';
import HomeNews from '@/components/home/HomeNews';
import HomeClientele from '@/components/home/HomeClientele';
import HomeCTA from '@/components/home/HomeCTA';
import { JsonLd, COFRETH_ORG } from '@/components/JsonLd';

export const metadata = {
  title: 'Cofreth Malaysia | Facilities Management & Energy Services',
  description:
    "Malaysia's #1 FM & Energy company since 1986. ISO certified ESCO, 5× Frost & Sullivan Award winner. Serving airports, data centres & government buildings nationwide.",
  alternates: { canonical: '/' },
  openGraph: {
    title:       'Cofreth Malaysia | Facilities Management & Energy Services',
    description: "Malaysia's FM & Energy pioneer since 1986. ISO certified ESCO, 5× Frost & Sullivan Award winner. Airports, data centres & government buildings.",
    url:         'https://www.cofreth.com.my',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      ...COFRETH_ORG,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Facilities Management & Energy Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facilities Management', url: 'https://www.cofreth.com.my/services/facilities-management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Energy Services',       url: 'https://www.cofreth.com.my/services/energy-services' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Green Expertise',        url: 'https://www.cofreth.com.my/services/green-expertise' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Technology',       url: 'https://www.cofreth.com.my/services/smart-technology' } },
        ],
      },
    },
    {
      '@type':    'WebSite',
      '@id':      'https://www.cofreth.com.my/#website',
      url:        'https://www.cofreth.com.my',
      name:       'Cofreth (M) Sdn Bhd',
      description:"Malaysia's leading Facilities Management and Energy Services company",
      publisher:  { '@id': 'https://www.cofreth.com.my/#organization' },
      inLanguage: 'en-MY',
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <Navbar />
      <main>
        <Hero />
        <HomeAboutSnippet />
        <HomeServices />
        <HomeVideo />
        <HomeWhyUs />
        <HomeAwards />
        <HomeProjects />
        <HomeNews />
        <HomeClientele />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
