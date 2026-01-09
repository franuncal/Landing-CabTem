import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import "./Actividades.css";
import img1 from "../../assets/paisaje/p1.webp";

import img4 from "../../assets/img-esquel/es1.webp";
import img5 from "../../assets/img-esquel/es2.webp";
import img6 from "../../assets/img-esquel/es6.webp";
import img7 from "../../assets/img-esquel/es8.webp";
import img8 from "../../assets/img-esquel/es7.webp";
import img9 from "../../assets/img-esquel/es5.webp";
import img10 from "../../assets/img-esquel/es3.webp";
import img11 from "../../assets/img-esquel/es4.webp";
import img12 from "../../assets/img-esquel/es9.webp";

const actividades = [
  {
    id: 1,
    title: "Parque Nacional Los Alerces",
    description:
      "Este impresionante parque, declarado Patrimonio Mundial por la UNESCO, es famoso por albergar el alerce milenario, uno de los árboles más antiguos del mundo. Ofrece una variedad de actividades como caminatas por senderos de bosque nativo, excursiones en kayak y paseos lacustres. Rodeado de montañas y ríos cristalinos, es el destino perfecto para disfrutar de la naturaleza en su máxima expresión.",
    image: img4,
    mapUrl: "https://maps.app.goo.gl/zTE1DfSdDXuciCX77",
  },
  {
    id: 2,
    title: "La Hoya",
    description:
      "El Centro de Actividades de Montaña La Hoya se encuentra a solo 13 km de la ciudad. Se destaca por la excelente calidad de su nieve en polvo y por su extensa temporada, que dura desde fines de junio hasta el 12 de octubre. Este centro de esquí es el elegido por las familias, pero también por expertos esquiadores fanáticos de los fuera-de-pista. Cuenta con 10 medios de elevación, 60 ha de superficie esquiable y 24 pistas, con una extensión total de 22 km.",
    image: img5,
    mapUrl: "https://maps.app.goo.gl/dYB3nyRxirNDx5yG8",
  },
  {
    id: 3,
    title: "La Trochita – Viejo Expreso Patagónico",
    description:
      "Este legendario tren a vapor te transporta al pasado con su nostálgico recorrido por la cordillera. Sus vagones de madera, salamandras y sonidos del traqueteo crean una atmósfera mágica. La Trochita recorre paisajes únicos hasta la comunidad mapuche Nahuel Pan, y su historia está estrechamente vinculada con la Patagonia, siendo uno de los atractivos turísticos más populares de la región.",
    image: img6,
    mapUrl: "https://maps.app.goo.gl/5MV3YZST667Y8RsP8",
  },
  {
    id: 4,
    title: "Laguna La Zeta",
    description:
      "A solo 15 minutos de Esquel, Laguna La Zeta es ideal para quienes buscan actividades al aire libre. Puedes hacer trekking, ciclismo, pesca y deportes acuáticos como kitesurf y windsurf. Además, el lugar cuenta con playas, miradores y áreas para picnic, lo que lo convierte en un sitio excelente para relajarse y disfrutar de la naturaleza.",
    image: img7,
    mapUrl: "https://maps.app.goo.gl/YaamLRzig2QCLSoj9",
  },
  {
    id: 5,
    title: "Túneles de Hielo",
    description:
      "Situados en el Cerro La Torta, los túneles de hielo se forman durante el verano cuando el manto de nieve comienza a derretirse. Esta maravilla natural, accesible solo a través de excursiones guiadas, es una experiencia exclusiva de la temporada estival. La travesía en 4x4 y el trekking que conduce a los túneles permiten disfrutar de vistas impresionantes de la cordillera y el lago Futalaufquen.",
    image: img8,
    mapUrl: "https://maps.app.goo.gl/SnvPMrrbr5Vq92tC7",
  },
  {
    id: 6,
    title: "Trevelin",
    description:
      "Este encantador pueblo de origen galés está rodeado de montañas y valles. Sus casas de té tradicionales ofrecen una inmersión en la cultura galesa, y los coloridos campos de tulipanes florecen en primavera, creando un paisaje espectacular. A solo 22 km de Esquel, Trevelin es un excelente destino para quienes buscan una experiencia cultural y paisajística diferente.",
    image: img9,
    mapUrl: "https://maps.app.goo.gl/8PuRRCgNNnm1PB6GA",
  },
  {
    id: 7,
    title: "Piedra Parada",
    description:
      "Ubicada a 135 km de Esquel, Piedra Parada es una gigantesca formación volcánica de 250 metros que se eleva en medio de un paisaje árido. Es un lugar perfecto para los amantes del trekking y la escalada. Además, el cercano Cañadón de la Buitrera ofrece una experiencia única para explorar senderos en un entorno natural salvaje y lleno de historia geológica.",
    image: img10,
    mapUrl: "https://maps.app.goo.gl/ioKBcfgzhH774p5a7",
  },
  {
    id: 8,
    title: "Rafting",
    description:
      "El Río Corcovado presenta una dificultad de clase II y III, y es el lugar ideal para realizar rafting, actividad que puede ser disfrutada sin necesidad de tener experiencia previa. Las excursiones se inician desde Esquel y cuentan con guías y equipos apropiados para hacer placentera toda la jornada. La temporada ideal se extiende desde diciembre a marzo, según las condiciones y cantidad de agua.",
    image: img11,
    mapUrl: "https://maps.app.goo.gl/CT9nkcM2FUZgDBLn7",
  },
  {
    id: 9,
    title: "Pueblo Alto Lodge",
    description:
      "Pueblo Alto Lodge es una encantadora casa de té en la montaña, ubicada en el camino al Parque Nacional Los Alerces. Es el lugar ideal para disfrutar de un té de campo acompañado de delicias caseras, rodeado de un paisaje único. Además, ofrece emocionantes actividades como canopy, que combinan aventura y naturaleza. Las visitas pueden realizarse durante todo el año, brindando una experiencia inolvidable en pleno contacto con la montaña.",
    image: img12,
    mapUrl: "https://maps.app.goo.gl/9HFmXorDTHxWRtye6",
  },
];

const Actividades = () => {
  return (
    <div className="actividades">
      {/* Header Simple */}
      <div className="actividades-header">
        <h1 className="actividades-title">Actividades en Esquel</h1>
        <p className="actividades-subtitle">
          Aventura y naturaleza en el corazón de la Patagonia
        </p>
      </div>

      {/* Contenido Principal */}
      <div className="actividades-main">
        {/* Sección Introductoria */}
        <div className="actividades-intro">
          <div className="intro-content">
            <p className="intro-text">
              Esquel, ubicada en el corazón de la Patagonia argentina, ofrece una
              variedad de actividades imperdibles. Desde explorar parques
              nacionales hasta aventuras culturales y naturales únicas, descubre
              los mejores destinos que harán de tu visita una experiencia
              inolvidable.
            </p>
          </div>
        </div>

        {/* Grid de Actividades */}
        <div className="actividades-grid">
          {actividades.map((actividad, index) => (
            <article
              key={actividad.id}
              className="activity-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="activity-card-image-wrapper">
                <img
                  src={actividad.image}
                  alt={actividad.title}
                  className="activity-card-image"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="activity-card-overlay"></div>
              </div>
              <div className="activity-card-content">
                <h3 className="activity-card-title">{actividad.title}</h3>
                <p className="activity-card-description">
                  {actividad.description}
                </p>
                <a
                  href={actividad.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="activity-card-button"
                >
                  <FaMapMarkerAlt /> Ver en Google Maps
                  <FaExternalLinkAlt className="button-icon" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actividades;
