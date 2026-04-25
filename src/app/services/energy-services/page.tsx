import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
const data = {
  iconName: 'Zap',
  title: 'Energy Services',
  subtitle: 'Smarter Energy Management. Guaranteed Savings.',
  heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80&fit=crop',
  intro: 'As a registered Energy Service Company (ESCO) with Malaysia Green Technology Corporation and MAESCO, Cofreth delivers science-based energy solutions that reduce costs, improve efficiency, and lower your carbon footprint — with guaranteed results.',
  sections: [
    {
      title: 'Energy Audit',
      desc: 'An Energy Audit is the process of undertaking a detailed inspection, survey, measurement and analysis of energy flow of a built environment. Cofreth employs over 100 specialised tools enabling concurrent data logging across multiple significant energy users within a facility. We offer three audit types aligned with ASHRAE and MAESCO guidelines.',
      points: ['Walk-through / Preliminary Audit (Level 1)', 'General / Detailed Audit (Level 2)', 'Investment Grade Audit (Level 3)', 'Data logging & concurrent measurement', 'ASHRAE & MAESCO aligned methodology'],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80&fit=crop',
    },
    {
      title: 'Cofreth Energy Efficiency Programme (CEEP©)',
      desc: 'CEEP© combines scientific approaches with energy audit and management to measure consumption and implement efficiency improvements. This proprietary programme represents an extension of energy management practices designed to optimise operational efficiency and achieve cost savings — with performance tracked and verified.',
      points: ['Baseline energy consumption analysis', 'Identification of efficiency opportunities', 'Implementation of energy conservation measures (ECMs)', 'Ongoing monitoring & verification (M&V)', 'Performance reporting & continuous improvement'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&fit=crop',
    },
    {
      title: 'Energy Performance Contracting (CoPC)',
      desc: 'CoPC is an innovative form of contracting developed to overcome major barriers to delivering cost-effective energy efficiency. As your ESCO, Cofreth guarantees energy savings and greenhouse gas reductions — meaning you only pay for the savings we deliver.',
      points: ['Guaranteed energy & cost savings', 'Single-source accountability', 'Minimised technical & financial risk', 'No upfront capital expenditure required', 'Enhanced business competitiveness'],
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80&fit=crop',
    },
    {
      title: 'District Cooling System & Thermal Energy Storage',
      desc: 'District Cooling System (DCS) is an outsourced solution that provides cooling energy to built environments via a centralised plant distributing chilled water through underground pipelines. Thermal Energy Storage enables strategic load management — producing cooling during off-peak hours for daytime use, reducing peak demand and energy costs.',
      points: ['Centralised chilled water distribution', 'Off-peak energy production & storage', 'Reduced peak demand charges', 'Lower capital & operating costs vs. conventional cooling', 'Sustainable & environmentally friendly'],
      image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80&fit=crop',
    },
    {
      title: 'Energy Consultancy',
      desc: 'Our energy consultants study your consumption patterns and provide independent advisory services — including third-party evaluations of energy-saving products and guidance on green, sustainable solutions tailored to your sector and operational profile.',
      points: ['Energy consumption analysis & benchmarking', 'Independent product & technology evaluation', 'Green building & sustainability advisory', 'Regulatory compliance guidance', 'Renewable energy feasibility studies'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop',
    },
  ],
  ctaText: 'Request an Energy Audit or Consultation',
};

export const metadata = { title: 'Energy Services | Cofreth (M) Sdn Bhd' };
export default function Page() { return (<><Navbar /><main><ServiceDetailPage {...data} /></main><Footer /></>); }
