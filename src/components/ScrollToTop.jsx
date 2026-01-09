import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll suave al cambiar de ruta
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // Detectar scroll para mostrar/ocultar botón
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
