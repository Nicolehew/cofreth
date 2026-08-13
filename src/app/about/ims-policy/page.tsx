import IMSContent from '@/components/about/IMSContent';

export const metadata = {
  title: 'IMS Policy — Integrated Quality, Safety & Environmental',
  description:
    "Cofreth's Integrated Management System Policy (Revision 4, 2024) — 9 commitments unifying ISO 9001, 14001, 45001, 50001 and 41001 quality, safety, environmental, energy and facility management.",
  alternates: { canonical: '/about/ims-policy' },
  openGraph: { title: 'IMS Policy | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/ims-policy' },
};

export default function IMSPolicyPage() {
  return <IMSContent />;
}
