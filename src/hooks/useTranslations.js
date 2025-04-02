import { useState, useCallback } from 'react';
import translations from '../../langues.json';

export const useTranslations = () => {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'en';
  });

  const toggleLanguage = useCallback((newLang) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
  }, []);

  return {
    lang,
    translations,
    toggleLanguage
  };
}; 