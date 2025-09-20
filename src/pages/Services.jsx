import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';
console.log('Services module loaded');

export default function Services() {
  console.log('Services component rendering'); // Debug log

  const [expandedService, setExpandedService] = useState(null);
  const [currentSlide, setCurrentSlide] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Services component mounted'); // Debug log
    try {
      // Check if Material Icons is loaded
      const iconFont = document.querySelector('link[href*="Material+Icons"]');
      if (!iconFont) {
        console.warn('Material Icons font not loaded');
      }
      // Log the services data
      console.log('Services data:', services);
    } catch (err) {
      console.error('Error in Services component:', err);
      setError(err.message);
    }
  }, []);

  const services = [
    {
      id: 1,
      title: 'Commercial Property Builder',
      description: 'Expert construction of commercial spaces that drive business success.',
      longDescription: 'We specialize in building state-of-the-art commercial properties including office buildings, retail spaces, and mixed-use developments. Our team ensures optimal space utilization, modern amenities, and energy efficiency.',
      icon: 'business',
      images: [
        '/assets/commercial/commercial1.jpg',
        '/assets/commercial/commercial2.jpg',
        '/assets/commercial/commercial3.jpg',
        '/assets/commercial/commercial4.jpg',
        '/assets/commercial/commercial5.jpg'
      ],
      features: ['Custom Office Layouts', 'Retail Space Optimization', 'Energy Efficient Design', 'Modern Amenities']
    },
    {
      id: 2,
      title: 'Residential Construction',
      description: 'Crafting dream homes with precision and care.',
      longDescription: 'From luxurious villas to comfortable row houses, we build residential spaces that reflect your personality and meet your lifestyle needs. Every project is handled with attention to detail and quality craftsmanship.',
      icon: 'home',
      images: [
        '/assets/residential/residential1.jpg',
        '/assets/residential/residential2.jpg',
        '/assets/residential/residential3.jpg',
        '/assets/residential/residential4.jpg',
        '/assets/residential/residential5.jpg'
      ],
      features: ['Individual Houses', 'Luxury Villas', 'Row Houses', 'Custom Home Design']
    },
    {
      id: 3,
      title: 'Apartment Construction & Sales',
      description: 'Building modern living spaces for communities.',
      longDescription: 'We develop and construct apartment complexes that combine comfort, security, and modern amenities. Our projects focus on creating vibrant communities with sustainable features.',
      icon: 'apartment',
      images: [
        '/assets/apartment/apartment1.jpg',
        '/assets/apartment/apartment2.jpg',
        '/assets/apartment/apartment3.jpg',
        '/assets/apartment/apartment4.jpg',
        '/assets/apartment/apartment5.jpg'
      ],
      features: ['Modern Amenities', 'Community Spaces', 'Security Systems', 'Sustainable Design']
    },
    {
      id: 4,
      title: 'Industrial Construction',
      description: 'Building robust industrial facilities for maximum efficiency.',
      longDescription: 'Our industrial construction services cover factories, warehouses, and plants. We focus on creating efficient spaces that optimize workflow and meet all safety standards.',
      icon: 'factory',
      images: [
        '/assets/industrial/industrial1.jpg',
        '/assets/industrial/industrial2.jpg',
        '/assets/industrial/industrial3.jpg',
        '/assets/industrial/industrial4.jpg',
        '/assets/industrial/industrial5.jpg'
      ],
      features: ['Factories', 'Warehouses', 'Production Plants', 'Safety Compliance']
    },
    {
      id: 5,
      title: 'Infrastructure Development',
      description: 'Building the foundation of progress.',
      longDescription: 'Our infrastructure projects include roads, bridges, and utility systems. We ensure durability and efficiency in every project while maintaining environmental consciousness.',
      icon: 'engineering',
      images: [
        '/assets/infrastructure/infrastructure1.jpg',
        '/assets/infrastructure/infrastructure2.jpg',
        '/assets/infrastructure/infrastructure3.jpg',
        '/assets/infrastructure/infrastructure4.jpg',
        '/assets/infrastructure/infrastructure5.jpg'
      ],
      features: ['Roads & Bridges', 'Drainage Systems', 'Utility Networks', 'Environmental Compliance']
    },
    {
      id: 6,
      title: 'Interior Design Services',
      description: 'Transforming spaces with creative design solutions.',
      longDescription: 'Our interior design team creates stunning spaces for both residential and commercial properties, focusing on functionality, aesthetics, and client preferences.',
      icon: 'design_services',
      images: [
        '/assets/interior/interior1.jpg',
        '/assets/interior/interior2.jpg',
        '/assets/interior/interior3.jpg',
        '/assets/interior/interior4.jpg',
        '/assets/interior/interior5.jpg'
      ],
      features: ['Residential Design', 'Commercial Spaces', 'Custom Furniture', 'Color Consultation']
    },
    {
      id: 7,
      title: 'Green Building Solutions',
      description: 'Sustainable construction for a better tomorrow.',
      longDescription: 'We specialize in eco-friendly construction methods and sustainable building practices to create environmentally conscious spaces.',
      icon: 'eco',
      images: [
        '/assets/green/green1.jpg',
        '/assets/green/green2.jpg',
        '/assets/green/green3.jpg',
        '/assets/green/green4.jpg',
        '/assets/green/green5.jpg'
      ],
      features: ['Solar Integration', 'Sustainable Materials', 'Energy Efficiency', 'Water Conservation']
    },
    {
      id: 8,
      title: 'Smart Building Systems',
      description: 'Integrating technology for modern living.',
      longDescription: 'From HVAC systems to home automation, we implement smart solutions that enhance comfort and efficiency in both residential and commercial spaces.',
      icon: 'smart_home',
      images: [
        '/assets/smart/smart1.jpg',
        '/assets/smart/smart2.jpg',
        '/assets/smart/smart3.jpg',
        '/assets/smart/smart4.jpg',
        '/assets/smart/smart5.jpg'
      ],
      features: ['HVAC Systems', 'Home Automation', 'Security Systems', 'Energy Management']
    },
    {
      id: 9,
      title: 'Renovation & Maintenance',
      description: 'Revitalizing spaces with modern updates.',
      longDescription: 'Our renovation and maintenance services keep your property in prime condition, from minor updates to major overhauls.',
      icon: 'home_repair_service',
      images: [
        '/assets/renovation/renovation1.jpg',
        '/assets/renovation/renovation2.jpg',
        '/assets/renovation/renovation3.jpg',
        '/assets/renovation/renovation4.jpg',
        '/assets/renovation/renovation5.jpg'
      ],
      features: ['Property Renovation', 'Facility Management', 'Emergency Repairs', 'Preventive Maintenance']
    }
  ];

  const toggleService = (id) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
      setCurrentSlide({ ...currentSlide, [id]: 0 });
    }
  };

  const handleSlideChange = (serviceId, direction) => {
    setCurrentSlide(prev => {
      const service = services.find(s => s.id === serviceId);
      const currentIndex = prev[serviceId] || 0;
      const totalSlides = service.images.length;
      
      let newIndex;
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % totalSlides;
      } else {
        newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      }
      
      return { ...prev, [serviceId]: newIndex };
    });
  };

  // Add a basic test render
  if (error) {
    return (
      <div className="error-container">
        <h1>Something went wrong</h1>
        <p>{error}</p>
      </div>
    );
  }

  // Test if component is rendering at all
  console.log('Rendering Services component structure');

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-description">
            Comprehensive construction and development solutions for every need
          </p>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <div className="services-list">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`service-card ${expandedService === service.id ? 'expanded' : ''}`}
                onClick={() => toggleService(service.id)}
              >
                <div className="service-card-front">
                  <div className="service-icon">
                    <span className="material-icons">{service.icon}</span>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <button className="service-expand-btn">
                    <span className="material-icons">
                      {expandedService === service.id ? 'remove_circle' : 'add_circle'}
                    </span>
                  </button>
                </div>
                
                <div className="service-card-details">
                  <div className="service-image-slider">
                    <button 
                      className="slider-nav prev"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSlideChange(service.id, 'prev');
                      }}
                    >
                      <span className="material-icons">chevron_left</span>
                    </button>
                    <div className="service-image-container">
                      {(service.images || ['/assets/placeholder.jpg']).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${service.title} - Image ${index + 1}`}
                          className={currentSlide[service.id] === index ? 'active' : ''}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = '/assets/placeholder.jpg';
                            e.target.onerror = null;
                          }}
                        />
                      ))}
                    </div>
                    <button 
                      className="slider-nav next"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSlideChange(service.id, 'next');
                      }}
                    >
                      <span className="material-icons">chevron_right</span>
                    </button>
                    <div className="slider-dots">
                      {service.images.map((_, index) => (
                        <button
                          key={index}
                          className={`dot ${currentSlide[service.id] === index ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSlide({ ...currentSlide, [service.id]: index });
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="service-content">
                    <p className="service-long-description">{service.longDescription}</p>
                    <div className="service-features">
                      <h4>Key Features</h4>
                      <ul>
                        {service.features.map((feature, index) => (
                          <li key={index}>
                            <span className="material-icons">check_circle</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/contact" className="btn btn-primary">
                      Enquire Now
                      <span className="material-icons">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Ready to Transform Your Vision into Reality?</h2>
          <p>Let's discuss how we can help you with your next project</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
              <span className="material-icons">send</span>
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              View Our Projects
              <span className="material-icons">visibility</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}