'use client';

import { ReactNode, useEffect, useState } from 'react';
import { getDir, Lang, setCurrentLang } from '@/lib/i18n';



function readLangFromUrlOrStorage(): Lang {
  if (typeof window === 'undefined') return 'ar';
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang === 'ar' || urlLang === 'en') return urlLang;

  const stored = window.localStorage.getItem('sahla-lang');
  // default to Arabic unless user explicitly stored English
  return stored === 'en' ? 'en' : 'ar';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar');

  useEffect(() => {
    const next = readLangFromUrlOrStorage();
    // Avoid cascading renders: only update if changed
    setLang((prev) => {
      if (prev === next) return prev;
      return next;
    });
    setCurrentLang(next);




    const html = document.documentElement;
    html.lang = next;
    html.dir = getDir(next);

    window.localStorage.setItem('sahla-lang', next);

    // if user changes ?lang=... while the app is already mounted
    const onPopOrUrlChange = () => {
      const next2 = readLangFromUrlOrStorage();
      setLang((prev) => {
        if (prev === next2) return prev;
        return next2;
      });
      setCurrentLang(next2);
      html.lang = next2;
      html.dir = getDir(next2);
      window.localStorage.setItem('sahla-lang', next2);
    };


    window.addEventListener('popstate', onPopOrUrlChange);
    return () => window.removeEventListener('popstate', onPopOrUrlChange);
  }, []);




  return <>{children}</>;
}



// Simple language toggle component
function LangToggle({ className }: { className?: string }) {
  // lazy import to keep this file small
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);


  const setLang = (next: Lang) => {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.localStorage.setItem('sahla-lang', next);
    window.location.href = url.toString();
  };

  if (!mounted) return null;


  const current = (() => {
    const stored = window.localStorage.getItem('sahla-lang');
    return stored === 'en' ? 'en' : 'ar';
  })();

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setLang(current === 'ar' ? 'en' : 'ar')}
        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Toggle language"
      >
        {current === 'ar' ? 'EN' : 'AR'}
      </button>
    </div>
  );
}

