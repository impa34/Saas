import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function TelegramIntegration() {
  const { botId } = useParams();
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const saveToken = async () => {
    setLoading(true);
    setError("");
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
      setError("Error al guardar el token. Verifica que sea correcto.");
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
        className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <h1 className="text-3xl font-bold text-purple-600 mb-4 text-center">
          Integrar tu chatbot con Telegram
        </h1>

        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-3">
          <li>Abre Telegram y busca <strong>@BotFather</strong>.</li>
          <li>Escribe <code className="bg-gray-700 px-1 rounded">/newbot</code> y sigue los pasos para crear un bot.</li>
          <li>Elige un nombre y un @username único para tu bot.</li>
          <li>Al final, BotFather te dará un <strong>Token</strong> como este:
            <span className="block mt-1 font-mono text-xs bg-black text-green-400 px-2 py-1 rounded">
              123456789:ABCdefGhIJKlmNoPQRstuVWxyZ
            </span>
          </li>
          <li>Pega ese token en el campo de abajo y guarda la configuración.</li>
        </ol>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Token de Telegram</label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            placeholder="Introduce aquí el token de BotFather"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-2">✅ Integración exitosa, redirigiendo...</p>}

        <button
          onClick={saveToken}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition"
        >
          {loading ? "Guardando..." : "Guardar Token"}
        </button>
      </motion.div>
      <Footer />
    </div>
  );
}

export default TelegramIntegration;
