import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/img-esquel/alerces.jpg";
import img2 from "../../assets/img-esquel/hoya.jpg";
import img3 from "../../assets/img-esquel/trochita.jpg";
import img4 from "../../assets/img-esquel/zera.jpg";

import {
  FaTableTennis,
  FaFire,
  FaHotTub,
  FaDrumstickBite,
} from "react-icons/fa";
import Slider from "react-slick";
import "./MultipurposeRoom.css";

const MultipurposeRoom = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const sliderImages = [img1, img2, img3, img4];

  return (
    <div id="multipurpose-room-section" className="multipurpose-room-container">
      <h2>Salón de Usos Múltiples</h2>
      <p>
        Todos nuestros huéspedes pueden disfrutar de un salón de usos múltiples,
        equipado con todo lo necesario para pasar momentos únicos:
      </p>
      <div className="amenities-grid">
        <div className="amenity-item">
          <FaTableTennis className="amenity-icon" />
          <p>Mesa de ping pong</p>
        </div>
        <div className="amenity-item">
          <FaHotTub className="amenity-icon" />
          <p>Sauna seco</p>
        </div>
        <div className="amenity-item">
          <FaFire className="amenity-icon" />
          <p>Parrilla</p>
        </div>
        <div className="amenity-item">
          <FaDrumstickBite className="amenity-icon" />
          <p>Horno de barro</p>
        </div>
      </div>

      {/* Slider de Imágenes */}
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="slider-img-wrapper">
              <img
                src={image}
                alt={`Imagen ${index + 1}`}
                className="slider-img"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MultipurposeRoom;
