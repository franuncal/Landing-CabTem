import { Link } from "react-router-dom";
import { useState } from "react";
import img from "../../assets/Img-fotos/1.png";
import { FaWindowClose } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={handleScrollToTop}>
        <img src={img} alt="Logo" className="logo-img" />
      </Link>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaWindowClose /> : <CiMenuBurger />}
      </button>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="/"
              onClick={() => {
                handleMenuClick();
                handleScrollToTop();
              }}
            >
              Inicio
            </Link>
          </li>
          {["Cabañas", "Reservas", "Ubicación", "Actividades"].map(
            (item, index) => (
              <li key={index} className="nav-item">
                <Link
                  to={
                    item === "Reservas"
                      ? "/reservas"
                      : item === "Ubicación"
                      ? "/ubicacion"
                      : item === "Actividades"
                      ? "/actividades"
                      : item
                  }
                  onClick={handleMenuClick}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};
