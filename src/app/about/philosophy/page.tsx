import PhilosophyContent from '@/components/about/PhilosophyContent';

export const metadata = {
  title: 'Our Philosophy — How Cofreth Thinks & Works',
  description:
    "Six guiding principles behind Cofreth's service delivery: safety and comfort, quality at value, consistent service levels, continuous improvement, technology-driven efficiency and strong corporate values.",
  alternates: { canonical: '/about/philosophy' },
  openGraph: { title: 'Our Philosophy | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/philosophy' },
};

export default function PhilosophyPage() {
  return <PhilosophyContent />;
}
