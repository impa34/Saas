import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./i18n";
import { LanguageProvider } from "./context/LanguageProvider.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);
