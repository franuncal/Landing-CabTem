// Presentation.jsx

import "./Presentation.css";
import img2 from "../../assets/img-cab/cab4.jpeg";

export const Presentation = () => {
  return (
    <div className="presentation-container">
      <div className="text-content-p">
        <h1 className="presentation-title">CABAÑAS TEMISTOCLES</h1>
        <h2>UN LUGAR ÚNICO</h2>
        <p className="presentation-description">
          Ubicadas estratégicamente en la entrada de Esquel, nuestras cabañas
          ofrecen el equilibrio perfecto entre confort y naturaleza. Construidas
          con madera de ciprés y piedra patagónica, cada detalle ha sido pensado
          para brindarte un ambiente cálido, acogedor y lleno de encanto. Aquí,
          en un entorno único rodeado de paisajes extraordinarios, disfrutarás
          de la atención personalizada de Marcela y Gustavo, quienes, como
          anfitriones apasionados, se asegurarán de que tu estadía sea una
          experiencia inolvidable. Ven a relajarte y conectar con la esencia de
          la Patagonia.
        </p>
        {/* Botón de cabañas */}
        <div className="cabanas-info">
          <a href="#cabanas-section" className="cabanas-btn">
            Las Cabañas
          </a>
        </div>
      </div>
      <div className="image-content-p">
        <img src={img2} alt="Cabañas en Esquel" className="presentation-img" />
      </div>
    </div>
  );
};
