import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: "calendar",
    name: "Google Calendar",
    image: "/feature-calendar.png",
    description: "Conecta con Google Calendar y agenda citas automáticamente.",
  },
  {
    id: "email",
    name: "Captura de Email",
    image: "/feature-email.png",
    description: "Recoge automáticamente los correos y datos de tus clientes.",
  },
  {
    id: "branding",
    name: "Personalización",
    image: "/feature-customization.png",
    description: "Ajusta el estilo del chatbot según la imagen de tu marca.",
  },
  {
    id: "analytics",
    name: "Estadísticas",
    image: "/feature-analytics.png",
    description: "Obtén métricas sobre uso, mensajes y conversiones.",
  },
];

export default function InteractiveFeatureSection() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="relative bg-gray-900 py-24 px-4 text-white overflow-hidden">
  <div className="max-w-6xl mx-auto relative flex justify-center items-center min-h-[500px]">
    
    {/* Logos a la izquierda */}
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-8">
      {features.slice(0, 2).map((feature) => (
        <div
          key={feature.id}
          onMouseEnter={() => setActiveFeature(feature)}
          className="cursor-pointer bg-gray-800 hover:bg-purple-600 rounded-xl w-24 h-24 flex items-center justify-center transition"
        >
          <img
            src={feature.image}
            alt={feature.name}
            className="w-[72px] h-[72px] object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      ))}
    </div>

    {/* Logos a la derecha */}
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-8">
      {features.slice(2, 4).map((feature) => (
        <div
          key={feature.id}
          onMouseEnter={() => setActiveFeature(feature)}
          className="cursor-pointer bg-gray-800 hover:bg-purple-600 rounded-xl w-24 h-24 flex items-center justify-center transition"
        >
          <img
            src={feature.image}
            alt={feature.name}
            className="w-[72px] h-[72px] object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      ))}
    </div>

    {/* Contenido central */}
    <div className="w-full max-w-xl text-center z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFeature.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="p-8 rounded-lg bg-gray-800 shadow-xl"
        >
          <img
            src={activeFeature.image}
            alt={activeFeature.name}
            className="mx-auto w-64 h-auto mb-6 rounded"
          />
          <h3 className="text-2xl font-semibold text-purple-400 mb-2">{activeFeature.name}</h3>
          <p className="text-gray-300 text-md">{activeFeature.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</section>

  );
}
