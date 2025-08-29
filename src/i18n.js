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

      plan_button: "Start now",
            why_card1_title: "Automated scheduling",
      why_card1_desc: "Schedule meetings automatically with Google Calendar and AI.",
      why_card2_title: "Personalized smart prompts",
      why_card2_desc: "Design unique AI-powered interactions tailored to your business.",
      why_card3_title: "Data synchronization",
      why_card3_desc: "Connect Excel and manage customer data like a professional.",
      features: {
  calendar: {
    name: "Google Calendar",
    description: "Connect with Google Calendar and automatically schedule appointments."
  },
  email: {
    name: "Email Capture",
    description: "Automatically collect emails and client data."
  },
  branding: {
    name: "Customization",
    description: "Adjust the chatbot style to match your brand image."
  },
  analytics: {
    name: "Analytics",
    description: "Get metrics about usage, messages, and conversions."
  }
},
featureCards: [
  {
    title: "24/7 Effortless Support",
    desc: "Your bot responds anytime, even when your business is closed."
  },
  {
    title: "Set Up in Minutes",
    desc: "Just write basic questions and answers, the AI takes care of the rest."
  },
  {
    title: "100% Customizable Design",
    desc: "Colors, typography, and style adapted to your brand."
  },
  {
    title: "Scalable & Cost-effective",
    desc: "Serve hundreds of customers at once without hiring more staff."
  },
  {
    title: "Smart Integrations",
    desc: "Connect with Google Calendar, Excel, and other tools you already use."
  },
  {
    title: "Insightful Analytics",
    desc: "Understand what your customers ask and improve your services."
  }
],
featureCards_title: "Everything you need in a single chatbot",
footer: {
  pricing: "Pricing",
  about: "About",
  contact: "Contact",
  privacy: "Privacy Policy",
  terms: "Terms of Use",
  copyright: "© 2025 - Talobot. All rights reserved."
},
navbar: {
  pricing: "Pricing",
  about: "About",
  contact: "Contact",
  dashboard: "Dashboard",
  profile: "Profile",
  login: "Login",
  register: "Register",
  logout: "Logout",
  language: {
    es: "ES",
    en: "EN"
  },
  aria: {
    dashboard: "Go to dashboard",
    profile: "Profile",
    login: "Login",
    register: "Register",
    logout: "Logout"
  }
}
,



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

      plan_button: "Empezar ahora",
       why_card1_title: "Agenda automatizada",
      why_card1_desc: "Programa reuniones automáticamente con Google Calendar e IA.",
      why_card2_title: "Prompts inteligentes personalizados",
      why_card2_desc: "Diseña interacciones únicas con IA adaptadas a tu negocio.",
      why_card3_title: "Sincronización de datos",
      why_card3_desc: "Conecta Excel y gestiona datos de clientes como un profesional.",
      features: {
  calendar: {
    name: "Google Calendar",
    description: "Conecta con Google Calendar y agenda citas automáticamente."
  },
  email: {
    name: "Captura de Email",
    description: "Recoge automáticamente los correos y datos de tus clientes."
  },
  branding: {
    name: "Personalización",
    description: "Ajusta el estilo del chatbot según la imagen de tu marca."
  },
  analytics: {
    name: "Estadísticas",
    description: "Obtén métricas sobre uso, mensajes y conversiones."
  }
},
featureCards: [
  {
    title: "Atención 24/7 sin esfuerzo",
    desc: "Tu bot responde en cualquier momento, incluso cuando tu negocio está cerrado."
  },
  {
    title: "Configúralo en minutos",
    desc: "Solo escribe preguntas y respuestas básicas, la IA se encarga del resto."
  },
  {
    title: "Diseño 100% personalizable",
    desc: "Colores, tipografía y estilo adaptados a tu marca."
  },
  {
    title: "Escalable y económico",
    desc: "Atiende a cientos de clientes a la vez sin contratar más personal."
  },
  {
    title: "Integraciones inteligentes",
    desc: "Conecta con Google Calendar, Excel y otras herramientas que ya usas."
  },
  {
    title: "Estadísticas útiles",
    desc: "Entiende qué preguntan tus clientes y mejora tus servicios."
  }
],
featureCards_title: "Todo lo que necesitas en un solo chatbot",
footer: {
  pricing: "Planes",
  about: "Acerca de",
  contact: "Contacto",
  privacy: "Políticas de privacidad",
  terms: "Términos de uso",
  copyright: "© 2025 - Talobot. Todos los derechos reservados."
}
,
navbar: {
  pricing: "Planes",
  about: "Acerca de",
  contact: "Contacto",
  dashboard: "Panel",
  profile: "Perfil",
  login: "Iniciar sesión",
  register: "Registrarse",
  logout: "Cerrar sesión",
  language: {
    es: "ES",
    en: "EN"
  },
  aria: {
    dashboard: "Ir al panel",
    profile: "Perfil",
    login: "Iniciar sesión",
    register: "Registrarse",
    logout: "Cerrar sesión"
  }
}



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
