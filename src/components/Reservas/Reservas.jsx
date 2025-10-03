import "./Reservas.css";
import { useState } from "react";
import { FaStreetView, FaPhone, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import img1 from "../../assets/paisaje/p2.webp";

const Reservas = () => {
  const [showPolicies, setShowPolicies] = useState(false);

  const togglePolicies = () => setShowPolicies((prev) => !prev);

  return (
    <div className="reservas">
      {/* Hero fijo */}
      <div className="banner-r" style={{ backgroundImage: `url(${img1})` }}>
        <div className="overlay-r">
          <h2>Reservá tu estadía en Cabañas Temístocles</h2>
        </div>
      </div>

      <div className="content-wrapper">
        {/* Intro */}
        <div className="intro-section">
          <p>
            Para consultas o reservas de nuestras cabañas, puede comunicarse
            directamente con nosotros a través de WhatsApp, teléfono o correo
            electrónico. Estamos disponibles para brindarle la mejor atención y
            responder a todas sus inquietudes. Nos pondremos en contacto con
            usted a la brevedad para confirmar su solicitud y garantizar que su
            estadía sea perfecta.
          </p>
        </div>

        {/* Contacto */}
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <FaStreetView size={28} />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rivadavia+2656,+Esquel,+Chubut,+Argentina"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rivadavia 2656 – Esquel, Chubut – Argentina
              </a>
            </div>
            <div className="contact-item">
              <FaWhatsapp size={28} />
              <a
                href="https://wa.me/5492945405471?text=Hola!%20Me%20comunico%20desde%20la%20pagina%20web,%20quiero%20realizar%20una%20Reserva"
                target="_blank"
                rel="noopener noreferrer"
              >
                +54 9 2945 405471
              </a>
            </div>
            <div className="contact-item">
              <FaPhone size={28} />
              <a href="tel:+542945450910" rel="noopener noreferrer">
                +54 9 2945 450910
              </a>
            </div>
            <div className="contact-item">
              <CiMail size={28} />
              <a
                href="mailto:info@temistoclesesquel.com.ar"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@temistoclesesquel.com.ar
              </a>
            </div>
          </div>
        </div>

        {/* Políticas toggle */}
        <div className="policies">
          <button onClick={togglePolicies} className="policies-btn">
            Política de Cancelación
          </button>
          {showPolicies && (
            <div className="policies-content">
              <p>
                <b>Cancelaciones:</b> Si decides cancelar tu reserva,
                lamentablemente, las reservas no podrán ser reembolsadas bajo
                ningún motivo ajeno a la empresa. Te sugerimos que, en caso de
                dudas o imprevistos, te pongas en contacto con nosotros para
                explorar posibles soluciones.
              </p>
              <p>
                <b>Cambios de fecha:</b> Si deseas cambiar la fecha de tu
                reserva, haremos todo lo posible para acomodar tu solicitud,
                sujeto a disponibilidad. Te recomendamos que te pongas en
                contacto con nosotros lo antes posible.
              </p>
              <br />
              <p>
                <b>
                  Agradecemos tu comprensión y estamos aquí para ayudarte con
                  cualquier consulta que tengas.
                </b>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservas;
