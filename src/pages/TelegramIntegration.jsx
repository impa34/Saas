import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function TelegramIntegration() {
  const { botId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const saveToken = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await axios.post(
        `https://saas-backend-xrkb.onrender.com/api/chatbots/${botId}/integrations/telegram`,
        { token },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      if (res.status === 200) {
        setSuccess(true);
        setTimeout(() => navigate("/home"), 2000);
      }
    } catch (e) {
      setError(t("telegramIntegration.error"));
      console.error("Error:", e.response?.data || e.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <h1 className="text-3xl font-bold text-purple-500 mb-4 text-center">
          {t("telegramIntegration.title")}
        </h1>

        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-3">
          <li dangerouslySetInnerHTML={{ __html: t("telegramIntegration.steps.1") }} />
          <li dangerouslySetInnerHTML={{ __html: t("telegramIntegration.steps.2") }} />
          <li>{t("telegramIntegration.steps.3")}</li>
          <li>
            {t("telegramIntegration.steps.4")}
            <span className="block mt-1 font-mono text-xs bg-black text-green-400 px-2 py-1 rounded">
              {t("telegramIntegration.tokenExample")}
            </span>
          </li>
          <li>{t("telegramIntegration.steps.5")}</li>
        </ol>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            {t("telegramIntegration.tokenLabel")}
          </label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            placeholder={t("telegramIntegration.tokenPlaceholder")}
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-2">{t("telegramIntegration.success")}</p>}

        <button
          onClick={saveToken}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition"
        >
          {loading ? t("telegramIntegration.savingButton") : t("telegramIntegration.saveButton")}
        </button>
      </motion.div>
      <Footer />
    </div>
  );
}

export default TelegramIntegration;