import ValuesContent from '@/components/about/ValuesContent';

export const metadata = {
  title: "Our Value & Ethics — Cofreth's 6 Core Principles",
  description:
    "Cofreth's six core values: Professionalism, Partnership, Team Spirit, Value Creation, Respect for the Environment and Ethics — aligned with the Responsible Business Alliance (RBA) code of conduct.",
  alternates: { canonical: '/about/values' },
  openGraph: { title: 'Our Value & Ethics | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/values' },
};

export default function ValuesPage() {
  return <ValuesContent />;
}
