import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import { HiLogout, HiUser, HiViewGrid, HiHome } from "react-icons/hi";
import { useAuth } from "../context/AuthProvider";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const [bots, setBots] = useState([]);
  const [user, setUser] = useState("");
  const [showBotLimitMsg, setShowBotLimitMsg] = useState(false);
  const [showIntegration, setShowIntegration] = useState(false);
  const [statsByBot, setStatsByBot] = useState({});
  const [showModal, setShowModal] = useState(false); // ⬅ Modal visible
  const [botToDelete, setBotToDelete] = useState(null);
  const isProOrFull =
    localStorage.getItem("status") === "pro" ||
    localStorage.getItem("status") === "full";
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    const authHeader = { Authorization: `Bearer ${token}` };

    // 1) Verificar sesión
    fetch("https://saas-backend-xrkb.onrender.com/api/auth/home", {
      headers: authHeader,
    })
      .then((r) => r.json())
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      });

    // 2) Cargar datos del usuario
    const fetchUser = async () => {
      try {
        const res = await fetch(
          "https://saas-backend-xrkb.onrender.com/api/user/me",
          {
            headers: authHeader,
          }
        );
        const user = await res.json();
        setUser(user);
        localStorage.setItem("status", user.status || "Free");
      } catch (e) {
        console.error("Error al cargar usuario", e);
      }
    };

    fetchUser();
  }, []); // 👈 solo al montar

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchBots = async () => {
      try {
        const { data } = await axios.get(
          "https://saas-backend-xrkb.onrender.com/api/chatbots",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setBots(data);
      } catch (e) {
        console.error(e);
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    };

    fetchBots();
  }, []); // 👈 solo al montar

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || bots.length === 0) return;

    const fetchStats = async (id) => {
      try {
        const res = await fetch(
          `https://saas-backend-xrkb.onrender.com/api/chatbots/${id}/stats`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (!res.ok) {
          console.error("Error al obtener stats del bot", id);
          return;
        }
        const data = await res.json();
        setStatsByBot((prev) => ({ ...prev, [id]: data }));
      } catch (error) {
        console.error("Stats fetch error:", error);
      }
    };

    bots.forEach((bot) => fetchStats(bot._id));
  }, [bots]); // 👈 se dispara cuando cambian los bots

  const deleteBot = async (id) => {
    await fetch(`https://saas-backend-xrkb.onrender.com/api/chatbots/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    setBots(bots.filter((bot) => bot._id !== id));
  };

  const confirmDelete = (id) => {
    setBotToDelete(id);
    setShowModal(true);
  };
  const iconButtonClasses =
    "text-white bg-purple-600 hover:bg-purple-700 p-2 rounded-md transition flex items-center justify-center";

  const logoutButtonClasses =
    "text-white bg-red-600 hover:bg-red-700 p-2 rounded-md transition flex items-center justify-center";

  return (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col overflow-x-hidden">
    <main className="flex-1 p-8 w-full max-w-[1400px] mx-auto overflow-x-hidden">
      <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
        {/* Columna izquierda - Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 min-w-[150px]"
        >
          <h1 className="text-4xl font-bold text-purple-500">
            {t("home.title")}
          </h1>
        </motion.div>

        {/* Columna central - Botón Inicio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 min-w-[100px] flex justify-center"
        >
          <button
            onClick={() => navigate("/landing")}
            className={iconButtonClasses}
            aria-label={t("home.buttons.home")}
            title={t("home.buttons.home")}
          >
            <HiHome size={24} />
          </button>
        </motion.div>

        {/* Columna derecha - Perfil y Cerrar sesión */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 min-w-[150px] flex justify-end space-x-4"
        >
          <button
            onClick={() => navigate("/profile")}
            className={iconButtonClasses}
            aria-label={t("home.buttons.profile")}
            title={t("home.buttons.profile")}
          >
            <HiUser size={24} />
          </button>
          <button
            onClick={() => {
              logout();
              navigate("/landing");
            }}
            className={logoutButtonClasses}
            aria-label={t("home.buttons.logout")}
            title={t("home.buttons.logout")}
          >
            <HiLogout size={24} />
          </button>
        </motion.div>
      </div>

      {/* Integración */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 text-center">
        <button
          onClick={() => setShowIntegration(!showIntegration)}
          className="w-full text-purple-400 font-semibold text-lg flex justify-between items-center"
        >
          <span className="mx-auto">{t("home.integration.toggle")}</span>
          <span className="text-gray-400">{showIntegration ? "▲" : "▼"}</span>
        </button>

        <AnimatePresence>
          {showIntegration && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4"
            >
              <div className="text-sm text-gray-700 dark:text-gray-300 text-center">
                <p className="mb-4">
                  {t("home.integration.description1")}{" "}
                  <span className="font-mono bg-gray-700 px-1 dark:text-white rounded">
                    {"</body>"}
                  </span>{" "}
                  {t("home.integration.description2")}
                </p>

                <pre className="bg-black text-green-400 p-4 rounded-md text-xs text-left w-full overflow-x-auto whitespace-pre-wrap break-words">
                  {t("home.integration.codeSnippet")}
                </pre>

                <p className="text-gray-400 mt-4">
                  {t("home.integration.footer")}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mensaje límite de bots */}
      {showBotLimitMsg && (
        <div className="mt-2 text-sm bg-red-600 text-gray-900 dark:text-white px-4 py-2 mb-2 rounded-md shadow">
          {t("home.botLimitMsg")}
        </div>
      )}

      {/* Botón nuevo chatbot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center mb-6"
      >
        <button
          onClick={() => {
            if (user?.status === "free" && bots.length >= 1) {
              setShowBotLimitMsg(true);
              return;
            }
            navigate("/form");
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md font-medium transition"
        >
          {t("home.newBot")}
        </button>
      </motion.div>

      {/* Lista de chatbots */}
      <div className="grid sm:grid-cols-3 gap-6">
        {bots.map((bot) => (
          <motion.div
            key={bot._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 * bots.indexOf(bot) }}
            className="relative bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-purple-500/30 transition duration-300"
          >
            <h3
              onClick={() =>
                window.open(`https://www.talochatbot.com/embed/${bot._id}`, "_blank")
              }
              className="text-xl font-semibold text-purple-400 hover:underline cursor-pointer mb-2"
            >
              {bot.name}
            </h3>

            {(localStorage.getItem("status") === "full" ||
              localStorage.getItem("status") === "lifetime") && (
              <button
                onClick={() => navigate(`/telegram/${bot._id}`)}
                className="absolute top-2 right-2 bg-sky-600 hover:bg-sky-700 px-3 py-1 rounded-md text-white text-sm flex items-center gap-2"
              >
                <img src="/telegramlogo.webp" alt="telegram" className="w-4 h-4" />
                {t("home.buttons.telegram")}
              </button>
            )}

            <p className="text-sm text-gray-400 mb-1">
              Prompts configurados: <strong>{bot.prompts.length}</strong>
            </p>
            <p className="text-xs text-gray-500 mb-3">ID: {bot._id}</p>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(`https://www.talochatbot.com/embed/${bot._id}`, "_blank")
                }
                className="bg-purple-600 hover:bg-purple-700 px-4 text-white py-1 rounded-md text-sm"
              >
                {t("home.buttons.chat")}
              </button>
              <button
                onClick={() => navigate(`/edit/${bot._id}`)}
                className="bg-blue-600 hover:bg-blue-700 px-4 text-white py-1 rounded-md text-sm"
              >
                {t("home.buttons.edit")}
              </button>
              <button
                onClick={() => confirmDelete(bot._id)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1 rounded-md text-sm"
              >
                {t("home.deleteModal.confirm")}
              </button>

              {isProOrFull ? (
                <div className="mt-3 text-xs text-gray-600 dark:text-gray-300">
                  {statsByBot[bot._id] ? (
                    <>
                      <h3 className="font-semibold">{t("home.stats.title")}</h3>
                      <p>
                        {t("home.stats.conversations")}: {statsByBot[bot._id].totalConversations || 0}
                      </p>
                      <p>
                        {t("home.stats.messages")}: {statsByBot[bot._id].totalMessages || 0}
                      </p>
                      <p>
                        {t("home.stats.botMessages")}: {statsByBot[bot._id].botMessages || 0}
                      </p>
                      <p>
                        {t("home.stats.userMessages")}: {statsByBot[bot._id].userMessages || 0}
                      </p>
                      <p>
                        {t("home.stats.average")}:{" "}
                        {typeof statsByBot[bot._id].averageMessages === "number"
                          ? statsByBot[bot._id].averageMessages.toFixed(1)
                          : "0.0"}
                      </p>
                      <p>
                        {t("home.stats.lastInteraction")}:{" "}
                        {statsByBot[bot._id].lastInteraction
                          ? new Date(statsByBot[bot._id].lastInteraction).toLocaleString()
                          : t("home.stats.never")}
                      </p>
                    </>
                  ) : (
                    <p className="text-gray-400">{t("home.stats.loading")}</p>
                  )}
                </div>
              ) : (
                <p className="mt-3 text-xs text-gray-400">{t("home.stats.restricted")}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>

    {/* Modal eliminar chatbot */}
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-xl shadow-lg w-full max-w-md"
          >
            <h2 className="text-xl font-bold mb-4 text-center">{t("home.deleteModal.title")}</h2>
            <p className="text-sm text-gray-300 mb-6 text-center">{t("home.deleteModal.message")}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  deleteBot(botToDelete);
                  setShowModal(false);
                }}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition"
              >
                {t("home.deleteModal.confirm")}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition"
              >
                {t("home.deleteModal.cancel")}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

    <Footer />
  </div>
);

}

export default Home;
