import {
  FaInstagram,
  FaFacebook,
  FaRegCreditCard,
  FaWhatsapp,
} from "react-icons/fa";
import { BsBank, BsCashStack } from "react-icons/bs";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Dirección de contacto */}
        <div className="footer-section">
          <h3>Dirección de Contacto</h3>
          <p>Cabañas Temistocles</p>
          <p>Rivadavia 2656 – Esquel</p>
          <p>C.P: 9200 – Chubut, Patagonia Argentina.</p>
          <p>📞 +54 2945 405471</p>
          <p>📲 - Enviar WhatsApp</p>
        </div>

        {/* Redes sociales */}
        <div className="footer-section">
          <h3>Contáctenos</h3>
          <div className="social-links">
            <a
              href="https://www.instagram.com/cabanas_temistocles/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/2945405471"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Medios de pago */}
        <div className="footer-section">
          <h3>Medios de Pagos</h3>
          <p>Elige tu mejor forma de pago!</p>
          <p>
            {" "}
            <FaRegCreditCard /> Tarjeta de Crédito
          </p>
          <p>
            {" "}
            <BsCashStack /> Efectivo
          </p>
          <p>
            <BsBank /> Transferencias
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          N° de disposición turística: 255/2024 | © {new Date().getFullYear()}{" "}
          Cabañas Temistocles. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
