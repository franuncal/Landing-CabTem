// Foto de Habitacion de abajo.
// Foto del bano con hidro

import { useState, useEffect } from "react";
import {
  FaUsers,
  FaBed,
  FaCheckCircle,
  FaHouseUser,
  FaCar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Cabin.css";
import img1 from "../../assets/cabanas/cab2/cab1.jpeg";
import img2 from "../../assets/cabanas/cab2/cab2.jpeg";
import img3 from "../../assets/cabanas/cab2/cab3.jpeg";
import img4 from "../../assets/cabanas/cab2/cab4.jpeg";
import img5 from "../../assets/cabanas/cab2/cab5.jpeg";
import img6 from "../../assets/cabanas/cab2/cab6.jpeg";
import img7 from "../../assets/cabanas/cab2/cab7.jpeg";
import img8 from "../../assets/cabanas/cab2/cab8.jpeg";
import img9 from "../../assets/cabanas/cab2/cab9.jpeg";
import img10 from "../../assets/cabanas/cab2/cab10.jpeg";

const images = [img1, img5, img2, img6, img8, img3, img7, img4, img9, img10];

const Cabin2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Maneja la transición automática de imágenes
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Cambia la imagen cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="cabin-container">
      <div className="cabin-banner">
        <img src={images[currentImageIndex]} alt="Cabaña" />
        <div className="carousel-controls">
          <button onClick={prevImage}>←</button>
          <button onClick={nextImage}>→</button>
        </div>
      </div>
      <div className="cabin-info">
        <div className="info-item">
          <FaUsers size={40} />
          <p>Capacidad Max</p>
          <p>6 personas</p>
        </div>
        <div className="info-item">
          <FaHouseUser size={40} />
          {/* Icono de metros cuadrados */}
          <p>90 m2</p>
          <p>Metros Cuadrados</p>
        </div>
        <div className="info-item">
          <FaBed size={40} /> {/* Icono de metros cuadrados */}
          <p>Tarifa por noche</p>
        </div>
      </div>
      <div className="reservation">
        <Link to="/reservas" className="reservation-btn">
          Realizar una reserva
        </Link>
      </div>
      <div className="cabin-description">
        <h3 className="cabin-services-title">Servicios de la Cabaña</h3>
        <h4 className="cabin-servies-title-4">Planta Baja</h4>
        <ul className="services-list">
          <li>
            <FaCheckCircle /> Habitación con dos camas (opción para matrimonial)
          </li>
          <li>
            <FaCheckCircle /> Baño con ducha
          </li>
          <li>
            <FaCheckCircle /> Cocina - Comedor completo.
          </li>

          <li>
            <FaCheckCircle /> Living amplio con sillón y hogar a leña
          </li>
        </ul>
        <h4 className="cabin-servies-title-4">Planta Alta (Por escalera)</h4>
        <ul className="services-list">
          <li>
            <FaCheckCircle /> Habitacion matrimonial
          </li>
          <li>
            <FaCheckCircle /> Habitación con dos camas (opción para matrimonial)
          </li>
          <li>
            <FaCheckCircle /> Baño completo con Hidromasaje
          </li>
        </ul>

        {/* Línea informativa sobre estacionamiento */}
        <div className="parking-info">
          <FaCar size={25} className="parking-icon" />
          <p>Estacionamiento cubierto dentro del predio</p>
        </div>

        <h3 className="description-title">Descripción</h3>
        <p>
          La cabaña está diseñada para alojar cómodamente hasta 6 personas,
          distribuidas en dos niveles. En la planta baja, encontrarás una
          habitación con dos camas individuales que pueden transformarse en una
          cama matrimonial a solicitud, un baño completo, una cocina totalmente
          equipada, un comedor espacioso y un amplio living con un cómodo sillón
          y hogar a leña para disfrutar de momentos cálidos y relajantes.
          <br />
          En el primer piso, se ubica una habitación matrimonial, una habitación
          con dos camas individuales, y un baño completo que incluye un
          hidromasaje ideal para relajarse.
          <br />
          <br />
          Entre las amenidades, ofrecemos ropa blanca completa, infusiones
          variadas (yerba, té, café), conexión Wi-Fi, y un televisor smart (sin
          cable) para tu entretenimiento. <br />
        </p>
        <p>
          <b>NO SE ACEPTAN MASCOTAS</b>
        </p>
      </div>
      {/* Enlaces a otras cabañas */}
      <div className="cabin-links">
        <Link to="/cabin1" className="cabin-btn">
          Ver Cabaña 1
        </Link>
        <Link to="/cabin3" className="cabin-btn">
          Ver Cabaña 3
        </Link>
      </div>
    </div>
  );
};

export default Cabin2;
