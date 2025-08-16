import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // 🔹 Validaciones frontend
    if (!username.trim()) {
      setError("El nombre es obligatorio.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Introduce un email válido.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const res = await fetch("https://saas-backend-xrkb.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error en el registro.");
        return;
      }

      if (data?.token && data?.user?.status) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("status", data.user.status);
        setSuccess("Registro exitoso 🎉");
        setTimeout(() => navigate("/home"), 1000);
      } else {
        setError("Respuesta inesperada del servidor.");
      }
    } catch (e) {
      console.error(e);
      setError("No se pudo conectar con el servidor. Intenta más tarde.");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://saas-backend-xrkb.onrender.com/api/google-auth";
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-700 shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white">Registrarse</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-2 border text-white border-gray-300 rounded-sm focus:outline-none bg-gray-700 focus:ring-2 focus:ring-purple-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border text-white border-gray-300 rounded-sm focus:outline-none bg-gray-700 focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 border text-white border-gray-300 rounded-sm focus:outline-none bg-gray-700 focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="w-full px-4 py-2 border text-white border-gray-300 rounded-sm focus:outline-none bg-gray-700 focus:ring-2 focus:ring-purple-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {/* Mensajes de error / éxito */}
          {error && (
            <div className="text-red-400 text-sm bg-red-900/40 px-4 py-2 rounded-md border border-red-600">
              {error}
            </div>
          )}

          {success && (
            <div className="text-green-400 text-sm bg-green-900/40 px-4 py-2 rounded-md border border-green-600">
              {success}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-sm transition duration-200"
          >
            Registrarse
          </button>
        </form>

        {/* Botón Google */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center w-full justify-center gap-2 bg-white text-gray-800 px-4 py-2 mt-2 rounded-sm shadow hover:shadow-md hover:bg-gray-200 transition duration-200"
        >
          <img src="/google.webp" alt="Google" className="w-5 h-5" /> Registrarse con Google
        </button>

        <p className="text-sm text-center text-white mt-4">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
