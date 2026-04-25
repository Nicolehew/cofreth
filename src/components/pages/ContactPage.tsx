'use client';
import { MapPin, Phone, Printer, Mail, Clock, Send } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';

export default function ContactPage() {
  const hero = useScrollReveal();
  const form = useScrollReveal();
  const info = useScrollReveal();

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSubmitted(true); }, 1200);
  }

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div ref={hero.ref} className="max-w-5xl mx-auto px-6 text-center transition-all duration-700" style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Contact Us</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Start a<br /><span className="text-[#6BBD45]">Conversation</span></h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a facility management consultation, energy audit, or green building assessment —
            our team is ready to help. Reach out and we'll respond within one business day.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <div ref={info.ref} className="lg:col-span-2 space-y-6 transition-all duration-700" style={{ opacity: info.visible ? 1 : 0, transform: info.visible ? 'none' : 'translateX(-30px)' }}>
            <div>
              <h2 className="text-2xl font-bold text-[#1B3A2D] mb-2">Get In Touch</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Visit us at our office or reach out through any of the channels below. Our team of FM specialists is ready to discuss your needs.</p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#6BBD45]/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#6BBD45]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Office Address</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
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
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Telephone</p>
                  <a href="tel:+60380238878" className="text-sm text-gray-700 hover:text-[#6BBD45] transition-colors">+(603) 8023 8878</a>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#6BBD45]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Printer size={18} className="text-[#6BBD45]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Fax</p>
                  <p className="text-sm text-gray-700">+(603) 8025 1252</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#6BBD45]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#6BBD45]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:business@cofreth.com.my" className="text-sm text-gray-700 hover:text-[#6BBD45] transition-colors block">business@cofreth.com.my</a>
                  <a href="mailto:cofreth@cofreth.com.my" className="text-sm text-gray-700 hover:text-[#6BBD45] transition-colors block">cofreth@cofreth.com.my</a>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#6BBD45]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#6BBD45]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Business Hours</p>
                  <p className="text-sm text-gray-700">Monday – Friday: 8:30 AM – 5:30 PM</p>
                  <p className="text-sm text-gray-500">Saturday – Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div ref={form.ref} className="lg:col-span-3 transition-all duration-700" style={{ opacity: form.visible ? 1 : 0, transform: form.visible ? 'none' : 'translateX(30px)' }}>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-[#1B3A2D] mb-2">Send Us an Enquiry</h3>
              <p className="text-gray-500 text-sm mb-8">Fill in the form below and one of our specialists will be in touch shortly.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#6BBD45]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-[#6BBD45]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1B3A2D] mb-2">Message Sent!</h4>
                  <p className="text-gray-500 text-sm">Thank you for your enquiry. We'll get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Full Name *</label>
                      <input required type="text" placeholder="Your name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Company</label>
                      <input type="text" placeholder="Your company" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Email *</label>
                      <input required type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Phone</label>
                      <input type="tel" placeholder="+60 ..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Service of Interest</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] transition-colors text-gray-700 bg-white">
                      <option value="">Select a service...</option>
                      <option>Facilities Management</option>
                      <option>Energy Services</option>
                      <option>Green Expertise</option>
                      <option>Smart Technology</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Message *</label>
                    <textarea required rows={5} placeholder="Tell us about your needs or project..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] transition-colors resize-none" />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-[#1B3A2D] hover:bg-[#6BBD45] text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {sending ? 'Sending...' : <><Send size={15} /> Send Enquiry</>}
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
          src="https://maps.google.com/maps?q=No+39+Jalan+USJ+Sentral+3+USJ+Sentral+47600+Subang+Jaya+Selangor+Malaysia&output=embed&z=17"
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
