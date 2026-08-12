'use client';
import PageHero from '@/components/PageHero';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const form = useScrollReveal();
  const info = useScrollReveal();
  const { t } = useLanguage();
  const p = t.pages.contact;

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError('');
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    fd.get('name'),
          company: fd.get('company'),
          email:   fd.get('email'),
          phone:   fd.get('phone'),
          service: fd.get('service'),
          message: fd.get('message'),
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please email us directly at business@cofreth.com.my');
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero
        bgImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=90"
        eyebrow={p.heroEyebrow}
        eyebrowSub={p.heroEyebrowSub}
        title={<>{p.heroTitle1}<br /><span className="text-[#6BBD45]">{p.heroTitleAccent}</span></>}
        subtitle={p.heroSubtitle}
        stats={[]}
      />

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <div ref={info.ref} className="lg:col-span-2 space-y-6 transition-all duration-700" style={{ opacity: info.visible ? 1 : 0, transform: info.visible ? 'none' : 'translateX(-30px)' }}>
            <div>
              <h2 className="text-2xl font-bold text-[#1B3A2D] mb-2">{p.getInTouchTitle}</h2>
              <p className="text-gray-500 text-base leading-relaxed">{p.getInTouchBody}</p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#6BBD45]/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#6BBD45]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{p.addressLabel}</p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    No. 39, Jalan USJ Sentral 3<br />
                    USJ Sentral, Persiaran Subang 1<br />
                    47600 Subang Jaya<br />
                    Selangor, Malaysia
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#6BBD45]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#6BBD45]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{p.phoneLabel}</p>
                  <a href="tel:+60380238878" className="text-sm text-gray-700 hover:text-[#6BBD45] transition-colors">+(603) 8023 8878</a>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#6BBD45]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#6BBD45]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{p.emailLabel}</p>
                  <a href="mailto:business@cofreth.com.my" className="text-sm text-gray-700 hover:text-[#6BBD45] transition-colors block">business@cofreth.com.my</a>
                  <a href="mailto:cofreth@cofreth.com.my" className="text-sm text-gray-700 hover:text-[#6BBD45] transition-colors block">cofreth@cofreth.com.my</a>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#6BBD45]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#6BBD45]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{p.hoursLabel}</p>
                  <p className="text-sm text-gray-700">{p.hours1}</p>
                  <p className="text-sm text-gray-500">{p.hours2}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div ref={form.ref} className="lg:col-span-3 transition-all duration-700" style={{ opacity: form.visible ? 1 : 0, transform: form.visible ? 'none' : 'translateX(30px)' }}>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-[#1B3A2D] mb-2">{p.formTitle}</h3>
              <p className="text-gray-500 text-sm mb-8">{p.formSubtitle}</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#6BBD45]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-[#6BBD45]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1B3A2D] mb-2">{t.common.messageSent}</h4>
                  <p className="text-gray-500 text-sm">{t.common.thankYouEnquiry}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{p.nameLabel}</label>
                      <input required type="text" name="name" placeholder={p.namePlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{p.companyLabel}</label>
                      <input type="text" name="company" placeholder={p.companyPlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{p.emailInputLabel}</label>
                      <input required type="email" name="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{p.phoneInputLabel}</label>
                      <input type="tel" name="phone" placeholder="+60 ..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{p.serviceLabel}</label>
                    <select name="service" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] transition-colors text-gray-700 bg-white">
                      <option value="">{p.serviceDefault}</option>
                      {p.serviceOptions.map((opt) => <option key={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{p.messageLabel}</label>
                    <textarea required name="message" rows={5} placeholder={p.messagePlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] transition-colors resize-none" />
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-[#1B3A2D] hover:bg-[#6BBD45] text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {sending ? t.common.sending : <><Send size={15} /> {t.common.sendEnquiry}</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 relative">
        <iframe
          src="https://maps.google.com/maps?q=Cofreth+M+Sdn+Bhd+No+39+Jalan+USJ+Sentral+3+USJ+Sentral+47600+Subang+Jaya+Selangor&output=embed&z=18"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cofreth Office Location"
        />
      </section>
    </>
  );
}
