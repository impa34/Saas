import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const featureIds = ["calendar", "email", "customization", "analytics"];

export default function InteractiveFeatureSection() {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(featureIds[0]);

  return (
    <section className="relative bg-white dark:bg-gray-900 py-16 px-4 text-gray-900 dark:text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Desktop layout */}
        <div className="hidden md:flex justify-center items-center min-h-[500px] relative">
          {/* Left icons */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-8">
            {featureIds.slice(0, 2).map((id) => (
              <div
                key={id}
                onMouseEnter={() => setActiveFeature(id)}
                className={`cursor-pointer rounded-xl w-24 h-24 flex items-center justify-center transition ${
                  activeFeature === id ? "bg-purple-600" : "bg-gray-100 dark:bg-gray-800 hover:bg-purple-600"
                }`}
              >
                <img
                  src={`/feature-${id}.webp`}
                  alt={t(`features.${id}.name`)}
                  className="w-[72px] h-[72px] object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Right icons */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-8">
            {featureIds.slice(2, 4).map((id) => (
              <div
                key={id}
                onMouseEnter={() => setActiveFeature(id)}
                className={`cursor-pointer rounded-xl w-24 h-24 flex items-center justify-center transition ${
                  activeFeature === id ? "bg-purple-600" : "bg-gray-100 dark:bg-gray-800 hover:bg-purple-600"
                }`}
              >
                <img
                  src={`/feature-${id}.webp`}
                  alt={t(`features.${id}.name`)}
                  className="w-[72px] h-[72px] object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Central content */}
          <div className="w-full max-w-xl text-center z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-xl"
              >
                <img
                  src={`/feature-${activeFeature}.webp`}
                  alt={t(`features.${activeFeature}.name`)}
                  className="mx-auto w-64 h-auto mb-6 rounded"
                />
                <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                  {t(`features.${activeFeature}.name`)}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-md">
                  {t(`features.${activeFeature}.description`)}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">{t("features_title", "Características")}</h2>
          {featureIds.map((id) => (
            <div
              key={id}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center"
            >
              <img
                src={`/feature-${id}.webp`}
                alt={t(`features.${id}.name`)}
                className="w-24 h-24 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{t(`features.${id}.name`)}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t(`features.${id}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
