import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/cabanas/cab1/cab1 -23.webp";
import img2 from "../../assets/cabanas/cab2/cab2 -17.webp";
// import img3 from "../../assets/cabanas/cab3/cab3 -2.webp";

export const Banner = () => {
  return (
    <>
      {/* Banner Carousel */}
      <div className="banner-container">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          className="carousel"
        >
          <div className="carousel-slide">
            <img
              src={img1}
              alt="Cabañas Temistocles 1"
              className="carousel-img"
            />
            <div className="carousel-overlay">
              <h1>Disfruta de la naturaleza</h1>
              <p>
                Relájate en nuestras cómodas cabañas rodeadas de paisajes
                únicos.
              </p>
            </div>
          </div>
          <div className="carousel-slide">
            <img
              src={img2}
              alt="Cabañas Temistocles 2"
              className="carousel-img"
            />
            <div className="carousel-overlay">
              <h1>Calidez y confort</h1>
              <p>Nuestras cabañas te ofrecen un ambiente cálido y acogedor.</p>
            </div>
          </div>
        </Carousel>
      </div>

      {/* Botón de reserva */}
      <div className="reservation-info">
        <Link to="/reservas" className="reservation-btn">
          REALIZAR UNA RESERVA
        </Link>
      </div>
    </>
  );
};
