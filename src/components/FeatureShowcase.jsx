import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";

const FeatureShowcase = () => {

    const navigate = useNavigate()

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Texto a la izquierda */}
          <div className="md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Llevamos la inteligencia artificial a tu negocio
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-purple-200 mb-6"
            >
              Con Talobot, transforma la manera en que interactúas con tus clientes mediante chatbots inteligentes y personalizables.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span>Respuestas instantáneas 24/7</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span>Integración con tus herramientas favoritas</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span>Personalización total para tu marca</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8"
            >
              <button
                onClick={() => navigate("/register")}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105"
              >
                Comenzar ahora
              </button>
            </motion.div>
          </div>

          {/* Composicion de imágenes a la derecha */}
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Imagen principal - Dashboard */}
<div className="relative z-10 rounded-xl overflow-hidden shadow-2xl max-w-md mx-auto">
  <img
    src="/dashboard-preview.webp"
    alt="Dashboard de Talobot"
    className="w-full h-auto rounded-xl"
  />
  <div className="absolute inset-0 bg-purple-900 bg-opacity-20"></div>
</div>

              {/* Imagen flotante 1 - Chatbot en acción */}
              <motion.div
                initial={{ x: 50, y: 50, opacity: 0 }}
                whileInView={{ x: -20, y: -20, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute top-32 -right-8 z-20 w-60 h-60 rounded-lg overflow-hidden shadow-xl border-2 border-white"
              >
                <img
                  src="/chat-preview.webp" // Reemplaza con tu imagen
                  alt="Chatbot en acción"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Imagen flotante 2 - Integraciones */}
              <motion.div
                initial={{ x: -50, y: 50, opacity: 0 }}
                whileInView={{ x: 20, y: -20, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute bottom-10 z-20 w-40 h-40 rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src="/integrations-preview.webp" // Reemplaza con tu imagen
                  alt="Integraciones de Talobot"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase