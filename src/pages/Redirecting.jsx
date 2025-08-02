// Redirecting.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirecting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);

  return <p>Redirigiendo...</p>;
};

export default Redirecting;
