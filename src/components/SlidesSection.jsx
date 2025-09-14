import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const steps = [
  { key: "slide1", img: "/slide1.webp", title: "slide1_title", text: "slide1_text" },
  { key: "slide2", img: "/slide2.webp", title: "slide2_title", text: "slide2_text" },
  { key: "slide3", img: "/slide3.webp", title: "slide3_title", text: "slide3_text" },
];

function SlidesSection() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % steps.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-10">{t("slides_title")}</h2>

        {/* Carrusel */}
        <div className="overflow-hidden relative h-80 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[index].key}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6"
            >
              <img src={steps[index].img} alt="" className="w-40 h-40 mb-6 object-contain" />
              <h3 className="text-xl font-semibold mb-2">{t(steps[index].title)}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t(steps[index].text)}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={prevSlide}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

export default SlidesSection;
