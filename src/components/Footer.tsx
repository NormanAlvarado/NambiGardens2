import { Leaf, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="text-xl font-serif font-bold">Nambí Jardines</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating sustainable tropical gardens that reflect your vision in the paradise of Guanacaste, Costa Rica.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/50686802431" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
              </a>
              <a 
                href="mailto:nambigardensinfo@gmail.com" 
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#packages" className="hover:text-white transition-colors">Essential Garden Package</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Premium Villa Package</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">VIP Package</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <p className="text-white">+506 8680-2431</p>
                  <p className="text-sm text-gray-400">Available 7 days a week</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <p className="text-white">nambigardensinfo@gmail.com</p>
                  <p className="text-sm text-gray-400">Response within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <p className="text-white">Guanacaste Province</p>
                  <p className="text-sm text-gray-400">Costa Rica</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Nambí Jardines & Diseño. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Professional landscaping services in Guanacaste, Costa Rica
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;