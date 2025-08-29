// context/LanguageProvider.js
import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language || "es");
  const [refresh, setRefresh] = useState(0); // Añade un estado para forzar refresco

  // Cada vez que language cambie, sincroniza con i18n
  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
    document.documentElement.lang = language;
    setRefresh(prev => prev + 1); // Forzar refresco global
  }, [language]);

  // Toggle para cambiar idioma
  const toggleLanguage = () => {
    setLanguage(prev => (prev === "es" ? "en" : "es"));
  };

  // Función para cambiar a un idioma específico
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Carga el idioma guardado al inicio
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLanguage(savedLang);
      i18n.changeLanguage(savedLang);
    } else {
      // Detecta el idioma del navegador
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es' || browserLang === 'en') {
        setLanguage(browserLang);
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, changeLanguage, refresh }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);