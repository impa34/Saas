import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Terms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <div className="px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="text-purple-400 hover:text-purple-600 flex items-center gap-1"
        >
          <ArrowLeft size={18} />
          Volver
        </button>
      </div>

      <div className="flex-1 px-6 py-8 mb-20 flex flex-col items-center">
        <div className="w-full max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold text-purple-500 text-center">
            Términos de Uso
          </h1>

          <p className="text-sm text-gray-400 text-center">
            Última actualización: 2 de agosto de 2025
          </p>

          <section className="space-y-4">
            <p className="text-gray-300">
              Bienvenido a Talobot. Al acceder o utilizar nuestro sitio web y servicios, aceptas estar sujeto a estos Términos de Uso y a todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, no debes utilizar nuestros servicios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">1. Uso del servicio</h2>
            <p className="text-gray-300">
              Al usar Talobot, aceptas no utilizar el servicio para ningún propósito ilegal o no autorizado. Te comprometes a no violar ninguna ley local, nacional o internacional durante el uso de nuestros servicios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">2. Propiedad intelectual</h2>
            <p className="text-gray-300">
              Todo el contenido disponible en nuestro sitio web, incluyendo pero no limitado a texto, imágenes, logotipos y software, es propiedad de Talobot o de sus licenciantes y está protegido por leyes de derechos de autor y otras leyes de propiedad intelectual.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">3. Cuentas de usuario</h2>
            <p className="text-gray-300">
              Eres responsable de mantener la confidencialidad de tus credenciales de acceso. Nos reservamos el derecho de suspender o eliminar cuentas que violen estos términos o realicen actividades sospechosas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">4. Limitación de responsabilidad</h2>
            <p className="text-gray-300">
              Talobot no será responsable de ningún daño indirecto, incidental o consecuente que resulte del uso o la imposibilidad de usar el servicio. No garantizamos que el servicio esté libre de errores o interrupciones.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">5. Modificaciones</h2>
            <p className="text-gray-300">
              Nos reservamos el derecho de modificar estos Términos de Uso en cualquier momento. Publicaremos los cambios en esta página y te notificaremos si los cambios son significativos. El uso continuo del servicio tras la publicación de cambios implica tu aceptación.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">6. Ley aplicable</h2>
            <p className="text-gray-300">
              Estos términos se rigen por las leyes de España. Cualquier disputa relacionada con el servicio será resuelta en los tribunales de dicho país.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">7. Contacto</h2>
            <p className="text-gray-300">
              Si tienes preguntas sobre estos Términos de Uso, puedes contactarnos:
            </p>
            <ul className="list-disc list-inside pl-4 text-gray-300 space-y-1">
              <li>Email: <a href="mailto:talochatbot@gmail.com" className="text-purple-300 underline">talochatbot@gmail.com</a></li>
              <li>Sitio web: <a href="https://talochatbot.com" target="_blank" className="text-purple-300 underline">https://talochatbot.com</a></li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Terms;
