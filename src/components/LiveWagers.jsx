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
            <img src="https://random-image-pepebigotes.vercel.app/api/random-image" alt="Game" className="live-game-image" />
            <div className="live-wager-details">
              <div className="live-players">
                <strong>{wager.player1}</strong> vs <strong>{wager.player2}</strong>
              </div>
              <div className="live-prize">
                <strong>
                <FaCoins /> ${wager.prize} <br />
                <span>Prize</span>
                </strong>
              </div>
            </div>
            <div className="live-game-info">
              <strong>{wager.genre}, {wager.region}, {wager.type}</strong>
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
