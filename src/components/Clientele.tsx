'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const clients = [
  { name: 'Top Glove', domain: 'topglove.com' },
  { name: 'HSBC', domain: 'hsbc.com' },
  { name: 'Citibank', domain: 'citibank.com' },
  { name: 'Standard Chartered', domain: 'sc.com' },
  { name: 'Great Eastern', domain: 'greateasternlife.com' },
  { name: 'OCBC Bank', domain: 'ocbc.com' },
  { name: 'American Express', domain: 'americanexpress.com' },
  { name: 'Prudential', domain: 'prudential.com' },
  { name: 'AIA', domain: 'aia.com' },
  { name: 'Bosch', domain: 'bosch.com' },
  { name: 'British American Tobacco', domain: 'bat.com' },
  { name: 'BHP Billiton', domain: 'bhp.com' },
  { name: 'Texas Instruments', domain: 'ti.com' },
  { name: 'Bank Negara Malaysia', domain: 'bnm.gov.my' },
  { name: 'Telekom Malaysia', domain: 'tm.com.my' },
  { name: 'DiGi', domain: 'digi.com.my' },
  { name: 'Genting', domain: 'genting.com' },
  { name: 'Padini', domain: 'padini.com' },
  { name: 'IJM', domain: 'ijm.com' },
  { name: 'WCT', domain: 'wct.com.my' },
  { name: 'Jebsen & Jessen', domain: 'jebsen.com' },
  { name: 'Indah Water', domain: 'iwk.com.my' },
  { name: 'Amanahraya', domain: 'arb.com.my' },
  { name: 'Uniten', domain: 'uniten.edu.my' },
];

const sectors = [
  { label: 'Banking & Finance', count: '6+', icon: '🏦' },
  { label: 'Energy & Utilities', count: '4+', icon: '⚡' },
  { label: 'Corporate & MNC', count: '10+', icon: '🏢' },
  { label: 'Education', count: '3+', icon: '🎓' },
  { label: 'Government & GLCs', count: '5+', icon: '🏛️' },
  { label: 'Hospitality & Retail', count: '4+', icon: '🛍️' },
];

function LogoCard({ client }: { client: typeof clients[0] }) {
  return (
    <div className="flex-shrink-0 w-44 h-24 mx-3 flex items-center justify-center bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#6BBD45]/50 rounded-2xl px-5 transition-all duration-300 group cursor-default">
      <div className="relative w-full h-12 flex items-center justify-center">
        <Image
          src={`https://logo.clearbit.com/${client.domain}`}
          alt={client.name}
          width={120}
          height={48}
          className="object-contain max-h-10 filter brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
          unoptimized
          onError={(e) => {
            const parent = (e.target as HTMLImageElement).parentElement;
            if (parent) {
              parent.innerHTML = `<span class="text-gray-300 group-hover:text-white text-xs font-semibold text-center leading-tight transition-colors">${client.name}</span>`;
            }
          }}
        />
      </div>
    </div>
  );
}

export default function Clientele() {
  const header = useScrollReveal();
  const sectors_ref = useScrollReveal(0.1);

  // Split clients into two rows for the marquee
  const row1 = clients.slice(0, 12);
  const row2 = clients.slice(12);

  return (
    <section
      id="clientele"
      className="py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 60%, #0F2419 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Clientele</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted by Malaysia's Best</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            For over 38 years, we have proudly served leading organisations across banking,
            energy, corporate, education, and government sectors.
          </p>
        </div>

        {/* Sector stats */}
        <div
          ref={sectors_ref.ref}
          className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-16"
        >
          {sectors.map((s, i) => (
            <div
              key={s.label}
              className="text-center p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#6BBD45]/15 hover:border-[#6BBD45]/40 transition-all duration-300 group"
              style={{
                opacity: sectors_ref.visible ? 1 : 0,
                transform: sectors_ref.visible ? 'none' : 'translateY(20px)',
                transition: `all 0.5s ease ${i * 80}ms`,
              }}
            >
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-bold text-[#6BBD45] group-hover:scale-110 transition-transform inline-block">{s.count}</div>
              <div className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 1 — scrolls left */}
      <div className="relative mb-4 overflow-hidden">
        <div
          className="flex"
          style={{
            animation: 'marquee-left 35s linear infinite',
            width: 'max-content',
          }}
        >
          {[...row1, ...row1, ...row1].map((client, i) => (
            <LogoCard key={`r1-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — scrolls right */}
      <div className="relative overflow-hidden mb-16">
        <div
          className="flex"
          style={{
            animation: 'marquee-right 40s linear infinite',
            width: 'max-content',
          }}
        >
          {[...row2, ...row2, ...row2].map((client, i) => (
            <LogoCard key={`r2-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center rounded-2xl border border-white/10 bg-white/5 py-10 px-6">
          <p className="text-white font-semibold text-lg mb-2">Join 30+ leading organisations across Malaysia</p>
          <p className="text-gray-400 text-sm mb-6">Let us help you achieve operational excellence and sustainable facilities.</p>
          <a
            href="#contact"
            className="inline-block bg-[#6BBD45] hover:bg-[#5aa838] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 text-sm hover:shadow-lg hover:shadow-[#6BBD45]/30 hover:-translate-y-0.5"
          >
            Partner With Us
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
