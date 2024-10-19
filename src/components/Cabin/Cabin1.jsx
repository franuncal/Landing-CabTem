/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaUsers, FaBed, FaCheckCircle, FaHouseUser } from "react-icons/fa";

import "./Cabin.css"; // Asegúrate de crear este archivo CSS para estilos compartidos
import img1 from "../../assets/cabanas/cab1/cab1.jpeg";
import img2 from "../../assets/cabanas/cab1/cab2.jpeg";
import img3 from "../../assets/cabanas/cab1/cab3.jpeg";
import img4 from "../../assets/cabanas/cab1/cab4.jpeg";
import img5 from "../../assets/cabanas/cab1/cab5.jpg";
import img6 from "../../assets/cabanas/cab1/cab6.jpeg";
import img7 from "../../assets/cabanas/cab1/cab7.jpeg";
import img8 from "../../assets/cabanas/cab1/cab8.jpeg";
import img9 from "../../assets/cabanas/cab1/cab9.jpeg";
import img10 from "../../assets/cabanas/cab1/cab10.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
          <FaUsers size={40} />
          <p>Capacidad Max</p>
          <p>5 personas</p>
        </div>
        <div className="info-item">
          <FaHouseUser size={40} />
          {/* Icono de metros cuadrados */}
          <p>50 m2</p>
          <p>Metros Cuadrados</p>
        </div>
        <div className="info-item">
          <FaBed size={40} /> {/* Icono de metros cuadrados */}
          <p>Tarifa por noche</p>
        </div>
      </div>
      <div className="reservation">
        <p>Realiza una reserva para esta cabaña</p>
        <button>Realizar una Reserva</button>
      </div>
      <div className="cabin-description">
        <h3 className="cabin-services-title">Servicios de la Cabaña</h3>
        <ul className="services-list">
          <li>
            <FaCheckCircle /> Habitación matrimonial
          </li>
          <li>
            <FaCheckCircle /> Habitación con dos camas con opción para una
            matrimonial
          </li>
          <li>
            <FaCheckCircle /> Cama en la sala de estar (entrepiso)
          </li>
          <li>
            <FaCheckCircle /> Baño completo
          </li>
          <li>
            <FaCheckCircle /> Cocina completa
          </li>
          <li>
            <FaCheckCircle /> Calefacción con sistema de radiadores
          </li>
          <li>
            <FaCheckCircle /> Hogar a leña
          </li>
          <li>
            <FaCheckCircle /> Amenities: ropa blanca completa, infusiones
            (yerba, té, café), servicio de WI-FI, televisor smart
          </li>
        </ul>
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
          para tu entretenimiento.
        </p>
        <p>
          <b>NO SE ACEPTAN MASCOTAS</b>
        </p>
      </div>
    </div>
  );
};

export default Cabin1;
