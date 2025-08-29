import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

function Whychooseus() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const cards = [
    { title: t("why_card1_title"), description: t("why_card1_desc") },
    { title: t("why_card2_title"), description: t("why_card2_desc") },
    { title: t("why_card3_title"), description: t("why_card3_desc") },
  ];

  const nextCard = () => setIndex((prev) => (prev + 1) % cards.length);
  const prevCard = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="relative max-w-xl mx-auto py-5">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6 text-center"
      >
        <h3 className="text-xl font-semibold mb-2">{cards[index].title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {cards[index].description}
        </p>
      </motion.div>

      <div className="flex justify-between mt-4">
        <button
          onClick={prevCard}
          className="text-purple-400 hover:text-purple-600"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={nextCard}
          className="text-purple-400 hover:text-purple-600"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Whychooseus;
