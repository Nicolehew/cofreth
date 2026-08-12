'use client';
import { useState, useRef, useEffect } from 'react';
import { useLanguage, type Lang } from '@/contexts/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';

const languages: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文',    flag: '🇨🇳' },
  { code: 'ja', label: '日本語',  flag: '🇯🇵' },
  { code: 'ko', label: '한국어',  flag: '🇰🇷' },
];

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find(l => l.code === lang) ?? languages[0];

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (mobile) {
    return (
      <div className="px-5 py-3 border-b nav-mobile-border">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Language</p>
        <div className="flex gap-2 flex-wrap">
          {languages.map(l => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                lang === l.code
                  ? 'bg-[#6BBD45] text-white'
                  : 'bg-white/10 nav-mobile-text hover:bg-[#6BBD45]/20'
              }`}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-[#6BBD45]/60 text-white/80 hover:text-white transition-all text-sm font-medium"
        aria-label="Select language"
      >
        <Globe size={14} className="text-[#6BBD45]" />
        <span className="hidden sm:inline">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden">{current.flag}</span>
        <ChevronDown size={12} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-[600]"
          style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
          {languages.map(l => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all hover:bg-[#6BBD45]/15 ${
                lang === l.code ? 'text-[#6BBD45] font-bold' : 'text-white/80 hover:text-white font-medium'
              }`}
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.label}</span>
              {lang === l.code && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#6BBD45]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
