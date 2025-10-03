import "./Ubicacion.css";
import img1 from "../../assets/paisaje/p1.webp";
import { Link } from "react-router-dom";

const Ubicacion = () => {
  return (
    <div className="ubicacion">
      {/* Hero con imagen de fondo */}
      <div className="banner-u" style={{ backgroundImage: `url(${img1})` }}>
        <div className="overlay-u">
          <h2>Estamos en Esquel, Patagonia Argentina</h2>
        </div>
      </div>

      {/* Texto arriba */}
      <div className="info-top">
        <h3>
          <b>CABAÑAS TEMÍSTOCLES</b>
        </h3>
        <p>Rivadavia 2656 – Esquel</p>
        <p>C.P: 9200 – Chubut</p>
        <h4>Cómo llegar:</h4>
        <p>
          Luego de cruzar el puente, hacemos dos cuadras hasta la calle Repetur
          (cartel). Doblar a la derecha 200 m y luego a la izquierda 50 m.
        </p>
      </div>

      {/* Mapa grande abajo */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.1001678889725!2d-71.30338200000001!3d-42.901156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dac6c46d170b5%3A0x6d54001b00484279!2zQ2FiYcOxYXMgVGVtw61zdG9jbGVz!5e1!3m2!1ses-419!2sar!4v1759499502138!5m2!1ses-419!2sar"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Botón de reserva */}
      <div className="reservation-info">
        <Link to="/reservas" className="reservation-btn">
          REALIZAR UNA RESERVA
        </Link>
      </div>
    </div>
  );
};

export default Ubicacion;
