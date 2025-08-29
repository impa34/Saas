import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n";

// Exporta el contexto para que pueda ser importado en otros archivos
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  // Cada vez que language cambie, sincroniza con i18n
  useEffect(() => {
    i18n.changeLanguage(language);
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
    if (savedLang) {
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

// Exporta el hook useLanguage
export const useLanguage = () => useContext(LanguageContext);