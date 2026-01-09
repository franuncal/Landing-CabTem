import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaRegCreditCard,
  // FaWhatsapp,
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
          <p>
            📞{" "}
            <a href="tel:+542945450910" rel="noopener noreferrer">
              +54 9 2945 450910
            </a>
          </p>
        </div>

        {/* Redes sociales */}
        <div className="footer-section">
          <h3>Seguinos</h3>
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
            {/* <a
              href="https://wa.me/5492945405471?text=Hola!%20Me%20comunico%20desde%20la%20pagina%20web,%20quiero%20realizar%20una%20Reserva"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaWhatsapp />
            </a> */}
          </div>
        </div>

        {/* Medios de pago */}
        <div className="footer-section">
          <h3>Medios de Pagos</h3>

          <p>
            <FaRegCreditCard /> Mercado Pago
          </p>
          <p>
            <BsCashStack /> Efectivo
          </p>
          <p>
            <BsBank /> Transferencias
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/privacidad" className="footer-link">
            Política de Privacidad
          </Link>
          <span className="footer-separator">|</span>
          <Link to="/terminos" className="footer-link">
            Términos y Condiciones
          </Link>
        </div>
        <p>
          © {new Date().getFullYear()} Cabañas Temistocles | Todos los derechos
          reservados.
        </p>
        <p className="dev-credit">
          Desarrollado por{" "}
          <a
            href="https://franuncal.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            fran.dev
          </a>
        </p>
      </div>
    </footer>
  );
};
