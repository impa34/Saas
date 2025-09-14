import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const steps = [
  { key: "slide1", img: "/slide1.svg", title: "slide1_title", text: "slide1_text" },
  { key: "slide2", img: "/slide2.svg", title: "slide2_title", text: "slide2_text" },
  { key: "slide3", img: "/slide3.svg", title: "slide3_title", text: "slide3_text" },
];

function SlidesSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">{t("slides_title")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
            >
              <img src={s.img} alt="" className="w-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t(s.title)}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t(s.text)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SlidesSection;
