import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
const data = {
  iconName: 'Building2',
  title: 'Facilities Management',
  subtitle: 'Total FM Solutions for Every Built Environment',
  heroImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&fit=crop',
  intro: 'Cofreth delivers comprehensive, integrated Facilities Management services that keep your assets performing at their optimal best — reducing costs, ensuring safety, and extending the lifecycle of your built environment.',
  sections: [
    {
      title: 'Total Facility Management',
      desc: 'Our Total FM service provides a single-source solution for all your facility needs. We manage the full spectrum of hard and soft services, ensuring seamless operations across your entire portfolio. From HVAC and electrical systems to cleaning and security, our integrated approach eliminates the complexity of managing multiple contractors.',
      points: ['Single point of accountability', 'Integrated hard & soft services', 'Preventive & corrective maintenance', 'Asset lifecycle management', '24/7 helpdesk and rapid response'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop',
    },
    {
      title: 'Operation & Maintenance',
      desc: 'Our O&M services are designed to maximise equipment uptime, minimise breakdowns, and reduce total cost of ownership. We employ trained technicians and use structured Planned Preventive Maintenance (PPM) schedules to keep all mechanical, electrical, and plumbing systems in peak condition.',
      points: ['Mechanical, Electrical & Plumbing (MEP) maintenance', 'Planned Preventive Maintenance (PPM)', 'Corrective maintenance & emergency response', 'Energy system monitoring', 'Compliance with regulatory requirements'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80&fit=crop',
    },
    {
      title: 'Technical Due Diligence',
      desc: 'Before acquiring, leasing, or refurbishing a property, our Technical Due Diligence service provides an independent, expert assessment of the building\'s condition, system performance, and future maintenance liabilities — giving you the confidence to make informed decisions.',
      points: ['Building condition assessments', 'MEP systems evaluation', 'Compliance & regulatory review', 'Capital expenditure forecasting', 'Independent technical reports'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop',
    },
    {
      title: 'FM Consultancy Services',
      desc: 'Drawing on 38+ years of FM expertise, our consultancy team provides strategic advice on FM strategy, procurement, benchmarking, and performance improvement. We help organisations optimise their FM operations, reduce costs, and improve service delivery.',
      points: ['FM strategy & governance', 'Procurement & tendering support', 'Performance benchmarking', 'Process improvement & SLA development', 'Training & capability building'],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop',
    },
  ],
  ctaText: 'Request a Facilities Management Consultation',
};

export const metadata = { title: 'Facilities Management | Cofreth (M) Sdn Bhd' };
export default function Page() { return (<><Navbar /><main><ServiceDetailPage {...data} /></main><Footer /></>); }
