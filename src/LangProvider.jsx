import { useState } from 'react';
import { LangContext } from './LangContext';
import { translations } from './i18n';

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  const toggle = () => setLang(l => l === 'en' ? 'es' : 'en');
  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  );
}