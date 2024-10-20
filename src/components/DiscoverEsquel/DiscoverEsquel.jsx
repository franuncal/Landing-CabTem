// src/components/DiscoverEsquel/DiscoverEsquel.jsx
import { Link } from "react-router-dom";
import "./DiscoverEsquel.css";
import imgCabanas0 from "../../assets/img-esquel/alerces.jpg";
import imgCabanas1 from "../../assets/img-esquel/hoya.jpg";
import imgCabanas2 from "../../assets/img-esquel/trochita.jpg";
import imgCabanas3 from "../../assets/img-esquel/zera.jpg";

const DiscoverEsquel = () => {
  return (
    <div className="discover-container">
      <div className="image-grid">
        <img src={imgCabanas2} alt="La Trochita - Tren" />
        <img src={imgCabanas3} alt="Laguna Zeta" />
        <img src={imgCabanas1} alt="Parque Nacional Los Alerces" />
        <img src={imgCabanas0} alt="Centro de Esqui La Hoya" />
      </div>
      <div className="text-content">
        <h2>DESCUBRI ESQUEL</h2>
        <p>
          Un rincón mágico de la Patagonia Argentina, donde la aventura se
          encuentra con la naturaleza. Imagina recorrer senderos rodeados de
          bosques milenarios, perderte en paisajes que parecen de otro mundo y
          experimentar la calidez de su cultura local. No te pierdas un viaje en{" "}
          <b>La Trochita</b>, un histórico tren de vapor que te llevará a través
          de paisajes impresionantes, y visita la hermosa
          <b> Laguna La Zeta</b>, ideal para disfrutar de un día de picnic o
          senderismo. Desde esquiar en <b>La Hoya</b> hasta explorar el
          <b> Parque Nacional Los Alerces</b>, cada día promete una nueva
          historia.
        </p>
        <Link to="/actividades" className="services-btn">
          Ver Actividades
        </Link>
      </div>
    </div>
  );
};

export default DiscoverEsquel;
