import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import { Link } from "react-router-dom";
import img from "../../assets/cabanas/cab1/cab1.jpeg";
import img1 from "../../assets/cabanas/cab2/cab1.jpeg";
import img3 from "../../assets/cabanas/cab3/cab1.jpeg";

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
              src={img}
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
              src={img1}
              alt="Cabañas Temistocles 2"
              className="carousel-img"
            />
            <div className="carousel-overlay">
              <h1>Calidez y confort</h1>
              <p>Nuestras cabañas te ofrecen un ambiente cálido y acogedor.</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img
              src={img3}
              alt="Cabañas Temistocles 3"
              className="carousel-img"
            />
            {/* <div className="carousel-overlay">
              <h1>Un refugio en la montaña</h1>
              <p>
                Vive una experiencia inolvidable en el corazón de la Patagonia.
              </p>
            </div> */}
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
