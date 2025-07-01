import React from 'react';
import { Home, Crown, Star } from 'lucide-react';

const Services = () => {
  const packages = [
    {
      icon: Home,
      title: "Essential Garden Package",
      price: "Starting at $250/month",
      description: "Ideal for small residential properties up to 300m². Basic maintenance to keep your garden healthy and beautiful with essential care services.",
      frequency: "Once a Week Service",
      features: [
        "Lawn mowing and edging",
        "Clean-up and debris removal",
        "Basic pruning of shrubs and hedges",
        "Basic plant care and maintenance (not including live fences)"
        
      ],
      popular: false
    },
    {
      icon: Crown,
      title: "Premium Villa Package",
      price: "Starting at $450/month",
      description: "Complete landscaping solution for medium to large properties up to 500m². Perfect for vacation homes and luxury residences that require comprehensive care.",
      frequency: "Once a Week Service",
      features: [
        "Lawn mowing and edging",
        "Clean-up and debris removal",
        "Basic plant care and maintenance (not including live fences)",
        "Monthly fertilization",
        "Pest and disease inspection and management",
        "Full pruning of shrubs and hedges",
        "Spot replanting (up to 2 small plants per month)",
        "Emergency visits (1 per month)"
      ],
      popular: true
    },
    {
      icon: Star,
      title: "VIP Package",
      price: "Starting at $700/month",
      description: "Premium service for large properties up to 1000m². Includes professional agronomist support and the highest level of garden care and maintenance.",
      frequency: "Twice a Week Service",
      features: [
        "Includes all features of the Premium Package +",
        "Full ornamental plant relplacement (uo to 5 plants per month)",
        "Irrigation system maintenance and upgrades",
        "Professional soil testing every 6 months",
        "Deep garden detailing once a month",
        "Monthly agronomist reports( pictures, notes, and recommendations)",
        "Before and after photos for each visit",
        "24/7 Whatsapp support"

        
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully crafted landscaping packages, each designed to meet different needs 
            and budgets while bringing the beauty of Costa Rica to your property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                pkg.popular ? 'ring-2 ring-green-600 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <pkg.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                {pkg.frequency}
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {pkg.title}
              </h3>
              
              <div className="text-3xl font-bold text-green-600 mb-4">
                {pkg.price}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {pkg.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-green-600 hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We'd love to create a personalized package for your unique needs.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;