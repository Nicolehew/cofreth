'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const sectors = [
  {
    name: 'Banking & Finance',
    clients: [
      { name: 'HSBC', logo: '/logos/hsbc.svg' },
      { name: 'Citibank', logo: '/logos/citi.svg' },
      { name: 'Standard Chartered', logo: '/logos/sc.svg' },
      { name: 'OCBC Bank', logo: '/logos/ocbc.svg' },
      { name: 'American Express', logo: '/logos/amex.svg' },
      { name: 'Great Eastern', logo: '/logos/greateastern.svg' },
    ],
  },
  {
    name: 'Insurance',
    clients: [
      { name: 'Prudential', logo: '/logos/prudential.svg' },
      { name: 'AIA', logo: '/logos/aia.svg' },
    ],
  },
  {
    name: 'Industrial & Manufacturing',
    clients: [
      { name: 'Bosch', logo: '/logos/bosch.svg' },
      { name: 'British American Tobacco', logo: '/logos/bat.svg' },
      { name: 'Texas Instruments', logo: '/logos/ti.svg' },
      { name: 'Top Glove', logo: '/logos/topglove.png' },
      { name: 'BHP Billiton', logo: '/logos/bhp.svg' },
    ],
  },
  {
    name: 'Telecommunications',
    clients: [
      { name: 'Telekom Malaysia', logo: '/logos/tm.svg' },
    ],
  },
  {
    name: 'Property & Hospitality',
    clients: [
      { name: 'Genting', logo: '/logos/genting.svg' },
      { name: 'IJM Corporation', logo: '/logos/ijm.png' },
    ],
  },
];

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-4 bg-white border border-gray-200 hover:border-[#6BBD45]/50 hover:shadow-xl rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 cursor-default">
      <div className="w-full h-20 flex items-center justify-center">
        <img
          src={logo}
          alt={`${name} logo`}
          style={{ maxHeight: 64, maxWidth: '100%', objectFit: 'contain', display: 'block', margin: '0 auto' }}
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = 'none';
            const fallback = img.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div style={{ display: 'none' }}
          className="w-16 h-16 rounded-2xl bg-[#1B3A2D] text-white text-2xl font-bold items-center justify-center">
          {name.charAt(0)}
        </div>
      </div>
      <p className="text-xs font-semibold text-gray-500 group-hover:text-[#6BBD45] transition-colors text-center leading-tight">{name}</p>
    </div>
  );
}

function SectorSection({ sector, index }: { sector: typeof sectors[0]; index: number }) {
  const reveal = useScrollReveal(0.1);
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${index * 80}ms` }}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-1 h-8 bg-[#6BBD45] rounded-full" />
        <h3 className="text-lg font-bold text-[#1B3A2D]">{sector.name}</h3>
        <span className="text-xs text-gray-400 font-medium">{sector.clients.length} client{sector.clients.length > 1 ? 's' : ''}</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {sector.clients.map(client => <LogoCard key={client.name} {...client} />)}
      </div>
    </div>
  );
}

export default function ClientelePage() {
  const hero = useScrollReveal();
  const stats = useScrollReveal();

  return (
    <>
      <div className="pt-24 md:pt-32 pb-12 md:pb-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div ref={hero.ref} className="max-w-5xl mx-auto px-6 text-center transition-all duration-700"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Our Clientele</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Trusted by Malaysia's<br /><span className="text-[#6BBD45]">Leading Organisations</span></h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            For over 38 years, Cofreth has earned the trust of 30+ of Malaysia's most respected organisations
            across banking, industry, telecommunications, and property sectors.
          </p>
        </div>
      </div>

      <section className="py-14" style={{ background: 'linear-gradient(90deg, #0a1810 0%, #1B3A2D 50%, #0a1810 100%)', borderTop: '1px solid rgba(107,189,69,0.2)', borderBottom: '1px solid rgba(107,189,69,0.2)' }}>
        <div ref={stats.ref} className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700"
          style={{ opacity: stats.visible ? 1 : 0, transform: stats.visible ? 'none' : 'translateY(20px)' }}>
          {[['30+','Active Clients'],['38+','Years of Service'],['5','Industry Sectors'],['100%','Client Retention']].map(([v,l]) => (
            <div key={l}>
              <div className="text-4xl font-bold text-[#6BBD45] mb-1">{v}</div>
              <div className="text-gray-400 text-sm font-medium">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {sectors.map((sector, i) => <SectorSection key={sector.name} sector={sector} index={i} />)}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[#1B3A2D] to-[#0F2419] rounded-3xl p-12 text-white">
            <div className="text-[#6BBD45] text-5xl font-serif mb-6">"</div>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              Our clients choose Cofreth not just for our technical expertise, but for our commitment to
              accountability, transparency, and guaranteed outcomes.
            </p>
            <div className="w-16 h-0.5 bg-[#6BBD45] mx-auto mb-4" />
            <p className="text-[#6BBD45] font-semibold text-sm tracking-widest uppercase">Cofreth Leadership</p>
          </div>
        </div>
      </section>
    </>
  );
}
