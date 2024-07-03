import React, { useState } from 'react';
import './OngoingWagers.css';
import { FaCoins } from 'react-icons/fa';
import ongoingWagersData from '../data/ongoingWagers.json';

const OngoingWagers = () => {
  const [visibleRows, setVisibleRows] = useState(2); // Estado para controlar el número de filas visibles

  const showMoreRows = () => {
    setVisibleRows(visibleRows + 2); // Aumentar el número de filas visibles en 2 al hacer clic en "Show More"
  };

  return (
    <div className="ongoing-wagers">
      <h2>Ongoing Wagers</h2>
      <div className="wagers-container">
        {ongoingWagersData.slice(0, visibleRows).map((wager) => ( // Mostrar solo las filas visibles
          <div key={wager.id} className="wager-card">
            <div className="wager-details">
              <div className="type">{wager.type}</div>
              <div className="info-buttons">
                <button className="info-button">Team Size: {wager.teamSize}</button>
                <button className="info-button">Platform: {wager.platform}</button>
                <button className="info-button">Region: {wager.region}</button>
              </div>
              <div className="price">
                <FaCoins /> <strong>${wager.price}</strong> <br />
                <span>PRIZE</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleRows < ongoingWagersData.length && ( // Mostrar el botón "Show More" solo si hay más filas para mostrar
        <button className="show-more-button" onClick={showMoreRows}>
          Show More
        </button>
      )}
    </div>
  );
};

export default OngoingWagers;
