import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_31z4uei",
        "template_ycwzz9y",
        formData,
        "VUffUxpddJMPbBxqe"
      );
      setIsSent(true)
      setFormData({name:"", email:"", message:""})
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <Navbar />
      <div className="">
        <button
          onClick={() => navigate(-1)}
          className="text-purple-400 hover:text-purple-600 px-6 py-2"
        >
          <ArrowLeft className="" /> Volver
        </button>
      </div>

      <div className="max-w-xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-6 text-purple-500">Contáctanos</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Nos encantaría saber de ti. Ya sea una duda, comentario o propuesta de colaboración, ¡escríbenos sin compromiso!
        </p>
         {isSent ? (
          <p className="text-green-400 font-semibold">¡Mensaje enviado correctamente!</p>
        ) : (
          <form className="space-y-4 mt-6" onSubmit={handleSend}>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-sm bg-gray-100 dark:bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-sm bg-gray-100 dark:bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-sm bg-gray-100 dark:bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              rows={5}
              required
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-gray-900 dark:text-white font-semibold py-2 px-6 rounded-sm transition"
            >
              Enviar mensaje
            </button>
          </form>)}
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
