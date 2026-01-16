import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CabanaDetail from "./components/Cabin/CabanaDetail";
import Reservas from "./components/Reservas/Reservas";
import Ubicacion from "./components/Ubicacion/Ubicacion";
import Actividades from "./components/Actividades/Actividades";
import Privacidad from "./components/Privacidad/Privacidad";
import Terminos from "./components/Terminos/Terminos";
import { WhatsAppButton } from "./components/WhatsAppButton";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Home />
            </>
          }
        />
        <Route path="/cabin1" element={<CabanaDetail key="cabin1" />} />
        <Route path="/cabin2" element={<CabanaDetail key="cabin2" />} />
        <Route path="/cabin3" element={<CabanaDetail key="cabin3" />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
