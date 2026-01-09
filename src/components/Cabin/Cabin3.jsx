// Foto de Habitacion con 1 cama simple
import { useState } from "react";
import {
  FaCheckCircle,
  FaCar,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Cabin.css";

// Imagen hero (la misma de la card)
import heroImage from "../../assets/cabanas/cab3/cab1.jpeg";

// Galería de imágenes
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
import img17 from "../../assets/cabanas/cab3/cab3 -17.webp";
import img18 from "../../assets/cabanas/cab3/cab3 -18.webp";
import img20 from "../../assets/cabanas/cab3/cab3 -20.webp";
import img21 from "../../assets/cabanas/cab3/cab3 -21.webp";
import img22 from "../../assets/cabanas/cab3/cab3 -22.webp";
import img25 from "../../assets/cabanas/cab3/cab3 -25.webp";
import img26 from "../../assets/cabanas/cab3/cab3 -26.webp";
import img28 from "../../assets/cabanas/cab3/cab3 -28.webp";
import img29 from "../../assets/cabanas/cab3/cab3 -29.webp";
import img30 from "../../assets/cabanas/cab3/cab3 -30.webp";
import img31 from "../../assets/cabanas/cab3/cab3 -31.webp";

const galleryImages = [
  img2,
  img3,
  img28,
  img29,
  img30,
  img5,
  img18,
  img4,
  img17,
  img20,
  img21,
  img22,
  img25,
  img26,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img31,
  img15,
  img1,
];

const Cabin3 = () => {
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
          alt="Cabaña 3"
          className="cabin-hero-image"
        />
        <div className="cabin-hero-overlay"></div>
        <div className="cabin-hero-content">
          <Link to="/" className="cabin-hero-back">
            <FaArrowLeft /> Volver a las cabañas
          </Link>
          <h1 className="cabin-hero-title">Cabaña 3</h1>
          <p className="cabin-hero-subtitle">
            Ideal para 5 personas, rodeada de naturaleza y tranquilidad.
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
              alt={`Cabaña 3 - Imagen ${currentImageIndex + 1}`}
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
              <span className="detail-value">Hasta 5 personas</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Metros Cuadrados</span>
              <span className="detail-value">100 m²</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Camas</span>
              <span className="detail-value">
                Habitación matrimonial, 2 habitaciones con dos camas, habitación
                con cama simple
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
              state={{ cabanaId: "cabana-3" }}
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
              <FaCheckCircle /> Living amplio con sillón y hogar a leña
            </li>
            <li>
              <FaCheckCircle /> Habitación con dos camas (opción para matrimonial)
            </li>
            <li>
              <FaCheckCircle /> 2da. Habitación con dos camas (opción para
              matrimonial)
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
            <li>
              <FaCheckCircle /> Wi-Fi
            </li>
            <li>
              <FaCheckCircle /> Televisor smart con Directv
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
            <p>Estacionamiento cubierto</p>
          </div>
        </div>
      </div>

      {/* Enlaces a otras cabañas */}
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
