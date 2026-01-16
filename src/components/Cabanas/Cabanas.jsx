import "./Cabanas.css";
import { Link } from "react-router-dom";
import { cabanas } from "../../data/cabanas";

export default function Cabanas() {
  const getCabanaLink = (id) => {
    const linkMap = {
      "cabana-1": "/cabin1",
      "cabana-2": "/cabin2",
      "cabana-3": "/cabin3",
    };
    return linkMap[id] || "/";
  };

  return (
    <section className="cabanas" id="cabanas-section">
      <div className="cabanas-header">
        <h2>Nuestras Cabañas</h2>
        <p>
          Espacios pensados para descansar, conectar con la naturaleza y
          disfrutar de Esquel con tranquilidad.
        </p>
      </div>

      <div className="cabanas-grid">
        {cabanas.map((cabana) => (
          <Link 
            key={cabana.id} 
            to={getCabanaLink(cabana.id)}
            className="cabana-card"
          >
            <div className="cabana-img">
              {cabana.imagen && (
                <img src={cabana.imagen} alt={cabana.nombre} />
              )}
            </div>

            <div className="cabana-body">
              <h3>{cabana.nombre}</h3>
              <p className="cabana-resumen">{cabana.resumen}</p>
              
              <div className="cabana-meta">
                <span>{cabana.camas}</span>
                <span>·</span>
                <span>Hasta {cabana.capacidad} personas</span>
                {cabana.m2 && (
                  <>
                    <span>·</span>
                    <span>{cabana.m2} m² aprox.</span>
                  </>
                )}
              </div>

              <div className="cabana-cta">
                <span>Ver detalles</span>
                <span className="cabana-arrow">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
