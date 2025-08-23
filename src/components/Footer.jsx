import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="text-center py-6 text-gray-400 text-sm bg-white dark:bg-gray-900">
      <script src="http://www.talochatbot.com/widget.js" data-chatbot-id="686e55ac28801949c4df3ba9" ></script>
  <div className="mb-2 space-x-4">
    <Link to="/pricing" className="hover:text-gray-900 dark:text-white">Planes</Link>
    <Link to="/about" className="hover:text-gray-900 dark:text-white">Acerca de</Link>
    <Link to="/contact" className="hover:text-gray-900 dark:text-white">Contacto</Link>
    <Link to="/privacy" className="hover:text-gray-900 dark:text-white">Políticas de privacidad</Link>
    <Link to="/terms" className="hover:text-gray-900 dark:text-white">Términos de uso</Link>
  </div>
  <p>© 2025 - Talobot. Todos los derechos reservados.</p>
</footer>
  )
}

export default Footer