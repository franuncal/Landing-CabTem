import { Link } from "react-router-dom";
import "./DiscoverEsquel.css";
import bgEsquel from "../../assets/img-esquel/es8.webp";

const DiscoverEsquel = () => {
  return (
    <section
      className="discover-banner"
      style={{ backgroundImage: `url(${bgEsquel})` }}
    >
      <div className="overlay">
        <div className="banner-text">
          <h2>DESCUBRÍ ESQUEL</h2>
          <p>Aventura, naturaleza y cultura en el corazón de la Patagonia.</p>
          <Link to="/actividades" className="services-btn">
            Ver Actividades
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverEsquel;
