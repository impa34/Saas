import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Globe } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { HiUserCircle, HiLogin, HiLogout, HiUser, HiViewGrid } from "react-icons/hi";
import { useTranslation } from "react-i18next";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language || "es");

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);   // 👈 aquí el cambio real
    localStorage.setItem("lang", newLang);
  };

  const iconButtonClasses =
    "text-white bg-purple-600 hover:bg-purple-700 p-2 rounded-md transition flex items-center justify-center";

  const logoutButtonClasses =
    "text-white bg-red-600 hover:bg-red-700 p-2 rounded-md transition flex items-center justify-center";

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      <a href="/landing" className="flex items-center">
        <img
          src="/logo1.webp"
          alt="Talobot logo"
          className="h-12 ml-2 w-auto hidden dark:block"
        />
        <img
          src="/logo1_dark.webp"
          alt="Talobot logo dark"
          className="h-12 ml-2 w-auto dark:hidden"
        />
      </a>
      <ThemeToggle className="hidden" />
      <div className="ml-auto flex items-center">
        <div className="hidden md:flex space-x-4 text-sm text-gray-700 dark:text-gray-300 mr-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition"
          >
            <Globe size={18} />
            <span>{language === "es" ? "ES" : "EN"}</span>
          </button>
          <Link to="/pricing" className="hover:text-gray-900 dark:text-white transition">
            Planes
          </Link>
          <Link to="/about" className="hover:text-gray-900 dark:text-white transition">
            Acerca de
          </Link>
          <Link to="/contact" className="hover:text-gray-900 dark:text-white transition">
            Contacto
          </Link>
        </div>

        {isLoggedIn ? (
          <div className="flex space-x-3">
            <button
              onClick={() => navigate("/home")}
              className={iconButtonClasses}
              aria-label="Ir al panel"
              title="Panel"
            >
              <HiViewGrid size={24} />
            </button>
            <button
              onClick={() => navigate("/profile")}
              className={iconButtonClasses}
              aria-label="Perfil"
              title="Perfil"
            >
              <HiUser size={24} />
            </button>
            <button
              onClick={() => {
                logout();
                navigate("/landing");
              }}
              className={logoutButtonClasses}
              aria-label="Cerrar sesión"
              title="Cerrar sesión"
            >
              <HiLogout size={24} />
            </button>
          </div>
        ) : (
          <div className="flex space-x-3">
            <button
              onClick={() => navigate("/login")}
              className={iconButtonClasses}
              aria-label="Iniciar sesión"
              title="Iniciar sesión"
            >
              <HiLogin size={24} />
            </button>
            <button
              onClick={() => navigate("/register")}
              className={iconButtonClasses}
              aria-label="Registrarse"
              title="Registrarse"
            >
              <HiUserCircle size={24} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
