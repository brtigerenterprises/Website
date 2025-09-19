import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigation.css';

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Our Services', to: '/services' },
  { name: 'About Us', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <img 
            src={import.meta.env.BASE_URL + 'assets/logo.png'} 
            alt="BR Tiger Enterprises Logo" 
            className="navbar-logo"
            onError={(e) => {
              console.error('Logo failed to load');
              e.target.style.display = 'none';
            }}
          />
          <span className="navbar-title">BR TIGER ENTERPRISES</span>
        </Link>
        
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="menu-icon"></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`nav-link ${location.pathname === item.to ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;