import React, { createContext, useContext, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from '../translations';

// Create the language context
const LanguageContext = createContext();

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'FR', // default language
    interpolation: {
      escapeValue: false,
    },
  });

// Language provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;