import { Link } from "react-router-dom";
import { FaUsers, FaHome, FaArrowRight } from "react-icons/fa";
import "./Cabanas.css";
import imgCabanas1 from "../../assets/cabanas/cab1/cab1 -22.webp";
import imgCabanas2 from "../../assets/cabanas/cab2/cab1.jpeg";
import imgCabanas3 from "../../assets/cabanas/cab3/cab1.jpeg";

const cabanasData = [
  {
    id: 1,
    img: imgCabanas1,
    title: "Cabaña 1",
    capacity: 5,
    area: "75 m²",
    mainDescription:
      "Ideal para 5 personas, equipada con todo lo necesario para una estadía inolvidable.",
    secondaryDescription:
      "Espacio integrado y cálido, ideal para familias que buscan descansar rodeados de naturaleza.",
    link: "/cabin1",
  },
  {
    id: 2,
    img: imgCabanas2,
    title: "Cabaña 2",
    capacity: 6,
    area: "90 m²",
    mainDescription:
      "Perfecta para 6 personas, con amplios espacios y todas las comodidades.",
    secondaryDescription:
      "Diseñada para grupos, ofrece confort y funcionalidad en un entorno natural único.",
    link: "/cabin2",
  },
  {
    id: 3,
    img: imgCabanas3,
    title: "Cabaña 3",
    capacity: 5,
    area: "100 m²",
    mainDescription:
      "Ideal para 5 personas, rodeada de naturaleza y tranquilidad.",
    secondaryDescription:
      "Amplio espacio de planta baja, perfecto para disfrutar del jardín y la naturaleza.",
    link: "/cabin3",
  },
];

const Cabanas = () => {
  return (
    <section id="cabanas-section" className="cabanas-container">
      <div className="cabanas-header">
        <h2 className="section-title">Nuestras Cabañas</h2>
        <p className="section-subtitle">
          Descubrí el confort en medio de la naturaleza
        </p>
      </div>
      <div className="cards-grid">
        {cabanasData.map((cabana, index) => (
          <article
            key={cabana.id}
            className="cabin-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-image-container">
              <img
                src={cabana.img}
                alt={cabana.title}
                className="card-image"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
            <div className="card-body">
              <h3 className="card-title">{cabana.title}</h3>
              <p className="card-main-description">{cabana.mainDescription}</p>
              <p className="card-secondary-description">
                {cabana.secondaryDescription}
              </p>
              <div className="card-features">
                <span className="feature-item">
                  <FaHome className="feature-icon" />
                  {cabana.area}
                </span>
                <span className="feature-separator">•</span>
                <span className="feature-item">
                  <FaUsers className="feature-icon" />
                  Hasta {cabana.capacity} personas
                </span>
              </div>
              <Link to={cabana.link} className="card-button">
                <span>Ver detalles</span>
                <FaArrowRight className="button-icon" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Cabanas;
