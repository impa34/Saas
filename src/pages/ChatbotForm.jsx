import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { HiDocumentDownload } from "react-icons/hi";
import { useTranslation } from "react-i18next";


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
  const [showValidationModal, setShowValidationModal] = useState(false);
  const { t } = useTranslation();
  const isFull = status === "full" || status === "lifetime";
  const isProOrFull =
    status === "full" || status === "pro" || status === "lifetime";

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
      setShowValidationModal(true); // Muestra el modal
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
    "text-gray-900 dark:text-white bg-purple-600 hover:bg-purple-700 p-2 rounded-md transition flex items-center justify-center";

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

 const next = () => {
  if (step === 2) {
    // Validamos prompts
    if (prompts.some((p) => !p.question.trim() || !p.answer.trim())) {
      setShowValidationModal(true); // Mostramos modal
      return; // 🚫 Detenemos el avance
    }
  }
  setStep(step + 1); // Avanzamos solo si todo está OK
};
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const [fileName, setFileName] = useState(null);

  const handleFileUpload = async (file) => {
    if (!file) return;
    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file);
    const token = localStorage.getItem("token");
    await fetch(
      `https://saas-backend-xrkb.onrender.com/api/chatbots/${id}/upload`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      }
    );
  };

  const handleGoogleConnect = () => {
    const token = localStorage.getItem("token");
    window.location.href = `https://saas-backend-xrkb.onrender.com/api/google-auth?auth=${token}`;
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <main className="flex-1 flex flex-col items-center p-6">
        {/* --------- Indicator --------- */}
        <div className="flex gap-6 mb-8">
          <StepBadge n={1} label={t("chatbotForm.steps.info")} />
          <StepBadge n={2} label={t("chatbotForm.steps.prompts")} />
          <StepBadge n={3} label={t("chatbotForm.steps.confirm")} />
        </div>

        {/* --------- Form --------- */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-2xl"
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
                <h2 className="text-xl font-bold">{t("chatbotForm.step1.title")}</h2>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("chatbotForm.step1.name")}
                  className="w-full bg-gray-700 px-4 py-2 rounded focus:ring-2 focus:ring-purple-500"
                  required
                />
                {isFull ? (
                  <input
                    type="file"
                    accept=".csv,.xlsx"
                    onChange={(e) => handleFileUpload(e.target.files[0])}
                    className="w-full bg-gray-700 px-4 py-2 rounded"
                  />
                ) : (
                  <p className="text-gray-400 italic">
                    {t("chatbotForm.step1.excelLimited")}
                  </p>
                )}
                {fileName && (
                  <p className="text-sm text-green-400">Subido: {fileName}</p>
                )}

                {isGoogleUser ? (
                  isProOrFull ? (
                    <button
                      type="button"
                      onClick={handleGoogleConnect}
                      className="w-full bg-green-600 hover:bg-green-700 py-2 rounded"
                    >
                      {t("chatbotForm.step1.googleConnect")}
                    </button>
                  ) : (
                    <p className="text-gray-400 italic ">
                      {t("chatbotForm.step1.googleLimited")}
                    </p>
                  )
                ) : (
                  <button
                    type="button"
                    onClick={handleGoogleConnect}
                    className="w-full bg-green-600 hover:bg-green-700 py-2 rounded"
                  >
                    {t("chatbotForm.step1.connectGoogle")}
                  </button>
                )}
                {isProOrFull ? (
                  <div className="space-y-4">
                    <label className="block">
                      {t("chatbotForm.step1.customization.bgColor")}
                      <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="ml-2 mt-2"
                      />
                    </label>
                    <label className="block">
                      {t("chatbotForm.step1.customization.textColor")}
                      <input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="ml-2 mt-2"
                      />
                    </label>
                    <label className="block">
                      {t("chatbotForm.step1.customization.font")}
                      <select
                        value={font}
                        onChange={(e) => setFont(e.target.value)}
                        className="ml-2 mt-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 border"
                      >
                        <option value="Inter">Inter</option>
                        <option value="Arial">Arial</option>
                        <option value="Comic Sans MS">Comic Sans MS</option>
                        <option value="Roboto">Roboto</option>
                      </select>
                    </label>
                    <label className="block">
                      {t("chatbotForm.step1.customization.fontSize")}
                      <input
                        className="ml-2 mt-2 text-black rounded-sm px-1 size-12"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        type="number"
                      ></input>
                    </label>

                    <button
                      onClick={handleSaveConfig}
                      className="bg-purple-600 hover:bg-purple-700 text-gray-900 dark:text-white px-4 py-2 rounded transition duration-200"
                    >
                      {t("chatbotForm.step1.customization.save")}
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-400 italic">
                    {t("chatbotForm.step1.customizationLimited")}
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
                <h2 className="text-xl font-bold">{t("chatbotForm.step2.title")}</h2>
                {prompts.map((p, i) => (
                  <div key={i} className="flex gap-2 flex-wrap">
                    <input
                      value={p.question}
                      onChange={(e) =>
                        updatePrompt(i, "question", e.target.value)
                      }
                      placeholder={t("chatbotForm.step2.question")}
                      className="flex-grow min-w-[120px] max-w-[45%] bg-gray-700 px-3 py-2 rounded"
                      required
                    />
                    <input
                      value={p.answer}
                      onChange={(e) =>
                        updatePrompt(i, "answer", e.target.value)
                      }
                      placeholder={t("chatbotForm.step2.answer")}
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
                  <div className="bg-red-600 text-gray-900 dark:text-white px-4 py-2 rounded-md text-sm mb-2">
                    {t("chatbotForm.step2.limitMessage")}
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
                  {t("chatbotForm.step2.addLine")}
                </button>
              </motion.div>
            )}
            <AnimatePresence>
              {showValidationModal && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-xl shadow-lg w-full max-w-md"
                  >
                    <h2 className="text-xl font-bold mb-4 text-center">
                      {t("chatbotForm.validationModal.title")}
                    </h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 text-center">
                      {t("chatbotForm.validationModal.message")}
                    </p>
                    <div className="flex justify-center">
                      <button
                        onClick={() => setShowValidationModal(false)}
                        className="bg-purple-600 hover:bg-purple-700 text-gray-900 dark:text-white py-2 px-4 rounded-md transition"
                      >
                        {t("chatbotForm.validationModal.ok")}
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

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
                <h2 className="text-xl font-bold mb-2">{t("chatbotForm.step3.title")}</h2>

                <p className="text-purple-400 font-semibold">{t("chatbotForm.step3.name")} {name}</p>
                <p>{t("chatbotForm.step3.promptsCount")} {prompts.length}</p>

                <p>
                  {fileName ? `${t("chatbotForm.step3.file")} ${fileName}` : t("chatbotForm.step3.noFile")}
                </p>
                <p className="text-sm text-gray-400">
                  {t("chatbotForm.step3.finalize", { 
                    action: id ? t("chatbotForm.step3.actions.update") : t("chatbotForm.step3.actions.create")
                  })}
                </p>
                {status === "full" && id && (
                  <div>
                    <a
                      href={`https://saas-backend-xrkb.onrender.com/api/chatbots/${id}/conversations/export`}
                      className={iconButtonClasses}
                    >
                      <HiDocumentDownload size={24} /> {t("chatbotForm.step3.conversations")}
                    </a>
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
                        {t("chatbotForm.step3.stats.title")}
                      </h3>
                      <p>{t("chatbotForm.step3.stats.conversations")} {stats.totalConversations || "0"}</p>
                      <p>{t("chatbotForm.step3.stats.totalMessages")} {stats.totalMessages || "0"}</p>
                      <p>{t("chatbotForm.step3.stats.botMessages")} {stats.botMessages || "0"}</p>
                      <p>{t("chatbotForm.step3.stats.userMessages")} {stats.userMessages || "0"}</p>
                      <p>
                        {t("chatbotForm.step3.stats.avgPerConversation")}{" "}
                        {typeof stats.averageMessages === "number"
                          ? stats.averageMessages.toFixed(1)
                          : "0.0"}
                      </p>
                      <p>
                        {t("chatbotForm.step3.stats.lastInteraction")}{" "}
                        {stats.lastInteraction
                          ? new Date(stats.lastInteraction).toLocaleString()
                          : t("chatbotForm.step3.stats.never")}
                      </p>{" "}
                    </div>
                  ) : (
                    <p className="">
                      {t("chatbotForm.step3.statsLimited")}
                    </p>
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
                {t("chatbotForm.navigation.back")}
              </button>
            )}
            {step === 1 && (
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded transition duration-200"
              >
                {t("chatbotForm.navigation.back")}
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                onClick={next}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition duration-200"
              >
                {t("chatbotForm.navigation.next")}
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
                    ? t("chatbotForm.navigation.updating")
                    : t("chatbotForm.navigation.creating")
                  : id
                  ? t("chatbotForm.navigation.update")
                  : t("chatbotForm.navigation.create")}
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
