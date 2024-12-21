// Foto de Habitacion con 1 cama simple
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
import img1 from "../../assets/cabanas/cab3/cab3 -1.webp";
import img2 from "../../assets/cabanas/cab3/cab3 -2.webp";
import img3 from "../../assets/cabanas/cab3/cab3 -3.webp";
import img4 from "../../assets/cabanas/cab3/cab3 -4.webp";
import img5 from "../../assets/cabanas/cab3/cab3 -5.webp";
import img6 from "../../assets/cabanas/cab3/cab3 -6.webp";
import img7 from "../../assets/cabanas/cab3/cab3 -7.webp";
import img8 from "../../assets/cabanas/cab3/cab3 -8.webp";
import img9 from "../../assets/cabanas/cab3/cab3 -9.webp";
import img10 from "../../assets/cabanas/cab3/cab3 -10.webp";
import img11 from "../../assets/cabanas/cab3/cab3 -11.webp";
import img12 from "../../assets/cabanas/cab3/cab3 -12.webp";
import img13 from "../../assets/cabanas/cab3/cab3 -13.webp";
import img14 from "../../assets/cabanas/cab3/cab3 -14.webp";
import img15 from "../../assets/cabanas/cab3/cab3 -15.webp";
import img16 from "../../assets/cabanas/cab3/cab3 -16.webp";
import img17 from "../../assets/cabanas/cab3/cab3 -17.webp";
import img18 from "../../assets/cabanas/cab3/cab3 -18.webp";
import img19 from "../../assets/cabanas/cab3/cab3 -19.webp";
import img20 from "../../assets/cabanas/cab3/cab3 -20.webp";
import img21 from "../../assets/cabanas/cab3/cab3 -21.webp";
import img22 from "../../assets/cabanas/cab3/cab3 -22.webp";
import img23 from "../../assets/cabanas/cab3/cab3 -23.webp";

const images = [
  // Frente
  img2,
  // living
  img3,
  img5,
  // cocina // comedor
  img18,
  img4,
  img19,
  img17,
  img20,
  img21,
  img22,
  img23,
  img16,
  // matri
  img6,
  img7,
  img8,
  img9,
  // hab 2 camas
  img10,
  img11,
  img12,
  // Hab simple
  img13,
  img14,
  // bano chico
  img15,
  // patio
  img1,
];

const Cabin3 = () => {
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
          <p>5 personas</p>
        </div>
        <div className="info-item">
          <FaHouseUser size={40} />
          {/* Icono de metros cuadrados */}
          <p>100 m2</p>
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
        <ul className="services-list">
          <li>
            <FaCheckCircle /> Living amplio con sillón y hogar a leña
          </li>
          <li>
            <FaCheckCircle /> Habitación con dos camas con opción a una
            matrimonial
          </li>
          <li>
            <FaCheckCircle /> 2da. Habitación con dos camas con opción a una
            matrimonial
          </li>
          <li>
            <FaCheckCircle /> Habitación con una cama simple
          </li>
          <li>
            <FaCheckCircle /> Cocina Comedor Completo
          </li>
          <li>
            <FaCheckCircle /> Baño grande completo con hidromasaje
          </li>
          <li>
            <FaCheckCircle /> Baño con ducha
          </li>
          <li>
            <FaCheckCircle /> Jardín amplio
          </li>
        </ul>
        {/* Línea informativa sobre estacionamiento */}
        <div className="parking-info">
          <FaCar size={25} className="parking-icon" />
          <p>Estacionamiento cubierto</p>
        </div>
        <h3 className="description-title">Descripción</h3>
        <p>
          Esta cabaña de planta baja, con capacidad para 5 personas, ofrece un
          espacio cómodo y accesible para todos. Dispone de dos habitaciones con
          dos camas individuales en cada una, que pueden convertirse en camas
          matrimoniales a solicitud, además de una tercera habitación con una
          cama simple. El baño principal es amplio y completo, con un relajante
          hidromasaje, y también hay un segundo baño totalmente equipado.
          <br />
          <br />
          Entre las amenidades, ofrecemos ropa blanca completa, una selección de
          infusiones (yerba, té, café), conexión Wi-Fi, y un televisor smart con
          acceso a Directv. La cabaña cuenta además con un amplio jardín, ideal
          para disfrutar del aire libre.
        </p>
        <p>
          <b>NO SE ACEPTAN MASCOTAS</b>
        </p>
      </div>
      <div className="cabin-links">
        <Link to="/cabin1" className="cabin-btn">
          Ver Cabaña 1
        </Link>
        <Link to="/cabin2" className="cabin-btn">
          Ver Cabaña 2
        </Link>
      </div>
    </div>
  );
};

export default Cabin3;
