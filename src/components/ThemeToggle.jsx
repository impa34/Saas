import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // opcional iconos

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg">
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}

export default ThemeToggle;
