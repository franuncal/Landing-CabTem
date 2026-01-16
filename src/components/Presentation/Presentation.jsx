import "./Presentation.css";
import img2 from "../../assets/cabanas/cab1/cab1 -27.webp";

export const Presentation = () => {
  return (
    <section className="presentation-container">
      <div className="text-content-p">
        <h1 className="presentation-title">CABAÑAS TEMISTOCLES</h1>
        <h2 className="presentation-subtitle">UN LUGAR ÚNICO</h2>
        <p className="presentation-description">
          Ubicadas en la entrada de Esquel, nuestras cabañas ofrecen el
          equilibrio perfecto entre confort y naturaleza. Construidas con madera
          de ciprés y piedra patagónica, cada detalle está pensado para
          brindarte un ambiente cálido y acogedor. Rodeadas de paisajes únicos,
          disfrutarás de la atención personalizada de Marcela y Gustavo, quienes
          se asegurarán de que tu estadía sea inolvidable. Vení a relajarte y
          conectar con la esencia de la Patagonia.
        </p>
      </div>
      <div className="image-content-p">
        <img
          src={img2}
          alt="Cabañas en Esquel"
          className="presentation-img"
          loading="lazy"
        />
      </div>
    </section>
  );
};
