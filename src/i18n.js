import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        contact: "Contact",
        language: "Language"
      }
    }
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Acerca de",
        contact: "Contacto",
        language: "Idioma"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // idioma inicial
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
