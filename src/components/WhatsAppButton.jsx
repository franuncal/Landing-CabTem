import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export const WhatsAppButton = () => {
  const phone = "5492945405471"; // número sin + ni espacios
  const message =
    "Hola me comunico desde la web de Temistocles, quiero mas informacion!";

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
