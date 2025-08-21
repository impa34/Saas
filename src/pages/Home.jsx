import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import { HiLogout, HiUser, HiViewGrid, HiHome } from "react-icons/hi";
import { useAuth } from "../context/AuthProvider";

function Home() {
  const [bots, setBots] = useState([]);
  const [user, setUser] = useState("");
  const [showBotLimitMsg, setShowBotLimitMsg] = useState(false);
  const [showIntegration, setShowIntegration] = useState(false);
    const [showModal, setShowModal] = useState(false); // ⬅ Modal visible
  const [botToDelete, setBotToDelete] = useState(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // 1) comprobamos el token nada más montar
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    // 2) función auxiliar para cabeceras
    const authHeader = { Authorization: `Bearer ${token}` };

    // 3) obtener mensaje de bienvenida
    fetch("https://saas-backend-xrkb.onrender.com/api/auth/home", {
      headers: authHeader,
    })
      .then((r) => r.json())
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      });

    // 4) obtener bots
    const fetchBots = async () => {
      try {
        const { data } = await axios.get(
          "https://saas-backend-xrkb.onrender.com/api/chatbots",
          {
            headers: authHeader,
          }
        );
        setBots(data);
      } catch (e) {
        localStorage.removeItem("token");
        console.error(e);
        window.location.href = "/login";
      }
    };
    const fetchUser = async () => {
      const res = await fetch(
        "https://saas-backend-xrkb.onrender.com/api/user/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const user = await res.json();
      console.log("👉 Usuario recibido:", user);
      setUser(user);
      localStorage.setItem("status", user.status || "Free");
    };
    fetchUser();
    fetchBots();
  }, []);

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
      <main className="flex-1 p-8 max-w-5xl mx-auto w-full overflow-x-hidden">
        <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
          {/* Columna izquierda - Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 min-w-[150px]"
          >
            <h1 className="text-4xl font-bold text-purple-500">Tus Chatbots</h1>
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
              aria-label="Ir a la página principal"
              title="Página principal"
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
              aria-label="Perfil"
              title="Perfil"
            >
              <HiUser size={24} />
            </button>
            <button
              onClick={() => {
                logout();
                navigate("/landing");
              }}
              className={logoutButtonClasses}
              aria-label="Cerrar sesión"
              title="Cerrar sesión"
            >
              <HiLogout size={24} />
            </button>
          </motion.div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 text-center">
          <button
            onClick={() => setShowIntegration(!showIntegration)}
            className="w-full text-purple-400 font-semibold text-lg flex justify-between items-center"
          >
            <span className="mx-auto">
              ¿Cómo integrar tu chatbot en tu página web?
            </span>
            <span className="text-gray-400">{showIntegration ? "▲" : "▼"}</span>
          </button>

          <AnimatePresence>
            {showIntegration && (
              <motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: "auto"}}
  exit={{ opacity: 0, height: 0 }}
  transition={{ duration: 0.3 }}
  className="overflow-hidden mt-4"
>

                <div className="text-sm text-gray-700 dark:text-gray-300 text-center">
                  <p className="mb-4">
                    Pega este fragmento en el{" "}
                    <span className="font-mono bg-gray-700 px-1 dark:text-white rounded">
                      {"</body>"}
                    </span>{" "}
                    de tu sitio:
                  </p>

                 <pre className="bg-black text-green-400 p-4 rounded-md text-xs text-left w-full overflow-x-auto whitespace-pre-wrap break-words">
{`<script 
  src="https://talochatbot.com/widget.js" 
  data-chatbot-id="TU_CHATBOT_ID">
</script>`}
</pre>


                  <p className="text-gray-400 mt-4">
                    Este código mostrará el botón del chatbot automáticamente en
                    la esquina inferior derecha. Puedes personalizar todo desde
                    el panel: colores, fuente, tamaño y respuestas.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {showBotLimitMsg && (
          <div className="mt-2 text-sm bg-red-600 text-gray-900 dark:text-white px-4 py-2 mb-2 rounded-md shadow">
            🚫 El plan gratuito solo permite un chatbot. Actualiza tu plan para
            crear más.
          </div>
        )}
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
            + Nuevo Chatbot
          </button>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {bots.map((bot) => (
            <motion.div
              key={bot._id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * bots.indexOf(bot) }}
              className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-purple-500/30 transition duration-300"
            >
              <h3
                onClick={() =>
                  window.open(
                    `https://www.talochatbot.com/embed/${bot._id}`,
                    "_blank"
                  )
                }
                className="text-xl font-semibold text-purple-400 hover:underline cursor-pointer mb-2"
              >
                {bot.name}
              </h3>
              <p className="text-sm text-gray-400 mb-1">
                Prompts configurados: <strong>{bot.prompts.length}</strong>
              </p>
              <p className="text-xs text-gray-500 mb-3">ID: {bot._id}</p>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() =>
                    window.open(
                      `https://www.talochatbot.com/embed/${bot._id}`,
                      "_blank"
                    )
                  }
                  className="bg-purple-600 hover:bg-purple-700 px-4 text-white py-1 rounded-md text-sm"
                >
                  Chat
                </button>
                <button
                  onClick={() => navigate(`/edit/${bot._id}`)}
                  className="bg-blue-600 hover:bg-blue-700 px-4  text-white py-1 rounded-md text-sm"
                >
                  Editar
                </button>
                <button
                  onClick={() => confirmDelete(bot._id)}
                  className="bg-gray-600 hover:bg-gray-700 text-white  px-4 py-1 rounded-md text-sm"
                >
                  Eliminar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
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
              <h2 className="text-xl font-bold mb-4 text-center">
                ¿Eliminar chatbot?
              </h2>
              <p className="text-sm text-gray-300 dark:text-gray-700 mb-6 text-center">
                Esta acción no se puede deshacer. ¿Estás seguro de que deseas
                continuar?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    deleteBot(botToDelete);
                    setShowModal(false);
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition"
                >
                  Sí, eliminar
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition"
                >
                  No, volver
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
