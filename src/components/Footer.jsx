import { FaTwitter, FaDiscord } from 'react-icons/fa';
import './Footer.css';
import rivoxLogo from '../assets/logo.svg'; // Asegúrate de tener el logo en esta ruta

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-column">
                    <h3>Connect With Us</h3>
                    <ul>
                        <li><FaTwitter /> Twitter</li>
                        <li><FaDiscord /> Discord</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Support</h3>
                    <ul>
                        <li>Create a Ticket</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Features</h3>
                    <ul>
                        <li>Shop</li>
                        <li>Tokens</li>
                        <li>Leaderboard</li>
                        <li>Profile</li>
                        <li>My Locker</li>
                    </ul>
                </div>
            </div>
            <div className="footer-logo">
                <img src={rivoxLogo} alt="Rivox Logo" />
            </div>
            <div className="footer-copyright">
                <p>© 2024 Rivox LLC | All Rights Reserved.</p>
                <p><strong>support@rivox.gg</strong></p>
            </div>
        </footer>
    );
};

export default Footer;
