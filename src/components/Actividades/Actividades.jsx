import "./Actividades.css";
import { useState, useEffect, useCallback } from "react";
import img1 from "../../assets/paisaje/p1.webp";
import img2 from "../../assets/paisaje/p2.webp";
import img3 from "../../assets/paisaje/p3.webp";

import img4 from "../../assets/img-esquel/es1.webp";
import img5 from "../../assets/img-esquel/es2.webp";
import img6 from "../../assets/img-esquel/es6.webp";
import img7 from "../../assets/img-esquel/es8.webp";
import img8 from "../../assets/img-esquel/es7.webp";
import img9 from "../../assets/img-esquel/es5.webp";
import img10 from "../../assets/img-esquel/es3.webp";
import img11 from "../../assets/img-esquel/es4.webp";
import img12 from "../../assets/img-esquel/es9.webp";

const Actividades = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3];

  const nextImage = useCallback(() => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // Cambiar automáticamente la imagen cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="actividades">
      {/* Slider ocupa todo el ancho */}
      <div className="banner-u-wrapper">
        <div className="banner-u">
          <div className="carousel-u">
            <img
              src={images[currentImage]}
              alt="Paisajes Esquel"
              className="carousel-image"
            />
          </div>
        </div>
      </div>

      {/* Contenido limitado al ancho máximo */}
      <div className="content">
        <div className="intro-section">
          <h3>
            <b>Actividades Imperdibles en Esquel, Chubut.</b>
          </h3>
          <h3>Aventura y Naturaleza en la Patagonia</h3>
          <p>
            Esquel, ubicada en el corazón de la Patagonia argentina, ofrece una
            variedad de actividades imperdibles. Desde explorar parques
            nacionales hasta aventuras culturales y naturales únicas, descubre
            los mejores destinos que harán de tu visita una experiencia
            inolvidable.
          </p>
        </div>

        {/* Los Alerces */}
        <div className="activity-banner">
          <img
            src={img4}
            alt="Parque nacional los alerces"
            className="activity-image"
          />
          <div className="activity-info">
            <h3 className="activity-title">Parque Nacional Los Alerces</h3>
            <p className="activity-description">
              Este impresionante parque, declarado Patrimonio Mundial por la
              UNESCO, es famoso por albergar el alerce milenario, uno de los
              árboles más antiguos del mundo. Ofrece una variedad de actividades
              como caminatas por senderos de bosque nativo, excursiones en kayak
              y paseos lacustres. Rodeado de montañas y ríos cristalinos, es el
              destino perfecto para disfrutar de la naturaleza en su máxima
              expresión.
            </p>
            <a
              href="https://maps.app.goo.gl/zTE1DfSdDXuciCX77"
              target="_blank"
              rel="noopener noreferrer"
              className="google-maps-button"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* La Hoya */}
        <div className="activity-banner">
          <img src={img5} alt="La Hoya" className="activity-image" />
          <div className="activity-info">
            <h3 className="activity-title">La Hoya</h3>
            <p className="activity-description">
              El Centro de Actividades de Montaña La Hoya se encuentra a solo 13
              km de la ciudad. Se destaca por la excelente calidad de su nieve
              en polvo y por su extensa temporada, que dura desde fines de junio
              hasta el 12 de octubre. Este centro de esquí es el elegido por las
              familias, pero también por expertos esquiadores fanáticos de los
              fuera-de-pista. Cuenta con 10 medios de elevación, 60 ha de
              superficie esquiable y 24 pistas, con una extensión total de 22
              km.
            </p>
            <a
              href="https://maps.app.goo.gl/dYB3nyRxirNDx5yG8"
              target="_blank"
              rel="noopener noreferrer"
              className="google-maps-button"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* La Trochita */}
        <div className="activity-banner">
          <img src={img6} alt="La Trochita" className="activity-image" />
          <div className="activity-info">
            <h3 className="activity-title">
              La Trochita – Viejo Expreso Patagónico
            </h3>
            <p className="activity-description">
              Este legendario tren a vapor te transporta al pasado con su
              nostálgico recorrido por la cordillera. Sus vagones de madera,
              salamandras y sonidos del traqueteo crean una atmósfera mágica. La
              Trochita recorre paisajes únicos hasta la comunidad mapuche Nahuel
              Pan, y su historia está estrechamente vinculada con la Patagonia,
              siendo uno de los atractivos turísticos más populares de la
              región.
            </p>
            <a
              href="https://maps.app.goo.gl/5MV3YZST667Y8RsP8"
              target="_blank"
              rel="noopener noreferrer"
              className="google-maps-button"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Laguna La Zeta */}
        <div className="activity-banner">
          <img src={img7} alt="Laguna La Zeta" className="activity-image" />
          <div className="activity-info">
            <h3 className="activity-title">Laguna La Zeta</h3>
            <p className="activity-description">
              A solo 15 minutos de Esquel, Laguna La Zeta es ideal para quienes
              buscan actividades al aire libre. Puedes hacer trekking, ciclismo,
              pesca y deportes acuáticos como kitesurf y windsurf. Además, el
              lugar cuenta con playas, miradores y áreas para picnic, lo que lo
              convierte en un sitio excelente para relajarse y disfrutar de la
              naturaleza.
            </p>
            <a
              href="https://maps.app.goo.gl/YaamLRzig2QCLSoj9"
              target="_blank"
              rel="noopener noreferrer"
              className="google-maps-button"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Túneles de Hielo */}
        <div className="activity-banner">
          <img
            src={img8}
            alt="Tuneles de Hielo-esquel"
            className="activity-image"
          />
          <div className="activity-info">
            <h3 className="activity-title">Túneles de Hielo</h3>
            <p className="activity-description">
              Situados en el Cerro La Torta, los túneles de hielo se forman
              durante el verano cuando el manto de nieve comienza a derretirse.
              Esta maravilla natural, accesible solo a través de excursiones
              guiadas, es una experiencia exclusiva de la temporada estival. La
              travesía en 4x4 y el trekking que conduce a los túneles permiten
              disfrutar de vistas impresionantes de la cordillera y el lago
              Futalaufquen.
            </p>
            <a
              href="https://maps.app.goo.gl/SnvPMrrbr5Vq92tC7"
              target="_blank"
              rel="noopener noreferrer"
              className="google-maps-button"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Trevelin */}
        <div className="activity-banner">
          <img src={img9} alt="Trevelin" className="activity-image" />
          <div className="activity-info">
            <h3 className="activity-title">Trevelin</h3>
            <p className="activity-description">
              Este encantador pueblo de origen galés está rodeado de montañas y
              valles. Sus casas de té tradicionales ofrecen una inmersión en la
              cultura galesa, y los coloridos campos de tulipanes florecen en
              primavera, creando un paisaje espectacular. A solo 22 km de
              Esquel, Trevelin es un excelente destino para quienes buscan una
              experiencia cultural y paisajística diferente.
            </p>
            <a
              href="https://maps.app.goo.gl/8PuRRCgNNnm1PB6GA"
              target="_blank"
              rel="noopener noreferrer"
              className="google-maps-button"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Piedra Parada */}
        <div className="activity-banner">
          <img src={img10} alt="Piedra Parada" className="activity-image" />
          <div className="activity-info">
            <h3 className="activity-title">Piedra Parada</h3>
            <p className="activity-description">
              Ubicada a 135 km de Esquel, Piedra Parada es una gigantesca
              formación volcánica de 250 metros que se eleva en medio de un
              paisaje árido. Es un lugar perfecto para los amantes del trekking
              y la escalada. Además, el cercano Cañadón de la Buitrera ofrece
              una experiencia única para explorar senderos en un entorno natural
              salvaje y lleno de historia geológica.
            </p>
            <a
              href="https://maps.app.goo.gl/ioKBcfgzhH774p5a7"
              target="_blank"
              rel="noopener noreferrer"
              className="google-maps-button"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Rafting */}
        <div className="activity-banner">
          <img src={img11} alt="Rafting" className="activity-image" />
          <div className="activity-info">
            <h3 className="activity-title">Rafting</h3>
            <p className="activity-description">
              El Río Corcovado presenta una dificultad de clase II y III, y es
              el lugar ideal para realizar rafting, actividad que puede ser
              disfrutada sin necesidad de tener experiencia previa. Las
              excursiones se inician desde Esquel y cuentan con guías y equipos
              apropiados para hacer placentera toda la jornada. La temporada
              ideal se extiende desde diciembre a marzo, según las condiciones y
              cantidad de agua.
            </p>
            <a
              href="https://maps.app.goo.gl/CT9nkcM2FUZgDBLn7"
              target="_blank"
              rel="noopener noreferrer"
              className="google-maps-button"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Casa de Té */}
        <div className="activity-banner">
          <img
            src={img12}
            alt="Paisaje Pueblo Alto"
            className="activity-image"
          />
          <div className="activity-info">
            <h3 className="activity-title">Pueblo Alto Lodge</h3>
            <p className="activity-description">
              Pueblo Alto Lodge es una encantadora casa de té en la montaña,
              ubicada en el camino al Parque Nacional Los Alerces. Es el lugar
              ideal para disfrutar de un té de campo acompañado de delicias
              caseras, rodeado de un paisaje único. Además, ofrece emocionantes
              actividades como canopy, que combinan aventura y naturaleza. Las
              visitas pueden realizarse durante todo el año, brindando una
              experiencia inolvidable en pleno contacto con la montaña.
            </p>
            <a
              href="https://maps.app.goo.gl/9HFmXorDTHxWRtye6"
              target="_blank"
              rel="noopener noreferrer"
              className="google-maps-button"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actividades;
