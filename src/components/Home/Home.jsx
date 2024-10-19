// Home.jsx
import "./Home.css";
import { Presentation } from "../Presentation/Presentation";
import Cabanas from "../Cabanas/Cabanas";
import DiscoverEsquel from "../DiscoverEsquel/DiscoverEsquel";

export const Home = () => {
  return (
    <div className="home-container">
      <Presentation />
      <Cabanas />
      <DiscoverEsquel />
    </div>
  );
};
