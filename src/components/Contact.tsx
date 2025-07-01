import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Let's Bring Your Vision to Life
            <span className="block text-green-600">in Paradise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your outdoor space? Contact us for a free consultation 
            and let's discuss how we can create your dream tropical garden.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Get in Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+506 8680-2431</p>
                  <p className="text-sm text-gray-500">Available 7 days a week</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">+506 8680-2431</p>
                  <p className="text-sm text-gray-500">Quick responses in English & Spanish</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@nambijardines.com</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Service Area</h4>
                  <p className="text-gray-600">Guanacaste Province, Costa Rica</p>
                  <p className="text-sm text-gray-500">Tamarindo, Flamingo, & surrounding areas</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Chat Button */}
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/50686802431?text=Hello!%20I'm%20interested%20in%20your%20landscaping%20services.%20Could%20you%20please%20provide%20more%20information?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Let's Chat on WhatsApp
              </a>
              <p className="text-sm text-gray-500 mt-3">
                Click to start a conversation with our landscaping expert
              </p>
            </div>

            <div className="mt-12 p-6 bg-green-50 rounded-2xl md:col-span-2 max-w-4xl mx-auto">
              <h4 className="font-semibold text-gray-900 mb-4 text-center">First visit Free Consultation Includes:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  Site visit and assessment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  Personalized design recommendations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  Plant selection guidance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  Detailed project timeline and quote
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;