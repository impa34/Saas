import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Globe, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { HiUserCircle, HiLogin, HiLogout, HiUser, HiViewGrid } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageProvider";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const { t } = useTranslation();
  const { language, toggleLanguage, changeLanguage } = useLanguage();

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
        <div className="hidden md:flex space-x-4 text-sm text-gray-700 dark:text-gray-300 mr-6 items-center">
          {/* Selector de idioma mejorado con dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition">
              <Globe size={18} />
              <span>{language === "es" ? "ES" : "EN"}</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <button
                onClick={() => changeLanguage("es")}
                className={`block w-full text-left px-4 py-2 text-sm ${language === "es" ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200" : "hover:bg-gray-100 dark:hover:bg-gray-600"}`}
              >
                Español
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`block w-full text-left px-4 py-2 text-sm ${language === "en" ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200" : "hover:bg-gray-100 dark:hover:bg-gray-600"}`}
              >
                English
              </button>
            </div>
          </div>
          
          <Link to="/pricing" className="hover:text-gray-900 dark:text-white transition">
            {t("navbar.pricing")}
          </Link>
          <Link to="/about" className="hover:text-gray-900 dark:text-white transition">
            {t("navbar.about")}
          </Link>
          <Link to="/contact" className="hover:text-gray-900 dark:text-white transition">
            {t("navbar.contact")}
          </Link>
        </div>

        {isLoggedIn ? (
          <div className="flex space-x-3">
            <button
              onClick={() => navigate("/home")}
              className={iconButtonClasses}
              aria-label={t("navbar.aria.dashboard")}
              title={t("navbar.dashboard")}
            >
              <HiViewGrid size={24} />
            </button>
            <button
              onClick={() => navigate("/profile")}
              className={iconButtonClasses}
              aria-label={t("navbar.aria.profile")}
              title={t("navbar.profile_nav")}
            >
              <HiUser size={24} />
            </button>
            <button
              onClick={() => {
                logout();
                navigate("/landing");
              }}
              className={logoutButtonClasses}
              aria-label={t("navbar.aria.logout")}
              title={t("navbar.logout")}
            >
              <HiLogout size={24} />
            </button>
          </div>
        ) : (
          <div className="flex space-x-3">
            <button
              onClick={() => navigate("/login")}
              className={iconButtonClasses}
              aria-label={t("navbar.aria.login")}
              title={t("navbar.login")}
            >
              <HiLogin size={24} />
            </button>
            <button
              onClick={() => navigate("/register")}
              className={iconButtonClasses}
              aria-label={t("navbar.aria.register")}
              title={t("navbar.register")}
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