import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Importing placeholder images (to be replaced later)
const heroImage = '/src/assets/hero-image.png';
const feature1 = '/src/assets/feature1.png';
const feature2 = '/src/assets/feature2.png';
const feature3 = '/src/assets/feature3.png';

const features = [
  {
    icon: feature1,
    title: 'Premium Locations',
    description: 'Strategic properties in high-growth areas of Venkatagiri and Tirupati'
  },
  {
    icon: feature2,
    title: 'Quality Assurance',
    description: 'GST-registered company committed to excellence in every project'
  },
  {
    icon: feature3,
    title: 'Customer First',
    description: 'Your satisfaction is our success - our core business philosophy'
  }
];

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '100+', label: 'Happy Clients' },
  { number: '2', label: 'Cities Present' }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              BR TIGER ENTERPRISES
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              "Your Satisfaction is our Success"
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Building dreams into reality with excellence, trust, and innovation in Venkatagiri & Tirupati
            </p>
            <button className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Explore Our Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Why Choose BR Tiger Enterprises?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6">
                  <img src={feature.icon} alt={feature.title} className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with us to explore premium properties and investment opportunities in Venkatagiri and Tirupati
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Schedule Consultation
            </button>
            <button className="border-2 border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors">
              View Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}