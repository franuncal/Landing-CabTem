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
          Ubicadas en la entrada de Esquel, nuestras cabañas combinan el encanto
          de la madera de ciprés y la piedra patagónica, ofreciendo un espacio
          acogedor y cálido. Atendidas por sus dueños, Marcela y Gustavo, aquí
          disfrutarás de un servicio personalizado en un entorno natural único.
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
