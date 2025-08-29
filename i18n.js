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

      // Página principal
      hero_title: "Your personal chat assistant for your business.",
      hero_subtitle: "Generate your AI-powered chatbot in minutes.",
      hero_cta: "Try it for free!",

      cta_title: "Ready to improve your customer service?",
      cta_subtitle: "Create your assistant in less than 5 minutes. No technical knowledge needed.",
      cta_button: "Create my chatbot!",

      why_choose_us: "Why choose us?",

      plans_title: "Choose your plan",
      plan_pro: "Pro",
      plan_full: "Full",
      plan_lifetime: "Lifetime",

      plan_pro_price: "€9/month",
      plan_full_price: "€19/month",
      plan_lifetime_price: "€79 one-time",

      plan_pro_features: [
        "Detailed statistics",
        "Google Calendar integration",
        "Unlimited prompts"
      ],
      plan_full_features: [
        "Everything in Pro",
        "Telegram and Excel integration",
        "Conversation history"
      ],
      plan_lifetime_features: [
        "Permanent version of Full",
        "Priority support",
        "No monthly fees"
      ],

      plan_button: "Start now"
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

      // Página principal
      hero_title: "Tu asistente de chat personal para tu negocio.",
      hero_subtitle: "Genera tu chatbot inteligente con IA en minutos.",
      hero_cta: "¡Pruébalo gratis!",

      cta_title: "¿Listo para mejorar tu atención al cliente?",
      cta_subtitle: "Crea tu asistente en menos de 5 minutos. No necesitas conocimientos técnicos.",
      cta_button: "¡Crear mi chatbot!",

      why_choose_us: "¿Por qué elegirnos?",

      plans_title: "Elige tu plan",
      plan_pro: "Pro",
      plan_full: "Full",
      plan_lifetime: "Lifetime",

      plan_pro_price: "9€/mes",
      plan_full_price: "19€/mes",
      plan_lifetime_price: "79€ único",

      plan_pro_features: [
        "Estadísticas detalladas",
        "Integración de Google Calendar",
        "Prompts ilimitados"
      ],
      plan_full_features: [
        "Todo de Pro",
        "Integración de Telegram y Excel",
        "Historial de conversaciones"
      ],
      plan_lifetime_features: [
        "Versión permanente de Full",
        "Soporte prioritario",
        "Sin mensualidades"
      ],

      plan_button: "Empezar ahora"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
