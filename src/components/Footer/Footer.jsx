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
          📞{" "}
          <a href="tel:+542945450910" rel="noopener noreferrer">
            +54 9 2945 450910
          </a>
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
              href="https://wa.me/5492945405471?text=Hola!%20Me%20comunico%20desde%20la%20pagina%20web,%20quiero%20realizar%20una%20Reserva"
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
            <FaRegCreditCard /> Mercado Pago
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
        {/* Eliminar disposicion. */}
        <p>
          © {new Date().getFullYear()} Cabañas Temistocles. | Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
