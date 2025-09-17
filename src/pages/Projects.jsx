import { useState } from 'react';
import '../styles/projects.css';

const projectCategories = [
  'All',
  'Residential Plots',
  'Villas',
  'Apartments',
  'Commercial'
];

const projects = [
  {
    id: 1,
    title: 'BR Tiger Paradise',
    type: 'Residential Plots',
    location: 'Venkatagiri',
    price: 'Starting from ₹15L',
    image: '/assets/project1.jpg',
    description: 'Premium residential plots in a gated community with world-class amenities',
    status: 'ongoing'
  },
  {
    id: 2,
    title: 'Tiger Heights',
    type: 'Apartments',
    location: 'Tirupati',
    price: 'Starting from ₹45L',
    image: '/assets/project2.jpg',
    description: 'Modern apartments with luxury amenities and scenic views',
    status: 'completed'
  },
  // Add more projects here
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setDisplayedProjects(projects);
    } else {
      setDisplayedProjects(projects.filter(project => project.type === category));
    }
  };

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1 className="projects-hero-title">Our Projects</h1>
          <p className="projects-hero-description">
            Discover our premium residential and commercial properties designed for modern living
          </p>
        </div>
      </section>

      <section className="filter-section">
        <div className="filter-container">
          {projectCategories.map(category => (
            <button
              key={category}
              className={`filter-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <div className="projects-grid">
        {displayedProjects.map(project => (
          <div key={project.id} className="project-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
            />
            <div className="project-content">
              <span className="project-type">{project.type}</span>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-details">
                <div className="project-location">
                  <span className="material-icons">location_on</span>
                  {project.location}
                </div>
                <div className="project-price">
                  <span className="material-icons">currency_rupee</span>
                  {project.price}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <span className={`project-status status-${project.status}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
                <a href="#" className="view-project-btn">View Details</a>
              </div>
            </div>
            <div className="project-overlay">
              <div className="overlay-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="view-project-btn">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;