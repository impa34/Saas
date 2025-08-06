import { useNavigate, Link } from "react-router-dom";
import logo from "/logo1.png";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md">
      <a href="/landing" className="flex items-center">
        <img src={logo} alt="Talo Chatbot logo" className="h-12 ml-2 w-auto" />
      </a>

      {/* Nav links */}
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex space-x-4 text-sm text-gray-300">
          <Link to="/pricing" className="hover:text-white transition">
            Planes
          </Link>
          <Link to="/about" className="hover:text-white transition">
            Acerca de
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contacto
          </Link>
        </div>

        {/* Action buttons */}
        {isLoggedIn && (
          <button
            onClick={() => navigate("/home")}
            className=" bg-purple-600 text-white font-medium py-2 px-5 rounded-md shadow hover:bg-purple-700 transition"
          >
            Ir al panel
          </button>
        )}
        {isLoggedIn && (
          <div className="space-x-4">
            <button
              onClick={() => navigate("/profile")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md font-medium transition"
            >
              Perfil
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("googleLoggedIn");
                navigate("/landing");
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium transition"
            >
              Cerrar sesión
            </button>
          </div>
        )}
        {!isLoggedIn && (
          <div className="space-x-2">
            <button
              onClick={() => navigate("/login")}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-lg transition"
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-lg transition"
            >
              Registrarse
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
