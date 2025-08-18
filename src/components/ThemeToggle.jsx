// src/components/ThemeToggle.jsx
import { Moon, Sun } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";

function ThemeToggle() {
  const [theme, setTheme] = useDarkMode();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-900" />
      )}
    </button>
  );
}

export default ThemeToggle;
