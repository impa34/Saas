// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Profile() {
  const [user, setUser] = useState(null);
  const [cancelMsg, setCancelMsg] = useState("");
  const navigate = useNavigate()
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token")
        const res = await axios.get("https://saas-backend-xrkb.onrender.com/api/user/me", {
            headers:
            {Authorization:`Bearer ${token}`}
        });
        setUser(res.data);
      } catch (e) {
        console.error("Error fetching user:", e);
      }
    };
    fetchUser();
  }, []);

  const cancelSubscription = async () => {
  const confirmCancel = window.confirm(
    "¿Estás seguro de que quieres cancelar tu suscripción? Esta acción no se puede deshacer."
  );

  if (!confirmCancel) return;

  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      "https://saas-backend-xrkb.onrender.com/api/stripe/cancel-subscription",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setCancelMsg(res.data.message);
    setUser((prev) => ({ ...prev, status: "Free" }));
  } catch (e) {
    console.error(e);
    setCancelMsg("Error al cancelar");
  }
};

  if (!user) return <p className="text-white text-center mt-10">Cargando perfil...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <div className="ml-2 mt-2">  <button
        onClick={() => navigate("/home")}
        className="text-purple-400 hover:text-purple-600 px-6 py-2"
      >
        <ArrowLeft className="" /> Home
      </button></div>
          
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4">Tu perfil</h1>
          <div className="text-left space-y-2 text-gray-300">
            <p><span className="font-semibold text-white">Usuario:</span> {user.username}</p>
            <p><span className="font-semibold text-white">Email:</span> {user.email}</p>
            <p><span className="font-semibold text-white">Plan actual:</span> {user.status}</p>
          </div>
          <div className="bg-gray-700 rounded-lg mt-6 p-6 text-left">
  <h2 className="text-xl font-semibold text-purple-400 mb-2">Tu plan incluye:</h2>
  <ul className="list-disc ml-5 text-gray-300 space-y-1">
    {user.status === "full" && (
      <>
        <li>Integración con Google Calendar</li>
        <li>Soporte para archivos Excel</li>
        <li>Descargar conversaciones en CSV</li>
        <li>Estadísticas de uso detalladas</li>
        <li>Personalización avanzada (colores, fuente, tamaño)</li>
        <li>Prompts ilimitados</li>
        <li>Prioridad en soporte</li>
      </>
    )}
        {user.status === "lifetime" && (
      <>
        <li>Integración con Google Calendar</li>
        <li>Soporte para archivos Excel</li>
        <li>Descargar conversaciones en CSV</li>
        <li>Estadísticas de uso detalladas</li>
        <li>Personalización avanzada (colores, fuente, tamaño)</li>
        <li>Prompts ilimitados</li>
        <li>Prioridad en soporte</li>
      </>
    )}

    {user.status === "pro" && (
      <>
        <li>Estadísticas de uso detalladas</li>
        <li>Personalización avanzada (colores, fuente, tamaño)</li>
        <li>Prompts ilimitados</li>
      </>
    )}

    {user.status === "free" && (
      <>
        <li>1 chatbot básico</li>
        <li>Hasta 5 prompts</li>
        <li>Sin personalización de diseño</li>
        <li>Sin estadísticas</li>
      </>
    )}
  </ul>
</div>

          {user.status !== "free" && (
            <button
              onClick={cancelSubscription}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              Cancelar suscripción
            </button>
          )}

          {cancelMsg && (
            <p className="mt-4 text-sm text-green-400">{cancelMsg}</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
