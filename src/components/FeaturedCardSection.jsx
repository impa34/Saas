// src/components/FeatureCardSection.jsx
import { motion } from "framer-motion";
import { 
  Clock, Zap, Palette, TrendingUp, Link as LinkIcon, BarChart3 
} from "lucide-react";

const features = [
  {
    title: "Atención 24/7 sin esfuerzo",
    desc: "Tu bot responde en cualquier momento, incluso cuando tu negocio está cerrado.",
    icon: Clock,
  },
  {
    title: "Configúralo en minutos",
    desc: "Solo escribe preguntas y respuestas básicas, la IA se encarga del resto.",
    icon: Zap,
  },
  {
    title: "Diseño 100% personalizable",
    desc: "Colores, tipografía y estilo adaptados a tu marca.",
    icon: Palette,
  },
  {
    title: "Escalable y económico",
    desc: "Atiende a cientos de clientes a la vez sin contratar más personal.",
    icon: TrendingUp,
  },
  {
    title: "Integraciones inteligentes",
    desc: "Conecta con Google Calendar, Excel y otras herramientas que ya usas.",
    icon: LinkIcon,
  },
  {
    title: "Estadísticas útiles",
    desc: "Entiende qué preguntan tus clientes y mejora tus servicios.",
    icon: BarChart3,
  },
];

function FeatureCardSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Todo lo que necesitas en un solo chatbot
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-start text-left hover:shadow-purple-500/20 transition"
            >
              <div className="bg-purple-600 p-3 rounded-xl mb-4">
                <f.icon className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCardSection;
