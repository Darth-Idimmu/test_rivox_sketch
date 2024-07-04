import { useState } from "react";
import "./OpenWagers.css";
import { FaClock, FaCoins } from "react-icons/fa";
import openWagersData from "../data/openWagers.json";

const OpenWagers = () => {
  const [visibleWagers, setVisibleWagers] = useState(5);

  const showMoreWagers = () => {
    setVisibleWagers((prevVisibleWagers) => prevVisibleWagers + 5);
  };

  return (
    <div className="open-wagers">
      <h2>Open Wagers</h2>
      <div className="wagers-container">
        {openWagersData.slice(0, visibleWagers).map((wager) => (
          <div key={wager.id} className="wager-card">
            <div className="price-icon">
              <FaCoins /> ${wager.price}
            </div>
            <img src="https://random-image-pepebigotes.vercel.app/api/random-image" alt="Game" className="game-image" />
            <div className="wager-details">
              <div className="countdown">
                <strong><FaClock /> {wager.countdown}</strong>
              </div>
              <div className="type"><strong> {wager.type}</strong></div>
              <div className="info-buttons">
                <button className="info-button">{wager.region}</button>
                <button className="info-button">{wager.platform}</button>
                <button className="info-button">{wager.firstTo}</button>
              </div>
            </div>
            <button className="view-opponent-button">View Opponent</button>
          </div>
        ))}
      </div>
      {visibleWagers < openWagersData.length && (
        <button className="show-more-button" onClick={showMoreWagers}>
          Show More
        </button>
      )}
    </div>
  );
};

export default OpenWagers;
