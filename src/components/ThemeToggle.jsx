// components/ThemeToggle.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="ml-2 mt-2 rounded-md px-3 py-2 border border-gray-300 dark:border-gray-600"
      aria-label="Cambiar tema"
      title="Cambiar tema"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
