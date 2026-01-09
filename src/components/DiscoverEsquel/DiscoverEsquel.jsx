import { Link } from "react-router-dom";
import "./DiscoverEsquel.css";
import bgEsquel from "../../assets/img-esquel/es8.webp";

const DiscoverEsquel = () => {
  return (
    <section
      className="discover-banner"
      style={{ backgroundImage: `url(${bgEsquel})` }}
    >
      <div className="discover-overlay"></div>
      <div className="discover-content">
        <h2 className="discover-title">Esquel te espera</h2>
        <p className="discover-subtitle">
          Descubrí nuestras cabañas y reservá tu lugar en la Patagonia
        </p>
        <div className="discover-buttons">
          <Link to="/reservas" className="discover-button discover-button-primary">
            Reservar ahora
          </Link>
          <Link to="/#cabanas-section" className="discover-button discover-button-secondary">
            Ver cabañas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverEsquel;
