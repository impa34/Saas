import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const plans = [
  {
    title: "Pro",
    price: "9€/mes",
    features: [
      "Prompts ilimitados",
      "Personalización del bot (colores, estadísticas, fuentes)",
      "Integración de Google Calendar",
    ],
    cta: "Hazte Pro",
    bg: "bg-blue-800",
    textColor: "text-gray-900 dark:text-white",
    border: "border-blue-500",
  },
  {
    title: "Full",
    price: "19€/mes",
    features: [
      "Bot de Telegram",
      "Descarga de conversaciones",
      "Soporte para archivos de hoja de cálculo",
    ],
    cta: "Obtener Full",
    bg: "bg-purple-700",
    textColor: "text-gray-900 dark:text-white",
    border: "border-purple-500",
    badge: "Mejor oferta",
  },
  {
    title: "Lifetime",
    price: "79€ único pago",
    features: [
      "Todo lo incluido en Full",
      "Sin pagos recurrentes",
      "Soporte prioritario",
    ],
    cta: "Comprar acceso vitalicio",
    bg: "bg-yellow-700",
    textColor: "text-gray-900 dark:text-white",
    border: "border-yellow-500",
    badge: "Popular",
  },
];


  const redirectPlan = new URLSearchParams(location.search).get("redirectPlan");

  useEffect(() => {
    if (redirectPlan && localStorage.getItem("token")) {
      handlePlanSelect(redirectPlan);
    }
  }, [redirectPlan]);

  const handlePlanSelect = async (plan) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate(`/register?redirectPlan=${plan}`);
      return;
    }

    try {
      localStorage.setItem("selectedPlan", plan);
      const res = await fetch(
        "https://saas-backend-xrkb.onrender.com/api/paypal/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({ plan }),
        }
      );

      const data = await res.json();
      if (data?.approvalUrl) {
        window.location.href = data.approvalUrl;
      } else {
        console.error("❌ Error al iniciar el pago:", data);
        alert("Error al iniciar el pago con PayPal");
      }
    } catch (e) {
      console.error("❌ Error en handlePlanSelect:", e);
    }
  };

  const planKeys = ["pro", "full", "lifetime"];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-white">
      <Navbar />
      <button
        onClick={() => navigate(-1)}
        className="text-purple-400 hover:text-purple-600 px-6 py-2 flex items-center gap-2"
      >
        <ArrowLeft /> {t("pricing.back")}
      </button>

      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl text-gray-900 dark:text-white font-bold mb-4">{t("pricing.selectPlanTitle")}</h1>
        <p className="text-gray-300">{t("pricing.selectPlanSubtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-5 px-4 md:px-8">
        {planKeys.map((key) => {
          const plan = t(`pricing.plans.${key}`, { returnObjects: true });
          return (
<div
  key={plan.title}
  className={`flex flex-col justify-between rounded-2xl shadow-lg p-6 border h-full ${plan.bg} ${plan.border} transition hover:scale-105 duration-300 relative`}
>
              {plan.badge && (
                <div className="absolute top-4 right-4 bg-white text-black text-xs font-semibold px-2 py-1 rounded-full shadow">
                  {plan.badge}
                </div>
              )}

              <div>
                <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-sm">{feature}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handlePlanSelect(key)}
                className="w-full py-2 font-semibold rounded-md bg-black bg-opacity-20 hover:bg-opacity-40 transition duration-200"
              >
                {plan.cta}
              </button>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8 px-4 text-gray-700 dark:text-gray-300 text-sm">
        <p>{t("pricing.legalNotice")}</p>
      </div>

      <Footer />
    </div>
  );
}
