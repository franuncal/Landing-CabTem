import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { Home } from "./components/Home/Home";

import { Footer } from "./components/Footer/Footer";
import ScrollToTop from "./components/scrollToTop";
import Cabin1 from "./components/Cabin/Cabin1";
import Cabin2 from "./components/Cabin/Cabin2";
import Cabin3 from "./components/Cabin/Cabin3";
import Reservas from "./components/Reservas/Reservas";
import "./App.css";
import Ubicacion from "./components/Ubicacion/Ubicacion";
import Actividades from "./components/Actividades/Actividades";

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

        <Route path="/cabin1" element={<Cabin1 />} />
        <Route path="/cabin2" element={<Cabin2 />} />
        <Route path="/cabin3" element={<Cabin3 />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/actividades" element={<Actividades />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
