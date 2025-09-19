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
          <p className="contact-hero-text">Transform Your Vision into Reality with BR Tiger Enterprises</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="contact-title">Let's Build Together</h2>
            <p className="contact-text">
              From conceptualization to completion, we're your trusted partner in construction excellence. 
              Whether you're looking to build your dream home, design an architectural masterpiece, 
              or invest in prime plots, our expert team is here to guide you every step of the way.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="material-icons contact-icon">place</span>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  7-158, NTR Colony Part 7, Tirupati, Andhra Pradesh - 524132, India
                </a>
              </div>
              <div className="contact-item">
                <span className="material-icons contact-icon">phone</span>
                <a href="tel:+919393133331" className="contact-link">+91 9393133331</a>
              </div>
              <div className="contact-item">
                <span className="material-icons contact-icon">mail</span>
                <a href="mailto:contact@brtigerenterprises.com" className="contact-link">contact@brtigerenterprises.com</a>
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
    </>
  )
}
