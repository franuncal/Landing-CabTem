import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import img from "../../assets/Img-fotos/logos3.webp";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx"; // ✨ Cross más minimalista
import "./Navbar.css";

const menuItems = [
  { label: "Inicio", to: "/", action: "top" },
  { label: "Cabañas", to: "#", action: "scrollToCabanas" },
  { label: "Reservas", to: "/reservas" },
  { label: "Ubicación", to: "/ubicacion" },
  { label: "Actividades", to: "/actividades" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenuClick = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToCabanas = () => {
    const section = document.getElementById("cabanas-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      handleMenuClick();
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo" onClick={handleScrollToTop}>
        <img src={img} alt="Logo" className="logo-img" loading="lazy" />
      </Link>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          {menuItems.map(({ label, to, action }) => (
            <li key={label} className="nav-item">
              {action === "scrollToCabanas" ? (
                <button onClick={handleScrollToCabanas} className="nav-link">
                  {label}
                </button>
              ) : (
                <Link
                  to={to}
                  onClick={() => handleAction(action)}
                  className="nav-link"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón hamburguesa / cerrar */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <RxCross2 /> : <CiMenuBurger />}
      </button>
    </header>
  );
};
