import { Link } from "react-router-dom";
import "./Terminos.css";

const Terminos = () => {
  return (
    <div className="terminos-page">
      <div className="terminos-container">
        <Link to="/" className="terminos-back-link">
          ← Volver al inicio
        </Link>

        <h1 className="terminos-title">Términos y Condiciones</h1>
        <p className="terminos-updated">
          Última actualización:{" "}
          {new Date().toLocaleDateString("es-AR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="terminos-content">
          <section className="terminos-section">
            <h2>1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar el sitio web de Cabañas Temístocles, usted
              acepta cumplir con estos Términos y Condiciones. Si no está de
              acuerdo con alguna parte de estos términos, no debe utilizar
              nuestros servicios.
            </p>
          </section>

          <section className="terminos-section">
            <h2>2. Reservas</h2>
            <h3>2.1. Proceso de reserva</h3>
            <p>
              Las reservas pueden realizarse a través de nuestro sitio web,
              teléfono o correo electrónico. Todas las reservas están sujetas a
              disponibilidad y confirmación por parte de Cabañas Temístocles.
            </p>
            <h3>2.2. Pagos</h3>
            <p>
              Para confirmar una reserva, se requiere el pago de una seña del
              30% del total. El saldo restante (70%) debe abonarse al momento
              del check-in.
            </p>
            <h3>2.3. Métodos de pago</h3>
            <p>Aceptamos efectivo, transferencias bancarias y Mercado Pago.</p>
          </section>

          <section className="terminos-section">
            <h2>3. Cancelaciones y reembolsos</h2>
            <p>
              Las reservas no podrán ser reembolsadas bajo ningún motivo ajeno a
              la empresa. En caso de cancelación, le sugerimos que se ponga en
              contacto con nosotros.
            </p>
          </section>

          <section className="terminos-section">
            <h2>4. Cambios de fecha</h2>
            <p>
              Si desea cambiar la fecha de su reserva, haremos todo lo posible
              para acomodar su solicitud, sujeto a disponibilidad. Le
              recomendamos que se ponga en contacto con nosotros lo antes
              posible.
            </p>
          </section>

          <section className="terminos-section">
            <h2>5. Check-in y Check-out</h2>
            <p>
              <strong>Check-in:</strong> A partir de las 14:00 hs.
              <br />
              <strong>Check-out:</strong> Hasta las 10:00 hs.
            </p>
            <p>
              Los horarios pueden ser flexibles según disponibilidad. Por favor,
              comuníquese con nosotros para coordinar horarios especiales.
            </p>
          </section>

          <section className="terminos-section">
            <h2>6. Uso de las instalaciones</h2>
            <p>
              Los huéspedes son responsables del cuidado de las instalaciones y
              equipamiento. Cualquier daño causado deberá ser reparado o
              reembolsado por el huésped responsable.
            </p>
          </section>

          <section className="terminos-section">
            <h2>7. Capacidad máxima</h2>
            <p>
              El número de huéspedes no debe exceder la capacidad máxima
              indicada para cada cabaña. El incumplimiento de esta norma puede
              resultar en la cancelación de la reserva sin reembolso.
            </p>
          </section>

          <section className="terminos-section">
            <h2>8. Prohibiciones</h2>
            <p>Está estrictamente prohibido:</p>
            <ul>
              <li>Fumar dentro de las cabañas</li>
              <li>Realizar fiestas o eventos sin autorización previa</li>
              <li>Ingresar mascotas sin previa consulta</li>
              <li>Hacer ruido excesivo que moleste a otros huéspedes</li>
            </ul>
          </section>

          <section className="terminos-section">
            <h2>9. Responsabilidad</h2>
            <p>
              Cabañas Temístocles no se hace responsable por pérdidas, daños o
              lesiones que puedan ocurrir durante la estadía, excepto en casos
              de negligencia comprobada de nuestra parte.
            </p>
          </section>

          <section className="terminos-section">
            <h2>10. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos y
              Condiciones en cualquier momento. Los cambios serán efectivos
              inmediatamente después de su publicación en el sitio web.
            </p>
          </section>

          <section className="terminos-section">
            <h2>11. Contacto</h2>
            <p>
              Para consultas sobre estos Términos y Condiciones, puede
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

export default Terminos;
