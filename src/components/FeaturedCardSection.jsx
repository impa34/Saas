import { motion } from "framer-motion";
import { Clock, Zap, Palette, TrendingUp, Link as LinkIcon, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

const featureIcons = [Clock, Zap, Palette, TrendingUp, LinkIcon, BarChart3];

function FeatureCardSection() {
  const { t } = useTranslation();
  const features = t("featureCards", { returnObjects: true });

  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t("featureCards_title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-start text-left hover:shadow-purple-500/20 transition"
              >
                <div className="bg-purple-600 p-3 rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>
                
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureCardSection;
