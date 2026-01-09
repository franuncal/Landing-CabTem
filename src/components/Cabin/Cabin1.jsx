// Fotos del baño - Fotos de la habitacion con dos camas.
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaUsers,
  FaCheckCircle,
  FaHouseUser,
  FaCar,
  FaArrowLeft,
} from "react-icons/fa";
import "./Cabin.css";

// Imagen hero (la misma de la card)
import heroImage from "../../assets/cabanas/cab1/cab1 -22.webp";

// Galería de imágenes
import img1 from "../../assets/cabanas/cab1/cab1 -1.webp";
import img2 from "../../assets/cabanas/cab1/cab1 -2.webp";
import img3 from "../../assets/cabanas/cab1/cab1 -3.webp";
import img4 from "../../assets/cabanas/cab1/cab1 -4.webp";
import img6 from "../../assets/cabanas/cab1/cab1 -6.webp";
import img7 from "../../assets/cabanas/cab1/cab1 -7.webp";
import img9 from "../../assets/cabanas/cab1/cab1 -9.webp";
import img10 from "../../assets/cabanas/cab1/cab1 -10.webp";
import img11 from "../../assets/cabanas/cab1/cab1 -11.webp";
import img12 from "../../assets/cabanas/cab1/cab1 -12.webp";
import img13 from "../../assets/cabanas/cab1/cab1 -13.webp";
import img14 from "../../assets/cabanas/cab1/cab1 -14.webp";
import img16 from "../../assets/cabanas/cab1/cab1 -16.webp";
import img19 from "../../assets/cabanas/cab1/cab1 -19.webp";
import img20 from "../../assets/cabanas/cab1/cab1 -20.webp";
import img21 from "../../assets/cabanas/cab1/cab1 -21.webp";
import img23 from "../../assets/cabanas/cab1/cab1 -23.webp";
import img24 from "../../assets/cabanas/cab1/cab1 -24.webp";
import img25 from "../../assets/cabanas/cab1/cab1 -25.webp";
import img26 from "../../assets/cabanas/cab1/cab1 -26.webp";

const galleryImages = [
  img23,
  img24,
  img7,
  img13,
  img14,
  img19,
  img9,
  img10,
  img16,
  img11,
  img12,
  img6,
  img4,
  img1,
  img2,
  img3,
  img21,
  img20,
  img25,
  img26,
];

const Cabin1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Thumbnails visibles (máximo 5)
  const getVisibleThumbnails = () => {
    const thumbnails = [];
    const startIndex = Math.max(
      0,
      Math.min(
        currentImageIndex - 2,
        galleryImages.length - 5
      )
    );

    for (let i = 0; i < 5; i++) {
      const index = (startIndex + i) % galleryImages.length;
      thumbnails.push({
        index,
        image: galleryImages[index],
      });
    }

    return thumbnails;
  };

  return (
    <div className="cabin-container">
      {/* Hero Section */}
      <div className="cabin-hero">
        <img
          src={heroImage}
          alt="Cabaña 1"
          className="cabin-hero-image"
        />
        <div className="cabin-hero-overlay"></div>
        <div className="cabin-hero-content">
          <Link to="/" className="cabin-hero-back">
            <FaArrowLeft /> Volver a las cabañas
          </Link>
          <h1 className="cabin-hero-title">Cabaña 1</h1>
          <p className="cabin-hero-subtitle">
            Ideal para 5 personas, equipada con todo lo necesario para una
            estadía inolvidable.
          </p>
        </div>
      </div>

      {/* Layout Principal - Dos Columnas */}
      <div className="cabin-main-layout">
        {/* Columna Izquierda - Galería */}
        <div className="cabin-gallery">
          <h2 className="gallery-title">Galería</h2>
          <div className="gallery-main">
            <img
              src={galleryImages[currentImageIndex]}
              alt={`Cabaña 1 - Imagen ${currentImageIndex + 1}`}
              className="gallery-main-image"
            />
            <div className="gallery-nav-buttons">
              <button
                className="gallery-nav-button"
                onClick={prevImage}
                aria-label="Imagen anterior"
              >
                ←
              </button>
              <button
                className="gallery-nav-button"
                onClick={nextImage}
                aria-label="Imagen siguiente"
              >
                →
              </button>
            </div>
          </div>
          <div className="gallery-thumbnails">
            {getVisibleThumbnails().map((thumb, idx) => {
              const isActive =
                thumb.index === currentImageIndex;
              return (
                <div
                  key={idx}
                  className={`gallery-thumbnail ${isActive ? "active" : ""}`}
                  onClick={() => selectImage(thumb.index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      selectImage(thumb.index);
                    }
                  }}
                  aria-label={`Ver imagen ${thumb.index + 1}`}
                >
                  <img
                    src={thumb.image}
                    alt={`Thumbnail ${thumb.index + 1}`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Columna Derecha - Sidebar */}
        <div className="cabin-sidebar">
          {/* Card de Detalles */}
          <div className="sidebar-details-card">
            <h3 className="sidebar-details-title">Detalles</h3>
            <div className="detail-item">
              <span className="detail-label">Capacidad</span>
              <span className="detail-value">Hasta 5 personas</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Metros Cuadrados</span>
              <span className="detail-value">75 m²</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Camas</span>
              <span className="detail-value">
                Habitación matrimonial, habitación con dos camas, cama en
                entrepiso
              </span>
            </div>
          </div>

          {/* Card de Reserva */}
          <div className="sidebar-reserve-card">
            <h3 className="sidebar-reserve-title">¿Te interesa esta cabaña?</h3>
            <p className="sidebar-reserve-subtitle">
              Reservá tu estadía directamente desde aquí
            </p>
            <Link
              to="/reservas"
              state={{ cabanaId: "cabana-1" }}
              className="reserve-button"
            >
              Reservar esta cabaña
            </Link>
          </div>
        </div>
      </div>

      {/* Descripción y Servicios */}
      <div className="cabin-description-section">
        <div className="description-content">
          <h2 className="description-title">Descripción</h2>
          <p className="description-text">
            Esta cabaña, con capacidad para 5 personas, está diseñada para
            ofrecerte una estancia confortable. Cuenta con una habitación
            matrimonial y una segunda habitación con dos camas individuales que
            pueden convertirse en una cama matrimonial si lo prefieres. En la sala
            de estar, ubicada en el entrepiso, encontrarás una cama adicional. El
            baño es completo y la cocina está equipada con todo lo necesario.
            <br />
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
          <p className="description-text">
            <b>NO SE ACEPTAN MASCOTAS</b>
          </p>

          <h2 className="services-title">Servicios incluidos</h2>
          <p className="services-intro">
            Todo está pensado para que solo te ocupes de descansar. Cabañas
            equipadas y un entorno natural que invita a bajar el ritmo.
          </p>
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
            <li>
              <FaCheckCircle /> Wi-Fi
            </li>
            <li>
              <FaCheckCircle /> Televisor smart
            </li>
            <li>
              <FaCheckCircle /> Ropa blanca incluida
            </li>
          </ul>

          <div className="services-extra-info">
            <p>Check in a partir de las 14:00 hs.</p>
            <p>Check out hasta las 10:00 hs.</p>
          </div>

          <div className="parking-info">
            <FaCar size={25} className="parking-icon" />
            <p>Estacionamiento cubierto dentro del predio</p>
          </div>
        </div>
      </div>

      {/* Enlaces a otras cabañas */}
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
