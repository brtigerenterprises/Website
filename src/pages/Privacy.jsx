import '../styles/legal.css';

export default function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-hero">
          <h1>Privacy Policy</h1>
          <p className="legal-subtitle">How we collect, use, and protect your information</p>
        </div>
        
        <div className="legal-content">
          <section className="legal-section">
            <h2>Information We Collect</h2>
            <p>
              At BR Tiger Enterprises, we collect information that you provide directly to us, such as when you:
            </p>
            <ul>
              <li>Contact us through our website or phone</li>
              <li>Request information about our services</li>
              <li>Subscribe to our newsletter</li>
              <li>Visit our properties or offices</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our real estate services</li>
              <li>Communicate with you about our properties and services</li>
              <li>Send you marketing materials (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and the rights of others</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners for joint marketing efforts (with your consent)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="legal-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>File a complaint with regulatory authorities</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> contact@brtigerenterprises.com</p>
              <p><strong>Phone:</strong> +91 9393133331</p>
              <p><strong>Address:</strong> 7-158, NTR Colony Part 7, Tirupati, Andhra Pradesh - 524132, India</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date.
            </p>
            <p className="last-updated">
              <strong>Last updated:</strong> September 20, 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
