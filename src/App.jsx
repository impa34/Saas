import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatbotForm from "./pages/ChatbotForm";
import ChatbotEmbed from "./components/ChatbotEmbed";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import TelegramIntegration from "./pages/TelegramIntegration"
import About from "./pages/About";
import Redirecting from "./pages/Redirecting";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import Checkout from "./pages/Checkout"
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import { useLanguage } from "./context/LanguageProvider"; 

function App() {  // Recibe language como prop
  const [key, setKey] = useState(0); // Clave para forzar re-renderización
 const { language } = useLanguage();

  useEffect(() => {
    // Cambiar la clave cada vez que el idioma cambie
    setKey(prevKey => prevKey + 1);
  }, [language]);

  useEffect(() => {
    if (document.getElementById("talo-widget-script")) return;

    window.TALO_CHATBOT_ID = "68aed2bbcff629d8c3784c64";

    const script = document.createElement("script");
    script.id = "talo-widget-script";
    script.src = "https://www.talochatbot.com/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
  };
  
  return (
    <div key={key}> {/* Esto forzará re-renderización completa cuando language cambie */}
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancel" element={<PaymentCancel />} />
        <Route path="/form" element={<ChatbotForm />}></Route>
        <Route path="/embed/:id" element={<ChatbotEmbed />}></Route>
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
        <Route path="/edit/:id" element={<ChatbotForm />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/telegram/:botId" element={<TelegramIntegration />} />
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/redirecting" element={<Redirecting />}></Route>
        <Route path="*" element={<p>404 - No encontrado</p>} />
      </Routes>
    </div>
  );
}

export default App;