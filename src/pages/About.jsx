import React from 'react';
import '../styles/about.css';

const values = [
  {
    icon: 'diamond',
    title: 'Excellence',
    description: 'We strive for excellence in every project, ensuring the highest quality standards in construction and customer service.'
  },
  {
    icon: 'verified_user',
    title: 'Trust',
    description: 'Building trust through transparent dealings, timely delivery, and maintaining the highest ethical standards.'
  },
  {
    icon: 'lightbulb',
    title: 'Innovation',
    description: 'Embracing modern construction technologies and innovative design solutions for better living spaces.'
  }
];

const timeline = [
  {
    year: '2015',
    title: 'Company Foundation',
    description: 'BR Tiger Enterprises was established with a vision to transform the real estate landscape.'
  },
  {
    year: '2017',
    title: 'First Major Project',
    description: 'Successfully completed our first residential project in Venkatagiri.'
  },
  {
    year: '2019',
    title: 'Expansion to Tirupati',
    description: 'Extended our operations to Tirupati market with premium residential projects.'
  },
  {
    year: '2023',
    title: 'Major Milestone',
    description: 'Completed 50+ successful projects and earned the trust of 100+ happy families.'
  }
];

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">Building Dreams Since 2015</h1>
          <p className="about-hero-subtitle">
            Creating spaces that inspire, built on the foundation of trust and excellence
          </p>
        </div>
      </section>

      <section className="story-section">
        <div className="story-container">
          <img 
            src="/assets/about-story.jpg" 
            alt="BR Tiger Enterprises Journey" 
            className="story-image"
          />
          <div className="story-content">
            <h2 className="section-title">Our Story</h2>
            <p>
              BR Tiger Enterprises began its journey in 2015 with a vision to transform 
              the real estate landscape of Venkatagiri and Tirupati. What started as a 
              dream has now become a testament to excellence in property development.
            </p>
            <br />
            <p>
              Today, we stand proud as one of the region's most trusted real estate 
              developers, having successfully delivered premium residential and commercial 
              projects that have exceeded customer expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <span className="material-icons">{value.icon}</span>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-date">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;