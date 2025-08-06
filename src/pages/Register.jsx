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
    if (password !== confirmPassword) {
      setError("Passwords must match");
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
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("status", data.user.status)
        setSuccess("Login successful");
        navigate("/home");
      } else {
        setError(data.message || "Register error");
      }
    } catch (e) {
      setError("Server error");
      console.log(e);
    }
  };

  const handleGoogleLogin = () => {
window.location.href = "https://saas-backend-xrkb.onrender.com/api/auth/google";
    
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

          {error && (
            <div className="text-red-600 text-sm bg-red-100 px-4 py-2 rounded-md">
              {error}
            </div>
          )}

          {success && (
            <div className="text-green-600 text-sm bg-green-100 px-4 py-2 rounded-md">
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
    <button
          onClick={handleGoogleLogin}
          className="flex items-center w-full justify-center gap-2 bg-white text-gray-800 px-4 py-2 mt-2 rounded-sm shadow hover:shadow-md hover:bg-gray-200 transition duration-200"
        >
          <img src="/google.webp" alt="Google" className="w-5 h-5" /> Iniciar sesión con Google
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
