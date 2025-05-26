import { Link } from "react-router-dom";
import { useState } from "react";
import img from "../../assets/Img-fotos/logos3.webp";
import { FaWindowClose } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
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

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={handleScrollToTop}>
        <img src={img} alt="Logo" className="logo-img" loading="lazy" />
      </Link>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaWindowClose /> : <CiMenuBurger />}
      </button>

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
    </header>
  );
};
