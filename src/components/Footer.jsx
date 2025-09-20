import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col about">
          <h3>About company</h3>
          <p>BR Tiger Enterprises provides premium properties and real estate solutions in Tirupati, crafted with excellence and trust. Our goal is to deliver quality living and investment opportunities for every client.</p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-icon">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="mailto:contact@brtigerenterprises.com" aria-label="Email" className="footer-social-icon">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="footer-col links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col contact">
          <h3>Contact</h3>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span>7-158, NTR Colony Part 7, Tirupati, Andhra Pradesh - 524132, India</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <i className="fas fa-phone"></i>
            </span>
            <span>+91 NA</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <i className="fab fa-whatsapp"></i>
            </span>
            <span>+91 9393133331</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span>contact@brtigerenterprises.com</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          Copyright © 2025 BR Tiger Enterprises. All Rights Reserved.
        </div>
        <div className="footer-legal-links">
          <Link to="/privacy">Privacy Policy</Link>
          <span className="footer-divider">|</span>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}