(function () {
  const chatbotId = document.currentScript.getAttribute("data-chatbot-id");
  if (!chatbotId) return;

  const button = document.createElement("div");
  button.innerText = "💬";
  Object.assign(button.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: "9999",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
  });
  document.body.appendChild(button);

  const iframe = document.createElement("iframe");
  iframe.src = `http://localhost:3000/embed/${chatbotId}`;
  Object.assign(iframe.style, {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "400px",
    height: "500px",
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    zIndex: "9999",
    transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
    transform: "translateY(100%)",
    opacity: "0",
    pointerEvents: "none",
  });
  document.body.appendChild(iframe);

  let isOpen = false;

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    isOpen = !isOpen;

    if (isOpen) {
      iframe.style.transform = "translateY(0)";
      iframe.style.opacity = "1";
      iframe.style.pointerEvents = "auto";
    } else {
      iframe.style.transform = "translateY(100%)";
      iframe.style.opacity = "0";
      iframe.style.pointerEvents = "none";
    }
  });

  // Cierra si se hace clic fuera del iframe y botón
  document.addEventListener("mousedown", (e) => {
    const clickInsideIframe = e.target === iframe || iframe.contains(e.target);
    const clickOnButton = e.target === button || button.contains(e.target);

    if (!clickInsideIframe && !clickOnButton && isOpen) {
      iframe.style.transform = "translateY(100%)";
      iframe.style.opacity = "0";
      iframe.style.pointerEvents = "none";
      isOpen = false;
    }
  });
})();
