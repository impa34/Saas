import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [update, forceUpdate] = useState(0); // Para forzar re-renderización

  // Cada vez que language cambie, sincroniza con i18n
  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
    forceUpdate(prev => prev + 1); // Forzar re-renderización
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
    if (savedLang) setLanguage(savedLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, changeLanguage, update }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);