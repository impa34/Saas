import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function About() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <Navbar />

      <div className="px-6 py-2">
        <button
          onClick={() => navigate(-1)}
          className="text-purple-400 hover:text-purple-600 flex items-center"
        >
          <ArrowLeft className="mr-1" /> {t("about.back")}
        </button>
      </div>

      <div className="flex-1 px-6 py-4 flex flex-col items-center justify-center mb-20">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-6 text-purple-500">
            {t("about.title")}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            {t("about.description")}
          </p>
          <p className="text-gray-400 mb-6">
            {t("about.mission.text")}
          </p>

          <h1 className="text-4xl font-bold mb-6 text-purple-500 py-2 mt-2">
            {t("about.howItWorks.title")}
          </h1>
          <p className="text-gray-400">
            {t("about.howItWorks.text1")}
          </p>
          <p className="text-gray-400 mt-4">
            {t("about.howItWorks.text2")}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;