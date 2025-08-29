import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function Privacy() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = t("privacy.sections", { returnObjects: true });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <Navbar />

      <div className="px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="text-purple-400 hover:text-purple-600 flex items-center gap-1"
        >
          <ArrowLeft size={18} />
          {t("privacy.back")}
        </button>
      </div>

      <div className="flex-1 px-6 py-8 mb-20 flex flex-col items-center">
        <div className="w-full max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold text-purple-500 text-center">{t("privacy.title")}</h1>
          <p className="text-sm text-gray-400 text-center">{t("privacy.lastUpdated")}</p>

          {Object.keys(sections).map((key) => {
            const section = sections[key];
            return (
              <section key={key} className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-400">{section.title}</h2>
                {Array.isArray(section.content) ? (
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: section.content }} />
                )}
              </section>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Privacy;
