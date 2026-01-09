// Foto de Habitacion de abajo.
// Foto del bano con hidro

import { useState } from "react";
import {
  FaCheckCircle,
  FaCar,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Cabin.css";

// Imagen hero (la misma de la card)
import heroImage from "../../assets/cabanas/cab2/cab1.jpeg";

// Galería de imágenes
import img1 from "../../assets/cabanas/cab2/cab2 -1.webp";
import img2 from "../../assets/cabanas/cab2/cab2 -2.webp";
import img3 from "../../assets/cabanas/cab2/cab2 -3.webp";
import img5 from "../../assets/cabanas/cab2/cab2 -5.webp";
import img6 from "../../assets/cabanas/cab2/cab2 -6.webp";
import img8 from "../../assets/cabanas/cab2/cab2 -8.webp";
import img9 from "../../assets/cabanas/cab2/cab2 -9.webp";
import img10 from "../../assets/cabanas/cab2/cab2 -10.webp";
import img11 from "../../assets/cabanas/cab2/cab2 -11.webp";
import img12 from "../../assets/cabanas/cab2/cab2 -12.webp";
import img13 from "../../assets/cabanas/cab2/cab2 -13.webp";
import img14 from "../../assets/cabanas/cab2/cab2 -14.webp";
import img15 from "../../assets/cabanas/cab2/cab2 -15.webp";
import img16 from "../../assets/cabanas/cab2/cab2 -16.webp";
import img17 from "../../assets/cabanas/cab2/cab2 -17.webp";

const galleryImages = [
  img17,
  img16,
  img8,
  img9,
  img10,
  img5,
  img2,
  img3,
  img1,
  img6,
  img13,
  img11,
  img12,
  img15,
  img14,
];

const Cabin2 = () => {
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
          alt="Cabaña 2"
          className="cabin-hero-image"
        />
        <div className="cabin-hero-overlay"></div>
        <div className="cabin-hero-content">
          <Link to="/" className="cabin-hero-back">
            <FaArrowLeft /> Volver a las cabañas
          </Link>
          <h1 className="cabin-hero-title">Cabaña 2</h1>
          <p className="cabin-hero-subtitle">
            Perfecta para 6 personas, con amplios espacios y todas las
            comodidades.
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
              alt={`Cabaña 2 - Imagen ${currentImageIndex + 1}`}
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
              const isActive = thumb.index === currentImageIndex;
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
              <span className="detail-value">Hasta 6 personas</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Metros Cuadrados</span>
              <span className="detail-value">90 m²</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Camas</span>
              <span className="detail-value">
                Habitación matrimonial, habitación con dos camas (planta alta),
                habitación con dos camas (planta baja)
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
              state={{ cabanaId: "cabana-2" }}
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
            La cabaña está diseñada para alojar cómodamente hasta 6 personas,
            distribuidas en dos niveles. En la planta baja, encontrarás una
            habitación con dos camas individuales que pueden transformarse en una
            cama matrimonial a solicitud, un baño completo, una cocina totalmente
            equipada, un comedor espacioso y un amplio living con un cómodo sillón
            y hogar a leña para disfrutar de momentos cálidos y relajantes.
            <br />
            <br />
            En el primer piso, se ubica una habitación matrimonial, una habitación
            con dos camas individuales, y un baño completo que incluye un
            hidromasaje ideal para relajarse.
            <br />
            <br />
            Entre las amenidades, ofrecemos ropa blanca completa, infusiones
            variadas (yerba, té, café), conexión Wi-Fi, y un televisor smart (sin
            cable) para tu entretenimiento.
          </p>
          <p className="description-text">
            <b>NO SE ACEPTAN MASCOTAS</b>
          </p>

          <h2 className="services-title">Servicios incluidos</h2>
          <p className="services-intro">
            Todo está pensado para que solo te ocupes de descansar. Cabañas
            equipadas y un entorno natural que invita a bajar el ritmo.
          </p>

          <h3 className="cabin-servies-title-4">Planta Baja</h3>
          <ul className="services-list">
            <li>
              <FaCheckCircle /> Habitación con dos camas (opción para matrimonial)
            </li>
            <li>
              <FaCheckCircle /> Baño con ducha
            </li>
            <li>
              <FaCheckCircle /> Cocina - Comedor completo
            </li>
            <li>
              <FaCheckCircle /> Living amplio con sillón y hogar a leña
            </li>
          </ul>

          <h3 className="cabin-servies-title-4">Planta Alta (Por escalera)</h3>
          <ul className="services-list">
            <li>
              <FaCheckCircle /> Habitación matrimonial
            </li>
            <li>
              <FaCheckCircle /> Habitación con dos camas (opción para matrimonial)
            </li>
            <li>
              <FaCheckCircle /> Baño completo con Hidromasaje
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
