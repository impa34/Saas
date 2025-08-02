// PaymentSuccess.jsx
import { useEffect } from "react";
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

export default PaymentSuccess;
