import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';
import hero5 from '../assets/hero5.jpg';

const heroImages = [hero1, hero2, hero3, hero4, hero5];

const features = [
  {
    icon: '/assets/feature1.png',
    title: 'Premium Locations',
    description: 'Strategic properties in Tirupati with excellent growth potential'
  },
  {
    icon: '/assets/feature2.png',
    title: 'Quality Assurance',
    description: 'GST-registered company ensuring highest standards of construction and material quality'
  },
  {
    icon: '/assets/feature3.png',
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
        <div className="hero-slider">
          {heroImages.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Hero ${idx + 1}`}
              className={`hero-background${currentImage === idx ? ' active' : ''}`}
              style={{ opacity: currentImage === idx ? 1 : 0, transition: 'opacity 1s ease' }}
            />
          ))}
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Building Dreams Into Reality
          </h1>
          <p className="hero-subtitle">
            Discover premium properties in Tirupati crafted with excellence and trust
          </p>
          <Link to="/projects" className="btn btn-primary">
            Explore Our Projects
          </Link>
        </div>
        <div className="scroll-indicator">
          <span className="material-icons">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
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