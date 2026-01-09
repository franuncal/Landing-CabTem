import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import img from "../../assets/Img-fotos/logos3.webp";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";

const menuItems = [
  { label: "Inicio", to: "/", action: "top" },
  { label: "Cabañas", to: "/", action: "scrollToCabanas" },
  { label: "Reservas", to: "/reservas" },
  { label: "Ubicación", to: "/ubicacion" },
  { label: "Actividades", to: "/actividades" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToCabanas = (e) => {
    e.preventDefault();
    handleMenuClick();
    
    // Si estamos en otra página, navegar a home primero
    if (location.pathname !== "/") {
      navigate("/");
      // Esperar a que la página cargue y luego hacer scroll
      setTimeout(() => {
        const section = document.getElementById("cabanas-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Si ya estamos en home, hacer scroll directamente
      const section = document.getElementById("cabanas-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleAction = (action) => {
    if (action === "top") {
      handleScrollToTop();
      handleMenuClick();
    } else if (action === "scrollToCabanas") {
      handleScrollToCabanas();
    } else {
      handleMenuClick();
    }
  };

  // Detectar scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevenir scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Verificar si el link está activo
  const isActive = (to) => {
    if (to === "/") {
      return location.pathname === "/";
    }
    return location.pathname === to;
  };

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      <Link
        to="/"
        className="logo"
        onClick={handleScrollToTop}
        aria-label="Ir al inicio"
      >
        <img
          src={img}
          alt="Logo Cabañas Temístocles"
          className="logo-img"
          loading="lazy"
        />
      </Link>

      <nav
        className={`nav ${menuOpen ? "open" : ""}`}
        aria-label="Navegación principal"
      >
        <ul className="nav-list">
          {menuItems.map(({ label, to, action }, index) => (
            <li
              key={label}
              className="nav-item"
              style={{ animationDelay: menuOpen ? `${index * 0.1}s` : "0s" }}
            >
              {action === "scrollToCabanas" ? (
                <Link
                  to="/"
                  onClick={handleScrollToCabanas}
                  className="nav-link"
                  aria-label={`Ir a ${label}`}
                >
                  {label}
                </Link>
              ) : (
                <Link
                  to={to}
                  onClick={() => handleAction(action)}
                  className={`nav-link ${isActive(to) ? "active" : ""}`}
                  aria-label={`Ir a ${label}`}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <RxCross2 /> : <CiMenuBurger />}
      </button>
    </header>
  );
};
