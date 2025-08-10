import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { HiDocumentDownload } from "react-icons/hi";

function ChatbotForm() {
  const { id } = useParams();
  const [prompts, setPrompts] = useState([{ question: "", answer: "" }]);
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const isGoogleUser = localStorage.getItem("googleLoggedIn") === "true";
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [font, setFont] = useState("");
  const [fontSize, setFontSize] = useState(12);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const status = localStorage.getItem("status");
  const [stats, setStats] = useState("");
  const [showPromptLimitMsg, setShowPromptLimitMsg] = useState(false);
  const isFull = status === "full" ||status === "lifetime";
  const isProOrFull = status === "full" || status === "pro" || status === "lifetime";

  const stepVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  useEffect(() => {

    const fetchStats = async () => {
      const res = await fetch(
        `https://saas-backend-xrkb.onrender.com/api/chatbots/${id}/stats`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Stats fetch error:", res.status, errorText);
        return;
      }

      const data = await res.json();
      setStats(data);
    };
    if (id) {
      axios
        .get(`https://saas-backend-xrkb.onrender.com/api/chatbots/${id}`)
        .then((res) => {
          const bot = res.data;
          setName(bot.name);
          setPrompts(
            bot.prompts.length > 0
              ? bot.prompts
              : [{ question: "", answer: "" }]
          );
        })
        .catch(console.error);
    }
    fetchStats();
  }, [id]);

  const handleSaveConfig = async () => {
    if (!id) return;

    await axios.put(
      `https://saas-backend-xrkb.onrender.com/api/chatbots/${id}/config`,
      {
        backgroundColor: bgColor,
        textColor,
        font,
        fontSize,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    const token = localStorage.getItem("token");

    if (prompts.some((p) => !p.question.trim() || !p.answer.trim())) {
      alert("Todos los prompts deben tener pregunta y respuesta.");
      return;
    }
    setLoading(true);
    try {
      if (id) {
        await axios.put(
          `https://saas-backend-xrkb.onrender.com/api/chatbots/${id}`,
          { name, prompts },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSuccessMessage("✅ Bot actualizado correctamente");
      } else {
        await axios.post(
          "https://saas-backend-xrkb.onrender.com/api/chatbots",
          { name, prompts },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSuccessMessage("Bot creado correctamente");
      }

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (err) {
      console.error("❌ Error al guardar el bot:", err);
      setLoading(false);
    }
  };

  const iconButtonClasses =
    "text-white bg-purple-600 hover:bg-purple-700 p-2 rounded-md transition flex items-center justify-center";

  const updatePrompt = (index, field, value) => {
    const updated = [...prompts];
    updated[index][field] = value;
    setPrompts(updated);
  };

  const addPrompt = () => {
    setPrompts([...prompts, { question: "", answer: "" }]);
  };

  const removePrompt = (index) => {
    const updated = prompts.filter((_, id) => id !== index);
    setPrompts(updated.length > 0 ? updated : [{ question: "", answer: "" }]);
  };

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const [fileName, setFileName] = useState(null);

  const handleFileUpload = async (file) => {
    if (!file) return;
    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file);
    const token = localStorage.getItem("token");
    await fetch(`https://saas-backend-xrkb.onrender.com/api/chatbots/${id}/upload`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
  };

  const StepBadge = ({ n, label }) => (
    <div className="flex items-center gap-2">
      <span
        className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold ${
          step === n ? "bg-purple-600" : "bg-gray-700"
        }`}
      >
        {n}
      </span>
      <span className="text-sm">{label}</span>
    </div>
  );

  const handleGoogleConnect = () => {
    const token = localStorage.getItem("token");
    window.location.href = `https://saas-backend-xrkb.onrender.com/api/google-auth?auth=${token}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <main className="flex-1 flex flex-col items-center p-6">
        {/* --------- Indicator --------- */}
        <div className="flex gap-6 mb-8">
          <StepBadge n={1} label="Info" />
          <StepBadge n={2} label="Prompts" />
          <StepBadge n={3} label="Confirm" />
        </div>

        {/* --------- Form --------- */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-2xl"
          style={loading ? { pointerEvents: "none", opacity: 0.6 } : {}}
        >
          {/* ---------- STEP 1 ---------- */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-bold">Ajustes del bot</h2>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nombre del bot"
                  className="w-full bg-gray-700 px-4 py-2 rounded focus:ring-2 focus:ring-purple-500"
                  required
                />
                {status === "full" ? (
                  <input
                    type="file"
                    accept=".csv,.xlsx"
                    onChange={(e) => handleFileUpload(e.target.files[0])}
                    className="w-full bg-gray-700 px-4 py-2 rounded"
                  />
                ) : (
                  <p className="text-gray-400 italic">
                    Integración con Excel solo disponible para usuarios Full
                  </p>
                )}
                {fileName && (
                  <p className="text-sm text-green-400">Subido: {fileName}</p>
                )}

                {isGoogleUser ? (
                  isFull ? (
                    <button
                      type="button"
                      onClick={handleGoogleConnect}
                      className="w-full bg-green-600 hover:bg-green-700 py-2 rounded"
                    >
                      Conectar con Google Calendar
                    </button>
                  ) : (
                    <p className="text-gray-400 italic ">
                      Integración Google Calendar solo disponible para usuarios Full
                    </p>
                  )
                ) : (
                  <button
                    type="button"
                    onClick={handleGoogleConnect}
                    className="w-full bg-green-600 hover:bg-green-700 py-2 rounded"
                  >
                    Conectar con Google
                  </button>
                )}
                {isProOrFull ? (
                  <div className="space-y-4">
                    <label className="block">
                      Color del fondo:
                      <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="ml-2 mt-2"
                      />
                    </label>
                    <label className="block">
                      Color del texto:
                      <input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="ml-2 mt-2"
                      />
                    </label>
                    <label className="block">
                      Fuente:
                      <select
                        value={font}
                        onChange={(e) => setFont(e.target.value)}
                        className="ml-2 mt-2 text-white bg-gray-800 border"
                      >
                        <option value="Inter">Inter</option>
                        <option value="Arial">Arial</option>
                        <option value="Comic Sans MS">Comic Sans MS</option>
                        <option value="Roboto">Roboto</option>
                      </select>
                    </label>
                    <label className="block">
                      Tamaño de fuente:
                      <input
                        className="ml-2 mt-2 text-black rounded-sm px-1 size-12"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        type="number"
                      ></input>
                    </label>

                    <button
                      onClick={handleSaveConfig}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition duration-200"
                    >
                      Guardar cambios
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-400 italic">
                    Personalización del bot solo disponible para los usuarios Pro y Full
                  </p>
                )}
              </motion.div>
            )}

            {/* ---------- STEP 2 ---------- */}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-bold">Prompts</h2>
                {prompts.map((p, i) => (
                  <div key={i} className="flex gap-2 flex-wrap">
  <input
    value={p.question}
    onChange={(e) => updatePrompt(i, "question", e.target.value)}
    placeholder="Pregunta"
    className="flex-grow min-w-[120px] max-w-[45%] bg-gray-700 px-3 py-2 rounded"
    required
  />
  <input
    value={p.answer}
    onChange={(e) => updatePrompt(i, "answer", e.target.value)}
    placeholder="Respuesta"
    className="flex-grow min-w-[120px] max-w-[45%] bg-gray-700 px-3 py-2 rounded"
    required
  />
  <button
    type="button"
    onClick={() => removePrompt(i)}
    className="text-red-400 hover:text-red-600"
  >
    ❌
  </button>
</div>
                ))}
                {showPromptLimitMsg && (
  <div className="bg-red-600 text-white px-4 py-2 rounded-md text-sm mb-2">
    🚫 El plan gratuito solo permite hasta 5 prompts.
  </div>
)}
 <button
  type="button"
  onClick={() => {
   if (status === "free" && prompts.length >= 5) {
  setShowPromptLimitMsg(true);
  return;
}
    addPrompt();
  }}
  className="bg-gray-600 hover:bg-gray-700 px-4 py-1 rounded text-sm"
>
  + Añadir línea
</button>
              </motion.div>
            )}

            {/* ---------- STEP 3 ---------- */}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-bold mb-2">Review</h2>

                <p className="text-purple-400 font-semibold">Nombre: {name}</p>
                <p>Prompts: {prompts.length}</p>

                <p>{fileName ? `File: ${fileName}` : "Ningún archivo cargado"}</p>
                <p className="text-sm text-gray-400">
                  Click “{id ? "Update" : "Create"}” para finalizar.
                </p>
                {(status === "full" && id) && (
                  <div>
                    <button
                      onClick={() =>{`https://saas-backend-xrkb.onrender.com/api/chatbots/${id}/conversations/export`}}
                      className={iconButtonClasses}
                    >
                      <HiDocumentDownload size={24}/> conversaciones
                    </button>
                  </div>
                )}
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {isProOrFull ? (
                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        Estadísticas del bot
                      </h3>
                      <p>Conversaciones: {stats.totalConversations || "0"}</p>
                      <p>Mensajes totales: {stats.totalMessages || "0"}</p>
                      <p>Mensajes del bot: {stats.botMessages || "0"}</p>
                      <p>Mensajes del usuario: {stats.userMessages || "0"}</p>
                      <p>
                        Promedio por conversación:{" "}
                        {typeof stats.averageMessages === "number"
                          ? stats.averageMessages.toFixed(1)
                          : "0.0"}
                      </p>
                      <p>
                        Última interacción:{" "}
                        {stats.lastInteraction
                          ? new Date(stats.lastInteraction).toLocaleString()
                          : "Nunca"}
                      </p>{" "}
                    </div>
                  ) : (
                    <p className="">Estadísticas del bot solo disponibles para usuarios Pro o Full</p>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* ---------- Navigation ---------- */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prev}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded transition duration-200"
              >
                Atrás
              </button>
            )}
            {step === 1 && (
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded transition duration-200"
              >
                Atrás
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                onClick={next}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition duration-200"
              >
                Siguiente
              </button>
            )}

            {step === 3 && (
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 rounded transition duration-200 ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed pointer-events-none"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {loading
                  ? id
                    ? "Actualizando..."
                    : "Creando..."
                  : id
                  ? "Actualizar"
                  : "Crear"}
              </button>
            )}
          </div>
        </form>
        {successMessage && (
          <p className="text-green-400 mt-4 text-center font-semibold">
            {successMessage}
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default ChatbotForm;
