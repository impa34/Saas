import { Route, Routes, Navigate } from "react-router-dom";
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

function App() {
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
  };
  return (
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
       <Route path="/telegram" element={<TelegramIntegration />}></Route>
      <Route path="/privacy" element={<Privacy />}></Route>
      <Route path="/terms" element={<Terms />}></Route>
      <Route path="/redirecting" element={<Redirecting />}></Route>
      <Route path="*" element={<p>404 - No encontrado</p>} />
    </Routes>
  );
}

export default App;
