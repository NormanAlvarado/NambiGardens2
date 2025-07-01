import React from 'react';
import { GraduationCap, Globe, Clock, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: GraduationCap,
      title: "Expert Agronomist",
      description: "Our lead designer is a certified agronomist engineer graduated from Universidad Earth, Costa Rica's premier sustainable agriculture university."
    },
    {
      icon: Globe,
      title: "Native Plant Specialists",
      description: "We specialize in ecological solutions using native Costa Rican plants that require less water and attract local wildlife."
    },
    {
      icon: CheckCircle,
      title: "Fluent English Service",
      description: "Clear communication in English with attention to detail and cultural understanding of American expectations."
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "We respect your time and investment with punctual project completion and transparent communication throughout."
    }
  ];

  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Why Choose Nambí?
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            With deep local knowledge and international standards, we bridge the gap between 
            your vision and Costa Rica's natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <reason.icon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {reason.title}
              </h3>
              
              <p className="text-green-100 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Ready to Transform Your Outdoor Space?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Let us bring our expertise and passion for Costa Rican landscapes to create your own piece of tropical paradise.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;