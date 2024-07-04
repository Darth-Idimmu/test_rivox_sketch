import { FaHome, FaGamepad, FaTrophy, FaShoppingBag } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <header className="header">
        <div className="header-left">
          <div className="logo">Rivox</div>
          <button className="menu-button">⋮</button>
        </div>
        <div className="header-center">
          <div className="icon-container">
            <FaHome className="icon" title="Home" />
          </div>
          <div className="icon-container">
            <FaGamepad className="icon" title="Games" />
          </div>
          <div className="icon-container">
            <FaTrophy className="icon" title="Trophies" />
          </div>
          <div className="icon-container">
            <FaShoppingBag className="icon" title="Shop" />
          </div>
        </div>
        <div className="header-right">
          <button className="auth-button">Login</button>
          <button className="auth-button" style={{background: '#713bf3'}}>Register</button>
          <button className="more-options-button">⋮</button>
        </div>
      </header>
    </nav>
  );
};

export default Header;
