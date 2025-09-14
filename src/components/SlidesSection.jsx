import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";


function SlidesSection() {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);

  // 👇 Dos versiones de los pasos, una por idioma
  const steps = i18n.language === "es"
    ? [
        { img: "slide1.webp", title: "1. Crea tu Chatbot", desc: "Regístrate y configura tu asistente en minutos." },
        { img: "slide2.webp", title: "2. Entrénalo con tu info", desc: "Sube tus datos o preguntas frecuentes para que conozca tu negocio." },
        { img: "slide3.webp", title: "3. Automatiza tu negocio", desc: "Ahorra tiempo y aumenta tus ventas con la automatización inteligente." },
      ]
    : [
        { img: "slide1en.webp", title: "1. Create your chatbot", desc: "Register and set up your assistant in minutes." },
        { img: "slide2en.webp", title: "2. Train with your info", desc: "Upload your data or FAQs so it knows your business." },
        { img: "slide3en.webp", title: "3. Automate your business", desc: "Save time and boost sales with smart automation." },
      ];

  const next = () => setIndex((prev) => (prev + 1) % steps.length);
  const prev = () => setIndex((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8">{t("slides_title")}</h2>

      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center"
      >
        <img
          src={steps[index].img}
          alt={steps[index].title}
          className="w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem] mb-4 object-contain"
        />
        <h3 className="text-xl font-semibold">{steps[index].title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{steps[index].desc}</p>
      </motion.div>

      {/* Botones navegación */}
      <div className="flex justify-center mt-6 space-x-4">
        <button onClick={prev} className="p-2 rounded-full bg-purple-500 hover:bg-purple-700">
          <ArrowLeft />
        </button>
        <button onClick={next} className="p-2 rounded-full bg-purple-500 hover:bg-purple-700">
          <ArrowRight />
        </button>
      </div>

      {/* Indicadores tipo slider */}
      <div className="flex justify-center mt-4 space-x-2">
        {steps.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default SlidesSection;
