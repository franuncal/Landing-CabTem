import { Link } from "react-router-dom";
import "./Cabanas.css";
import imgCabanas1 from "../../assets/cabanas/cab1/cab1 -22.webp";
import imgCabanas2 from "../../assets/cabanas/cab2/cab1.jpeg";
import imgCabanas3 from "../../assets/cabanas/cab3/cab1.jpeg";

const Cabanas = () => {
  return (
    <div id="cabanas-section" className="cabanas-container">
      <h2>Conocé Nuestras Cabañas</h2>
      <div className="cards">
        <div className="card">
          <div className="card-image-wrapper">
            <img src={imgCabanas1} alt="Cabaña 1" className="card-img" />
          </div>
          <div className="card-content">
            <h3>Cabaña 1</h3>
            <p>
              Ideal para 5 personas, equipada con todo lo necesario para una
              estadía inolvidable.
            </p>
            <Link to="/cabin1" className="card-link">
              Más información
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-image-wrapper">
            <img src={imgCabanas2} alt="Cabaña 2" className="card-img" />
          </div>
          <div className="card-content">
            <h3>Cabaña 2</h3>
            <p>
              Perfecta para 7 personas, con amplios espacios y todas las
              comodidades.
            </p>
            <Link to="/cabin2" className="card-link">
              Más información
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-image-wrapper">
            <img src={imgCabanas3} alt="Cabaña 3" className="card-img" />
          </div>
          <div className="card-content">
            <h3>Cabaña 3</h3>
            <p>
              Ideal para 5 personas, rodeada de naturaleza y tranquilidad, y
              todas las comodidades.
            </p>
            <Link to="/cabin3" className="card-link">
              Más información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabanas;
