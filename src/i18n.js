import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home_nav: "Home",
      login: "Login",
      logout: "Logout",
      register: "Register",
      dashboard: "Dashboard",
      plans: "Pricing",
      settings: "Settings",
      profile_nav: "Profile",
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
      cta_subtitle:
        "Create your assistant in less than 5 minutes. No technical knowledge needed.",
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
        "Unlimited prompts",
      ],
      plan_full_features: [
        "Everything in Pro",
        "Telegram and Excel integration",
        "Conversation history",
      ],
      plan_lifetime_features: [
        "Permanent version of Full",
        "Priority support",
        "No monthly fees",
      ],

      plan_button: "Start now",
      why_card1_title: "Automated scheduling",
      why_card1_desc:
        "Schedule meetings automatically with Google Calendar and AI.",
      why_card2_title: "Personalized smart prompts",
      why_card2_desc:
        "Design unique AI-powered interactions tailored to your business.",
      why_card3_title: "Data synchronization",
      why_card3_desc:
        "Connect Excel and manage customer data like a professional.",
      features: {
        calendar: {
          name: "Google Calendar",
          description:
            "Connect with Google Calendar and automatically schedule appointments.",
        },
        email: {
          name: "Email Capture",
          description: "Automatically collect emails and client data.",
        },
        branding: {
          name: "Customization",
          description: "Adjust the chatbot style to match your brand image.",
        },
        analytics: {
          name: "Analytics",
          description: "Get metrics about usage, messages, and conversions.",
        },
      },
      featureCards: [
        {
          title: "24/7 Effortless Support",
          desc: "Your bot responds anytime, even when your business is closed.",
        },
        {
          title: "Set Up in Minutes",
          desc: "Just write basic questions and answers, the AI takes care of the rest.",
        },
        {
          title: "100% Customizable Design",
          desc: "Colors, typography, and style adapted to your brand.",
        },
        {
          title: "Scalable & Cost-effective",
          desc: "Serve hundreds of customers at once without hiring more staff.",
        },
        {
          title: "Smart Integrations",
          desc: "Connect with Google Calendar, Excel, and other tools you already use.",
        },
        {
          title: "Insightful Analytics",
          desc: "Understand what your customers ask and improve your services.",
        },
      ],
      featureCards_title: "Everything you need in a single chatbot",
      footer: {
        pricing: "Pricing",
        about: "About",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        copyright: "© 2025 - Talobot. All rights reserved.",
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
          en: "EN",
        },
        aria: {
          dashboard: "Go to dashboard",
          profile: "Profile",
          login: "Login",
          register: "Register",
          logout: "Logout",
        },
      },
      pricing: {
        back: "Back",
        selectPlanTitle: "Select your plan",
        selectPlanSubtitle:
          "Start for free and upgrade whenever you need. No commitment.",
        plans: {
          pro: {
            title: "Pro",
            price: "€9/month",
            features: [
              "Unlimited prompts",
              "Bot customization (colors, stats, fonts)",
              "Google Calendar integration",
            ],
            cta: "Go Pro",
          },
          full: {
            title: "Full",
            price: "€19/month",
            features: [
              "Telegram bot",
              "Download conversations",
              "Spreadsheet support",
            ],
            cta: "Get Full",
            badge: "Best deal",
          },
          lifetime: {
            title: "Lifetime",
            price: "€79 one-time",
            features: [
              "Everything in Full",
              "No recurring payments",
              "Priority support",
            ],
            cta: "Buy lifetime access",
            badge: "Popular",
          },
        },
        legalNotice:
          "All plans include a 30-day money-back guarantee. You can cancel your subscription at any time from your dashboard.",
      },
      privacy: {
        back: "Back",
        title: "Privacy Policy",
        lastUpdated: "Last updated: August 2, 2025",
        sections: {
          1: {
            title: "Introduction",
            content:
              "This Privacy Policy describes our policies regarding the collection, use, and disclosure of your data when using Talobot. By using the service, you agree to the use of your information in accordance with this policy.",
          },
          2: {
            title: "Key Definitions",
            content: [
              "<strong>Account:</strong> Unique identifier to access the service.",
              "<strong>Personal Data:</strong> Information that identifies you directly or indirectly.",
              "<strong>Cookies:</strong> Files used to track activity and improve the service.",
              "<strong>Service:</strong> The website talochatbot.com and its functionalities.",
              "<strong>Service Provider:</strong> Third parties assisting in operating the site.",
            ],
          },
          3: {
            title: "Data We Collect",
            content:
              "We may collect name, email, browsing information, IP address, browser type, session duration, and device used.",
          },
          4: {
            title: "Use of Data",
            content:
              "We use your data to improve the service, offer personalized features, contact you, and protect our platform.",
          },
          5: {
            title: "Data Sharing",
            content:
              "We may share your data with services such as Stripe, Google Calendar, hosting providers, and usage analytics, always under privacy obligations.",
          },
          6: {
            title: "Retention and Deletion",
            content:
              "We retain your data while your account is active or as legally required. You can request deletion by emailing us.",
          },
          7: {
            title: "Security",
            content:
              "We implement reasonable measures to protect your information, but no system is 100% secure. Use strong passwords and keep your account protected.",
          },
          8: {
            title: "Children's Privacy",
            content:
              "We do not collect information from children under 13. If you are a parent or guardian and find your child has shared data, contact us.",
          },
          9: {
            title: "Changes to This Policy",
            content:
              "We may update this policy. We will notify you by email or on the site when significant changes occur.",
          },
          10: {
            title: "Contact",
            content:
              "You can email us at <a href='mailto:talochatbot@gmail.com'>talochatbot@gmail.com</a> or visit <a href='https://talochatbot.com' target='_blank'>talochatbot.com</a>.",
          },
        },
      },

      home: {
        title: "Your Chatbots",
        newBot: "+ New Chatbot",
        botLimitMsg:
          "🚫 Free plan only allows one chatbot. Upgrade to create more.",
        integration: {
          toggle: "How to embed your chatbot on your website?",
          description1: "Paste this snippet in the",
          description2: "of your site:",
          codeSnippet: `<script 
  src="https://talochatbot.com/widget.js" 
  data-chatbot-id="YOUR_CHATBOT_ID">
</script>`,
          footer:
            "This code will display the chatbot button automatically in the bottom-right corner. You can customize everything from the dashboard: colors, font, size, and responses.",
        },
        deleteModal: {
          title: "Delete chatbot?",
          message:
            "This action cannot be undone. Are you sure you want to continue?",
          confirm: "Yes, delete",
          cancel: "No, go back",
        },
        stats: {
          loading: "Loading statistics...",
          restricted: "📊 Statistics only available for Pro or Full users",
          title: "Statistics",
          conversations: "🗨️ Conversations",
          messages: "💬 Messages",
          botMessages: "🤖 Bot Messages",
          userMessages: "👤 User Messages",
          average: "📊 Avg/messages per conversation",
          lastInteraction: "⏱️ Last",
          never: "Never",
        },
        buttons: {
          home: "Home",
          profile: "Profile",
          logout: "Logout",
          telegram: "Telegram",
          chat: "Chat",
          edit: "Edit",
        },
      },
      profile: {
        loading: "Loading profile...",
        back: "Home",
        title: "Your profile",
        labels: {
          username: "Username",
          email: "Email",
          status: "Current plan",
        },
        planIncludes: "Your plan includes:",
        plans: {
          free: [
            "1 basic chatbot",
            "Up to 5 prompts",
            "No design customization",
            "No statistics",
          ],
          pro: [
            "Google Calendar integration",
            "Email reminders",
            "Detailed usage statistics",
            "Advanced customization (colors, font, size)",
            "Unlimited prompts",
          ],
          full: [
            "Google Calendar integration",
            "Email reminders",
            "Excel support",
            "Telegram bot",
            "Download conversations in CSV",
            "Detailed usage statistics",
            "Advanced customization (colors, font, size)",
            "Unlimited prompts",
            "Priority support",
          ],
          lifetime: [
            "Google Calendar integration",
            "Email reminders",
            "Excel support",
            "Telegram bot",
            "Download conversations in CSV",
            "Detailed usage statistics",
            "Advanced customization (colors, font, size)",
            "Unlimited prompts",
            "Priority support",
          ],
        },
        cancelSubscription: "Cancel subscription",
        cancelModal: {
          title: "Cancel subscription?",
          message:
            "This action cannot be undone. Are you sure you want to continue?",
          confirm: "Yes, cancel",
          cancel: "No, go back",
          confirmMsg: "Subscription successfully cancelled",
          errorMsg: "Error cancelling",
        },
      },
    },
  },
  es: {
    translation: {
      home_nav: "Inicio",
      login: "Iniciar sesión",
      logout: "Cerrar sesión",
      register: "Registrarse",
      dashboard: "Panel",
      plans: "Precios",
      settings: "Configuración",
      profile_nav: "Perfil",
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
      cta_subtitle:
        "Crea tu asistente en menos de 5 minutos. No necesitas conocimientos técnicos.",
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
        "Prompts ilimitados",
      ],
      plan_full_features: [
        "Todo de Pro",
        "Integración de Telegram y Excel",
        "Historial de conversaciones",
      ],
      plan_lifetime_features: [
        "Versión permanente de Full",
        "Soporte prioritario",
        "Sin mensualidades",
      ],

      plan_button: "Empezar ahora",
      why_card1_title: "Agenda automatizada",
      why_card1_desc:
        "Programa reuniones automáticamente con Google Calendar e IA.",
      why_card2_title: "Prompts inteligentes personalizados",
      why_card2_desc:
        "Diseña interacciones únicas con IA adaptadas a tu negocio.",
      why_card3_title: "Sincronización de datos",
      why_card3_desc:
        "Conecta Excel y gestiona datos de clientes como un profesional.",
      features: {
        calendar: {
          name: "Google Calendar",
          description:
            "Conecta con Google Calendar y agenda citas automáticamente.",
        },
        email: {
          name: "Captura de Email",
          description:
            "Recoge automáticamente los correos y datos de tus clientes.",
        },
        branding: {
          name: "Personalización",
          description:
            "Ajusta el estilo del chatbot según la imagen de tu marca.",
        },
        analytics: {
          name: "Estadísticas",
          description: "Obtén métricas sobre uso, mensajes y conversiones.",
        },
      },
      featureCards: [
        {
          title: "Atención 24/7 sin esfuerzo",
          desc: "Tu bot responde en cualquier momento, incluso cuando tu negocio está cerrado.",
        },
        {
          title: "Configúralo en minutos",
          desc: "Solo escribe preguntas y respuestas básicas, la IA se encarga del resto.",
        },
        {
          title: "Diseño 100% personalizable",
          desc: "Colores, tipografía y estilo adaptados a tu marca.",
        },
        {
          title: "Escalable y económico",
          desc: "Atiende a cientos de clientes a la vez sin contratar más personal.",
        },
        {
          title: "Integraciones inteligentes",
          desc: "Conecta con Google Calendar, Excel y otras herramientas que ya usas.",
        },
        {
          title: "Estadísticas útiles",
          desc: "Entiende qué preguntan tus clientes y mejora tus servicios.",
        },
      ],
      featureCards_title: "Todo lo que necesitas en un solo chatbot",
      footer: {
        pricing: "Planes",
        about: "Acerca de",
        contact: "Contacto",
        privacy: "Políticas de privacidad",
        terms: "Términos de uso",
        copyright: "© 2025 - Talobot. Todos los derechos reservados.",
      },
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
          en: "EN",
        },
        aria: {
          dashboard: "Ir al panel",
          profile: "Perfil",
          login: "Iniciar sesión",
          register: "Registrarse",
          logout: "Cerrar sesión",
        },
      },
      pricing: {
      back: "Volver",
      selectPlanTitle: "Selecciona tu plan",
      selectPlanSubtitle:
        "Empieza gratis y mejora cuando lo necesites. Sin permanencia.",
      plans: {
        pro: {
          title: "Pro",
          price: "9€/mes",
          features: [
            "Prompts ilimitados",
            "Personalización del bot (colores, estadísticas, fuentes)",
            "Integración de Google Calendar",
          ],
          cta: "Hazte Pro",
        },
        full: {
          title: "Full",
          price: "19€/mes",
          features: [
            "Bot de Telegram",
            "Descarga de conversaciones",
            "Soporte para archivos de hoja de cálculo",
          ],
          cta: "Obtener Full",
          badge: "Mejor oferta",
        },
        lifetime: {
          title: "Lifetime",
          price: "79€ único pago",
          features: [
            "Todo lo incluido en Full",
            "Sin pagos recurrentes",
            "Soporte prioritario",
          ],
          cta: "Comprar acceso vitalicio",
          badge: "Popular",
        },
      },
      legalNotice:
        "Todos nuestros planes incluyen garantía de devolución durante los primeros 30 días. Puedes cancelar tu suscripción en cualquier momento desde tu panel de usuario.",
    },
    privacy: {
      back: "Volver",
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 2 de agosto de 2025",
      sections: {
        1: {
          title: "Introducción",
          content:
            "Esta Política de Privacidad describe nuestras políticas sobre la recopilación, uso y divulgación de tus datos cuando usas Talobot. Al utilizar el servicio, aceptas el uso de tu información de acuerdo con esta política.",
        },
        2: {
          title: "Definiciones clave",
          content: [
            "<strong>Cuenta:</strong> Identificador único para acceder al servicio.",
            "<strong>Datos personales:</strong> Información que te identifica directa o indirectamente.",
            "<strong>Cookies:</strong> Archivos usados para rastrear actividad y mejorar el servicio.",
            "<strong>Servicio:</strong> El sitio web talochatbot.com y sus funcionalidades.",
            "<strong>Proveedor de servicios:</strong> Terceros que ayudan a operar el sitio.",
          ],
        },
        3: {
          title: "Datos que recopilamos",
          content:
            "Podemos recopilar nombre, correo electrónico, información de navegación, dirección IP, tipo de navegador, duración de sesiones y dispositivo utilizado.",
        },
        4: {
          title: "Uso de datos",
          content:
            "Usamos tus datos para mejorar el servicio, ofrecer funcionalidades personalizadas, contactarte y proteger nuestra plataforma.",
        },
        5: {
          title: "Compartición de datos",
          content:
            "Podemos compartir tus datos con servicios como Stripe, Google Calendar, proveedores de hosting y análisis de uso, siempre bajo obligaciones de privacidad.",
        },
        6: {
          title: "Retención y eliminación",
          content:
            "Retenemos tus datos mientras tengas una cuenta activa o mientras sea legalmente necesario. Puedes solicitarnos su eliminación escribiendo a nuestro correo.",
        },
        7: {
          title: "Seguridad",
          content:
            "Aplicamos medidas razonables para proteger tu información, pero ningún sistema es 100% seguro. Te recomendamos utilizar contraseñas fuertes y mantener tu cuenta protegida.",
        },
        8: {
          title: "Privacidad de menores",
          content:
            "No recopilamos información de menores de 13 años. Si eres padre o tutor y detectas que tu hijo ha compartido datos, contáctanos.",
        },
        9: {
          title: "Cambios a esta política",
          content:
            "Podemos actualizar esta política. Te notificaremos por correo o en el sitio cuando haya cambios importantes.",
        },
        10: {
          title: "Contacto",
          content:
            "Puedes escribirnos a <a href='mailto:talochatbot@gmail.com'>talochatbot@gmail.com</a> o visitar <a href='https://talochatbot.com' target='_blank'>talochatbot.com</a>.",
        },
      },
    },
    profile: {
      loading: "Cargando perfil...",
      back: "Home",
      title: "Tu perfil",
      labels: {
        username: "Usuario",
        email: "Email",
        status: "Plan actual",
      },
      planIncludes: "Tu plan incluye:",
      plans: {
        free: [
          "1 chatbot básico",
          "Hasta 5 prompts",
          "Sin personalización de diseño",
          "Sin estadísticas",
        ],
        pro: [
          "Integración con Google Calendar",
          "Recordatorios por email",
          "Estadísticas de uso detalladas",
          "Personalización avanzada (colores, fuente, tamaño)",
          "Prompts ilimitados",
        ],
        full: [
          "Integración con Google Calendar",
          "Recordatorios por email",
          "Soporte para archivos Excel",
          "Bot de Telegram",
          "Descargar conversaciones en CSV",
          "Estadísticas de uso detalladas",
          "Personalización avanzada (colores, fuente, tamaño)",
          "Prompts ilimitados",
          "Prioridad en soporte",
        ],
        lifetime: [
          "Integración con Google Calendar",
          "Recordatorios por email",
          "Soporte para archivos Excel",
          "Bot de Telegram",
          "Descargar conversaciones en CSV",
          "Estadísticas de uso detalladas",
          "Personalización avanzada (colores, fuente, tamaño)",
          "Prompts ilimitados",
          "Prioridad en soporte",
        ],
      },
      cancelSubscription: "Cancelar suscripción",
      cancelModal: {
        title: "¿Cancelar suscripción?",
        message:
          "Esta acción no se puede deshacer. ¿Estás seguro de que deseas continuar?",
        confirm: "Sí, cancelar",
        cancel: "No, volver",
        confirmMsg: "Suscripción cancelada correctamente",
        errorMsg: "Error al cancelar",
      },
    },
    home: {
      title: "Tus Chatbots",
      newBot: "+ Nuevo Chatbot",
      botLimitMsg:
        "🚫 El plan gratuito solo permite un chatbot. Actualiza tu plan para crear más.",
      integration: {
        toggle: "¿Cómo integrar tu chatbot en tu página web?",
        description1: "Pega este fragmento en el",
        description2: "de tu sitio:",
        codeSnippet: `<script 
  src="https://talochatbot.com/widget.js" 
  data-chatbot-id="TU_CHATBOT_ID">
</script>`,
        footer:
          "Este código mostrará el botón del chatbot automáticamente en la esquina inferior derecha. Puedes personalizar todo desde el panel: colores, fuente, tamaño y respuestas.",
      },
      deleteModal: {
        title: "¿Eliminar chatbot?",
        message:
          "Esta acción no se puede deshacer. ¿Estás seguro de que deseas continuar?",
        confirm: "Sí, eliminar",
        cancel: "No, volver",
      },
      stats: {
        loading: "Cargando estadísticas...",
        restricted: "📊 Estadísticas solo disponibles para usuarios Pro o Full",
        title: "Estadísticas",
        conversations: "🗨️ Conversaciones",
        messages: "💬 Mensajes",
        botMessages: "🤖 Mensajes Bot",
        userMessages: "👤 Mensajes Usuario",
        average: "📊 Promedio/conversación",
        lastInteraction: "⏱️ Última",
        never: "Nunca",
      },
      buttons: {
        home: "Página principal",
        profile: "Perfil",
        logout: "Cerrar sesión",
        telegram: "Telegram",
        chat: "Chat",
        edit: "Editar",
      },
    },
    },
    
    
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});

export default i18n;
