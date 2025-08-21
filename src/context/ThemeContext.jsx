import { createContext, useEffect, useState, useMemo } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  // lee una vez (coincide con el script del head)
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // aplica la clase y persiste
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // si el usuario no ha fijado tema, respeta cambios del sistema
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      const manual = localStorage.getItem("theme"); // si existe, respetamos
      if (!manual) setTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener?.("change", onChange) || mq.addListener(onChange);
    return () =>
      mq.removeEventListener?.("change", onChange) || mq.removeListener(onChange);
  }, []);

  const value = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    setTheme,
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
