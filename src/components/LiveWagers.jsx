import { useState } from "react";
import "./LiveWagers.css";
import { FaCoins } from "react-icons/fa";
import wagersData from '../data/LiveWagers.json';

const LiveWagers = () => {
  const [visibleWagers, setVisibleWagers] = useState(4);

  const showMoreWagers = () => {
    setVisibleWagers(prevVisibleWagers => prevVisibleWagers + 4);
  };

  return (
    <div className="live-wagers">
      <h2>Live Wagers</h2>
      <div className="live-wagers-container">
        {wagersData.slice(0, visibleWagers).map((wager) => (
          <div key={wager.id} className="live-wager-card">
            <div className="live-icon">LIVE</div>
            <img src={wager.gameImage} alt="Game" className="live-game-image" />
            <div className="live-wager-details">
              <div className="live-players">
                {wager.player1} vs {wager.player2}
              </div>
              <div className="live-prize">
                <FaCoins /> ${wager.prize} <br />
                <span>Prize</span>
              </div>
            </div>
            <div className="live-game-info">
              {wager.genre}, {wager.region}, {wager.type}
            </div>
          </div>
        ))}
      </div>
      {visibleWagers < wagersData.length && (
        <button className="live-show-more-button" onClick={showMoreWagers}>
          Show More
        </button>
      )}
    </div>
  );
};

export default LiveWagers;
