import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language || "es");

  // Sincroniza i18n con nuestro estado
  useEffect(() => {
    const changeLanguageHandler = (lng) => {
      setLanguage(lng);
    };

    i18n.on('languageChanged', changeLanguageHandler);

    return () => {
      i18n.off('languageChanged', changeLanguageHandler);
    };
  }, []);

  // Cada vez que language cambie, sincroniza con i18n
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
    localStorage.setItem("lang", language);
    document.documentElement.lang = language;
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
    if (savedLang && savedLang !== language) {
      setLanguage(savedLang);
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);