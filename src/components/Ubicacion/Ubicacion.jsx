import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaDirections, FaRoute, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./Ubicacion.css";

const Ubicacion = () => {
  return (
    <div className="ubicacion">
      {/* Header Simple */}
      <div className="ubicacion-header">
        <h1 className="ubicacion-title">Ubicación</h1>
        <p className="ubicacion-subtitle">
          Estamos en Esquel, Patagonia Argentina
        </p>
      </div>

      {/* Mapa Principal - Hero */}
      <div className="map-hero-section">
        <div className="map-hero-container">
          <div className="map-hero-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.1001678889725!2d-71.30338200000001!3d-42.901156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dac6c46d170b5%3A0x6d54001b00484279!2zQ2FiYcOxYXMgVGVtw61zdG9jbGVz!5e1!3m2!1ses-419!2sar!4v1759499502138!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Cabañas Temístocles"
            ></iframe>
          </div>
          <div className="map-hero-overlay">
            <div className="map-hero-info">
              <div className="map-hero-badge">
                <FaMapMarkerAlt />
                <span>Rivadavia 2656, Esquel</span>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-42.901156,-71.303382"
                target="_blank"
                rel="noopener noreferrer"
                className="map-hero-button"
              >
                <FaDirections /> Obtener direcciones
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Información en Grid Moderno */}
      <div className="ubicacion-info-section">
        <div className="ubicacion-info-container">
          {/* Card de Dirección Completa */}
          <div className="info-card-modern">
            <div className="info-card-header">
              <div className="info-card-icon-modern">
                <FaMapMarkerAlt />
              </div>
              <h3 className="info-card-title-modern">Dirección</h3>
            </div>
            <div className="info-card-body">
              <p className="info-card-address-modern">
                <strong>Cabañas Temístocles</strong>
                <br />
                Rivadavia 2656
                <br />
                Esquel, Chubut
                <br />
                C.P: 9200
                <br />
                Argentina
              </p>
            </div>
          </div>

          {/* Card de Cómo Llegar */}
          <div className="info-card-modern">
            <div className="info-card-header">
              <div className="info-card-icon-modern">
                <FaRoute />
              </div>
              <h3 className="info-card-title-modern">Cómo llegar</h3>
            </div>
            <div className="info-card-body">
              <div className="directions-steps">
                <div className="direction-step">
                  <span className="step-number">1</span>
                  <p>Cruzar el puente</p>
                </div>
                <div className="direction-step">
                  <span className="step-number">2</span>
                  <p>Dos cuadras hasta calle Repetur (cartel)</p>
                </div>
                <div className="direction-step">
                  <span className="step-number">3</span>
                  <p>Doblar a la derecha 200 m</p>
                </div>
                <div className="direction-step">
                  <span className="step-number">4</span>
                  <p>Doblar a la izquierda 50 m</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Contacto */}
          <div className="info-card-modern">
            <div className="info-card-header">
              <div className="info-card-icon-modern">
                <FaPhone />
              </div>
              <h3 className="info-card-title-modern">Contacto</h3>
            </div>
            <div className="info-card-body">
              <div className="contact-links">
                <a
                  href="https://wa.me/5492945405471?text=Hola!%20Me%20comunico%20desde%20la%20pagina%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+542945450910"
                  className="contact-link"
                >
                  <FaPhone />
                  <span>Teléfono</span>
                </a>
                <a
                  href="mailto:info@temistoclesesquel.com.ar"
                  className="contact-link"
                >
                  <FaEnvelope />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Integrado */}
      <div className="ubicacion-cta-modern">
        <div className="cta-modern-content">
          <h2 className="cta-modern-title">¿Listo para tu estadía?</h2>
          <p className="cta-modern-text">
            Reservá tu cabaña ahora y disfrutá de la Patagonia
          </p>
          <Link to="/reservas" className="cta-modern-button">
            Realizar una reserva
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
