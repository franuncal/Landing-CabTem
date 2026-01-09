import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

import img1 from "../../assets/cabanas/cab1/cab1 -23.webp";
import img2 from "../../assets/cabanas/cab2/cab2 -17.webp";
import img3 from "../../assets/cabanas/cab1/cab1 -7.webp";

const slides = [
  {
    img: img1,
    title: "Cabañas Temístocles",
    subtitle:
      "Tres cabañas equipadas y un entorno de silencio y verde para bajar un cambio y disfrutar de la Patagonia.",
    alt: "Cabañas Temistocles en la naturaleza",
  },
  {
    img: img2,
    title: "Disfrutá de la Patagonia",
    subtitle:
      "En Cabañas Temístocles, disfrutá de la Patagonia en un entorno tranquilo y rodeado de naturaleza.",
    alt: "Interior acogedor de las cabañas",
  },
  {
    img: img3,
    title: "Nuestras Cabañas",
    subtitle:
      "Un espacio pensado para tu descanso y conexión con la naturaleza patagónica.",
    alt: "Vista exterior de las cabañas",
  },
];

export const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToCabanas = () => {
    const section = document.getElementById("cabanas-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="banner-container" aria-label="Hero banner">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1500}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="banner-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-wrapper">
              <img
                src={slide.img}
                alt={slide.alt}
                className="carousel-img"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="slide-overlay"></div>
              <div className={`carousel-text ${isLoaded ? "loaded" : ""}`}>
                {/* Badge superior */}
                <div className="banner-badge">ESQUEL · PATAGONIA</div>
                {/* Contenido principal */}
                <div className="text-content">
                  <h1 className="slide-title">
                    <span className="title-line">{slide.title}</span>
                  </h1>
                  <h2 className="slide-subtitle">{slide.subtitle}</h2>
                  {/* Botones CTA */}
                  <div className="banner-cta-group">
                    <Link to="/reservas" className="banner-cta-primary">
                      Reservar ahora
                    </Link>
                    <button
                      className="banner-cta-secondary"
                      onClick={scrollToCabanas}
                      aria-label="Ver nuestras cabañas"
                    >
                      Ver cabañas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navegación personalizada */}
      <button className="swiper-button-prev-custom" aria-label="Slide anterior">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className="swiper-button-next-custom"
        aria-label="Slide siguiente"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Indicador de scroll - SIN TOCAR */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Desliza</span>
      </div>
    </section>
  );
};
