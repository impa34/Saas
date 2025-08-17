// PaymentSuccess.jsx
{/*import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    // refrescar user info (ej. plan)
    fetch("https://saas-backend-xrkb.onrender.com/api/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((user) => {
        console.log("🎉 Usuario tras pago:", user);
        navigate("/home");
      });
  }, []);

  return <p className="text-center mt-10 text-lg text-white">¡Pago exitoso! Redirigiendo...</p>;
};

export default PaymentSuccess;*/}

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const orderId = searchParams.get("token"); // ⚠️ PayPal lo llama "token"
    const plan = localStorage.getItem("selectedPlan");

    if (!orderId || !plan) {
      console.error("Faltan orderId o plan:", { orderId, plan });
      return;
    }

    fetch("https://saas-backend-xrkb.onrender.com/api/paypal/capture-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ orderId, plan }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("✅ Pago capturado:", data);
        navigate("/home");
      })
      .catch((err) => console.error("❌ Error en capture-order:", err));
  }, []);

  return <p className="text-center mt-10 text-lg text-white">¡Pago exitoso! Redirigiendo...</p>;
};

export default PaymentSuccess;


