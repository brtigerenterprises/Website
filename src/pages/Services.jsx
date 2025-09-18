import '../styles/services.css';

export default function Services() {
  const services = [
    {
      title: 'Property Development',
      description: 'End-to-end real estate development with a focus on quality and innovation.',
      icon: 'building'
    },
    {
      title: 'Construction Services',
      description: 'Professional construction services with attention to detail and timely delivery.',
      icon: 'construction'
    },
    {
      title: 'Interior Design',
      description: 'Modern interior design solutions that blend aesthetics with functionality.',
      icon: 'design_services'
    },
    {
      title: 'Property Management',
      description: 'Comprehensive property management services for peace of mind.',
      icon: 'apartment'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-description">
            Discover our comprehensive range of real estate services tailored to your needs
          </p>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <span className="material-icons">{service.icon}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#" className="service-link">Learn More <span className="material-icons">arrow_forward</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss your real estate needs</p>
          <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </section>
    </div>
  );
}