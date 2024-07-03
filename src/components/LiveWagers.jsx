import { useState } from "react";
import "./LiveWagers.css";
import { FaTrophy, FaCoins } from "react-icons/fa";
import wagersData from '../data/LiveWagers.json'

const LiveWagers = () => {
    const [visibleWagers, setVisibleWagers] = useState(4);
  
    const showMoreWagers = () => {
      setVisibleWagers(prevVisibleWagers => prevVisibleWagers + 4);
    };
  
    return (
      <div className="live-wagers">
        <h2>Live Wagers</h2>
        <div className="wagers-container">
          {wagersData.slice(0, visibleWagers).map((wager) => (
            <div key={wager.id} className="wager-card">
              <div className="live-icon">LIVE</div>
              <img src={wager.gameImage} alt="Game" className="game-image" />
              <div className="wager-details">
                <div className="players">
                  {wager.player1} vs {wager.player2}
                </div>
                <div className="prize">
                  <FaCoins /> ${wager.prize} <br />
                  <span>Prize</span>
                </div>
              </div>
              <div className="game-info">
                {wager.genre}, {wager.region}, {wager.type}
              </div>
            </div>
          ))}
        </div>
        {visibleWagers < wagersData.length && (
          <button className="show-more-button" onClick={showMoreWagers}>
            Show More
          </button>
        )}
      </div>
    );
  };
  
  export default LiveWagers;
