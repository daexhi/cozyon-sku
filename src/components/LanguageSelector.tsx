import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { Language } from '../i18n/translations';

interface Props {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

const languages: { code: Language; label: string; flag: string; sub: string }[] = [
  { code: 'id', label: 'Indonesia', flag: '🇮🇩', sub: 'Bahasa Indonesia' },
  { code: 'en', label: 'English', flag: '🇬🇧', sub: 'Global English' },
  { code: 'zh', label: '简体中文', flag: '🇨🇳', sub: 'Mandarin Simplified' },
];

export const LanguageSelector: React.FC<Props> = ({ currentLang, onSelectLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const active = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors text-xs font-semibold"
        aria-label="Select Language"
      >
        <span className="text-sm">{active.flag}</span>
        <span className="hidden sm:inline">{active.code.toUpperCase()}</span>
        <ChevronDown size={13} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-2 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            Language / Bahasa / 语言
          </div>
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                onSelectLang(l.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left text-xs transition-colors ${
                l.code === currentLang
                  ? 'bg-slate-800 text-emerald-400 font-bold'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{l.flag}</span>
                <div>
                  <div className="leading-tight">{l.label}</div>
                  <div className="text-[10px] text-slate-500 font-normal">{l.sub}</div>
                </div>
              </div>
              {l.code === currentLang && <Check size={14} className="text-emerald-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
