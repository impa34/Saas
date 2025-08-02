import { useNavigate, Link } from "react-router-dom";
import Typewriter from "../components/Typewriter";
import Whychooseus from "../components/Whychooseus";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      {/* Hero Section */}
<header className="relative flex-1 flex flex-col justify-center items-center text-center px-6 bg-cover bg-center" style={{ backgroundImage: "url('/hero1.jpg')" }}>
  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-black bg-opacity-80"></div>

  {/* Contenido por encima del overlay */}
  <div className="relative z-10">
    <Typewriter text="Tu asistente de chat personal para tu negocio." speed={60} />
    <p className="text-lg md:text-xl text-gray-300 mb-6 py-6">
      Genera tu chatbot inteligente con IA en minutos.
    </p>
    <button
      onClick={() => navigate("/register")}
      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition"
    >
      ¡Pruébalo gratis!
    </button>
  </div>
</header>


      {/* Placeholder Section */}
      <section className="bg-gray-800 py-3 text-center">
        <h3 className="text-3xl font-semibold">¿Por qué elegirnos?</h3>
        <Whychooseus />
      </section>

    <Footer />
    </div>
  );
}

export default Landing;
