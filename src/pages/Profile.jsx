import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [cancelMsg, setCancelMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://saas-backend-xrkb.onrender.com/api/user/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (e) {
        console.error("Error fetching user:", e);
      }
    };
    fetchUser();
  }, []);

  const cancelSubscription = async () => {
    const confirmCancel = window.confirm(t("profile.cancelModal.message"));
    if (!confirmCancel) return;

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://saas-backend-xrkb.onrender.com/api/stripe/cancel-subscription",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCancelMsg(res.data.message || t("profile.cancelModal.confirmMsg"));
      setUser((prev) => ({ ...prev, status: "free" }));
    } catch (e) {
      console.error(e);
      setCancelMsg(t("profile.cancelModal.errorMsg"));
    }
  };

  if (!user) return <p className="text-gray-900 dark:text-white text-center mt-10">{t("profile.loading")}</p>;

  const planFeatures = t(`profile.plans.${user.status}`, { returnObjects: true });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <Navbar />
      <div className="ml-2 mt-2">
        <button
          onClick={() => navigate("/home")}
          className="text-purple-400 hover:text-purple-600 px-6 py-2 flex items-center gap-2"
        >
          <ArrowLeft size={18} /> {t("profile.back")}
        </button>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4">{t("profile.title")}</h1>
          <div className="text-left space-y-2 text-gray-700 dark:text-gray-300">
            <p><span className="font-semibold text-gray-900 dark:text-white">{t("profile.labels.username")}:</span> {user.username}</p>
            <p><span className="font-semibold text-gray-900 dark:text-white">{t("profile.labels.email")}:</span> {user.email}</p>
            <p><span className="font-semibold text-gray-900 dark:text-white">{t("profile.labels.status")}:</span> {user.status}</p>
          </div>

          <div className="bg-gray-700 rounded-lg mt-6 p-6 text-left">
            <h2 className="text-xl font-semibold text-purple-400 mb-2">{t("profile.planIncludes")}</h2>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              {planFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {user.status !== "free" && (
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              {t("profile.cancelSubscription")}
            </button>
          )}

          {cancelMsg && <p className="mt-4 text-sm text-green-400">{cancelMsg}</p>}
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-xl shadow-lg w-full max-w-md"
          >
            <h2 className="text-xl font-bold mb-4 text-center">{t("profile.cancelModal.title")}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 text-center">{t("profile.cancelModal.message")}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={cancelSubscription}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition"
              >
                {t("profile.cancelModal.confirm")}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition"
              >
                {t("profile.cancelModal.cancel")}
              </button>
            </div>
          </motion.div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Profile;
