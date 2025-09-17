import { useState } from 'react';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-text">We'd love to hear from you. Let's build something amazing together.</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-text">
              Have a question or want to discuss a project? We're here to help.
              Reach out to us through any of the following methods.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <span className="material-icons">location_on</span>
                </div>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  123 Business Street, City, State 12345
                </a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <span className="material-icons">phone</span>
                </div>
                <a href="tel:+1234567890" className="contact-link">(123) 456-7890</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <span className="material-icons">email</span>
                </div>
                <a href="mailto:contact@example.com" className="contact-link">contact@example.com</a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <div className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiA3M8KwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="map-overlay"></div>
      </div>
    </>
  )
}