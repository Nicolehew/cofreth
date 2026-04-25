'use client';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const clients = [
  { name: 'HSBC', logo: '/logos/hsbc.svg' },
  { name: 'Citibank', logo: '/logos/citi.svg' },
  { name: 'Standard Chartered', logo: '/logos/sc.svg' },
  { name: 'OCBC Bank', logo: '/logos/ocbc.svg' },
  { name: 'American Express', logo: '/logos/amex.svg' },
  { name: 'Prudential', logo: '/logos/prudential.svg' },
  { name: 'AIA', logo: '/logos/aia.svg' },
  { name: 'Bosch', logo: '/logos/bosch.svg' },
  { name: 'British American Tobacco', logo: '/logos/bat.svg' },
  { name: 'Texas Instruments', logo: '/logos/ti.svg' },
  { name: 'Telekom Malaysia', logo: '/logos/tm.svg' },
  { name: 'Genting', logo: '/logos/genting.svg' },
  { name: 'Top Glove', logo: '/logos/topglove.png' },
  { name: 'IJM', logo: '/logos/ijm.png' },
  { name: 'Great Eastern', logo: '/logos/greateastern.svg' },
  { name: 'BHP Billiton', logo: '/logos/bhp.svg' },
];

function LogoTile({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 w-52 h-24 mx-3 flex flex-col items-center justify-center gap-2 bg-white hover:bg-[#6BBD45]/5 border border-gray-100 hover:border-[#6BBD45]/30 rounded-2xl px-5 transition-all duration-300 group hover:shadow-md">
      <img
        src={logo}
        alt={name}
        style={{ maxHeight: 44, maxWidth: 130, objectFit: 'contain', display: 'block', filter: 'grayscale(30%)' }}
        className="group-hover:filter-none transition-all duration-300"
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = 'none';
          const sib = img.nextElementSibling as HTMLElement | null;
          if (sib) sib.style.display = 'block';
        }}
      />
      <span className="hidden text-base font-bold text-[#1B3A2D]">{name.charAt(0)}</span>
      <span className="text-[10px] font-semibold text-gray-400 group-hover:text-[#6BBD45] transition-colors truncate w-full text-center">{name}</span>
    </div>
  );
}

export default function HomeClientele() {
  const header = useScrollReveal();
  const row1 = clients.slice(0, 8);
  const row2 = clients.slice(8);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={header.ref} className="text-center mb-14 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Our Clientele</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A2D] mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">Serving 30+ of Malaysia's most respected organisations across banking, energy, corporate and government sectors.</p>
        </div>
      </div>

      <div className="relative mb-4 overflow-hidden">
        <div className="flex" style={{ animation: 'marquee-left 32s linear infinite', width: 'max-content' }}>
          {[...row1, ...row1, ...row1].map((c, i) => <LogoTile key={`r1-${i}`} {...c} />)}
        </div>
      </div>

      <div className="relative overflow-hidden mb-12">
        <div className="flex" style={{ animation: 'marquee-right 38s linear infinite', width: 'max-content' }}>
          {[...row2, ...row2, ...row2].map((c, i) => <LogoTile key={`r2-${i}`} {...c} />)}
        </div>
      </div>

      <div className="text-center">
        <Link href="/clientele" className="inline-block bg-[#1B3A2D] hover:bg-[#6BBD45] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-sm">
          View All Clients
        </Link>
      </div>

      <style jsx>{`
        @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes marquee-right { 0% { transform: translateX(-33.333%); } 100% { transform: translateX(0); } }
      `}</style>
    </section>
  );
}
