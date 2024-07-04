import { GiCrossedSwords, GiPodiumWinner } from "react-icons/gi";
import { FaPlay, FaTrophy } from "react-icons/fa";
import { RiFireFill } from "react-icons/ri";
import "./LiveWagersInfo.css";

const LiveWagersInfo = () => {
  return (
    <div className="live-wagers-info">
      <h1 className="title">The Fastest Growing Esports Wager Platform</h1>
      <p className="subtitle">
        Join <strong>18,846</strong> other players competing in wager matches
        and start earning today.
      </p>
      <div className="buttons">
        <button className="info-button find-matches">
          <GiCrossedSwords /> Find Matches
        </button>
        <button className="info-button register-now">
          <FaPlay /> Register Now
        </button>
        <button className="info-button leaderboard">
          <FaTrophy /> Leaderboard
        </button>
      </div>
      <div className="stats">
        <div className="stat">
          <GiCrossedSwords color="#646cff" /> <strong>92,522</strong> Wagers
          Played
        </div>
        <div className="stat">
          <strong>· </strong> <GiPodiumWinner color="#646cff" />{" "}
          <strong>$11,185.67</strong> Winnings Paid
        </div>
        <div className="stat">
          <strong>· </strong> <RiFireFill color="#646cff" /> <strong>52</strong>{" "}
          Ongoing Wagers
        </div>
      </div>
    </div>
  );
};

export default LiveWagersInfo;
