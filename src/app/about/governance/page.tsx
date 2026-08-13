import GovernanceContent from '@/components/about/GovernanceContent';

export const metadata = {
  title: 'Corporate Governance — Accountability & Transparency',
  description:
    'Cofreth corporate governance framework: RBA compliance, anti-bribery and corruption policy, transparent financial reporting and responsible procurement. Accountability at every level.',
  alternates: { canonical: '/about/governance' },
  openGraph: { title: 'Corporate Governance | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/governance' },
};

export default function GovernancePage() {
  return <GovernanceContent />;
}
