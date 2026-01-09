import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/img-zoom/z1.webp";
import img2 from "../../assets/img-zoom/z2.webp";
import img3 from "../../assets/img-zoom/z3.webp";
import img5 from "../../assets/img-zoom/z5.webp";
import img6 from "../../assets/img-zoom/z6.webp";

import {
  FaTableTennis,
  FaFire,
  FaHotTub,
  FaDrumstickBite,
} from "react-icons/fa";
import Slider from "react-slick";
import "./MultipurposeRoom.css";

const amenities = [
  {
    icon: FaTableTennis,
    title: "Mesa de ping pong",
  },
  {
    icon: FaHotTub,
    title: "Sauna seco",
  },
  {
    icon: FaFire,
    title: "Parrilla",
  },
  {
    icon: FaDrumstickBite,
    title: "Horno de barro",
  },
];

const sliderImages = [img1, img5, img6, img2, img3];

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="multipurpose-room-section" className="multipurpose-room-container">
      <div className="multipurpose-room-content">
        <div className="multipurpose-room-header">
          <h2 className="multipurpose-room-title">Salón de Usos Múltiples</h2>
          <p className="multipurpose-room-description">
            Todos nuestros huéspedes pueden disfrutar de un salón de usos múltiples,
            equipado con todo lo necesario para pasar momentos únicos
          </p>
        </div>

        {/* Grid de Amenities */}
        <div className="amenities-grid">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div key={index} className="amenity-item">
                <IconComponent className="amenity-icon" />
                <p className="amenity-title">{amenity.title}</p>
              </div>
            );
          })}
        </div>

        {/* Slider de Imágenes */}
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="slider-img-wrapper">
                <img
                  src={image}
                  alt={`Salón de usos múltiples - Imagen ${index + 1}`}
                  className="slider-img"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MultipurposeRoom;
