// Home.jsx
import "./Home.css";
import { Presentation } from "../Presentation/Presentation";
import Cabanas from "../Cabanas/Cabanas";
import DiscoverEsquel from "../DiscoverEsquel/DiscoverEsquel";
import MultipurposeRoom from "../MultipurposeRoom/MultipurposeRoom";

export const Home = () => {
  return (
    <div className="home-container">
      <Presentation />
      <Cabanas />
      <MultipurposeRoom />
      <DiscoverEsquel />
    </div>
  );
};
