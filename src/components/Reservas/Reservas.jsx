import "./Reservas.css";
import { useState, useEffect, useCallback } from "react";
import { FaStreetView, FaPhone, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import img1 from "../../assets/paisaje/p1.jpg";
import img2 from "../../assets/paisaje/p2.jpg";
import img3 from "../../assets/paisaje/p3.jpg";

const Reservas = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showPolicies, setShowPolicies] = useState(false);

  const images = [img1, img2, img3];

  const nextImage = useCallback(() => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const togglePolicies = () => {
    setShowPolicies((prev) => !prev); // Mejor uso de la función previa para alternar
  };

  // Cambiar automáticamente la imagen cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="reservas">
      {/* Banner con 3 imágenes */}
      <div className="banner-r">
        <div className="carousel-r">
          <img
            src={images[currentImage]}
            alt="Paisajes Esquel"
            className="carousel-image"
          />
        </div>
      </div>

      <div className="intro-section">
        <h3>
          <b>Reservas</b>
        </h3>
        <p>
          Para consultas o reservas de nuestras cabañas, puede comunicarse
          directamente con nosotros a través de WhatsApp, por teléfono o correo
          electrónico. Estamos disponibles para brindarle la mejor atención y
          responder a todas sus inquietudes. Nos pondremos en contacto con usted
          a la brevedad para confirmar su solicitud y garantizar que su estadía
          sea perfecta.
        </p>
      </div>

      {/* Información de contacto */}
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FaStreetView size={30} />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rivadavia+2656,+Esquel,+Chubut,+Argentina"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rivadavia 2656 – Esquel – Chubut – Argentina
            </a>
          </div>
          <div className="contact-item">
            <FaWhatsapp size={30} />
            <a
              href="https://wa.me/2945405471?text=Hola! Me comunico desde la pagina web, quiero realizar una Reserva"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 2945 405471
            </a>
          </div>
          <div className="contact-item">
            <FaPhone size={30} />
            <a
              href="tel:+542945450910"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 2945 450910
            </a>
          </div>
          <div className="contact-item">
            <CiMail size={30} />
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

      {/* Botón de políticas de privacidad */}
      <div className="policies">
        <button onClick={togglePolicies} className="policies-btn">
          Política de Cancelación
        </button>
        {showPolicies && (
          <div className="policies-content">
            <p>
              <b>
                Cancelaciones realizadas con más de 48 horas de anticipación:
              </b>{" "}
              Si decides cancelar tu reserva con más de 48 horas de
              anticipación, te reembolsaremos el 100% del monto pagado. Para
              solicitar la cancelación, por favor contáctanos a través de
              nuestro correo electrónico o número de teléfono.
            </p>

            <p>
              <b>
                Cancelaciones realizadas entre 24 y 48 horas de anticipación:
              </b>{" "}
              Si cancelas tu reserva entre 24 y 48 horas antes de la llegada, te
              reembolsaremos el 50% del monto total pagado.
            </p>

            <p>
              <b>
                Cancelaciones realizadas con menos de 24 horas de anticipación:
              </b>{" "}
              Las cancelaciones realizadas con menos de 24 horas de anticipación
              no son reembolsables.
            </p>

            <p>
              <b>Cambios de fecha:</b> Si deseas cambiar la fecha de tu reserva,
              haremos todo lo posible para acomodar tu solicitud, sujeto a
              disponibilidad. Te recomendamos que te pongas en contacto con
              nosotros lo antes posible.
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
  );
};

export default Reservas;
