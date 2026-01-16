import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import img from "../../assets/Img-fotos/logos3.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300);
    } else {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  const handleUbicacionClick = () => {
    closeMenu();
    navigate("/ubicacion");
  };

  const handleActividadesClick = () => {
    closeMenu();
    navigate("/actividades");
  };

  const handleReservarClick = () => {
    closeMenu();
    navigate("/reservas");
  };

  const headerClass = `navbar ${scrolled ? "navbar--scrolled" : "navbar--top"}`;

  useEffect(() => {
    if (open) {
      const handleClickOutside = (e) => {
        if (
          !e.target.closest(".navbar-links") &&
          !e.target.closest(".navbar-toggle")
        ) {
          closeMenu();
        }
      };
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("click", handleClickOutside);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header className={headerClass}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img
            src={img}
            alt="Cabañas Temístocles"
            className="navbar-logo-img"
          />
        </Link>

        <button
          className={`navbar-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={toggleMenu}
        >
          <span className="navbar-toggle-bar" />
        </button>

        {open && <div className="navbar-overlay" onClick={closeMenu} />}

        <nav
          className={`navbar-links ${open ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          <button
            onClick={() => handleNavClick("cabanas-section")}
            className="navbar-link"
          >
            Cabañas
          </button>
          <button onClick={handleUbicacionClick} className="navbar-link">
            Ubicación
          </button>
          <button onClick={handleActividadesClick} className="navbar-link">
            Actividades
          </button>
          <button
            onClick={handleReservarClick}
            className="navbar-reserva btn-primary"
          >
            Reservar
          </button>
        </nav>
      </div>
    </header>
  );
}
