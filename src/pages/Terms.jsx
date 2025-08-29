import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function Terms() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <Navbar />

      <div className="px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="text-purple-400 hover:text-purple-600 flex items-center gap-1"
        >
          <ArrowLeft size={18} />
          {t("terms.back")}
        </button>
      </div>

      <div className="flex-1 px-6 py-8 mb-20 flex flex-col items-center">
        <div className="w-full max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold text-purple-500 text-center">
            {t("terms.title")}
          </h1>

          <p className="text-sm text-gray-400 text-center">
            {t("terms.lastUpdated")}
          </p>

          <section className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t("terms.sections.intro.content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">
              {t("terms.sections.useOfService.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("terms.sections.useOfService.content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">
              {t("terms.sections.intellectualProperty.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("terms.sections.intellectualProperty.content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">
              {t("terms.sections.userAccounts.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("terms.sections.userAccounts.content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">
              {t("terms.sections.limitationOfLiability.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("terms.sections.limitationOfLiability.content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">
              {t("terms.sections.modifications.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("terms.sections.modifications.content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">
              {t("terms.sections.applicableLaw.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("terms.sections.applicableLaw.content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">
              {t("terms.sections.contact.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("terms.sections.contact.content")}
            </p>
            <ul className="list-disc list-inside pl-4 text-gray-700 dark:text-gray-300 space-y-1">
              {t("terms.sections.contact.items", { returnObjects: true }).map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Terms;