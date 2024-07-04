import { useState } from 'react';
import { FaHome, FaGamepad, FaTrophy, FaShoppingBag, FaEllipsisV, FaTh } from 'react-icons/fa';
import './Header.css';
import rivoxLogo from '../assets/logo.svg';

const Header = () => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setRightMenuOpen] = useState(false);

  const toggleLeftMenu = () => setLeftMenuOpen(!isLeftMenuOpen);
  const toggleRightMenu = () => setRightMenuOpen(!isRightMenuOpen);

  return (
    <nav>
      <header className="header">
        <div className="header-left">
          <a href="/" className="logo-link">
            <img src={rivoxLogo} alt="Rivox" className="logo" />
          </a>
          <button className="menu-button" onClick={toggleLeftMenu}>
            <FaEllipsisV />
          </button>
        </div>
        <div className="header-center">
          <button className="icon-button">
            <FaHome className="icon" title="Home" />
          </button>
          <button className="icon-button">
            <FaGamepad className="icon" title="Games" />
          </button>
          <button className="icon-button">
            <FaTrophy className="icon" title="Trophies" />
          </button>
          <button className="icon-button">
            <FaShoppingBag className="icon" title="Shop" />
          </button>
        </div>
        <div className="header-right">
          <button className="auth-button">Login</button>
          <button className="auth-button" style={{ background: '#713bf3' }}>Register</button>
          <button className="more-options-button" onClick={toggleRightMenu}>
            <FaTh />
          </button>
        </div>
        {isLeftMenuOpen && (
          <div className="modal left-menu-modal">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Log Out</li>
            </ul>
          </div>
        )}
        {isRightMenuOpen && (
          <div className="modal right-menu-modal">
            <ul>
              <li>Dashboard</li>
              <li>Messages</li>
              <li>Notifications</li>
              <li>Friends</li>
              <li>Games</li>
              <li>Achievements</li>
              <li>Settings</li>
            </ul>
          </div>
        )}
      </header>
    </nav>
  );
};

export default Header;
