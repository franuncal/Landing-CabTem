import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { cabanas } from "../../data/cabanas";
import { infoEstadia } from "../../data/servicios";
import "./CabanaDetail.css";

export default function CabanaDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Mapear rutas de URL a IDs de datos
  const routeToIdMap = {
    "/cabin1": "cabana-1",
    "/cabin2": "cabana-2",
    "/cabin3": "cabana-3",
  };
  
  const cabanaId = routeToIdMap[location.pathname];
  const cabana = cabanas.find((c) => c.id === cabanaId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [mostrarBotonFlotante, setMostrarBotonFlotante] = useState(false);

  // La página cargará desde arriba automáticamente gracias a ScrollToTop

  // Detectar scroll para mostrar/ocultar botón flotante
  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón flotante después de hacer scroll 300px
      const scrollY = window.scrollY || window.pageYOffset;
      setMostrarBotonFlotante(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryImages = cabana?.galeria || [];

  const handleBackToCabanas = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("cabanas-section");
      if (section) {
        const offset = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  if (!cabana) {
    return (
      <div className="cabana-not-found">
        <h2>Cabaña no encontrada</h2>
        <Link to="/#cabanas-section" className="btn-primary">
          Volver a las cabañas
        </Link>
      </div>
    );
  }

  const handleReservar = () => {
    navigate(`/reservas`, { state: { cabanaId: cabana.id } });
  };

  return (
    <section className="cabana-detail">
      {/* Botón flotante de reserva (solo visible al hacer scroll) */}
      {mostrarBotonFlotante && (
        <div className="cabana-reserva-flotante">
          <button className="btn-primary" onClick={handleReservar}>
            Reservar esta cabaña
          </button>
        </div>
      )}

      {/* Hero de la cabaña */}
      <div className="cabana-detail-hero">
        <div className="cabana-detail-hero-img">
          {cabana.imagen && <img src={cabana.imagen} alt={cabana.nombre} />}
        </div>
        <div className="cabana-detail-hero-content">
          <button onClick={handleBackToCabanas} className="cabana-back-link">
            ← Volver a las cabañas
          </button>
          <h1>{cabana.nombre}</h1>
          <p className="cabana-detail-resumen">{cabana.resumen}</p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="cabana-detail-content">
        <div className="cabana-detail-main">
          <div className="cabana-detail-section">
            <h2>Galería</h2>
            <div className="cabana-gallery">
              {/* Imagen principal */}
              <div className="cabana-gallery-main">
                <div className="cabana-gallery-main-img">
                  {galleryImages.length > 0 &&
                  galleryImages[selectedImage] ? (
                    <img
                      src={galleryImages[selectedImage]}
                      alt={`${cabana.nombre} - Foto ${selectedImage + 1}`}
                    />
                  ) : (
                    <div className="cabana-gallery-placeholder">
                      <span>Foto {selectedImage + 1}</span>
                    </div>
                  )}
                </div>

                {/* Botones de navegación */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      className="cabana-gallery-nav cabana-gallery-nav--prev"
                      onClick={() =>
                        setSelectedImage((prev) =>
                          prev === 0 ? galleryImages.length - 1 : prev - 1
                        )
                      }
                      aria-label="Imagen anterior"
                    >
                      ←
                    </button>
                    <button
                      className="cabana-gallery-nav cabana-gallery-nav--next"
                      onClick={() =>
                        setSelectedImage((prev) =>
                          prev === galleryImages.length - 1 ? 0 : prev + 1
                        )
                      }
                      aria-label="Siguiente imagen"
                    >
                      →
                    </button>
                  </>
                )}
              </div>

              {/* Miniaturas - Solo mostrar 5 */}
              {galleryImages.length > 1 && (
                <div className="cabana-gallery-thumbnails">
                  {galleryImages.slice(0, 5).map((image, index) => (
                    <button
                      key={index}
                      className={`cabana-gallery-thumbnail ${
                        selectedImage === index ? "active" : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`Ver foto ${index + 1}`}
                    >
                      {image ? (
                        <img
                          src={image}
                          alt={`${cabana.nombre} - Miniatura ${index + 1}`}
                        />
                      ) : (
                        <div className="cabana-gallery-thumb-placeholder">
                          <span>{index + 1}</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="cabana-detail-section">
            <h2>Descripción</h2>
            <p className="cabana-detail-text">{cabana.detalle}</p>
          </div>

          <div className="cabana-detail-section">
            <h2>Servicios incluidos</h2>
            <p className="cabana-detail-text">
              Todo está pensado para que solo te ocupes de descansar.
              Cabañas equipadas y un entorno natural que invita a bajar el
              ritmo.
            </p>
            <div className="cabana-servicios-list">
              <ul>
                {cabana.features &&
                  cabana.features
                    .slice(0, Math.ceil(cabana.features.length / 2))
                    .map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
              </ul>
              <ul>
                {cabana.features &&
                  cabana.features
                    .slice(Math.ceil(cabana.features.length / 2))
                    .map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
              </ul>
            </div>
            <div className="cabana-servicios-extra">
              <p>{infoEstadia.politicas.checkIn}</p>
              <p>{infoEstadia.politicas.checkOut}</p>
              <p>{infoEstadia.politicas.cambiosRopa}</p>
              <p>{infoEstadia.politicas.mascotas}</p>
            </div>
          </div>
        </div>

        <aside className="cabana-detail-sidebar">
          <div className="cabana-detail-card">
            <h3>Detalles</h3>
            <div className="cabana-detail-info">
              <div className="cabana-info-item">
                <span className="cabana-info-label">Capacidad</span>
                <span className="cabana-info-value">
                  Hasta {cabana.capacidad} personas
                </span>
              </div>
              <div className="cabana-info-item">
                <span className="cabana-info-label">Camas</span>
                <span className="cabana-info-value">{cabana.camas}</span>
              </div>
              {cabana.m2 && (
                <div className="cabana-info-item">
                  <span className="cabana-info-label">Superficie</span>
                  <span className="cabana-info-value">
                    {cabana.m2} m² aprox.
                  </span>
                </div>
              )}
              <div className="cabana-info-item">
                <span className="cabana-info-label">Tarifa</span>
                <span className="cabana-info-value">
                  Por noche
                </span>
              </div>
            </div>
          </div>

          <div className="cabana-detail-cta">
            <h3>¿Te interesa esta cabaña?</h3>
            <p>Reservá tu estadía directamente desde aquí</p>
            <button
              className="btn-primary"
              onClick={handleReservar}
            >
              Reservar esta cabaña
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
