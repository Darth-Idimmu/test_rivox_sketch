import { useState } from 'react';
import './OngoingWagers.css';
import { FaCoins } from 'react-icons/fa';
import ongoingWagersData from '../data/ongoingWagers.json';

const OngoingWagers = () => {
  const [visibleRows, setVisibleRows] = useState(3);

  const showMoreRows = () => {
    setVisibleRows(prevVisibleRows => prevVisibleRows + 2);
  };

  return (
    <div className="ongoing-wagers">
      <h2>Ongoing Wagers</h2>
      <div className="ongoing-wagers-container">
        {ongoingWagersData.slice(0, visibleRows * 2).map((wager) => (
          <div key={wager.id} className="ongoing-wager-card">
            <div className="ongoing-wager-details">
              <div className="ongoing-top-row">
                <div className="ongoing-type">{wager.type}</div>
                <div className="ongoing-price">
                  <FaCoins /> <strong>${wager.price}</strong>
                  <br />
                  <span>PRIZE</span>
                </div>
              </div>
              <div className="ongoing-info-buttons">
                <button className="ongoing-info-button">Team Size: {wager.teamSize}</button>
                <button className="ongoing-info-button">Platform: {wager.platform}</button>
                <button className="ongoing-info-button">Region: {wager.region}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleRows * 2 < ongoingWagersData.length && (
        <button className="ongoing-show-more-button" onClick={showMoreRows}>
          Show More
        </button>
      )}
    </div>
  );
};

export default OngoingWagers;
