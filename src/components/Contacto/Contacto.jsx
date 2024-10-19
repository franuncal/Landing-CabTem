// Componente Contacto
import "./Contacto.css";

export const Contacto = () => {
  return (
    <div className="contact-container">
      {/* <h3 className="contact-title">Contacto</h3> */}
      <div className="contact-info">
        <div className="contact-item">
          <strong>EMAIL</strong>
          <a
            href="mailto:federementeria@hotmail.com"
            className="contact-detail"
          >
            federementeria@hotmail.com
          </a>
        </div>
        <div className="contact-item">
          <strong>TELEFONO</strong>
          <a
            href="https://wa.me/2324503773?text=Hola Fede! Me comunico desde la pagina web, quiero consultarte por un trabajo..."
            className="contact-detail"
            target="_blank"
            rel="noopener noreferrer"
          >
            +54 9 2324 50-3773
          </a>
        </div>
        <div className="contact-item">
          <strong>INSTAGRAM</strong>
          <a
            href="https://www.instagram.com/federementeria27/"
            className="contact-detail"
            target="_blank"
            rel="noopener noreferrer"
          >
            @federementeria27
          </a>
        </div>
      </div>
    </div>
  );
};
