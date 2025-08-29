import React, { createContext, useContext, useState, useEffect } from "react";
import { I18nProvider } from "react-i18next"; // si usas i18next
import i18n from "../i18n"; // tu configuración de i18next

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es"); // idioma por defecto

  // Cambiar idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // Leer idioma guardado al montar
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar contexto más fácilmente
export const useLanguage = () => useContext(LanguageContext);
