import { useNavigate, Link } from "react-router-dom";
import Typewriter from "../components/Typewriter";
import Whychooseus from "../components/Whychooseus";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeatureCardSection from "../components/FeaturedCardSection";
import InteractiveFeatureSection from "../components/InteractiveFeatureSection";
import {Helmet} from "react-helmet"
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion"
import FeatureShowcase from "../components/FeatureShowcase";

function Landing() {
  const navigate = useNavigate();
const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <Helmet>
        <title>Talobot | Chatbots con IA para tu negocio</title>
        <script src="http://www.talochatbot.com/widget.js" data-chatbot-id="686e55ac28801949c4df3ba9" ></script>
        <meta
          name="description"
          content="Crea tu chatbot con IA en minutos. Mejora la atención al cliente sin conocimientos técnicos."
        />
        <meta name="keywords" content="chatbot, ia, atención al cliente, automatización, negocios" />
        <meta property="og:title" content="Talobot | Chatbots con IA" />
        <meta property="og:description" content="Chatbots inteligentes para negocios, fáciles de crear." />
        <meta property="og:url" content="https://www.talochatbot.com" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative flex-1 flex flex-col justify-center items-center text-center px-6 bg-cover bg-center min-h-[80vh]"
        style={{ backgroundImage: "url('/hero1.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
<motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="relative z-10"
>
  <Typewriter 
    key={i18n.language}   // 👈 forzar nuevo montaje al cambiar idioma
    text={t("hero_title")} 
    speed={60} 
  />
  <p className="text-lg md:text-xl text-gray-300 mb-6 py-6">
    {t("hero_subtitle")}
  </p>
  <button
    onClick={() => navigate("/register")}
    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition"
  >
    {t("hero_cta")}
  </button>
</motion.div>
      </header>
       <section className="bg-purple-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">{t("cta_title")}</h2>
        <p className="text-lg mb-6">{t("cta_subtitle")}</p>
        <button
          onClick={() => navigate("/register")}
          className="bg-white text-purple-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          {t("cta_button")}
        </button>
      </section>
<FeatureShowcase />
      {/* Características destacadas */}
      <InteractiveFeatureSection />

      {/* Why Choose Us */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 text-center px-4">
        <h3 className="text-3xl font-semibold mb-6">{t("why_choose_us")}</h3>
        <Whychooseus />
      </section>

      <FeatureCardSection />
      

      {/* Planes */}
      <section className="bg-white dark:bg-gray-900 py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t("plans_title")}
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              name: t("plan_pro"),
              price: t("plan_pro_price"),
              features: t("plan_pro_features", { returnObjects: true }),
              color: "purple",
            },
            {
              name: t("plan_full"),
              price: t("plan_full_price"),
              features: t("plan_full_features", { returnObjects: true }),
              color: "purple",
            },
            {
              name: t("plan_lifetime"),
              price: t("plan_lifetime_price"),
              features: t("plan_lifetime_features", { returnObjects: true }),
              color: "purple",
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg w-full max-w-full break-words"
            >
              <h3
                className={`text-2xl font-semibold text-${plan.color}-400 mb-4`}
              >
                {plan.name}
              </h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
                {plan.features.map((feat, idx) => (
                  <li key={idx}>✅ {feat}</li>
                ))}
              </ul>
              <button
                onClick={() => navigate("/register")}
                className={`bg-${plan.color}-600 hover:bg-${plan.color}-700 text-white px-4 py-2 rounded-md font-medium transition`}
              >
                {t("plan_button")}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
   

      <Footer />
    </div>
  );
}

export default Landing;
