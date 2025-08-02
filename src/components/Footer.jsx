import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="text-center py-6 text-gray-400 text-sm bg-gray-900">
  <div className="mb-2 space-x-4">
    <Link to="/pricing" className="hover:text-white">Planes</Link>
    <Link to="/about" className="hover:text-white">Acerca de</Link>
    <Link to="/contact" className="hover:text-white">Contacto</Link>
    <Link to="/privacy" className="hover:text-white">Políticas de privacidad</Link>
    <Link to="/terms" className="hover:text-white">Términos de uso</Link>
  </div>
  <p>© 2025 - Talo Chatbot. Todos los derechos reservados.</p>
</footer>
  )
}

export default Footer