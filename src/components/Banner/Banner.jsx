import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Banner.css";

import img1 from "../../assets/cabanas/cab1/cab1 -23.webp";
import img2 from "../../assets/cabanas/cab2/cab2 -17.webp";
import img3 from "../../assets/cabanas/cab1/cab1 -7.webp";

export const Banner = () => {
  const scrollToCabanas = () => {
    const section = document.getElementById("cabanas-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="banner-container">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        speed={1200}
        effect="fade"
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="banner-swiper"
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="Cabañas Temistocles 1"
            className="carousel-img"
          />
          <div className="carousel-text">
            <h1>Disfrutá de la naturaleza</h1>
            <h2>
              Relájate en nuestras cómodas cabañas rodeadas de paisajes únicos.
            </h2>
            <button className="banner-cta" onClick={scrollToCabanas}>
              Ver Cabañas
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={img2}
            alt="Cabañas Temistocles 2"
            className="carousel-img"
          />
          <div className="carousel-text">
            <h1>Calidez y confort</h1>
            <h2>Nuestras cabañas te ofrecen un ambiente cálido y acogedor.</h2>
            <button className="banner-cta" onClick={scrollToCabanas}>
              Ver Cabañas
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={img3}
            alt="Cabañas Temistocles 3"
            className="carousel-img"
          />
          <div className="carousel-text">
            <h1>Nuestras Cabañas</h1>
            <h2>
              Un espacio pensado para tu descanso y conexión con la naturaleza.
            </h2>
            <button className="banner-cta" onClick={scrollToCabanas}>
              Ver Cabañas
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
