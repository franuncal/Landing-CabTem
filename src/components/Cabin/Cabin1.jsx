// Fotos del baño - Fotos de la habitacion con dos camas.
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaUsers,
  FaBed,
  FaCheckCircle,
  FaHouseUser,
  FaCar,
} from "react-icons/fa";
import "./Cabin.css";
import img1 from "../../assets/cabanas/cab1/cab1 -1.webp";
import img2 from "../../assets/cabanas/cab1/cab1 -2.webp";
import img3 from "../../assets/cabanas/cab1/cab1 -3.webp";
import img4 from "../../assets/cabanas/cab1/cab1 -4.webp";
import img5 from "../../assets/cabanas/cab1/cab1 -5.webp";
import img6 from "../../assets/cabanas/cab1/cab1 -6.webp";
import img7 from "../../assets/cabanas/cab1/cab1 -7.webp";
import img8 from "../../assets/cabanas/cab1/cab1 -8.webp";
import img9 from "../../assets/cabanas/cab1/cab1 -9.webp";
import img10 from "../../assets/cabanas/cab1/cab1 -10.webp";
import img11 from "../../assets/cabanas/cab1/cab1 -11.webp";
import img12 from "../../assets/cabanas/cab1/cab1 -12.webp";
import img13 from "../../assets/cabanas/cab1/cab1 -13.webp";
import img14 from "../../assets/cabanas/cab1/cab1 -14.webp";
import img15 from "../../assets/cabanas/cab1/cab1 -15.webp";
import img16 from "../../assets/cabanas/cab1/cab1 -16.webp";
import img17 from "../../assets/cabanas/cab1/cab1 -17.webp";
import img18 from "../../assets/cabanas/cab1/cab1 -18.webp";
import img19 from "../../assets/cabanas/cab1/cab1 -19.webp";
import img20 from "../../assets/cabanas/cab1/cab1 -20.webp";
import img21 from "../../assets/cabanas/cab1/cab1 -21.webp";
import img22 from "../../assets/cabanas/cab1/cab1 -22.webp";
import img23 from "../../assets/cabanas/cab1/cab1 -23.webp";
import img24 from "../../assets/cabanas/cab1/cab1 -24.webp";
import img25 from "../../assets/cabanas/cab1/cab1 -25.webp";
import img26 from "../../assets/cabanas/cab1/cab1 -26.webp";
// import img27 from "../../assets/cabanas/cab1/cab1 -27.webp";

const images = [
  img23,
  img22,
  img24,
  // comedor
  img7,
  img13,
  img14,
  // Cocina
  img19,
  img17,
  img18,
  img9,
  img10,
  img8,
  // Entrepiso
  img16,
  img11,
  img12,
  // Hab. Matr
  img6,
  img5,
  img4,
  // Hab dos camas
  img1,
  img2,
  // Bano
  img3,
  img15,
  // Exte
  img21,
  img20,
  img25,
  img26,
];

const Cabin1 = () => {
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
          <FaUsers size={30} />
          <p>Capacidad Max</p>
          <p>5 personas</p>
        </div>
        <div className="info-item">
          <FaHouseUser size={30} />
          {/* Icono de metros cuadrados */}
          <p>75 m2</p>
          <p>Metros Cuadrados</p>
        </div>
        <div className="info-item">
          <FaBed size={30} /> {/* Icono de metros cuadrados */}
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
            <FaCheckCircle /> Habitación matrimonial
          </li>
          <li>
            <FaCheckCircle /> Habitación con dos camas (opción para matrimonial)
          </li>
          <li>
            <FaCheckCircle /> Cama en la sala de estar (entrepiso)
          </li>
          <li>
            <FaCheckCircle /> Baño completo
          </li>
          <li>
            <FaCheckCircle /> Cocina - Comedor completo
          </li>
          <li>
            <FaCheckCircle /> Calefacción con sistema de radiadores
          </li>
          <li>
            <FaCheckCircle /> Hogar a leña
          </li>
        </ul>

        {/* Línea informativa sobre estacionamiento */}
        <div className="parking-info">
          <FaCar size={25} className="parking-icon" />
          <p>Estacionamiento cubierto dentro del predio</p>
        </div>
        <h3 className="description-title">Descripción</h3>
        <p>
          Esta cabaña, con capacidad para 5 personas, está diseñada para
          ofrecerte una estancia confortable. Cuenta con una habitación
          matrimonial y una segunda habitación con dos camas individuales que
          pueden convertirse en una cama matrimonial si lo prefieres. En la sala
          de estar, ubicada en el entrepiso, encontrarás una cama adicional. El
          baño es completo y la cocina está equipada con todo lo necesario.
          <br />
          La cabaña dispone de un sistema de calefacción por radiadores y
          también de un acogedor hogar a leña, ideal para disfrutar de momentos
          cálidos.
          <br />
          <br />
          Entre las amenidades, incluimos ropa blanca completa, una selección de
          infusiones (yerba, té, café), conexión Wi-Fi, y un televisor smart
          (sin cable) para tu entretenimiento.
        </p>
        <p>
          <b>NO SE ACEPTAN MASCOTAS</b>
        </p>
      </div>
      <div className="cabin-links">
        <Link to="/cabin2" className="cabin-btn">
          Ver Cabaña 2
        </Link>
        <Link to="/cabin3" className="cabin-btn">
          Ver Cabaña 3
        </Link>
      </div>
    </div>
  );
};

export default Cabin1;
