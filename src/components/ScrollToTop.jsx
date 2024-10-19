import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Siempre va a la parte superior
  }, [pathname]);

  return null; // Este componente no necesita renderizar nada
};

export default ScrollToTop;
