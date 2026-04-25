'use client';

import { useState } from 'react';
import { MapPin, Phone, Printer, Mail, Send } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const header = useScrollReveal();
  const left = useScrollReveal(0.1);
  const right = useScrollReveal(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Contact Us</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A2D] mb-4">Get In Touch</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ready to optimise your facilities? Reach out to our team for a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div
            ref={left.ref}
            className="space-y-8 transition-all duration-700"
            style={{ opacity: left.visible ? 1 : 0, transform: left.visible ? 'none' : 'translateX(-40px)' }}
          >
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: 'linear-gradient(135deg, #1B3A2D 0%, #0F2419 100%)' }}
            >
              <h3 className="text-xl font-bold mb-6">Cofreth (M) Sdn Bhd</h3>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: 'Address', content: 'No. 39, Jalan USJ Sentral 3,\nUSJ Sentral, Persiaran Subang 1,\n47600 Subang Jaya, Selangor, Malaysia.', href: undefined },
                  { icon: Phone, label: 'Telephone', content: '+(603) 8023 8878', href: 'tel:+60380238878' },
                  { icon: Printer, label: 'Fax', content: '+(603) 8025 1252', href: undefined },
                  { icon: Mail, label: 'Email', content: 'info@cofreth.com.my', href: 'mailto:info@cofreth.com.my' },
                ].map(({ icon: Icon, label, content, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#6BBD45]/20 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={18} color="#6BBD45" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm text-gray-200 hover:text-[#6BBD45] transition-colors whitespace-pre-line">{content}</a>
                      ) : (
                        <div className="text-sm text-gray-200 whitespace-pre-line">{content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-56 bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0276!2d101.5897!3d3.0523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b9af60c4c9f%3A0x0!2sUSJ%20Sentral%2C%20Subang%20Jaya!5e0!3m2!1sen!2smy!4v1"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right */}
          <div
            ref={right.ref}
            className="bg-gray-50 rounded-2xl p-8 transition-all duration-700 delay-150"
            style={{ opacity: right.visible ? 1 : 0, transform: right.visible ? 'none' : 'translateX(40px)' }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                <div className="w-16 h-16 bg-[#6BBD45]/10 rounded-full flex items-center justify-center">
                  <Send size={28} color="#6BBD45" />
                </div>
                <h3 className="text-xl font-bold text-[#1B3A2D]">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thank you for reaching out. Our team will get back to you shortly.</p>
                <button onClick={() => setSent(false)} className="text-[#6BBD45] text-sm font-semibold hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#1B3A2D] mb-6">Send Us A Message</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: 'name', label: 'Full Name *', placeholder: 'John Doe', required: true, type: 'text' },
                    { key: 'company', label: 'Company', placeholder: 'Your Company', required: false, type: 'text' },
                  ].map(({ key, label, placeholder, required, type }) => (
                    <div key={key}>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{label}</label>
                      <input
                        required={required}
                        type={type}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] bg-white transition-colors"
                        placeholder={placeholder}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: 'email', label: 'Email *', placeholder: 'you@company.com', required: true, type: 'email' },
                    { key: 'phone', label: 'Phone', placeholder: '+60 12 345 6789', required: false, type: 'tel' },
                  ].map(({ key, label, placeholder, required, type }) => (
                    <div key={key}>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{label}</label>
                      <input
                        required={required}
                        type={type}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] bg-white transition-colors"
                        placeholder={placeholder}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Message *</label>
                  <textarea
                    required rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6BBD45] bg-white transition-colors resize-none"
                    placeholder="Tell us about your facility management needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#6BBD45] hover:bg-[#5aa838] text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm hover:shadow-lg hover:shadow-[#6BBD45]/30 hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
