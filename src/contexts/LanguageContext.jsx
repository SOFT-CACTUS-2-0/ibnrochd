import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from '../translations';

// Create the language context
const LanguageContext = createContext();

// Get initial language from localStorage or default to FR
const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  return savedLanguage || 'FR';
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(), // use saved language or default
    interpolation: {
      escapeValue: false,
    },
  });

// Language provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage());

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem('language', lng); // Save to localStorage
    
    // Set data-direction on root element
    const root = document.getElementById('root');
    if (root) {
      root.setAttribute('data-direction', lng === 'MA' ? 'rtl' : 'ltr');
    }
  };

  // Set initial direction on mount
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.setAttribute('data-direction', language === 'MA' ? 'rtl' : 'ltr');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;