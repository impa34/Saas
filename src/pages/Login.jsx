import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  

  const handleClick = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const res = await fetch("https://saas-backend-xrkb.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data?.token && data?.user?.status) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("status", data.user.status)
      navigate("/home");
    } else {
      console.log(data);
    }
  };

  const handleGoogleLogin = () => {
window.location.href = "https://saas-backend-xrkb.onrender.com/api/auth/google";

    
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">

     
      <div className="bg-gray-700 shadow-xl rounded-2xl p-8 max-w-md w-full">

        <h2 className="text-3xl font-semibold mb-6 text-center text-white">
          Iniciar sesión
        </h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none text-white bg-gray-700 focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 border border-gray-300 rounded-sm text-white focus:outline-none bg-gray-700 focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            onClick={handleClick}
          >
            Iniciar sesión
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center w-full justify-center gap-2 bg-white text-gray-800 px-4 py-2 mt-2 rounded-sm shadow hover:shadow-md hover:bg-gray-200 transition duration-200"
        >
          <img src="/google.webp" alt="Google" className="w-5 h-5" /> Iniciar sesión con Google
        </button>
        <p className="text-sm text-center text-white mt-4">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-purple-600 hover:underline">
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
