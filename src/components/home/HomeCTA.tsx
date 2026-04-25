'use client';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomeCTA() {
  const section = useScrollReveal();
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center"
        ref={section.ref}
        style={{ opacity: section.visible ? 1 : 0, transform: section.visible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <div className="bg-gradient-to-br from-[#1B3A2D] to-[#0F2419] rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6BBD45]/10 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#6BBD45]/10 rounded-full translate-y-1/2 -translate-x-1/4" />
          <div className="relative z-10">
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Ready to Get Started?</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Let's Optimise Your Facilities Together</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
              Contact our experts for a tailored facility management or energy services consultation. We'll assess your needs and propose a solution that delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#6BBD45] hover:bg-[#5aa838] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-sm hover:shadow-lg hover:shadow-[#6BBD45]/30 hover:-translate-y-0.5">
                Schedule a Consultation
              </Link>
              <a href="tel:+60380238878" className="flex items-center justify-center gap-2 border border-white/30 hover:border-[#6BBD45] text-white hover:text-[#6BBD45] font-semibold px-8 py-4 rounded-full transition-all duration-200 text-sm">
                <Phone size={16} /> +(603) 8023 8878
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-400">
              <a href="mailto:business@cofreth.com.my" className="flex items-center gap-2 hover:text-[#6BBD45] transition-colors">
                <Mail size={14} /> business@cofreth.com.my
              </a>
              <a href="mailto:cofreth@cofreth.com.my" className="flex items-center gap-2 hover:text-[#6BBD45] transition-colors">
                <Mail size={14} /> cofreth@cofreth.com.my
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
