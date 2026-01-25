import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export const WhatsAppButton = () => {
  const phone = "5492945405471"; // número sin + ni espacios
  const message =
    "Hola me comunico desde la web de Temistocles, quiero mas informacion!";

  // Asegurar que solo haya un botón de WhatsApp en el DOM
  useEffect(() => {
    const existingButtons = document.querySelectorAll(".whatsapp-wrapper");
    if (existingButtons.length > 1) {
      // Si hay más de uno, eliminar los duplicados (mantener solo el primero)
      for (let i = 1; i < existingButtons.length; i++) {
        existingButtons[i].remove();
      }
    }
  }, []);

  return (
    <div className="whatsapp-wrapper">
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
        <span className="whatsapp-tooltip">Chatea con nosotros</span>
      </a>
    </div>
  );
};
