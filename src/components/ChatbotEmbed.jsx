import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdSend } from "react-icons/io";
import axios from "axios";


function ChatbotEmbed() {
  const { id } = useParams();
  console.log("Bot ID:", id);
  const [bot, setBot] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const iconButtonClasses =
    "text-white p-2 rounded-md transition flex items-center justify-center";
  useEffect(() => {
    axios.get(`https://saas-backend-xrkb.onrender.com/api/chatbots/${id}`).then((res) => setBot(res.data));
  }, [id]);

  const sendMessage = async () => {
  if (!input.trim()) return; // evitar mensajes vacíos

  const userMessage = input;
  setMessages(prev => [...prev, { from: "user", text: userMessage }]);
  setInput("");

  try {
    const { data } = await axios.post(`https://saas-backend-xrkb.onrender.com/api/chatbots/${id}/reply`, {
      message: userMessage,
    });
     console.log("Respuesta del bot:", data);
    setMessages(prev => [...prev, { from: "bot", text: data.reply || "Sin respuesta" }]);
  } catch (error) {
    console.error(error)
    setMessages(prev => [...prev, { from: "bot", text: "Error en la respuesta del bot" }]);
  }
};

  if (!bot) return <p>Loading...</p>;

  return (
  <div
    style={{
      backgroundColor: bot.config?.backgroundColor,
      color: bot.config?.textColor,
      fontFamily: bot.config?.font,
      fontSize: bot.config?.fontSize || 14,
      height: "100vh", // ocupa toda la pantalla
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      overflow: "hidden", // evita overflow lateral
    }}
  >
    {/* Header */}
    <h2
      style={{
        textAlign: "center",
        padding: "1rem",
        margin: 0,
        flexShrink: 0,
      }}
    >
      {bot.name}
    </h2>

    {/* Chat messages */}
    <div
      style={{
        flex: 1,
        overflowY: "auto", // solo aquí se activa scroll
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        padding: "0.5rem",
        background: "#f5f5f5",
        borderRadius: "8px",
        margin: "0 1rem 1rem 1rem",
      }}
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: msg.from === "user" ? "row-reverse" : "row",
            alignItems: "flex-start",
            gap: "0.5rem",
          }}
        >
          <img
            src={`/${msg.from}.webp`}
            alt={`${msg.from} avatar`}
            style={{ width: 32, height: 32, borderRadius: "50%" }}
          />
          <div
            style={{
              backgroundColor: msg.from === "user" ? "#6c47ff" : "#e0e0e0",
              color: msg.from === "user" ? "#fff" : "#000",
              padding: "0.5rem 0.75rem",
              borderRadius: "1rem",
              maxWidth: "70%",
              wordBreak: "break-word", // evita overflow de palabras largas
            }}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>

    {/* Input */}
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        padding: "0.5rem 1rem 1rem 1rem",
        flexShrink: 0,
      }}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Escribe un mensaje..."
        style={{
          flex: 1,
          padding: "0.5rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontFamily: bot.config?.font,
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          backgroundColor: "#6c47ff",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          border: "none",
          fontFamily: bot.config?.font,
        }}
      >
        <IoMdSend size={50} className={iconButtonClasses}/>
      </button>
    </div>
  </div>
);
}

export default ChatbotEmbed