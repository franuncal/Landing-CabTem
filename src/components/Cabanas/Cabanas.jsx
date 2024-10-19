import { Link } from "react-router-dom";
import "./Cabanas.css"; // Asegúrate de crear este archivo CSS
import imgCabanas1 from "../../assets/cabanas/cab1/cab1.jpeg";
import imgCabanas2 from "../../assets/cabanas/cab2/cab1.jpeg";
import imgCabanas3 from "../../assets/cabanas/cab3/cab1.jpeg";

const Cabanas = () => {
  return (
    <div className="cabanas-container">
      <h2>Disfruta en Nuestras Cabañas</h2>
      <p>Conoce nuestras cabañas</p>
      <div className="cards">
        <div className="card">
          <Link to="/cabin1">
            <img src={imgCabanas1} alt="Cabaña 1" className="card-img" />
            <div className="overlay">
              <h3>Cabaña 1 - 5 personas</h3>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/cabin2">
            <img src={imgCabanas2} alt="Cabaña 2" className="card-img" />
            <div className="overlay">
              <h3>Cabaña 2 - 7 personas</h3>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/cabin3">
            <img src={imgCabanas3} alt="Cabaña 3" className="card-img" />
            <div className="overlay">
              <h3>Cabaña 3 - 5 personas</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cabanas;
