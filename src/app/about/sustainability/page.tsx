import SustainabilityContent from '@/components/about/SustainabilityContent';

export const metadata = {
  title: 'Sustainability — ESG Policy & UN SDGs | Cofreth Malaysia',
  description:
    "Cofreth's Environmental, Social & Governance (ESG) Policy and alignment with all 17 UN Sustainable Development Goals — committed to long-term value for people, planet and prosperity.",
  alternates: { canonical: '/about/sustainability' },
  openGraph: { title: 'Sustainability | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/sustainability' },
};

export default function SustainabilityPage() {
  return <SustainabilityContent />;
}
