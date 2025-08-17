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

// PaymentSuccess.jsx
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const orderId = searchParams.get("token"); // PayPal lo manda como "token"
    const plan = localStorage.getItem("selectedPlan"); // asegúrate de guardarlo antes de ir a PayPal

    if (!orderId || !plan) {
      console.error("❌ Falta orderId o plan");
      navigate("/pricing");
      return;
    }

    // 1. Capturar orden en backend
    fetch("https://saas-backend-xrkb.onrender.com/api/paypal/capture-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ orderId, plan }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          console.error("❌ Error capturando orden:", data);
          navigate("/payment-failed");
          return;
        }

        // 2. Refrescar usuario
        fetch("https://saas-backend-xrkb.onrender.com/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((r) => r.json())
          .then((user) => {
            console.log("🎉 Usuario actualizado:", user);
            navigate("/home");
          });
      })
      .catch((err) => {
        console.error("❌ Error en flujo de pago:", err);
        navigate("/payment-failed");
      });
  }, []);

  return (
    <p className="text-center mt-10 text-lg text-white">
      Procesando tu pago... 🔄
    </p>
  );
};

export default PaymentSuccess;

