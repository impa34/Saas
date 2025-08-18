import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
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
            Política de Privacidad
          </h1>

          <p className="text-sm text-gray-400 text-center">
            Última actualización: 2 de agosto de 2025
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">1. Introducción</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Esta Política de Privacidad describe nuestras políticas sobre la recopilación, uso y divulgación de tus datos cuando usas Talobot. Al utilizar el servicio, aceptas el uso de tu información de acuerdo con esta política.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">2. Definiciones clave</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Cuenta:</strong> Identificador único para acceder al servicio.</li>
              <li><strong>Datos personales:</strong> Información que te identifica directa o indirectamente.</li>
              <li><strong>Cookies:</strong> Archivos usados para rastrear actividad y mejorar el servicio.</li>
              <li><strong>Servicio:</strong> El sitio web talochatbot.com y sus funcionalidades.</li>
              <li><strong>Proveedor de servicios:</strong> Terceros que ayudan a operar el sitio.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">3. Datos que recopilamos</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Podemos recopilar nombre, correo electrónico, información de navegación, dirección IP, tipo de navegador, duración de sesiones y dispositivo utilizado.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">4. Uso de datos</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Usamos tus datos para mejorar el servicio, ofrecer funcionalidades personalizadas, contactarte y proteger nuestra plataforma.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">5. Compartición de datos</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Podemos compartir tus datos con servicios como Stripe, Google Calendar, proveedores de hosting y análisis de uso, siempre bajo obligaciones de privacidad.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">6. Retención y eliminación</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Retenemos tus datos mientras tengas una cuenta activa o mientras sea legalmente necesario. Puedes solicitarnos su eliminación escribiendo a nuestro correo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">7. Seguridad</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Aplicamos medidas razonables para proteger tu información, pero ningún sistema es 100% seguro. Te recomendamos utilizar contraseñas fuertes y mantener tu cuenta protegida.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">8. Privacidad de menores</h2>
            <p className="text-gray-700 dark:text-gray-300">
              No recopilamos información de menores de 13 años. Si eres padre o tutor y detectas que tu hijo ha compartido datos, contáctanos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">9. Cambios a esta política</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Podemos actualizar esta política. Te notificaremos por correo o en el sitio cuando haya cambios importantes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">10. Contacto</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Puedes escribirnos a <a href="mailto:talochatbot@gmail.com" className="text-purple-300 underline">talochatbot@gmail.com</a> o visitar <a href="https://talochatbot.com" className="text-purple-300 underline" target="_blank">talochatbot.com</a>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Privacy;
