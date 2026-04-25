import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
const data = {
  iconName: 'Leaf',
  title: 'Green Expertise',
  subtitle: 'Sustainable Building Solutions for a Greener Future',
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80&fit=crop',
  intro: 'Cofreth\'s Green Expertise team helps organisations achieve sustainability certifications, reduce their carbon footprint, and transition to renewable energy — backed by accredited professionals and decades of built environment experience.',
  sections: [
    {
      title: 'Green Building Commissioning Agent & Specialist',
      desc: 'Green Building Commissioning ensures that your building\'s systems are designed, installed and performing according to the owner\'s project requirements and sustainable design intent. Cofreth\'s accredited commissioning agents work across new constructions and existing buildings seeking green certification.',
      points: ['Pre-design & design phase review', 'Construction verification & testing', 'Systems performance verification', 'GreenRE & GBI certification support', 'LEED commissioning support'],
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80&fit=crop',
    },
    {
      title: 'Accredited Professional & Facilitator',
      desc: 'Our team includes accredited green building professionals and facilitators recognised by Malaysia\'s leading green building rating bodies. We guide project teams through the certification process, documentation requirements, and compliance strategies to achieve and maintain green ratings.',
      points: ['GreenRE Accredited Professional', 'Green Building Index (GBI) Facilitator', 'Documentation & credit compliance', 'Certification application management', 'Post-occupancy evaluation support'],
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80&fit=crop',
    },
    {
      title: 'Renewable Energy & Cogeneration',
      desc: 'We assess, design and implement renewable energy systems for commercial and industrial facilities — including solar PV, cogeneration (combined heat and power), and hybrid energy systems that reduce reliance on grid power and lower operating costs.',
      points: ['Solar PV system feasibility & design', 'Cogeneration (CHP) system implementation', 'Grid-tie & off-grid solutions', 'Energy storage integration', 'ROI analysis & project management'],
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80&fit=crop',
    },
    {
      title: 'Solar Thermal Solutions',
      desc: 'Solar thermal systems harness sunlight to generate heat for domestic hot water, space heating, and industrial processes — delivering significant energy cost savings for hotels, hospitals, industrial facilities, and residential developments.',
      points: ['Solar water heating systems', 'Industrial process heat applications', 'Hotel & hospitality hot water solutions', 'System design, supply & installation', 'Maintenance & performance monitoring'],
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80&fit=crop',
    },
  ],
  ctaText: 'Discuss Your Green Building Goals',
};

export const metadata = { title: 'Green Expertise | Cofreth (M) Sdn Bhd' };
export default function Page() { return (<><Navbar /><main><ServiceDetailPage {...data} /></main><Footer /></>); }
