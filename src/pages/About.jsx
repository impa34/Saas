import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <div className="px-6 py-2">
        <button
          onClick={() => navigate(-1)}
          className="text-purple-400 hover:text-purple-600"
        >
          <ArrowLeft /> Volver
        </button>
      </div>

      <div className="flex-1 px-6 py-4 flex flex-col items-center justify-center mb-20">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-6 text-purple-500">
  Sobre Talo Chatbot
</h1>
<p className="text-lg text-gray-300 mb-4">
  Talo Chatbot es un asistente con inteligencia artificial que ayuda a tu negocio
  a conectar con los clientes de forma más inteligente y eficiente.
</p>
<p className="text-gray-400 mb-6">
  Nuestra misión es simplificar el soporte y la automatización mediante conversaciones naturales e inteligentes.
  Ya seas un pequeño equipo o una gran empresa, Talo se adapta a tus necesidades.
  Disfruta de integraciones fluidas como Google Calendar o Excel, junto con una interfaz completamente personalizable para adaptarse a tu marca.
</p>

<h1 className="text-4xl font-bold mb-6 text-purple-500 py-2 mt-2">
  ¿Cómo funciona?
</h1>
<p className="text-gray-400">
  Empezar es muy fácil: solo nombra tu bot, añade las preguntas frecuentes que
  puedan hacer tus clientes y proporciona las respuestas. No necesitas respuestas
  perfectas, ya que la IA se encarga de entender variaciones y matices.
  Con Talo, puedes ofrecer atención 24/7 sin contratar más personal, haciendo tu negocio
  más escalable y eficiente.
</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
