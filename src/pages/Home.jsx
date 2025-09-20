import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const heroImages = [
  'assets/hero1.jpg',
  'assets/hero2.jpg',
  'assets/hero3.jpg',
  'assets/hero4.jpg',
  'assets/hero5.jpg'
];

const features = [
  {
    icon: 'location_on',
    title: 'Premium Locations',
    description: 'Strategic properties with excellent growth potential'
  },
  {
    icon: 'verified',
    title: 'Quality Assurance',
    description: 'GST-registered company ensuring highest standards of construction and material quality'
  },
  {
    icon: 'support_agent',
    title: 'Customer First',
    description: 'Dedicated to exceeding customer expectations with transparent dealings and timely delivery'
  }
];

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '100+', label: 'Happy Clients' },
  { number: '2', label: 'Cities Present' }
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <button 
          className="hero-nav prev"
          onClick={(e) => {
            e.preventDefault();
            setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
          }}
          aria-label="Previous slide"
        >
          <span className="material-icons">chevron_left</span>
        </button>
        <div className="hero-slider">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`hero-slide${currentImage === idx ? ' active' : ''}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 32, 74, 0.5), rgba(0, 0, 0, 0.3)), url(${img})`,
                opacity: currentImage === idx ? 1 : 0,
                transition: 'opacity 1s ease'
              }}
            />
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-text-center">
            <h1 className="hero-title">
              Building Dreams Into Reality
            </h1>
            <p className="hero-subtitle">
              Discover premium properties crafted with excellence and trust
            </p>
            <div className="hero-button-container">
              <Link to="/services" className="btn btn-primary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
        <button 
          className="hero-nav next"
          onClick={(e) => {
            e.preventDefault();
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
          }}
          aria-label="Next slide"
        >
          <span className="material-icons">chevron_right</span>
        </button>
        <div className="scroll-indicator">
          <span className="material-icons">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <span className="material-icons">{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Find Your Dream Property?</h2>
          <p className="cta-description">
            Let us help you discover the perfect property that matches your lifestyle and investment goals.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Latest Projects Preview */}
      <section className="latest-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {/* Add your featured projects here */}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects" className="btn btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;