import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GoogleReviews.css";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState({});

  useEffect(() => {
    const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

    if (!PLACE_ID || !API_KEY || PLACE_ID === "tu_place_id_aqui") {
      if (import.meta.env.DEV) {
        console.warn("Google Reviews: Place ID o API Key no configurados");
      }
      setLoading(false);
      return;
    }

    const fetchReviews = async () => {
      try {
        // Usar la nueva Places API (New) - Endpoint diferente
        const apiUrl = `https://places.googleapis.com/v1/places/${PLACE_ID}`;

        if (import.meta.env.DEV) {
          console.log("Google Reviews - Usando Places API (New)...");
        }

        // La nueva API requiere headers específicos
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": API_KEY,
            "X-Goog-FieldMask": "reviews",
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(`HTTP error! status: ${response.status}`, errorData);
        }

        const data = await response.json();

        if (import.meta.env.DEV) {
          console.log("Google Reviews - Response:", data);
          console.log(
            "Google Reviews - Reviews count:",
            data.reviews?.length || 0
          );
        }

        if (data.reviews && data.reviews.length > 0) {
          // Filtrar solo reviews con 4 o más estrellas (buenas reseñas)
          const MIN_RATING = 3;
          // Cantidad máxima de reviews a mostrar (cambia este número)
          const MAX_REVIEWS = 5;

          const filteredReviews = data.reviews.filter(
            (review) => (review.rating || 0) >= MIN_RATING
          );

          if (import.meta.env.DEV) {
            console.log(
              `Google Reviews - Total reviews: ${data.reviews.length}`
            );
            console.log(
              `Google Reviews - Reviews con ${MIN_RATING}+ estrellas: ${filteredReviews.length}`
            );
            console.log(
              `Google Reviews - Mostrando: ${Math.min(
                filteredReviews.length,
                MAX_REVIEWS
              )}`
            );
          }

          const latestReviews = filteredReviews
            .slice(0, MAX_REVIEWS)
            .map((review) => ({
              author: review.authorAttribution?.displayName || "Usuario",
              rating: review.rating || 5,
              text: review.text?.text || "",
              time: review.publishTime || "",
              profilePhoto: review.authorAttribution?.photoUri || null,
              relativeTime: review.publishTime
                ? new Date(review.publishTime).toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "",
            }));

          setReviews(latestReviews);
        } else {
          if (import.meta.env.DEV) {
            console.warn("Google Reviews - No hay reviews disponibles");
          }
          // No mostrar error, simplemente no mostrar el componente
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);

        // Si es un error de autenticación, mostrar mensaje específico
        if (err.message?.includes("403") || err.message?.includes("401")) {
          setError(
            "Error de autenticación. Verifica que Places API (New) esté habilitada."
          );
        } else {
          setError("Error al cargar las reseñas");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: reviews.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: reviews.length > 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: reviews.length > 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <section className="google-reviews">
        <div className="reviews-loading">
          <p>Cargando comentarios...</p>
        </div>
      </section>
    );
  }

  // En desarrollo, mostrar errores para debugging
  if (error && import.meta.env.DEV) {
    return (
      <section className="google-reviews">
        <div className="reviews-error">
          <p>Error cargando reviews: {error}</p>
          <p
            style={{ fontSize: "0.85rem", color: "#999", marginTop: "0.5rem" }}
          >
            Revisa la consola para más detalles
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return null; // No mostrar nada si hay error en producción
  }

  if (reviews.length === 0) {
    return null; // No mostrar nada si no hay reviews
  }

  return (
    <section className="google-reviews">
      <div className="reviews-header">
        <h2>Lo que dicen nuestros huéspedes</h2>
        <p>Comentarios de Google Reviews</p>
      </div>

      <Slider {...settings} className="reviews-slider">
        {reviews.map((review, index) => {
          const isExpanded = expandedReviews[index];
          const textLines = review.text.split("\n").join(" ").trim();

          // Calcular si el texto es largo (aproximadamente 2 líneas = ~100 caracteres)
          // Ajusta este número según el ancho de tus cards
          // Para cards más anchas, aumenta este número
          const MAX_CHARS_PREVIEW = 100;
          const shouldShowReadMore = textLines.length > MAX_CHARS_PREVIEW;

          // Solo agregar "..." si realmente se está cortando Y no está expandido
          const displayText =
            isExpanded || !shouldShowReadMore
              ? textLines
              : textLines.substring(0, MAX_CHARS_PREVIEW).trim() + "...";

          return (
            <div key={index} className="review-card">
              <div className="review-header">
                {review.profilePhoto && (
                  <img
                    src={review.profilePhoto}
                    alt={review.author}
                    className="review-avatar"
                  />
                )}
                <div className="review-author-info">
                  <h4>{review.author}</h4>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < review.rating ? "star filled" : "star"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  {review.relativeTime && (
                    <span className="review-time">{review.relativeTime}</span>
                  )}
                </div>
              </div>
              <div className="review-text-wrapper">
                <p className={`review-text ${isExpanded ? "expanded" : ""}`}>
                  {displayText}
                </p>
                {shouldShowReadMore && (
                  <button
                    className="review-read-more"
                    onClick={() =>
                      setExpandedReviews((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                  >
                    {isExpanded ? "Leer menos" : "Leer más"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
