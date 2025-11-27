import "../styles/Footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ScheduleIcon from '@mui/icons-material/Schedule';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <CoffeeIcon className="logo-icon" />
              Coffee Whispers
            </Link>
            <p className="footer-description">
              Where every cup tells a story. Experience the perfect blend of 
              tradition and innovation in every sip.
            </p>
            <div className="opening-hours">
              <ScheduleIcon className="hours-icon" />
              <div className="hours-info">
                <span className="hours-title">Open 24/7</span>
                <span className="hours-subtitle">Always brewing excellence</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="links-grid">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/menu" className="footer-link">Our Menu</Link>
              <Link to="/about" className="footer-link">Our Story</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-heading">Get In Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <span className="contact-value">(+961) 71 829 730</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">info@coffeewhispers.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span className="contact-value">Al Bayader, Akkar</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-social">
            <h3 className="footer-heading">Follow Us</h3>
            <p className="social-description">
              Stay connected and be the first to know about our latest brews and offers.
            </p>
            <div className="social-links">

             <Link to="https://instagram.com" className="social-link" target="_blank"><InstagramIcon className="social-icon" /></Link>
             <Link to="https://wa.me/96171829730" className="social-link" target="_blank"><WhatsAppIcon className="social-icon" /></Link>
             <Link to="https://linkedin.com"  className="social-link" target="_blank"><LinkedInIcon className="social-icon" /></Link>
             <Link to="https://facebook.com"  className="social-link" target="_blank"><FacebookIcon className="social-icon" /></Link>

              
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <CoffeeIcon className="copyright-icon" />
              <span>&copy; 2024 Coffee Whispers. All rights reserved.</span>
            </div>
            <div className="footer-legal">
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms" className="legal-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;