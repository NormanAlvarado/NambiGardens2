import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Leaf className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-green-600' : 'text-white'
            }`} />
            <span className={`text-xl font-serif font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Nambí Jardines
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Pricing','Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'Pricing' ? 'packages' : item.toLowerCase())}
                className={`font-medium transition-colors duration-300 hover:text-green-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              Get Quote
            </button>
          </nav>

          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg mb-4 p-4">
            {['Home', 'About', 'Pricing', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'Pricing' ? 'packages' : item.toLowerCase())}
                className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              Get Quote
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;