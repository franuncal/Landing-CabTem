import "./Ubicacion.css";
import { useState, useEffect, useCallback } from "react";
import img1 from "../../assets/paisaje/p1.webp";
import img2 from "../../assets/paisaje/p2.webp";
import img3 from "../../assets/paisaje/p3.webp";
import { Link } from "react-router-dom";

const Ubicacion = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3];

  const nextImage = useCallback(() => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // Cambiar automáticamente la imagen cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="ubicacion">
      {/* Banner con 3 imágenes */}
      <div className="banner-u">
        <div className="carousel-u">
          <img
            src={images[currentImage]}
            alt="Paisajes Esquel"
            className="carousel-image"
          />
        </div>
      </div>

      {/* Información de ubicación */}
      <div className="info-container">
        <div className="info-left">
          <h3>
            {" "}
            <b>CABAÑAS TEMISTOCLES</b>
          </h3>
          <p>Rivadavia 2656 – Esquel</p>
          <p>C.P: 9200 – Chubut</p>
          <h4>Cómo llegar:</h4>
          <p>
            Luego de cruzar el puente, hacemos dos cuadras hasta la calle
            Repetur (cartel). Doblar a la derecha 200 mtrs. y luego a la
            izquierda 50 mtrs.
          </p>
        </div>
        <div className="info-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-71.303333!3d-42.90125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ1JzUyLjMiUyA3MTHCsDE4JzM3LjQi!5e0!3m2!1ses!2sar!4v1635633453370!5m2!1ses!2sar"
            width="400"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* Botón de reserva */}
      <div className="reservation-info">
        <Link to="/reservas" className="reservation-btn">
          REALIZAR UNA RESERVA
        </Link>
      </div>
    </div>
  );
};

export default Ubicacion;
