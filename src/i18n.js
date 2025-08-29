import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      login: "Login",
      logout: "Logout",
      register: "Register",
      dashboard: "Dashboard",
      pricing: "Pricing",
      settings: "Settings",
      profile: "Profile",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      confirm: "Confirm",
      language: "Language",
    }
  },
  es: {
    translation: {
      home: "Inicio",
      login: "Iniciar sesión",
      logout: "Cerrar sesión",
      register: "Registrarse",
      dashboard: "Panel",
      pricing: "Precios",
      settings: "Configuración",
      profile: "Perfil",
      save: "Guardar",
      cancel: "Cancelar",
      delete: "Eliminar",
      confirm: "Confirmar",
      language: "Idioma",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
