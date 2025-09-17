import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">BR TIGER ENTERPRISES</h3>
            <p className="text-sm text-gray-300">"Your Satisfaction is our Success"</p>
            <p className="text-sm text-gray-300 mt-2">Proprietor: Balakrishna Puli</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-accent">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-300 not-italic">
              7-158, NTR Colony Part 7<br />
              Venkatagiri, Tirupati<br />
              Andhra Pradesh - 524132<br />
              India
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>© {currentYear} BR TIGER ENTERPRISES. All rights reserved.</p>
          <p className="mt-1">GST Registered Company</p>
        </div>
      </div>
    </footer>
  )
}