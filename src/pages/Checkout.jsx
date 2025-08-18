import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [plan, setPlan] = useState(null);

  // Definimos los planes
  const plans = {
    pro: {
      name: "Plan PRO",
      price: "9.00",
      desc: "Acceso a Google Calendar y funciones avanzadas.",
    },
    full: {
      name: "Plan FULL",
      price: "19.00",
      desc: "Todo incluido: descargas, integraciones y soporte prioritario.",
    },
        lifetime: {
      name: "Plan FULL",
      price: "79.00",
      desc: "Todo incluido: descargas, integraciones y soporte prioritario.",
    },
  };

  useEffect(() => {
    // Detecta el plan desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPlan = urlParams.get("plan") || "pro";
    setPlan(plans[selectedPlan]);

    // Carga el SDK de PayPal dinámicamente
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=ASD_3ha4HdnRszeheTt3Vf5oxfugdWvyS9GeVItLoMIU5X1Vk5vgqBoOGYas0hg3Ox8ch-cd-n9ktDdN&currency=EUR`;
    script.async = true;
    script.onload = () => {
      if (window.paypal && plans[selectedPlan]) {
        window.paypal
          .Buttons({
            style: {
              layout: "vertical",
              color: "blue",
              shape: "pill",
              label: "pay",
            },
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: plans[selectedPlan].name,
                    amount: {
                      value: plans[selectedPlan].price,
                      currency_code: "EUR",
                    },
                  },
                ],
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => {
                // Llama al backend para marcar la suscripción como activa
                fetch("/api/payment/success", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    plan: selectedPlan,
                    orderId: data.orderID,
                    payer: details.payer,
                  }),
                }).then(() => {
                  alert(
                    `✅ Gracias ${details.payer.name.given_name}, tu suscripción al ${plans[selectedPlan].name} está activa.`
                  );
                  window.location.href = "/dashboard"; // redirigir al panel
                });
              });
            },
            onCancel: () => {
              alert("❌ Pago cancelado");
            },
            onError: (err) => {
              console.error("Error en el pago:", err);
              alert("⚠️ Ocurrió un error procesando el pago.");
            },
          })
          .render("#paypal-button-container");
      }
    };
    document.body.appendChild(script);
  }, []);

  if (!plan) return <div className="text-gray-900 dark:text-white">Cargando...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-2">{plan.name}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{plan.desc}</p>
        <p className="text-3xl font-bold mb-6">{plan.price} €/mes</p>

        {/* Contenedor para PayPal */}
        <div id="paypal-button-container"></div>

        <a
          href="/"
          className="inline-block mt-6 text-gray-400 hover:text-gray-900 dark:text-white text-sm"
        >
          ← Volver
        </a>
      </div>
    </div>
  );
}
