import { Link } from "react-router-dom";
import "./Privacidad.css";

const Privacidad = () => {
  return (
    <div className="privacidad-page">
      <div className="privacidad-container">
        <Link to="/" className="privacidad-back-link">
          ← Volver al inicio
        </Link>
        
        <h1 className="privacidad-title">Política de Privacidad</h1>
        <p className="privacidad-updated">
          Última actualización: {new Date().toLocaleDateString("es-AR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="privacidad-content">
          <section className="privacidad-section">
            <h2>1. Información que recopilamos</h2>
            <p>
              En Cabañas Temístocles, recopilamos información que usted nos
              proporciona directamente cuando:
            </p>
            <ul>
              <li>Realiza una reserva a través de nuestro sitio web</li>
              <li>Se comunica con nosotros por correo electrónico o teléfono</li>
              <li>Completa formularios de contacto</li>
              <li>Se suscribe a nuestras comunicaciones</li>
            </ul>
            <p>
              Esta información puede incluir: nombre, dirección de correo
              electrónico, número de teléfono, información de pago y detalles de
              su reserva.
            </p>
          </section>

          <section className="privacidad-section">
            <h2>2. Uso de la información</h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul>
              <li>Procesar y confirmar sus reservas</li>
              <li>Comunicarnos con usted sobre su estadía</li>
              <li>Mejorar nuestros servicios y experiencia del cliente</li>
              <li>Enviar información promocional (solo con su consentimiento)</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="privacidad-section">
            <h2>3. Protección de datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas
              apropiadas para proteger su información personal contra acceso no
              autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="privacidad-section">
            <h2>4. Compartir información</h2>
            <p>
              No vendemos, alquilamos ni compartimos su información personal con
              terceros, excepto cuando:
            </p>
            <ul>
              <li>Es necesario para procesar su reserva (proveedores de pago)</li>
              <li>Estamos legalmente obligados a hacerlo</li>
              <li>Usted nos ha dado su consentimiento explícito</li>
            </ul>
          </section>

          <section className="privacidad-section">
            <h2>5. Sus derechos</h2>
            <p>Usted tiene derecho a:</p>
            <ul>
              <li>Acceder a su información personal</li>
              <li>Rectificar información incorrecta</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>
          </section>

          <section className="privacidad-section">
            <h2>6. Cookies</h2>
            <p>
              Nuestro sitio web utiliza cookies para mejorar su experiencia de
              navegación. Puede configurar su navegador para rechazar cookies,
              aunque esto puede afectar algunas funcionalidades del sitio.
            </p>
          </section>

          <section className="privacidad-section">
            <h2>7. Cambios a esta política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta Política de
              Privacidad en cualquier momento. Le notificaremos sobre cambios
              significativos publicando la nueva política en esta página.
            </p>
          </section>

          <section className="privacidad-section">
            <h2>8. Contacto</h2>
            <p>
              Si tiene preguntas sobre esta Política de Privacidad, puede
              contactarnos en:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@temistoclesesquel.com.ar">
                info@temistoclesesquel.com.ar
              </a>
              <br />
              <strong>Teléfono:</strong>{" "}
              <a href="tel:+542945450910">+54 9 2945 450910</a>
              <br />
              <strong>Dirección:</strong> Rivadavia 2656, Esquel, Chubut,
              Argentina
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacidad;
